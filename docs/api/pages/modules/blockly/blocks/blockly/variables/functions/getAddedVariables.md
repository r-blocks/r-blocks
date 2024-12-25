# Function: getAddedVariables()

> **getAddedVariables**(`workspace`, `originalVariables`): [`VariableModel`](../../classes/VariableModel.md)[]

Helper function to get the list of variables that have been added to the
workspace after adding a new block, using the given list of variables that
were in the workspace before the new block was added.

## Parameters

### workspace

[`Workspace`](../../classes/Workspace.md)

The workspace to inspect.

### originalVariables

[`VariableModel`](../../classes/VariableModel.md)[]

The array of
variables that existed in the workspace before adding the new block.

## Returns

[`VariableModel`](../../classes/VariableModel.md)[]

The new array of variables that
were freshly added to the workspace after creating the new block,
or [] if no new variables were added to the workspace.

## Alias

Blockly.Variables.getAddedVariables

## Package

## Defined in

node_modules/blockly/blockly.d.ts:5241
