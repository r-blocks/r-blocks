# Class: CollapsibleToolboxCategory

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

- [`ToolboxCategory`](ToolboxCategory.md)

## Constructors

### new CollapsibleToolboxCategory()

> **new CollapsibleToolboxCategory**(`categoryDef`, `toolbox`, `opt_parent`?): [`CollapsibleToolboxCategory`](CollapsibleToolboxCategory.md)

Class for a category in a toolbox that can be collapsed.

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

[`CollapsibleToolboxCategory`](CollapsibleToolboxCategory.md)

#### Implements

#### Alias

Blockly.CollapsibleToolboxCategory

#### Overrides

[`ToolboxCategory`](ToolboxCategory.md).[`constructor`](ToolboxCategory.md#constructors)

#### Defined in

node_modules/blockly/blockly.d.ts:22260

## Properties

### colour\_

> `protected` **colour\_**: `string`

The colour of the category.

#### Inherited from

[`ToolboxCategory`](ToolboxCategory.md).[`colour_`](ToolboxCategory.md#colour_)

#### Defined in

node_modules/blockly/blockly.d.ts:1784

---

### cssConfig\_

> `protected` **cssConfig\_**: [`CssConfig`](../namespaces/ToolboxCategory/type-aliases/CssConfig.md)

All the css class names that are used to create a category.

#### Inherited from

[`ToolboxCategory`](ToolboxCategory.md).[`cssConfig_`](ToolboxCategory.md#cssconfig_)

#### Defined in

node_modules/blockly/blockly.d.ts:1820

---

### expanded\_

> `protected` **expanded\_**: `boolean`

Whether or not the category should display its subcategories.

#### Defined in

node_modules/blockly/blockly.d.ts:22272

---

### flyoutItems\_

> `protected` **flyoutItems\_**: `any`

The flyout items for this category.

#### Overrides

[`ToolboxCategory`](ToolboxCategory.md).[`flyoutItems_`](ToolboxCategory.md#flyoutitems_)

#### Defined in

node_modules/blockly/blockly.d.ts:22287

---

### htmlDiv\_

> `protected` **htmlDiv\_**: `Element`

The html container for the category.

#### Inherited from

[`ToolboxCategory`](ToolboxCategory.md).[`htmlDiv_`](ToolboxCategory.md#htmldiv_)

#### Defined in

node_modules/blockly/blockly.d.ts:1790

---

### iconDom\_

> `protected` **iconDom\_**: `Element`

The html element for the toolbox icon.

#### Inherited from

[`ToolboxCategory`](ToolboxCategory.md).[`iconDom_`](ToolboxCategory.md#icondom_)

#### Defined in

node_modules/blockly/blockly.d.ts:1808

---

### id\_

> `protected` **id\_**: `string`

The id for the category.

#### Inherited from

[`ToolboxCategory`](ToolboxCategory.md).[`id_`](ToolboxCategory.md#id_)

#### Defined in

node_modules/blockly/blockly.d.ts:1671

---

### isDisabled\_

> `protected` **isDisabled\_**: `boolean`

True if this category is disabled, false otherwise.

#### Inherited from

[`ToolboxCategory`](ToolboxCategory.md).[`isDisabled_`](ToolboxCategory.md#isdisabled_)

#### Defined in

node_modules/blockly/blockly.d.ts:1832

---

### isHidden\_

> `protected` **isHidden\_**: `boolean`

True if the category is meant to be hidden, false otherwise.

#### Overrides

[`ToolboxCategory`](ToolboxCategory.md).[`isHidden_`](ToolboxCategory.md#ishidden_)

#### Defined in

node_modules/blockly/blockly.d.ts:22324

---

### labelDom\_

> `protected` **labelDom\_**: `Element`

The html element for the toolbox label.

#### Inherited from

[`ToolboxCategory`](ToolboxCategory.md).[`labelDom_`](ToolboxCategory.md#labeldom_)

#### Defined in

node_modules/blockly/blockly.d.ts:1814

---

### level\_

> `protected` **level\_**: `number`

The level that the category is nested at.

#### Inherited from

[`ToolboxCategory`](ToolboxCategory.md).[`level_`](ToolboxCategory.md#level_)

#### Defined in

node_modules/blockly/blockly.d.ts:1683

---

### name\_

> `protected` **name\_**: `string`

The name that will be displayed on the category.

#### Inherited from

[`ToolboxCategory`](ToolboxCategory.md).[`name_`](ToolboxCategory.md#name_)

#### Defined in

node_modules/blockly/blockly.d.ts:1778

---

### parent\_

> `protected` **parent\_**: [`ICollapsibleToolboxItem`](ICollapsibleToolboxItem.md)

The parent of the category.

#### Inherited from

[`ToolboxCategory`](ToolboxCategory.md).[`parent_`](ToolboxCategory.md#parent_)

#### Defined in

node_modules/blockly/blockly.d.ts:1677

---

### parentToolbox\_

> `protected` **parentToolbox\_**: [`IToolbox`](IToolbox.md)

The toolbox this category belongs to.

#### Inherited from

[`ToolboxCategory`](ToolboxCategory.md).[`parentToolbox_`](ToolboxCategory.md#parenttoolbox_)

#### Defined in

node_modules/blockly/blockly.d.ts:1695

---

### rowContents\_

> `protected` **rowContents\_**: `Element`

The html element that holds children elements of the category row.

#### Inherited from

[`ToolboxCategory`](ToolboxCategory.md).[`rowContents_`](ToolboxCategory.md#rowcontents_)

#### Defined in

node_modules/blockly/blockly.d.ts:1802

---

### rowDiv\_

> `protected` **rowDiv\_**: `Element`

The html element for the category row.

#### Inherited from

[`ToolboxCategory`](ToolboxCategory.md).[`rowDiv_`](ToolboxCategory.md#rowdiv_)

#### Defined in

node_modules/blockly/blockly.d.ts:1796

---

### subcategoriesDiv\_

> `protected` **subcategoriesDiv\_**: `Element`

Container for any child categories.

#### Defined in

node_modules/blockly/blockly.d.ts:22266

---

### toolboxItemDef\_

> `protected` **toolboxItemDef\_**: `any`

The JSON definition of the toolbox item.

#### Inherited from

[`ToolboxCategory`](ToolboxCategory.md).[`toolboxItemDef_`](ToolboxCategory.md#toolboxitemdef_)

#### Defined in

node_modules/blockly/blockly.d.ts:1689

---

### toolboxItems\_

> `protected` **toolboxItems\_**: [`IToolboxItem`](IToolboxItem.md)[]

The child toolbox items for this category.

#### Defined in

node_modules/blockly/blockly.d.ts:22278

---

### workspace\_

> `protected` **workspace\_**: [`WorkspaceSvg`](WorkspaceSvg.md)

The workspace of the parent toolbox.

#### Inherited from

[`ToolboxCategory`](ToolboxCategory.md).[`workspace_`](ToolboxCategory.md#workspace_)

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

#### Inherited from

[`ToolboxCategory`](ToolboxCategory.md).[`addColourBorder_`](ToolboxCategory.md#addcolourborder_)

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

#### Inherited from

[`ToolboxCategory`](ToolboxCategory.md).[`allAncestorsExpanded_`](ToolboxCategory.md#allancestorsexpanded_)

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

#### Inherited from

[`ToolboxCategory`](ToolboxCategory.md).[`closeIcon_`](ToolboxCategory.md#closeicon_)

#### Defined in

node_modules/blockly/blockly.d.ts:1952

---

### createContainer\_()

> `protected` **createContainer\_**(): `Element`

Creates the container that holds the row and any subcategories.

#### Returns

`Element`

The div that holds the icon and the label.

#### Inherited from

[`ToolboxCategory`](ToolboxCategory.md).[`createContainer_`](ToolboxCategory.md#createcontainer_)

#### Defined in

node_modules/blockly/blockly.d.ts:1869

---

### createDom\_()

> **createDom\_**(): `any`

#### Returns

`any`

#### Overrides

[`ToolboxCategory`](ToolboxCategory.md).[`createDom_`](ToolboxCategory.md#createdom_)

#### Defined in

node_modules/blockly/blockly.d.ts:22302

---

### createIconDom\_()

> **createIconDom\_**(): `HTMLSpanElement`

#### Returns

`HTMLSpanElement`

#### Overrides

[`ToolboxCategory`](ToolboxCategory.md).[`createIconDom_`](ToolboxCategory.md#createicondom_)

#### Defined in

node_modules/blockly/blockly.d.ts:22306

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

#### Inherited from

[`ToolboxCategory`](ToolboxCategory.md).[`createLabelDom_`](ToolboxCategory.md#createlabeldom_)

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

#### Inherited from

[`ToolboxCategory`](ToolboxCategory.md).[`createRowContainer_`](ToolboxCategory.md#createrowcontainer_)

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

#### Inherited from

[`ToolboxCategory`](ToolboxCategory.md).[`createRowContentsContainer_`](ToolboxCategory.md#createrowcontentscontainer_)

#### Defined in

node_modules/blockly/blockly.d.ts:1883

---

### createSubCategoriesDom\_()

> `protected` **createSubCategoriesDom\_**(`subcategories`): `Element`

Create the DOM for all subcategories.

#### Parameters

##### subcategories

[`IToolboxItem`](IToolboxItem.md)[]

The subcategories.

#### Returns

`Element`

The div holding all the subcategories.

#### Defined in

node_modules/blockly/blockly.d.ts:22313

---

### dispose()

> **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[`ToolboxCategory`](ToolboxCategory.md).[`dispose`](ToolboxCategory.md#dispose)

#### Defined in

node_modules/blockly/blockly.d.ts:2041

---

### getChildToolboxItems()

> **getChildToolboxItems**(): [`IToolboxItem`](IToolboxItem.md)[]

Gets any children toolbox items. (ex. Gets the subcategories)

#### Returns

[`IToolboxItem`](IToolboxItem.md)[]

The child toolbox items.

#### Defined in

node_modules/blockly/blockly.d.ts:22353

---

### getClickTarget()

> **getClickTarget**(): `Element`

Gets the HTML element that is clickable.
The parent toolbox element receives clicks. The parent toolbox will add an ID
to this element so it can pass the onClick event to the correct toolboxItem.

#### Returns

`Element`

The HTML element that receives clicks.

#### Inherited from

[`ToolboxCategory`](ToolboxCategory.md).[`getClickTarget`](ToolboxCategory.md#getclicktarget)

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

#### Inherited from

[`ToolboxCategory`](ToolboxCategory.md).[`getColour_`](ToolboxCategory.md#getcolour_)

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

#### Inherited from

[`ToolboxCategory`](ToolboxCategory.md).[`getContents`](ToolboxCategory.md#getcontents)

#### Defined in

node_modules/blockly/blockly.d.ts:2027

---

### getDiv()

> **getDiv**(): `any`

#### Returns

`any`

#### Overrides

[`ToolboxCategory`](ToolboxCategory.md).[`getDiv`](ToolboxCategory.md#getdiv)

#### Defined in

node_modules/blockly/blockly.d.ts:22348

---

### getId()

> **getId**(): `string`

Gets a unique identifier for this toolbox item.

#### Returns

`string`

The ID for the toolbox item.

#### Inherited from

[`ToolboxCategory`](ToolboxCategory.md).[`getId`](ToolboxCategory.md#getid)

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

[`ToolboxCategory`](ToolboxCategory.md).[`getLevel`](ToolboxCategory.md#getlevel)

#### Defined in

node_modules/blockly/blockly.d.ts:1733

---

### getName()

> **getName**(): `string`

Gets the name of the category. Used for emitting events.

#### Returns

`string`

The name of the toolbox item.

#### Inherited from

[`ToolboxCategory`](ToolboxCategory.md).[`getName`](ToolboxCategory.md#getname)

#### Defined in

node_modules/blockly/blockly.d.ts:2011

---

### getParent()

> **getParent**(): `any`

#### Returns

`any`

#### Inherited from

[`ToolboxCategory`](ToolboxCategory.md).[`getParent`](ToolboxCategory.md#getparent)

#### Defined in

node_modules/blockly/blockly.d.ts:2015

---

### hide()

> **hide**(): `void`

Hide the category.

#### Returns

`void`

#### Inherited from

[`ToolboxCategory`](ToolboxCategory.md).[`hide`](ToolboxCategory.md#hide)

#### Defined in

node_modules/blockly/blockly.d.ts:1963

---

### init()

> **init**(): `void`

#### Returns

`void`

#### Overrides

[`ToolboxCategory`](ToolboxCategory.md).[`init`](ToolboxCategory.md#init)

#### Defined in

node_modules/blockly/blockly.d.ts:22298

---

### isCollapsible()

> **isCollapsible**(): `boolean`

#### Returns

`boolean`

#### Overrides

[`ToolboxCategory`](ToolboxCategory.md).[`isCollapsible`](ToolboxCategory.md#iscollapsible)

#### Defined in

node_modules/blockly/blockly.d.ts:22335

---

### isExpanded()

> **isExpanded**(): `boolean`

Whether the category is expanded to show its child subcategories.

#### Returns

`boolean`

True if the toolbox item shows its children, false if it
is collapsed.

#### Defined in

node_modules/blockly/blockly.d.ts:22331

---

### isSelectable()

> **isSelectable**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[`ToolboxCategory`](ToolboxCategory.md).[`isSelectable`](ToolboxCategory.md#isselectable)

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

#### Inherited from

[`ToolboxCategory`](ToolboxCategory.md).[`isVisible`](ToolboxCategory.md#isvisible)

#### Defined in

node_modules/blockly/blockly.d.ts:1976

---

### makeDefaultCssConfig\_()

> **makeDefaultCssConfig\_**(): `any`

#### Returns

`any`

#### Overrides

[`ToolboxCategory`](ToolboxCategory.md).[`makeDefaultCssConfig_`](ToolboxCategory.md#makedefaultcssconfig_)

#### Defined in

node_modules/blockly/blockly.d.ts:22282

---

### onClick()

> **onClick**(`_e`): `void`

#### Parameters

##### \_e

`any`

#### Returns

`void`

#### Overrides

[`ToolboxCategory`](ToolboxCategory.md).[`onClick`](ToolboxCategory.md#onclick)

#### Defined in

node_modules/blockly/blockly.d.ts:22339

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

#### Inherited from

[`ToolboxCategory`](ToolboxCategory.md).[`openIcon_`](ToolboxCategory.md#openicon_)

#### Defined in

node_modules/blockly/blockly.d.ts:1946

---

### parseContents\_()

> **parseContents\_**(`categoryDef`): `void`

#### Parameters

##### categoryDef

`any`

#### Returns

`void`

#### Overrides

[`ToolboxCategory`](ToolboxCategory.md).[`parseContents_`](ToolboxCategory.md#parsecontents_)

#### Defined in

node_modules/blockly/blockly.d.ts:22286

---

### refreshTheme()

> **refreshTheme**(): `void`

Updates the colour for this category.

#### Returns

`void`

#### Inherited from

[`ToolboxCategory`](ToolboxCategory.md).[`refreshTheme`](ToolboxCategory.md#refreshtheme)

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

#### Inherited from

[`ToolboxCategory`](ToolboxCategory.md).[`setDisabled`](ToolboxCategory.md#setdisabled)

#### Defined in

node_modules/blockly/blockly.d.ts:2005

---

### setExpanded()

> **setExpanded**(`isExpanded`): `void`

Opens or closes the current category.

#### Parameters

##### isExpanded

`boolean`

True to expand the category, false to close.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:22319

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

#### Inherited from

[`ToolboxCategory`](ToolboxCategory.md).[`setSelected`](ToolboxCategory.md#setselected)

#### Defined in

node_modules/blockly/blockly.d.ts:2000

---

### setVisible\_()

> **setVisible\_**(`isVisible`): `void`

#### Parameters

##### isVisible

`any`

#### Returns

`void`

#### Overrides

[`ToolboxCategory`](ToolboxCategory.md).[`setVisible_`](ToolboxCategory.md#setvisible_)

#### Defined in

node_modules/blockly/blockly.d.ts:22323

---

### show()

> **show**(): `void`

Show the category. Category will only appear if its parent category is also
expanded.

#### Returns

`void`

#### Inherited from

[`ToolboxCategory`](ToolboxCategory.md).[`show`](ToolboxCategory.md#show)

#### Defined in

node_modules/blockly/blockly.d.ts:1968

---

### toggleExpanded()

> **toggleExpanded**(): `void`

Toggles whether or not the category is expanded.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:22344

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

#### Inherited from

[`ToolboxCategory`](ToolboxCategory.md).[`updateFlyoutContents`](ToolboxCategory.md#updateflyoutcontents)

#### Defined in

node_modules/blockly/blockly.d.ts:2037
