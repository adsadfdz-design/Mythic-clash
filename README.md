# Mythic Clash

Original 3D top-down fantasy lane arena, solo 3v3 against bots. The project is browser-first and uses Three.js through an import map (no bundler required).

## Run locally

Serve this folder using any static HTTP server. Do not open index.html as a file:// URL, because browser ES modules and texture loading need an HTTP origin. Run npm run check to validate JavaScript syntax, UI element references, the texture set, the 23-hero roster and item definitions.

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
- assets/textures/: material atlas and seven SVG material slots
- UPDATE_PLAN.md: large update roadmap
- ART_BIBLE.md: texture map, material rules and hero silhouette guide
- TEXTURE_ATLAS.md: source atlas cell map and material assignments
- MODEL_PIPELINE.md: target specifications for production hero models and animation

## Deploy

Before the first deployment, open **Repository → Settings → Pages** and set **Build and deployment → Source** to **GitHub Actions**. This one-time repository setting must be enabled by an owner/maintainer. The workflow then validates the project and deploys the repository root after pushes to main. The workflow deliberately does not try to create the Pages site with GITHUB_TOKEN; GitHub documents that the enablement operation requires a separate admin-capable token.

## Design principles

The art direction borrows general lessons from classic RTS readability — big shape language, distinctive hero silhouettes, clear team accents and deliberately placed detail — without copying Warcraft characters, models, logos, textures, names or UI.

## Status

A feature-rich playable foundation has been committed, but this environment has not run a full browser playtest. The CI syntax/asset validator is separate from gameplay verification. Models are still procedural first-pass meshes; the production GLB/rig/animation pass is a planned milestone, not a claim about current model quality.
