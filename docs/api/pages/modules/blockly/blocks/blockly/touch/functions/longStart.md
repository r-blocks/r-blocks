# Function: longStart()

> **longStart**(`e`, `gesture`): `void`

Context menus on touch devices are activated using a long-press.
Unfortunately the contextmenu touch event is currently (2015) only supported
by Chrome. This function is fired on any touchstart event, queues a task,
which after about a second opens the context menu. The tasks is killed
if the touch event terminates early.

## Parameters

### e

`Event`

Touch start event.

### gesture

[`Gesture`](../../classes/Gesture.md)

The gesture that triggered this longStart.

## Returns

`void`

## Alias

Blockly.Touch.longStart

## Package

## Defined in

node_modules/blockly/blockly.d.ts:16704
