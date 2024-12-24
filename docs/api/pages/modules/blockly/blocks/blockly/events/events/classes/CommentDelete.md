# Class: CommentDelete

Class for a comment deletion event.

## Param

The deleted comment.
Undefined for a blank event.

## Alias

Blockly.Events.CommentDelete

## Constructors

### new CommentDelete()

> **new CommentDelete**(`opt_comment`): [`CommentDelete`](CommentDelete.md)

#### Parameters

##### opt_comment

`any`

#### Returns

[`CommentDelete`](CommentDelete.md)

#### Defined in

node_modules/blockly/blockly.d.ts:4064

## Properties

### type

> **type**: `string`

Type of this event.

#### Defined in

node_modules/blockly/blockly.d.ts:4085

---

### xml

> **xml**: `any`

#### Defined in

node_modules/blockly/blockly.d.ts:4065

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

node_modules/blockly/blockly.d.ts:4075

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

node_modules/blockly/blockly.d.ts:4080

---

### toJson()

> **toJson**(): `any`

Encode the event as JSON.

#### Returns

`any`

JSON representation.

#### Defined in

node_modules/blockly/blockly.d.ts:4070
