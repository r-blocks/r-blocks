# Function: checkTouchIdentifier()

> **checkTouchIdentifier**(`e`): `boolean`

Check whether the touch identifier on the event matches the current saved
identifier. If there is no identifier, that means it's a mouse event and
we'll use the identifier "mouse". This means we won't deal well with
multiple mice being used at the same time. That seems okay.
If the current identifier was unset, save the identifier from the
event. This starts a drag/gesture, during which touch events with other
identifiers will be silently ignored.

## Parameters

### e

`Event`

Mouse event or touch event.

## Returns

`boolean`

Whether the identifier on the event matches the current
saved identifier.

## Alias

Blockly.Touch.checkTouchIdentifier

## Defined in

node_modules/blockly/blockly.d.ts:16751
