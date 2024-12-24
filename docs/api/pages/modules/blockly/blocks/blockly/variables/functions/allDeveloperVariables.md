# Function: allDeveloperVariables()

> **allDeveloperVariables**(`workspace`): `string`[]

Find all developer variables used by blocks in the workspace.
Developer variables are never shown to the user, but are declared as global
variables in the generated code.
To declare developer variables, define the getDeveloperVariables function on
your block and return a list of variable names.
For use by generators.

## Parameters

### workspace

[`Workspace`](../../classes/Workspace.md)

The workspace to search.

## Returns

`string`[]

A list of non-duplicated variable names.

## Alias

Blockly.Variables.allDeveloperVariables

## Defined in

node_modules/blockly/blockly.d.ts:5099
