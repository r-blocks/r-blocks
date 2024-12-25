# Class: HighlightConstantProvider

An object that provides constants for rendering highlights on blocks.
Some highlights are simple offsets of the parent paths and can be generated
programmatically. Others, especially on curves, are just made out of piles
of constants and are hard to tweak.

## Param

The rendering
constants provider.

## Package

## Alias

Blockly.geras.HighlightConstantProvider

## Constructors

### new HighlightConstantProvider()

> **new HighlightConstantProvider**(`constants`): [`HighlightConstantProvider`](HighlightConstantProvider.md)

#### Parameters

##### constants

`any`

#### Returns

[`HighlightConstantProvider`](HighlightConstantProvider.md)

#### Defined in

node_modules/blockly/blockly.d.ts:20162

## Properties

### constantProvider

> **constantProvider**: [`ConstantProvider`](../../../common/block_rendering/classes/ConstantProvider.md)

The renderer's constant provider.

#### Defined in

node_modules/blockly/blockly.d.ts:20167

---

### INSIDE_CORNER

> **INSIDE_CORNER**: `any`

An object containing sizing and path information about inside corner
highlights.

#### Defined in

node_modules/blockly/blockly.d.ts:20189

---

### JAGGED_TEETH

> **JAGGED_TEETH**: `any`

An object containing sizing and path information about highlights for
collapsed block indicators.

#### Defined in

node_modules/blockly/blockly.d.ts:20212

---

### NOTCH

> **NOTCH**: `any`

An object containing sizing and path information about notch highlights.

#### Defined in

node_modules/blockly/blockly.d.ts:20206

---

### OFFSET

> **OFFSET**: `number`

The offset between the block's main path and highlight path.

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:20173

---

### OUTSIDE_CORNER

> **OUTSIDE_CORNER**: `any`

An object containing sizing and path information about outside corner
highlights.

#### Defined in

node_modules/blockly/blockly.d.ts:20195

---

### PUZZLE_TAB

> **PUZZLE_TAB**: `any`

An object containing sizing and path information about puzzle tab
highlights.

#### Defined in

node_modules/blockly/blockly.d.ts:20201

---

### START_HAT

> **START_HAT**: `any`

An object containing sizing and path information about start hat
highlights.

#### Defined in

node_modules/blockly/blockly.d.ts:20218

---

### START_POINT

> **START_POINT**: `string`

The start point, which is offset in both X and Y, as an SVG path chunk.

#### Defined in

node_modules/blockly/blockly.d.ts:20178

## Methods

### init()

> **init**(): `void`

Initialize shape objects based on the constants set in the constructor.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:20183

---

### makeInsideCorner()

> **makeInsideCorner**(): `any`

#### Returns

`any`

An object containing sizing and path information about
inside corner highlights.

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:20224

---

### makeJaggedTeeth()

> **makeJaggedTeeth**(): `any`

#### Returns

`any`

An object containing sizing and path information about
collapsed block edge highlights.

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:20248

---

### makeNotch()

> **makeNotch**(): `any`

#### Returns

`any`

An object containing sizing and path information about
notch highlights.

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:20242

---

### makeOutsideCorner()

> **makeOutsideCorner**(): `any`

#### Returns

`any`

An object containing sizing and path information about
outside corner highlights.

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:20230

---

### makePuzzleTab()

> **makePuzzleTab**(): `any`

#### Returns

`any`

An object containing sizing and path information about
puzzle tab highlights.

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:20236

---

### makeStartHat()

> **makeStartHat**(): `any`

#### Returns

`any`

An object containing sizing and path information about
start highlights.

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:20254
