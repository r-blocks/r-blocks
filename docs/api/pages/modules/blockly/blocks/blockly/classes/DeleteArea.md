# Class: DeleteArea

Abstract class for a component that can delete a block or bubble that is
dropped on top of it.

## Implements

## Alias

Blockly.DeleteArea

## Extends

- [`DragTarget`](DragTarget.md)

## Extended by

- [`Toolbox`](Toolbox.md)
- [`Trashcan`](Trashcan.md)

## Implements

- [`IDeleteArea`](IDeleteArea.md)

## Constructors

### new DeleteArea()

> **new DeleteArea**(): [`DeleteArea`](DeleteArea.md)

#### Returns

[`DeleteArea`](DeleteArea.md)

#### Inherited from

[`DragTarget`](DragTarget.md).[`constructor`](DragTarget.md#constructors)

## Properties

### wouldDelete\_

> `protected` **wouldDelete\_**: `boolean`

Whether the last block or bubble dragged over this delete area would be
deleted if dropped on this component.
This property is not updated after the block or bubble is deleted.

#### Defined in

node_modules/blockly/blockly.d.ts:11989

## Methods

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

[`DragTarget`](DragTarget.md).[`onDragEnter`](DragTarget.md#ondragenter)

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

#### Inherited from

[`DragTarget`](DragTarget.md).[`onDragExit`](DragTarget.md#ondragexit)

#### Defined in

node_modules/blockly/blockly.d.ts:11950

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

[`DragTarget`](DragTarget.md).[`onDragOver`](DragTarget.md#ondragover)

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

#### Inherited from

[`DragTarget`](DragTarget.md).[`onDrop`](DragTarget.md#ondrop)

#### Defined in

node_modules/blockly/blockly.d.ts:11957

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

[`DragTarget`](DragTarget.md).[`shouldPreventMove`](DragTarget.md#shouldpreventmove)

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

#### Defined in

node_modules/blockly/blockly.d.ts:12002
