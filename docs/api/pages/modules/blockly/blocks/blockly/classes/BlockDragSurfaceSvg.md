# Class: BlockDragSurfaceSvg

Class for a drag surface for the currently dragged block. This is a separate
SVG that contains only the currently moving block, or nothing.

## Param

Containing element.

## Alias

Blockly.BlockDragSurfaceSvg

## Constructors

### new BlockDragSurfaceSvg()

> **new BlockDragSurfaceSvg**(`container`): [`BlockDragSurfaceSvg`](BlockDragSurfaceSvg.md)

#### Parameters

##### container

`any`

#### Returns

[`BlockDragSurfaceSvg`](BlockDragSurfaceSvg.md)

#### Defined in

node_modules/blockly/blockly.d.ts:6965

## Properties

### dragGroup\_

> **dragGroup\_**: `SVGElement`

#### Defined in

node_modules/blockly/blockly.d.ts:6976

---

### scale\_

> **scale\_**: `number`

#### Defined in

node_modules/blockly/blockly.d.ts:6993

---

### surfaceXY\_

> **surfaceXY\_**: `any`

#### Defined in

node_modules/blockly/blockly.d.ts:6984

---

### SVG\_

> **SVG\_**: `SVGElement`

#### Defined in

node_modules/blockly/blockly.d.ts:6975

## Methods

### clearAndHide()

> **clearAndHide**(`opt_newSurface`?): `void`

Clear the group and hide the surface; move the blocks off onto the provided
element.
If the block is being deleted it doesn't need to go back to the original
surface, since it would be removed immediately during dispose.

#### Parameters

##### opt_newSurface?

`Element`

Surface the dragging blocks should be moved
to, or null if the blocks should be removed from this surface without
being moved to a different surface.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:7054

---

### createDom()

> **createDom**(): `void`

Create the drag surface and inject it into the container.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:6974

---

### getCurrentBlock()

> **getCurrentBlock**(): `Element`

Get the current blocks on the drag surface, if any (primarily
for BlockSvg.getRelativeToSurfaceXY).

#### Returns

`Element`

Drag surface block DOM element, or null if no blocks
exist.

#### Defined in

node_modules/blockly/blockly.d.ts:7037

---

### getGroup()

> **getGroup**(): `SVGElement`

Provide a reference to the drag group (primarily for
BlockSvg.getRelativeToSurfaceXY).

#### Returns

`SVGElement`

Drag surface group element.

#### Defined in

node_modules/blockly/blockly.d.ts:7025

---

### getSurfaceTranslation()

> **getSurfaceTranslation**(): [`Coordinate`](../utils/classes/Coordinate.md)

Reports the surface translation in scaled workspace coordinates.
Use this when finishing a drag to return blocks to the correct position.

#### Returns

[`Coordinate`](../utils/classes/Coordinate.md)

Current translation of the surface.

#### Defined in

node_modules/blockly/blockly.d.ts:7019

---

### getSvgRoot()

> **getSvgRoot**(): `SVGElement`

Returns the SVG drag surface.

#### Returns

`SVGElement`

The SVG drag surface.

#### Defined in

node_modules/blockly/blockly.d.ts:7030

---

### getWsTranslation()

> **getWsTranslation**(): [`Coordinate`](../utils/classes/Coordinate.md)

Gets the translation of the child block surface
This surface is in charge of keeping track of how much the workspace has
moved.

#### Returns

[`Coordinate`](../utils/classes/Coordinate.md)

The amount the workspace has been moved.

#### Defined in

node_modules/blockly/blockly.d.ts:7044

---

### setBlocksAndShow()

> **setBlocksAndShow**(`blocks`): `void`

Set the SVG blocks on the drag surface's group and show the surface.
Only one block group should be on the drag surface at a time.

#### Parameters

##### blocks

`SVGElement`

Block or group of blocks to place on the drag
surface.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:6983

---

### translateAndScaleGroup()

> **translateAndScaleGroup**(`x`, `y`, `scale`): `void`

Translate and scale the entire drag surface group to the given position, to
keep in sync with the workspace.

#### Parameters

##### x

`number`

X translation in pixel coordinates.

##### y

`number`

Y translation in pixel coordinates.

##### scale

`number`

Scale of the group.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:6992

---

### translateBy()

> **translateBy**(`deltaX`, `deltaY`): `void`

Translates the entire surface by a relative offset.

#### Parameters

##### deltaX

`number`

Horizontal offset in pixel units.

##### deltaY

`number`

Vertical offset in pixel units.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:7004

---

### translateSurface()

> **translateSurface**(`x`, `y`): `void`

Translate the entire drag surface during a drag.
We translate the drag surface instead of the blocks inside the surface
so that the browser avoids repainting the SVG.
Because of this, the drag coordinates must be adjusted by scale.

#### Parameters

##### x

`number`

X translation for the entire surface.

##### y

`number`

Y translation for the entire surface.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:7013
