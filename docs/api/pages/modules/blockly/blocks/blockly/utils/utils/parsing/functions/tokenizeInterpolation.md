# Function: tokenizeInterpolation()

> **tokenizeInterpolation**(`message`): (`string` \| `number`)[]

Parse a string with any number of interpolation tokens (%1, %2, ...).
It will also replace string table references (e.g., %{bky_my_msg} and
%{BKY_MY_MSG} will both be replaced with the value in
Msg['MY_MSG']). Percentage sign characters '%' may be self-escaped
(e.g., '%%').

## Parameters

### message

`string`

Text which might contain string table references and
interpolation tokens.

## Returns

(`string` \| `number`)[]

Array of strings and numbers.

## Alias

Blockly.parsing.tokenizeInterpolation

## Defined in

node_modules/blockly/blockly.d.ts:1405
