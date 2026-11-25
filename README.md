# Mythic Clash

Original 3D top-down lane arena, solo 3v3 against bots. The project is browser-first and uses Three.js through an import map (no bundler required).

## Run locally

Serve this folder using any static HTTP server. Do not open index.html as a file:// URL, because browser ES modules and texture loading need an HTTP origin.

```bash
python -m http.server 8080
```

Then open http://localhost:8080.

## Controls

- WASD: move
- Mouse: aim
- Left click: attack / select a nearby target
- Right click: move command
- Q / E / R: abilities 1, 3 and ultimate
- Shift + W: second ability (W is also the forward movement key)
- Space: dodge
- B: armory
- Tab: scoreboard
- Esc: pause

Touch devices receive a virtual joystick, attack, dodge and skill buttons.

## Project structure

- index.html: app shell and Three.js import map
- src/main.js: hero draft, HUD, minimap, armory, scoreboard, pause and touch UI
- src/game.js: 3D scene, procedural heroes, combat, bots, minions, towers, cores, items and progression
- src/style.css: responsive HUD and screen styles
- assets/textures/: original tileable SVG textures
- UPDATE_PLAN.md: large update roadmap
- ART_BIBLE.md: texture map, material rules and hero silhouette guide

## Deploy

The GitHub Actions workflow publishes the repository root to GitHub Pages after pushes to main. Enable GitHub Pages with GitHub Actions as the source in repository settings once.

## Design principles

The art direction borrows general lessons from classic RTS readability — big shape language, distinctive hero silhouettes, clear team accents and deliberately placed detail — without copying Warcraft characters, models, logos, textures, names or UI.

## Status

A feature-rich playable foundation has been committed, but this environment has not run a browser build or a full playtest. Known next steps are listed in UPDATE_PLAN.md; the textures and procedural models are first-pass assets pending visual QA.
