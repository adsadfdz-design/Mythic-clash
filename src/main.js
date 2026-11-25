import { Game, HEROES, ITEMS } from './game.js';

const $ = (id) => document.getElementById(id);
const screens = ['start-screen','draft-screen','shop-screen','score-screen','pause-screen','results-screen'];
let game = null, selectedHero = HEROES[0], hudState = null, activeRole = 'ALL', toastTimer = 0, joystickPointer = null;
const isTouch = matchMedia('(pointer: coarse)').matches || navigator.maxTouchPoints > 0;
const show = (id) => $(id).classList.remove('hidden');
const hide = (id) => $(id).classList.add('hidden');
const formatTime = (v) => { const n=Math.max(0,Math.ceil(v)); return Math.floor(n/60)+':'+String(n%60).padStart(2,'0'); };
const roleNames = ['ALL','Tank','Mage','Assassin','Bruiser','Ranged','Support'];

function notify(message){
  $('toast').textContent=message;show('toast');clearTimeout(toastTimer);toastTimer=setTimeout(()=>hide('toast'),2300);
}
function hideAllScreens(){
  screens.forEach(hide);
}
function renderRoleFilters(){
  $('role-filters').innerHTML=roleNames.map(r=>'<button class="filter-chip '+(r===activeRole?'active':'')+'" data-role="'+r+'">'+r.toUpperCase()+'</button>').join('');
  $('role-filters').querySelectorAll('[data-role]').forEach(b=>b.onclick=()=>{activeRole=b.dataset.role;renderRoleFilters();renderHeroGrid();});
}
function renderHeroGrid(){
  const list=HEROES.filter(h=>activeRole==='ALL'||h.role===activeRole);
  $('hero-grid').innerHTML=list.map(h=>'<button class="hero-card '+(h.id===selectedHero.id?'selected':'')+'" data-hero="'+h.id+'"><span class="hero-mark" style="--hero:'+(' #'+h.color.toString(16).padStart(6,'0'))+'">'+h.name.slice(0,1)+'</span><span class="hero-card-copy"><b>'+h.name+'</b><small>'+h.role.toUpperCase()+'</small></span><span class="hero-card-level">✦</span></button>').join('');
  $('hero-grid').querySelectorAll('[data-hero]').forEach(b=>b.onclick=()=>{selectedHero=HEROES.find(h=>h.id===b.dataset.hero)||HEROES[0];renderHeroGrid();renderHeroDetail();});
}
function renderHeroDetail(){
  const h=selectedHero;
  $('detail-art').style.setProperty('--hero-color','#'+h.color.toString(16).padStart(6,'0'));
  $('detail-art').innerHTML='<span>'+h.name.slice(0,1)+'</span><i class="art-orbit"></i><i class="art-orbit two"></i>';
  $('detail-role').textContent=h.role.toUpperCase();
  $('detail-name').textContent=h.name.toUpperCase();
  $('detail-title').textContent=h.title;
  const stats=[['VITALITY',h.hp/1600],['POWER',h.damage/130],['MOBILITY',h.speed/10],['REACH',h.range/12]];
  $('detail-stats').innerHTML=stats.map(([n,v])=>'<div class="stat-line"><span>'+n+'</span><i><b style="width:'+Math.min(100,v*100)+'%"></b></i></div>').join('');
  $('detail-skills').innerHTML=h.skills.map((s,i)=>'<div class="skill-row"><b>'+['Q','W','E','R'][i]+'</b><span><strong>'+s[0]+'</strong><small>'+s[1].toUpperCase()+' · '+(s[3])+'s cooldown</small></span></div>').join('');
}
function openDraft(){hideAllScreens();show('draft-screen');}
function startMatch(){
  if(!game){
    game=new Game({onHud:updateHud,onFeed:addFeed,onFinish:finishMatch});
    $('game-canvas')?.classList.add('active');
  }
  game.start(selectedHero.id);
  hideAllScreens();['top-hud','left-hud','right-hud','bottom-hud'].forEach(show);
  if(isTouch)show('touch-controls');
  renderHeroDetail();
  $('player-avatar').textContent=selectedHero.name.slice(0,1);
  $('hero-title').textContent=selectedHero.title.toUpperCase();
  notify('Match started — push a lane with your minions.');
}
function addFeed(message){
  const line=document.createElement('div');line.textContent=message;
  $('feed-lines').prepend(line);while($('feed-lines').children.length>5)$('feed-lines').lastElementChild.remove();
}
function updateHud(data){
  if(!data||!data.player)return;hudState=data;
  const p=data.player;
  $('clock').textContent=formatTime(data.time);
  $('ally-core-text').textContent=Math.max(0,Math.ceil(data.cores.ally))+' / 2600';
  $('enemy-core-text').textContent=Math.max(0,Math.ceil(data.cores.enemy))+' / 2600';
  $('ally-core-bar').style.width=Math.max(0,data.cores.ally/2600*100)+'%';
  $('enemy-core-bar').style.width=Math.max(0,data.cores.enemy/2600*100)+'%';
  $('player-name').textContent=p.name.toUpperCase();
  $('player-role').textContent=selectedHero.role.toUpperCase()+' · LVL '+p.level;
  $('hp-text').textContent=Math.ceil(p.hp)+' / '+p.maxHp;
  $('hp-bar').style.width=Math.max(0,p.hp/p.maxHp*100)+'%';
  $('level-text').textContent=p.level;
  $('xp-bar').style.width=Math.min(100,p.xp/Math.max(1,p.nextXp)*100)+'%';
  $('gold-text').textContent=Math.floor(p.gold)+' G';
  $('shield-text').textContent='SHIELD '+Math.floor(p.shield||0);
  $('kd-text').textContent=p.kills+' / '+p.deaths+' / '+p.assists;
  $('inventory-count').textContent=p.inventory.length+' / 6';
  const itemIcons={ironroot:'♥',titans:'⚔',wind:'➤',arcane:'✧',sunfire:'☼',guardian:'⬟',vital:'✚',frost:'❄',bloodfang:'♦',storm:'ϟ',phoenix:'♜',oracle:'◈'};
  $('inventory').innerHTML=Array.from({length:6},(_,i)=>{
    const item=ITEMS.find(x=>x.id===p.inventory[i]);return '<div class="inventory-slot" title="'+(item?.name||'Empty slot')+'">'+(item?itemIcons[item.id]:'·')+'</div>';
  }).join('');
  const towers=data.towers;
  $('ally-towers').textContent=towers.filter(t=>t.team===1&&!t.dead).length+' / 3';
  $('enemy-towers').textContent=towers.filter(t=>t.team===2&&!t.dead).length+' / 3';
  renderAbilities(p);
  drawMinimap(data.map);
  if(!$('shop-screen').classList.contains('hidden'))renderShop();
  if(!$('score-screen').classList.contains('hidden'))renderScoreboard(data.scoreboard);
}
function renderAbilities(p){
  const h=HEROES.find(x=>x.id===selectedHero.id);
  $('abilities').innerHTML=h.skills.map((s,i)=>{
    const key=['Q','W','E','R'][i],cd=Math.ceil(p.cooldowns[key.toLowerCase()]||0);
    return '<button class="ability-button '+(i===3?'ultimate':'')+'" data-skill="'+i+'" '+(cd>0?'disabled':'')+'><b>'+key+'</b><span>'+s[0]+'</span><small>'+(cd>0?cd+'s':(i===3?'35s':'READY'))+'</small></button>';
  }).join('');
  $('abilities').querySelectorAll('[data-skill]').forEach(b=>b.onclick=()=>game?.cast(Number(b.dataset.skill)));
}
function drawMinimap(points=[]){
  const c=$('minimap'),ctx=c.getContext('2d'),w=c.width,h=c.height;
  ctx.clearRect(0,0,w,h);ctx.fillStyle='#172a29';ctx.fillRect(0,0,w,h);
  for(const z of [-18,0,18]){const y=(z+40)/80*h;ctx.fillStyle='#7f806a';ctx.fillRect(6,y-4,w-12,8);}
  ctx.fillStyle='#2e7c83';ctx.fillRect(w/2-3,5,6,h-10);
  ctx.fillStyle='#5aa6ed';ctx.fillRect(3,h/2-5,13,10);ctx.fillStyle='#e16d78';ctx.fillRect(w-16,h/2-5,13,10);
  points.forEach(p=>{const x=(p.x+50)/100*w,y=(p.z+40)/80*h;ctx.fillStyle=p.team===1?'#77bcff':p.team===2?'#ff8791':'#d0aa61';ctx.beginPath();ctx.arc(x,y,p.kind==='hero'?3.2:1.8,0,Math.PI*2);ctx.fill();});
}
function renderShop(){
  if(!hudState)return;
  $('shop-gold').textContent=Math.floor(hudState.player.gold)+' G';
  $('shop-items').innerHTML=ITEMS.map(item=>{
    const owned=hudState.player.inventory.includes(item.id);
    const canBuy=!owned&&hudState.player.gold>=item.cost&&hudState.player.inventory.length<6;
    return '<article class="shop-item '+(owned?'owned':'')+'"><div class="shop-item-icon">'+item.name.slice(0,1)+'</div><div class="shop-item-info"><b>'+item.name+'</b><small>'+item.desc+'</small><strong>'+item.cost+' G</strong></div><button data-buy="'+item.id+'" '+(!canBuy?'disabled':'')+'>'+(owned?'OWNED':canBuy?'BUY':'LOCKED')+'</button></article>';
  }).join('');
  $('shop-items').querySelectorAll('[data-buy]').forEach(b=>b.onclick=()=>{if(game.buyItem(b.dataset.buy))notify('Equipment upgraded.');else notify('Not enough gold or no free slot.');});
}
function renderScoreboard(rows=[]){
  $('score-content').innerHTML='<div class="score-head"><span>CHAMPION</span><span>LVL</span><span>K</span><span>D</span><span>A</span><span>HEALTH</span></div>'+rows.map(r=>'<div class="score-row '+(r.team===1?'blue-row':'red-row')+'"><span><b>'+r.name+'</b><small>'+r.role+'</small></span><span>'+r.level+'</span><span>'+r.kills+'</span><span>'+r.deaths+'</span><span>'+r.assists+'</span><span>'+Math.max(0,Math.round(r.hp))+'</span></div>').join('');
}
function finishMatch(data){
  ['top-hud','left-hud','right-hud','bottom-hud','touch-controls'].forEach(hide);
  show('results-screen');
  const won=data.result==='victory',draw=data.result==='draw';
  $('result-title').textContent=draw?'DRAW':won?'VICTORY':'DEFEAT';
  $('result-title').className=draw?'draw':won?'win':'loss';
  $('result-subtitle').textContent=draw?'Both Cores survived with equal strength.':won?'The Rift Core has fallen. Your alliance holds the realm.':'Your Core has fallen. The Rift has claimed the arena.';
  $('result-stats').innerHTML='<div><b>'+data.stats.kills+'</b><span>KILLS</span></div><div><b>'+data.stats.deaths+'</b><span>DEATHS</span></div><div><b>'+data.stats.assists+'</b><span>ASSISTS</span></div><div><b>'+data.stats.towers+'</b><span>TOWERS</span></div><div><b>'+Math.floor(data.player?.gold||0)+'</b><span>GOLD</span></div><div><b>'+Math.floor((720-data.time)/60)+':'+String(Math.floor((720-data.time)%60)).padStart(2,'0')+'</b><span>DURATION</span></div>';
}
function openShop(){if(!game||!game.running)return;game.setPaused(true);show('shop-screen');renderShop();}
function closeModal(id){hide(id);if(id==='shop-screen'||id==='score-screen')game?.setPaused(false);}
function pauseGame(){if(!game||!game.running||game.ended)return;game.setPaused(true);show('pause-screen');}
function resumeGame(){hide('pause-screen');game?.setPaused(false);}
function restartGame(){hideAllScreens();startMatch();}
function goTitle(){if(game){game.running=false;game.paused=true;}['top-hud','left-hud','right-hud','bottom-hud','touch-controls'].forEach(hide);hideAllScreens();show('start-screen');}
function toggleScore(showIt){if(!game||!game.running||game.ended)return;if(showIt){game.setPaused(true);show('score-screen');renderScoreboard(game.scoreboard());}else closeModal('score-screen');}

$('draft-open').onclick=openDraft;
$('draft-back').onclick=()=>{hide('draft-screen');show('start-screen');};
$('hero-lock').onclick=startMatch;
$('shop-open').onclick=openShop;
$('resume').onclick=resumeGame;
$('restart').onclick=restartGame;
$('leave-match').onclick=goTitle;
$('play-again').onclick=restartGame;
$('result-title-button').onclick=goTitle;
$('score-toggle').onclick=()=>toggleScore(true);
$('quality').onchange=e=>game?.setQuality(e.target.value);
document.querySelectorAll('[data-close]').forEach(b=>b.onclick=()=>closeModal(b.dataset.close));

renderRoleFilters();renderHeroGrid();renderHeroDetail();
window.addEventListener('keydown',e=>{
  const k=e.key.toLowerCase();
  if([' ','tab','arrowup','arrowdown','arrowleft','arrowright'].includes(k))e.preventDefault();
  if(k==='escape'){if(!$('shop-screen').classList.contains('hidden'))closeModal('shop-screen');else if(!$('score-screen').classList.contains('hidden'))closeModal('score-screen');else if(!$('pause-screen').classList.contains('hidden'))resumeGame();else pauseGame();return;}
  if(k==='tab'){toggleScore(true);return;}
  if(k==='b'){openShop();return;}
  if(k===' '){game?.dodge();return;}
  if(['w','a','s','d'].includes(k)&&!(k==='w'&&e.shiftKey))game&& (game.keys[k]=true);
  if(k==='q')game?.cast(0);if(k==='e')game?.cast(2);if(k==='r')game?.cast(3);
  // W is movement; Shift+W casts the second skill.
  if(k==='shift'&&game)game.cast(1);
});
window.addEventListener('keyup',e=>{
  const k=e.key.toLowerCase();if(['w','a','s','d'].includes(k)&&game)game.keys[k]=false;
  if(k==='tab'&&!$('score-screen').classList.contains('hidden'))closeModal('score-screen');
});
window.addEventListener('keydown',e=>{if(e.key.toLowerCase()==='w'&&e.shiftKey){e.preventDefault();game?.cast(1);}});
setInterval(()=>{
  if(!game||!game.player)return;
  game.setMoveVector((game.keys.d?1:0)-(game.keys.a?1:0),(game.keys.s?1:0)-(game.keys.w?1:0));
},32);

function canvasCoordinates(e){game?.setPointer(e.clientX,e.clientY);}
document.addEventListener('pointermove',e=>{if(game&&game.running)canvasCoordinates(e);});
document.addEventListener('contextmenu',e=>{if(game?.running){e.preventDefault();game.setPointer(e.clientX,e.clientY);game.issueMove();}});
document.addEventListener('pointerdown',e=>{
  if(!game?.running||e.target.closest('.hud,.screen,.modal'))return;
  if(e.button===0){game.setPointer(e.clientX,e.clientY);game.primaryAttack();}
});
document.querySelectorAll('[data-skill]').forEach(b=>b.onclick=()=>game?.cast(Number(b.dataset.skill)));
document.querySelectorAll('[data-action]').forEach(b=>b.onclick=()=>{if(b.dataset.action==='attack')game?.primaryAttack();if(b.dataset.action==='dodge')game?.dodge();});

// Touch joystick and mobile action mapping
const zone=$('joystick-zone'),base=$('joystick-base'),knob=$('joystick-knob');
function joystickMove(e){
  const r=base.getBoundingClientRect(),cx=r.left+r.width/2,cy=r.top+r.height/2;
  const dx=e.clientX-cx,dy=e.clientY-cy,dist=Math.hypot(dx,dy),max=r.width*.34,scale=dist>max?max/dist:1;
  const x=dx*scale,y=dy*scale;knob.style.transform='translate('+x+'px,'+y+'px)';
  game?.setTouchVector(x/max,-y/max);
}
zone.addEventListener('pointerdown',e=>{joystickPointer=e.pointerId;zone.setPointerCapture(e.pointerId);joystickMove(e);});
zone.addEventListener('pointermove',e=>{if(joystickPointer===e.pointerId)joystickMove(e);});
const resetStick=()=>{joystickPointer=null;knob.style.transform='translate(0,0)';game?.setTouchVector(0,0);};
zone.addEventListener('pointerup',resetStick);zone.addEventListener('pointercancel',resetStick);
