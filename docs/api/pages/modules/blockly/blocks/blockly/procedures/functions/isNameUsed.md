# Function: isNameUsed()

> **isNameUsed**(`name`, `workspace`, `opt_exclude`?): `boolean`

Return if the given name is already a procedure name.

## Parameters

### name

`string`

The questionable name.

### workspace

[`Workspace`](../../classes/Workspace.md)

The workspace to scan for collisions.

### opt_exclude?

[`Block`](../../classes/Block.md)

Optional block to exclude from
comparisons (one doesn't want to collide with oneself).

## Returns

`boolean`

True if the name is used, otherwise return false.

## Alias

Blockly.Procedures.isNameUsed

## Defined in

node_modules/blockly/blockly.d.ts:5389
