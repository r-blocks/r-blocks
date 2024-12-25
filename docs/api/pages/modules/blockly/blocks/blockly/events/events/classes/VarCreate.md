# Class: VarCreate

Class for a variable creation event.

## Param

The created variable. Undefined
for a blank event.

## Alias

Blockly.Events.VarCreate

## Constructors

### new VarCreate()

> **new VarCreate**(`opt_variable`): [`VarCreate`](VarCreate.md)

#### Parameters

##### opt_variable

`any`

#### Returns

[`VarCreate`](VarCreate.md)

#### Defined in

node_modules/blockly/blockly.d.ts:4991

## Properties

### type

> **type**: `string`

Type of this event.

#### Defined in

node_modules/blockly/blockly.d.ts:5013

---

### varName

> **varName**: `any`

#### Defined in

node_modules/blockly/blockly.d.ts:4993

---

### varType

> **varType**: `any`

#### Defined in

node_modules/blockly/blockly.d.ts:4992

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

node_modules/blockly/blockly.d.ts:5003

---

### run()

> **run**(`forward`): `void`

Run a variable creation event.

#### Parameters

##### forward

`boolean`

True if run forward, false if run backward (undo).

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:5008

---

### toJson()

> **toJson**(): `any`

Encode the event as JSON.

#### Returns

`any`

JSON representation.

#### Defined in

node_modules/blockly/blockly.d.ts:4998
