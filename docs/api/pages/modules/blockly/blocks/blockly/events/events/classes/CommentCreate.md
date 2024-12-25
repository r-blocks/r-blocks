# Class: CommentCreate

Class for a comment creation event.

## Param

The created comment.
Undefined for a blank event.

## Alias

Blockly.Events.CommentCreate

## Constructors

### new CommentCreate()

> **new CommentCreate**(`opt_comment`): [`CommentCreate`](CommentCreate.md)

#### Parameters

##### opt_comment

`any`

#### Returns

[`CommentCreate`](CommentCreate.md)

#### Defined in

node_modules/blockly/blockly.d.ts:4030

## Properties

### type

> **type**: `string`

Type of this event.

#### Defined in

node_modules/blockly/blockly.d.ts:4051

---

### xml

> **xml**: `any`

#### Defined in

node_modules/blockly/blockly.d.ts:4031

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

node_modules/blockly/blockly.d.ts:4041

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

node_modules/blockly/blockly.d.ts:4046

---

### toJson()

> **toJson**(): `any`

Encode the event as JSON.

#### Returns

`any`

JSON representation.

#### Defined in

node_modules/blockly/blockly.d.ts:4036
