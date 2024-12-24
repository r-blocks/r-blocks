# Function: allProcedures()

> **allProcedures**(`root`): `any`[][][]

Find all user-created procedure definitions in a workspace.

## Parameters

### root

[`Workspace`](../../classes/Workspace.md)

Root workspace.

## Returns

`any`[][][]

Pair of arrays, the
first contains procedures without return variables, the second with.
Each procedure is defined by a three-element list of name, parameter
list, and return value boolean.

## Alias

Blockly.Procedures.allProcedures

## Defined in

node_modules/blockly/blockly.d.ts:5369
