# Class: TouchGesture

## Constructors

### new TouchGesture()

> **new TouchGesture**(`e`, `creatorWorkspace`): [`TouchGesture`](TouchGesture.md)

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

[`TouchGesture`](TouchGesture.md)

#### Alias

Blockly.TouchGesture

#### Defined in

node_modules/blockly/blockly.d.ts:11700

## Properties

### onMoveWrapper\_

> **onMoveWrapper\_**: `any`[][]

#### Defined in

node_modules/blockly/blockly.d.ts:11759

---

### onUpWrapper\_

> **onUpWrapper\_**: `any`[][]

#### Defined in

node_modules/blockly/blockly.d.ts:11760

## Methods

### bindMouseEvents()

> **bindMouseEvents**(`e`): `void`

Bind gesture events.
Overriding the gesture definition of this function, binding the same
functions for onMoveWrapper* and onUpWrapper* but passing
opt_noCaptureIdentifier.
In addition, binding a second mouse down event to detect multi-touch events.

#### Parameters

##### e

`Event`

A mouse down or touch start event.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:11758

---

### dispose()

> **dispose**(): `void`

Sever all links from this object.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:11789

---

### doStart()

> **doStart**(`e`): `void`

Start a gesture: update the workspace to indicate that a gesture is in
progress and bind mousemove and mouseup handlers.

#### Parameters

##### e

`Event`

A mouse down, touch start or pointer down event.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:11748

---

### getTouchPoint()

> **getTouchPoint**(`e`): [`Coordinate`](../utils/classes/Coordinate.md)

Helper function returning the current touch point coordinate.

#### Parameters

##### e

`Event`

A touch or pointer event.

#### Returns

[`Coordinate`](../utils/classes/Coordinate.md)

The current touch point coordinate

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:11822

---

### handleMove()

> **handleMove**(`e`): `void`

Handle a mouse move, touch move, or pointer move event.

#### Parameters

##### e

`Event`

A mouse move, touch move, or pointer move event.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:11772

---

### handleStart()

> **handleStart**(`e`): `void`

Handle a mouse down, touch start, or pointer down event.

#### Parameters

##### e

`Event`

A mouse down, touch start, or pointer down event.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:11766

---

### handleTouchEnd()

> **handleTouchEnd**(`e`): `void`

Handle a touch end or pointer end event and end the gesture.

#### Parameters

##### e

`Event`

A touch end, or pointer end event.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:11815

---

### handleTouchMove()

> **handleTouchMove**(`e`): `void`

Handle a touch move or pointer move event and zoom in/out if two pointers
are on the screen.

#### Parameters

##### e

`Event`

A touch move, or pointer move event.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:11803

---

### handleTouchStart()

> **handleTouchStart**(`e`): `void`

Handle a touch start or pointer down event and keep track of current
pointers.

#### Parameters

##### e

`Event`

A touch start, or pointer down event.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:11796

---

### handleUp()

> **handleUp**(`e`): `void`

Handle a mouse up, touch end, or pointer up event.

#### Parameters

##### e

`Event`

A mouse up, touch end, or pointer up event.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:11778

---

### isMultiTouch()

> **isMultiTouch**(): `boolean`

Whether this gesture is part of a multi-touch gesture.

#### Returns

`boolean`

Whether this gesture is part of a multi-touch gesture.

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:11784
