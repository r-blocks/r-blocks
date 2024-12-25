# Class: ToolboxSeparator

Class for a toolbox separator. This is the thin visual line that appears on
the toolbox. This item is not interactable.

## Param

The information
needed to create a separator.

## Param

The parent toolbox for the separator.

## Alias

Blockly.ToolboxSeparator

## Extends

- [`ToolboxItem`](ToolboxItem.md)

## Constructors

### new ToolboxSeparator()

> **new ToolboxSeparator**(`separatorDef`, `toolbox`): [`ToolboxSeparator`](ToolboxSeparator.md)

#### Parameters

##### separatorDef

`any`

##### toolbox

`any`

#### Returns

[`ToolboxSeparator`](ToolboxSeparator.md)

#### Overrides

[`ToolboxItem`](ToolboxItem.md).[`constructor`](ToolboxItem.md#constructors)

#### Defined in

node_modules/blockly/blockly.d.ts:2079

## Properties

### cssConfig\_

> `protected` **cssConfig\_**: [`CssConfig`](../namespaces/ToolboxSeparator/type-aliases/CssConfig.md)

All the CSS class names that are used to create a separator.

#### Defined in

node_modules/blockly/blockly.d.ts:2085

---

### htmlDiv\_

> **htmlDiv\_**: `HTMLDivElement`

#### Defined in

node_modules/blockly/blockly.d.ts:2096

---

### id\_

> `protected` **id\_**: `string`

The id for the category.

#### Inherited from

[`ToolboxItem`](ToolboxItem.md).[`id_`](ToolboxItem.md#id_)

#### Defined in

node_modules/blockly/blockly.d.ts:1671

---

### level\_

> `protected` **level\_**: `number`

The level that the category is nested at.

#### Inherited from

[`ToolboxItem`](ToolboxItem.md).[`level_`](ToolboxItem.md#level_)

#### Defined in

node_modules/blockly/blockly.d.ts:1683

---

### parent\_

> `protected` **parent\_**: [`ICollapsibleToolboxItem`](ICollapsibleToolboxItem.md)

The parent of the category.

#### Inherited from

[`ToolboxItem`](ToolboxItem.md).[`parent_`](ToolboxItem.md#parent_)

#### Defined in

node_modules/blockly/blockly.d.ts:1677

---

### parentToolbox\_

> `protected` **parentToolbox\_**: [`IToolbox`](IToolbox.md)

The toolbox this category belongs to.

#### Inherited from

[`ToolboxItem`](ToolboxItem.md).[`parentToolbox_`](ToolboxItem.md#parenttoolbox_)

#### Defined in

node_modules/blockly/blockly.d.ts:1695

---

### toolboxItemDef\_

> `protected` **toolboxItemDef\_**: `any`

The JSON definition of the toolbox item.

#### Inherited from

[`ToolboxItem`](ToolboxItem.md).[`toolboxItemDef_`](ToolboxItem.md#toolboxitemdef_)

#### Defined in

node_modules/blockly/blockly.d.ts:1689

---

### workspace\_

> `protected` **workspace\_**: [`WorkspaceSvg`](WorkspaceSvg.md)

The workspace of the parent toolbox.

#### Inherited from

[`ToolboxItem`](ToolboxItem.md).[`workspace_`](ToolboxItem.md#workspace_)

#### Defined in

node_modules/blockly/blockly.d.ts:1701

## Methods

### createDom\_()

> `protected` **createDom\_**(): `Element`

Creates the DOM for a separator.

#### Returns

`Element`

The parent element for the separator.

#### Defined in

node_modules/blockly/blockly.d.ts:2095

---

### dispose()

> **dispose**(): `void`

#### Returns

`void`

#### Overrides

[`ToolboxItem`](ToolboxItem.md).[`dispose`](ToolboxItem.md#dispose)

#### Defined in

node_modules/blockly/blockly.d.ts:2104

---

### getDiv()

> **getDiv**(): `HTMLDivElement`

#### Returns

`HTMLDivElement`

#### Overrides

[`ToolboxItem`](ToolboxItem.md).[`getDiv`](ToolboxItem.md#getdiv)

#### Defined in

node_modules/blockly/blockly.d.ts:2100

---

### getId()

> **getId**(): `string`

Gets a unique identifier for this toolbox item.

#### Returns

`string`

The ID for the toolbox item.

#### Inherited from

[`ToolboxItem`](ToolboxItem.md).[`getId`](ToolboxItem.md#getid)

#### Defined in

node_modules/blockly/blockly.d.ts:1720

---

### getLevel()

> **getLevel**(): `number`

Gets the nested level of the category.

#### Returns

`number`

The nested level of the category.

#### Package

#### Inherited from

[`ToolboxItem`](ToolboxItem.md).[`getLevel`](ToolboxItem.md#getlevel)

#### Defined in

node_modules/blockly/blockly.d.ts:1733

---

### getParent()

> **getParent**(): [`IToolboxItem`](IToolboxItem.md)

Gets the parent if the toolbox item is nested.

#### Returns

[`IToolboxItem`](IToolboxItem.md)

The parent toolbox item, or null if
this toolbox item is not nested.

#### Inherited from

[`ToolboxItem`](ToolboxItem.md).[`getParent`](ToolboxItem.md#getparent)

#### Defined in

node_modules/blockly/blockly.d.ts:1727

---

### init()

> **init**(): `void`

#### Returns

`void`

#### Overrides

[`ToolboxItem`](ToolboxItem.md).[`init`](ToolboxItem.md#init)

#### Defined in

node_modules/blockly/blockly.d.ts:2089

---

### isCollapsible()

> **isCollapsible**(): `boolean`

Whether the toolbox item is collapsible.

#### Returns

`boolean`

True if the toolbox item is collapsible.

#### Inherited from

[`ToolboxItem`](ToolboxItem.md).[`isCollapsible`](ToolboxItem.md#iscollapsible)

#### Defined in

node_modules/blockly/blockly.d.ts:1745

---

### isSelectable()

> **isSelectable**(): `boolean`

Whether the toolbox item is selectable.

#### Returns

`boolean`

True if the toolbox item can be selected.

#### Inherited from

[`ToolboxItem`](ToolboxItem.md).[`isSelectable`](ToolboxItem.md#isselectable)

#### Defined in

node_modules/blockly/blockly.d.ts:1739
