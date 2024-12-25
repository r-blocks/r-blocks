# Function: inject()

> **inject**(`hasCss`, `pathToMedia`): `void`

Inject the CSS into the DOM. This is preferable over using a regular CSS
file since:
a) It loads synchronously and doesn't force a redraw later.
b) It speeds up loading by not blocking on a separate HTTP transfer.
c) The CSS content may be made dynamic depending on init options.

## Parameters

### hasCss

`boolean`

If false, don't inject CSS
(providing CSS becomes the document's responsibility).

### pathToMedia

`string`

Path from page to the Blockly media directory.

## Returns

`void`

## Alias

Blockly.Css.inject

## Defined in

node_modules/blockly/blockly.d.ts:1252
