# Class: MarkerMove

Class for a marker move event.

## Param

The affected block. Null if current node
is of type workspace. Undefined for a blank event.

## Param

Whether this is a cursor event. Undefined for a
blank event.

## Param

The old node the marker used to be on.
Undefined for a blank event.

## Param

The new node the marker is now on.
Undefined for a blank event.

## Alias

Blockly.Events.MarkerMove

## Constructors

### new MarkerMove()

> **new MarkerMove**(`opt_block`, `isCursor`, `opt_oldNode`, `opt_newNode`): [`MarkerMove`](MarkerMove.md)

#### Parameters

##### opt_block

`any`

##### isCursor

`any`

##### opt_oldNode

`any`

##### opt_newNode

`any`

#### Returns

[`MarkerMove`](MarkerMove.md)

#### Defined in

node_modules/blockly/blockly.d.ts:8958

## Properties

### blockId

> **blockId**: `string`

The workspace identifier for this event.

#### Defined in

node_modules/blockly/blockly.d.ts:8963

---

### isCursor

> **isCursor**: `boolean`

Whether this is a cursor event.

#### Defined in

node_modules/blockly/blockly.d.ts:8978

---

### newNode

> **newNode**: [`ASTNode`](../../../classes/ASTNode.md)

The new node the marker is now on.

#### Defined in

node_modules/blockly/blockly.d.ts:8973

---

### oldNode

> **oldNode**: [`ASTNode`](../../../classes/ASTNode.md)

The old node the marker used to be on.

#### Defined in

node_modules/blockly/blockly.d.ts:8968

---

### type

> **type**: `string`

Type of this event.

#### Defined in

node_modules/blockly/blockly.d.ts:8993

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

node_modules/blockly/blockly.d.ts:8988

---

### toJson()

> **toJson**(): `any`

Encode the event as JSON.

#### Returns

`any`

JSON representation.

#### Defined in

node_modules/blockly/blockly.d.ts:8983
