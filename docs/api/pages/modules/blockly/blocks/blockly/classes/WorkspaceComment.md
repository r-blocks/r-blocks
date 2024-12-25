# Class: WorkspaceComment

Class for a workspace comment.

## Param

The block's workspace.

## Param

The content of this workspace comment.

## Param

Height of the comment.

## Param

Width of the comment.

## Param

Optional ID. Use this ID if provided, otherwise
create a new ID.

## Alias

Blockly.WorkspaceComment

## Constructors

### new WorkspaceComment()

> **new WorkspaceComment**(`workspace`, `content`, `height`, `width`, `opt_id`): [`WorkspaceComment`](WorkspaceComment.md)

#### Parameters

##### workspace

`any`

##### content

`any`

##### height

`any`

##### width

`any`

##### opt_id

`any`

#### Returns

[`WorkspaceComment`](WorkspaceComment.md)

#### Defined in

node_modules/blockly/blockly.d.ts:4298

## Properties

### content\_

> `protected` **content\_**: `string`

#### Defined in

node_modules/blockly/blockly.d.ts:4348

---

### disposed\_

> `protected` **disposed\_**: `boolean`

Whether this comment has been disposed.

#### Defined in

node_modules/blockly/blockly.d.ts:4354

---

### height\_

> `protected` **height\_**: `number`

The comment's height in workspace units. Scale does not change this value.

#### Defined in

node_modules/blockly/blockly.d.ts:4313

---

### id

> **id**: `string`

#### Defined in

node_modules/blockly/blockly.d.ts:4300

---

### isComment

> **isComment**: `boolean`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:4359

---

### RTL

> `protected` **RTL**: `boolean`

#### Defined in

node_modules/blockly/blockly.d.ts:4328

---

### width\_

> `protected` **width\_**: `number`

The comment's width in workspace units. Scale does not change this value.

#### Defined in

node_modules/blockly/blockly.d.ts:4319

---

### workspace

> **workspace**: [`Workspace`](Workspace.md)

#### Defined in

node_modules/blockly/blockly.d.ts:4323

---

### xy\_

> `protected` **xy\_**: [`Coordinate`](../utils/classes/Coordinate.md)

The comment's position in workspace units. (0, 0) is at the workspace's
origin; scale does not change this value.

#### Defined in

node_modules/blockly/blockly.d.ts:4307

## Methods

### dispose()

> **dispose**(): `void`

Dispose of this comment.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:4364

---

### getContent()

> **getContent**(): `string`

Returns this comment's text.

#### Returns

`string`

Comment text.

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:4442

---

### getHeight()

> **getHeight**(): `number`

Get comment height.

#### Returns

`number`

Comment height.

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:4370

---

### getWidth()

> **getWidth**(): `number`

Get comment width.

#### Returns

`number`

Comment width.

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:4382

---

### getXY()

> **getXY**(): [`Coordinate`](../utils/classes/Coordinate.md)

Get stored location.

#### Returns

[`Coordinate`](../utils/classes/Coordinate.md)

The comment's stored location.
This is not valid if the comment is currently being dragged.

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:4395

---

### isDeletable()

> **isDeletable**(): `boolean`

Get whether this comment is deletable or not.

#### Returns

`boolean`

True if deletable.

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:4408

---

### isEditable()

> **isEditable**(): `boolean`

Get whether this comment is editable or not.

#### Returns

`boolean`

True if editable.

#### Defined in

node_modules/blockly/blockly.d.ts:4431

---

### isMovable()

> **isMovable**(): `boolean`

Get whether this comment is movable or not.

#### Returns

`boolean`

True if movable.

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:4420

---

### moveBy()

> **moveBy**(`dx`, `dy`): `void`

Move a comment by a relative offset.

#### Parameters

##### dx

`number`

Horizontal offset, in workspace units.

##### dy

`number`

Vertical offset, in workspace units.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:4402

---

### setContent()

> **setContent**(`content`): `void`

Set this comment's content.

#### Parameters

##### content

`string`

Comment content.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:4448

---

### setDeletable()

> **setDeletable**(`deletable`): `void`

Set whether this comment is deletable or not.

#### Parameters

##### deletable

`boolean`

True if deletable.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:4414

---

### setEditable()

> **setEditable**(`editable`): `void`

Set whether this comment is editable or not.

#### Parameters

##### editable

`boolean`

True if editable.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:4436

---

### setHeight()

> **setHeight**(`height`): `void`

Set comment height.

#### Parameters

##### height

`number`

Comment height.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:4376

---

### setMovable()

> **setMovable**(`movable`): `void`

Set whether this comment is movable or not.

#### Parameters

##### movable

`boolean`

True if movable.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:4426

---

### setWidth()

> **setWidth**(`width`): `void`

Set comment width.

#### Parameters

##### width

`number`

comment width.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:4388

---

### toXml()

> **toXml**(`opt_noId`?): `Element`

Encode a comment subtree as XML, but don't serialize the XY coordinates.
This method avoids some expensive metrics-related calls that are made in
toXmlWithXY().

#### Parameters

##### opt_noId?

`boolean`

True if the encoder should skip the comment ID.

#### Returns

`Element`

Tree of XML elements.

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:4464

---

### toXmlWithXY()

> **toXmlWithXY**(`opt_noId`?): `Element`

Encode a comment subtree as XML with XY coordinates.

#### Parameters

##### opt_noId?

`boolean`

True if the encoder should skip the comment ID.

#### Returns

`Element`

Tree of XML elements.

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:4455

---

### fireCreateEvent()

> `static` **fireCreateEvent**(`comment`): `void`

Fire a create event for the given workspace comment, if comments are enabled.

#### Parameters

##### comment

[`WorkspaceComment`](WorkspaceComment.md)

The comment that was just created.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:4275

---

### fromXml()

> `static` **fromXml**(`xmlComment`, `workspace`): [`WorkspaceComment`](WorkspaceComment.md)

Decode an XML comment tag and create a comment on the workspace.

#### Parameters

##### xmlComment

`Element`

XML comment element.

##### workspace

[`Workspace`](Workspace.md)

The workspace.

#### Returns

[`WorkspaceComment`](WorkspaceComment.md)

The created workspace comment.

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:4283

---

### parseAttributes()

> `static` **parseAttributes**(`xml`): `object`

Decode an XML comment tag and return the results in an object.

#### Parameters

##### xml

`Element`

XML comment element.

#### Returns

`object`

An
object containing the id, size, position, and comment string.

##### content

> **content**: `string`

##### h

> **h**: `number`

##### w

> **w**: `number`

##### x

> **x**: `number`

##### y

> **y**: `number`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:4291
