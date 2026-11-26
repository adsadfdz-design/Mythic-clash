# Mythic Clash

Original 3D top-down fantasy lane arena, solo 3v3 against bots.

## Play in your browser

[**Open Mythic Clash in StackBlitz**](https://stackblitz.com/github/adsadfdz-design/Mythic-clash?startScript=dev)

StackBlitz imports this public GitHub repository, installs its dependencies and automatically starts the Vite development server. Open the **Preview** panel to play. Internet access is required for the game and its Three.js assets.

## Run locally

Install Node.js, then run:

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (usually http://localhost:5173). Do not open index.html through a `file://` URL. Run `npm run check` to validate JavaScript syntax, UI element references, the texture set, the 23-hero roster and item definitions.

A simple static server also works when serving the project root because the app retains its browser import map:

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
- G: attack ping for allied bots
- H: defend ping for allied bots
- Esc: pause

Touch devices receive a virtual joystick, attack, dodge and skill buttons.

## Project structure

- index.html: app shell and Three.js import map
- src/main.js: hero draft, HUD, minimap, armory, scoreboard, pause and touch UI
- src/game.js: 3D scene, procedural heroes, combat, bots, minions, towers, cores, items and progression
- src/style.css: responsive HUD and screen styles
- assets/textures/: material atlas and SVG material slots
- UPDATE_PLAN.md: large update roadmap
- ART_BIBLE.md: texture map, material rules and hero silhouette guide
- TEXTURE_ATLAS.md: source atlas cell map and material assignments
- MODEL_PIPELINE.md: target specifications for production hero models and animation

## Deploy

Before the first GitHub Pages deployment, open **Repository → Settings → Pages** and set **Build and deployment → Source** to **GitHub Actions**. This one-time repository setting must be enabled by an owner/maintainer. After that, the existing workflow can deploy the repository following pushes to main.

## Design principles

The art direction borrows general lessons from classic RTS readability — big shape language, distinctive hero silhouettes, clear team accents and deliberately placed detail — without copying Warcraft characters, models, logos, textures, names or UI.

## Status

A feature-rich playable foundation has been committed, but this environment has not run a full browser playtest. The CI syntax/asset validator is separate from gameplay verification. Models are still procedural first-pass meshes; the production GLB/rig/animation pass is a planned milestone, not a claim about current model quality.
