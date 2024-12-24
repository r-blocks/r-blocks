# Class: BlockCreate

## Constructors

### new BlockCreate()

> **new BlockCreate**(`opt_block`?): [`BlockCreate`](BlockCreate.md)

Class for a block creation event.

#### Parameters

##### opt_block?

[`Block`](../../../classes/Block.md)

The created block. Undefined for a blank
event.

#### Returns

[`BlockCreate`](BlockCreate.md)

#### Alias

Blockly.Events.BlockCreate

#### Defined in

node_modules/blockly/blockly.d.ts:13040

## Properties

### ids

> **ids**: `string`[]

#### Defined in

node_modules/blockly/blockly.d.ts:13043

---

### json

> **json**: `any`

JSON representation of the block that was just created.

#### Defined in

node_modules/blockly/blockly.d.ts:13048

---

### recordUndo

> **recordUndo**: `boolean`

#### Defined in

node_modules/blockly/blockly.d.ts:13041

---

### type

> **type**: `string`

Type of this event.

#### Defined in

node_modules/blockly/blockly.d.ts:13068

---

### xml

> **xml**: `Element` \| `DocumentFragment`

#### Defined in

node_modules/blockly/blockly.d.ts:13042

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

node_modules/blockly/blockly.d.ts:13058

---

### run()

> **run**(`forward`): `void`

Run a creation event.

#### Parameters

##### forward

`boolean`

True if run forward, false if run backward (undo).

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:13063

---

### toJson()

> **toJson**(): `any`

Encode the event as JSON.

#### Returns

`any`

JSON representation.

#### Defined in

node_modules/blockly/blockly.d.ts:13053
