# Class: SpacerRow

An object containing information about a spacer between two rows.

## Param

The rendering
constants provider.

## Param

The height of the spacer.

## Param

The width of the spacer.

## Package

## Alias

Blockly.blockRendering.SpacerRow

## Extends

- [`Row`](Row.md)

## Constructors

### new SpacerRow()

> **new SpacerRow**(`constants`, `height`, `width`): [`SpacerRow`](SpacerRow.md)

#### Parameters

##### constants

`any`

##### height

`any`

##### width

`any`

#### Returns

[`SpacerRow`](SpacerRow.md)

#### Overrides

[`Row`](Row.md).[`constructor`](Row.md#constructors)

#### Defined in

node_modules/blockly/blockly.d.ts:9632

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

### constants\_

> `protected` **constants\_**: [`ConstantProvider`](ConstantProvider.md)

The renderer's constant provider.

#### Inherited from

[`Row`](Row.md).[`constants_`](Row.md#constants_)

#### Defined in

node_modules/blockly/blockly.d.ts:6499

---

### elements

> **elements**: [`InRowSpacer`](InRowSpacer.md)[]

An array of elements contained in this row.

#### Package

#### Overrides

[`Row`](Row.md).[`elements`](Row.md#elements)

#### Defined in

node_modules/blockly/blockly.d.ts:9637

---

### followsStatement

> **followsStatement**: `boolean`

#### Defined in

node_modules/blockly/blockly.d.ts:9635

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

> **height**: `any`

The height of the row.

#### Package

#### Overrides

[`Row`](Row.md).[`height`](Row.md#height)

#### Defined in

node_modules/blockly/blockly.d.ts:9634

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

> **width**: `any`

The width of the row, from the left edge of the block to the right.
Does not include child blocks unless they are inline.

#### Package

#### Overrides

[`Row`](Row.md).[`width`](Row.md#width)

#### Defined in

node_modules/blockly/blockly.d.ts:9633

---

### widthWithConnectedBlocks

> **widthWithConnectedBlocks**: `number`

The width of the row, from the left edge of the block to the edge of the
block or any connected child blocks.

#### Package

#### Overrides

[`Row`](Row.md).[`widthWithConnectedBlocks`](Row.md#widthwithconnectedblocks)

#### Defined in

node_modules/blockly/blockly.d.ts:9636

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

Determines whether this row should end with an element spacer.

#### Returns

`boolean`

Whether the row should end with a spacer.

#### Package

#### Inherited from

[`Row`](Row.md).[`endsWithElemSpacer`](Row.md#endswithelemspacer)

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

### measure()

> **measure**(): `void`

#### Returns

`void`

#### Overrides

[`Row`](Row.md).[`measure`](Row.md#measure)

#### Defined in

node_modules/blockly/blockly.d.ts:9641

---

### startsWithElemSpacer()

> **startsWithElemSpacer**(): `boolean`

Determines whether this row should start with an element spacer.

#### Returns

`boolean`

Whether the row should start with a spacer.

#### Package

#### Inherited from

[`Row`](Row.md).[`startsWithElemSpacer`](Row.md#startswithelemspacer)

#### Defined in

node_modules/blockly/blockly.d.ts:6524
