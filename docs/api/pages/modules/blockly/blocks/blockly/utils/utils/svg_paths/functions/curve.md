# Function: curve()

> **curve**(`command`, `points`): `string`

Draw a cubic or quadratic curve. See
developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d#Cubic_B%C3%A9zier_Curve
These coordinates are unitless and hence in the user coordinate system.

## Parameters

### command

`string`

The command to use.
Should be one of: c, C, s, S, q, Q.

### points

`string`[]

An array containing all of the points to pass
to the curve command, in order. The points are represented as strings of
the format ' x, y '.

## Returns

`string`

A string defining one or more Bezier curves. See the MDN
documentation for exact format.

## Alias

Blockly.utils.svgPaths.curve

## Defined in

node_modules/blockly/blockly.d.ts:2476
