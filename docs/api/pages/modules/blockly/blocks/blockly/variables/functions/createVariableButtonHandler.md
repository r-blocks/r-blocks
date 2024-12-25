# Function: createVariableButtonHandler()

> **createVariableButtonHandler**(`workspace`, `opt_callback`?, `opt_type`?): `void`

Handles "Create Variable" button in the default variables toolbox category.
It will prompt the user for a variable name, including re-prompts if a name
is already in use among the workspace's variables.

Custom button handlers can delegate to this function, allowing variables
types and after-creation processing. More complex customization (e.g.,
prompting for variable type) is beyond the scope of this function.

## Parameters

### workspace

[`Workspace`](../../classes/Workspace.md)

The workspace on which to create the
variable.

### opt_callback?

(`arg0`) => `any`

A callback. It will be passed an
acceptable new variable name, or null if change is to be aborted (cancel
button), or undefined if an existing variable was chosen.

### opt_type?

`string`

The type of the variable like 'int', 'string', or
''. This will default to '', which is a specific type.

## Returns

`void`

## Alias

Blockly.Variables.createVariableButtonHandler

## Defined in

node_modules/blockly/blockly.d.ts:5157
