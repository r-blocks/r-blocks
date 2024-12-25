# Function: parseBlockColour()

> **parseBlockColour**(`colour`): `object`

Parse a block colour from a number or string, as provided in a block
definition.

## Parameters

### colour

HSV hue value (0 to 360), #RRGGBB string,
or a message reference string pointing to one of those two values.

`string` | `number`

## Returns

`object`

An object containing the colour as
a #RRGGBB string, and the hue if the input was an HSV hue value.

### hex

> **hex**: `string`

### hue

> **hue**: `number` \| `null`

## Throws

If the colour cannot be parsed.

## Alias

Blockly.parsing.parseBlockColour

## Defined in

node_modules/blockly/blockly.d.ts:1435
