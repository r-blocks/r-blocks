# Function: moveBy()

> **moveBy**(`dx`, `dy`): `string`

Move the cursor to the given position without drawing a line.
Coordinates are relative.
These coordinates are unitless and hence in the user coordinate system.
See developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths#Line_commands

## Parameters

### dx

`number`

The relative x coordinate.

### dy

`number`

The relative y coordinate.

## Returns

`string`

A string of the format ' m dx,dy '

## Alias

Blockly.utils.svgPaths.moveBy

## Defined in

node_modules/blockly/blockly.d.ts:2498
