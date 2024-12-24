# Function: bind()

> **bind**(`node`, `name`, `thisObject`, `func`): `any`[][]

Bind an event handler that should be called regardless of whether it is part
of the active touch stream.
Use this for events that are not part of a multi-part gesture (e.g.
mouseover for tooltips).

## Parameters

### node

`EventTarget`

Node upon which to listen.

### name

`string`

Event name to listen to (e.g. 'mousedown').

### thisObject

`any`

The value of 'this' in the function.

### func

`Function`

Function to call when event is triggered.

## Returns

`any`[][]

Opaque data that can be passed to
unbindEvent\_.

## Alias

Blockly.browserEvents.bind

## Defined in

node_modules/blockly/blockly.d.ts:16832
