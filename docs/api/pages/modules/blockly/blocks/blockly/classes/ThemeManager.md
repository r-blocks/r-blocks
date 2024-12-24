# Class: ThemeManager

## Constructors

### new ThemeManager()

> **new ThemeManager**(`workspace`, `theme`): [`ThemeManager`](ThemeManager.md)

Class for storing and updating a workspace's theme and UI components.

#### Parameters

##### workspace

[`WorkspaceSvg`](WorkspaceSvg.md)

The main workspace.

##### theme

[`Theme`](Theme.md)

The workspace theme.

#### Returns

[`ThemeManager`](ThemeManager.md)

#### Package

#### Alias

Blockly.ThemeManager

#### Defined in

node_modules/blockly/blockly.d.ts:11602

## Properties

### owner\_

> **owner\_**: `any`

#### Defined in

node_modules/blockly/blockly.d.ts:11674

## Methods

### dispose()

> **dispose**(): `void`

Dispose of this theme manager.

#### Returns

`void`

#### Package

#### Suppress

#### Defined in

node_modules/blockly/blockly.d.ts:11673

---

### getTheme()

> **getTheme**(): [`Theme`](Theme.md)

Get the workspace theme.

#### Returns

[`Theme`](Theme.md)

The workspace theme.

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:11632

---

### setTheme()

> **setTheme**(`theme`): `void`

Set the workspace theme, and refresh the workspace and all components.

#### Parameters

##### theme

[`Theme`](Theme.md)

The workspace theme.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:11638

---

### subscribe()

> **subscribe**(`element`, `componentName`, `propertyName`): `void`

Subscribe an element to changes to the selected theme. If a new theme is
selected, the element's style is refreshed with the new theme's style.

#### Parameters

##### element

`Element`

The element to subscribe.

##### componentName

`string`

The name used to identify the component. This
must be the same name used to configure the style in the Theme object.

##### propertyName

`string`

The inline style property name to update.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:11661

---

### subscribeWorkspace()

> **subscribeWorkspace**(`workspace`): `void`

Subscribe a workspace to changes to the selected theme. If a new theme is
set, the workspace is called to refresh its blocks.

#### Parameters

##### workspace

[`Workspace`](Workspace.md)

The workspace to subscribe.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:11645

---

### unsubscribe()

> **unsubscribe**(`element`): `void`

Unsubscribe an element to changes to the selected theme.

#### Parameters

##### element

`Element`

The element to unsubscribe.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:11667

---

### unsubscribeWorkspace()

> **unsubscribeWorkspace**(`workspace`): `void`

Unsubscribe a workspace to changes to the selected theme.

#### Parameters

##### workspace

[`Workspace`](Workspace.md)

The workspace to unsubscribe.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:11651
