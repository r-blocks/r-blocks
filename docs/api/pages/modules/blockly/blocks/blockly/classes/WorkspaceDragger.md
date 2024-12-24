# Class: WorkspaceDragger

Class for a workspace dragger. It moves the workspace around when it is
being dragged by a mouse or touch.
Note that the workspace itself manages whether or not it has a drag surface
and how to do translations based on that. This simply passes the right
commands based on events.

## Param

The workspace to drag.

## Alias

Blockly.WorkspaceDragger

## Constructors

### new WorkspaceDragger()

> **new WorkspaceDragger**(`workspace`): [`WorkspaceDragger`](WorkspaceDragger.md)

#### Parameters

##### workspace

`any`

#### Returns

[`WorkspaceDragger`](WorkspaceDragger.md)

#### Defined in

node_modules/blockly/blockly.d.ts:15895

## Properties

### startScrollXY\_

> `protected` **startScrollXY\_**: [`Coordinate`](../utils/classes/Coordinate.md)

The scroll position of the workspace at the beginning of the drag.
Coordinate system: pixel coordinates.

#### Defined in

node_modules/blockly/blockly.d.ts:15919

## Methods

### dispose()

> **dispose**(): `void`

Sever all links from this object.

#### Returns

`void`

#### Package

#### Suppress

#### Defined in

node_modules/blockly/blockly.d.ts:15925

---

### drag()

> **drag**(`currentDragDeltaXY`): `void`

Move the workspace based on the most recent mouse movements.

#### Parameters

##### currentDragDeltaXY

[`Coordinate`](../utils/classes/Coordinate.md)

How far the pointer has
moved from the position at the start of the drag, in pixel coordinates.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:15944

---

### endDrag()

> **endDrag**(`currentDragDeltaXY`): `void`

Finish dragging the workspace and put everything back where it belongs.

#### Parameters

##### currentDragDeltaXY

[`Coordinate`](../utils/classes/Coordinate.md)

How far the pointer has
moved from the position at the start of the drag, in pixel coordinates.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:15937

---

### startDrag()

> **startDrag**(): `void`

Start dragging the workspace.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:15930
