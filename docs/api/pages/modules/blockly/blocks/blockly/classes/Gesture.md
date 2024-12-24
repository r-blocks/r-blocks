# Class: Gesture

Note: In this file "start" refers to touchstart, mousedown, and pointerstart
events. "End" refers to touchend, mouseup, and pointerend events.

## Constructors

### new Gesture()

> **new Gesture**(`e`, `creatorWorkspace`): [`Gesture`](Gesture.md)

Class for one gesture.

#### Parameters

##### e

`Event`

The event that kicked off this gesture.

##### creatorWorkspace

[`WorkspaceSvg`](WorkspaceSvg.md)

The workspace that created
this gesture and has a reference to it.

#### Returns

[`Gesture`](Gesture.md)

#### Alias

Blockly.Gesture

#### Defined in

node_modules/blockly/blockly.d.ts:16237

## Properties

### isEnding\_

> `protected` **isEnding\_**: `boolean`

Boolean used internally to break a cycle in disposal.

#### Defined in

node_modules/blockly/blockly.d.ts:16387

---

### onMoveWrapper\_

> `protected` **onMoveWrapper\_**: `any`[][]

A handle to use to unbind a mouse move listener at the end of a drag.
Opaque data returned from Blockly.bindEventWithChecks\_.

#### Defined in

node_modules/blockly/blockly.d.ts:16337

---

### onUpWrapper\_

> `protected` **onUpWrapper\_**: `any`[][]

A handle to use to unbind a mouse up listener at the end of a drag.
Opaque data returned from Blockly.bindEventWithChecks\_.

#### Defined in

node_modules/blockly/blockly.d.ts:16344

---

### startWorkspace\_

> `protected` **startWorkspace\_**: [`WorkspaceSvg`](WorkspaceSvg.md)

The workspace that the gesture started on. There may be multiple
workspaces on a page; this is more accurate than using
Blockly.common.getMainWorkspace().

#### Defined in

node_modules/blockly/blockly.d.ts:16289

## Methods

### bindMouseEvents()

> **bindMouseEvents**(`e`): `void`

Bind gesture events.

#### Parameters

##### e

`Event`

A mouse down or touch start event.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:16484

---

### cancel()

> **cancel**(): `void`

Cancel an in-progress gesture. If a workspace or block drag is in progress,
end the drag at the most recent location.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:16502

---

### dispose()

> **dispose**(): `void`

Sever all links from this object.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:16399

---

### doStart()

> **doStart**(`e`): `void`

Start a gesture: update the workspace to indicate that a gesture is in
progress and bind mousemove and mouseup handlers.

#### Parameters

##### e

`Event`

A mouse down or touch start event.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:16478

---

### getCurrentDragger()

> **getCurrentDragger**(): [`BubbleDragger`](BubbleDragger.md) \| [`WorkspaceDragger`](WorkspaceDragger.md) \| [`IBlockDragger`](IBlockDragger.md)

Gets the current dragger if an item is being dragged. Null if nothing is
being dragged.

#### Returns

[`BubbleDragger`](BubbleDragger.md) \| [`WorkspaceDragger`](WorkspaceDragger.md) \| [`IBlockDragger`](IBlockDragger.md)

The dragger that is currently in use or null if no drag is in progress.

#### Defined in

node_modules/blockly/blockly.d.ts:16668

---

### getInsertionMarkers()

> **getInsertionMarkers**(): [`BlockSvg`](BlockSvg.md)[]

Get a list of the insertion markers that currently exist. Block drags have
0, 1, or 2 insertion markers.

#### Returns

[`BlockSvg`](BlockSvg.md)[]

A possibly empty list of insertion
marker blocks.

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:16661

---

### handleBlockStart()

> **handleBlockStart**(`e`, `block`): `void`

Handle a mousedown/touchstart event on a block.

#### Parameters

##### e

`Event`

A mouse down or touch start event.

##### block

[`BlockSvg`](BlockSvg.md)

The block the event hit.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:16535

---

### handleBubbleStart()

> **handleBubbleStart**(`e`, `bubble`): `void`

Handle a mousedown/touchstart event on a bubble.

#### Parameters

##### e

`Event`

A mouse down or touch start event.

##### bubble

[`IBubble`](IBubble.md)

The bubble the event hit.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:16542

---

### handleFlyoutStart()

> **handleFlyoutStart**(`e`, `flyout`): `void`

Handle a mousedown/touchstart event on a flyout.

#### Parameters

##### e

`Event`

A mouse down or touch start event.

##### flyout

[`IFlyout`](IFlyout.md)

The flyout the event hit.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:16528

---

### handleMove()

> **handleMove**(`e`): `void`

Handle a mouse move or touch move event.

#### Parameters

##### e

`Event`

A mouse move or touch move event.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:16490

---

### handleRightClick()

> **handleRightClick**(`e`): `void`

Handle a real or faked right-click event by showing a context menu.

#### Parameters

##### e

`Event`

A mouse move or touch move event.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:16508

---

### handleUp()

> **handleUp**(`e`): `void`

Handle a mouse up or touch end event.

#### Parameters

##### e

`Event`

A mouse up or touch end event.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:16496

---

### handleWsStart()

> **handleWsStart**(`e`, `ws`): `void`

Handle a mousedown/touchstart event on a workspace.

#### Parameters

##### e

`Event`

A mouse down or touch start event.

##### ws

[`WorkspaceSvg`](WorkspaceSvg.md)

The workspace the event hit.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:16515

---

### hasStarted()

> **hasStarted**(): `boolean`

Whether this gesture has already been started. In theory every mouse down
has a corresponding mouse up, but in reality it is possible to lose a
mouse up, leaving an in-process gesture hanging.

#### Returns

`boolean`

Whether this gesture was a click on a workspace.

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:16653

---

### isDragging()

> **isDragging**(): `boolean`

Whether this gesture is a drag of either a workspace or block.
This function is called externally to block actions that cannot be taken
mid-drag (e.g. using the keyboard to delete the selected blocks).

#### Returns

`boolean`

True if this gesture is a drag of a workspace or block.

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:16645

---

### setStartBlock()

> **setStartBlock**(`block`): `void`

Record the block that a gesture started on, and set the target block
appropriately.

#### Parameters

##### block

[`BlockSvg`](BlockSvg.md)

The block the gesture started on.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:16589

---

### setStartBubble()

> **setStartBubble**(`bubble`): `void`

Record the bubble that a gesture started on

#### Parameters

##### bubble

[`IBubble`](IBubble.md)

The bubble the gesture started on.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:16582

---

### setStartField()

> **setStartField**(`field`): `void`

Record the field that a gesture started on.

#### Parameters

##### field

[`Field`](Field.md)

The field the gesture started on.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:16576

---

### inProgress()

> `static` **inProgress**(): `boolean`

Is a drag or other gesture currently in progress on any workspace?

#### Returns

`boolean`

True if gesture is occurring.

#### Defined in

node_modules/blockly/blockly.d.ts:16228
