# Class: Debug

## Constructors

### new Debug()

> **new Debug**(`constants`): [`Debug`](Debug.md)

An object that renders rectangles and dots for debugging rendering code.

#### Parameters

##### constants

[`ConstantProvider`](ConstantProvider.md)

The renderer's
constants.

#### Returns

[`Debug`](Debug.md)

#### Package

#### Alias

Blockly.blockRendering.Debug

#### Defined in

node_modules/blockly/blockly.d.ts:10042

## Properties

### randomColour\_

> **randomColour\_**: `string`

#### Defined in

node_modules/blockly/blockly.d.ts:10131

## Methods

### clearElems()

> **clearElems**(): `void`

Remove all elements the this object created on the last pass.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:10066

---

### drawBoundingBox()

> **drawBoundingBox**(`info`): `void`

Draw a debug rectangle around the entire block.

#### Parameters

##### info

[`RenderInfo`](RenderInfo.md)

Rendering information about
the block to debug.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:10122

---

### drawConnection()

> **drawConnection**(`conn`): `void`

Draw a circle at the location of the given connection. Inputs and outputs
share the same colours, as do previous and next. When positioned correctly
a connected pair will look like a bullseye.

#### Parameters

##### conn

[`RenderedConnection`](../../../../classes/RenderedConnection.md)

The connection to circle.

#### Returns

`void`

#### Suppress

Suppress visibility of conn.offsetInBlock\_ since this
is a debug module.

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:10099

---

### drawDebug()

> **drawDebug**(`block`, `info`): `void`

Do all of the work to draw debug information for the whole block.

#### Parameters

##### block

[`BlockSvg`](../../../../classes/BlockSvg.md)

The block to draw debug information for.

##### info

[`RenderInfo`](RenderInfo.md)

Rendering information about
the block to debug.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:10130

---

### drawRender()

> **drawRender**(`svgPath`): `void`

Show a debug filter to highlight that a block has been rendered.

#### Parameters

##### svgPath

`SVGElement`

The block's SVG path.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:10137

---

### drawRenderedElem()

> **drawRenderedElem**(`elem`, `isRtl`): `void`

Draw a debug rectangle for an in-row element.

#### Parameters

##### elem

[`Measurable`](Measurable.md)

The element to render.

##### isRtl

`boolean`

Whether the block is rendered RTL.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:10089

---

### drawRenderedRow()

> **drawRenderedRow**(`row`, `cursorY`, `isRtl`): `void`

Draw a debug rectangle for a non-empty row.

#### Parameters

##### row

[`Row`](Row.md)

The non-empty row to render.

##### cursorY

`number`

The y position of the top of the row.

##### isRtl

`boolean`

Whether the block is rendered RTL.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:10107

---

### drawRowWithElements()

> **drawRowWithElements**(`row`, `cursorY`, `isRtl`): `void`

Draw debug rectangles for a non-empty row and all of its subcomponents.

#### Parameters

##### row

[`Row`](Row.md)

The non-empty row to render.

##### cursorY

`number`

The y position of the top of the row.

##### isRtl

`boolean`

Whether the block is rendered RTL.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:10115

---

### drawSpacerElem()

> **drawSpacerElem**(`elem`, `rowHeight`, `isRtl`): `void`

Draw a debug rectangle for a horizontal spacer.

#### Parameters

##### elem

[`InRowSpacer`](InRowSpacer.md)

The spacer to render.

##### rowHeight

`number`

The height of the container row.

##### isRtl

`boolean`

Whether the block is rendered RTL.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:10082

---

### drawSpacerRow()

> **drawSpacerRow**(`row`, `cursorY`, `isRtl`): `void`

Draw a debug rectangle for a spacer (empty) row.

#### Parameters

##### row

[`Row`](Row.md)

The row to render.

##### cursorY

`number`

The y position of the top of the row.

##### isRtl

`boolean`

Whether the block is rendered RTL.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:10074
