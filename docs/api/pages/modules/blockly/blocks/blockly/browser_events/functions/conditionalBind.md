# Function: conditionalBind()

> **conditionalBind**(`node`, `name`, `thisObject`, `func`, `opt_noCaptureIdentifier`?, `opt_noPreventDefault`?): `any`[][]

Bind an event handler that can be ignored if it is not part of the active
touch stream.
Use this for events that either start or continue a multi-part gesture (e.g.
mousedown or mousemove, which may be part of a drag or click).

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

### opt_noCaptureIdentifier?

`boolean`

True if triggering on this event
should not block execution of other event handlers on this touch or
other simultaneous touches. False by default.

### opt_noPreventDefault?

`boolean`

True if triggering on this event
should prevent the default handler. False by default. If
opt_noPreventDefault is provided, opt_noCaptureIdentifier must also be
provided.

## Returns

`any`[][]

Opaque data that can be passed to
unbindEvent\_.

## Alias

Blockly.browserEvents.conditionalBind

## Defined in

node_modules/blockly/blockly.d.ts:16818
