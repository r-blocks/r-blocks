# Function: appendDomToWorkspace()

> **appendDomToWorkspace**(`xml`, `workspace`): `string`[]

Decode an XML DOM and create blocks on the workspace. Position the new
blocks immediately below prior blocks, aligned by their starting edge.

## Parameters

### xml

`Element`

The XML DOM.

### workspace

[`Workspace`](../../classes/Workspace.md)

The workspace to add to.

## Returns

`string`[]

An array containing new block IDs.

## Alias

Blockly.Xml.appendDomToWorkspace

## Defined in

node_modules/blockly/blockly.d.ts:17814
