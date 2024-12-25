# Class: RenderInfo

## Extended by

- [`RenderInfo`](../../../geras/geras/classes/RenderInfo.md)
- [`RenderInfo`](../../../minimalist/minimalist/classes/RenderInfo.md)
- [`RenderInfo`](../../../thrasos/thrasos/classes/RenderInfo.md)
- [`RenderInfo`](../../../zelos/zelos/classes/RenderInfo.md)

## Constructors

### new RenderInfo()

> **new RenderInfo**(`renderer`, `block`): [`RenderInfo`](RenderInfo.md)

An object containing all sizing information needed to draw this block.

This measure pass does not propagate changes to the block (although fields
may choose to rerender when getSize() is called). However, calling it
repeatedly may be expensive.

#### Parameters

##### renderer

[`Renderer`](Renderer.md)

The renderer in use.

##### block

[`BlockSvg`](../../../../classes/BlockSvg.md)

The block to measure.

#### Returns

[`RenderInfo`](RenderInfo.md)

#### Package

#### Alias

Blockly.blockRendering.RenderInfo

#### Defined in

node_modules/blockly/blockly.d.ts:9772

## Properties

### block\_

> **block\_**: [`BlockSvg`](../../../../classes/BlockSvg.md)

#### Defined in

node_modules/blockly/blockly.d.ts:9773

---

### bottomRow

> **bottomRow**: [`BottomRow`](BottomRow.md)

An object with rendering information about the bottom row of the block.

#### Defined in

node_modules/blockly/blockly.d.ts:9859

---

### constants\_

> `protected` **constants\_**: [`ConstantProvider`](ConstantProvider.md)

The renderer's constant provider.

#### Defined in

node_modules/blockly/blockly.d.ts:9785

---

### height

> **height**: `number`

The height of the rendered block, including child blocks.

#### Defined in

node_modules/blockly/blockly.d.ts:9818

---

### hiddenIcons

> **hiddenIcons**: [`Icon`](Icon.md)[]

An array of measurable objects containing hidden icons.

#### Defined in

node_modules/blockly/blockly.d.ts:9849

---

### inputRows

> **inputRows**: [`InputRow`](InputRow.md)[]

An array of input rows on the block.

#### Defined in

node_modules/blockly/blockly.d.ts:9844

---

### isCollapsed

> **isCollapsed**: `boolean`

Whether the block is collapsed.

#### Defined in

node_modules/blockly/blockly.d.ts:9802

---

### isInline

> **isInline**: `boolean`

Whether the block should be rendered as a single line, either because it's
inline or because it has been collapsed.

#### Defined in

node_modules/blockly/blockly.d.ts:9797

---

### isInsertionMarker

> **isInsertionMarker**: `boolean`

Whether the block is an insertion marker. Insertion markers are the same
shape as normal blocks, but don't show fields.

#### Defined in

node_modules/blockly/blockly.d.ts:9808

---

### outputConnection

> **outputConnection**: [`OutputConnection`](OutputConnection.md)

A measurable representing the output connection if the block has one.
Otherwise null.

#### Defined in

node_modules/blockly/blockly.d.ts:9791

---

### renderer\_

> `protected` **renderer\_**: [`Renderer`](Renderer.md)

The block renderer in use.

#### Defined in

node_modules/blockly/blockly.d.ts:9779

---

### rows

> **rows**: [`Row`](Row.md)[]

An array of Row objects containing sizing information.

#### Defined in

node_modules/blockly/blockly.d.ts:9839

---

### RTL

> **RTL**: `boolean`

True if the block should be rendered right-to-left.

#### Defined in

node_modules/blockly/blockly.d.ts:9813

---

### startX

> **startX**: `number`

#### Defined in

node_modules/blockly/blockly.d.ts:9860

---

### startY

> **startY**: `number`

#### Defined in

node_modules/blockly/blockly.d.ts:9861

---

### statementEdge

> **statementEdge**: `number`

#### Defined in

node_modules/blockly/blockly.d.ts:9834

---

### topRow

> **topRow**: [`TopRow`](TopRow.md)

An object with rendering information about the top row of the block.

#### Defined in

node_modules/blockly/blockly.d.ts:9854

---

### width

> **width**: `number`

The width of the rendered block, excluding child blocks. This is the right
edge of the block when rendered LTR.

#### Defined in

node_modules/blockly/blockly.d.ts:9829

---

### widthWithChildren

> **widthWithChildren**: `number`

The width of the rendered block, including child blocks.

#### Defined in

node_modules/blockly/blockly.d.ts:9823

## Methods

### addAlignmentPadding\_()

> `protected` **addAlignmentPadding\_**(`row`, `missingSpace`): `void`

Modify the given row to add the given amount of padding around its fields.
The exact location of the padding is based on the alignment property of the
last input in the field.

#### Parameters

##### row

[`Row`](Row.md)

The row to add padding to.

##### missingSpace

`number`

How much padding to add.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:9956

---

### addElemSpacing\_()

> `protected` **addElemSpacing\_**(): `void`

Add horizontal spacing between and around elements within each row.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:9916

---

### addInput\_()

> `protected` **addInput\_**(`input`, `activeRow`): `void`

Add an input element to the active row, if needed, and record the type of the
input on the row.

#### Parameters

##### input

[`Input`](../../../../classes/Input.md)

The input to record information about.

##### activeRow

[`Row`](Row.md)

The row that is currently being
populated.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:9903

---

### addRowSpacing\_()

> `protected` **addRowSpacing\_**(): `void`

Add spacers between rows and set their sizes.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:9968

---

### alignRowElements\_()

> `protected` **alignRowElements\_**(): `void`

Extra spacing may be necessary to make sure that the right sides of all
rows line up. This can only be calculated after a first pass to calculate
the sizes of all rows.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:9940

---

### alignStatementRow\_()

> `protected` **alignStatementRow\_**(`row`): `void`

Align the elements of a statement row based on computed bounds.
Unlike other types of rows, statement rows add space in multiple places.

#### Parameters

##### row

[`InputRow`](InputRow.md)

The statement row to resize.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:9963

---

### computeBounds\_()

> `protected` **computeBounds\_**(): `void`

Figure out where the right edge of the block and right edge of statement
inputs should be placed.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:9933

---

### createRows\_()

> `protected` **createRows\_**(): `void`

Create rows of Measurable objects representing all renderable parts of the
block.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:9884

---

### finalize\_()

> `protected` **finalize\_**(): `void`

Make any final changes to the rendering information object. In particular,
store the y position of each row, and record the height of the full block.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:10017

---

### getDesiredRowWidth\_()

> `protected` **getDesiredRowWidth\_**(`_row`): `number`

Calculate the desired width of an input row.

#### Parameters

##### \_row

[`Row`](Row.md)

The input row.

#### Returns

`number`

The desired width of the input row.

#### Defined in

node_modules/blockly/blockly.d.ts:9947

---

### getElemCenterline\_()

> `protected` **getElemCenterline\_**(`row`, `elem`): `number`

Calculate the centerline of an element in a rendered row.
This base implementation puts the centerline at the middle of the row
vertically, with no special cases. You will likely need extra logic to
handle (at minimum) top and bottom rows.

#### Parameters

##### row

[`Row`](Row.md)

The row containing the element.

##### elem

[`Measurable`](Measurable.md)

The element to place.

#### Returns

`number`

The desired centerline of the given element, as an offset
from the top left of the block.

#### Defined in

node_modules/blockly/blockly.d.ts:10004

---

### getInRowSpacing\_()

> `protected` **getInRowSpacing\_**(`prev`, `next`): `number`

Calculate the width of a spacer element in a row based on the previous and
next elements in that row. For instance, extra padding is added between two
editable fields.

#### Parameters

##### prev

[`Measurable`](Measurable.md)

The element before the
spacer.

##### next

[`Measurable`](Measurable.md)

The element after the spacer.

#### Returns

`number`

The size of the spacing between the two elements.

#### Defined in

node_modules/blockly/blockly.d.ts:9927

---

### getRenderer()

> **getRenderer**(): [`Renderer`](Renderer.md)

Get the block renderer in use.

#### Returns

[`Renderer`](Renderer.md)

The block renderer in use.

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:9867

---

### getSpacerRowHeight\_()

> `protected` **getSpacerRowHeight\_**(`_prev`, `_next`): `number`

Calculate the height of a spacer row.

#### Parameters

##### \_prev

[`Row`](Row.md)

The row before the spacer.

##### \_next

[`Row`](Row.md)

The row after the spacer.

#### Returns

`number`

The desired height of the spacer row between these two rows.

#### Defined in

node_modules/blockly/blockly.d.ts:9992

---

### getSpacerRowWidth\_()

> `protected` **getSpacerRowWidth\_**(`_prev`, `_next`): `number`

Calculate the width of a spacer row.

#### Parameters

##### \_prev

[`Row`](Row.md)

The row before the spacer.

##### \_next

[`Row`](Row.md)

The row after the spacer.

#### Returns

`number`

The desired width of the spacer row between these two rows.

#### Defined in

node_modules/blockly/blockly.d.ts:9984

---

### makeSpacerRow\_()

> `protected` **makeSpacerRow\_**(`prev`, `next`): [`SpacerRow`](SpacerRow.md)

Create a spacer row to go between prev and next, and set its size.

#### Parameters

##### prev

[`Row`](Row.md)

The previous row.

##### next

[`Row`](Row.md)

The next row.

#### Returns

[`SpacerRow`](SpacerRow.md)

The newly created spacer row.

#### Defined in

node_modules/blockly/blockly.d.ts:9976

---

### measure()

> **measure**(): `void`

Populate and return an object containing all sizing information needed to
draw this block.

This measure pass does not propagate changes to the block (although fields
may choose to rerender when getSize() is called). However, calling it
repeatedly may be expensive.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:9878

---

### populateBottomRow\_()

> **populateBottomRow\_**(): `void`

Create all non-spacer elements that belong on the bottom row.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:9894

---

### populateTopRow\_()

> **populateTopRow\_**(): `void`

Create all non-spacer elements that belong on the top row.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:9889

---

### recordElemPositions\_()

> `protected` **recordElemPositions\_**(`row`): `void`

Record final position information on elements on the given row, for use in
drawing. At minimum this records xPos and centerline on each element.

#### Parameters

##### row

[`Row`](Row.md)

The row containing the elements.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:10011

---

### shouldStartNewRow\_()

> `protected` **shouldStartNewRow\_**(`input`, `lastInput`): `boolean`

Decide whether to start a new row between the two Blockly.Inputs.

#### Parameters

##### input

[`Input`](../../../../classes/Input.md)

The first input to consider

##### lastInput

[`Input`](../../../../classes/Input.md)

The input that follows.

#### Returns

`boolean`

True if the next input should be rendered on a new row.

#### Defined in

node_modules/blockly/blockly.d.ts:9911
