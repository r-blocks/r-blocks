# Class: Measurable

The base class to represent a part of a block that takes up space during
rendering. The constructor for each non-spacer Measurable records the size
of the block element (e.g. field, statement input).

## Param

The rendering
constants provider.

## Package

## Alias

Blockly.blockRendering.Measurable

## Extended by

- [`InRowSpacer`](InRowSpacer.md)
- [`RightConnectionShape`](../../../zelos/zelos/classes/RightConnectionShape.md)

## Constructors

### new Measurable()

> **new Measurable**(`constants`): [`Measurable`](Measurable.md)

#### Parameters

##### constants

`any`

#### Returns

[`Measurable`](Measurable.md)

#### Defined in

node_modules/blockly/blockly.d.ts:6766

## Properties

### centerline

> **centerline**: `number`

#### Defined in

node_modules/blockly/blockly.d.ts:6771

---

### constants\_

> `protected` **constants\_**: [`ConstantProvider`](ConstantProvider.md)

The renderer's constant provider.

#### Defined in

node_modules/blockly/blockly.d.ts:6777

---

### height

> **height**: `number`

#### Defined in

node_modules/blockly/blockly.d.ts:6768

---

### notchOffset

> **notchOffset**: `number`

#### Defined in

node_modules/blockly/blockly.d.ts:6778

---

### type

> **type**: `number`

#### Defined in

node_modules/blockly/blockly.d.ts:6769

---

### width

> **width**: `number`

#### Defined in

node_modules/blockly/blockly.d.ts:6767

---

### xPos

> **xPos**: `number`

#### Defined in

node_modules/blockly/blockly.d.ts:6770
