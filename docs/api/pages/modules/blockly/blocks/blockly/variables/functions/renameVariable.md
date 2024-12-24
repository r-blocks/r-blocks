# Function: renameVariable()

> **renameVariable**(`workspace`, `variable`, `opt_callback`?): `void`

Opens a prompt that allows the user to enter a new name for a variable.
Triggers a rename if the new name is valid. Or re-prompts if there is a
collision.

## Parameters

### workspace

[`Workspace`](../../classes/Workspace.md)

The workspace on which to rename the
variable.

### variable

[`VariableModel`](../../classes/VariableModel.md)

Variable to rename.

### opt_callback?

(`arg0`) => `any`

A callback. It will
be passed an acceptable new variable name, or null if change is to be
aborted (cancel button), or undefined if an existing variable was chosen.

## Returns

`void`

## Alias

Blockly.Variables.renameVariable

## Defined in

node_modules/blockly/blockly.d.ts:5170
