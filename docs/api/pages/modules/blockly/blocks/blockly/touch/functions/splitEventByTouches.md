# Function: splitEventByTouches()

> **splitEventByTouches**(`e`): `Event`[]

Split an event into an array of events, one per changed touch or mouse
point.

## Parameters

### e

`Event`

A mouse event or a touch event with one or more changed
touches.

## Returns

`Event`[]

An array of mouse or touch events. Each touch
event will have exactly one changed touch.

## Alias

Blockly.Touch.splitEventByTouches

## Defined in

node_modules/blockly/blockly.d.ts:16782
