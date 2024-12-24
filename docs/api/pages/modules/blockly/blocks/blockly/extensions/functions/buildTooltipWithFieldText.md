# Function: buildTooltipWithFieldText()

> **buildTooltipWithFieldText**(`msgTemplate`, `fieldName`): `Function`

Builds an extension function that will install a dynamic tooltip. The
tooltip message should include the string '%1' and that string will be
replaced with the text of the named field.

## Parameters

### msgTemplate

`string`

The template form to of the message text, with
%1 placeholder.

### fieldName

`string`

The field with the replacement text.

## Returns

`Function`

The extension function.

## Alias

Blockly.Extensions.buildTooltipWithFieldText

## Defined in

node_modules/blockly/blockly.d.ts:10501
