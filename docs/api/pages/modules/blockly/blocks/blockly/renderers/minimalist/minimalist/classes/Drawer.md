# Class: Drawer

An object that draws a block based on the given rendering information.

## Param

The block to render.

## Param

An object containing all
information needed to render this block.

## Package

## Alias

Blockly.minimalist.Drawer

## Extends

- [`Drawer`](../../../common/block_rendering/classes/Drawer.md)

## Constructors

### new Drawer()

> **new Drawer**(`block`, `info`): [`Drawer`](Drawer.md)

#### Parameters

##### block

`any`

##### info

`any`

#### Returns

[`Drawer`](Drawer.md)

#### Overrides

[`Drawer`](../../../common/block_rendering/classes/Drawer.md).[`constructor`](../../../common/block_rendering/classes/Drawer.md#constructors)

#### Defined in

node_modules/blockly/blockly.d.ts:20782

## Properties

### block\_

> **block\_**: [`BlockSvg`](../../../../classes/BlockSvg.md)

#### Inherited from

[`Drawer`](../../../common/block_rendering/classes/Drawer.md).[`block_`](../../../common/block_rendering/classes/Drawer.md#block_)

#### Defined in

node_modules/blockly/blockly.d.ts:8169

---

### constants\_

> `protected` **constants\_**: [`ConstantProvider`](../../../common/block_rendering/classes/ConstantProvider.md)

The renderer's constant provider.

#### Inherited from

[`Drawer`](../../../common/block_rendering/classes/Drawer.md).[`constants_`](../../../common/block_rendering/classes/Drawer.md#constants_)

#### Defined in

node_modules/blockly/blockly.d.ts:8179

---

### info\_

> **info\_**: [`RenderInfo`](../../../common/block_rendering/classes/RenderInfo.md)

#### Inherited from

[`Drawer`](../../../common/block_rendering/classes/Drawer.md).[`info_`](../../../common/block_rendering/classes/Drawer.md#info_)

#### Defined in

node_modules/blockly/blockly.d.ts:8170

---

### inlinePath\_

> **inlinePath\_**: `string`

#### Inherited from

[`Drawer`](../../../common/block_rendering/classes/Drawer.md).[`inlinePath_`](../../../common/block_rendering/classes/Drawer.md#inlinepath_)

#### Defined in

node_modules/blockly/blockly.d.ts:8173

---

### outlinePath\_

> **outlinePath\_**: `string`

#### Inherited from

[`Drawer`](../../../common/block_rendering/classes/Drawer.md).[`outlinePath_`](../../../common/block_rendering/classes/Drawer.md#outlinepath_)

#### Defined in

node_modules/blockly/blockly.d.ts:8172

---

### topLeft\_

> **topLeft\_**: [`Coordinate`](../../../../utils/classes/Coordinate.md)

#### Inherited from

[`Drawer`](../../../common/block_rendering/classes/Drawer.md).[`topLeft_`](../../../common/block_rendering/classes/Drawer.md#topleft_)

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

#### Inherited from

[`Drawer`](../../../common/block_rendering/classes/Drawer.md).[`draw`](../../../common/block_rendering/classes/Drawer.md#draw)

#### Defined in

node_modules/blockly/blockly.d.ts:8190

---

### drawBottom\_()

> `protected` **drawBottom\_**(): `void`

Add steps for the bottom edge of a block, possibly including a notch
for the next connection.

#### Returns

`void`

#### Inherited from

[`Drawer`](../../../common/block_rendering/classes/Drawer.md).[`drawBottom_`](../../../common/block_rendering/classes/Drawer.md#drawbottom_)

#### Defined in

node_modules/blockly/blockly.d.ts:8245

---

### drawInlineInput\_()

> `protected` **drawInlineInput\_**(`input`): `void`

Add steps for an inline input.

#### Parameters

##### input

[`InlineInput`](../../../common/block_rendering/classes/InlineInput.md)

The information about the
input to render.

#### Returns

`void`

#### Inherited from

[`Drawer`](../../../common/block_rendering/classes/Drawer.md).[`drawInlineInput_`](../../../common/block_rendering/classes/Drawer.md#drawinlineinput_)

#### Defined in

node_modules/blockly/blockly.d.ts:8271

---

### drawInternals\_()

> `protected` **drawInternals\_**(): `void`

Draw the internals of the block: inline inputs, fields, and icons. These do
not depend on the outer path for placement.

#### Returns

`void`

#### Inherited from

[`Drawer`](../../../common/block_rendering/classes/Drawer.md).[`drawInternals_`](../../../common/block_rendering/classes/Drawer.md#drawinternals_)

#### Defined in

node_modules/blockly/blockly.d.ts:8257

---

### drawJaggedEdge\_()

> `protected` **drawJaggedEdge\_**(`row`): `void`

Add steps for the jagged edge of a row on a collapsed block.

#### Parameters

##### row

[`Row`](../../../common/block_rendering/classes/Row.md)

The row to draw the side of.

#### Returns

`void`

#### Inherited from

[`Drawer`](../../../common/block_rendering/classes/Drawer.md).[`drawJaggedEdge_`](../../../common/block_rendering/classes/Drawer.md#drawjaggededge_)

#### Defined in

node_modules/blockly/blockly.d.ts:8219

---

### drawLeft\_()

> `protected` **drawLeft\_**(): `void`

Add steps for the left side of the block, which may include an output
connection

#### Returns

`void`

#### Inherited from

[`Drawer`](../../../common/block_rendering/classes/Drawer.md).[`drawLeft_`](../../../common/block_rendering/classes/Drawer.md#drawleft_)

#### Defined in

node_modules/blockly/blockly.d.ts:8251

---

### drawOutline\_()

> `protected` **drawOutline\_**(): `void`

Create the outline of the block. This is a single continuous path.

#### Returns

`void`

#### Inherited from

[`Drawer`](../../../common/block_rendering/classes/Drawer.md).[`drawOutline_`](../../../common/block_rendering/classes/Drawer.md#drawoutline_)

#### Defined in

node_modules/blockly/blockly.d.ts:8207

---

### drawRightSideRow\_()

> `protected` **drawRightSideRow\_**(`row`): `void`

Add steps for the right side of a row that does not have value or
statement input connections.

#### Parameters

##### row

[`Row`](../../../common/block_rendering/classes/Row.md)

The row to draw the side of.

#### Returns

`void`

#### Inherited from

[`Drawer`](../../../common/block_rendering/classes/Drawer.md).[`drawRightSideRow_`](../../../common/block_rendering/classes/Drawer.md#drawrightsiderow_)

#### Defined in

node_modules/blockly/blockly.d.ts:8239

---

### drawStatementInput\_()

> `protected` **drawStatementInput\_**(`row`): `void`

Add steps for a statement input.

#### Parameters

##### row

[`Row`](../../../common/block_rendering/classes/Row.md)

The row that this input belongs to.

#### Returns

`void`

#### Inherited from

[`Drawer`](../../../common/block_rendering/classes/Drawer.md).[`drawStatementInput_`](../../../common/block_rendering/classes/Drawer.md#drawstatementinput_)

#### Defined in

node_modules/blockly/blockly.d.ts:8232

---

### drawTop\_()

> `protected` **drawTop\_**(): `void`

Add steps for the top corner of the block, taking into account
details such as hats and rounded corners.

#### Returns

`void`

#### Inherited from

[`Drawer`](../../../common/block_rendering/classes/Drawer.md).[`drawTop_`](../../../common/block_rendering/classes/Drawer.md#drawtop_)

#### Defined in

node_modules/blockly/blockly.d.ts:8213

---

### drawValueInput\_()

> `protected` **drawValueInput\_**(`row`): `void`

Add steps for an external value input, rendered as a notch in the side
of the block.

#### Parameters

##### row

[`Row`](../../../common/block_rendering/classes/Row.md)

The row that this input belongs to.

#### Returns

`void`

#### Inherited from

[`Drawer`](../../../common/block_rendering/classes/Drawer.md).[`drawValueInput_`](../../../common/block_rendering/classes/Drawer.md#drawvalueinput_)

#### Defined in

node_modules/blockly/blockly.d.ts:8226

---

### hideHiddenIcons\_()

> `protected` **hideHiddenIcons\_**(): `void`

Hide icons that were marked as hidden.

#### Returns

`void`

#### Inherited from

[`Drawer`](../../../common/block_rendering/classes/Drawer.md).[`hideHiddenIcons_`](../../../common/block_rendering/classes/Drawer.md#hidehiddenicons_)

#### Defined in

node_modules/blockly/blockly.d.ts:8202

---

### layoutField\_()

> `protected` **layoutField\_**(`fieldInfo`): `void`

Push a field or icon's new position to its SVG root.

#### Parameters

##### fieldInfo

The rendering information for the field or icon.

[`Icon`](../../../common/block_rendering/classes/Icon.md) | [`Field`](../../../common/block_rendering/classes/Field.md)

#### Returns

`void`

#### Inherited from

[`Drawer`](../../../common/block_rendering/classes/Drawer.md).[`layoutField_`](../../../common/block_rendering/classes/Drawer.md#layoutfield_)

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

[`Row`](../../../common/block_rendering/classes/Row.md)

The row that the connection is on.

#### Returns

`void`

#### Inherited from

[`Drawer`](../../../common/block_rendering/classes/Drawer.md).[`positionExternalValueConnection_`](../../../common/block_rendering/classes/Drawer.md#positionexternalvalueconnection_)

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

[`InlineInput`](../../../common/block_rendering/classes/InlineInput.md)

The information about
the input that the connection is on.

#### Returns

`void`

#### Inherited from

[`Drawer`](../../../common/block_rendering/classes/Drawer.md).[`positionInlineInputConnection_`](../../../common/block_rendering/classes/Drawer.md#positioninlineinputconnection_)

#### Defined in

node_modules/blockly/blockly.d.ts:8280

---

### positionNextConnection\_()

> `protected` **positionNextConnection\_**(): `void`

Position the next connection on a block.

#### Returns

`void`

#### Inherited from

[`Drawer`](../../../common/block_rendering/classes/Drawer.md).[`positionNextConnection_`](../../../common/block_rendering/classes/Drawer.md#positionnextconnection_)

#### Defined in

node_modules/blockly/blockly.d.ts:8306

---

### positionOutputConnection\_()

> `protected` **positionOutputConnection\_**(): `void`

Position the output connection on a block.

#### Returns

`void`

#### Inherited from

[`Drawer`](../../../common/block_rendering/classes/Drawer.md).[`positionOutputConnection_`](../../../common/block_rendering/classes/Drawer.md#positionoutputconnection_)

#### Defined in

node_modules/blockly/blockly.d.ts:8311

---

### positionPreviousConnection\_()

> `protected` **positionPreviousConnection\_**(): `void`

Position the previous connection on a block.

#### Returns

`void`

#### Inherited from

[`Drawer`](../../../common/block_rendering/classes/Drawer.md).[`positionPreviousConnection_`](../../../common/block_rendering/classes/Drawer.md#positionpreviousconnection_)

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

[`Row`](../../../common/block_rendering/classes/Row.md)

The row that the connection is on.

#### Returns

`void`

#### Inherited from

[`Drawer`](../../../common/block_rendering/classes/Drawer.md).[`positionStatementInputConnection_`](../../../common/block_rendering/classes/Drawer.md#positionstatementinputconnection_)

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

#### Inherited from

[`Drawer`](../../../common/block_rendering/classes/Drawer.md).[`recordSizeOnBlock_`](../../../common/block_rendering/classes/Drawer.md#recordsizeonblock_)

#### Defined in

node_modules/blockly/blockly.d.ts:8197
