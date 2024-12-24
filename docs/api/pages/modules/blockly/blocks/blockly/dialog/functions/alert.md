# Function: alert()

> **alert**(`message`, `opt_callback`?): `void`

Wrapper to window.alert() that app developers may override via setAlert to
provide alternatives to the modal browser window.

## Parameters

### message

`string`

The message to display to the user.

### opt_callback?

() => `any`

The callback when the alert is dismissed.

## Returns

`void`

## Alias

Blockly.dialog.alert

## Defined in

node_modules/blockly/blockly.d.ts:742
