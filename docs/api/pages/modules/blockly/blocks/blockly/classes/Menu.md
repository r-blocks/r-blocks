# Class: Menu

## Constructors

### new Menu()

> **new Menu**(): [`Menu`](Menu.md)

#### Returns

[`Menu`](Menu.md)

## Properties

### openingCoords

> **openingCoords**: [`Coordinate`](../utils/classes/Coordinate.md)

Coordinates of the mousedown event that caused this menu to open. Used to
prevent the consequent mouseup event due to a simple click from activating
a menu item immediately.

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:14473

## Methods

### addChild()

> **addChild**(`menuItem`): `void`

Add a new menu item to the bottom of this menu.

#### Parameters

##### menuItem

[`MenuItem`](MenuItem.md)

Menu item to append.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:14527

---

### dispose()

> **dispose**(): `void`

Dispose of this menu.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:14558

---

### focus()

> **focus**(): `void`

Focus the menu element.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:14543

---

### getElement()

> **getElement**(): `Element`

Gets the menu's element.

#### Returns

`Element`

The DOM element.

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:14538

---

### getSize()

> **getSize**(): [`Size`](../utils/classes/Size.md)

Get the size of a rendered menu.

#### Returns

[`Size`](../utils/classes/Size.md)

Object with width and height properties.

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:14639

---

### highlightNext()

> **highlightNext**(): `void`

Highlights the next highlightable item (or the first if nothing is currently
highlighted).

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:14578

---

### highlightPrevious()

> **highlightPrevious**(): `void`

Highlights the previous highlightable item (or the last if nothing is
currently highlighted).

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:14584

---

### render()

> **render**(`container`): `void`

Creates the menu DOM.

#### Parameters

##### container

`Element`

Element upon which to append this menu.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:14532

---

### setHighlighted()

> **setHighlighted**(`item`): `void`

Highlights the given menu item, or clears highlighting if null.

#### Parameters

##### item

[`MenuItem`](MenuItem.md)

Item to highlight, or null.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:14572

---

### setRole()

> **setRole**(`roleName`): `void`

Set the menu accessibility role.

#### Parameters

##### roleName

`string`

role name.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:14554
