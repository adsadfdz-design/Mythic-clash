import * as THREE from 'three';

export const HEROES = [
  {id:'bramble',name:'Bramble',title:'Elderbloom Guardian',role:'Tank',color:0x5fa878,hp:1450,damage:68,speed:7.4,range:3.8,skills:[['Root Snare','root',180,8],['Barkguard','shield',0,10],['Vine Charge','dash',210,9],['Elderbloom','aoe',340,35]]},
  {id:'nyxara',name:'Nyxara',title:'Rift Arcanist',role:'Mage',color:0x9d83e8,hp:900,damage:92,speed:8.2,range:10,skills:[['Rift Bolt','bolt',245,7],['Mirror Step','blink',0,9],['Gravity Well','pull',185,12],['Starfall','aoe',470,35]]},
  {id:'korr',name:'Korr',title:'Ashen Assassin',role:'Assassin',color:0xd86b4e,hp:980,damage:118,speed:9.2,range:4.2,skills:[['Cinder Dash','dash',190,7],['Smoke Veil','shield',0,11],['Brand','slow',220,9],['Wildfire Execution','execute',520,35]]},
  {id:'aurelion',name:'Aurelion',title:'Dawn Oathkeeper',role:'Support',color:0xf0c66b,hp:1120,damage:75,speed:8,range:8,skills:[['Solar Lance','bolt',200,7],['Dawn’s Favor','heal',260,10],['Halo Barrier','shield',0,12],['Sunbreak','aoe',350,35]]},
  {id:'vexa',name:'Vexa',title:'Void Witch',role:'Mage',color:0x9a6bc9,hp:920,damage:96,speed:8.1,range:9,skills:[['Hex Missile','bolt',235,7],['Phase Shift','blink',0,9],['Witching Hour','pull',175,12],['Void Bloom','aoe',450,35]]},
  {id:'thorne',name:'Thorne',title:'Briar Warden',role:'Tank',color:0x7b9860,hp:1380,damage:76,speed:7.5,range:4,skills:[['Thorn Spear','bolt',205,7],['Briar Guard','shield',0,10],['Impale','root',190,9],['Verdant Cataclysm','aoe',370,35]]},
  {id:'rurik',name:'Rurik',title:'Iron Mountain',role:'Bruiser',color:0xb17d51,hp:1280,damage:106,speed:7.8,range:4,skills:[['Hammerfall','aoe',180,8],['Iron March','dash',170,10],['Stone Skin','shield',0,11],['Mountain’s Wrath','execute',410,35]]},
  {id:'sable',name:'Sable',title:'Dusk Ranger',role:'Ranged',color:0x61a7b7,hp:900,damage:104,speed:8.7,range:12,skills:[['Piercing Shot','bolt',255,7],['Quickstep','dash',0,8],['Volley','buff',0,11],['Deadeye','execute',480,35]]},
  {id:'ilyra',name:'Ilyra',title:'Frost Oracle',role:'Mage',color:0x81b9dc,hp:920,damage:90,speed:8.1,range:9,skills:[['Frost Shard','bolt',230,7],['Ice Veil','shield',0,10],['Rime Cage','root',185,11],['Whiteout','aoe',405,35]]},
  {id:'morrow',name:'Morrow',title:'Grave Shepherd',role:'Support',color:0x788b98,hp:1110,damage:82,speed:7.9,range:8,skills:[['Grave Bolt','bolt',210,7],['Soul Siphon','heal',230,10],['Dread Field','slow',175,11],['Last Rites','execute',440,35]]},
  {id:'fen',name:'Fen',title:'Moonfang Stalker',role:'Assassin',color:0x8d9d62,hp:970,damage:116,speed:9.1,range:4,skills:[['Pounce','dash',205,7],['Mooncloak','shield',0,10],['Razor Mark','slow',215,9],['Hunt’s End','execute',510,35]]},
  {id:'orla',name:'Orla',title:'Tidecaller',role:'Support',color:0x5dabc0,hp:1120,damage:78,speed:8,range:8,skills:[['Tide Needle','bolt',205,7],['Spring Mend','heal',270,10],['Tidal Ward','shield',0,12],['High Tide','aoe',360,35]]},
  {id:'kael',name:'Kael',title:'Ember Marksman',role:'Ranged',color:0xd78255,hp:930,damage:108,speed:8.6,range:12,skills:[['Ember Arrow','bolt',255,7],['Flare Step','dash',0,8],['Burning Mark','slow',225,11],['Dragonfall','aoe',430,35]]},
  {id:'mirelle',name:'Mirelle',title:'Crystal Savant',role:'Mage',color:0xb4a0db,hp:910,damage:95,speed:8.1,range:9,skills:[['Prism Dart','bolt',235,7],['Refraction','blink',0,9],['Crystal Prison','root',195,11],['Shatterstar','aoe',420,35]]},
  {id:'draz',name:'Draz',title:'Warforged Ravager',role:'Bruiser',color:0xa75f4c,hp:1320,damage:108,speed:7.7,range:4,skills:[['Cleave','aoe',195,8],['Warpath','dash',190,10],['Blood Armor','shield',0,11],['Siege Breaker','execute',430,35]]},
  {id:'pippa',name:'Pippa',title:'Spark Tinkerer',role:'Support',color:0xd9a95b,hp:980,damage:85,speed:8.5,range:8,skills:[['Spark Toss','bolt',210,7],['Pocket Heal','heal',235,10],['Bubble Shield','shield',0,11],['Parade of Sparks','aoe',385,35]]},
  {id:'eidon',name:'Eidon',title:'Aegis Sentinel',role:'Tank',color:0x7899ad,hp:1480,damage:73,speed:7.2,range:4,skills:[['Aegis Strike','aoe',175,8],['Guardian Leap','dash',175,10],['Fortress','shield',0,11],['Divine Verdict','execute',405,35]]},
  {id:'zhara',name:'Zhara',title:'Dune Mirage',role:'Mage',color:0xc6a06a,hp:930,damage:92,speed:8.3,range:9,skills:[['Sand Lance','bolt',225,7],['Mirage','blink',0,9],['Quicksand','slow',180,11],['Dune Collapse','aoe',420,35]]},
  {id:'oren',name:'Oren',title:'Banner Captain',role:'Bruiser',color:0x8b9e77,hp:1260,damage:100,speed:7.8,range:4,skills:[['Shield Bash','dash',160,8],['Veteran’s Guard','shield',0,10],['Rally','heal',190,11],['Colossus Smash','aoe',405,35]]},
  {id:'varka',name:'Varka',title:'Umbral Blade',role:'Assassin',color:0x9b6680,hp:960,damage:120,speed:9.3,range:4,skills:[['Night Cut','dash',210,7],['Shadow Mantle','shield',0,10],['Venom Sigil','slow',220,9],['Silent End','execute',530,35]]},
  {id:'selene',name:'Selene',title:'Moonlit Archer',role:'Ranged',color:0x9eaddd,hp:910,damage:105,speed:8.7,range:12,skills:[['Moon Arrow','bolt',250,7],['Silverstep','dash',0,8],['Lunar Bind','root',180,11],['Eclipse','aoe',425,35]]},
  {id:'grom',name:'Grom',title:'Stoneback Colossus',role:'Tank',color:0x888e87,hp:1510,damage:76,speed:7.1,range:4,skills:[['Boulder Toss','bolt',205,8],['Rampart','shield',0,10],['Quake Stomp','aoe',190,11],['Worldbreaker','execute',420,35]]},
  {id:'amara',name:'Amara',title:'Wildheart Druid',role:'Support',color:0x80b37a,hp:1080,damage:82,speed:8.2,range:8,skills:[['Bloom Bolt','bolt',205,7],['Lifebloom','heal',260,10],['Petal Ward','shield',0,11],['Eternal Spring','aoe',370,35]]}
];

export const ITEMS = [
  {id:'ironroot',name:'Ironroot Heart',cost:450,desc:'+260 max health',stats:{hp:260}},
  {id:'titans',name:'Titan Edge',cost:520,desc:'+22 attack damage',stats:{damage:22}},
  {id:'wind',name:'Wind Treads',cost:390,desc:'+1.4 movement speed',stats:{speed:1.4}},
  {id:'arcane',name:'Arcane Core',cost:480,desc:'+18 skill power',stats:{power:18}},
  {id:'sunfire',name:'Sunfire Lens',cost:540,desc:'+15 attack damage, +10 skill power',stats:{damage:15,power:10}},
  {id:'guardian',name:'Guardian Plate',cost:500,desc:'+18 armor',stats:{armor:18}},
  {id:'vital',name:'Vital Bloom',cost:430,desc:'+4 health regeneration',stats:{regen:4}},
  {id:'frost',name:'Frost Sigil',cost:510,desc:'+12 power, slows basic attacks',stats:{power:12,slow:1}},
  {id:'bloodfang',name:'Bloodfang',cost:560,desc:'+12% lifesteal',stats:{lifesteal:.12}},
  {id:'storm',name:'Stormglass',cost:500,desc:'-12% ability cooldowns',stats:{haste:.12}},
  {id:'phoenix',name:'Phoenix Seal',cost:590,desc:'+180 health, +12 armor',stats:{hp:180,armor:12}},
  {id:'oracle',name:'Oracle’s Eye',cost:475,desc:'+24 skill power',stats:{power:24}}
];

const LANES = [-18,0,18];
const clamp = (v,a,b)=>Math.max(a,Math.min(b,v));
const vec = (x=0,z=0)=>new THREE.Vector3(x,0,z);

export class Game {
  constructor({onHud=()=>{},onFeed=()=>{},onFinish=()=>{}}={}) {
    this.onHud=onHud; this.onFeed=onFeed; this.onFinish=onFinish;
    this.scene=new THREE.Scene(); this.scene.background=new THREE.Color(0x101b25);
    this.scene.fog=new THREE.Fog(0x101b25,62,112);
    this.camera=new THREE.PerspectiveCamera(43,innerWidth/innerHeight,.1,180);
    this.camera.position.set(-3,54,42); this.camera.lookAt(0,0,0);
    this.renderer=new THREE.WebGLRenderer({antialias:true,alpha:false});
    this.renderer.setPixelRatio(Math.min(devicePixelRatio||1,1.7));
    this.renderer.setSize(innerWidth,innerHeight);
    this.renderer.shadowMap.enabled=true;
    this.renderer.shadowMap.type=THREE.PCFSoftShadowMap;
    this.renderer.domElement.id='game-canvas';
    document.body.prepend(this.renderer.domElement);
    this.scene.add(new THREE.HemisphereLight(0xcdeaff,0x293b30,1.75));
    const sun=new THREE.DirectionalLight(0xffe6c4,2.2); sun.position.set(-28,42,22); sun.castShadow=true;
    sun.shadow.mapSize.set(1024,1024); sun.shadow.camera.left=-55; sun.shadow.camera.right=55; sun.shadow.camera.top=45; sun.shadow.camera.bottom=-45;
    this.scene.add(sun);
    this.raycaster=new THREE.Raycaster(); this.pointer=new THREE.Vector2(); this.groundPlane=new THREE.Plane(new THREE.Vector3(0,1,0),0);
    this.units=[]; this.structures=[]; this.effects=[]; this.trees=[]; this.materials=[]; this.pings=[]; this.textures={}; this._loadTextures();
    this.keys={}; this.moveVector=vec(); this.touchVector=vec(); this.moveOrder=null; this.aim=vec(0,0);
    this.player=null; this.selectedTarget=null; this.time=720; this.running=false; this.paused=false; this.ended=false;
    this.goldTimer=0; this.waveTimer=0; this.hudTimer=0; this.stats={kills:0,deaths:0,assists:0,towers:0,goldEarned:0};
    this.quality='high'; this._buildArena(); this.renderer.setAnimationLoop(t=>this._frame(t));
    addEventListener('resize',()=>this._resize());
  }

  _loadTextures(){
    const loader=new THREE.TextureLoader();
    ['terrain','armor','cloth','leather','metal','crystal','stone','bark','moss','wood','water','ash','sand','lava','rune'].forEach(name=>{
      const texture=loader.load(new URL('../assets/textures/'+name+'.svg',import.meta.url).href,()=>{
        this.materials.filter(m=>m.userData.textureName===name).forEach(m=>{m.map=texture;m.needsUpdate=true;});
      });
      texture.wrapS=texture.wrapT=THREE.RepeatWrapping;
      texture.colorSpace=THREE.SRGBColorSpace;
      texture.anisotropy=Math.min(4,this.renderer.capabilities.getMaxAnisotropy());
      texture.repeat.set(2,2); this.textures[name]=texture;
    });
  }
  _mat(color,roughness=.82,metalness=0,textureName=''){
    const material=new THREE.MeshStandardMaterial({color,roughness,metalness,map:textureName?this.textures[textureName]||null:null});
    if(textureName)material.userData.textureName=textureName;
    this.materials.push(material);return material;
  }
  _box(x,z,w,d,h,color,group=this.scene,textureName=''){const m=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),this._mat(color,.82,0,textureName));m.position.set(x,h/2,z);m.castShadow=true;m.receiveShadow=true;group.add(m);return m;}
  _buildArena(){
    const ground=new THREE.Mesh(new THREE.PlaneGeometry(104,82),this._mat(0x71846a,.96,0,'terrain')); ground.rotation.x=-Math.PI/2; ground.receiveShadow=true; this.scene.add(ground);
    LANES.forEach((z,i)=>{this._box(0,z,96,5.8,.18,i===1?0x8b8876:0x777d70,this.scene,'stone'); for(let x=-45;x<46;x+=5.2)this._box(x,z,.16,.23,.025,0xc1b99a);});
    this._box(0,0,4.2,78,.12,0x256b76);
    LANES.forEach(z=>{this._box(0,z,6.3,6.2,.26,0x846b4e,this.scene,'wood'); for(let k=-2;k<=2;k++)this._box(k,z,.12,5.8,.29,0xd0b78f,this.scene,'wood');});
    for(const z of [-29,29]){
      const pond=new THREE.Mesh(new THREE.CircleGeometry(5,24),this._mat(0x4d8d98,.28,.2,'water')); pond.rotation.x=-Math.PI/2; pond.position.set(0,.04,z); this.scene.add(pond);
      for(let i=0;i<7;i++){const a=i/7*Math.PI*2;const rock=new THREE.Mesh(new THREE.DodecahedronGeometry(.75+Math.random()*.45),this._mat(0x56665f));rock.position.set(Math.cos(a)*6,.55,z+Math.sin(a)*6);rock.castShadow=true;this.scene.add(rock);}
      const rune=new THREE.Mesh(new THREE.TorusGeometry(4.2,.08,6,36),this._mat(0x65b8b1,.36,.25,'rune'));rune.rotation.x=Math.PI/2;rune.position.set(0,.12,z);this.scene.add(rune);
      this._box(-19,z,10,8,.06,0x9c805b,this.scene,'sand');
      this._box(19,z,10,8,.06,z<0?0x645754:0x503d37,this.scene,z<0?'ash':'lava');
    }
    for(let i=0;i<68;i++){
      const x=(Math.random()-.5)*96,z=(Math.random()-.5)*70;
      if(Math.abs(z)<22 || Math.abs(x)<7 || Math.abs(x)>47)continue;
      const t=new THREE.Group();t.position.set(x,0,z);
      const trunk=new THREE.Mesh(new THREE.CylinderGeometry(.18,.28,2.2,6),this._mat(0x6f4e35,.92,0,'bark'));trunk.position.y=1.1;t.add(trunk);
      const crown=new THREE.Mesh(new THREE.ConeGeometry(1.4,3.4,7),this._mat(i%2?0x477d50:0x5d8955,.96,0,'moss'));crown.position.y=3.1;crown.castShadow=true;t.add(crown);this.scene.add(t);this.trees.push(t);
    }
    for(const side of [-1,1]) for(const z of LANES)this._box(side*35,z,.35,.35,4,side<0?0x64a8e8:0xe36b76);
  }

  _makeHeroMesh(hero,team){
    const g=new THREE.Group(); const teamColor=team===1?0x4e9be9:0xe56872;
    const metal=this._mat(0xd2c7a8,.38,.42,'metal');
    const hide=this._mat(hero.color,.64,.04,'leather');
    const cloth=this._mat(hero.color,.92,0,'cloth');
    const crystal=this._mat(hero.color,.22,.35,'crystal');
    const skin=this._mat(0xe4c6a3);
    const teamMat=this._mat(teamColor,.55,.1,'armor');
    const body=new THREE.Mesh(new THREE.CapsuleGeometry(.68,.92,5,9),teamMat);body.position.y=1.08;body.castShadow=true;g.add(body);
    const chest=new THREE.Mesh(new THREE.BoxGeometry(1.12,.82,.88),hide);chest.position.y=1.42;chest.castShadow=true;g.add(chest);
    const head=new THREE.Mesh(new THREE.SphereGeometry(.42,14,12),skin);head.position.y=2.18;head.castShadow=true;g.add(head);
    const hood=new THREE.Mesh(new THREE.SphereGeometry(.52,12,10,0,Math.PI*2,0,Math.PI*.56),cloth);hood.position.y=2.25;g.add(hood);
    const shoulders=new THREE.Mesh(new THREE.BoxGeometry(1.55,.42,.92),this._mat(hero.color,.55,.15,'armor'));shoulders.position.y=1.72;shoulders.castShadow=true;g.add(shoulders);
    const belt=new THREE.Mesh(new THREE.TorusGeometry(.5,.09,6,18),metal);belt.position.y=.98;belt.rotation.x=Math.PI/2;g.add(belt);
    const cape=new THREE.Mesh(new THREE.ConeGeometry(.78,1.5,5,1,true),cloth);cape.position.set(0,1.35,-.55);cape.rotation.x=-.28;g.add(cape);
    const add=(geometry,material,x,y,z,rx=0,ry=0,rz=0,sx=1,sy=1,sz=1)=>{
      const m=new THREE.Mesh(geometry,material);m.position.set(x,y,z);m.rotation.set(rx,ry,rz);m.scale.set(sx,sy,sz);m.castShadow=true;g.add(m);return m;
    };
    const blade=(x,z,angle=0)=>{
      add(new THREE.BoxGeometry(.13,.16,1.55),metal,x,1.05,z,.2,0,angle);
      add(new THREE.ConeGeometry(.12,.38,5),crystal,x,1.05,z+.92,.2,0,angle+Math.PI);
    };
    const spike=(x,y,z,size=.45,rotation=0)=>add(new THREE.ConeGeometry(size,.95,5),hide,x,y,z,0,0,rotation);
    // Every hero receives a bespoke silhouette hook, not just a recoloured shared rig.
    switch(hero.id){
      case 'bramble':
        for(const s of [-1,1]){spike(s*.56,2.65,-.12,.55,s*.55);add(new THREE.CylinderGeometry(.075,.16,1.1,6),hide,s*.83,1.75,-.14,0,0,s*.55);}
        add(new THREE.TorusGeometry(.76,.08,6,22),hide,0,2.2,0,Math.PI/2);
        for(let i=0;i<3;i++)spike(-.48+i*.48,.9,.58,.2);
        break;
      case 'nyxara':
        add(new THREE.TorusGeometry(.92,.11,8,32),crystal,0,2.82,-.1,.3,0,0);
        for(let i=0;i<4;i++){const a=i*Math.PI/2;add(new THREE.OctahedronGeometry(.3),crystal,Math.cos(a)*1.05,2.85,Math.sin(a)*.75,0,a,0);}
        add(new THREE.CylinderGeometry(.045,.075,2.4,7),metal,.82,1.2,0,0,0,-.2);
        break;
      case 'korr':
        blade(-.82,.2,-.35);blade(.82,.2,.35);
        for(const s of [-1,1])spike(s*.5,2.75,-.15,.35,s*.5);
        add(new THREE.ConeGeometry(.6,1.1,5),hide,0,2.6,-.5,Math.PI,0,0);
        break;
      case 'aurelion':
        add(new THREE.TorusGeometry(.72,.12,8,24),crystal,0,2.95,0,0,0,0);
        for(let i=0;i<8;i++){const a=i*Math.PI/4;spike(Math.cos(a)*.9,2.95+Math.sin(a)*.28,0,.23,a);}
        for(const s of [-1,1])add(new THREE.ConeGeometry(.38,1.5,5),metal,s*.9,1.95,-.35,0,0,s*.45);
        break;
      case 'vexa':
        add(new THREE.TorusGeometry(.72,.1,8,24,Math.PI*1.45),crystal,0,2.75,0,0,0,-.7);
        for(const s of [-1,1])add(new THREE.OctahedronGeometry(.38),crystal,s*.92,1.8,.12,.3,0,.2);
        add(new THREE.CylinderGeometry(.05,.08,2.5,7),metal,.83,1.25,0,0,0,-.18);
        break;
      case 'thorne':
        for(const s of [-1,1]){spike(s*.8,2.05,-.15,.58,s*.6);spike(s*.55,2.6,-.2,.38,s*.5);}
        add(new THREE.TorusGeometry(.88,.12,7,24),hide,0,1.55,0,Math.PI/2);
        break;
      case 'rurik':
        add(new THREE.BoxGeometry(.65,.65,1.8),metal,1,1.4,0,0,0,-.25);
        add(new THREE.BoxGeometry(.9,.85,.8),hide,1.35,1.4,0);
        add(new THREE.CylinderGeometry(.18,.28,1.1,7),metal,1,2.05,0,0,0,-.25);
        add(new THREE.TorusGeometry(.85,.12,6,18),metal,0,2.55,0,Math.PI/2);
        break;
      case 'sable': case 'kael': case 'selene':
        add(new THREE.TorusGeometry(.78,.075,7,24,Math.PI*1.3),metal,.95,1.5,0,0,0,Math.PI/2);
        add(new THREE.CylinderGeometry(.045,.07,1.8,6),hide,.95,1.5,0,0,0,.5);
        add(new THREE.ConeGeometry(.13,.38,5),crystal,.95,2.55,0);
        add(new THREE.BoxGeometry(1.15,.09,.12),metal,.95,1.5,0);
        break;
      case 'ilyra': case 'mirelle': case 'zhara':
        add(new THREE.TorusGeometry(.78,.09,7,24),crystal,0,2.78,0,.35,0,.25);
        for(const s of [-1,1])add(new THREE.OctahedronGeometry(.3),crystal,s*.8,2.05,.08,0,0,.4);
        add(new THREE.CylinderGeometry(.045,.08,2.35,7),metal,.82,1.18,0,0,0,-.25);
        break;
      case 'morrow':
        add(new THREE.ConeGeometry(.72,1.7,5),cloth,0,2.1,-.52,Math.PI,0,0);
        add(new THREE.TorusGeometry(.62,.08,7,22),crystal,0,2.6,0,.5,0,0);
        add(new THREE.CylinderGeometry(.06,.09,2.7,6),hide,.86,1.2,0,0,0,-.2);
        break;
      case 'fen': case 'varka':
        blade(-.82,.15,-.42);blade(.82,.15,.42);
        for(const s of [-1,1])add(new THREE.ConeGeometry(.22,.9,5),hide,s*.48,2.55,-.12,0,0,s*.5);
        add(new THREE.ConeGeometry(.65,1.05,5),cloth,0,2.4,-.58,Math.PI,0,0);
        break;
      case 'orla': case 'amara': case 'pippa':
        add(new THREE.TorusGeometry(.85,.09,7,24),crystal,0,2.78,0,.5,0,0);
        for(let i=0;i<5;i++){const a=i*Math.PI*2/5;add(new THREE.SphereGeometry(.2,8,6),crystal,Math.cos(a)*.9,2.8,Math.sin(a)*.55);}
        add(new THREE.CylinderGeometry(.055,.08,2.2,7),hide,.85,1.15,0,0,0,-.25);
        break;
      case 'draz':
        for(const s of [-1,1]){spike(s*.9,1.85,-.1,.62,s*.5);spike(s*.55,2.6,-.2,.42,s*.45);}
        add(new THREE.BoxGeometry(1.9,.32,.75),metal,0,2.03,-.15);
        blade(1.1,.1,-.2);
        break;
      case 'eidon': case 'grom': case 'oren':
        add(new THREE.BoxGeometry(.22,1.55,1.15),metal,-.95,1.2,.12,0,0,-.15);
        add(new THREE.TorusGeometry(.62,.13,7,20),hide,-.95,1.3,.12,Math.PI/2);
        if(hero.id==='grom'){spike(-.55,2.65,-.1,.58,-.4);spike(.55,2.65,-.1,.58,.4);}
        if(hero.id==='oren')add(new THREE.BoxGeometry(.18,1.8,.18),hide,.88,1.65,0,0,0,.3);
        break;
    }
    // Team-colour shoulder marks stay readable even under the hero's own palette.
    add(new THREE.BoxGeometry(.28,.23,.12),this._mat(teamColor,.4,.15),0,1.76,.53);
    const ring=new THREE.Mesh(new THREE.RingGeometry(.9,1.12,32),this._mat(team===1?0x7bbafa:0xff8b8e));ring.rotation.x=-Math.PI/2;ring.position.y=.055;g.add(ring);
    return g;
  }
  _makeMinionMesh(team){
    const g=new THREE.Group();const color=team===1?0x5ba4e7:0xe16b75;
    const body=new THREE.Mesh(new THREE.CapsuleGeometry(.32,.42,4,6),this._mat(color,.78,0,'armor'));body.position.y=.63;g.add(body);
    const head=new THREE.Mesh(new THREE.SphereGeometry(.22,8,6),this._mat(0xd9c4aa,.8,0,'leather'));head.position.y=1.25;g.add(head);
    const helm=new THREE.Mesh(new THREE.ConeGeometry(.22,.42,5),this._mat(team===1?0x9dc9f1:0xf0a2a7,.45,.18,'metal'));helm.position.y=1.55;g.add(helm);
    return g;
  }

  _spawnHero(heroId,team,lane=1,isPlayer=false){
    const hero=HEROES.find(h=>h.id===heroId)||HEROES[0];
    const g=this._makeHeroMesh(hero,team);g.position.set(team===1?-37:37,0,LANES[lane]+(isPlayer?0:(Math.random()-.5)*2));
    this.scene.add(g);
    const u={id:hero.id+'-'+team+'-'+Math.random().toString(36).slice(2,8),heroId,name:hero.name,role:hero.role,team,kind:'hero',lane,g,hp:hero.hp,maxHp:hero.hp,damage:hero.damage,baseDamage:hero.damage,power:hero.damage*.72,speed:hero.speed,range:hero.range,attackRate:.58,attackTimer:0,shield:0,shieldTimer:0,slowTimer:0,rootTimer:0,stunTimer:0,respawnTimer:0,dead:false,level:1,xp:0,gold:350,inventory:[],armor:0,regen:0,lifesteal:0,haste:0,bonusHp:0,cooldowns:{},stats:{kills:0,deaths:0,assists:0},isPlayer,botMode:isPlayer?'player':(team===1?'ally':'enemy'),buffTimer:0,markTimer:0};
    this.units.push(u); return u;
  }

  _spawnMinion(team,lane){
    const g=this._makeMinionMesh(team);const dir=team===1?1:-1;g.position.set(team===1?-39:39,0,LANES[lane]+(Math.random()-.5)*1.5);this.scene.add(g);
    const u={id:'minion-'+team+'-'+Math.random(),name:team===1?'Alliance Minion':'Rift Minion',team,kind:'minion',lane,g,hp:185,maxHp:185,damage:24,speed:3.5,range:2.3,attackRate:1.05,attackTimer:Math.random(),dead:false,dir,xp:0,gold:22,respawnTimer:0};
    this.units.push(u);return u;
  }

  _spawnCamp(z){
    const g=new THREE.Group();const core=new THREE.Mesh(new THREE.DodecahedronGeometry(1.25,1),this._mat(0x6f817e,.45,.25,'crystal'));core.position.y=1.4;core.castShadow=true;g.add(core);
    const horn=new THREE.Mesh(new THREE.ConeGeometry(.35,.8,6),this._mat(0xb4a18b,.48,.22,'metal'));horn.position.set(.85,2,0);g.add(horn);
    g.position.set(0,0,z);this.scene.add(g);
    const c={id:'camp-'+z,name:'Ancient Grove Beast',kind:'camp',team:0,lane:z<0?0:2,g,hp:950,maxHp:950,damage:42,speed:0,range:3.3,attackRate:1.3,attackTimer:0,dead:false,respawnTimer:0,gold:180,xp:210};
    this.units.push(c);return c;
  }

  _spawnStructure(kind,team,lane){
    const g=new THREE.Group();const color=team===1?0x4d91d2:0xc85b68;
    if(kind==='tower'){
      const base=new THREE.Mesh(new THREE.CylinderGeometry(1.05,1.35,1.2,8),this._mat(0x555d61,.78,.05,'stone'));base.position.y=.6;g.add(base);
      const shaft=new THREE.Mesh(new THREE.CylinderGeometry(.55,.8,3.1,8),this._mat(color,.62,.12,'armor'));shaft.position.y=2.65;shaft.castShadow=true;g.add(shaft);
      const crystal=new THREE.Mesh(new THREE.OctahedronGeometry(.76),this._mat(team===1?0x9edaff:0xff9da8,.25,.35,'crystal'));crystal.position.y=4.55;g.add(crystal);
      const ring=new THREE.Mesh(new THREE.TorusGeometry(1.45,.09,6,24),this._mat(color,.4,.4,'metal'));ring.rotation.x=Math.PI/2;ring.position.y=.08;g.add(ring);
    }else{
      const plinth=new THREE.Mesh(new THREE.CylinderGeometry(2.3,3,1.2,8),this._mat(team===1?0x526c50:0x60413b,.76,.08,team===1?'moss':'lava'));plinth.position.y=.6;g.add(plinth);
      const crystal=new THREE.Mesh(new THREE.OctahedronGeometry(2.2,1),this._mat(team===1?0x55b7ec:0xee6479,.25,.35,'crystal'));crystal.position.y=3.15;crystal.castShadow=true;g.add(crystal);
      const halo=new THREE.Mesh(new THREE.TorusGeometry(3.1,.11,8,32),this._mat(color,.4,.4,'metal'));halo.position.y=1.25;g.add(halo);
    }
    const x=team===1?(kind==='tower'?-23:-45):(kind==='tower'?23:45),z=kind==='core'?0:LANES[lane];
    g.position.set(x,0,z);this.scene.add(g);
    const s={id:kind+'-'+team+'-'+lane,name:kind==='core'?'Core':(team===1?'Alliance':'Rift')+' Tower',kind,team,lane,g,hp:kind==='core'?2600:850,maxHp:kind==='core'?2600:850,attackTimer:0,dead:false,range:kind==='tower'?12:0,damage:kind==='tower'?60:0,attackRate:1.2};
    this.structures.push(s);return s;
  }

  start(heroId='bramble'){
    this._clearMatch();
    this.player=this._spawnHero(heroId,1,1,true);
    ['nyxara','aurelion'].forEach((id,i)=>this._spawnHero(id,1,i===0?0:2,false));
    ['korr','rurik','sable'].forEach((id,i)=>this._spawnHero(id,2,i,false));
    for(const t of [0,1,2]){this._spawnStructure('tower',1,t);this._spawnStructure('tower',2,t);}
    this.allyCore=this._spawnStructure('core',1,1);this.enemyCore=this._spawnStructure('core',2,1);
    this._spawnCamp(-29);this._spawnCamp(29);
    this.time=720;this.running=true;this.paused=false;this.ended=false;this.goldTimer=0;this.waveTimer=0;this.stats={kills:0,deaths:0,assists:0,towers:0,goldEarned:0};
    LANES.forEach((_,lane)=>{for(let i=0;i<3;i++){this._spawnMinion(1,lane);this._spawnMinion(2,lane);}});
    this.onFeed('Match started. Protect your Core and push a lane.');this._emitHud();
  }

  _clearMatch(){
    for(const u of this.units)this.scene.remove(u.g);
    for(const s of this.structures)this.scene.remove(s.g);
    for(const e of this.effects)this.scene.remove(e.mesh);
    this.units=[];this.structures=[];this.effects=[];this.camps=[];this.player=null;this.selectedTarget=null;this.moveOrder=null;
  }
  setMoveVector(x,z){this.moveVector.set(x,0,z);if(this.moveVector.length()>1)this.moveVector.normalize();}
  setTouchVector(x,z){this.touchVector.set(x,0,z);if(this.touchVector.length()>1)this.touchVector.normalize();}
  setPointer(clientX,clientY){
    const rect=this.renderer.domElement.getBoundingClientRect();
    this.pointer.set((clientX-rect.left)/rect.width*2-1,-((clientY-rect.top)/rect.height)*2+1);
    this.raycaster.setFromCamera(this.pointer,this.camera);
    const p=new THREE.Vector3();if(this.raycaster.ray.intersectPlane(this.groundPlane,p))this.aim.copy(p);
  }
  issueMove(){if(!this.player||this.player.dead)return;this.moveOrder=vec(clamp(this.aim.x,-47,47),clamp(this.aim.z,-34,34));this.selectedTarget=null;}
  primaryAttack(){
    if(!this.player||this.player.dead)return;
    const nearby=[...this._hostiles(this.player.team),...this.units.filter(u=>u.kind==='camp'&&!u.dead)].filter(u=>u.kind==='hero'||u.kind==='minion'||u.kind==='tower'||u.kind==='core'||u.kind==='camp').sort((a,b)=>a.g.position.distanceTo(this.aim)-b.g.position.distanceTo(this.aim));
    const candidate=nearby[0]&&nearby[0].g.position.distanceTo(this.aim)<5?nearby[0]:this._nearestEnemy(this.player,13);
    this.selectedTarget=candidate||null;if(!candidate)this.issueMove();
  }
  _hostiles(team){return [...this.units,...this.structures].filter(u=>!u.dead&&u.team!==0&&u.team!==team);}
  _nearestCamp(from,range=18){return this.units.filter(u=>u.kind==='camp'&&!u.dead&&u.g.position.distanceTo(from.g.position)<range).sort((a,b)=>a.g.position.distanceTo(from.g.position)-b.g.position.distanceTo(from.g.position))[0]||null;}
  _nearestEnemy(from,range=12,includeMinions=true){
    return this._hostiles(from.team).filter(u=>u.kind!=='core'&&u.kind!=='tower'&&(includeMinions||u.kind!=='minion')&&u.hp>0&&u.g.position.distanceTo(from.g.position)<range)
      .sort((a,b)=>{const priority=u=>u.kind==='hero'?0:1;return priority(a)-priority(b)||(a.hp/a.maxHp)-(b.hp/b.maxHp)||a.g.position.distanceTo(from.g.position)-b.g.position.distanceTo(from.g.position);})[0]||null;
  }
  _nearestAlly(from,range=12){
    return this.units.filter(u=>!u.dead&&u.team===from.team&&u.kind==='hero'&&u!==from&&u.hp<u.maxHp&&u.g.position.distanceTo(from.g.position)<range).sort((a,b)=>a.hp/a.maxHp-b.hp/b.maxHp)[0]||from;
  }
  _towerFor(team,lane){return this.structures.find(s=>s.kind==='tower'&&s.team===team&&s.lane===lane&&!s.dead)||null;}
  _coreFor(team){return this.structures.find(s=>s.kind==='core'&&s.team===team)||null;}
  _laneTarget(team,lane){const opposing=team===1?2:1;return this._towerFor(opposing,lane)||this._coreFor(opposing);}

  _damage(target,amount,source){
    if(!target||target.dead||amount<=0||target.invulnTimer>0)return;
    if(target.kind==='core'&&source?.team&&this._towerFor(target.team,source.lane))return;
    if(target.shield>0){const absorbed=Math.min(target.shield,amount);target.shield-=absorbed;amount-=absorbed;}
    if(amount<=0)return;
    const armor=target.armor||0;const actual=Math.max(1,amount*(100/(100+armor)));target.hp-=actual;
    this._burst(target.g.position.clone().add(vec(0,1.4)),source?.team===1?0x8ecaff:0xffa0a0,.18);
    if(target.hp<=0)this._kill(target,source);
  }

  _kill(target,source){
    target.hp=0;target.dead=true;
    if(target.kind==='hero'){
      target.respawnTimer=5;target.stats.deaths++;
      if(source&&source.kind==='hero'){source.stats.kills++;source.gold+=190;source.xp+=170;if(source.isPlayer){this.stats.kills++;this.stats.goldEarned+=190;}}
      this.onFeed((source?.name||'A unit')+' defeated '+target.name+'.');
      if(target.isPlayer){this.stats.deaths++;this.onFeed('You will respawn in 5 seconds.');}
      else if(source?.team===1&&source.kind==='hero'&&source!==this.player){this.player.gold+=45;this.player.xp+=45;}
      this._assistRewards(source,target);target.g.visible=false;
    }else if(target.kind==='minion'){
      const reward=target.gold||22;
      if(source?.kind==='hero'){source.gold+=reward;source.xp+=24;if(source.isPlayer)this.stats.goldEarned+=reward;}
      if(source?.team)this.units.filter(u=>u.kind==='hero'&&u.team===source.team&&!u.dead&&u.g.position.distanceTo(target.g.position)<16).forEach(u=>{if(u!==source)u.xp+=10;});
      target.g.visible=false;this.scene.remove(target.g);
    }else if(target.kind==='camp'){
      target.g.visible=false;target.respawnTimer=55;this.onFeed('Grove camp captured: team gold, experience and a 24-second blessing.');
      const rewardTeam=source?.team||0;
      if(rewardTeam){const teamHeroes=this.units.filter(u=>u.team===rewardTeam&&u.kind==='hero');teamHeroes.forEach(u=>{u.gold+=90;u.xp+=target.xp;u.campBuffTimer=24;});if(rewardTeam===1)this.stats.goldEarned+=90*teamHeroes.length;}
    }else if(target.kind==='tower'){
      this.scene.remove(target.g);
      if(source?.team){const teamHeroes=this.units.filter(u=>u.team===source.team&&u.kind==='hero');teamHeroes.forEach(u=>{u.gold+=60;u.xp+=90;});if(source.team===1){this.stats.towers++;this.stats.goldEarned+=180;}}
      this.onFeed((target.team===1?'Alliance':'Rift')+' tower destroyed on '+['top','middle','bottom'][target.lane]+' lane.');
    }else if(target.kind==='core'){this.scene.remove(target.g);this._finish(target.team===1?'defeat':'victory');}
  }

  _assistRewards(source,target){
    if(!source||source.team===0)return;
    const helpers=this.units.filter(u=>u.kind==='hero'&&u.team===source.team&&u!==source&&u!==target&&!u.dead&&u.g.position.distanceTo(target.g.position)<18);
    helpers.forEach(h=>{h.stats.assists++;h.gold+=35;h.xp+=45;if(h.isPlayer)this.stats.assists++;});
  }
  _heal(target,amount){if(!target||target.dead)return;target.hp=Math.min(target.maxHp,target.hp+amount);}
  _shield(target,amount,duration=4){if(!target||target.dead)return;target.shield=Math.max(target.shield,amount);target.shieldTimer=duration;}
  _burst(position,color=0x9bd8ff,size=1.2){
    const mesh=new THREE.Mesh(new THREE.SphereGeometry(size,10,8),new THREE.MeshBasicMaterial({color,transparent:true,opacity:.42,wireframe:true}));
    mesh.position.copy(position);this.scene.add(mesh);this.effects.push({mesh,life:.45,maxLife:.45,scale:2.6});
  }
  _queueBlast(position,radius,damage,source,color,status={}){
    const mesh=new THREE.Mesh(new THREE.RingGeometry(radius*.82,radius,48),new THREE.MeshBasicMaterial({color,transparent:true,opacity:.46,side:THREE.DoubleSide,depthWrite:false}));
    mesh.rotation.x=-Math.PI/2;mesh.position.copy(position);mesh.position.y=.1;mesh.scale.setScalar(.82);this.scene.add(mesh);
    this.effects.push({mesh,life:.52,maxLife:.52,scale:.22,kind:'blast',position:position.clone(),radius,damage,source,status});
  }
  _beam(from,to,color=0x9bd8ff){
    const a=from.clone();a.y+=1;const b=to.clone();b.y+=1;const d=b.clone().sub(a);
    const mesh=new THREE.Mesh(new THREE.CylinderGeometry(.055,.055,d.length(),6),new THREE.MeshBasicMaterial({color,transparent:true,opacity:.8}));
    mesh.position.copy(a.clone().add(b).multiplyScalar(.5));mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0,1,0),d.normalize());this.scene.add(mesh);this.effects.push({mesh,life:.16,maxLife:.16,scale:1});
  }

  cast(slot){
    const p=this.player;if(!p||p.dead||this.paused||this.ended)return;
    const hero=HEROES.find(h=>h.id===p.heroId),skill=hero.skills[slot],key=['q','w','e','r'][slot];
    if((p.cooldowns[key]||0)>0)return;
    p.cooldowns[key]=skill[3]*(1-p.haste);
    const type=skill[1],power=skill[2]+p.power*.35,aim=this.aim.clone();
    const radius=type==='aoe'?7.5:(type==='root'||type==='slow'||type==='pull'?8.5:12);
    const targets=this._hostiles(p.team).filter(u=>u.kind!=='core'&&u.kind!=='tower'&&u.hp>0&&u.g.position.distanceTo(aim)<radius+1).sort((a,b)=>a.g.position.distanceTo(aim)-b.g.position.distanceTo(aim));
    const target=targets[0]||this._nearestEnemy(p,12);const color=hero.color;
    if(type==='dash'||type==='blink'){
      const dest=aim.clone().sub(p.g.position);if(dest.length()<.1)dest.set(p.team===1?1:-1,0,0);dest.normalize().multiplyScalar(type==='dash'?5.8:8.2);
      p.g.position.add(dest);p.g.position.x=clamp(p.g.position.x,-47,47);p.g.position.z=clamp(p.g.position.z,-34,34);
      this._burst(p.g.position.clone().add(vec(0,1)),color,1.4);if(target&&target.g.position.distanceTo(p.g.position)<4.5)this._damage(target,power*.7,p);
    }else if(type==='shield'){
      this._shield(p,390+p.maxHp*.12,5);this._burst(p.g.position.clone().add(vec(0,1.8)),color,1.9);
      this.units.filter(u=>u.team===p.team&&u.kind==='hero'&&!u.dead&&u.g.position.distanceTo(p.g.position)<7).forEach(u=>this._shield(u,190,3));
    }else if(type==='heal'){
      const ally=this._nearestAlly(p,12);this._heal(ally,360+p.power*.6);this._heal(p,140);this._beam(p.g.position,ally.g.position,0x83e6ad);this._burst(ally.g.position.clone().add(vec(0,1.3)),0x83e6ad,1.5);
    }else if(type==='buff'){
      p.buffTimer=6;p.damage=p.baseDamage*1.55;this._burst(p.g.position.clone().add(vec(0,1.2)),color,1.5);
    }else if(type==='aoe'){
      this._queueBlast(aim.clone(),7.5,power*(p.campBuffTimer>0?1.12:1),p,color);
    }else{
      if(target){
        const affected=type==='pull'?targets.slice(0,7):[target];
        affected.forEach(t=>{
          let dmg=power;if(type==='execute'&&t.hp/t.maxHp<.35)dmg*=1.8;
          this._damage(t,dmg,p);if(type==='slow')t.slowTimer=3.4;if(type==='root')t.rootTimer=2;
          if(type==='pull'){const delta=p.g.position.clone().sub(t.g.position);delta.y=0;if(delta.length()>0)t.g.position.add(delta.normalize().multiplyScalar(2.3));t.rootTimer=1.2;}
          this._beam(p.g.position,t.g.position,color);
        });
      }else if(type!=='aoe')this.onFeed(skill[0]+': no target in range.');
    }
    this.onFeed(p.name+' used '+skill[0]+'.');this._emitHud();
  }

  dodge(){
    const p=this.player;if(!p||p.dead||this.paused||this.ended||(p.dodgeCooldown||0)>0)return false;
    let dir=this.moveVector.clone().add(this.touchVector);
    if(dir.lengthSq()<.01)dir=this.aim.clone().sub(p.g.position);
    if(dir.lengthSq()<.01)dir.set(p.team===1?1:-1,0,0);
    dir.normalize();p.g.position.addScaledVector(dir,5.2);
    p.g.position.x=clamp(p.g.position.x,-47,47);p.g.position.z=clamp(p.g.position.z,-34,34);
    p.invulnTimer=.36;p.dodgeCooldown=2.5;this._burst(p.g.position.clone().add(vec(0,1)),0x9edcff,1.3);return true;
  }
  ping(type='attack'){
    if(!this.player||this.player.dead)return;
    const color=type==='defend'?0x7dc9ff:0xe7c27b;
    const ring=new THREE.Mesh(new THREE.RingGeometry(1.5,1.85,32),new THREE.MeshBasicMaterial({color,transparent:true,opacity:.86,side:THREE.DoubleSide}));
    ring.rotation.x=-Math.PI/2;ring.position.copy(this.aim);ring.position.y=.16;this.scene.add(ring);this.effects.push({mesh:ring,life:1.15,maxLife:1.15,scale:2.2});
    this.units.filter(u=>u.kind==='hero'&&u.team===1&&!u.isPlayer&&!u.dead).forEach(u=>{u.botOrder={type,position:this.aim.clone(),time:10};});
    this.onFeed(type==='defend'?'Defend ping sent.':'Attack ping sent.');
  }
  setPaused(value){this.paused=!!value;this._emitHud();}
  _playerTick(dt){
    const p=this.player;if(!p||p.dead)return;
    const input=this.moveVector.clone().add(this.touchVector);if(input.lengthSq()>1)input.normalize();
    if(input.lengthSq()>.01&&!p.rootTimer){p.g.position.addScaledVector(input,p.speed*dt);this.moveOrder=null;}
    else if(this.selectedTarget&&!this.selectedTarget.dead){
      const d=this.selectedTarget.g.position.distanceTo(p.g.position);if(d>p.range*.94)this._moveTowards(p,this.selectedTarget.g.position,dt);else this._tryAttack(p,this.selectedTarget,dt);
    }else if(this.moveOrder&&!p.rootTimer){if(this.moveOrder.distanceTo(p.g.position)>.9)this._moveTowards(p,this.moveOrder,dt);else this.moveOrder=null;}
    p.g.position.x=clamp(p.g.position.x,-47,47);p.g.position.z=clamp(p.g.position.z,-34,34);
    const face=this.aim.clone().sub(p.g.position);if(face.lengthSq()>.1)p.g.rotation.y=Math.atan2(face.x,face.z);
    if(this.selectedTarget?.dead)this.selectedTarget=null;
  }
  _moveTowards(u,target,dt){
    if(u.rootTimer>0||u.stunTimer>0)return;
    const d=target.clone().sub(u.g.position);d.y=0;const len=d.length();if(len<.06)return;
    d.normalize();u.g.position.addScaledVector(d,u.speed*dt*(u.slowTimer>0?.55:1));u.g.rotation.y=Math.atan2(d.x,d.z);
  }
  _tryAttack(u,target,dt){
    if(!target||target.dead)return;u.attackTimer-=dt;
    if(u.attackTimer<=0&&u.g.position.distanceTo(target.g.position)<=u.range+1){
      u.attackTimer=u.attackRate*(1-(u.haste||0));const campMultiplier=u.campBuffTimer>0?1.18:1;const dmg=(u.damage+(u.buffTimer>0?u.damage*.4:0))*campMultiplier;
      this._damage(target,dmg,u);this._beam(u.g.position,target.g.position,u.team===1?0x83c7ff:0xff9aa5);
      if(u.lifesteal&&u.kind==='hero')this._heal(u,dmg*u.lifesteal);
    }
  }
  _tickBotStatus(u,dt){
    if(u.shieldTimer>0){u.shieldTimer-=dt;if(u.shieldTimer<=0)u.shield=0;}
    for(const key of Object.keys(u.cooldowns||{}))u.cooldowns[key]=Math.max(0,u.cooldowns[key]-dt);
    u.slowTimer=Math.max(0,(u.slowTimer||0)-dt);u.rootTimer=Math.max(0,(u.rootTimer||0)-dt);u.stunTimer=Math.max(0,(u.stunTimer||0)-dt);
    u.buffTimer=Math.max(0,(u.buffTimer||0)-dt);u.campBuffTimer=Math.max(0,(u.campBuffTimer||0)-dt);
    if(u.buffTimer<=0)u.damage=u.baseDamage;
    u.invulnTimer=Math.max(0,(u.invulnTimer||0)-dt);u.dodgeCooldown=Math.max(0,(u.dodgeCooldown||0)-dt);
    u.hp=Math.min(u.maxHp,u.hp+(u.regen||2)*dt);
  }
  _heroAi(u,dt){
    if(u.dead||u.isPlayer)return;
    const home=this._coreFor(u.team),enemy=this._nearestEnemy(u,11,true);
    if(u.hp/u.maxHp<.28&&enemy){if(home)this._moveTowards(u,home.g.position,dt);return;}
    if(u.botOrder){u.botOrder.time-=dt;if(u.botOrder.time<=0)u.botOrder=null;
      else if(u.botOrder.type==='defend'&&home){const threat=this._nearestEnemy(u,18,true);if(threat){if(u.g.position.distanceTo(threat.g.position)>u.range*.9)this._moveTowards(u,threat.g.position,dt);else this._tryAttack(u,threat,dt);}else this._moveTowards(u,home.g.position,dt);if(u.g.position.distanceTo(home.g.position)<13)u.botOrder=null;return;}
      else if(u.botOrder.type==='attack'){const marked=this._nearestEnemy(u,13,true);if(marked){if(u.g.position.distanceTo(marked.g.position)>u.range*.9)this._moveTowards(u,marked.g.position,dt);else this._tryAttack(u,marked,dt);return;}if(u.g.position.distanceTo(u.botOrder.position)>u.range+2){this._moveTowards(u,u.botOrder.position,dt);return;}u.botOrder=null;}}
    if(enemy){const d=enemy.g.position.distanceTo(u.g.position);if(d>u.range*.88)this._moveTowards(u,enemy.g.position,dt);else this._tryAttack(u,enemy,dt);
      const hero=HEROES.find(h=>h.id===u.heroId);
      if(u.hp/u.maxHp<.62){const defensive=hero.skills.findIndex((sk,i)=>i<3&&(sk[1]==='shield'||sk[1]==='heal'));if(defensive>=0)this._castBot(u,defensive,enemy);}
      if((u.cooldowns.r||0)<=0&&(enemy.hp/enemy.maxHp<.48||u.hp/u.maxHp<.34))this._castBot(u,3,enemy);
      else if(d<Math.max(9,u.range+1)){const candidate=[0,1,2].find(i=>(u.cooldowns[['q','w','e'][i]]||0)<=0&&['bolt','aoe','root','slow','pull','dash','blink','buff'].includes(hero.skills[i][1]));if(candidate!==undefined)this._castBot(u,candidate,enemy);}
      return;}
    const laneEnemy=this.units.filter(v=>!v.dead&&v.team!==u.team&&(v.kind==='hero'||v.kind==='minion')&&v.lane===u.lane&&v.g.position.distanceTo(u.g.position)<14).sort((a,b)=>a.g.position.distanceTo(u.g.position)-b.g.position.distanceTo(u.g.position))[0];
    if(laneEnemy){if(u.g.position.distanceTo(laneEnemy.g.position)>u.range*.9)this._moveTowards(u,laneEnemy.g.position,dt);else this._tryAttack(u,laneEnemy,dt);return;}
    if(u.hp/u.maxHp>.72&&(u.campDecision||0)<=0){u.campDecision=10;const camp=this._nearestCamp(u,42);if(camp)u.campTarget=camp;}else u.campDecision=Math.max(0,(u.campDecision||0)-dt);
    if(u.campTarget&&!u.campTarget.dead){if(u.g.position.distanceTo(u.campTarget.g.position)<u.range+1)this._tryAttack(u,u.campTarget,dt);else this._moveTowards(u,u.campTarget.g.position,dt);return;}
    u.campTarget=null;const target=this._laneTarget(u.team,u.lane);if(target){if(u.g.position.distanceTo(target.g.position)<u.range+1)this._tryAttack(u,target,dt);else this._moveTowards(u,target.g.position,dt);}
  }
  _castBot(u,index,target){
    const hero=HEROES.find(h=>h.id===u.heroId);if(!hero||!target||target.dead)return;
    const sk=hero.skills[index],key=['q','w','e','r'][index],type=sk[1];if((u.cooldowns[key]||0)>0)return;
    if(type==='shield')this._shield(u,340,4);else if(type==='heal')this._heal(this._nearestAlly(u,12),300);
    else if(type==='dash'||type==='blink'){const delta=target.g.position.clone().sub(u.g.position);if(delta.lengthSq()>0)u.g.position.addScaledVector(delta.normalize(),type==='dash'?4.5:6.5);}
    else if(type==='buff'){u.buffTimer=5;u.damage=u.baseDamage*1.4;}
    else if(type==='aoe')this._queueBlast(target.g.position.clone(),6.2,sk[2]+u.power*.3,u,hero.color);
    else{const victims=type==='pull'?this.units.filter(v=>!v.dead&&v.team===u.team*-1&&(v.kind==='hero'||v.kind==='minion')&&v.g.position.distanceTo(target.g.position)<7):[target];victims.forEach(v=>{this._damage(v,sk[2]+u.power*.3,u);if(type==='slow')v.slowTimer=2.4;if(type==='root')v.rootTimer=1.4;if(type==='pull'){const d=u.g.position.clone().sub(v.g.position);d.y=0;if(d.length()>0)v.g.position.add(d.normalize().multiplyScalar(1.6));}});}
    u.cooldowns[key]=sk[3];
  }
  _minionAi(u,dt){
    if(u.dead)return;u.attackTimer-=dt;
    const enemy=this._hostiles(u.team).filter(t=>(t.kind==='minion'||t.kind==='hero')&&t.g.position.distanceTo(u.g.position)<3.5).sort((a,b)=>a.g.position.distanceTo(u.g.position)-b.g.position.distanceTo(u.g.position))[0];
    const target=enemy||this._laneTarget(u.team,u.lane);
    if(target&&u.g.position.distanceTo(target.g.position)<u.range+1.1){if(u.attackTimer<=0){u.attackTimer=u.attackRate;this._damage(target,u.damage,u);this._beam(u.g.position,target.g.position,u.team===1?0x77b8f2:0xef8890);}}
    else if(target)this._moveTowards(u,target.g.position,dt);else u.g.position.x+=u.dir*u.speed*dt;
  }
  _towerAi(s,dt){
    if(s.dead)return;s.attackTimer-=dt;if(s.attackTimer>0)return;
    const targets=this.units.filter(u=>!u.dead&&u.team!==s.team&&u.team!==0&&u.g.position.distanceTo(s.g.position)<s.range);
    const target=targets.sort((a,b)=>{const prio=u=>u.kind==='minion'?0:u.kind==='hero'?1:2;return prio(a)-prio(b)||a.g.position.distanceTo(s.g.position)-b.g.position.distanceTo(s.g.position);})[0];
    if(target){s.attackTimer=s.attackRate;this._damage(target,s.damage,s);this._beam(s.g.position,target.g.position,s.team===1?0x76b5ff:0xff8c99);}
  }
  _campAi(c,dt){
    if(c.dead){c.respawnTimer-=dt;if(c.respawnTimer<=0){c.dead=false;c.hp=c.maxHp;c.g.visible=true;}return;}
    c.attackTimer-=dt;const target=this.units.filter(u=>!u.dead&&u.kind==='hero'&&u.g.position.distanceTo(c.g.position)<7).sort((a,b)=>a.hp/a.maxHp-b.hp/b.maxHp)[0];
    if(target&&c.attackTimer<=0&&target.g.position.distanceTo(c.g.position)<c.range+1){c.attackTimer=c.attackRate;this._damage(target,c.damage,c);}
  }
  _respawn(u,dt){
    if(!u.dead||u.kind!=='hero')return;u.respawnTimer-=dt;
    if(u.respawnTimer<=0){u.dead=false;u.hp=u.maxHp;u.shield=0;u.g.visible=true;u.g.position.set(u.team===1?-38:38,0,LANES[u.lane]);u.respawnTimer=0;if(u.isPlayer){this.onFeed('You have returned to the arena.');this.moveOrder=null;}}
  }
  _progress(u){
    if(u.dead||u.kind!=='hero')return;
    while(u.level<10&&u.xp>=u.level*190){u.xp-=u.level*190;u.level++;u.maxHp+=55;u.hp+=55;u.damage+=5;u.baseDamage+=5;u.power+=4;this.onFeed(u.name+' reached level '+u.level+'.');}
  }
  _spawnWave(){for(let lane=0;lane<3;lane++)for(let i=0;i<3;i++){this._spawnMinion(1,lane);this._spawnMinion(2,lane);}this.onFeed('Minion waves deployed.');}
  _finish(result){
    if(this.ended)return;this.ended=true;this.running=false;
    this.onFinish({result,time:this.time,stats:{...this.stats},player:this.player?{name:this.player.name,level:this.player.level,inventory:[...this.player.inventory],gold:this.player.gold}:null,cores:{alliance:Math.max(0,this.allyCore?.hp||0),enemy:Math.max(0,this.enemyCore?.hp||0)}});
  }
  buyItem(id){
    const p=this.player,item=ITEMS.find(i=>i.id===id);if(!p||!item||p.inventory.length>=6||p.gold<item.cost)return false;
    p.gold-=item.cost;p.inventory.push(id);Object.entries(item.stats).forEach(([k,v])=>{
      if(k==='hp'){p.maxHp+=v;p.hp+=v;}else if(k==='damage'){p.damage+=v;p.baseDamage+=v;}else if(k==='power')p.power+=v;else if(k==='speed')p.speed+=v;
      else if(k==='armor')p.armor=(p.armor||0)+v;else if(k==='regen')p.regen=(p.regen||2)+v;else if(k==='lifesteal')p.lifesteal=(p.lifesteal||0)+v;
      else if(k==='haste')p.haste=Math.min(.35,(p.haste||0)+v);
    });
    this.stats.goldEarned+=item.cost;this.onFeed('Purchased '+item.name+'.');this._emitHud();return true;
  }
  scoreboard(){
    return this.units.filter(u=>u.kind==='hero').map(u=>({name:u.name,role:u.role,team:u.team,level:u.level||1,kills:u.stats?.kills||0,deaths:u.stats?.deaths||0,assists:u.stats?.assists||0,hp:u.hp,maxHp:u.maxHp,dead:u.dead})).sort((a,b)=>a.team-b.team);
  }
  _snapshot(){
    const p=this.player;
    return {time:this.time,paused:this.paused,ended:this.ended,player:p?{name:p.name,hp:p.hp,maxHp:p.maxHp,level:p.level,xp:p.xp,nextXp:p.level*190,gold:p.gold,inventory:[...p.inventory],kills:p.stats.kills,deaths:p.stats.deaths,assists:p.stats.assists,cooldowns:{...p.cooldowns},shield:p.shield}:null,
      cores:{ally:this.allyCore?this.allyCore.hp:0,enemy:this.enemyCore?this.enemyCore.hp:0},
      towers:this.structures.filter(s=>s.kind==='tower').map(s=>({team:s.team,lane:s.lane,hp:s.hp,dead:s.dead})),
      scoreboard:this.scoreboard(),map:this.units.filter(u=>!u.dead).map(u=>({team:u.team,kind:u.kind,x:u.g.position.x,z:u.g.position.z}))};
  }
  _emitHud(){this.onHud(this._snapshot());}
  _frame(now){
    if(this._last===undefined)this._last=now;const dt=Math.min(.04,(now-this._last)/1000);this._last=now;
    if(this.running&&!this.paused&&!this.ended){
      this.time=Math.max(0,this.time-dt);this.goldTimer+=dt;this.waveTimer+=dt;
      if(this.goldTimer>=5){this.goldTimer-=5;if(this.player&&!this.player.dead){this.player.gold+=25;this.stats.goldEarned+=25;}}
      if(this.waveTimer>=25){this.waveTimer-=25;this._spawnWave();}
      this._playerTick(dt);
      this.units.slice().forEach(u=>{
        if(u.kind==='hero'){this._respawn(u,dt);if(!u.dead){this._tickBotStatus(u,dt);this._progress(u);if(!u.isPlayer)this._heroAi(u,dt);}}
        else if(u.kind==='minion')this._minionAi(u,dt);
        else if(u.kind==='camp')this._campAi(u,dt);
      });
      this.structures.filter(s=>s.kind==='tower').forEach(s=>this._towerAi(s,dt));
      this.effects=this.effects.filter(e=>{
        e.life-=dt;e.mesh.scale.setScalar(1+(1-e.life/e.maxLife)*e.scale);e.mesh.material.opacity=Math.max(0,e.life/e.maxLife*(e.kind==='blast'?.48:.6));
        if(e.life<=0){if(e.kind==='blast'){
          const victims=this.units.filter(v=>!v.dead&&v.team!==e.source.team&&v.team!==0&&(v.kind==='hero'||v.kind==='minion')&&v.g.position.distanceTo(e.position)<e.radius);
          victims.forEach(v=>{this._damage(v,e.damage,e.source);if(e.status?.root)v.rootTimer=Math.max(v.rootTimer||0,e.status.root);if(e.status?.slow)v.slowTimer=Math.max(v.slowTimer||0,e.status.slow);});
          this._burst(e.position.clone().add(vec(0,.35)),e.mesh.material.color.getHex(),e.radius*.72);this.onFeed(e.source.name+' landed an area spell.');}
          this.scene.remove(e.mesh);return false;}return true;
      });
      if(this.time<=0){const a=this.allyCore?.hp||0,b=this.enemyCore?.hp||0;this._finish(a===b?'draw':a>b?'victory':'defeat');}
      this.hudTimer+=dt;if(this.hudTimer>.15){this.hudTimer=0;this._emitHud();}
    }
    if(this.player){const target=this.player.g.position;this.camera.position.lerp(new THREE.Vector3(target.x-2,55,target.z+43),.055);this.camera.lookAt(target.x,0,target.z);}
    this.renderer.render(this.scene,this.camera);
  }
  _resize(){this.camera.aspect=innerWidth/innerHeight;this.camera.updateProjectionMatrix();this.renderer.setSize(innerWidth,innerHeight);}
  setQuality(value){this.quality=value;this.renderer.setPixelRatio(Math.min(devicePixelRatio||1,value==='low'?1:1.7));this.renderer.shadowMap.enabled=value!=='low';}
  destroy(){this.renderer.setAnimationLoop(null);this.renderer.dispose();this.renderer.domElement.remove();}
}
