# Class: Theme

Class for a theme.

## Param

Theme name.

## Param

A map
from style names (strings) to objects with style attributes for blocks.

## Param

A
map from style names (strings) to objects with style attributes for
categories.

## Param

A map of Blockly
component names to style value.

## Alias

Blockly.Theme

## Constructors

### new Theme()

> **new Theme**(`name`, `opt_blockStyles`, `opt_categoryStyles`, `opt_componentStyles`): [`Theme`](Theme.md)

#### Parameters

##### name

`any`

##### opt_blockStyles

`any`

##### opt_categoryStyles

`any`

##### opt_componentStyles

`any`

#### Returns

[`Theme`](Theme.md)

#### Defined in

node_modules/blockly/blockly.d.ts:3228

## Properties

### blockStyles

> **blockStyles**: `object`

The block styles map.

#### Index Signature

\[`x`: `string`\]: [`BlockStyle`](../namespaces/Theme/type-aliases/BlockStyle.md)

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:3239

---

### categoryStyles

> **categoryStyles**: `object`

The category styles map.

#### Index Signature

\[`x`: `string`\]: [`CategoryStyle`](../namespaces/Theme/type-aliases/CategoryStyle.md)

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:3247

---

### componentStyles

> **componentStyles**: [`ComponentStyle`](../namespaces/Theme/type-aliases/ComponentStyle.md)

The UI components styles map.

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:3255

---

### fontStyle

> **fontStyle**: [`FontStyle`](../namespaces/Theme/type-aliases/FontStyle.md)

The font style.

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:3261

---

### name

> **name**: `string`

The theme name. This can be used to reference a specific theme in CSS.

#### Defined in

node_modules/blockly/blockly.d.ts:3233

---

### startHats

> **startHats**: `boolean`

Whether or not to add a 'hat' on top of all blocks with no previous or
output connections.

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:3268

## Methods

### getClassName()

> **getClassName**(): `string`

Gets the class name that identifies this theme.

#### Returns

`string`

The CSS class name.

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:3274

---

### getComponentStyle()

> **getComponentStyle**(`componentName`): `string`

Gets the style for a given Blockly UI component. If the style value is a
string, we attempt to find the value of any named references.

#### Parameters

##### componentName

`string`

The name of the component.

#### Returns

`string`

The style value.

#### Defined in

node_modules/blockly/blockly.d.ts:3293

---

### setBlockStyle()

> **setBlockStyle**(`blockStyleName`, `blockStyle`): `void`

Overrides or adds a style to the blockStyles map.

#### Parameters

##### blockStyleName

`string`

The name of the block style.

##### blockStyle

[`BlockStyle`](../namespaces/Theme/type-aliases/BlockStyle.md)

The block style.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:3280

---

### setCategoryStyle()

> **setCategoryStyle**(`categoryStyleName`, `categoryStyle`): `void`

Overrides or adds a style to the categoryStyles map.

#### Parameters

##### categoryStyleName

`string`

The name of the category style.

##### categoryStyle

[`CategoryStyle`](../namespaces/Theme/type-aliases/CategoryStyle.md)

The category style.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:3286

---

### setComponentStyle()

> **setComponentStyle**(`componentName`, `styleValue`): `void`

Configure a specific Blockly UI component with a style value.

#### Parameters

##### componentName

`string`

The name of the component.

##### styleValue

`any`

The style value.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:3299

---

### setFontStyle()

> **setFontStyle**(`fontStyle`): `void`

Configure a theme's font style.

#### Parameters

##### fontStyle

[`FontStyle`](../namespaces/Theme/type-aliases/FontStyle.md)

The font style.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:3304

---

### setStartHats()

> **setStartHats**(`startHats`): `void`

Configure a theme's start hats.

#### Parameters

##### startHats

`boolean`

True if the theme enables start hats, false
otherwise.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:3310

---

### defineTheme()

> `static` **defineTheme**(`name`, `themeObj`): [`Theme`](Theme.md)

Define a new Blockly theme.

#### Parameters

##### name

`string`

The name of the theme.

##### themeObj

`any`

An object containing theme properties.

#### Returns

[`Theme`](Theme.md)

A new Blockly theme.

#### Defined in

node_modules/blockly/blockly.d.ts:3227
