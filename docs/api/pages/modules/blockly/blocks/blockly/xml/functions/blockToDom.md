# Function: blockToDom()

> **blockToDom**(`block`, `opt_noId`?): `Element` \| `DocumentFragment`

Encode a block subtree as XML.

## Parameters

### block

[`Block`](../../classes/Block.md)

The root block to encode.

### opt_noId?

`boolean`

True if the encoder should skip the block ID.

## Returns

`Element` \| `DocumentFragment`

Tree of XML elements or an empty
document fragment if the block was an insertion marker.

## Alias

Blockly.Xml.blockToDom

## Defined in

node_modules/blockly/blockly.d.ts:17761
