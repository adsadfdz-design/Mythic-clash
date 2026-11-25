# Mythic Clash — Production Model Pipeline

## Target art direction

Original **Mythic Relic Fantasy**: exaggerated proportions, readable weapon silhouettes, strong shoulder/head shapes, faction accents, hand-painted material detail and restrained emissive magic. Warcraft III is a visual-readability reference only. Do not reuse Warcraft models, textures, rigs, names, logos, UI or signature costume designs.

## Production budgets

These are target budgets for the next art pass, not measurements of the current procedural meshes.

| Asset | LOD0 target | LOD1 target |
|---|---:|---:|
| Standard hero | 8,000–14,000 triangles | 4,000–7,000 |
| High-detail hero / boss | 18,000–28,000 | 8,000–12,000 |
| Minion | 1,200–2,500 | 500–1,000 |
| Tower / camp | 3,000–7,000 | 1,000–3,000 |
| Core | 8,000–12,000 | 3,000–5,000 |

Prioritise readable proportions, pose, lighting, clean topology and animation over polygon count.

## Per-hero deliverables

1. High-poly sculpt and silhouette exploration: front, side, 3/4 and gameplay top-down thumbnail.
2. Retopologised game mesh with clean deformation loops around shoulders, elbows, hips and knees.
3. One UV set with consistent texel density and mirrored UVs only where asymmetry is not needed.
4. PBR textures: 2K base colour, normal, ORM (occlusion/roughness/metalness), and optional emissive map. Use a shared trim sheet for repeated armour edges, rivets and engraved details.
5. Rigged GLB with root, pelvis, spine, head, upper/lower arms, hands, upper/lower legs and weapon attachment sockets.
6. Animation clips: idle, run, basic attack, cast Q, cast W, cast E, ultimate R, hit, death and respawn.
7. LOD0/LOD1, collision capsule and gameplay bounds.

## Distinct silhouette hooks

| Hero | Signature shape |
|---|---|
| Bramble | antler-like root crown, bark shield, thorned shoulders |
| Nyxara | floating broken halo, crystal orbit and tall arcane staff |
| Korr | low forward stance, paired short blades and ash mantle |
| Aurelion | sun-disc halo, radiant shoulder fins and reliquary |
| Vexa | fractured crescent hood and floating void shards |
| Thorne | layered briar plates and asymmetrical root spikes |
| Rurik | oversized hammer head and circular iron gorget |
| Sable | long crescent bow, narrow cloak and light armour |
| Ilyra | frost crown, faceted mantle and narrow ice staff |
| Morrow | cocoon cloak, grave lantern and hooked staff |
| Fen | hunter silhouette, dual fangs and swept hood |
| Orla | tide halo, wave-shaped shoulder mantle and shell focus |
| Kael | long ember bow, bright arrowhead and split cape |
| Mirelle | faceted crystal circlet and prism focus |
| Draz | heavy spine plates, broad weapon and angular gauntlets |
| Pippa | compact inventor silhouette, spark-orbit tool and satchel |
| Eidon | wall shield, squared armour and guardian crest |
| Zhara | sand veil, broken sun ring and floating dune stones |
| Oren | banner pole, rectangular shield and captain's coat |
| Varka | twin curved blades and narrow shadow mantle |
| Selene | silver longbow, crescent headpiece and moon focus |
| Grom | massive stone shoulders, blunt silhouette and heavy helm |
| Amara | living leaf crown, branching mantle and bloom focus |

## Export and integration

- Author in Blender; apply transforms and name meshes/materials consistently.
- Export GLB/glTF with embedded textures and animation clips.
- Keep material count low: aim for 2–4 materials per hero; atlas repeated trim details.
- Verify correct scale, forward axis, pivot at ground contact, weapon sockets and clip names.
- Load with Three.js GLTFLoader; use AnimationMixer and blend idle/run/attack states.
- Keep current procedural model as a safe fallback until each GLB passes visual and performance QA.

## Acceptance checks

- Each hero is identifiable as a flat silhouette at the normal gameplay camera angle.
- Every team tint is distinct without recolouring skin, cloth or VFX incorrectly.
- Weapon attachments remain in the hand through all clips.
- Run and attack do not slide or drift outside the collision capsule.
- 23 heroes can be loaded without material duplication or memory leaks.
- LOD transitions are not distracting during camera movement.
