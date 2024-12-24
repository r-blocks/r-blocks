# Class: RenderInfo

## Extends

- [`RenderInfo`](../../../common/block_rendering/classes/RenderInfo.md)

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

Blockly.thrasos.RenderInfo

#### Overrides

[`RenderInfo`](../../../common/block_rendering/classes/RenderInfo.md).[`constructor`](../../../common/block_rendering/classes/RenderInfo.md#constructors)

#### Defined in

node_modules/blockly/blockly.d.ts:20834

## Properties

### block\_

> **block\_**: [`BlockSvg`](../../../../classes/BlockSvg.md)

#### Inherited from

[`RenderInfo`](../../../common/block_rendering/classes/RenderInfo.md).[`block_`](../../../common/block_rendering/classes/RenderInfo.md#block_)

#### Defined in

node_modules/blockly/blockly.d.ts:9773

---

### bottomRow

> **bottomRow**: [`BottomRow`](../../../common/block_rendering/classes/BottomRow.md)

An object with rendering information about the bottom row of the block.

#### Inherited from

[`RenderInfo`](../../../common/block_rendering/classes/RenderInfo.md).[`bottomRow`](../../../common/block_rendering/classes/RenderInfo.md#bottomrow)

#### Defined in

node_modules/blockly/blockly.d.ts:9859

---

### constants\_

> `protected` **constants\_**: [`ConstantProvider`](../../../common/block_rendering/classes/ConstantProvider.md)

The renderer's constant provider.

#### Inherited from

[`RenderInfo`](../../../common/block_rendering/classes/RenderInfo.md).[`constants_`](../../../common/block_rendering/classes/RenderInfo.md#constants_)

#### Defined in

node_modules/blockly/blockly.d.ts:9785

---

### height

> **height**: `number`

The height of the rendered block, including child blocks.

#### Overrides

[`RenderInfo`](../../../common/block_rendering/classes/RenderInfo.md).[`height`](../../../common/block_rendering/classes/RenderInfo.md#height)

#### Defined in

node_modules/blockly/blockly.d.ts:20862

---

### hiddenIcons

> **hiddenIcons**: [`Icon`](../../../common/block_rendering/classes/Icon.md)[]

An array of measurable objects containing hidden icons.

#### Inherited from

[`RenderInfo`](../../../common/block_rendering/classes/RenderInfo.md).[`hiddenIcons`](../../../common/block_rendering/classes/RenderInfo.md#hiddenicons)

#### Defined in

node_modules/blockly/blockly.d.ts:9849

---

### inputRows

> **inputRows**: [`InputRow`](../../../common/block_rendering/classes/InputRow.md)[]

An array of input rows on the block.

#### Inherited from

[`RenderInfo`](../../../common/block_rendering/classes/RenderInfo.md).[`inputRows`](../../../common/block_rendering/classes/RenderInfo.md#inputrows)

#### Defined in

node_modules/blockly/blockly.d.ts:9844

---

### isCollapsed

> **isCollapsed**: `boolean`

Whether the block is collapsed.

#### Inherited from

[`RenderInfo`](../../../common/block_rendering/classes/RenderInfo.md).[`isCollapsed`](../../../common/block_rendering/classes/RenderInfo.md#iscollapsed)

#### Defined in

node_modules/blockly/blockly.d.ts:9802

---

### isInline

> **isInline**: `boolean`

Whether the block should be rendered as a single line, either because it's
inline or because it has been collapsed.

#### Inherited from

[`RenderInfo`](../../../common/block_rendering/classes/RenderInfo.md).[`isInline`](../../../common/block_rendering/classes/RenderInfo.md#isinline)

#### Defined in

node_modules/blockly/blockly.d.ts:9797

---

### isInsertionMarker

> **isInsertionMarker**: `boolean`

Whether the block is an insertion marker. Insertion markers are the same
shape as normal blocks, but don't show fields.

#### Inherited from

[`RenderInfo`](../../../common/block_rendering/classes/RenderInfo.md).[`isInsertionMarker`](../../../common/block_rendering/classes/RenderInfo.md#isinsertionmarker)

#### Defined in

node_modules/blockly/blockly.d.ts:9808

---

### outputConnection

> **outputConnection**: [`OutputConnection`](../../../common/block_rendering/classes/OutputConnection.md)

A measurable representing the output connection if the block has one.
Otherwise null.

#### Inherited from

[`RenderInfo`](../../../common/block_rendering/classes/RenderInfo.md).[`outputConnection`](../../../common/block_rendering/classes/RenderInfo.md#outputconnection)

#### Defined in

node_modules/blockly/blockly.d.ts:9791

---

### renderer\_

> `protected` **renderer\_**: [`Renderer`](../../../common/block_rendering/classes/Renderer.md)

The block renderer in use.

#### Inherited from

[`RenderInfo`](../../../common/block_rendering/classes/RenderInfo.md).[`renderer_`](../../../common/block_rendering/classes/RenderInfo.md#renderer_)

#### Defined in

node_modules/blockly/blockly.d.ts:9779

---

### rows

> **rows**: [`Row`](../../../common/block_rendering/classes/Row.md)[]

An array of Row objects containing sizing information.

#### Inherited from

[`RenderInfo`](../../../common/block_rendering/classes/RenderInfo.md).[`rows`](../../../common/block_rendering/classes/RenderInfo.md#rows)

#### Defined in

node_modules/blockly/blockly.d.ts:9839

---

### RTL

> **RTL**: `boolean`

True if the block should be rendered right-to-left.

#### Inherited from

[`RenderInfo`](../../../common/block_rendering/classes/RenderInfo.md).[`RTL`](../../../common/block_rendering/classes/RenderInfo.md#rtl)

#### Defined in

node_modules/blockly/blockly.d.ts:9813

---

### startX

> **startX**: `number`

#### Inherited from

[`RenderInfo`](../../../common/block_rendering/classes/RenderInfo.md).[`startX`](../../../common/block_rendering/classes/RenderInfo.md#startx)

#### Defined in

node_modules/blockly/blockly.d.ts:9860

---

### startY

> **startY**: `any`

#### Overrides

[`RenderInfo`](../../../common/block_rendering/classes/RenderInfo.md).[`startY`](../../../common/block_rendering/classes/RenderInfo.md#starty)

#### Defined in

node_modules/blockly/blockly.d.ts:20863

---

### statementEdge

> **statementEdge**: `number`

#### Inherited from

[`RenderInfo`](../../../common/block_rendering/classes/RenderInfo.md).[`statementEdge`](../../../common/block_rendering/classes/RenderInfo.md#statementedge)

#### Defined in

node_modules/blockly/blockly.d.ts:9834

---

### topRow

> **topRow**: [`TopRow`](../../../common/block_rendering/classes/TopRow.md)

An object with rendering information about the top row of the block.

#### Inherited from

[`RenderInfo`](../../../common/block_rendering/classes/RenderInfo.md).[`topRow`](../../../common/block_rendering/classes/RenderInfo.md#toprow)

#### Defined in

node_modules/blockly/blockly.d.ts:9854

---

### width

> **width**: `number`

The width of the rendered block, excluding child blocks. This is the right
edge of the block when rendered LTR.

#### Inherited from

[`RenderInfo`](../../../common/block_rendering/classes/RenderInfo.md).[`width`](../../../common/block_rendering/classes/RenderInfo.md#width)

#### Defined in

node_modules/blockly/blockly.d.ts:9829

---

### widthWithChildren

> **widthWithChildren**: `any`

The width of the rendered block, including child blocks.

#### Overrides

[`RenderInfo`](../../../common/block_rendering/classes/RenderInfo.md).[`widthWithChildren`](../../../common/block_rendering/classes/RenderInfo.md#widthwithchildren)

#### Defined in

node_modules/blockly/blockly.d.ts:20861

## Methods

### addAlignmentPadding\_()

> `protected` **addAlignmentPadding\_**(`row`, `missingSpace`): `void`

Modify the given row to add the given amount of padding around its fields.
The exact location of the padding is based on the alignment property of the
last input in the field.

#### Parameters

##### row

[`Row`](../../../common/block_rendering/classes/Row.md)

The row to add padding to.

##### missingSpace

`number`

How much padding to add.

#### Returns

`void`

#### Inherited from

[`RenderInfo`](../../../common/block_rendering/classes/RenderInfo.md).[`addAlignmentPadding_`](../../../common/block_rendering/classes/RenderInfo.md#addalignmentpadding_)

#### Defined in

node_modules/blockly/blockly.d.ts:9956

---

### addElemSpacing\_()

> **addElemSpacing\_**(): `void`

#### Returns

`void`

#### Overrides

[`RenderInfo`](../../../common/block_rendering/classes/RenderInfo.md).[`addElemSpacing_`](../../../common/block_rendering/classes/RenderInfo.md#addelemspacing_)

#### Defined in

node_modules/blockly/blockly.d.ts:20844

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

[`Row`](../../../common/block_rendering/classes/Row.md)

The row that is currently being
populated.

#### Returns

`void`

#### Inherited from

[`RenderInfo`](../../../common/block_rendering/classes/RenderInfo.md).[`addInput_`](../../../common/block_rendering/classes/RenderInfo.md#addinput_)

#### Defined in

node_modules/blockly/blockly.d.ts:9903

---

### addRowSpacing\_()

> `protected` **addRowSpacing\_**(): `void`

Add spacers between rows and set their sizes.

#### Returns

`void`

#### Inherited from

[`RenderInfo`](../../../common/block_rendering/classes/RenderInfo.md).[`addRowSpacing_`](../../../common/block_rendering/classes/RenderInfo.md#addrowspacing_)

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

#### Inherited from

[`RenderInfo`](../../../common/block_rendering/classes/RenderInfo.md).[`alignRowElements_`](../../../common/block_rendering/classes/RenderInfo.md#alignrowelements_)

#### Defined in

node_modules/blockly/blockly.d.ts:9940

---

### alignStatementRow\_()

> `protected` **alignStatementRow\_**(`row`): `void`

Align the elements of a statement row based on computed bounds.
Unlike other types of rows, statement rows add space in multiple places.

#### Parameters

##### row

[`InputRow`](../../../common/block_rendering/classes/InputRow.md)

The statement row to resize.

#### Returns

`void`

#### Inherited from

[`RenderInfo`](../../../common/block_rendering/classes/RenderInfo.md).[`alignStatementRow_`](../../../common/block_rendering/classes/RenderInfo.md#alignstatementrow_)

#### Defined in

node_modules/blockly/blockly.d.ts:9963

---

### computeBounds\_()

> `protected` **computeBounds\_**(): `void`

Figure out where the right edge of the block and right edge of statement
inputs should be placed.

#### Returns

`void`

#### Inherited from

[`RenderInfo`](../../../common/block_rendering/classes/RenderInfo.md).[`computeBounds_`](../../../common/block_rendering/classes/RenderInfo.md#computebounds_)

#### Defined in

node_modules/blockly/blockly.d.ts:9933

---

### createRows\_()

> `protected` **createRows\_**(): `void`

Create rows of Measurable objects representing all renderable parts of the
block.

#### Returns

`void`

#### Inherited from

[`RenderInfo`](../../../common/block_rendering/classes/RenderInfo.md).[`createRows_`](../../../common/block_rendering/classes/RenderInfo.md#createrows_)

#### Defined in

node_modules/blockly/blockly.d.ts:9884

---

### finalize\_()

> **finalize\_**(): `void`

#### Returns

`void`

#### Overrides

[`RenderInfo`](../../../common/block_rendering/classes/RenderInfo.md).[`finalize_`](../../../common/block_rendering/classes/RenderInfo.md#finalize_)

#### Defined in

node_modules/blockly/blockly.d.ts:20860

---

### getDesiredRowWidth\_()

> `protected` **getDesiredRowWidth\_**(`_row`): `number`

Calculate the desired width of an input row.

#### Parameters

##### \_row

[`Row`](../../../common/block_rendering/classes/Row.md)

The input row.

#### Returns

`number`

The desired width of the input row.

#### Inherited from

[`RenderInfo`](../../../common/block_rendering/classes/RenderInfo.md).[`getDesiredRowWidth_`](../../../common/block_rendering/classes/RenderInfo.md#getdesiredrowwidth_)

#### Defined in

node_modules/blockly/blockly.d.ts:9947

---

### getElemCenterline\_()

> **getElemCenterline\_**(`row`, `elem`): `any`

#### Parameters

##### row

`any`

##### elem

`any`

#### Returns

`any`

#### Overrides

[`RenderInfo`](../../../common/block_rendering/classes/RenderInfo.md).[`getElemCenterline_`](../../../common/block_rendering/classes/RenderInfo.md#getelemcenterline_)

#### Defined in

node_modules/blockly/blockly.d.ts:20856

---

### getInRowSpacing\_()

> **getInRowSpacing\_**(`prev`, `next`): `any`

#### Parameters

##### prev

`any`

##### next

`any`

#### Returns

`any`

#### Overrides

[`RenderInfo`](../../../common/block_rendering/classes/RenderInfo.md).[`getInRowSpacing_`](../../../common/block_rendering/classes/RenderInfo.md#getinrowspacing_)

#### Defined in

node_modules/blockly/blockly.d.ts:20848

---

### getRenderer()

> **getRenderer**(): [`Renderer`](Renderer.md)

Get the block renderer in use.

#### Returns

[`Renderer`](Renderer.md)

The block renderer in use.

#### Package

#### Overrides

[`RenderInfo`](../../../common/block_rendering/classes/RenderInfo.md).[`getRenderer`](../../../common/block_rendering/classes/RenderInfo.md#getrenderer)

#### Defined in

node_modules/blockly/blockly.d.ts:20840

---

### getSpacerRowHeight\_()

> **getSpacerRowHeight\_**(`prev`, `next`): `any`

#### Parameters

##### prev

`any`

##### next

`any`

#### Returns

`any`

#### Overrides

[`RenderInfo`](../../../common/block_rendering/classes/RenderInfo.md).[`getSpacerRowHeight_`](../../../common/block_rendering/classes/RenderInfo.md#getspacerrowheight_)

#### Defined in

node_modules/blockly/blockly.d.ts:20852

---

### getSpacerRowWidth\_()

> `protected` **getSpacerRowWidth\_**(`_prev`, `_next`): `number`

Calculate the width of a spacer row.

#### Parameters

##### \_prev

[`Row`](../../../common/block_rendering/classes/Row.md)

The row before the spacer.

##### \_next

[`Row`](../../../common/block_rendering/classes/Row.md)

The row after the spacer.

#### Returns

`number`

The desired width of the spacer row between these two rows.

#### Inherited from

[`RenderInfo`](../../../common/block_rendering/classes/RenderInfo.md).[`getSpacerRowWidth_`](../../../common/block_rendering/classes/RenderInfo.md#getspacerrowwidth_)

#### Defined in

node_modules/blockly/blockly.d.ts:9984

---

### makeSpacerRow\_()

> `protected` **makeSpacerRow\_**(`prev`, `next`): [`SpacerRow`](../../../common/block_rendering/classes/SpacerRow.md)

Create a spacer row to go between prev and next, and set its size.

#### Parameters

##### prev

[`Row`](../../../common/block_rendering/classes/Row.md)

The previous row.

##### next

[`Row`](../../../common/block_rendering/classes/Row.md)

The next row.

#### Returns

[`SpacerRow`](../../../common/block_rendering/classes/SpacerRow.md)

The newly created spacer row.

#### Inherited from

[`RenderInfo`](../../../common/block_rendering/classes/RenderInfo.md).[`makeSpacerRow_`](../../../common/block_rendering/classes/RenderInfo.md#makespacerrow_)

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

#### Inherited from

[`RenderInfo`](../../../common/block_rendering/classes/RenderInfo.md).[`measure`](../../../common/block_rendering/classes/RenderInfo.md#measure)

#### Defined in

node_modules/blockly/blockly.d.ts:9878

---

### populateBottomRow\_()

> **populateBottomRow\_**(): `void`

Create all non-spacer elements that belong on the bottom row.

#### Returns

`void`

#### Package

#### Inherited from

[`RenderInfo`](../../../common/block_rendering/classes/RenderInfo.md).[`populateBottomRow_`](../../../common/block_rendering/classes/RenderInfo.md#populatebottomrow_)

#### Defined in

node_modules/blockly/blockly.d.ts:9894

---

### populateTopRow\_()

> **populateTopRow\_**(): `void`

Create all non-spacer elements that belong on the top row.

#### Returns

`void`

#### Package

#### Inherited from

[`RenderInfo`](../../../common/block_rendering/classes/RenderInfo.md).[`populateTopRow_`](../../../common/block_rendering/classes/RenderInfo.md#populatetoprow_)

#### Defined in

node_modules/blockly/blockly.d.ts:9889

---

### recordElemPositions\_()

> `protected` **recordElemPositions\_**(`row`): `void`

Record final position information on elements on the given row, for use in
drawing. At minimum this records xPos and centerline on each element.

#### Parameters

##### row

[`Row`](../../../common/block_rendering/classes/Row.md)

The row containing the elements.

#### Returns

`void`

#### Inherited from

[`RenderInfo`](../../../common/block_rendering/classes/RenderInfo.md).[`recordElemPositions_`](../../../common/block_rendering/classes/RenderInfo.md#recordelempositions_)

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

#### Inherited from

[`RenderInfo`](../../../common/block_rendering/classes/RenderInfo.md).[`shouldStartNewRow_`](../../../common/block_rendering/classes/RenderInfo.md#shouldstartnewrow_)

#### Defined in

node_modules/blockly/blockly.d.ts:9911
