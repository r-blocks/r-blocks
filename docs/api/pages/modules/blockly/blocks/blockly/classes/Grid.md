# Class: Grid

Class for a workspace's grid.

## Param

The grid's SVG pattern, created during
injection.

## Param

A dictionary of normalized options for the grid.
See grid documentation:
https://developers.google.com/blockly/guides/configure/web/grid

## Alias

Blockly.Grid

## Constructors

### new Grid()

> **new Grid**(`pattern`, `options`): [`Grid`](Grid.md)

#### Parameters

##### pattern

`any`

##### options

`any`

#### Returns

[`Grid`](Grid.md)

#### Defined in

node_modules/blockly/blockly.d.ts:11282

## Properties

### scale\_

> **scale\_**: `number`

#### Defined in

node_modules/blockly/blockly.d.ts:11350

## Methods

### dispose()

> **dispose**(): `void`

Dispose of this grid and unlink from the DOM.

#### Returns

`void`

#### Package

#### Suppress

#### Defined in

node_modules/blockly/blockly.d.ts:11324

---

### getPatternId()

> **getPatternId**(): `string`

Get the ID of the pattern element, which should be randomized to avoid
conflicts with other Blockly instances on the page.

#### Returns

`string`

The pattern ID.

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:11343

---

### getSpacing()

> **getSpacing**(): `number`

Get the spacing of the grid points (in px).

#### Returns

`number`

The spacing of the grid points.

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:11336

---

### moveTo()

> **moveTo**(`x`, `y`): `void`

Move the grid to a new x and y position, and make sure that change is
visible.

#### Parameters

##### x

`number`

The new x position of the grid (in px).

##### y

`number`

The new y position of the grid (in px).

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:11370

---

### shouldSnap()

> **shouldSnap**(): `boolean`

Whether blocks should snap to the grid, based on the initial configuration.

#### Returns

`boolean`

True if blocks should snap, false otherwise.

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:11330

---

### update()

> **update**(`scale`): `void`

Update the grid with a new scale.

#### Parameters

##### scale

`number`

The new workspace scale.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:11349

---

### createDom()

> `static` **createDom**(`rnd`, `gridOptions`, `defs`): `SVGElement`

Create the DOM for the grid described by options.

#### Parameters

##### rnd

`string`

A random ID to append to the pattern's ID.

##### gridOptions

`any`

The object containing grid configuration.

##### defs

`SVGElement`

The root SVG element for this workspace's defs.

#### Returns

`SVGElement`

The SVG element for the grid pattern.

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:11281
