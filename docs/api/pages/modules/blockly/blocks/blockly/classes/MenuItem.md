# Class: MenuItem

Class representing an item in a menu.

## Param

Text caption to display as the content
of the item, or a HTML element to display.

## Param

Data/model associated with the menu item.

## Alias

Blockly.MenuItem

## Constructors

### new MenuItem()

> **new MenuItem**(`content`, `opt_value`): [`MenuItem`](MenuItem.md)

#### Parameters

##### content

`any`

##### opt_value

`any`

#### Returns

[`MenuItem`](MenuItem.md)

#### Defined in

node_modules/blockly/blockly.d.ts:14308

## Methods

### createDom()

> **createDom**(): `Element`

Creates the menuitem's DOM.

#### Returns

`Element`

Completed DOM.

#### Defined in

node_modules/blockly/blockly.d.ts:14373

---

### dispose()

> **dispose**(): `void`

Dispose of this menu item.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:14377

---

### getElement()

> **getElement**(): `Element`

Gets the menu item's element.

#### Returns

`Element`

The DOM element.

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:14383

---

### getId()

> **getId**(): `string`

Gets the unique ID for this menu item.

#### Returns

`string`

Unique component ID.

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:14389

---

### getValue()

> **getValue**(): `any`

Gets the value associated with the menu item.

#### Returns

`any`

value Value associated with the menu item.

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:14395

---

### isEnabled()

> **isEnabled**(): `boolean`

Returns true if the menu item is enabled, false otherwise.

#### Returns

`boolean`

Whether the menu item is enabled.

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:14432

---

### onAction()

> **onAction**(`fn`, `obj`): `void`

Set the handler that's called when the menu item is activated by the user.
`obj` will be used as the 'this' object in the function when called.

#### Parameters

##### fn

(`arg0`) => `any`

The handler.

##### obj

`any`

Used as the 'this' object in fn when called.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:14452

---

### performAction()

> **performAction**(): `void`

Performs the appropriate action when the menu item is activated
by the user.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:14444

---

### setCheckable()

> **setCheckable**(`checkable`): `void`

Sets the menu item to be checkable or not. Set to true for menu items
that represent checkable options.

#### Parameters

##### checkable

`boolean`

Whether the menu item is checkable.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:14414

---

### setChecked()

> **setChecked**(`checked`): `void`

Checks or unchecks the component.

#### Parameters

##### checked

`boolean`

Whether to check or uncheck the component.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:14420

---

### setEnabled()

> **setEnabled**(`enabled`): `void`

Enables or disables the menu item.

#### Parameters

##### enabled

`boolean`

Whether to enable or disable the menu item.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:14438

---

### setHighlighted()

> **setHighlighted**(`highlight`): `void`

Highlights or unhighlights the component.

#### Parameters

##### highlight

`boolean`

Whether to highlight or unhighlight the component.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:14426

---

### setRightToLeft()

> **setRightToLeft**(`rtl`): `void`

Set menu item's rendering direction.

#### Parameters

##### rtl

`boolean`

True if RTL, false if LTR.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:14401

---

### setRole()

> **setRole**(`roleName`): `void`

Set the menu item's accessibility role.

#### Parameters

##### roleName

`string`

Role name.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:14407
