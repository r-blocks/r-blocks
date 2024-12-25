# Class: BottomRow

An object containing information about what elements are in the bottom row of
a block as well as spacing information for the bottom row.
Elements in a bottom row can consist of corners, spacers and next
connections.

## Param

The rendering
constants provider.

## Package

## Alias

Blockly.blockRendering.BottomRow

## Extends

- [`Row`](Row.md)

## Extended by

- [`BottomRow`](../../../zelos/zelos/classes/BottomRow.md)

## Constructors

### new BottomRow()

> **new BottomRow**(`constants`): [`BottomRow`](BottomRow.md)

#### Parameters

##### constants

`any`

#### Returns

[`BottomRow`](BottomRow.md)

#### Overrides

[`Row`](Row.md).[`constructor`](Row.md#constructors)

#### Defined in

node_modules/blockly/blockly.d.ts:6835

## Properties

### align

> **align**: `number`

Alignment of the row.

#### Package

#### Inherited from

[`Row`](Row.md).[`align`](Row.md#align)

#### Defined in

node_modules/blockly/blockly.d.ts:6506

---

### baseline

> **baseline**: `number`

The Y position of the bottom edge of the block, relative to the origin
of the block rendering.

#### Defined in

node_modules/blockly/blockly.d.ts:6860

---

### connection

> **connection**: [`NextConnection`](NextConnection.md)

The next connection on the row, if any.

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:6847

---

### constants\_

> `protected` **constants\_**: [`ConstantProvider`](ConstantProvider.md)

The renderer's constant provider.

#### Inherited from

[`Row`](Row.md).[`constants_`](Row.md#constants_)

#### Defined in

node_modules/blockly/blockly.d.ts:6499

---

### descenderHeight

> **descenderHeight**: `number`

The amount that the bottom of the block extends below the horizontal edge,
e.g. because of a next connection. Must be non-negative (see #2820).

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:6854

---

### elements

> **elements**: [`Measurable`](Measurable.md)[]

An array of elements contained in this row.

#### Package

#### Inherited from

[`Row`](Row.md).[`elements`](Row.md#elements)

#### Defined in

node_modules/blockly/blockly.d.ts:6418

---

### hasDummyInput

> **hasDummyInput**: `boolean`

Whether the row has any dummy inputs.

#### Package

#### Inherited from

[`Row`](Row.md).[`hasDummyInput`](Row.md#hasdummyinput)

#### Defined in

node_modules/blockly/blockly.d.ts:6487

---

### hasExternalInput

> **hasExternalInput**: `boolean`

Whether the row has any external inputs.

#### Package

#### Inherited from

[`Row`](Row.md).[`hasExternalInput`](Row.md#hasexternalinput)

#### Defined in

node_modules/blockly/blockly.d.ts:6469

---

### hasInlineInput

> **hasInlineInput**: `boolean`

Whether the row has any inline inputs.

#### Package

#### Inherited from

[`Row`](Row.md).[`hasInlineInput`](Row.md#hasinlineinput)

#### Defined in

node_modules/blockly/blockly.d.ts:6481

---

### hasJaggedEdge

> **hasJaggedEdge**: `boolean`

Whether the row has a jagged edge.

#### Package

#### Inherited from

[`Row`](Row.md).[`hasJaggedEdge`](Row.md#hasjaggededge)

#### Defined in

node_modules/blockly/blockly.d.ts:6493

---

### hasNextConnection

> **hasNextConnection**: `boolean`

Whether this row has a next connection.

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:6841

---

### hasStatement

> **hasStatement**: `boolean`

Whether the row has any statement inputs.

#### Package

#### Inherited from

[`Row`](Row.md).[`hasStatement`](Row.md#hasstatement)

#### Defined in

node_modules/blockly/blockly.d.ts:6475

---

### height

> **height**: `number`

The height of the row.

#### Package

#### Overrides

[`Row`](Row.md).[`height`](Row.md#height)

#### Defined in

node_modules/blockly/blockly.d.ts:6878

---

### minHeight

> **minHeight**: `number`

The minimum height of the row.

#### Package

#### Inherited from

[`Row`](Row.md).[`minHeight`](Row.md#minheight)

#### Defined in

node_modules/blockly/blockly.d.ts:6437

---

### minWidth

> **minWidth**: `number`

The minimum width of the row, from the left edge of the block to the right.
Does not include child blocks unless they are inline.

#### Package

#### Inherited from

[`Row`](Row.md).[`minWidth`](Row.md#minwidth)

#### Defined in

node_modules/blockly/blockly.d.ts:6444

---

### notchOffset

> **notchOffset**: `number`

#### Inherited from

[`Row`](Row.md).[`notchOffset`](Row.md#notchoffset)

#### Defined in

node_modules/blockly/blockly.d.ts:6500

---

### type

> **type**: `number`

The type of this rendering object.

#### Package

#### Inherited from

[`Row`](Row.md).[`type`](Row.md#type)

#### Defined in

node_modules/blockly/blockly.d.ts:6412

---

### width

> **width**: `number`

The width of the row, from the left edge of the block to the right.
Does not include child blocks unless they are inline.

#### Package

#### Overrides

[`Row`](Row.md).[`width`](Row.md#width)

#### Defined in

node_modules/blockly/blockly.d.ts:6877

---

### widthWithConnectedBlocks

> **widthWithConnectedBlocks**: `number`

The width of the row, from the left edge of the block to the edge of the
block or any connected child blocks.

#### Package

#### Overrides

[`Row`](Row.md).[`widthWithConnectedBlocks`](Row.md#widthwithconnectedblocks)

#### Defined in

node_modules/blockly/blockly.d.ts:6879

---

### xPos

> **xPos**: `number`

The X position of the row relative to the origin of the block's svg group.

#### Package

#### Inherited from

[`Row`](Row.md).[`xPos`](Row.md#xpos)

#### Defined in

node_modules/blockly/blockly.d.ts:6463

---

### yPos

> **yPos**: `number`

The Y position of the row relative to the origin of the block's svg group.

#### Package

#### Inherited from

[`Row`](Row.md).[`yPos`](Row.md#ypos)

#### Defined in

node_modules/blockly/blockly.d.ts:6457

## Methods

### endsWithElemSpacer()

> **endsWithElemSpacer**(): `boolean`

#### Returns

`boolean`

#### Overrides

[`Row`](Row.md).[`endsWithElemSpacer`](Row.md#endswithelemspacer)

#### Defined in

node_modules/blockly/blockly.d.ts:6887

---

### getFirstSpacer()

> **getFirstSpacer**(): [`InRowSpacer`](InRowSpacer.md)

Convenience method to get the first spacer element on this row.

#### Returns

[`InRowSpacer`](InRowSpacer.md)

The first spacer element on
this row.

#### Package

#### Inherited from

[`Row`](Row.md).[`getFirstSpacer`](Row.md#getfirstspacer)

#### Defined in

node_modules/blockly/blockly.d.ts:6537

---

### getLastInput()

> **getLastInput**(): [`InputConnection`](InputConnection.md)

Get the last input on this row, if it has one.

#### Returns

[`InputConnection`](InputConnection.md)

The last input on the row,
or null.

#### Package

#### Inherited from

[`Row`](Row.md).[`getLastInput`](Row.md#getlastinput)

#### Defined in

node_modules/blockly/blockly.d.ts:6513

---

### getLastSpacer()

> **getLastSpacer**(): [`InRowSpacer`](InRowSpacer.md)

Convenience method to get the last spacer element on this row.

#### Returns

[`InRowSpacer`](InRowSpacer.md)

The last spacer element on
this row.

#### Package

#### Inherited from

[`Row`](Row.md).[`getLastSpacer`](Row.md#getlastspacer)

#### Defined in

node_modules/blockly/blockly.d.ts:6544

---

### hasLeftSquareCorner()

> **hasLeftSquareCorner**(`block`): `boolean`

Returns whether or not the bottom row has a left square corner.

#### Parameters

##### block

[`BlockSvg`](../../../../classes/BlockSvg.md)

The block whose bottom row this represents.

#### Returns

`boolean`

Whether or not the bottom row has a left square corner.

#### Defined in

node_modules/blockly/blockly.d.ts:6866

---

### hasRightSquareCorner()

> **hasRightSquareCorner**(`_block`): `boolean`

Returns whether or not the bottom row has a right square corner.

#### Parameters

##### \_block

[`BlockSvg`](../../../../classes/BlockSvg.md)

The block whose bottom row this represents.

#### Returns

`boolean`

Whether or not the bottom row has a right square corner.

#### Defined in

node_modules/blockly/blockly.d.ts:6872

---

### measure()

> **measure**(): `void`

#### Returns

`void`

#### Overrides

[`Row`](Row.md).[`measure`](Row.md#measure)

#### Defined in

node_modules/blockly/blockly.d.ts:6876

---

### startsWithElemSpacer()

> **startsWithElemSpacer**(): `boolean`

#### Returns

`boolean`

#### Overrides

[`Row`](Row.md).[`startsWithElemSpacer`](Row.md#startswithelemspacer)

#### Defined in

node_modules/blockly/blockly.d.ts:6883
