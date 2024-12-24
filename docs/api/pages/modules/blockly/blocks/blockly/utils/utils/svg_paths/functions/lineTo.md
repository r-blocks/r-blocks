# Function: lineTo()

> **lineTo**(`dx`, `dy`): `string`

Draw a line from the current point to the end point, which is the current
point shifted by dx along the x-axis and dy along the y-axis.
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

A string of the format ' l dx,dy '

## Alias

Blockly.utils.svgPaths.lineTo

## Defined in

node_modules/blockly/blockly.d.ts:2509
