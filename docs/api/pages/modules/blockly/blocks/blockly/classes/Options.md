# Class: Options

## Constructors

### new Options()

> **new Options**(`options`): [`Options`](Options.md)

Parse the user-specified options, using reasonable defaults where behaviour
is unspecified.

#### Parameters

##### options

[`BlocklyOptions`](BlocklyOptions.md)

Dictionary of options.
Specification:
https://developers.google.com/blockly/guides/get-started/web#configuration

#### Returns

[`Options`](Options.md)

#### Alias

Blockly.Options

#### Defined in

node_modules/blockly/blockly.d.ts:3543

## Properties

### collapse

> **collapse**: `boolean`

#### Defined in

node_modules/blockly/blockly.d.ts:3549

---

### comments

> **comments**: `boolean`

#### Defined in

node_modules/blockly/blockly.d.ts:3551

---

### disable

> **disable**: `boolean`

#### Defined in

node_modules/blockly/blockly.d.ts:3553

---

### gridOptions

> **gridOptions**: [`GridOptions`](../namespaces/Options/type-aliases/GridOptions.md)

#### Defined in

node_modules/blockly/blockly.d.ts:3583

---

### gridPattern

> **gridPattern**: `SVGElement`

The SVG element for the grid pattern.
Created during injection.

#### Defined in

node_modules/blockly/blockly.d.ts:3599

---

### hasCategories

> **hasCategories**: `boolean`

#### Defined in

node_modules/blockly/blockly.d.ts:3565

---

### hasCss

> **hasCss**: `boolean`

#### Defined in

node_modules/blockly/blockly.d.ts:3577

---

### ~~hasScrollbars~~

> **hasScrollbars**: `boolean`

#### Deprecated

January 2019

#### Defined in

node_modules/blockly/blockly.d.ts:3569

---

### hasSounds

> **hasSounds**: `boolean`

#### Defined in

node_modules/blockly/blockly.d.ts:3575

---

### hasTrashcan

> **hasTrashcan**: `boolean`

#### Defined in

node_modules/blockly/blockly.d.ts:3571

---

### horizontalLayout

> **horizontalLayout**: `boolean`

#### Defined in

node_modules/blockly/blockly.d.ts:3579

---

### languageTree

> **languageTree**: [`ToolboxInfo`](../utils/utils/toolbox/type-aliases/ToolboxInfo.md)

#### Defined in

node_modules/blockly/blockly.d.ts:3581

---

### maxBlocks

> **maxBlocks**: `number`

#### Defined in

node_modules/blockly/blockly.d.ts:3557

---

### maxInstances

> **maxInstances**: `object`

#### Index Signature

\[`x`: `string`\]: `number`

#### Defined in

node_modules/blockly/blockly.d.ts:3559

---

### maxTrashcanContents

> **maxTrashcanContents**: `number`

#### Defined in

node_modules/blockly/blockly.d.ts:3573

---

### moveOptions

> **moveOptions**: [`MoveOptions`](../namespaces/Options/type-aliases/MoveOptions.md)

#### Defined in

node_modules/blockly/blockly.d.ts:3567

---

### oneBasedIndex

> **oneBasedIndex**: `boolean`

#### Defined in

node_modules/blockly/blockly.d.ts:3547

---

### parentWorkspace

> **parentWorkspace**: [`WorkspaceSvg`](WorkspaceSvg.md)

The parent of the current workspace, or null if there is no parent
workspace. We can assert that this is of type WorkspaceSvg as opposed to
Workspace as this is only used in a rendered workspace.

#### Defined in

node_modules/blockly/blockly.d.ts:3606

---

### pathToMedia

> **pathToMedia**: `string`

#### Defined in

node_modules/blockly/blockly.d.ts:3563

---

### plugins

> **plugins**: `object`

Map of plugin type to name of registered plugin or plugin class.

#### Index Signature

\[`x`: `string`\]: `string` \| (...`args`) => `unknown`

#### Defined in

node_modules/blockly/blockly.d.ts:3611

---

### readOnly

> **readOnly**: `boolean`

#### Defined in

node_modules/blockly/blockly.d.ts:3555

---

### renderer

> **renderer**: `string`

#### Defined in

node_modules/blockly/blockly.d.ts:3591

---

### rendererOverrides

> **rendererOverrides**: `any`

#### Defined in

node_modules/blockly/blockly.d.ts:3593

---

### RTL

> **RTL**: `boolean`

#### Defined in

node_modules/blockly/blockly.d.ts:3545

---

### theme

> **theme**: [`Theme`](Theme.md)

#### Defined in

node_modules/blockly/blockly.d.ts:3589

---

### toolboxPosition

> **toolboxPosition**: `number`

#### Defined in

node_modules/blockly/blockly.d.ts:3587

---

### zoomOptions

> **zoomOptions**: [`ZoomOptions`](../namespaces/Options/type-aliases/ZoomOptions.md)

#### Defined in

node_modules/blockly/blockly.d.ts:3585
