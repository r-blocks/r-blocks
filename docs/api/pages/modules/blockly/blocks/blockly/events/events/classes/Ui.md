# Class: ~~Ui~~

Class for a UI event.

## Param

The affected block. Null for UI events
that do not have an associated block. Undefined for a blank event.

## Param

One of 'selected', 'comment', 'mutatorOpen',
etc.

## Param

Previous value of element.

## Param

New value of element.

## Deprecated

December 2020. Instead use a more specific UI event.

## Alias

Blockly.Events.Ui

## Constructors

### new Ui()

> **new Ui**(`opt_block`, `opt_element`, `opt_oldValue`, `opt_newValue`): [`Ui`](Ui.md)

#### Parameters

##### opt_block

`any`

##### opt_element

`any`

##### opt_oldValue

`any`

##### opt_newValue

`any`

#### Returns

[`Ui`](Ui.md)

#### Defined in

node_modules/blockly/blockly.d.ts:19878

## Properties

### ~~blockId~~

> **blockId**: `any`

#### Defined in

node_modules/blockly/blockly.d.ts:19879

---

### ~~element~~

> **element**: `any`

#### Defined in

node_modules/blockly/blockly.d.ts:19880

---

### ~~newValue~~

> **newValue**: `any`

#### Defined in

node_modules/blockly/blockly.d.ts:19882

---

### ~~oldValue~~

> **oldValue**: `any`

#### Defined in

node_modules/blockly/blockly.d.ts:19881

---

### ~~type~~

> **type**: `string`

Type of this event.

#### Defined in

node_modules/blockly/blockly.d.ts:19897

## Methods

### ~~fromJson()~~

> **fromJson**(`json`): `void`

Decode the JSON event.

#### Parameters

##### json

`any`

JSON representation.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:19892

---

### ~~toJson()~~

> **toJson**(): `any`

Encode the event as JSON.

#### Returns

`any`

JSON representation.

#### Defined in

node_modules/blockly/blockly.d.ts:19887
