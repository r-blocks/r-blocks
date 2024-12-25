# Class: VarBase

Abstract class for a variable event.

## Param

The variable this event
corresponds to. Undefined for a blank event.

## Alias

Blockly.Events.VarBase

## Constructors

### new VarBase()

> **new VarBase**(`opt_variable`): [`VarBase`](VarBase.md)

#### Parameters

##### opt_variable

`any`

#### Returns

[`VarBase`](VarBase.md)

#### Defined in

node_modules/blockly/blockly.d.ts:3773

## Properties

### isBlank

> **isBlank**: `boolean`

#### Defined in

node_modules/blockly/blockly.d.ts:3774

---

### varId

> **varId**: `string`

The variable id for the variable this event pertains to.

#### Defined in

node_modules/blockly/blockly.d.ts:3779

---

### workspaceId

> **workspaceId**: `string`

The workspace identifier for this event.

#### Defined in

node_modules/blockly/blockly.d.ts:3784

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

node_modules/blockly/blockly.d.ts:3794

---

### toJson()

> **toJson**(): `any`

Encode the event as JSON.

#### Returns

`any`

JSON representation.

#### Defined in

node_modules/blockly/blockly.d.ts:3789
