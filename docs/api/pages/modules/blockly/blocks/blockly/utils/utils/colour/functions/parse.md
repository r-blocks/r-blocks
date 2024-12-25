# Function: parse()

> **parse**(`str`): `string` \| `null`

Parses a colour from a string.
.parse('red') -> '#ff0000'
.parse('#f00') -> '#ff0000'
.parse('#ff0000') -> '#ff0000'
.parse('0xff0000') -> '#ff0000'
.parse('rgb(255, 0, 0)') -> '#ff0000'

## Parameters

### str

Colour in some CSS format.

`string` | `number`

## Returns

`string` \| `null`

A string containing a hex representation of the colour,
or null if can't be parsed.

## Alias

Blockly.utils.colour.parse

## Defined in

node_modules/blockly/blockly.d.ts:1335
