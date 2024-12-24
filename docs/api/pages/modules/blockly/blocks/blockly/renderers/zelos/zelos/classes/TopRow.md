# Class: TopRow

An object containing information about what elements are in the top row of a
block as well as sizing information for the top row.
Elements in a top row can consist of corners, hats, spacers, and previous
connections.
After this constructor is called, the row will contain all non-spacer
elements it needs.

## Param

The rendering
constants provider.

## Package

## Alias

Blockly.zelos.TopRow

## Extends

- [`TopRow`](../../../common/block_rendering/classes/TopRow.md)

## Constructors

### new TopRow()

> **new TopRow**(`constants`): [`TopRow`](TopRow.md)

#### Parameters

##### constants

`any`

#### Returns

[`TopRow`](TopRow.md)

#### Overrides

[`TopRow`](../../../common/block_rendering/classes/TopRow.md).[`constructor`](../../../common/block_rendering/classes/TopRow.md#constructors)

#### Defined in

node_modules/blockly/blockly.d.ts:22003

## Properties

### align

> **align**: `number`

Alignment of the row.

#### Package

#### Inherited from

[`TopRow`](../../../common/block_rendering/classes/TopRow.md).[`align`](../../../common/block_rendering/classes/TopRow.md#align)

#### Defined in

node_modules/blockly/blockly.d.ts:6506

---

### ascenderHeight

> **ascenderHeight**: `number`

How much the row extends up above its capline.

#### Inherited from

[`TopRow`](../../../common/block_rendering/classes/TopRow.md).[`ascenderHeight`](../../../common/block_rendering/classes/TopRow.md#ascenderheight)

#### Defined in

node_modules/blockly/blockly.d.ts:9713

---

### capline

> **capline**: `number`

The starting point for drawing the row, in the y direction.
This allows us to draw hats and similar shapes that don't start at the
origin. Must be non-negative (see #2820).

#### Package

#### Inherited from

[`TopRow`](../../../common/block_rendering/classes/TopRow.md).[`capline`](../../../common/block_rendering/classes/TopRow.md#capline)

#### Defined in

node_modules/blockly/blockly.d.ts:9708

---

### connection

> **connection**: [`PreviousConnection`](../../../common/block_rendering/classes/PreviousConnection.md)

The previous connection on the block, if any.

#### Inherited from

[`TopRow`](../../../common/block_rendering/classes/TopRow.md).[`connection`](../../../common/block_rendering/classes/TopRow.md#connection)

#### Defined in

node_modules/blockly/blockly.d.ts:9724

---

### constants\_

> `protected` **constants\_**: [`ConstantProvider`](../../../common/block_rendering/classes/ConstantProvider.md)

The renderer's constant provider.

#### Inherited from

[`TopRow`](../../../common/block_rendering/classes/TopRow.md).[`constants_`](../../../common/block_rendering/classes/TopRow.md#constants_)

#### Defined in

node_modules/blockly/blockly.d.ts:6499

---

### elements

> **elements**: [`Measurable`](../../../common/block_rendering/classes/Measurable.md)[]

An array of elements contained in this row.

#### Package

#### Inherited from

[`TopRow`](../../../common/block_rendering/classes/TopRow.md).[`elements`](../../../common/block_rendering/classes/TopRow.md#elements)

#### Defined in

node_modules/blockly/blockly.d.ts:6418

---

### hasDummyInput

> **hasDummyInput**: `boolean`

Whether the row has any dummy inputs.

#### Package

#### Inherited from

[`TopRow`](../../../common/block_rendering/classes/TopRow.md).[`hasDummyInput`](../../../common/block_rendering/classes/TopRow.md#hasdummyinput)

#### Defined in

node_modules/blockly/blockly.d.ts:6487

---

### hasExternalInput

> **hasExternalInput**: `boolean`

Whether the row has any external inputs.

#### Package

#### Inherited from

[`TopRow`](../../../common/block_rendering/classes/TopRow.md).[`hasExternalInput`](../../../common/block_rendering/classes/TopRow.md#hasexternalinput)

#### Defined in

node_modules/blockly/blockly.d.ts:6469

---

### hasInlineInput

> **hasInlineInput**: `boolean`

Whether the row has any inline inputs.

#### Package

#### Inherited from

[`TopRow`](../../../common/block_rendering/classes/TopRow.md).[`hasInlineInput`](../../../common/block_rendering/classes/TopRow.md#hasinlineinput)

#### Defined in

node_modules/blockly/blockly.d.ts:6481

---

### hasJaggedEdge

> **hasJaggedEdge**: `boolean`

Whether the row has a jagged edge.

#### Package

#### Inherited from

[`TopRow`](../../../common/block_rendering/classes/TopRow.md).[`hasJaggedEdge`](../../../common/block_rendering/classes/TopRow.md#hasjaggededge)

#### Defined in

node_modules/blockly/blockly.d.ts:6493

---

### hasPreviousConnection

> **hasPreviousConnection**: `boolean`

Whether the block has a previous connection.

#### Package

#### Inherited from

[`TopRow`](../../../common/block_rendering/classes/TopRow.md).[`hasPreviousConnection`](../../../common/block_rendering/classes/TopRow.md#haspreviousconnection)

#### Defined in

node_modules/blockly/blockly.d.ts:9719

---

### hasStatement

> **hasStatement**: `boolean`

Whether the row has any statement inputs.

#### Package

#### Inherited from

[`TopRow`](../../../common/block_rendering/classes/TopRow.md).[`hasStatement`](../../../common/block_rendering/classes/TopRow.md#hasstatement)

#### Defined in

node_modules/blockly/blockly.d.ts:6475

---

### height

> **height**: `number`

The height of the row.

#### Package

#### Inherited from

[`TopRow`](../../../common/block_rendering/classes/TopRow.md).[`height`](../../../common/block_rendering/classes/TopRow.md#height)

#### Defined in

node_modules/blockly/blockly.d.ts:9742

---

### minHeight

> **minHeight**: `number`

The minimum height of the row.

#### Package

#### Inherited from

[`TopRow`](../../../common/block_rendering/classes/TopRow.md).[`minHeight`](../../../common/block_rendering/classes/TopRow.md#minheight)

#### Defined in

node_modules/blockly/blockly.d.ts:6437

---

### minWidth

> **minWidth**: `number`

The minimum width of the row, from the left edge of the block to the right.
Does not include child blocks unless they are inline.

#### Package

#### Inherited from

[`TopRow`](../../../common/block_rendering/classes/TopRow.md).[`minWidth`](../../../common/block_rendering/classes/TopRow.md#minwidth)

#### Defined in

node_modules/blockly/blockly.d.ts:6444

---

### notchOffset

> **notchOffset**: `number`

#### Inherited from

[`TopRow`](../../../common/block_rendering/classes/TopRow.md).[`notchOffset`](../../../common/block_rendering/classes/TopRow.md#notchoffset)

#### Defined in

node_modules/blockly/blockly.d.ts:6500

---

### type

> **type**: `number`

The type of this rendering object.

#### Package

#### Inherited from

[`TopRow`](../../../common/block_rendering/classes/TopRow.md).[`type`](../../../common/block_rendering/classes/TopRow.md#type)

#### Defined in

node_modules/blockly/blockly.d.ts:6412

---

### width

> **width**: `number`

The width of the row, from the left edge of the block to the right.
Does not include child blocks unless they are inline.

#### Package

#### Inherited from

[`TopRow`](../../../common/block_rendering/classes/TopRow.md).[`width`](../../../common/block_rendering/classes/TopRow.md#width)

#### Defined in

node_modules/blockly/blockly.d.ts:9741

---

### widthWithConnectedBlocks

> **widthWithConnectedBlocks**: `number`

The width of the row, from the left edge of the block to the edge of the
block or any connected child blocks.

#### Package

#### Inherited from

[`TopRow`](../../../common/block_rendering/classes/TopRow.md).[`widthWithConnectedBlocks`](../../../common/block_rendering/classes/TopRow.md#widthwithconnectedblocks)

#### Defined in

node_modules/blockly/blockly.d.ts:9743

---

### xPos

> **xPos**: `number`

The X position of the row relative to the origin of the block's svg group.

#### Package

#### Inherited from

[`TopRow`](../../../common/block_rendering/classes/TopRow.md).[`xPos`](../../../common/block_rendering/classes/TopRow.md#xpos)

#### Defined in

node_modules/blockly/blockly.d.ts:6463

---

### yPos

> **yPos**: `number`

The Y position of the row relative to the origin of the block's svg group.

#### Package

#### Inherited from

[`TopRow`](../../../common/block_rendering/classes/TopRow.md).[`yPos`](../../../common/block_rendering/classes/TopRow.md#ypos)

#### Defined in

node_modules/blockly/blockly.d.ts:6457

## Methods

### endsWithElemSpacer()

> **endsWithElemSpacer**(): `boolean`

#### Returns

`boolean`

#### Overrides

[`TopRow`](../../../common/block_rendering/classes/TopRow.md).[`endsWithElemSpacer`](../../../common/block_rendering/classes/TopRow.md#endswithelemspacer)

#### Defined in

node_modules/blockly/blockly.d.ts:22007

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

[`TopRow`](../../../common/block_rendering/classes/TopRow.md).[`getFirstSpacer`](../../../common/block_rendering/classes/TopRow.md#getfirstspacer)

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

[`TopRow`](../../../common/block_rendering/classes/TopRow.md).[`getLastInput`](../../../common/block_rendering/classes/TopRow.md#getlastinput)

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

[`TopRow`](../../../common/block_rendering/classes/TopRow.md).[`getLastSpacer`](../../../common/block_rendering/classes/TopRow.md#getlastspacer)

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

[`TopRow`](../../../common/block_rendering/classes/TopRow.md).[`hasLeftSquareCorner`](../../../common/block_rendering/classes/TopRow.md#hasleftsquarecorner)

#### Defined in

node_modules/blockly/blockly.d.ts:22012

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

[`TopRow`](../../../common/block_rendering/classes/TopRow.md).[`hasRightSquareCorner`](../../../common/block_rendering/classes/TopRow.md#hasrightsquarecorner)

#### Defined in

node_modules/blockly/blockly.d.ts:22017

---

### measure()

> **measure**(): `void`

#### Returns

`void`

#### Inherited from

[`TopRow`](../../../common/block_rendering/classes/TopRow.md).[`measure`](../../../common/block_rendering/classes/TopRow.md#measure)

#### Defined in

node_modules/blockly/blockly.d.ts:9740

---

### startsWithElemSpacer()

> **startsWithElemSpacer**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[`TopRow`](../../../common/block_rendering/classes/TopRow.md).[`startsWithElemSpacer`](../../../common/block_rendering/classes/TopRow.md#startswithelemspacer)

#### Defined in

node_modules/blockly/blockly.d.ts:9747
