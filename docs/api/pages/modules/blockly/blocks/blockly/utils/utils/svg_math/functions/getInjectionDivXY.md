# Function: getInjectionDivXY()

> **getInjectionDivXY**(`element`): [`Coordinate`](../../../classes/Coordinate.md)

Return the coordinates of the top-left corner of this element relative to
the div Blockly was injected into.

## Parameters

### element

`Element`

SVG element to find the coordinates of. If this is
not a child of the div Blockly was injected into, the behaviour is
undefined.

## Returns

[`Coordinate`](../../../classes/Coordinate.md)

Object with .x and .y properties.

## Alias

Blockly.svgMath.getInjectionDivXY

## Defined in

node_modules/blockly/blockly.d.ts:2745
