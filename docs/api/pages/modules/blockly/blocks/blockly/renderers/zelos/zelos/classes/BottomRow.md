# Class: BottomRow

An object containing information about what elements are in the bottom row of
a block as well as spacing information for the top row.
Elements in a bottom row can consist of corners, spacers and next
connections.

## Param

The rendering
constants provider.

## Package

## Alias

Blockly.zelos.BottomRow

## Extends

- [`BottomRow`](../../../common/block_rendering/classes/BottomRow.md)

## Constructors

### new BottomRow()

> **new BottomRow**(`constants`): [`BottomRow`](BottomRow.md)

#### Parameters

##### constants

`any`

#### Returns

[`BottomRow`](BottomRow.md)

#### Overrides

[`BottomRow`](../../../common/block_rendering/classes/BottomRow.md).[`constructor`](../../../common/block_rendering/classes/BottomRow.md#constructors)

#### Defined in

node_modules/blockly/blockly.d.ts:20888

## Properties

### align

> **align**: `number`

Alignment of the row.

#### Package

#### Inherited from

[`BottomRow`](../../../common/block_rendering/classes/BottomRow.md).[`align`](../../../common/block_rendering/classes/BottomRow.md#align)

#### Defined in

node_modules/blockly/blockly.d.ts:6506

---

### baseline

> **baseline**: `number`

The Y position of the bottom edge of the block, relative to the origin
of the block rendering.

#### Inherited from

[`BottomRow`](../../../common/block_rendering/classes/BottomRow.md).[`baseline`](../../../common/block_rendering/classes/BottomRow.md#baseline)

#### Defined in

node_modules/blockly/blockly.d.ts:6860

---

### connection

> **connection**: [`NextConnection`](../../../common/block_rendering/classes/NextConnection.md)

The next connection on the row, if any.

#### Package

#### Inherited from

[`BottomRow`](../../../common/block_rendering/classes/BottomRow.md).[`connection`](../../../common/block_rendering/classes/BottomRow.md#connection)

#### Defined in

node_modules/blockly/blockly.d.ts:6847

---

### constants\_

> `protected` **constants\_**: [`ConstantProvider`](../../../common/block_rendering/classes/ConstantProvider.md)

The renderer's constant provider.

#### Inherited from

[`BottomRow`](../../../common/block_rendering/classes/BottomRow.md).[`constants_`](../../../common/block_rendering/classes/BottomRow.md#constants_)

#### Defined in

node_modules/blockly/blockly.d.ts:6499

---

### descenderHeight

> **descenderHeight**: `number`

The amount that the bottom of the block extends below the horizontal edge,
e.g. because of a next connection. Must be non-negative (see #2820).

#### Package

#### Inherited from

[`BottomRow`](../../../common/block_rendering/classes/BottomRow.md).[`descenderHeight`](../../../common/block_rendering/classes/BottomRow.md#descenderheight)

#### Defined in

node_modules/blockly/blockly.d.ts:6854

---

### elements

> **elements**: [`Measurable`](../../../common/block_rendering/classes/Measurable.md)[]

An array of elements contained in this row.

#### Package

#### Inherited from

[`BottomRow`](../../../common/block_rendering/classes/BottomRow.md).[`elements`](../../../common/block_rendering/classes/BottomRow.md#elements)

#### Defined in

node_modules/blockly/blockly.d.ts:6418

---

### hasDummyInput

> **hasDummyInput**: `boolean`

Whether the row has any dummy inputs.

#### Package

#### Inherited from

[`BottomRow`](../../../common/block_rendering/classes/BottomRow.md).[`hasDummyInput`](../../../common/block_rendering/classes/BottomRow.md#hasdummyinput)

#### Defined in

node_modules/blockly/blockly.d.ts:6487

---

### hasExternalInput

> **hasExternalInput**: `boolean`

Whether the row has any external inputs.

#### Package

#### Inherited from

[`BottomRow`](../../../common/block_rendering/classes/BottomRow.md).[`hasExternalInput`](../../../common/block_rendering/classes/BottomRow.md#hasexternalinput)

#### Defined in

node_modules/blockly/blockly.d.ts:6469

---

### hasInlineInput

> **hasInlineInput**: `boolean`

Whether the row has any inline inputs.

#### Package

#### Inherited from

[`BottomRow`](../../../common/block_rendering/classes/BottomRow.md).[`hasInlineInput`](../../../common/block_rendering/classes/BottomRow.md#hasinlineinput)

#### Defined in

node_modules/blockly/blockly.d.ts:6481

---

### hasJaggedEdge

> **hasJaggedEdge**: `boolean`

Whether the row has a jagged edge.

#### Package

#### Inherited from

[`BottomRow`](../../../common/block_rendering/classes/BottomRow.md).[`hasJaggedEdge`](../../../common/block_rendering/classes/BottomRow.md#hasjaggededge)

#### Defined in

node_modules/blockly/blockly.d.ts:6493

---

### hasNextConnection

> **hasNextConnection**: `boolean`

Whether this row has a next connection.

#### Package

#### Inherited from

[`BottomRow`](../../../common/block_rendering/classes/BottomRow.md).[`hasNextConnection`](../../../common/block_rendering/classes/BottomRow.md#hasnextconnection)

#### Defined in

node_modules/blockly/blockly.d.ts:6841

---

### hasStatement

> **hasStatement**: `boolean`

Whether the row has any statement inputs.

#### Package

#### Inherited from

[`BottomRow`](../../../common/block_rendering/classes/BottomRow.md).[`hasStatement`](../../../common/block_rendering/classes/BottomRow.md#hasstatement)

#### Defined in

node_modules/blockly/blockly.d.ts:6475

---

### height

> **height**: `number`

The height of the row.

#### Package

#### Inherited from

[`BottomRow`](../../../common/block_rendering/classes/BottomRow.md).[`height`](../../../common/block_rendering/classes/BottomRow.md#height)

#### Defined in

node_modules/blockly/blockly.d.ts:6878

---

### minHeight

> **minHeight**: `number`

The minimum height of the row.

#### Package

#### Inherited from

[`BottomRow`](../../../common/block_rendering/classes/BottomRow.md).[`minHeight`](../../../common/block_rendering/classes/BottomRow.md#minheight)

#### Defined in

node_modules/blockly/blockly.d.ts:6437

---

### minWidth

> **minWidth**: `number`

The minimum width of the row, from the left edge of the block to the right.
Does not include child blocks unless they are inline.

#### Package

#### Inherited from

[`BottomRow`](../../../common/block_rendering/classes/BottomRow.md).[`minWidth`](../../../common/block_rendering/classes/BottomRow.md#minwidth)

#### Defined in

node_modules/blockly/blockly.d.ts:6444

---

### notchOffset

> **notchOffset**: `number`

#### Inherited from

[`BottomRow`](../../../common/block_rendering/classes/BottomRow.md).[`notchOffset`](../../../common/block_rendering/classes/BottomRow.md#notchoffset)

#### Defined in

node_modules/blockly/blockly.d.ts:6500

---

### type

> **type**: `number`

The type of this rendering object.

#### Package

#### Inherited from

[`BottomRow`](../../../common/block_rendering/classes/BottomRow.md).[`type`](../../../common/block_rendering/classes/BottomRow.md#type)

#### Defined in

node_modules/blockly/blockly.d.ts:6412

---

### width

> **width**: `number`

The width of the row, from the left edge of the block to the right.
Does not include child blocks unless they are inline.

#### Package

#### Inherited from

[`BottomRow`](../../../common/block_rendering/classes/BottomRow.md).[`width`](../../../common/block_rendering/classes/BottomRow.md#width)

#### Defined in

node_modules/blockly/blockly.d.ts:6877

---

### widthWithConnectedBlocks

> **widthWithConnectedBlocks**: `number`

The width of the row, from the left edge of the block to the edge of the
block or any connected child blocks.

#### Package

#### Inherited from

[`BottomRow`](../../../common/block_rendering/classes/BottomRow.md).[`widthWithConnectedBlocks`](../../../common/block_rendering/classes/BottomRow.md#widthwithconnectedblocks)

#### Defined in

node_modules/blockly/blockly.d.ts:6879

---

### xPos

> **xPos**: `number`

The X position of the row relative to the origin of the block's svg group.

#### Package

#### Inherited from

[`BottomRow`](../../../common/block_rendering/classes/BottomRow.md).[`xPos`](../../../common/block_rendering/classes/BottomRow.md#xpos)

#### Defined in

node_modules/blockly/blockly.d.ts:6463

---

### yPos

> **yPos**: `number`

The Y position of the row relative to the origin of the block's svg group.

#### Package

#### Inherited from

[`BottomRow`](../../../common/block_rendering/classes/BottomRow.md).[`yPos`](../../../common/block_rendering/classes/BottomRow.md#ypos)

#### Defined in

node_modules/blockly/blockly.d.ts:6457

## Methods

### endsWithElemSpacer()

> **endsWithElemSpacer**(): `boolean`

#### Returns

`boolean`

#### Overrides

[`BottomRow`](../../../common/block_rendering/classes/BottomRow.md).[`endsWithElemSpacer`](../../../common/block_rendering/classes/BottomRow.md#endswithelemspacer)

#### Defined in

node_modules/blockly/blockly.d.ts:20892

---

### getFirstSpacer()

> **getFirstSpacer**(): [`InRowSpacer`](../../../common/block_rendering/classes/InRowSpacer.md)

Convenience method to get the first spacer element on this row.

#### Returns

[`InRowSpacer`](../../../common/block_rendering/classes/InRowSpacer.md)

The first spacer element on
this row.

#### Package

#### Inherited from

[`BottomRow`](../../../common/block_rendering/classes/BottomRow.md).[`getFirstSpacer`](../../../common/block_rendering/classes/BottomRow.md#getfirstspacer)

#### Defined in

node_modules/blockly/blockly.d.ts:6537

---

### getLastInput()

> **getLastInput**(): [`InputConnection`](../../../common/block_rendering/classes/InputConnection.md)

Get the last input on this row, if it has one.

#### Returns

[`InputConnection`](../../../common/block_rendering/classes/InputConnection.md)

The last input on the row,
or null.

#### Package

#### Inherited from

[`BottomRow`](../../../common/block_rendering/classes/BottomRow.md).[`getLastInput`](../../../common/block_rendering/classes/BottomRow.md#getlastinput)

#### Defined in

node_modules/blockly/blockly.d.ts:6513

---

### getLastSpacer()

> **getLastSpacer**(): [`InRowSpacer`](../../../common/block_rendering/classes/InRowSpacer.md)

Convenience method to get the last spacer element on this row.

#### Returns

[`InRowSpacer`](../../../common/block_rendering/classes/InRowSpacer.md)

The last spacer element on
this row.

#### Package

#### Inherited from

[`BottomRow`](../../../common/block_rendering/classes/BottomRow.md).[`getLastSpacer`](../../../common/block_rendering/classes/BottomRow.md#getlastspacer)

#### Defined in

node_modules/blockly/blockly.d.ts:6544

---

### hasLeftSquareCorner()

> **hasLeftSquareCorner**(`block`): `boolean`

Render a round corner unless the block has an output connection.

#### Parameters

##### block

`any`

#### Returns

`boolean`

#### Overrides

[`BottomRow`](../../../common/block_rendering/classes/BottomRow.md).[`hasLeftSquareCorner`](../../../common/block_rendering/classes/BottomRow.md#hasleftsquarecorner)

#### Defined in

node_modules/blockly/blockly.d.ts:20897

---

### hasRightSquareCorner()

> **hasRightSquareCorner**(`block`): `boolean`

Render a round corner unless the block has an output connection.

#### Parameters

##### block

`any`

#### Returns

`boolean`

#### Overrides

[`BottomRow`](../../../common/block_rendering/classes/BottomRow.md).[`hasRightSquareCorner`](../../../common/block_rendering/classes/BottomRow.md#hasrightsquarecorner)

#### Defined in

node_modules/blockly/blockly.d.ts:20902

---

### measure()

> **measure**(): `void`

#### Returns

`void`

#### Inherited from

[`BottomRow`](../../../common/block_rendering/classes/BottomRow.md).[`measure`](../../../common/block_rendering/classes/BottomRow.md#measure)

#### Defined in

node_modules/blockly/blockly.d.ts:6876

---

### startsWithElemSpacer()

> **startsWithElemSpacer**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[`BottomRow`](../../../common/block_rendering/classes/BottomRow.md).[`startsWithElemSpacer`](../../../common/block_rendering/classes/BottomRow.md#startswithelemspacer)

#### Defined in

node_modules/blockly/blockly.d.ts:6883
