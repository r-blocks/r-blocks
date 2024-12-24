# Class: CommentBase

Abstract class for a comment event.

## Param

The comment this event
corresponds to. Undefined for a blank event.

## Alias

Blockly.Events.CommentBase

## Constructors

### new CommentBase()

> **new CommentBase**(`opt_comment`): [`CommentBase`](CommentBase.md)

#### Parameters

##### opt_comment

`any`

#### Returns

[`CommentBase`](CommentBase.md)

#### Defined in

node_modules/blockly/blockly.d.ts:4105

## Properties

### commentId

> **commentId**: `string`

The ID of the comment this event pertains to.

#### Defined in

node_modules/blockly/blockly.d.ts:4115

---

### group

> **group**: `string`

The event group id for the group this event belongs to. Groups define
events that should be treated as an single action from the user's
perspective, and should be undone together.

#### Defined in

node_modules/blockly/blockly.d.ts:4127

---

### isBlank

> **isBlank**: `boolean`

Whether or not an event is blank.

#### Defined in

node_modules/blockly/blockly.d.ts:4110

---

### recordUndo

> **recordUndo**: `boolean`

Sets whether the event should be added to the undo stack.

#### Defined in

node_modules/blockly/blockly.d.ts:4132

---

### workspaceId

> **workspaceId**: `string`

The workspace identifier for this event.

#### Defined in

node_modules/blockly/blockly.d.ts:4120

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

node_modules/blockly/blockly.d.ts:4142

---

### toJson()

> **toJson**(): `any`

Encode the event as JSON.

#### Returns

`any`

JSON representation.

#### Defined in

node_modules/blockly/blockly.d.ts:4137

---

### CommentCreateDeleteHelper()

> `static` **CommentCreateDeleteHelper**(`event`, `create`): `void`

Helper function for Comment[Create|Delete]

#### Parameters

##### event

The event to run.

[`CommentCreate`](CommentCreate.md) | [`CommentDelete`](CommentDelete.md)

##### create

`boolean`

if True then Create, if False then Delete

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:4104
