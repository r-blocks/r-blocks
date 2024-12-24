# Function: svgResize()

> **svgResize**(`workspace`): `void`

Size the SVG image to completely fill its container. Call this when the view
actually changes sizes (e.g. on a window resize/device orientation change).
See Blockly.resizeSvgContents to resize the workspace when the contents
change (e.g. when a block is added or removed).
Record the height/width of the SVG image.

## Parameters

### workspace

[`WorkspaceSvg`](../../classes/WorkspaceSvg.md)

Any workspace in the SVG.

## Returns

`void`

## Alias

Blockly.common.svgResize

## Defined in

node_modules/blockly/blockly.d.ts:14181
