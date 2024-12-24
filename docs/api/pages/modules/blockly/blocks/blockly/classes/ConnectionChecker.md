# Class: ConnectionChecker

Class for connection type checking logic.

## Implements

## Alias

Blockly.ConnectionChecker

## Implements

- [`IConnectionChecker`](IConnectionChecker.md)

## Constructors

### new ConnectionChecker()

> **new ConnectionChecker**(): [`ConnectionChecker`](ConnectionChecker.md)

#### Returns

[`ConnectionChecker`](ConnectionChecker.md)

## Methods

### canConnect()

> **canConnect**(`a`, `b`, `isDragging`, `opt_distance`?): `boolean`

Check whether the current connection can connect with the target
connection.

#### Parameters

##### a

[`Connection`](Connection.md)

Connection to check compatibility with.

##### b

[`Connection`](Connection.md)

Connection to check compatibility with.

##### isDragging

`boolean`

True if the connection is being made by dragging
a block.

##### opt_distance?

`number`

The max allowable distance between the
connections for drag checks.

#### Returns

`boolean`

Whether the connection is legal.

#### Defined in

node_modules/blockly/blockly.d.ts:4489

---

### canConnectToPrevious\_()

> `protected` **canConnectToPrevious\_**(`a`, `b`): `boolean`

Helper function for drag checking.

#### Parameters

##### a

[`Connection`](Connection.md)

The connection to check, which must be a
statement input or next connection.

##### b

[`Connection`](Connection.md)

A nearby connection to check, which
must be a previous connection.

#### Returns

`boolean`

True if the connection is allowed, false otherwise.

#### Defined in

node_modules/blockly/blockly.d.ts:4551

---

### canConnectWithReason()

> **canConnectWithReason**(`a`, `b`, `isDragging`, `opt_distance`?): `number`

Checks whether the current connection can connect with the target
connection, and return an error code if there are problems.

#### Parameters

##### a

[`Connection`](Connection.md)

Connection to check compatibility with.

##### b

[`Connection`](Connection.md)

Connection to check compatibility with.

##### isDragging

`boolean`

True if the connection is being made by dragging
a block.

##### opt_distance?

`number`

The max allowable distance between the
connections for drag checks.

#### Returns

`number`

Connection.CAN_CONNECT if the connection is legal,
an error code otherwise.

#### Defined in

node_modules/blockly/blockly.d.ts:4503

---

### doDragChecks()

> **doDragChecks**(`a`, `b`, `distance`): `boolean`

Check whether this connection can be made by dragging.

#### Parameters

##### a

[`RenderedConnection`](RenderedConnection.md)

Connection to compare.

##### b

[`RenderedConnection`](RenderedConnection.md)

Connection to compare against.

##### distance

`number`

The maximum allowable distance between connections.

#### Returns

`boolean`

True if the connection is allowed during a drag.

#### Defined in

node_modules/blockly/blockly.d.ts:4541

---

### doSafetyChecks()

> **doSafetyChecks**(`a`, `b`): `number`

Check that connecting the given connections is safe, meaning that it would
not break any of Blockly's basic assumptions (e.g. no self connections).

#### Parameters

##### a

[`Connection`](Connection.md)

The first of the connections to check.

##### b

[`Connection`](Connection.md)

The second of the connections to check.

#### Returns

`number`

An enum with the reason this connection is safe or unsafe.

#### Defined in

node_modules/blockly/blockly.d.ts:4522

---

### doTypeChecks()

> **doTypeChecks**(`a`, `b`): `boolean`

Check whether this connection is compatible with another connection with
respect to the value type system. E.g. square_root("Hello") is not
compatible.

#### Parameters

##### a

[`Connection`](Connection.md)

Connection to compare.

##### b

[`Connection`](Connection.md)

Connection to compare against.

#### Returns

`boolean`

True if the connections share a type.

#### Defined in

node_modules/blockly/blockly.d.ts:4532

---

### getErrorMessage()

> **getErrorMessage**(`errorCode`, `a`, `b`): `string`

Helper method that translates a connection error code into a string.

#### Parameters

##### errorCode

`number`

The error code.

##### a

[`Connection`](Connection.md)

One of the two connections being checked.

##### b

[`Connection`](Connection.md)

The second of the two connections being
checked.

#### Returns

`string`

A developer-readable error string.

#### Defined in

node_modules/blockly/blockly.d.ts:4513
