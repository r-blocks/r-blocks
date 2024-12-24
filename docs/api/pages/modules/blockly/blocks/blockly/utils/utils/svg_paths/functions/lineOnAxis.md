# Function: lineOnAxis()

> **lineOnAxis**(`command`, `val`): `string`

Draw a horizontal or vertical line.
The first argument specifies the direction and whether the given position is
relative or absolute.
These coordinates are unitless and hence in the user coordinate system.
See developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d#LineTo_path_commands

## Parameters

### command

`string`

The command to prepend to the coordinate. This
should be one of: V, v, H, h.

### val

`number`

The coordinate to pass to the command. It may be
absolute or relative.

## Returns

`string`

A string of the format ' command val '

## Alias

Blockly.utils.svgPaths.lineOnAxis

## Defined in

node_modules/blockly/blockly.d.ts:2535
