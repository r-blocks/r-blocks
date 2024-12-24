# Class: DragTarget

Abstract class for a component with custom behaviour when a block or bubble
is dragged over or dropped on top of it.

## Implements

## Alias

Blockly.DragTarget

## Extended by

- [`DeleteArea`](DeleteArea.md)

## Implements

- [`IDragTarget`](IDragTarget.md)

## Constructors

### new DragTarget()

> **new DragTarget**(): [`DragTarget`](DragTarget.md)

#### Returns

[`DragTarget`](DragTarget.md)

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

#### Defined in

node_modules/blockly/blockly.d.ts:11967
