# Function: ~~replaceMessageReferences()~~

> **replaceMessageReferences**(`message`): `string`

Replaces string table references in a message, if the message is a string.
For example, "%{bky_my_msg}" and "%{BKY_MY_MSG}" will both be replaced with
the value in Msg['MY_MSG'].

## Parameters

### message

`unknown`

Message, which may be a string that contains
string table references.

## Returns

`string`

String with message references replaced.

## Deprecated

## Alias

Blockly.utils.replaceMessageReferences

## Defined in

node_modules/blockly/blockly.d.ts:10744
