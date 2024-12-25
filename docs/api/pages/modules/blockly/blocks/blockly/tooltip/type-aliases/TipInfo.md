# Type Alias: TipInfo

> **TipInfo**: `string` \| \{ `tooltip`: `any`; \} \| () => `string` \| `Function`

A type which can define a tooltip.
Either a string, an object containing a tooltip property, or a function which
returns either a string, or another arbitrarily nested function which
eventually unwinds to a string.

## Defined in

node_modules/blockly/blockly.d.ts:16884
