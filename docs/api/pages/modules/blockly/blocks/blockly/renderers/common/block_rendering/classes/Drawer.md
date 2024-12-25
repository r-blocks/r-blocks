# Class: Drawer

## Extended by

- [`Drawer`](../../../geras/geras/classes/Drawer.md)
- [`Drawer`](../../../minimalist/minimalist/classes/Drawer.md)
- [`Drawer`](../../../zelos/zelos/classes/Drawer.md)

## Constructors

### new Drawer()

> **new Drawer**(`block`, `info`): [`Drawer`](Drawer.md)

An object that draws a block based on the given rendering information.

#### Parameters

##### block

[`BlockSvg`](../../../../classes/BlockSvg.md)

The block to render.

##### info

[`RenderInfo`](RenderInfo.md)

An object containing all
information needed to render this block.

#### Returns

[`Drawer`](Drawer.md)

#### Package

#### Alias

Blockly.blockRendering.Drawer

#### Defined in

node_modules/blockly/blockly.d.ts:8168

## Properties

### block\_

> **block\_**: [`BlockSvg`](../../../../classes/BlockSvg.md)

#### Defined in

node_modules/blockly/blockly.d.ts:8169

---

### constants\_

> `protected` **constants\_**: [`ConstantProvider`](ConstantProvider.md)

The renderer's constant provider.

#### Defined in

node_modules/blockly/blockly.d.ts:8179

---

### info\_

> **info\_**: [`RenderInfo`](RenderInfo.md)

#### Defined in

node_modules/blockly/blockly.d.ts:8170

---

### inlinePath\_

> **inlinePath\_**: `string`

#### Defined in

node_modules/blockly/blockly.d.ts:8173

---

### outlinePath\_

> **outlinePath\_**: `string`

#### Defined in

node_modules/blockly/blockly.d.ts:8172

---

### topLeft\_

> **topLeft\_**: [`Coordinate`](../../../../utils/classes/Coordinate.md)

#### Defined in

node_modules/blockly/blockly.d.ts:8171

## Methods

### draw()

> **draw**(): `void`

Draw the block to the workspace. Here "drawing" means setting SVG path
elements and moving fields, icons, and connections on the screen.

The pieces of the paths are pushed into arrays of "steps", which are then
joined with spaces and set directly on the block. This guarantees that
the steps are separated by spaces for improved readability, but isn't
required.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:8190

---

### drawBottom\_()

> `protected` **drawBottom\_**(): `void`

Add steps for the bottom edge of a block, possibly including a notch
for the next connection.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:8245

---

### drawInlineInput\_()

> `protected` **drawInlineInput\_**(`input`): `void`

Add steps for an inline input.

#### Parameters

##### input

[`InlineInput`](InlineInput.md)

The information about the
input to render.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:8271

---

### drawInternals\_()

> `protected` **drawInternals\_**(): `void`

Draw the internals of the block: inline inputs, fields, and icons. These do
not depend on the outer path for placement.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:8257

---

### drawJaggedEdge\_()

> `protected` **drawJaggedEdge\_**(`row`): `void`

Add steps for the jagged edge of a row on a collapsed block.

#### Parameters

##### row

[`Row`](Row.md)

The row to draw the side of.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:8219

---

### drawLeft\_()

> `protected` **drawLeft\_**(): `void`

Add steps for the left side of the block, which may include an output
connection

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:8251

---

### drawOutline\_()

> `protected` **drawOutline\_**(): `void`

Create the outline of the block. This is a single continuous path.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:8207

---

### drawRightSideRow\_()

> `protected` **drawRightSideRow\_**(`row`): `void`

Add steps for the right side of a row that does not have value or
statement input connections.

#### Parameters

##### row

[`Row`](Row.md)

The row to draw the side of.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:8239

---

### drawStatementInput\_()

> `protected` **drawStatementInput\_**(`row`): `void`

Add steps for a statement input.

#### Parameters

##### row

[`Row`](Row.md)

The row that this input belongs to.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:8232

---

### drawTop\_()

> `protected` **drawTop\_**(): `void`

Add steps for the top corner of the block, taking into account
details such as hats and rounded corners.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:8213

---

### drawValueInput\_()

> `protected` **drawValueInput\_**(`row`): `void`

Add steps for an external value input, rendered as a notch in the side
of the block.

#### Parameters

##### row

[`Row`](Row.md)

The row that this input belongs to.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:8226

---

### hideHiddenIcons\_()

> `protected` **hideHiddenIcons\_**(): `void`

Hide icons that were marked as hidden.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:8202

---

### layoutField\_()

> `protected` **layoutField\_**(`fieldInfo`): `void`

Push a field or icon's new position to its SVG root.

#### Parameters

##### fieldInfo

The rendering information for the field or icon.

[`Icon`](Icon.md) | [`Field`](Field.md)

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:8264

---

### positionExternalValueConnection\_()

> `protected` **positionExternalValueConnection\_**(`row`): `void`

Position the connection on an external value input, taking into account
RTL and the small gap between the parent block and child block which lets the
parent block's dark path show through.

#### Parameters

##### row

[`Row`](Row.md)

The row that the connection is on.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:8296

---

### positionInlineInputConnection\_()

> `protected` **positionInlineInputConnection\_**(`input`): `void`

Position the connection on an inline value input, taking into account
RTL and the small gap between the parent block and child block which lets the
parent block's dark path show through.

#### Parameters

##### input

[`InlineInput`](InlineInput.md)

The information about
the input that the connection is on.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:8280

---

### positionNextConnection\_()

> `protected` **positionNextConnection\_**(): `void`

Position the next connection on a block.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:8306

---

### positionOutputConnection\_()

> `protected` **positionOutputConnection\_**(): `void`

Position the output connection on a block.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:8311

---

### positionPreviousConnection\_()

> `protected` **positionPreviousConnection\_**(): `void`

Position the previous connection on a block.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:8301

---

### positionStatementInputConnection\_()

> `protected` **positionStatementInputConnection\_**(`row`): `void`

Position the connection on a statement input, taking into account
RTL and the small gap between the parent block and child block which lets the
parent block's dark path show through.

#### Parameters

##### row

[`Row`](Row.md)

The row that the connection is on.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:8288

---

### recordSizeOnBlock\_()

> `protected` **recordSizeOnBlock\_**(): `void`

Save sizing information back to the block
Most of the rendering information can be thrown away at the end of the
render. Anything that needs to be kept around should be set in this function.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:8197
