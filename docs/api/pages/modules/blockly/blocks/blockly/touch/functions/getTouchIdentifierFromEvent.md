# Function: getTouchIdentifierFromEvent()

> **getTouchIdentifierFromEvent**(`e`): `string`

Get the touch identifier from the given event. If it was a mouse event, the
identifier is the string 'mouse'.

## Parameters

### e

`Event`

Mouse event or touch event.

## Returns

`string`

The touch identifier from the first changed touch, if
defined. Otherwise 'mouse'.

## Alias

Blockly.Touch.getTouchIdentifierFromEvent

## Defined in

node_modules/blockly/blockly.d.ts:16737
