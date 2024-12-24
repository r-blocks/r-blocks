# Function: allUsedVarModels()

> **allUsedVarModels**(`ws`): [`VariableModel`](../../classes/VariableModel.md)[]

Find all user-created variables that are in use in the workspace.
For use by generators.
To get a list of all variables on a workspace, including unused variables,
call Workspace.getAllVariables.

## Parameters

### ws

[`Workspace`](../../classes/Workspace.md)

The workspace to search for variables.

## Returns

[`VariableModel`](../../classes/VariableModel.md)[]

Array of variable models.

## Alias

Blockly.Variables.allUsedVarModels

## Defined in

node_modules/blockly/blockly.d.ts:5087
