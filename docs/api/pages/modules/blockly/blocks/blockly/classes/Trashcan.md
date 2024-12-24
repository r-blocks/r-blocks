# Class: Trashcan

**`Interface`**

The interface for a workspace component that can be registered with the
ComponentManager.

## Alias

Blockly.IComponent

## Extends

- [`DeleteArea`](DeleteArea.md)

## Implements

- [`IAutoHideable`](../interfaces/IAutoHideable.md)
- [`IPositionable`](IPositionable.md)

## Constructors

### new Trashcan()

> **new Trashcan**(`workspace`): [`Trashcan`](Trashcan.md)

Class for a trash can.

#### Parameters

##### workspace

[`WorkspaceSvg`](WorkspaceSvg.md)

The workspace to sit in.

#### Returns

[`Trashcan`](Trashcan.md)

#### Implements

#### Implements

#### Alias

Blockly.Trashcan

#### Overrides

[`DeleteArea`](DeleteArea.md).[`constructor`](DeleteArea.md#constructors)

#### Defined in

node_modules/blockly/blockly.d.ts:12060

## Properties

### flyout

> **flyout**: [`IFlyout`](IFlyout.md)

The trashcan flyout.

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:12084

---

### id

> **id**: `string`

The unique id for this component that is used to register with the
ComponentManager.

#### Defined in

node_modules/blockly/blockly.d.ts:12072

---

### initialized\_

> **initialized\_**: `boolean`

#### Defined in

node_modules/blockly/blockly.d.ts:12096

---

### isLidOpen

> **isLidOpen**: `any`

#### Defined in

node_modules/blockly/blockly.d.ts:12187

---

### left\_

> **left\_**: `number`

#### Defined in

node_modules/blockly/blockly.d.ts:12143

---

### lidOpen\_

> **lidOpen\_**: `number`

#### Defined in

node_modules/blockly/blockly.d.ts:12193

---

### lidTask\_

> **lidTask\_**: `number`

#### Defined in

node_modules/blockly/blockly.d.ts:12194

---

### minOpenness\_

> **minOpenness\_**: `number`

#### Defined in

node_modules/blockly/blockly.d.ts:12209

---

### svgGroup\_

> **svgGroup\_**: `SVGElement`

#### Defined in

node_modules/blockly/blockly.d.ts:12090

---

### svgLid\_

> **svgLid\_**: `SVGElement`

#### Defined in

node_modules/blockly/blockly.d.ts:12091

---

### top\_

> **top\_**: `number`

#### Defined in

node_modules/blockly/blockly.d.ts:12142

---

### wouldDelete\_

> `protected` **wouldDelete\_**: `boolean`

Whether the last block or bubble dragged over this delete area would be
deleted if dropped on this component.
This property is not updated after the block or bubble is deleted.

#### Inherited from

[`DeleteArea`](DeleteArea.md).[`wouldDelete_`](DeleteArea.md#woulddelete_)

#### Defined in

node_modules/blockly/blockly.d.ts:11989

## Methods

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

#### Implementation of

[`IAutoHideable`](../interfaces/IAutoHideable.md).[`autoHide`](../interfaces/IAutoHideable.md#autohide)

#### Defined in

node_modules/blockly/blockly.d.ts:12127

---

### click()

> **click**(): `void`

Inspect the contents of the trash.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:12218

---

### closeFlyout()

> **closeFlyout**(): `void`

Closes the trashcan flyout.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:12121

---

### closeLid()

> **closeLid**(): `void`

Flip the lid shut.
Called externally after a drag.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:12214

---

### contentsIsOpen()

> **contentsIsOpen**(): `boolean`

Returns true if the trashcan contents-flyout is currently open.

#### Returns

`boolean`

True if the trashcan contents-flyout is currently open.

#### Defined in

node_modules/blockly/blockly.d.ts:12113

---

### createDom()

> **createDom**(): `SVGElement`

Create the trash can elements.

#### Returns

`SVGElement`

The trash can's SVG group.

#### Defined in

node_modules/blockly/blockly.d.ts:12089

---

### dispose()

> **dispose**(): `void`

Dispose of this trash can.
Unlink from all DOM elements to prevent memory leaks.

#### Returns

`void`

#### Suppress

#### Defined in

node_modules/blockly/blockly.d.ts:12102

---

### emptyContents()

> **emptyContents**(): `void`

Empties the trashcan's contents. If the contents-flyout is currently open
it will be closed.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:12132

---

### getBoundingRectangle()

> **getBoundingRectangle**(): [`Rect`](../utils/classes/Rect.md)

Returns the bounding rectangle of the UI element in pixel units relative to
the Blockly injection div.

#### Returns

[`Rect`](../utils/classes/Rect.md)

The UI elements’s bounding box. Null if
bounding box should be ignored by other UI elements.

#### Defined in

node_modules/blockly/blockly.d.ts:12150

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

node_modules/blockly/blockly.d.ts:12157

---

### init()

> **init**(): `void`

Initializes the trash can.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:12095

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

#### Inherited from

[`DeleteArea`](DeleteArea.md).[`onDragEnter`](DeleteArea.md#ondragenter)

#### Defined in

node_modules/blockly/blockly.d.ts:11937

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

node_modules/blockly/blockly.d.ts:12172

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

#### Overrides

[`DeleteArea`](DeleteArea.md).[`onDragOver`](DeleteArea.md#ondragover)

#### Defined in

node_modules/blockly/blockly.d.ts:12165

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

node_modules/blockly/blockly.d.ts:12180

---

### openFlyout()

> **openFlyout**(): `void`

Opens the trashcan flyout.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:12117

---

### position()

> **position**(`metrics`, `savedPositions`): `void`

Positions the trashcan.
It is positioned in the opposite corner to the corner the
categories/toolbox starts at.

#### Parameters

##### metrics

[`UiMetrics`](../namespaces/MetricsManager/type-aliases/UiMetrics.md)

The workspace metrics.

##### savedPositions

[`Rect`](../utils/classes/Rect.md)[]

List of rectangles that
are already on the workspace.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:12141

---

### setLidOpen()

> **setLidOpen**(`state`): `void`

Flip the lid open or shut.

#### Parameters

##### state

`boolean`

True if open.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:12186

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

### updateWouldDelete\_()

> `protected` **updateWouldDelete\_**(`wouldDelete`): `void`

Updates the internal wouldDelete\_ state.

#### Parameters

##### wouldDelete

`boolean`

The new value for the wouldDelete state.

#### Returns

`void`

#### Inherited from

[`DeleteArea`](DeleteArea.md).[`updateWouldDelete_`](DeleteArea.md#updatewoulddelete_)

#### Defined in

node_modules/blockly/blockly.d.ts:12008

---

### wouldDelete()

> **wouldDelete**(`element`, `couldConnect`): `boolean`

Returns whether the provided block or bubble would be deleted if dropped on
this area.
This method should check if the element is deletable and is always called
before onDragEnter/onDragOver/onDragExit.

#### Parameters

##### element

[`IDraggable`](IDraggable.md)

The block or bubble currently being
dragged.

##### couldConnect

`boolean`

Whether the element could could connect to
another.

#### Returns

`boolean`

Whether the element provided would be deleted if dropped on
this area.

#### Inherited from

[`DeleteArea`](DeleteArea.md).[`wouldDelete`](DeleteArea.md#woulddelete-1)

#### Defined in

node_modules/blockly/blockly.d.ts:12002
