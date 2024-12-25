# Function: prompt()

> **prompt**(`message`, `defaultValue`, `callback`): `void`

Wrapper to window.prompt() that app developers may override via setPrompt to
provide alternatives to the modal browser window. Built-in browser prompts
are often used for better text input experience on mobile device. We strongly
recommend testing mobile when overriding this.

## Parameters

### message

`string`

The message to display to the user.

### defaultValue

`string`

The value to initialize the prompt with.

### callback

(`arg0`) => `any`

The callback for handling user response.

## Returns

`void`

## Alias

Blockly.dialog.prompt

## Defined in

node_modules/blockly/blockly.d.ts:776
