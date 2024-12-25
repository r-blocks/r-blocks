# Class: ToolboxCategory

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

## Extends

- [`ToolboxItem`](ToolboxItem.md)

## Extended by

- [`CollapsibleToolboxCategory`](CollapsibleToolboxCategory.md)

## Constructors

### new ToolboxCategory()

> **new ToolboxCategory**(`categoryDef`, `toolbox`, `opt_parent`?): [`ToolboxCategory`](ToolboxCategory.md)

Class for a category in a toolbox.

#### Parameters

##### categoryDef

[`CategoryInfo`](../utils/utils/toolbox/type-aliases/CategoryInfo.md)

The information needed
to create a category in the toolbox.

##### toolbox

[`IToolbox`](IToolbox.md)

The parent toolbox for the category.

##### opt_parent?

[`ICollapsibleToolboxItem`](ICollapsibleToolboxItem.md)

The parent category or null if
the category does not have a parent.

#### Returns

[`ToolboxCategory`](ToolboxCategory.md)

#### Implements

#### Alias

Blockly.ToolboxCategory

#### Overrides

[`ToolboxItem`](ToolboxItem.md).[`constructor`](ToolboxItem.md#constructors)

#### Defined in

node_modules/blockly/blockly.d.ts:1772

## Properties

### colour\_

> `protected` **colour\_**: `string`

The colour of the category.

#### Defined in

node_modules/blockly/blockly.d.ts:1784

---

### cssConfig\_

> `protected` **cssConfig\_**: [`CssConfig`](../namespaces/ToolboxCategory/type-aliases/CssConfig.md)

All the css class names that are used to create a category.

#### Defined in

node_modules/blockly/blockly.d.ts:1820

---

### flyoutItems\_

> `protected` **flyoutItems\_**: `any`

The flyout items for this category.

#### Defined in

node_modules/blockly/blockly.d.ts:1838

---

### htmlDiv\_

> `protected` **htmlDiv\_**: `Element`

The html container for the category.

#### Defined in

node_modules/blockly/blockly.d.ts:1790

---

### iconDom\_

> `protected` **iconDom\_**: `Element`

The html element for the toolbox icon.

#### Defined in

node_modules/blockly/blockly.d.ts:1808

---

### id\_

> `protected` **id\_**: `string`

The id for the category.

#### Inherited from

[`ToolboxItem`](ToolboxItem.md).[`id_`](ToolboxItem.md#id_)

#### Defined in

node_modules/blockly/blockly.d.ts:1671

---

### isDisabled\_

> `protected` **isDisabled\_**: `boolean`

True if this category is disabled, false otherwise.

#### Defined in

node_modules/blockly/blockly.d.ts:1832

---

### isHidden\_

> `protected` **isHidden\_**: `boolean`

True if the category is meant to be hidden, false otherwise.

#### Defined in

node_modules/blockly/blockly.d.ts:1826

---

### labelDom\_

> `protected` **labelDom\_**: `Element`

The html element for the toolbox label.

#### Defined in

node_modules/blockly/blockly.d.ts:1814

---

### level\_

> `protected` **level\_**: `number`

The level that the category is nested at.

#### Inherited from

[`ToolboxItem`](ToolboxItem.md).[`level_`](ToolboxItem.md#level_)

#### Defined in

node_modules/blockly/blockly.d.ts:1683

---

### name\_

> `protected` **name\_**: `string`

The name that will be displayed on the category.

#### Defined in

node_modules/blockly/blockly.d.ts:1778

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

### rowContents\_

> `protected` **rowContents\_**: `Element`

The html element that holds children elements of the category row.

#### Defined in

node_modules/blockly/blockly.d.ts:1802

---

### rowDiv\_

> `protected` **rowDiv\_**: `Element`

The html element for the category row.

#### Defined in

node_modules/blockly/blockly.d.ts:1796

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

### addColourBorder\_()

> `protected` **addColourBorder\_**(`colour`): `void`

Add the strip of colour to the toolbox category.

#### Parameters

##### colour

`string`

The category colour.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:1908

---

### allAncestorsExpanded\_()

> `protected` **allAncestorsExpanded\_**(): `boolean`

Whether all ancestors of a category (parent and parent's parent, etc.) are
expanded.

#### Returns

`boolean`

True only if every ancestor is expanded

#### Defined in

node_modules/blockly/blockly.d.ts:1983

---

### closeIcon\_()

> `protected` **closeIcon\_**(`iconDiv`): `void`

Adds appropriate classes to display a closed icon.

#### Parameters

##### iconDiv

`Element`

The div that holds the icon.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:1952

---

### createContainer\_()

> `protected` **createContainer\_**(): `Element`

Creates the container that holds the row and any subcategories.

#### Returns

`Element`

The div that holds the icon and the label.

#### Defined in

node_modules/blockly/blockly.d.ts:1869

---

### createDom\_()

> `protected` **createDom\_**(): `Element`

Creates the DOM for the category.

#### Returns

`Element`

The parent element for the category.

#### Defined in

node_modules/blockly/blockly.d.ts:1863

---

### createIconDom\_()

> `protected` **createIconDom\_**(): `Element`

Creates the span that holds the category icon.

#### Returns

`Element`

The span that holds the category icon.

#### Defined in

node_modules/blockly/blockly.d.ts:1889

---

### createLabelDom\_()

> `protected` **createLabelDom\_**(`name`): `Element`

Creates the span that holds the category label.
This should have an ID for accessibility purposes.

#### Parameters

##### name

`string`

The name of the category.

#### Returns

`Element`

The span that holds the category label.

#### Defined in

node_modules/blockly/blockly.d.ts:1897

---

### createRowContainer\_()

> `protected` **createRowContainer\_**(): `Element`

Creates the parent of the contents container. All clicks will happen on this
div.

#### Returns

`Element`

The div that holds the contents container.

#### Defined in

node_modules/blockly/blockly.d.ts:1876

---

### createRowContentsContainer\_()

> `protected` **createRowContentsContainer\_**(): `Element`

Creates the container for the label and icon.
This is necessary so we can set all subcategory pointer events to none.

#### Returns

`Element`

The div that holds the icon and the label.

#### Defined in

node_modules/blockly/blockly.d.ts:1883

---

### dispose()

> **dispose**(): `void`

#### Returns

`void`

#### Overrides

[`ToolboxItem`](ToolboxItem.md).[`dispose`](ToolboxItem.md#dispose)

#### Defined in

node_modules/blockly/blockly.d.ts:2041

---

### getClickTarget()

> **getClickTarget**(): `Element`

Gets the HTML element that is clickable.
The parent toolbox element receives clicks. The parent toolbox will add an ID
to this element so it can pass the onClick event to the correct toolboxItem.

#### Returns

`Element`

The HTML element that receives clicks.

#### Defined in

node_modules/blockly/blockly.d.ts:1932

---

### getColour\_()

> `protected` **getColour\_**(`categoryDef`): `string`

Gets either the colour or the style for a category.

#### Parameters

##### categoryDef

[`CategoryInfo`](../utils/utils/toolbox/type-aliases/CategoryInfo.md)

The object holding
information on the category.

#### Returns

`string`

The hex colour for the category.

#### Defined in

node_modules/blockly/blockly.d.ts:1916

---

### getContents()

> **getContents**(): `any`

Gets the contents of the category. These are items that are meant to be
displayed in the flyout.

#### Returns

`any`

The definition
of items to be displayed in the flyout.

#### Defined in

node_modules/blockly/blockly.d.ts:2027

---

### getDiv()

> **getDiv**(): `Element`

#### Returns

`Element`

#### Overrides

[`ToolboxItem`](ToolboxItem.md).[`getDiv`](ToolboxItem.md#getdiv)

#### Defined in

node_modules/blockly/blockly.d.ts:2019

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

### getName()

> **getName**(): `string`

Gets the name of the category. Used for emitting events.

#### Returns

`string`

The name of the toolbox item.

#### Defined in

node_modules/blockly/blockly.d.ts:2011

---

### getParent()

> **getParent**(): `any`

#### Returns

`any`

#### Overrides

[`ToolboxItem`](ToolboxItem.md).[`getParent`](ToolboxItem.md#getparent)

#### Defined in

node_modules/blockly/blockly.d.ts:2015

---

### hide()

> **hide**(): `void`

Hide the category.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:1963

---

### init()

> **init**(): `void`

#### Returns

`void`

#### Overrides

[`ToolboxItem`](ToolboxItem.md).[`init`](ToolboxItem.md#init)

#### Defined in

node_modules/blockly/blockly.d.ts:1857

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

#### Returns

`boolean`

#### Overrides

[`ToolboxItem`](ToolboxItem.md).[`isSelectable`](ToolboxItem.md#isselectable)

#### Defined in

node_modules/blockly/blockly.d.ts:1987

---

### isVisible()

> **isVisible**(): `boolean`

Whether the category is visible.
A category is only visible if all of its ancestors are expanded and isHidden\_
is false.

#### Returns

`boolean`

True if the category is visible, false otherwise.

#### Defined in

node_modules/blockly/blockly.d.ts:1976

---

### makeDefaultCssConfig\_()

> `protected` **makeDefaultCssConfig\_**(): [`CssConfig`](../namespaces/ToolboxCategory/type-aliases/CssConfig.md)

Creates an object holding the default classes for a category.

#### Returns

[`CssConfig`](../namespaces/ToolboxCategory/type-aliases/CssConfig.md)

The configuration object holding
all the CSS classes for a category.

#### Defined in

node_modules/blockly/blockly.d.ts:1845

---

### onClick()

> **onClick**(`_e`): `void`

Handles when the toolbox item is clicked.

#### Parameters

##### \_e

`Event`

Click event to handle.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:1993

---

### openIcon\_()

> `protected` **openIcon\_**(`iconDiv`): `void`

Adds appropriate classes to display an open icon.

#### Parameters

##### iconDiv

`Element`

The div that holds the icon.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:1946

---

### parseContents\_()

> `protected` **parseContents\_**(`categoryDef`): `void`

Parses the contents array depending on if the category is a dynamic category,
or if its contents are meant to be shown in the flyout.

#### Parameters

##### categoryDef

[`CategoryInfo`](../utils/utils/toolbox/type-aliases/CategoryInfo.md)

The information needed
to create a category.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:1853

---

### refreshTheme()

> **refreshTheme**(): `void`

Updates the colour for this category.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:1902

---

### setDisabled()

> **setDisabled**(`isDisabled`): `void`

Sets whether the category is disabled.

#### Parameters

##### isDisabled

`boolean`

True to disable the category, false otherwise.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:2005

---

### setSelected()

> **setSelected**(`isSelected`): `void`

Sets the current category as selected.

#### Parameters

##### isSelected

`boolean`

True if this category is selected, false
otherwise.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:2000

---

### setVisible\_()

> `protected` **setVisible\_**(`isVisible`): `void`

Sets whether the category is visible or not.
For a category to be visible its parent category must also be expanded.

#### Parameters

##### isVisible

`boolean`

True if category should be visible.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:1959

---

### show()

> **show**(): `void`

Show the category. Category will only appear if its parent category is also
expanded.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:1968

---

### updateFlyoutContents()

> **updateFlyoutContents**(`contents`): `void`

Updates the contents to be displayed in the flyout.
If the flyout is open when the contents are updated, refreshSelection on the
toolbox must also be called.

#### Parameters

##### contents

`any`

The contents
to be displayed in the flyout. A string can be supplied to create a
dynamic category.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:2037
