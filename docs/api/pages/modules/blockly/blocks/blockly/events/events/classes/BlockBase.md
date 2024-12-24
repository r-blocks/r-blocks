# Class: BlockBase

Abstract class for a block event.

## Param

The block this event corresponds to.
Undefined for a blank event.

## Alias

Blockly.Events.BlockBase

## Constructors

### new BlockBase()

> **new BlockBase**(`opt_block`): [`BlockBase`](BlockBase.md)

#### Parameters

##### opt_block

`any`

#### Returns

[`BlockBase`](BlockBase.md)

#### Defined in

node_modules/blockly/blockly.d.ts:5255

## Properties

### blockId

> **blockId**: `string`

The block ID for the block this event pertains to

#### Defined in

node_modules/blockly/blockly.d.ts:5261

---

### isBlank

> **isBlank**: `boolean`

#### Defined in

node_modules/blockly/blockly.d.ts:5256

---

### workspaceId

> **workspaceId**: `string`

The workspace identifier for this event.

#### Defined in

node_modules/blockly/blockly.d.ts:5266

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

node_modules/blockly/blockly.d.ts:5276

---

### toJson()

> **toJson**(): `any`

Encode the event as JSON.

#### Returns

`any`

JSON representation.

#### Defined in

node_modules/blockly/blockly.d.ts:5271
