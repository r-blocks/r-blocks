# Class: ToolboxItem

Class for an item in the toolbox.

## Param

The JSON defining the
toolbox item.

## Param

The toolbox that holds the toolbox item.

## Param

The parent toolbox item
or null if the category does not have a parent.

## Implements

## Alias

Blockly.ToolboxItem

## Extended by

- [`ToolboxCategory`](ToolboxCategory.md)
- [`ToolboxSeparator`](ToolboxSeparator.md)

## Implements

- [`IToolboxItem`](IToolboxItem.md)

## Constructors

### new ToolboxItem()

> **new ToolboxItem**(`toolboxItemDef`, `toolbox`, `opt_parent`): [`ToolboxItem`](ToolboxItem.md)

#### Parameters

##### toolboxItemDef

`any`

##### toolbox

`any`

##### opt_parent

`any`

#### Returns

[`ToolboxItem`](ToolboxItem.md)

#### Defined in

node_modules/blockly/blockly.d.ts:1665

## Properties

### id\_

> `protected` **id\_**: `string`

The id for the category.

#### Defined in

node_modules/blockly/blockly.d.ts:1671

---

### level\_

> `protected` **level\_**: `number`

The level that the category is nested at.

#### Defined in

node_modules/blockly/blockly.d.ts:1683

---

### parent\_

> `protected` **parent\_**: [`ICollapsibleToolboxItem`](ICollapsibleToolboxItem.md)

The parent of the category.

#### Defined in

node_modules/blockly/blockly.d.ts:1677

---

### parentToolbox\_

> `protected` **parentToolbox\_**: [`IToolbox`](IToolbox.md)

The toolbox this category belongs to.

#### Defined in

node_modules/blockly/blockly.d.ts:1695

---

### toolboxItemDef\_

> `protected` **toolboxItemDef\_**: `any`

The JSON definition of the toolbox item.

#### Defined in

node_modules/blockly/blockly.d.ts:1689

---

### workspace\_

> `protected` **workspace\_**: [`WorkspaceSvg`](WorkspaceSvg.md)

The workspace of the parent toolbox.

#### Defined in

node_modules/blockly/blockly.d.ts:1701

## Methods

### dispose()

> **dispose**(): `void`

Dispose of this toolbox item. No-op by default.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:1750

---

### getDiv()

> **getDiv**(): `Element`

Gets the div for the toolbox item.

#### Returns

`Element`

The div for the toolbox item.

#### Defined in

node_modules/blockly/blockly.d.ts:1714

---

### getId()

> **getId**(): `string`

Gets a unique identifier for this toolbox item.

#### Returns

`string`

The ID for the toolbox item.

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

#### Defined in

node_modules/blockly/blockly.d.ts:1727

---

### init()

> **init**(): `void`

Initializes the toolbox item.
This includes creating the DOM and updating the state of any items based
on the info object.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:1708

---

### isCollapsible()

> **isCollapsible**(): `boolean`

Whether the toolbox item is collapsible.

#### Returns

`boolean`

True if the toolbox item is collapsible.

#### Defined in

node_modules/blockly/blockly.d.ts:1745

---

### isSelectable()

> **isSelectable**(): `boolean`

Whether the toolbox item is selectable.

#### Returns

`boolean`

True if the toolbox item can be selected.

#### Defined in

node_modules/blockly/blockly.d.ts:1739
