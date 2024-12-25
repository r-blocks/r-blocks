# Function: line()

> **line**(`points`): `string`

Draw multiple lines connecting all of the given points in order. This is
equivalent to a series of 'l' commands.
These coordinates are unitless and hence in the user coordinate system.
See developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths#Line_commands

## Parameters

### points

`string`[]

An array containing all of the points to
draw lines to, in order. The points are represented as strings of the
format ' dx,dy '.

## Returns

`string`

A string of the format ' l (dx,dy)+ '

## Alias

Blockly.utils.svgPaths.line

## Defined in

node_modules/blockly/blockly.d.ts:2521
