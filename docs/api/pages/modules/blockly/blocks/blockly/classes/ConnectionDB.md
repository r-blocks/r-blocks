# Class: ConnectionDB

## Constructors

### new ConnectionDB()

> **new ConnectionDB**(`checker`): [`ConnectionDB`](ConnectionDB.md)

Database of connections.
Connections are stored in order of their vertical component. This way
connections in an area may be looked up quickly using a binary search.

#### Parameters

##### checker

[`IConnectionChecker`](IConnectionChecker.md)

The workspace's
connection type checker, used to decide if connections are valid during a
drag.

#### Returns

[`ConnectionDB`](ConnectionDB.md)

#### Alias

Blockly.ConnectionDB

#### Defined in

node_modules/blockly/blockly.d.ts:3096

## Methods

### addConnection()

> **addConnection**(`connection`, `yPos`): `void`

Add a connection to the database. Should not already exist in the database.

#### Parameters

##### connection

[`RenderedConnection`](RenderedConnection.md)

The connection to be added.

##### yPos

`number`

The y position used to decide where to insert the
connection.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:3117

---

### getNeighbours()

> **getNeighbours**(`connection`, `maxRadius`): [`RenderedConnection`](RenderedConnection.md)[]

Find all nearby connections to the given connection.
Type checking does not apply, since this function is used for bumping.

#### Parameters

##### connection

[`RenderedConnection`](RenderedConnection.md)

The connection whose
neighbours should be returned.

##### maxRadius

`number`

The maximum radius to another connection.

#### Returns

[`RenderedConnection`](RenderedConnection.md)[]

List of connections.

#### Defined in

node_modules/blockly/blockly.d.ts:3153

---

### removeConnection()

> **removeConnection**(`connection`, `yPos`): `void`

Remove a connection from the database. Must already exist in DB.

#### Parameters

##### connection

[`RenderedConnection`](RenderedConnection.md)

The connection to be removed.

##### yPos

`number`

The y position used to find the index of the connection.

#### Returns

`void`

#### Throws

If the connection cannot be found in the database.

#### Defined in

node_modules/blockly/blockly.d.ts:3144

---

### searchForClosest()

> **searchForClosest**(`conn`, `maxRadius`, `dxy`): `object`

Find the closest compatible connection to this connection.

#### Parameters

##### conn

[`RenderedConnection`](RenderedConnection.md)

The connection searching for a compatible
mate.

##### maxRadius

`number`

The maximum radius to another connection.

##### dxy

[`Coordinate`](../utils/classes/Coordinate.md)

Offset between this connection's
location in the database and the current location (as a result of
dragging).

#### Returns

`object`

Contains two properties: 'connection' which is either another
connection or null, and 'radius' which is the distance.

##### connection

> **connection**: [`RenderedConnection`](RenderedConnection.md)

##### radius

> **radius**: `number`

#### Defined in

node_modules/blockly/blockly.d.ts:3176

---

### init()

> `static` **init**(`checker`): [`ConnectionDB`](ConnectionDB.md)[]

Initialize a set of connection DBs for a workspace.

#### Parameters

##### checker

[`IConnectionChecker`](IConnectionChecker.md)

The workspace's
connection checker, used to decide if connections are valid during a
drag.

#### Returns

[`ConnectionDB`](ConnectionDB.md)[]

Array of databases.

#### Defined in

node_modules/blockly/blockly.d.ts:3085
