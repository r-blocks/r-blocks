# Class: Drawer

## Extends

- [`Drawer`](../../../common/block_rendering/classes/Drawer.md)

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

Blockly.geras.Drawer

#### Overrides

[`Drawer`](../../../common/block_rendering/classes/Drawer.md).[`constructor`](../../../common/block_rendering/classes/Drawer.md#constructors)

#### Defined in

node_modules/blockly/blockly.d.ts:20611

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

### highlighter\_

> **highlighter\_**: [`Highlighter`](Highlighter.md)

#### Defined in

node_modules/blockly/blockly.d.ts:20612

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

#### Returns

`void`

#### Overrides

[`Drawer`](../../../common/block_rendering/classes/Drawer.md).[`draw`](../../../common/block_rendering/classes/Drawer.md#draw)

#### Defined in

node_modules/blockly/blockly.d.ts:20616

---

### drawBottom\_()

> **drawBottom\_**(): `void`

#### Returns

`void`

#### Overrides

[`Drawer`](../../../common/block_rendering/classes/Drawer.md).[`drawBottom_`](../../../common/block_rendering/classes/Drawer.md#drawbottom_)

#### Defined in

node_modules/blockly/blockly.d.ts:20640

---

### drawInlineInput\_()

> **drawInlineInput\_**(`input`): `void`

#### Parameters

##### input

`any`

#### Returns

`void`

#### Overrides

[`Drawer`](../../../common/block_rendering/classes/Drawer.md).[`drawInlineInput_`](../../../common/block_rendering/classes/Drawer.md#drawinlineinput_)

#### Defined in

node_modules/blockly/blockly.d.ts:20651

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

> **drawJaggedEdge\_**(`row`): `void`

#### Parameters

##### row

`any`

#### Returns

`void`

#### Overrides

[`Drawer`](../../../common/block_rendering/classes/Drawer.md).[`drawJaggedEdge_`](../../../common/block_rendering/classes/Drawer.md#drawjaggededge_)

#### Defined in

node_modules/blockly/blockly.d.ts:20624

---

### drawLeft\_()

> `protected` **drawLeft\_**(): `void`

Add steps for the left side of the block, which may include an output
connection

#### Returns

`void`

#### Overrides

[`Drawer`](../../../common/block_rendering/classes/Drawer.md).[`drawLeft_`](../../../common/block_rendering/classes/Drawer.md#drawleft_)

#### Defined in

node_modules/blockly/blockly.d.ts:20647

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

> **drawRightSideRow\_**(`row`): `void`

#### Parameters

##### row

`any`

#### Returns

`void`

#### Overrides

[`Drawer`](../../../common/block_rendering/classes/Drawer.md).[`drawRightSideRow_`](../../../common/block_rendering/classes/Drawer.md#drawrightsiderow_)

#### Defined in

node_modules/blockly/blockly.d.ts:20636

---

### drawStatementInput\_()

> **drawStatementInput\_**(`row`): `void`

#### Parameters

##### row

`any`

#### Returns

`void`

#### Overrides

[`Drawer`](../../../common/block_rendering/classes/Drawer.md).[`drawStatementInput_`](../../../common/block_rendering/classes/Drawer.md#drawstatementinput_)

#### Defined in

node_modules/blockly/blockly.d.ts:20632

---

### drawTop\_()

> **drawTop\_**(): `void`

#### Returns

`void`

#### Overrides

[`Drawer`](../../../common/block_rendering/classes/Drawer.md).[`drawTop_`](../../../common/block_rendering/classes/Drawer.md#drawtop_)

#### Defined in

node_modules/blockly/blockly.d.ts:20620

---

### drawValueInput\_()

> **drawValueInput\_**(`row`): `void`

#### Parameters

##### row

`any`

#### Returns

`void`

#### Overrides

[`Drawer`](../../../common/block_rendering/classes/Drawer.md).[`drawValueInput_`](../../../common/block_rendering/classes/Drawer.md#drawvalueinput_)

#### Defined in

node_modules/blockly/blockly.d.ts:20628

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

> **positionExternalValueConnection\_**(`row`): `void`

#### Parameters

##### row

`any`

#### Returns

`void`

#### Overrides

[`Drawer`](../../../common/block_rendering/classes/Drawer.md).[`positionExternalValueConnection_`](../../../common/block_rendering/classes/Drawer.md#positionexternalvalueconnection_)

#### Defined in

node_modules/blockly/blockly.d.ts:20663

---

### positionInlineInputConnection\_()

> **positionInlineInputConnection\_**(`input`): `void`

#### Parameters

##### input

`any`

#### Returns

`void`

#### Overrides

[`Drawer`](../../../common/block_rendering/classes/Drawer.md).[`positionInlineInputConnection_`](../../../common/block_rendering/classes/Drawer.md#positioninlineinputconnection_)

#### Defined in

node_modules/blockly/blockly.d.ts:20655

---

### positionNextConnection\_()

> **positionNextConnection\_**(): `void`

#### Returns

`void`

#### Overrides

[`Drawer`](../../../common/block_rendering/classes/Drawer.md).[`positionNextConnection_`](../../../common/block_rendering/classes/Drawer.md#positionnextconnection_)

#### Defined in

node_modules/blockly/blockly.d.ts:20667

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

> **positionStatementInputConnection\_**(`row`): `void`

#### Parameters

##### row

`any`

#### Returns

`void`

#### Overrides

[`Drawer`](../../../common/block_rendering/classes/Drawer.md).[`positionStatementInputConnection_`](../../../common/block_rendering/classes/Drawer.md#positionstatementinputconnection_)

#### Defined in

node_modules/blockly/blockly.d.ts:20659

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
