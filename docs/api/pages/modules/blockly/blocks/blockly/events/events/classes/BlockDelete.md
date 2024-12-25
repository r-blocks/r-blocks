# Class: BlockDelete

## Constructors

### new BlockDelete()

> **new BlockDelete**(`opt_block`?): [`BlockDelete`](BlockDelete.md)

Class for a block deletion event.

#### Parameters

##### opt_block?

[`Block`](../../../classes/Block.md)

The deleted block. Undefined for a blank
event.

#### Returns

[`BlockDelete`](BlockDelete.md)

#### Alias

Blockly.Events.BlockDelete

#### Defined in

node_modules/blockly/blockly.d.ts:18906

## Properties

### ids

> **ids**: `string`[]

#### Defined in

node_modules/blockly/blockly.d.ts:18909

---

### oldJson

> **oldJson**: `any`

JSON representation of the block that was just deleted.

#### Defined in

node_modules/blockly/blockly.d.ts:18919

---

### oldXml

> **oldXml**: `Element` \| `DocumentFragment`

#### Defined in

node_modules/blockly/blockly.d.ts:18908

---

### recordUndo

> **recordUndo**: `boolean`

#### Defined in

node_modules/blockly/blockly.d.ts:18907

---

### type

> **type**: `string`

Type of this event.

#### Defined in

node_modules/blockly/blockly.d.ts:18939

---

### wasShadow

> **wasShadow**: `boolean`

Was the block that was just deleted a shadow?

#### Defined in

node_modules/blockly/blockly.d.ts:18914

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

node_modules/blockly/blockly.d.ts:18929

---

### run()

> **run**(`forward`): `void`

Run a deletion event.

#### Parameters

##### forward

`boolean`

True if run forward, false if run backward (undo).

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:18934

---

### toJson()

> **toJson**(): `any`

Encode the event as JSON.

#### Returns

`any`

JSON representation.

#### Defined in

node_modules/blockly/blockly.d.ts:18924
