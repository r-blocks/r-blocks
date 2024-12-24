# Function: arc()

> **arc**(`command`, `flags`, `radius`, `point`): `string`

Draw an elliptical arc curve.
These coordinates are unitless and hence in the user coordinate system.
See developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d#Elliptical_Arc_Curve

## Parameters

### command

`string`

The command string. Either 'a' or 'A'.

### flags

`string`

The flag string. See the MDN documentation for a
description and examples.

### radius

`number`

The radius of the arc to draw.

### point

`string`

The point to move the cursor to after drawing the arc,
specified either in absolute or relative coordinates depending on the
command.

## Returns

`string`

A string of the format 'command radius radius flags point'

## Alias

Blockly.utils.svgPaths.arc

## Defined in

node_modules/blockly/blockly.d.ts:2550
