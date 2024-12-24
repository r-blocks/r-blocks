# Class: BlockDragger

## Constructors

### new BlockDragger()

> **new BlockDragger**(`block`, `workspace`): [`BlockDragger`](BlockDragger.md)

Class for a block dragger. It moves blocks around the workspace when they
are being dragged by a mouse or touch.

#### Parameters

##### block

[`BlockSvg`](BlockSvg.md)

The block to drag.

##### workspace

[`WorkspaceSvg`](WorkspaceSvg.md)

The workspace to drag on.

#### Returns

[`BlockDragger`](BlockDragger.md)

#### Implements

#### Alias

Blockly.BlockDragger

#### Defined in

node_modules/blockly/blockly.d.ts:16033

## Properties

### draggedConnectionManager\_

> `protected` **draggedConnectionManager\_**: [`InsertionMarkerManager`](InsertionMarkerManager.md)

Object that keeps track of connections on dragged blocks.

#### Defined in

node_modules/blockly/blockly.d.ts:16051

---

### draggingBlock\_

> `protected` **draggingBlock\_**: [`BlockSvg`](BlockSvg.md)

The top block in the stack that is being dragged.

#### Defined in

node_modules/blockly/blockly.d.ts:16039

---

### dragIconData\_

> `protected` **dragIconData\_**: `any`[]

A list of all of the icons (comment, warning, and mutator) that are
on this block and its descendants. Moving an icon moves the bubble that
extends from it if that bubble is open.

#### Defined in

node_modules/blockly/blockly.d.ts:16078

---

### startXY\_

> `protected` **startXY\_**: [`Coordinate`](../utils/classes/Coordinate.md)

The location of the top left corner of the dragging block at the beginning
of the drag in workspace coordinates.

#### Defined in

node_modules/blockly/blockly.d.ts:16070

---

### workspace\_

> `protected` **workspace\_**: [`WorkspaceSvg`](WorkspaceSvg.md)

The workspace on which the block is being dragged.

#### Defined in

node_modules/blockly/blockly.d.ts:16045

---

### wouldDeleteBlock\_

> `protected` **wouldDeleteBlock\_**: `boolean`

Whether the block would be deleted if dropped immediately.

#### Defined in

node_modules/blockly/blockly.d.ts:16063

## Methods

### disconnectBlock\_()

> `protected` **disconnectBlock\_**(`healStack`, `currentDragDeltaXY`): `void`

Disconnects the block and moves it to a new location.

#### Parameters

##### healStack

`boolean`

Whether or not to heal the stack after
disconnecting.

##### currentDragDeltaXY

[`Coordinate`](../utils/classes/Coordinate.md)

How far the pointer has
moved from the position at mouse down, in pixel units.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:16109

---

### dispose()

> **dispose**(): `void`

Sever all links from this object.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:16083

---

### drag()

> **drag**(`e`, `currentDragDeltaXY`): `void`

Execute a step of block dragging, based on the given event. Update the
display accordingly.

#### Parameters

##### e

`Event`

The most recent move event.

##### currentDragDeltaXY

[`Coordinate`](../utils/classes/Coordinate.md)

How far the pointer has
moved from the position at the start of the drag, in pixel units.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:16123

---

### dragIcons\_()

> `protected` **dragIcons\_**(`dxy`): `void`

Move all of the icons connected to this drag.

#### Parameters

##### dxy

[`Coordinate`](../utils/classes/Coordinate.md)

How far to move the icons from their
original positions, in workspace units.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:16203

---

### endDrag()

> **endDrag**(`e`, `currentDragDeltaXY`): `void`

Finish a block drag and put the block back on the workspace.

#### Parameters

##### e

`Event`

The mouseup/touchend event.

##### currentDragDeltaXY

[`Coordinate`](../utils/classes/Coordinate.md)

How far the pointer has
moved from the position at the start of the drag, in pixel units.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:16131

---

### fireDragEndEvent\_()

> `protected` **fireDragEndEvent\_**(): `void`

Fire a UI event at the end of a block drag.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:16165

---

### fireDragStartEvent\_()

> `protected` **fireDragStartEvent\_**(): `void`

Fire a UI event at the start of a block drag.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:16114

---

### fireMoveEvent\_()

> `protected` **fireMoveEvent\_**(): `void`

Fire a move event at the end of a block drag.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:16178

---

### getInsertionMarkers()

> **getInsertionMarkers**(): [`BlockSvg`](BlockSvg.md)[]

Get a list of the insertion markers that currently exist. Drags have 0, 1,
or 2 insertion markers.

#### Returns

[`BlockSvg`](BlockSvg.md)[]

A possibly empty list of insertion
marker blocks.

#### Defined in

node_modules/blockly/blockly.d.ts:16211

---

### getNewLocationAfterDrag\_()

> `protected` **getNewLocationAfterDrag\_**(`currentDragDeltaXY`): `object`

Calculates the drag delta and new location values after a block is dragged.

#### Parameters

##### currentDragDeltaXY

[`Coordinate`](../utils/classes/Coordinate.md)

How far the pointer has
moved from the start of the drag, in pixel units.

#### Returns

`object`

New location after drag. delta is in
workspace units. newLocation is the new coordinate where the block should
end up.

##### delta

> **delta**: [`Coordinate`](../utils/classes/Coordinate.md)

##### newLocation

> **newLocation**: [`Coordinate`](../utils/classes/Coordinate.md)

#### Defined in

node_modules/blockly/blockly.d.ts:16142

---

### maybeDeleteBlock\_()

> `protected` **maybeDeleteBlock\_**(): `boolean`

May delete the dragging block, if allowed. If `this.wouldDeleteBlock_` is not
true, the block will not be deleted. This should be called at the end of a
block drag.

#### Returns

`boolean`

True if the block was deleted.

#### Defined in

node_modules/blockly/blockly.d.ts:16153

---

### pixelsToWorkspaceUnits\_()

> `protected` **pixelsToWorkspaceUnits\_**(`pixelCoord`): [`Coordinate`](../utils/classes/Coordinate.md)

Convert a coordinate object from pixels to workspace units, including a
correction for mutator workspaces.
This function does not consider differing origins. It simply scales the
input's x and y values.

#### Parameters

##### pixelCoord

[`Coordinate`](../utils/classes/Coordinate.md)

A coordinate with x and y
values in CSS pixel units.

#### Returns

[`Coordinate`](../utils/classes/Coordinate.md)

The input coordinate divided by the
workspace scale.

#### Defined in

node_modules/blockly/blockly.d.ts:16196

---

### shouldDisconnect\_()

> `protected` **shouldDisconnect\_**(`healStack`): `boolean`

Whether or not we should disconnect the block when a drag is started.

#### Parameters

##### healStack

`boolean`

Whether or not to heal the stack after
disconnecting.

#### Returns

`boolean`

True to disconnect the block, false otherwise.

#### Defined in

node_modules/blockly/blockly.d.ts:16100

---

### startDrag()

> **startDrag**(`currentDragDeltaXY`, `healStack`): `void`

Start dragging a block. This includes moving it to the drag surface.

#### Parameters

##### currentDragDeltaXY

[`Coordinate`](../utils/classes/Coordinate.md)

How far the pointer has
moved from the position at mouse down, in pixel units.

##### healStack

`boolean`

Whether or not to heal the stack after
disconnecting.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:16092

---

### updateBlockAfterMove\_()

> `protected` **updateBlockAfterMove\_**(`delta`): `void`

Updates the necessary information to place a block at a certain location.

#### Parameters

##### delta

[`Coordinate`](../utils/classes/Coordinate.md)

The change in location from where
the block started the drag to where it ended the drag.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:16160

---

### updateCursorDuringBlockDrag\_()

> `protected` **updateCursorDuringBlockDrag\_**(): `void`

Update the cursor (and possibly the trash can lid) to reflect whether the
dragging block would be deleted if released immediately.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:16184

---

### updateToolboxStyle\_()

> `protected` **updateToolboxStyle\_**(`isEnd`): `void`

Adds or removes the style of the cursor for the toolbox.
This is what changes the cursor to display an x when a deletable block is
held over the toolbox.

#### Parameters

##### isEnd

`boolean`

True if we are at the end of a drag, false otherwise.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:16173
