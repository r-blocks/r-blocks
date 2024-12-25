# Function: getFastTextWidth()

> **getFastTextWidth**(`textElement`, `fontSize`, `fontWeight`, `fontFamily`): `number`

Gets the width of a text element using a faster method than `getTextWidth`.
This method requires that we know the text element's font family and size in
advance. Similar to `getTextWidth`, we cache the width we compute.

## Parameters

### textElement

`Element`

An SVG 'text' element.

### fontSize

`number`

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

Blockly.utils.dom.getFastTextWidth

## Defined in

node_modules/blockly/blockly.d.ts:342
