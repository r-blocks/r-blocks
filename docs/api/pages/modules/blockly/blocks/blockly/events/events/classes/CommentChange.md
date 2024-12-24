# Class: CommentChange

Class for a comment change event.

## Param

The comment that is being
changed. Undefined for a blank event.

## Param

Previous contents of the comment.

## Param

New contents of the comment.

## Alias

Blockly.Events.CommentChange

## Constructors

### new CommentChange()

> **new CommentChange**(`opt_comment`, `opt_oldContents`, `opt_newContents`): [`CommentChange`](CommentChange.md)

#### Parameters

##### opt_comment

`any`

##### opt_oldContents

`any`

##### opt_newContents

`any`

#### Returns

[`CommentChange`](CommentChange.md)

#### Defined in

node_modules/blockly/blockly.d.ts:4159

## Properties

### newContents\_

> **newContents\_**: `any`

#### Defined in

node_modules/blockly/blockly.d.ts:4161

---

### oldContents\_

> **oldContents\_**: `any`

#### Defined in

node_modules/blockly/blockly.d.ts:4160

---

### type

> **type**: `string`

Type of this event.

#### Defined in

node_modules/blockly/blockly.d.ts:4186

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

node_modules/blockly/blockly.d.ts:4171

---

### isNull()

> **isNull**(): `boolean`

Does this event record any change of state?

#### Returns

`boolean`

False if something changed.

#### Defined in

node_modules/blockly/blockly.d.ts:4176

---

### run()

> **run**(`forward`): `void`

Run a change event.

#### Parameters

##### forward

`boolean`

True if run forward, false if run backward (undo).

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:4181

---

### toJson()

> **toJson**(): `any`

Encode the event as JSON.

#### Returns

`any`

JSON representation.

#### Defined in

node_modules/blockly/blockly.d.ts:4166
