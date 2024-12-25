# Class: RenderedConnection

## Extends

- [`Connection`](Connection.md)

## Constructors

### new RenderedConnection()

> **new RenderedConnection**(`source`, `type`): [`RenderedConnection`](RenderedConnection.md)

Class for a connection between blocks that may be rendered on screen.

#### Parameters

##### source

[`BlockSvg`](BlockSvg.md)

The block establishing this connection.

##### type

`number`

The type of the connection.

#### Returns

[`RenderedConnection`](RenderedConnection.md)

#### Alias

Blockly.RenderedConnection

#### Overrides

[`Connection`](Connection.md).[`constructor`](Connection.md#constructors)

#### Defined in

node_modules/blockly/blockly.d.ts:2818

## Properties

### check\_

> **check\_**: `any`[]

#### Inherited from

[`Connection`](Connection.md).[`check_`](Connection.md#check_)

#### Defined in

node_modules/blockly/blockly.d.ts:18004

---

### disposed

> **disposed**: `boolean`

#### Inherited from

[`Connection`](Connection.md).[`disposed`](Connection.md#disposed)

#### Defined in

node_modules/blockly/blockly.d.ts:17884

---

### shadowDom\_

> **shadowDom\_**: `Element`

#### Inherited from

[`Connection`](Connection.md).[`shadowDom_`](Connection.md#shadowdom_)

#### Defined in

node_modules/blockly/blockly.d.ts:18077

---

### shadowState\_

> **shadowState\_**: `any`

#### Inherited from

[`Connection`](Connection.md).[`shadowState_`](Connection.md#shadowstate_)

#### Defined in

node_modules/blockly/blockly.d.ts:18078

---

### sourceBlock\_

> `protected` **sourceBlock\_**: [`Block`](Block.md)

#### Inherited from

[`Connection`](Connection.md).[`sourceBlock_`](Connection.md#sourceblock_)

#### Defined in

node_modules/blockly/blockly.d.ts:17869

---

### targetConnection

> **targetConnection**: [`RenderedConnection`](RenderedConnection.md)

Connection this connection connects to. Null if not connected.

#### Overrides

[`Connection`](Connection.md).[`targetConnection`](Connection.md#targetconnection)

#### Defined in

node_modules/blockly/blockly.d.ts:2848

---

### type

> **type**: `number`

#### Inherited from

[`Connection`](Connection.md).[`type`](Connection.md#type-1)

#### Defined in

node_modules/blockly/blockly.d.ts:17871

---

### x

> **x**: `number`

Horizontal location of this connection.

#### Package

#### Overrides

[`Connection`](Connection.md).[`x`](Connection.md#x)

#### Defined in

node_modules/blockly/blockly.d.ts:2890

---

### y

> **y**: `number`

Vertical location of this connection.

#### Package

#### Overrides

[`Connection`](Connection.md).[`y`](Connection.md#y)

#### Defined in

node_modules/blockly/blockly.d.ts:2891

## Methods

### bumpAwayFrom()

> **bumpAwayFrom**(`staticConnection`): `void`

Move the block(s) belonging to the connection to a point where they don't
visually interfere with the specified connection.

#### Parameters

##### staticConnection

[`Connection`](Connection.md)

The connection to move away
from.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:2883

---

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

#### Inherited from

[`Connection`](Connection.md).[`canConnectWithReason`](Connection.md#canconnectwithreason)

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

#### Inherited from

[`Connection`](Connection.md).[`checkConnection`](Connection.md#checkconnection)

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

#### Inherited from

[`Connection`](Connection.md).[`checkType`](Connection.md#checktype)

#### Defined in

node_modules/blockly/blockly.d.ts:17979

---

### closest()

> **closest**(`maxLimit`, `dxy`): `object`

Find the closest compatible connection to this connection.
All parameters are in workspace units.

#### Parameters

##### maxLimit

`number`

The maximum radius to another connection.

##### dxy

[`Coordinate`](../utils/classes/Coordinate.md)

Offset between this connection's location
in the database and the current location (as a result of dragging).

#### Returns

`object`

Contains two
properties: 'connection' which is either another connection or null,
and 'radius' which is the distance.

##### connection

> **connection**: [`Connection`](Connection.md)

##### radius

> **radius**: `number`

#### Defined in

node_modules/blockly/blockly.d.ts:2932

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

#### Inherited from

[`Connection`](Connection.md).[`connect`](Connection.md#connect)

#### Defined in

node_modules/blockly/blockly.d.ts:17948

---

### connect\_()

> `protected` **connect\_**(`childConnection`): `void`

Connect two connections together. This is the connection on the superior
block. Rerender blocks as needed.

#### Parameters

##### childConnection

[`Connection`](Connection.md)

Connection on inferior block.

#### Returns

`void`

#### Overrides

[`Connection`](Connection.md).[`connect_`](Connection.md#connect_)

#### Defined in

node_modules/blockly/blockly.d.ts:3013

---

### disconnect()

> **disconnect**(): `void`

Disconnect this connection.

#### Returns

`void`

#### Inherited from

[`Connection`](Connection.md).[`disconnect`](Connection.md#disconnect)

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

#### Overrides

[`Connection`](Connection.md).[`disconnectInternal_`](Connection.md#disconnectinternal_)

#### Defined in

node_modules/blockly/blockly.d.ts:2990

---

### dispose()

> **dispose**(): `void`

Dispose of this connection. Remove it from the database (if it is
tracked) and call the super-function to deal with connected blocks.

#### Returns

`void`

#### Package

#### Overrides

[`Connection`](Connection.md).[`dispose`](Connection.md#dispose)

#### Defined in

node_modules/blockly/blockly.d.ts:2855

---

### distanceFrom()

> **distanceFrom**(`otherConnection`): `number`

Returns the distance between this connection and another connection in
workspace units.

#### Parameters

##### otherConnection

[`Connection`](Connection.md)

The other connection to measure
the distance to.

#### Returns

`number`

The distance between connections, in workspace units.

#### Defined in

node_modules/blockly/blockly.d.ts:2875

---

### getCheck()

> **getCheck**(): `any`[]

Get a connection's compatibility.

#### Returns

`any`[]

List of compatible value types.
Null if all types are compatible.

#### Inherited from

[`Connection`](Connection.md).[`getCheck`](Connection.md#getcheck)

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

#### Inherited from

[`Connection`](Connection.md).[`getConnectionChecker`](Connection.md#getconnectionchecker)

#### Defined in

node_modules/blockly/blockly.d.ts:17926

---

### getOffsetInBlock()

> **getOffsetInBlock**(): [`Coordinate`](../utils/classes/Coordinate.md)

Get the offset of this connection relative to the top left of its block.

#### Returns

[`Coordinate`](../utils/classes/Coordinate.md)

The offset of the connection.

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:2916

---

### getParentInput()

> **getParentInput**(): [`Input`](Input.md)

Get the parent input of a connection.

#### Returns

[`Input`](Input.md)

The input that the connection belongs to or null if
no parent exists.

#### Package

#### Inherited from

[`Connection`](Connection.md).[`getParentInput`](Connection.md#getparentinput)

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

#### Inherited from

[`Connection`](Connection.md).[`getShadowDom`](Connection.md#getshadowdom)

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

#### Inherited from

[`Connection`](Connection.md).[`getShadowState`](Connection.md#getshadowstate)

#### Defined in

node_modules/blockly/blockly.d.ts:18042

---

### getSourceBlock()

> **getSourceBlock**(): [`BlockSvg`](BlockSvg.md)

Get the source block for this connection.

#### Returns

[`BlockSvg`](BlockSvg.md)

The source block.

#### Overrides

[`Connection`](Connection.md).[`getSourceBlock`](Connection.md#getsourceblock)

#### Defined in

node_modules/blockly/blockly.d.ts:2861

---

### highlight()

> **highlight**(): `void`

Add highlighting around this connection.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:2939

---

### isConnected()

> **isConnected**(): `boolean`

Is the connection connected?

#### Returns

`boolean`

True if connection is connected to another connection.

#### Inherited from

[`Connection`](Connection.md).[`isConnected`](Connection.md#isconnected)

#### Defined in

node_modules/blockly/blockly.d.ts:17899

---

### ~~isConnectionAllowed()~~

> **isConnectionAllowed**(`candidate`, `maxRadius`?): `boolean`

Check if the two connections can be dragged to connect to each other.

#### Parameters

##### candidate

[`Connection`](Connection.md)

A nearby connection to check.

##### maxRadius?

`number`

The maximum radius allowed for connections, in
workspace units.

#### Returns

`boolean`

True if the connection is allowed, false otherwise.

#### Deprecated

July 2020

#### Overrides

[`Connection`](Connection.md).[`isConnectionAllowed`](Connection.md#isconnectionallowed)

#### Defined in

node_modules/blockly/blockly.d.ts:2973

---

### isSuperior()

> **isSuperior**(): `boolean`

Does the connection belong to a superior block (higher in the source stack)?

#### Returns

`boolean`

True if connection faces down or right.

#### Inherited from

[`Connection`](Connection.md).[`isSuperior`](Connection.md#issuperior)

#### Defined in

node_modules/blockly/blockly.d.ts:17894

---

### moveBy()

> **moveBy**(`dx`, `dy`): `void`

Change the connection's coordinates.

#### Parameters

##### dx

`number`

Change to x coordinate, in workspace units.

##### dy

`number`

Change to y coordinate, in workspace units.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:2897

---

### moveTo()

> **moveTo**(`x`, `y`): `void`

Change the connection's coordinates.

#### Parameters

##### x

`number`

New absolute x coordinate, in workspace coordinates.

##### y

`number`

New absolute y coordinate, in workspace coordinates.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:2889

---

### moveToOffset()

> **moveToOffset**(`blockTL`): `void`

Move this connection to the location given by its offset within the block and
the location of the block's top left corner.

#### Parameters

##### blockTL

[`Coordinate`](../utils/classes/Coordinate.md)

The location of the top left
corner of the block, in workspace coordinates.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:2904

---

### neighbours()

> **neighbours**(`maxLimit`): [`Connection`](Connection.md)[]

Find all nearby compatible connections to this connection.
Type checking does not apply, since this function is used for bumping.

#### Parameters

##### maxLimit

`number`

The maximum radius to another connection, in
workspace units.

#### Returns

[`Connection`](Connection.md)[]

List of connections.

#### Package

#### Overrides

[`Connection`](Connection.md).[`neighbours`](Connection.md#neighbours)

#### Defined in

node_modules/blockly/blockly.d.ts:3006

---

### onCheckChanged\_()

> `protected` **onCheckChanged\_**(): `void`

Function to be called when this connection's compatible types have changed.

#### Returns

`void`

#### Overrides

[`Connection`](Connection.md).[`onCheckChanged_`](Connection.md#oncheckchanged_)

#### Defined in

node_modules/blockly/blockly.d.ts:3018

---

### onFailedConnect()

> **onFailedConnect**(`otherConnection`): `void`

Behavior after a connection attempt fails.
Bumps this connection away from the other connection. Called when an
attempted connection fails.

#### Parameters

##### otherConnection

[`Connection`](Connection.md)

Connection that this connection
failed to connect to.

#### Returns

`void`

#### Package

#### Overrides

[`Connection`](Connection.md).[`onFailedConnect`](Connection.md#onfailedconnect)

#### Defined in

node_modules/blockly/blockly.d.ts:2982

---

### respawnShadow\_()

> `protected` **respawnShadow\_**(): `void`

Respawn the shadow block if there was one connected to the this connection.
Render/rerender blocks as needed.

#### Returns

`void`

#### Overrides

[`Connection`](Connection.md).[`respawnShadow_`](Connection.md#respawnshadow_)

#### Defined in

node_modules/blockly/blockly.d.ts:2997

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

#### Inherited from

[`Connection`](Connection.md).[`setCheck`](Connection.md#setcheck)

#### Defined in

node_modules/blockly/blockly.d.ts:18003

---

### setOffsetInBlock()

> **setOffsetInBlock**(`x`, `y`): `void`

Set the offset of this connection relative to the top left of its block.

#### Parameters

##### x

`number`

The new relative x, in workspace units.

##### y

`number`

The new relative y, in workspace units.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:2910

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

#### Inherited from

[`Connection`](Connection.md).[`setShadowDom`](Connection.md#setshadowdom)

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

#### Inherited from

[`Connection`](Connection.md).[`setShadowState`](Connection.md#setshadowstate)

#### Defined in

node_modules/blockly/blockly.d.ts:18031

---

### setTracking()

> **setTracking**(`doTracking`): `void`

Set whether this connections is tracked in the database or not.

#### Parameters

##### doTracking

`boolean`

If true, start tracking. If false, stop tracking.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:2949

---

### startTrackingAll()

> **startTrackingAll**(): [`Block`](Block.md)[]

Start tracking this connection, as well as all down-stream connections on
any block attached to this connection. This happens when a block is expanded.

#### Returns

[`Block`](Block.md)[]

List of blocks to render.

#### Defined in

node_modules/blockly/blockly.d.ts:2964

---

### stopTrackingAll()

> **stopTrackingAll**(): `void`

Stop tracking this connection, as well as all down-stream connections on
any block attached to this connection. This happens when a block is
collapsed.

Also closes down-stream icons/bubbles.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:2958

---

### targetBlock()

> **targetBlock**(): [`BlockSvg`](BlockSvg.md)

Returns the block that this connection connects to.

#### Returns

[`BlockSvg`](BlockSvg.md)

The connected block or null if none is connected.

#### Overrides

[`Connection`](Connection.md).[`targetBlock`](Connection.md#targetblock)

#### Defined in

node_modules/blockly/blockly.d.ts:2867

---

### tighten()

> **tighten**(): `void`

Move the blocks on either side of this connection right next to each other.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:2921

---

### toString()

> **toString**(): `string`

This method returns a string describing this Connection in developer terms
(English only). Intended to on be used in console logs and errors.

#### Returns

`string`

The description.

#### Inherited from

[`Connection`](Connection.md).[`toString`](Connection.md#tostring)

#### Defined in

node_modules/blockly/blockly.d.ts:18068

---

### unhighlight()

> **unhighlight**(): `void`

Remove the highlighting around this connection.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:2943

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

#### Inherited from

[`Connection`](Connection.md).[`getConnectionForOrphanedConnection`](Connection.md#getconnectionfororphanedconnection)

#### Defined in

node_modules/blockly/blockly.d.ts:17855
