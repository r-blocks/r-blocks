# Class: VarRename

Class for a variable rename event.

## Param

The renamed variable. Undefined
for a blank event.

## Param

The new name the variable will be changed to.

## Alias

Blockly.Events.VarRename

## Constructors

### new VarRename()

> **new VarRename**(`opt_variable`, `newName`): [`VarRename`](VarRename.md)

#### Parameters

##### opt_variable

`any`

##### newName

`any`

#### Returns

[`VarRename`](VarRename.md)

#### Defined in

node_modules/blockly/blockly.d.ts:3843

## Properties

### newName

> **newName**: `any`

#### Defined in

node_modules/blockly/blockly.d.ts:3845

---

### oldName

> **oldName**: `any`

#### Defined in

node_modules/blockly/blockly.d.ts:3844

---

### type

> **type**: `string`

Type of this event.

#### Defined in

node_modules/blockly/blockly.d.ts:3865

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

node_modules/blockly/blockly.d.ts:3855

---

### run()

> **run**(`forward`): `void`

Run a variable rename event.

#### Parameters

##### forward

`boolean`

True if run forward, false if run backward (undo).

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:3860

---

### toJson()

> **toJson**(): `any`

Encode the event as JSON.

#### Returns

`any`

JSON representation.

#### Defined in

node_modules/blockly/blockly.d.ts:3850
