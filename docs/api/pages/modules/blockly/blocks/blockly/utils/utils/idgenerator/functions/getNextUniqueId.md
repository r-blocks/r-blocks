# Function: getNextUniqueId()

> **getNextUniqueId**(): `string`

Generate the next unique element IDs.
IDs are compatible with the HTML4 id attribute restrictions:
Use only ASCII letters, digits, '\_', '-' and '.'

For UUIDs use genUid (below) instead; this ID generator should
primarily be used for IDs that end up in the DOM.

## Returns

`string`

The next unique identifier.

## Alias

Blockly.utils.idGenerator.getNextUniqueId

## Defined in

node_modules/blockly/blockly.d.ts:21
