# Function: checkMessageReferences()

> **checkMessageReferences**(`message`): `boolean`

Validates that any %{MSG_KEY} references in the message refer to keys of
the Msg string table.

## Parameters

### message

`string`

Text which might contain string table references.

## Returns

`boolean`

True if all message references have matching values.
Otherwise, false.

## Alias

Blockly.parsing.checkMessageReferences

## Defined in

node_modules/blockly/blockly.d.ts:1424
