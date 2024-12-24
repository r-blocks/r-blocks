# Function: shouldHandleEvent()

> **shouldHandleEvent**(`e`): `boolean`

Decide whether Blockly should handle or ignore this event.
Mouse and touch events require special checks because we only want to deal
with one touch stream at a time. All other events should always be handled.

## Parameters

### e

`Event`

The event to check.

## Returns

`boolean`

True if this event should be passed through to the
registered handler; false if it should be blocked.

## Alias

Blockly.Touch.shouldHandleEvent

## Defined in

node_modules/blockly/blockly.d.ts:16728
