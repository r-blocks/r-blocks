# Function: getFastTextWidthWithSizeString()

> **getFastTextWidthWithSizeString**(`textElement`, `fontSize`, `fontWeight`, `fontFamily`): `number`

Gets the width of a text element using a faster method than `getTextWidth`.
This method requires that we know the text element's font family and size in
advance. Similar to `getTextWidth`, we cache the width we compute.
This method is similar to `getFastTextWidth` but expects the font size
parameter to be a string.

## Parameters

### textElement

`Element`

An SVG 'text' element.

### fontSize

`string`

The font size to use.

### fontWeight

`string`

The font weight to use.

### fontFamily

`string`

The font family to use.

## Returns

`number`

Width of element.

## Alias

Blockly.utils.dom.getFastTextWidthWithSizeString

## Defined in

node_modules/blockly/blockly.d.ts:356
