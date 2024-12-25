# Class: BlockMove

## Constructors

### new BlockMove()

> **new BlockMove**(`opt_block`?): [`BlockMove`](BlockMove.md)

Class for a block move event. Created before the move.

#### Parameters

##### opt_block?

[`Block`](../../../classes/Block.md)

The moved block. Undefined for a blank
event.

#### Returns

[`BlockMove`](BlockMove.md)

#### Alias

Blockly.Events.BlockMove

#### Defined in

node_modules/blockly/blockly.d.ts:15041

## Properties

### newCoordinate

> **newCoordinate**: `any`

#### Defined in

node_modules/blockly/blockly.d.ts:15058

---

### newInputName

> **newInputName**: `any`

#### Defined in

node_modules/blockly/blockly.d.ts:15057

---

### newParentId

> **newParentId**: `any`

#### Defined in

node_modules/blockly/blockly.d.ts:15056

---

### oldCoordinate

> **oldCoordinate**: `any`

#### Defined in

node_modules/blockly/blockly.d.ts:15045

---

### oldInputName

> **oldInputName**: `any`

#### Defined in

node_modules/blockly/blockly.d.ts:15044

---

### oldParentId

> **oldParentId**: `any`

#### Defined in

node_modules/blockly/blockly.d.ts:15043

---

### recordUndo

> **recordUndo**: `boolean`

#### Defined in

node_modules/blockly/blockly.d.ts:15042

---

### type

> **type**: `string`

Type of this event.

#### Defined in

node_modules/blockly/blockly.d.ts:15084

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

node_modules/blockly/blockly.d.ts:15055

---

### isNull()

> **isNull**(): `boolean`

Does this event record any change of state?

#### Returns

`boolean`

False if something changed.

#### Defined in

node_modules/blockly/blockly.d.ts:15074

---

### recordNew()

> **recordNew**(): `void`

Record the block's new location. Called after the move.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:15062

---

### run()

> **run**(`forward`): `void`

Run a move event.

#### Parameters

##### forward

`boolean`

True if run forward, false if run backward (undo).

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:15079

---

### toJson()

> **toJson**(): `any`

Encode the event as JSON.

#### Returns

`any`

JSON representation.

#### Defined in

node_modules/blockly/blockly.d.ts:15050
