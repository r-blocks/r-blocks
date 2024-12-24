# Function: confirm()

> **confirm**(`message`, `callback`): `void`

Wrapper to window.confirm() that app developers may override via setConfirm
to provide alternatives to the modal browser window.

## Parameters

### message

`string`

The message to display to the user.

### callback

(`arg0`) => `any`

The callback for handling user response.

## Returns

`void`

## Alias

Blockly.dialog.confirm

## Defined in

node_modules/blockly/blockly.d.ts:757
