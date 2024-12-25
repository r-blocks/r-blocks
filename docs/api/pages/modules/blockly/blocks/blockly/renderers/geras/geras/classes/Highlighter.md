# Class: Highlighter

## Constructors

### new Highlighter()

> **new Highlighter**(`info`): [`Highlighter`](Highlighter.md)

An object that adds highlights to a block based on the given rendering
information.

Highlighting is interesting because the highlights do not fully enclose the
block. Instead, they are positioned based on a light source in the top left.
This means that rendering highlights requires exact information about the
position of each part of the block. The resulting paths are not continuous
or closed paths. The highlights for tabs and notches are loosely based on
tab and notch shapes, but are not exactly the same.

#### Parameters

##### info

[`RenderInfo`](RenderInfo.md)

An object containing all
information needed to render this block.

#### Returns

[`Highlighter`](Highlighter.md)

#### Package

#### Alias

Blockly.geras.Highlighter

#### Defined in

node_modules/blockly/blockly.d.ts:20554

## Properties

### constants\_

> **constants\_**: [`ConstantProvider`](../../../common/block_rendering/classes/ConstantProvider.md)

The renderer's constant provider.

#### Defined in

node_modules/blockly/blockly.d.ts:20563

---

### highlightConstants\_

> **highlightConstants\_**: [`HighlightConstantProvider`](HighlightConstantProvider.md)

#### Defined in

node_modules/blockly/blockly.d.ts:20567

---

### info\_

> **info\_**: [`RenderInfo`](RenderInfo.md)

#### Defined in

node_modules/blockly/blockly.d.ts:20555

---

### inlineSteps\_

> **inlineSteps\_**: `string`

#### Defined in

node_modules/blockly/blockly.d.ts:20557

---

### insideCornerPaths\_

> **insideCornerPaths\_**: `any`

#### Defined in

node_modules/blockly/blockly.d.ts:20575

---

### jaggedTeethPaths\_

> **jaggedTeethPaths\_**: `any`

#### Defined in

node_modules/blockly/blockly.d.ts:20579

---

### notchPaths\_

> **notchPaths\_**: `any`

#### Defined in

node_modules/blockly/blockly.d.ts:20577

---

### outsideCornerPaths\_

> **outsideCornerPaths\_**: `any`

#### Defined in

node_modules/blockly/blockly.d.ts:20574

---

### puzzleTabPaths\_

> **puzzleTabPaths\_**: `any`

#### Defined in

node_modules/blockly/blockly.d.ts:20576

---

### RTL\_

> **RTL\_**: `any`

#### Defined in

node_modules/blockly/blockly.d.ts:20558

---

### startPaths\_

> **startPaths\_**: `any`

#### Defined in

node_modules/blockly/blockly.d.ts:20578

---

### steps\_

> **steps\_**: `string`

#### Defined in

node_modules/blockly/blockly.d.ts:20556

## Methods

### drawBottomRow()

> **drawBottomRow**(`row`): `void`

#### Parameters

##### row

`any`

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:20591

---

### drawInlineInput()

> **drawInlineInput**(`input`): `void`

#### Parameters

##### input

`any`

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:20593

---

### drawJaggedEdge\_()

> **drawJaggedEdge\_**(`row`): `void`

#### Parameters

##### row

`any`

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:20587

---

### drawLeft()

> **drawLeft**(): `void`

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:20592

---

### drawRightSideRow()

> **drawRightSideRow**(`row`): `void`

#### Parameters

##### row

`any`

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:20590

---

### drawStatementInput()

> **drawStatementInput**(`row`): `void`

#### Parameters

##### row

`any`

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:20589

---

### drawTopCorner()

> **drawTopCorner**(`row`): `void`

#### Parameters

##### row

`any`

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:20586

---

### drawValueInput()

> **drawValueInput**(`row`): `void`

#### Parameters

##### row

`any`

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:20588

---

### getPath()

> **getPath**(): `string`

Get the steps for the highlight path.

#### Returns

`string`

The steps for the highlight path.

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:20585
