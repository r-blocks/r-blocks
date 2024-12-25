# Class: Coordinate

Class for representing coordinates and positions.

## Param

Left.

## Param

Top.

## Struct

## Alias

Blockly.utils.Coordinate

## Constructors

### new Coordinate()

> **new Coordinate**(`x`, `y`): [`Coordinate`](Coordinate.md)

#### Parameters

##### x

`any`

##### y

`any`

#### Returns

[`Coordinate`](Coordinate.md)

#### Defined in

node_modules/blockly/blockly.d.ts:1544

## Properties

### x

> **x**: `number`

X-value

#### Defined in

node_modules/blockly/blockly.d.ts:1549

---

### y

> **y**: `number`

Y-value

#### Defined in

node_modules/blockly/blockly.d.ts:1554

## Methods

### clone()

> **clone**(): [`Coordinate`](Coordinate.md)

Creates a new copy of this coordinate.

#### Returns

[`Coordinate`](Coordinate.md)

A copy of this coordinate.

#### Defined in

node_modules/blockly/blockly.d.ts:1559

---

### scale()

> **scale**(`s`): [`Coordinate`](Coordinate.md)

Scales this coordinate by the given scale factor.

#### Parameters

##### s

`number`

The scale factor to use for both x and y dimensions.

#### Returns

[`Coordinate`](Coordinate.md)

This coordinate after scaling.

#### Defined in

node_modules/blockly/blockly.d.ts:1565

---

### translate()

> **translate**(`tx`, `ty`): [`Coordinate`](Coordinate.md)

Translates this coordinate by the given offsets.
respectively.

#### Parameters

##### tx

`number`

The value to translate x by.

##### ty

`number`

The value to translate y by.

#### Returns

[`Coordinate`](Coordinate.md)

This coordinate after translating.

#### Defined in

node_modules/blockly/blockly.d.ts:1573

---

### difference()

> `static` **difference**(`a`, `b`): [`Coordinate`](Coordinate.md)

Returns the difference between two coordinates as a new
Coordinate.

#### Parameters

##### a

An x/y coordinate.

[`Coordinate`](Coordinate.md) | `DOMPoint`

##### b

An x/y coordinate.

[`Coordinate`](Coordinate.md) | `DOMPoint`

#### Returns

[`Coordinate`](Coordinate.md)

A Coordinate representing the difference
between `a` and `b`.

#### Defined in

node_modules/blockly/blockly.d.ts:1535

---

### distance()

> `static` **distance**(`a`, `b`): `number`

Returns the distance between two coordinates.

#### Parameters

##### a

[`Coordinate`](Coordinate.md)

A Coordinate.

##### b

[`Coordinate`](Coordinate.md)

A Coordinate.

#### Returns

`number`

The distance between `a` and `b`.

#### Defined in

node_modules/blockly/blockly.d.ts:1520

---

### equals()

> `static` **equals**(`a`, `b`): `boolean`

Compares coordinates for equality.

#### Parameters

##### a

[`Coordinate`](Coordinate.md)

A Coordinate.

##### b

[`Coordinate`](Coordinate.md)

A Coordinate.

#### Returns

`boolean`

True iff the coordinates are equal, or if both are null.

#### Defined in

node_modules/blockly/blockly.d.ts:1513

---

### magnitude()

> `static` **magnitude**(`a`): `number`

Returns the magnitude of a coordinate.

#### Parameters

##### a

[`Coordinate`](Coordinate.md)

A Coordinate.

#### Returns

`number`

The distance between the origin and `a`.

#### Defined in

node_modules/blockly/blockly.d.ts:1526

---

### sum()

> `static` **sum**(`a`, `b`): [`Coordinate`](Coordinate.md)

Returns the sum of two coordinates as a new Coordinate.

#### Parameters

##### a

An x/y coordinate.

[`Coordinate`](Coordinate.md) | `DOMPoint`

##### b

An x/y coordinate.

[`Coordinate`](Coordinate.md) | `DOMPoint`

#### Returns

[`Coordinate`](Coordinate.md)

A Coordinate representing the sum of
the two coordinates.

#### Defined in

node_modules/blockly/blockly.d.ts:1543
