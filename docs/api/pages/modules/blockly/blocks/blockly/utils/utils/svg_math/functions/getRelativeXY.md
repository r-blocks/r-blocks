# Function: getRelativeXY()

> **getRelativeXY**(`element`): [`Coordinate`](../../../classes/Coordinate.md)

Return the coordinates of the top-left corner of this element relative to
its parent. Only for SVG elements and children (e.g. rect, g, path).

## Parameters

### element

`Element`

SVG element to find the coordinates of.

## Returns

[`Coordinate`](../../../classes/Coordinate.md)

Object with .x and .y properties.

## Alias

Blockly.svgMath.getRelativeXY

## Defined in

node_modules/blockly/blockly.d.ts:2735
