# Class: Connection

## Extended by

- [`RenderedConnection`](RenderedConnection.md)

## Constructors

### new Connection()

> **new Connection**(`source`, `type`): [`Connection`](Connection.md)

Class for a connection between blocks.

#### Parameters

##### source

[`Block`](Block.md)

The block establishing this connection.

##### type

`number`

The type of the connection.

#### Returns

[`Connection`](Connection.md)

#### Implements

#### Alias

Blockly.Connection

#### Defined in

node_modules/blockly/blockly.d.ts:17864

## Properties

### check\_

> **check\_**: `any`[]

#### Defined in

node_modules/blockly/blockly.d.ts:18004

---

### disposed

> **disposed**: `boolean`

#### Defined in

node_modules/blockly/blockly.d.ts:17884

---

### shadowDom\_

> **shadowDom\_**: `Element`

#### Defined in

node_modules/blockly/blockly.d.ts:18077

---

### shadowState\_

> **shadowState\_**: `any`

#### Defined in

node_modules/blockly/blockly.d.ts:18078

---

### sourceBlock\_

> `protected` **sourceBlock\_**: [`Block`](Block.md)

#### Defined in

node_modules/blockly/blockly.d.ts:17869

---

### targetConnection

> **targetConnection**: [`Connection`](Connection.md)

#### Defined in

node_modules/blockly/blockly.d.ts:17960

---

### type

> **type**: `number`

#### Defined in

node_modules/blockly/blockly.d.ts:17871

---

### x

> **x**: `number`

Horizontal location of this connection.

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:18116

---

### y

> **y**: `number`

Vertical location of this connection.

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:18122

## Methods

### ~~canConnectWithReason()~~

> **canConnectWithReason**(`target`): `number`

Checks whether the current connection can connect with the target
connection.

#### Parameters

##### target

[`Connection`](Connection.md)

Connection to check compatibility with.

#### Returns

`number`

Connection.CAN_CONNECT if the connection is legal,
an error code otherwise.

#### Deprecated

July 2020. Will be deleted July 2021. Use the workspace's
connectionChecker instead.

#### Defined in

node_modules/blockly/blockly.d.ts:17909

---

### ~~checkConnection()~~

> **checkConnection**(`target`): `void`

Checks whether the current connection and target connection are compatible
and throws an exception if they are not.

#### Parameters

##### target

[`Connection`](Connection.md)

The connection to check compatibility
with.

#### Returns

`void`

#### Package

#### Deprecated

July 2020. Will be deleted July 2021. Use the workspace's
connectionChecker instead.

#### Defined in

node_modules/blockly/blockly.d.ts:17919

---

### ~~checkType()~~

> **checkType**(`otherConnection`): `boolean`

Is this connection compatible with another connection with respect to the
value type system. E.g. square_root("Hello") is not compatible.

#### Parameters

##### otherConnection

[`Connection`](Connection.md)

Connection to compare against.

#### Returns

`boolean`

True if the connections share a type.

#### Deprecated

July 2020. Will be deleted July 2021. Use the workspace's
connectionChecker instead.

#### Defined in

node_modules/blockly/blockly.d.ts:17979

---

### connect()

> **connect**(`otherConnection`): `boolean`

Connect this connection to another connection.

#### Parameters

##### otherConnection

[`Connection`](Connection.md)

Connection to connect to.

#### Returns

`boolean`

Whether the the blocks are now connected or not.

#### Defined in

node_modules/blockly/blockly.d.ts:17948

---

### connect\_()

> `protected` **connect\_**(`childConnection`): `void`

Connect two connections together. This is the connection on the superior
block.

#### Parameters

##### childConnection

[`Connection`](Connection.md)

Connection on inferior block.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:17878

---

### disconnect()

> **disconnect**(): `void`

Disconnect this connection.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:17952

---

### disconnectInternal\_()

> `protected` **disconnectInternal\_**(`parentBlock`, `childBlock`): `void`

Disconnect two blocks that are connected by this connection.

#### Parameters

##### parentBlock

[`Block`](Block.md)

The superior block.

##### childBlock

[`Block`](Block.md)

The inferior block.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:17959

---

### dispose()

> **dispose**(): `void`

Dispose of this connection and deal with connected blocks.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:17883

---

### getCheck()

> **getCheck**(): `any`[]

Get a connection's compatibility.

#### Returns

`any`[]

List of compatible value types.
Null if all types are compatible.

#### Defined in

node_modules/blockly/blockly.d.ts:18011

---

### getConnectionChecker()

> **getConnectionChecker**(): [`IConnectionChecker`](IConnectionChecker.md)

Get the workspace's connection type checker object.

#### Returns

[`IConnectionChecker`](IConnectionChecker.md)

The connection type checker for the
source block's workspace.

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:17926

---

### getParentInput()

> **getParentInput**(): [`Input`](Input.md)

Get the parent input of a connection.

#### Returns

[`Input`](Input.md)

The input that the connection belongs to or null if
no parent exists.

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:18062

---

### getShadowDom()

> **getShadowDom**(`returnCurrent`?): `Element`

Returns the xml representation of the connection's shadow block.

#### Parameters

##### returnCurrent?

`boolean`

If true, and the shadow block is currently
attached to this connection, this serializes the state of that block
and returns it (so that field values are correct). Otherwise the saved
shadowDom is just returned.

#### Returns

`Element`

Shadow DOM representation of a block or null.

#### Defined in

node_modules/blockly/blockly.d.ts:18025

---

### getShadowState()

> **getShadowState**(`returnCurrent`?): `any`

Returns the serialized object representation of the connection's shadow
block.

#### Parameters

##### returnCurrent?

`boolean`

If true, and the shadow block is currently
attached to this connection, this serializes the state of that block
and returns it (so that field values are correct). Otherwise the saved
state is just returned.

#### Returns

`any`

Serialized object representation of the block, or
null.

#### Defined in

node_modules/blockly/blockly.d.ts:18042

---

### getSourceBlock()

> **getSourceBlock**(): [`Block`](Block.md)

Get the source block for this connection.

#### Returns

[`Block`](Block.md)

The source block.

#### Defined in

node_modules/blockly/blockly.d.ts:17889

---

### isConnected()

> **isConnected**(): `boolean`

Is the connection connected?

#### Returns

`boolean`

True if connection is connected to another connection.

#### Defined in

node_modules/blockly/blockly.d.ts:17899

---

### ~~isConnectionAllowed()~~

> **isConnectionAllowed**(`candidate`): `boolean`

Check if the two connections can be dragged to connect to each other.

#### Parameters

##### candidate

[`Connection`](Connection.md)

A nearby connection to check.

#### Returns

`boolean`

True if the connection is allowed, false otherwise.

#### Deprecated

July 2020. Will be deleted July 2021. Use the workspace's
connectionChecker instead.

#### Defined in

node_modules/blockly/blockly.d.ts:17934

---

### isSuperior()

> **isSuperior**(): `boolean`

Does the connection belong to a superior block (higher in the source stack)?

#### Returns

`boolean`

True if connection faces down or right.

#### Defined in

node_modules/blockly/blockly.d.ts:17894

---

### neighbours()

> **neighbours**(`_maxLimit`): [`Connection`](Connection.md)[]

Find all nearby compatible connections to this connection.
Type checking does not apply, since this function is used for bumping.

Headless configurations (the default) do not have neighboring connection,
and always return an empty list (the default).
Blockly.RenderedConnection overrides this behavior with a list
computed from the rendered positioning.

#### Parameters

##### \_maxLimit

`number`

The maximum radius to another connection.

#### Returns

[`Connection`](Connection.md)[]

List of connections.

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:18055

---

### onCheckChanged\_()

> `protected` **onCheckChanged\_**(): `void`

Function to be called when this connection's compatible types have changed.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:17995

---

### onFailedConnect()

> **onFailedConnect**(`_otherConnection`): `void`

Called when an attempted connection fails. NOP by default (i.e. for headless
workspaces).

#### Parameters

##### \_otherConnection

[`Connection`](Connection.md)

Connection that this connection
failed to connect to.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:17942

---

### respawnShadow\_()

> `protected` **respawnShadow\_**(): `void`

Respawn the shadow block if there was one connected to the this connection.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:17965

---

### setCheck()

> **setCheck**(`check`): [`Connection`](Connection.md)

Change a connection's compatibility.

#### Parameters

##### check

Compatible value type or list of
value types. Null if all types are compatible.

`string` | `string`[]

#### Returns

[`Connection`](Connection.md)

The connection being modified
(to allow chaining).

#### Defined in

node_modules/blockly/blockly.d.ts:18003

---

### setShadowDom()

> **setShadowDom**(`shadowDom`): `void`

Changes the connection's shadow block.

#### Parameters

##### shadowDom

`Element`

DOM representation of a block or null.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:18016

---

### setShadowState()

> **setShadowState**(`shadowState`): `void`

Changes the connection's shadow block.

#### Parameters

##### shadowState

`any`

An state represetation of the block or
null.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:18031

---

### targetBlock()

> **targetBlock**(): [`Block`](Block.md)

Returns the block that this connection connects to.

#### Returns

[`Block`](Block.md)

The connected block or null if none is connected.

#### Defined in

node_modules/blockly/blockly.d.ts:17970

---

### toString()

> **toString**(): `string`

This method returns a string describing this Connection in developer terms
(English only). Intended to on be used in console logs and errors.

#### Returns

`string`

The description.

#### Defined in

node_modules/blockly/blockly.d.ts:18068

---

### getConnectionForOrphanedConnection()

> `static` **getConnectionForOrphanedConnection**(`startBlock`, `orphanConnection`): [`Connection`](Connection.md)

Returns the connection (starting at the startBlock) which will accept
the given connection. This includes compatible connection types and
connection checks.

#### Parameters

##### startBlock

[`Block`](Block.md)

The block on which to start the search.

##### orphanConnection

[`Connection`](Connection.md)

The connection that is looking
for a home.

#### Returns

[`Connection`](Connection.md)

The suitable connection point on the chain of
blocks, or null.

#### Defined in

node_modules/blockly/blockly.d.ts:17855
