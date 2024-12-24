# Function: getOrCreateVariablePackage()

> **getOrCreateVariablePackage**(`workspace`, `id`, `opt_name`?, `opt_type`?): [`VariableModel`](../../classes/VariableModel.md)

Helper function to look up or create a variable on the given workspace.
If no variable exists, creates and returns it.

## Parameters

### workspace

[`Workspace`](../../classes/Workspace.md)

The workspace to search for the
variable. It may be a flyout workspace or main workspace.

### id

`string`

The ID to use to look up or create the variable, or null.

### opt_name?

`string`

The string to use to look up or create the
variable.

### opt_type?

`string`

The type to use to look up or create the variable.

## Returns

[`VariableModel`](../../classes/VariableModel.md)

The variable corresponding to the given ID
or name + type combination.

## Alias

Blockly.Variables.getOrCreateVariablePackage

## Defined in

node_modules/blockly/blockly.d.ts:5211
