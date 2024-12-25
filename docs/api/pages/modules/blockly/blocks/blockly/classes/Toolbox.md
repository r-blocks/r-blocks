# Class: Toolbox

Abstract class for a component that can delete a block or bubble that is
dropped on top of it.

## Implements

## Alias

Blockly.DeleteArea

## Extends

- [`DeleteArea`](DeleteArea.md)

## Constructors

### new Toolbox()

> **new Toolbox**(`workspace`): [`Toolbox`](Toolbox.md)

Class for a Toolbox.
Creates the toolbox's DOM.

#### Parameters

##### workspace

[`WorkspaceSvg`](WorkspaceSvg.md)

The workspace in which to create new
blocks.

#### Returns

[`Toolbox`](Toolbox.md)

#### Implements

#### Implements

#### Implements

#### Implements

#### Alias

Blockly.Toolbox

#### Overrides

[`DeleteArea`](DeleteArea.md).[`constructor`](DeleteArea.md#constructors)

#### Defined in

node_modules/blockly/blockly.d.ts:24617

## Properties

### boundEvents\_

> `protected` **boundEvents\_**: `any`[][][]

Array holding info needed to unbind event handlers.
Used for disposing.
Ex: [[node, name, func], [node, name, func]].

#### Defined in

node_modules/blockly/blockly.d.ts:24720

---

### contentMap\_

> `protected` **contentMap\_**: `object`

A map from toolbox item IDs to toolbox items.

#### Index Signature

\[`x`: `string`\]: [`IToolboxItem`](IToolboxItem.md)

#### Defined in

node_modules/blockly/blockly.d.ts:24693

---

### contents\_

> `protected` **contents\_**: [`IToolboxItem`](IToolboxItem.md)[]

The list of items in the toolbox.

#### Defined in

node_modules/blockly/blockly.d.ts:24664

---

### contentsDiv\_

> `protected` **contentsDiv\_**: `Element`

The html container for the contents of a toolbox.

#### Defined in

node_modules/blockly/blockly.d.ts:24652

---

### height\_

> `protected` **height\_**: `number`

The height of the toolbox.

#### Defined in

node_modules/blockly/blockly.d.ts:24676

---

### HtmlDiv

> **HtmlDiv**: `Element`

The html container for the toolbox.

#### Defined in

node_modules/blockly/blockly.d.ts:24646

---

### id

> **id**: `string`

The unique id for this component that is used to register with the
ComponentManager.

#### Defined in

node_modules/blockly/blockly.d.ts:24629

---

### isVisible\_

> `protected` **isVisible\_**: `boolean`

Whether the Toolbox is visible.

#### Defined in

node_modules/blockly/blockly.d.ts:24658

---

### previouslySelectedItem\_

> `protected` **previouslySelectedItem\_**: [`ISelectableToolboxItem`](ISelectableToolboxItem.md)

The previously selected item.

#### Defined in

node_modules/blockly/blockly.d.ts:24712

---

### RTL

> **RTL**: `boolean`

Is RTL vs LTR.

#### Defined in

node_modules/blockly/blockly.d.ts:24681

---

### selectedItem\_

> `protected` **selectedItem\_**: [`ISelectableToolboxItem`](ISelectableToolboxItem.md)

The currently selected item.

#### Defined in

node_modules/blockly/blockly.d.ts:24706

---

### toolboxDef\_

> `protected` **toolboxDef\_**: [`ToolboxInfo`](../utils/utils/toolbox/type-aliases/ToolboxInfo.md)

The JSON describing the contents of this toolbox.

#### Defined in

node_modules/blockly/blockly.d.ts:24635

---

### toolboxPosition

> **toolboxPosition**: `number`

Position of the toolbox and flyout relative to the workspace.

#### Defined in

node_modules/blockly/blockly.d.ts:24700

---

### width\_

> `protected` **width\_**: `number`

The width of the toolbox.

#### Defined in

node_modules/blockly/blockly.d.ts:24670

---

### workspace\_

> `protected` **workspace\_**: [`WorkspaceSvg`](WorkspaceSvg.md)

The workspace this toolbox is on.

#### Defined in

node_modules/blockly/blockly.d.ts:24623

---

### wouldDelete\_

> `protected` **wouldDelete\_**: `any`

Whether the last block or bubble dragged over this delete area would be
deleted if dropped on this component.
This property is not updated after the block or bubble is deleted.

#### Overrides

[`DeleteArea`](DeleteArea.md).[`wouldDelete_`](DeleteArea.md#woulddelete_)

#### Defined in

node_modules/blockly/blockly.d.ts:24878

## Methods

### addStyle()

> **addStyle**(`style`): `void`

Adds a style on the toolbox. Usually used to change the cursor.

#### Parameters

##### style

`string`

The name of the class to add.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:24821

---

### addToolboxItem\_()

> `protected` **addToolboxItem\_**(`toolboxItem`): `void`

Adds an item to the toolbox.

#### Parameters

##### toolboxItem

[`IToolboxItem`](IToolboxItem.md)

The item in the toolbox.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:24809

---

### attachEvents\_()

> `protected` **attachEvents\_**(`container`, `contentsContainer`): `void`

Adds event listeners to the toolbox container div.

#### Parameters

##### container

`Element`

The HTML container for the toolbox.

##### contentsContainer

`Element`

The HTML container for the contents
of the toolbox.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:24760

---

### autoHide()

> **autoHide**(`onlyClosePopups`): `void`

Hides the component. Called in WorkspaceSvg.hideChaff.

#### Parameters

##### onlyClosePopups

`boolean`

Whether only popups should be closed.
Flyouts should not be closed if this is true.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:24979

---

### clearSelection()

> **clearSelection**(): `void`

Unhighlights any previously selected item.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:24955

---

### createContainer\_()

> `protected` **createContainer\_**(): `Element`

Creates the container div for the toolbox.

#### Returns

`Element`

The HTML container for the toolbox.

#### Defined in

node_modules/blockly/blockly.d.ts:24746

---

### createContentsContainer\_()

> `protected` **createContentsContainer\_**(): `Element`

Creates the container for all the contents in the toolbox.

#### Returns

`Element`

The HTML container for the toolbox contents.

#### Defined in

node_modules/blockly/blockly.d.ts:24752

---

### createDom\_()

> `protected` **createDom\_**(`workspace`): `Element`

Creates the DOM for the toolbox.

#### Parameters

##### workspace

[`WorkspaceSvg`](WorkspaceSvg.md)

The workspace this toolbox is on.

#### Returns

`Element`

The HTML container for the toolbox.

#### Defined in

node_modules/blockly/blockly.d.ts:24740

---

### createFlyout\_()

> `protected` **createFlyout\_**(): [`IFlyout`](IFlyout.md)

Creates the flyout based on the toolbox layout.

#### Returns

[`IFlyout`](IFlyout.md)

The flyout for the toolbox.

#### Throws

If missing a require for `Blockly.HorizontalFlyout`,
`Blockly.VerticalFlyout`, and no flyout plugin is specified.

#### Defined in

node_modules/blockly/blockly.d.ts:24780

---

### deselectItem\_()

> `protected` **deselectItem\_**(`item`): `void`

Deselects the given item, marks it as unselected, and updates aria state.

#### Parameters

##### item

[`ISelectableToolboxItem`](ISelectableToolboxItem.md)

The previously selected
toolbox item which should be deselected.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:25013

---

### dispose()

> **dispose**(): `void`

Disposes of this toolbox.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:25075

---

### getClientRect()

> **getClientRect**(): [`Rect`](../utils/classes/Rect.md)

Returns the bounding rectangle of the drag target area in pixel units
relative to viewport.

#### Returns

[`Rect`](../utils/classes/Rect.md)

The component's bounding box. Null if drag
target area should be ignored.

#### Defined in

node_modules/blockly/blockly.d.ts:24834

---

### getFlyout()

> **getFlyout**(): [`IFlyout`](IFlyout.md)

Gets the toolbox flyout.

#### Returns

[`IFlyout`](IFlyout.md)

The toolbox flyout.

#### Defined in

node_modules/blockly/blockly.d.ts:24912

---

### getHeight()

> **getHeight**(): `number`

Gets the height of the toolbox.

#### Returns

`number`

The width of the toolbox.

#### Defined in

node_modules/blockly/blockly.d.ts:24906

---

### getPreviouslySelectedItem()

> **getPreviouslySelectedItem**(): [`ISelectableToolboxItem`](ISelectableToolboxItem.md)

Gets the previously selected item.

#### Returns

[`ISelectableToolboxItem`](ISelectableToolboxItem.md)

The previously selected item, or null if no
item was previously selected.

#### Defined in

node_modules/blockly/blockly.d.ts:24932

---

### getSelectedItem()

> **getSelectedItem**(): [`ISelectableToolboxItem`](ISelectableToolboxItem.md)

Gets the selected item.

#### Returns

[`ISelectableToolboxItem`](ISelectableToolboxItem.md)

The selected item, or null if no item is
currently selected.

#### Defined in

node_modules/blockly/blockly.d.ts:24925

---

### getToolboxItemById()

> **getToolboxItemById**(`id`): [`IToolboxItem`](IToolboxItem.md)

Gets the toolbox item with the given ID.

#### Parameters

##### id

`string`

The ID of the toolbox item.

#### Returns

[`IToolboxItem`](IToolboxItem.md)

The toolbox item with the given ID, or null
if no item exists.

#### Defined in

node_modules/blockly/blockly.d.ts:24894

---

### getToolboxItems()

> **getToolboxItems**(): [`IToolboxItem`](IToolboxItem.md)[]

Gets the items in the toolbox.

#### Returns

[`IToolboxItem`](IToolboxItem.md)[]

The list of items in the toolbox.

#### Defined in

node_modules/blockly/blockly.d.ts:24815

---

### getWidth()

> **getWidth**(): `number`

Gets the width of the toolbox.

#### Returns

`number`

The width of the toolbox.

#### Defined in

node_modules/blockly/blockly.d.ts:24900

---

### getWorkspace()

> **getWorkspace**(): [`WorkspaceSvg`](WorkspaceSvg.md)

Gets the workspace for the toolbox.

#### Returns

[`WorkspaceSvg`](WorkspaceSvg.md)

The parent workspace for the toolbox.

#### Defined in

node_modules/blockly/blockly.d.ts:24918

---

### handleToolboxItemResize()

> **handleToolboxItemResize**(): `void`

Handles resizing the toolbox when a toolbox item resizes.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:24950

---

### init()

> **init**(): `void`

Initializes the toolbox

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:24733

---

### isHorizontal()

> **isHorizontal**(): `boolean`

Gets whether or not the toolbox is horizontal.

#### Returns

`boolean`

True if the toolbox is horizontal, false if the toolbox is
vertical.

#### Defined in

node_modules/blockly/blockly.d.ts:24939

---

### onClick\_()

> `protected` **onClick\_**(`e`): `void`

Handles on click events for when the toolbox or toolbox items are clicked.

#### Parameters

##### e

`Event`

Click event to handle.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:24766

---

### onDragEnter()

> **onDragEnter**(`_dragElement`): `void`

Handles when a cursor with a block or bubble enters this drag target.

#### Parameters

##### \_dragElement

[`IDraggable`](IDraggable.md)

The block or bubble currently being
dragged.

#### Returns

`void`

#### Overrides

[`DeleteArea`](DeleteArea.md).[`onDragEnter`](DeleteArea.md#ondragenter)

#### Defined in

node_modules/blockly/blockly.d.ts:24855

---

### onDragExit()

> **onDragExit**(`_dragElement`): `void`

Handles when a cursor with a block or bubble exits this drag target.

#### Parameters

##### \_dragElement

[`IDraggable`](IDraggable.md)

The block or bubble currently being
dragged.

#### Returns

`void`

#### Overrides

[`DeleteArea`](DeleteArea.md).[`onDragExit`](DeleteArea.md#ondragexit)

#### Defined in

node_modules/blockly/blockly.d.ts:24862

---

### onDragOver()

> **onDragOver**(`_dragElement`): `void`

Handles when a cursor with a block or bubble is dragged over this drag
target.

#### Parameters

##### \_dragElement

[`IDraggable`](IDraggable.md)

The block or bubble currently being
dragged.

#### Returns

`void`

#### Inherited from

[`DeleteArea`](DeleteArea.md).[`onDragOver`](DeleteArea.md#ondragover)

#### Defined in

node_modules/blockly/blockly.d.ts:11944

---

### onDrop()

> **onDrop**(`_dragElement`): `void`

Handles when a block or bubble is dropped on this component.
Should not handle delete here.

#### Parameters

##### \_dragElement

[`IDraggable`](IDraggable.md)

The block or bubble currently being
dragged.

#### Returns

`void`

#### Overrides

[`DeleteArea`](DeleteArea.md).[`onDrop`](DeleteArea.md#ondrop)

#### Defined in

node_modules/blockly/blockly.d.ts:24870

---

### onKeyDown\_()

> `protected` **onKeyDown\_**(`e`): `void`

Handles key down events for the toolbox.

#### Parameters

##### e

`KeyboardEvent`

The key down event.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:24772

---

### onShortcut()

> **onShortcut**(`_shortcut`): `boolean`

Handles the given keyboard shortcut.

#### Parameters

##### \_shortcut

[`KeyboardShortcut`](../namespaces/ShortcutRegistry/type-aliases/KeyboardShortcut.md)

The shortcut to be
handled.

#### Returns

`boolean`

True if the shortcut has been handled, false otherwise.

#### Defined in

node_modules/blockly/blockly.d.ts:24728

---

### position()

> **position**(): `void`

Positions the toolbox based on whether it is a horizontal toolbox and whether
the workspace is in rtl.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:24945

---

### refreshSelection()

> **refreshSelection**(): `void`

Updates the flyout's content without closing it. Should be used in response
to a change in one of the dynamic categories, such as variables or
procedures.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:24967

---

### refreshTheme()

> **refreshTheme**(): `void`

Updates the category colours and background colour of selected categories.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:24960

---

### removeStyle()

> **removeStyle**(`style`): `void`

Removes a style from the toolbox. Usually used to change the cursor.

#### Parameters

##### style

`string`

The name of the class to remove.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:24827

---

### render()

> **render**(`toolboxDef`): `void`

Fills the toolbox with new toolbox items and removes any old contents.

#### Parameters

##### toolboxDef

[`ToolboxInfo`](../utils/utils/toolbox/type-aliases/ToolboxInfo.md)

Object holding information
for creating a toolbox.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:24787

---

### renderContents\_()

> `protected` **renderContents\_**(`toolboxDef`): `void`

Adds all the toolbox items to the toolbox.

#### Parameters

##### toolboxDef

`any`[]

Array
holding objects containing information on the contents of the toolbox.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:24794

---

### selectItem\_()

> `protected` **selectItem\_**(`oldItem`, `newItem`): `void`

Selects the given item, marks it selected, and updates aria state.

#### Parameters

##### oldItem

[`ISelectableToolboxItem`](ISelectableToolboxItem.md)

The previously selected
toolbox item.

##### newItem

[`ISelectableToolboxItem`](ISelectableToolboxItem.md)

The newly selected toolbox
item.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:25022

---

### selectItemByPosition()

> **selectItemByPosition**(`position`): `void`

Selects the toolbox item by its position in the list of toolbox items.

#### Parameters

##### position

`number`

The position of the item to select.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:25028

---

### setSelectedItem()

> **setSelectedItem**(`newItem`): `void`

Sets the given item as selected.
No-op if the item is not selectable.

#### Parameters

##### newItem

[`IToolboxItem`](IToolboxItem.md)

The toolbox item to select.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:24986

---

### setVisible()

> **setVisible**(`isVisible`): `void`

Shows or hides the toolbox.

#### Parameters

##### isVisible

`boolean`

True if toolbox should be visible.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:24973

---

### shouldDeselectItem\_()

> `protected` **shouldDeselectItem\_**(`oldItem`, `newItem`): `boolean`

Decides whether the old item should be deselected.

#### Parameters

##### oldItem

[`ISelectableToolboxItem`](ISelectableToolboxItem.md)

The previously selected
toolbox item.

##### newItem

[`ISelectableToolboxItem`](ISelectableToolboxItem.md)

The newly selected toolbox
item.

#### Returns

`boolean`

True if the old item should be deselected, false otherwise.

#### Defined in

node_modules/blockly/blockly.d.ts:24996

---

### shouldPreventMove()

> **shouldPreventMove**(`_dragElement`): `boolean`

Returns whether the provided block or bubble should not be moved after being
dropped on this component. If true, the element will return to where it was
when the drag started.

#### Parameters

##### \_dragElement

[`IDraggable`](IDraggable.md)

The block or bubble currently being
dragged.

#### Returns

`boolean`

Whether the block or bubble provided should be returned to
drag start.

#### Inherited from

[`DeleteArea`](DeleteArea.md).[`shouldPreventMove`](DeleteArea.md#shouldpreventmove)

#### Defined in

node_modules/blockly/blockly.d.ts:11967

---

### shouldSelectItem\_()

> `protected` **shouldSelectItem\_**(`oldItem`, `newItem`): `boolean`

Decides whether the new item should be selected.

#### Parameters

##### oldItem

[`ISelectableToolboxItem`](ISelectableToolboxItem.md)

The previously selected
toolbox item.

##### newItem

[`ISelectableToolboxItem`](ISelectableToolboxItem.md)

The newly selected toolbox
item.

#### Returns

`boolean`

True if the new item should be selected, false otherwise.

#### Defined in

node_modules/blockly/blockly.d.ts:25006

---

### updateCursorDeleteStyle\_()

> `protected` **updateCursorDeleteStyle\_**(`addStyle`): `void`

Adds or removes the CSS style of the cursor over the toolbox based whether
the block or bubble over it is expected to be deleted if dropped (using the
internal this.wouldDelete\_ property).

#### Parameters

##### addStyle

`boolean`

Whether the style should be added or removed.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:24886

---

### updateFlyout\_()

> `protected` **updateFlyout\_**(`oldItem`, `newItem`): `void`

Decides whether to hide or show the flyout depending on the selected item.

#### Parameters

##### oldItem

[`ISelectableToolboxItem`](ISelectableToolboxItem.md)

The previously selected toolbox
item.

##### newItem

[`ISelectableToolboxItem`](ISelectableToolboxItem.md)

The newly selected toolbox item.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:25036

---

### updateWouldDelete\_()

> `protected` **updateWouldDelete\_**(`wouldDelete`): `void`

Updates the internal wouldDelete\_ state.

#### Parameters

##### wouldDelete

`boolean`

The new value for the wouldDelete state.

#### Returns

`void`

#### Overrides

[`DeleteArea`](DeleteArea.md).[`updateWouldDelete_`](DeleteArea.md#updatewoulddelete_)

#### Defined in

node_modules/blockly/blockly.d.ts:24877

---

### wouldDelete()

> **wouldDelete**(`element`, `_couldConnect`): `boolean`

Returns whether the provided block or bubble would be deleted if dropped on
this area.
This method should check if the element is deletable and is always called
before onDragEnter/onDragOver/onDragExit.

#### Parameters

##### element

[`IDraggable`](IDraggable.md)

The block or bubble currently being
dragged.

##### \_couldConnect

`boolean`

Whether the element could could connect to
another.

#### Returns

`boolean`

Whether the element provided would be deleted if dropped on
this area.

#### Overrides

[`DeleteArea`](DeleteArea.md).[`wouldDelete`](DeleteArea.md#woulddelete-1)

#### Defined in

node_modules/blockly/blockly.d.ts:24848
