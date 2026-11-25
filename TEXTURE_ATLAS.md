# Mythic Clash — Texture Atlas

## Source asset

The game uses `assets/textures/material-atlas.webp`, a 512×512 4×4 painted atlas, plus eight standalone seamless SVG tiles for natural and biome materials. Atlas wrappers select hero-material cells; standalone tiles use their own vector patterns.

The atlas is a base-colour/diffuse atlas; standalone SVG tiles add vector colour and surface patterns. It is not a full PBR package yet: separate normal, roughness, metalness and emissive maps remain a later production task.

## Material slot mapping

| Runtime slot | Atlas cell | Material use |
|---|---:|---|
| `terrain.svg` | row 1, col 1 | grass and moss ground |
| `stone.svg` | row 1, col 3 | pale cobble and lane stone |
| `leather.svg` | row 3, col 1 | bark-like leather grain |
| `armor.svg` | row 4, col 1 | warm engraved armour plate |
| `metal.svg` | row 4, col 2 | scratched steel and weapon fittings |
| `cloth.svg` | row 4, col 3 | woven cloth for capes and hoods |
| `crystal.svg` | row 4, col 4 | blue crystal facets and arcane focus parts |
| `bark.svg` | standalone vector tile | tree trunks and roots |
| `moss.svg` | standalone vector tile | forest canopy, floor and allied Core plinth |
| `wood.svg` | standalone vector tile | bridge decking and wooden props |
| `water.svg` | standalone vector tile | jungle pools and river accents |
| `ash.svg` | standalone vector tile | ashen jungle ground |
| `sand.svg` | standalone vector tile | dry clearing and desert ground |
| `lava.svg` | standalone vector tile | volcanic ground and Rift Core base |
| `rune.svg` | standalone vector tile | rune rings and objective markings |

## Atlas cells reserved for the next environment pass

- Row 1: dirt path, grey flagstone, shallow riverbed
- Row 2: volcanic rock, sandstone, rune-carved stone, boulder
- Row 3: foliage, moss floor, exposed roots

## Runtime distribution

`src/game.js` loads fifteen named material slots from SVG files and sets `THREE.SRGBColorSpace`, `RepeatWrapping`, and anisotropy. The seven hero-material wrappers reference the shared WebP atlas. Eight standalone SVG tiles add bark, moss, wood, water, ash, sand, lava and runes. Team colour is applied as a separate material tint and is not baked into the shared texture.

## Visual quality gate

Before production art lock:
1. Check texture scale on a hero at the normal gameplay camera distance.
2. Check that repeated tiles do not expose obvious seams.
3. Keep terrain lower contrast than heroes and objective structures.
4. Use normal/roughness/metalness only where they materially improve armour, metal and crystal readability.
5. Keep unique hero silhouette readable in a flat grey clay render without textures.
