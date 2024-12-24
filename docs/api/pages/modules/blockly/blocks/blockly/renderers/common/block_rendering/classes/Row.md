# Class: Row

An object representing a single row on a rendered block and all of its
subcomponents.

## Param

The rendering
constants provider.

## Package

## Alias

Blockly.blockRendering.Row

## Extended by

- [`BottomRow`](BottomRow.md)
- [`InputRow`](InputRow.md)
- [`SpacerRow`](SpacerRow.md)
- [`TopRow`](TopRow.md)

## Constructors

### new Row()

> **new Row**(`constants`): [`Row`](Row.md)

#### Parameters

##### constants

`any`

#### Returns

[`Row`](Row.md)

#### Defined in

node_modules/blockly/blockly.d.ts:6406

## Properties

### align

> **align**: `number`

Alignment of the row.

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:6506

---

### constants\_

> `protected` **constants\_**: [`ConstantProvider`](ConstantProvider.md)

The renderer's constant provider.

#### Defined in

node_modules/blockly/blockly.d.ts:6499

---

### elements

> **elements**: [`Measurable`](Measurable.md)[]

An array of elements contained in this row.

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:6418

---

### hasDummyInput

> **hasDummyInput**: `boolean`

Whether the row has any dummy inputs.

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:6487

---

### hasExternalInput

> **hasExternalInput**: `boolean`

Whether the row has any external inputs.

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:6469

---

### hasInlineInput

> **hasInlineInput**: `boolean`

Whether the row has any inline inputs.

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:6481

---

### hasJaggedEdge

> **hasJaggedEdge**: `boolean`

Whether the row has a jagged edge.

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:6493

---

### hasStatement

> **hasStatement**: `boolean`

Whether the row has any statement inputs.

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:6475

---

### height

> **height**: `number`

The height of the row.

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:6424

---

### minHeight

> **minHeight**: `number`

The minimum height of the row.

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:6437

---

### minWidth

> **minWidth**: `number`

The minimum width of the row, from the left edge of the block to the right.
Does not include child blocks unless they are inline.

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:6444

---

### notchOffset

> **notchOffset**: `number`

#### Defined in

node_modules/blockly/blockly.d.ts:6500

---

### type

> **type**: `number`

The type of this rendering object.

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:6412

---

### width

> **width**: `number`

The width of the row, from the left edge of the block to the right.
Does not include child blocks unless they are inline.

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:6431

---

### widthWithConnectedBlocks

> **widthWithConnectedBlocks**: `number`

The width of the row, from the left edge of the block to the edge of the
block or any connected child blocks.

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:6451

---

### xPos

> **xPos**: `number`

The X position of the row relative to the origin of the block's svg group.

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:6463

---

### yPos

> **yPos**: `number`

The Y position of the row relative to the origin of the block's svg group.

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:6457

## Methods

### endsWithElemSpacer()

> **endsWithElemSpacer**(): `boolean`

Determines whether this row should end with an element spacer.

#### Returns

`boolean`

Whether the row should end with a spacer.

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:6530

---

### getFirstSpacer()

> **getFirstSpacer**(): [`InRowSpacer`](InRowSpacer.md)

Convenience method to get the first spacer element on this row.

#### Returns

[`InRowSpacer`](InRowSpacer.md)

The first spacer element on
this row.

#### Package

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

#### Defined in

node_modules/blockly/blockly.d.ts:6544

---

### measure()

> **measure**(): `void`

Inspect all subcomponents and populate all size properties on the row.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:6518

---

### startsWithElemSpacer()

> **startsWithElemSpacer**(): `boolean`

Determines whether this row should start with an element spacer.

#### Returns

`boolean`

Whether the row should start with a spacer.

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:6524
