# Class: WorkspaceDragSurfaceSvg

## Constructors

### new WorkspaceDragSurfaceSvg()

> **new WorkspaceDragSurfaceSvg**(`container`): [`WorkspaceDragSurfaceSvg`](WorkspaceDragSurfaceSvg.md)

Blocks are moved into this SVG during a drag, improving performance.
The entire SVG is translated using CSS transforms instead of SVG so the
blocks are never repainted during drag improving performance.

#### Parameters

##### container

`Element`

Containing element.

#### Returns

[`WorkspaceDragSurfaceSvg`](WorkspaceDragSurfaceSvg.md)

#### Alias

Blockly.WorkspaceDragSurfaceSvg

#### Defined in

node_modules/blockly/blockly.d.ts:12749

## Properties

### container\_

> **container\_**: `Element`

#### Defined in

node_modules/blockly/blockly.d.ts:12750

---

### previousSibling\_

> **previousSibling\_**: `Element`

#### Defined in

node_modules/blockly/blockly.d.ts:12789

---

### SVG\_

> **SVG\_**: `SVGElement`

Dom structure when the workspace is being dragged. If there is no drag in
progress, the SVG is empty and display: none.
<svg class="blocklyWsDragSurface" style=transform:translate3d(...)>
<g class="blocklyBlockCanvas"></g>
<g class="blocklyBubbleCanvas">/g>
</svg>

#### Defined in

node_modules/blockly/blockly.d.ts:12763

## Methods

### clearAndHide()

> **clearAndHide**(`newSurface`): `void`

Move the blockCanvas and bubbleCanvas out of the surface SVG and on to
newSurface.

#### Parameters

##### newSurface

`SVGElement`

The element to put the drag surface contents
into.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:12788

---

### createDom()

> **createDom**(): `void`

Create the drag surface and inject it into the container.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:12754

---

### getSurfaceTranslation()

> **getSurfaceTranslation**(): [`Coordinate`](../utils/classes/Coordinate.md)

Reports the surface translation in scaled workspace coordinates.
Use this when finishing a drag to return blocks to the correct position.

#### Returns

[`Coordinate`](../utils/classes/Coordinate.md)

Current translation of the surface

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:12780

---

### setContentsAndShow()

> **setContentsAndShow**(`blockCanvas`, `bubbleCanvas`, `previousSibling`, `width`, `height`, `scale`): `void`

Set the SVG to have the block canvas and bubble canvas in it and then
show the surface.

#### Parameters

##### blockCanvas

`SVGElement`

The block canvas <g> element from the
workspace.

##### bubbleCanvas

`SVGElement`

The <g> element that contains the bubbles.

##### previousSibling

`Element`

The element to insert the block canvas and
bubble canvas after when it goes back in the DOM at the end of a drag.

##### width

`number`

The width of the workspace SVG element.

##### height

`number`

The height of the workspace SVG element.

##### scale

`number`

The scale of the workspace being dragged.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:12803

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

X translation for the entire surface

##### y

`number`

Y translation for the entire surface

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:12773
