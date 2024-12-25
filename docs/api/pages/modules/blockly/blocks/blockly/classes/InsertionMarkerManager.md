# Class: InsertionMarkerManager

## Constructors

### new InsertionMarkerManager()

> **new InsertionMarkerManager**(`block`): [`InsertionMarkerManager`](InsertionMarkerManager.md)

Class that controls updates to connections during drags. It is primarily
responsible for finding the closest eligible connection and highlighting or
unhighlighting it as needed during a drag.

#### Parameters

##### block

[`BlockSvg`](BlockSvg.md)

The top block in the stack being dragged.

#### Returns

[`InsertionMarkerManager`](InsertionMarkerManager.md)

#### Alias

Blockly.InsertionMarkerManager

#### Defined in

node_modules/blockly/blockly.d.ts:8545

## Methods

### applyConnections()

> **applyConnections**(): `void`

Connect to the closest connection and render the results.
This should be called at the end of a drag.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:8667

---

### dispose()

> **dispose**(): `void`

Sever all links from this object.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:8640

---

### getInsertionMarkers()

> **getInsertionMarkers**(): [`BlockSvg`](BlockSvg.md)[]

Get a list of the insertion markers that currently exist. Drags have 0, 1,
or 2 insertion markers.

#### Returns

[`BlockSvg`](BlockSvg.md)[]

A possibly empty list of insertion
marker blocks.

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:8807

---

### update()

> **update**(`dxy`, `dragTarget`): `void`

Update connections based on the most recent move location.

#### Parameters

##### dxy

[`Coordinate`](../utils/classes/Coordinate.md)

Position relative to drag start,
in workspace units.

##### dragTarget

[`IDragTarget`](IDragTarget.md)

The drag target that the block is
currently over.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:8676

---

### updateAvailableConnections()

> **updateAvailableConnections**(): `void`

Update the available connections for the top block. These connections can
change if a block is unplugged and the stack is healed.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:8646

---

### wouldConnectBlock()

> **wouldConnectBlock**(): `boolean`

Return whether the block would be connected if dropped immediately, based on
information from the most recent move event.

#### Returns

`boolean`

True if the block would be connected if dropped
immediately.

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:8661

---

### wouldDeleteBlock()

> **wouldDeleteBlock**(): `boolean`

Return whether the block would be deleted if dropped immediately, based on
information from the most recent move event.

#### Returns

`boolean`

True if the block would be deleted if dropped immediately.

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:8653
