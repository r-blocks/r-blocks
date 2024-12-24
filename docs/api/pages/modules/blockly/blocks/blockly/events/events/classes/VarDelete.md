# Class: VarDelete

Class for a variable deletion event.

## Param

The deleted variable. Undefined
for a blank event.

## Alias

Blockly.Events.VarDelete

## Constructors

### new VarDelete()

> **new VarDelete**(`opt_variable`): [`VarDelete`](VarDelete.md)

#### Parameters

##### opt_variable

`any`

#### Returns

[`VarDelete`](VarDelete.md)

#### Defined in

node_modules/blockly/blockly.d.ts:3807

## Properties

### type

> **type**: `string`

Type of this event.

#### Defined in

node_modules/blockly/blockly.d.ts:3829

---

### varName

> **varName**: `any`

#### Defined in

node_modules/blockly/blockly.d.ts:3809

---

### varType

> **varType**: `any`

#### Defined in

node_modules/blockly/blockly.d.ts:3808

## Methods

### fromJson()

> **fromJson**(`json`): `void`

Decode the JSON event.

#### Parameters

##### json

`any`

JSON representation.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:3819

---

### run()

> **run**(`forward`): `void`

Run a variable deletion event.

#### Parameters

##### forward

`boolean`

True if run forward, false if run backward (undo).

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:3824

---

### toJson()

> **toJson**(): `any`

Encode the event as JSON.

#### Returns

`any`

JSON representation.

#### Defined in

node_modules/blockly/blockly.d.ts:3814
