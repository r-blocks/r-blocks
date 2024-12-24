# Class: Rect

Class for representing rectangular regions.

## Param

Top.

## Param

Bottom.

## Param

Left.

## Param

Right.

## Struct

## Alias

Blockly.utils.Rect

## Constructors

### new Rect()

> **new Rect**(`top`, `bottom`, `left`, `right`): [`Rect`](Rect.md)

#### Parameters

##### top

`any`

##### bottom

`any`

##### left

`any`

##### right

`any`

#### Returns

[`Rect`](Rect.md)

#### Defined in

node_modules/blockly/blockly.d.ts:2696

## Properties

### bottom

> **bottom**: `number`

#### Defined in

node_modules/blockly/blockly.d.ts:2700

---

### left

> **left**: `number`

#### Defined in

node_modules/blockly/blockly.d.ts:2702

---

### right

> **right**: `number`

#### Defined in

node_modules/blockly/blockly.d.ts:2704

---

### top

> **top**: `number`

#### Defined in

node_modules/blockly/blockly.d.ts:2698

## Methods

### contains()

> **contains**(`x`, `y`): `boolean`

Tests whether this rectangle contains a x/y coordinate.

#### Parameters

##### x

`number`

The x coordinate to test for containment.

##### y

`number`

The y coordinate to test for containment.

#### Returns

`boolean`

Whether this rectangle contains given coordinate.

#### Defined in

node_modules/blockly/blockly.d.ts:2712

---

### intersects()

> **intersects**(`other`): `boolean`

Tests whether this rectangle intersects the provided rectangle.
Assumes that the coordinate system increases going down and left.

#### Parameters

##### other

[`Rect`](Rect.md)

The other rectangle to check for
intersection with.

#### Returns

`boolean`

Whether this rectangle intersects the provided rectangle.

#### Defined in

node_modules/blockly/blockly.d.ts:2720
