# Function: ~~mouseToSvg()~~

> **mouseToSvg**(`e`, `svg`, `matrix`): `SVGPoint`

Returns the converted coordinates of the given mouse event.
The origin (0,0) is the top-left corner of the Blockly SVG.

## Parameters

### e

`Event`

Mouse event.

### svg

`Element`

SVG element.

### matrix

`DOMMatrix`

Inverted screen CTM to use.

## Returns

`SVGPoint`

Object with .x and .y properties.

## Deprecated

Use Blockly.browserEvents.mouseToSvg instead;

## Alias

Blockly.utils.mouseToSvg

## Defined in

node_modules/blockly/blockly.d.ts:10708
