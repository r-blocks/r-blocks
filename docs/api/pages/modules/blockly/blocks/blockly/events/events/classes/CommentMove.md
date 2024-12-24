# Class: CommentMove

Class for a comment move event. Created before the move.

## Param

The comment that is being
moved. Undefined for a blank event.

## Alias

Blockly.Events.CommentMove

## Constructors

### new CommentMove()

> **new CommentMove**(`opt_comment`): [`CommentMove`](CommentMove.md)

#### Parameters

##### opt_comment

`any`

#### Returns

[`CommentMove`](CommentMove.md)

#### Defined in

node_modules/blockly/blockly.d.ts:4199

## Properties

### comment\_

> **comment\_**: [`WorkspaceComment`](../../../classes/WorkspaceComment.md)

The comment that is being moved. Will be cleared after recording the new
location.

#### Defined in

node_modules/blockly/blockly.d.ts:4205

---

### newCoordinate\_

> **newCoordinate\_**: [`Coordinate`](../../../utils/classes/Coordinate.md)

The location after the move, in workspace coordinates.

#### Defined in

node_modules/blockly/blockly.d.ts:4215

---

### oldCoordinate\_

> **oldCoordinate\_**: [`Coordinate`](../../../utils/classes/Coordinate.md)

The location before the move, in workspace coordinates.

#### Defined in

node_modules/blockly/blockly.d.ts:4210

---

### type

> **type**: `string`

Type of this event.

#### Defined in

node_modules/blockly/blockly.d.ts:4252

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

node_modules/blockly/blockly.d.ts:4237

---

### isNull()

> **isNull**(): `boolean`

Does this event record any change of state?

#### Returns

`boolean`

False if something changed.

#### Defined in

node_modules/blockly/blockly.d.ts:4242

---

### recordNew()

> **recordNew**(): `void`

Record the comment's new location. Called after the move. Can only be
called once.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:4220

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

node_modules/blockly/blockly.d.ts:4247

---

### setOldCoordinate()

> **setOldCoordinate**(`xy`): `void`

Override the location before the move. Use this if you don't create the
event until the end of the move, but you know the original location.

#### Parameters

##### xy

[`Coordinate`](../../../utils/classes/Coordinate.md)

The location before the move,
in workspace coordinates.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:4227

---

### toJson()

> **toJson**(): `any`

Encode the event as JSON.

#### Returns

`any`

JSON representation.

#### Defined in

node_modules/blockly/blockly.d.ts:4232
