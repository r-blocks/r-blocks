# Function: getVariable()

> **getVariable**(`workspace`, `id`, `opt_name`?, `opt_type`?): [`VariableModel`](../../classes/VariableModel.md) \| `null`

Look up a variable on the given workspace.
Always looks in the main workspace before looking in the flyout workspace.
Always prefers lookup by ID to lookup by name + type.

## Parameters

### workspace

[`Workspace`](../../classes/Workspace.md)

The workspace to search for the
variable. It may be a flyout workspace or main workspace.

### id

`string`

The ID to use to look up the variable, or null.

### opt_name?

`string`

The string to use to look up the variable.
Only used if lookup by ID fails.

### opt_type?

`string`

The type to use to look up the variable.
Only used if lookup by ID fails.

## Returns

[`VariableModel`](../../classes/VariableModel.md) \| `null`

The variable corresponding to the given ID
or name + type combination, or null if not found.

## Alias

Blockly.Variables.getVariable

## Defined in

node_modules/blockly/blockly.d.ts:5227
