# Class: BlockDrag

Class for a block drag event.

## Param

The top block in the stack that is being
dragged. Undefined for a blank event.

## Param

Whether this is the start of a block drag.
Undefined for a blank event.

## Param

The blocks affected by this
drag. Undefined for a blank event.

## Alias

Blockly.Events.BlockDrag

## Constructors

### new BlockDrag()

> **new BlockDrag**(`opt_block`, `opt_isStart`, `opt_blocks`): [`BlockDrag`](BlockDrag.md)

#### Parameters

##### opt_block

`any`

##### opt_isStart

`any`

##### opt_blocks

`any`

#### Returns

[`BlockDrag`](BlockDrag.md)

#### Defined in

node_modules/blockly/blockly.d.ts:15992

## Properties

### blockId

> **blockId**: `any`

#### Defined in

node_modules/blockly/blockly.d.ts:15993

---

### blocks

> **blocks**: [`Block`](../../../classes/Block.md)[]

The blocks affected by this drag event.

#### Defined in

node_modules/blockly/blockly.d.ts:16003

---

### isStart

> **isStart**: `boolean`

Whether this is the start of a block drag.

#### Defined in

node_modules/blockly/blockly.d.ts:15998

---

### type

> **type**: `string`

Type of this event.

#### Defined in

node_modules/blockly/blockly.d.ts:16018

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

node_modules/blockly/blockly.d.ts:16013

---

### toJson()

> **toJson**(): `any`

Encode the event as JSON.

#### Returns

`any`

JSON representation.

#### Defined in

node_modules/blockly/blockly.d.ts:16008
