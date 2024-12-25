# Class: BubbleDragger

## Constructors

### new BubbleDragger()

> **new BubbleDragger**(`bubble`, `workspace`): [`BubbleDragger`](BubbleDragger.md)

Class for a bubble dragger. It moves things on the bubble canvas around the
workspace when they are being dragged by a mouse or touch. These can be
block comments, mutators, warnings, or workspace comments.

#### Parameters

##### bubble

[`IBubble`](IBubble.md)

The item on the bubble canvas to drag.

##### workspace

[`WorkspaceSvg`](WorkspaceSvg.md)

The workspace to drag on.

#### Returns

[`BubbleDragger`](BubbleDragger.md)

#### Alias

Blockly.BubbleDragger

#### Defined in

node_modules/blockly/blockly.d.ts:15764

## Methods

### dispose()

> **dispose**(): `void`

Sever all links from this object.

#### Returns

`void`

#### Package

#### Suppress

#### Defined in

node_modules/blockly/blockly.d.ts:15808

---

### dragBubble()

> **dragBubble**(`e`, `currentDragDeltaXY`): `void`

Execute a step of bubble dragging, based on the given event. Update the
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

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:15822

---

### endBubbleDrag()

> **endBubbleDrag**(`e`, `currentDragDeltaXY`): `void`

Finish a bubble drag and put the bubble back on the workspace.

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

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:15845

---

### startBubbleDrag()

> **startBubbleDrag**(): `void`

Start dragging a bubble. This includes moving it to the drag surface.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:15813
