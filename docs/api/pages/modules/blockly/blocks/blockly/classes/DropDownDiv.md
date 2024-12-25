# Class: DropDownDiv

Class for drop-down div.

## Package

## Alias

Blockly.DropDownDiv

## Constructors

### new DropDownDiv()

> **new DropDownDiv**(): [`DropDownDiv`](DropDownDiv.md)

#### Returns

[`DropDownDiv`](DropDownDiv.md)

## Methods

### clearContent()

> `static` **clearContent**(): `void`

Clear the content of the drop-down.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:10965

---

### createDom()

> `static` **createDom**(): `void`

Create and insert the DOM element for this div.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:10950

---

### getContentDiv()

> `static` **getContentDiv**(): `Element`

Provide the div for inserting content into the drop-down.

#### Returns

`Element`

Div to populate with content.

#### Defined in

node_modules/blockly/blockly.d.ts:10961

---

### getPositionX()

> `static` **getPositionX**(`sourceX`, `boundsLeft`, `boundsRight`, `divWidth`): `object`

Get the x positions for the left side of the DropDownDiv and the arrow,
accounting for the bounds of the workspace.

#### Parameters

##### sourceX

`number`

Desired origin point x, in absolute px.

##### boundsLeft

`number`

The left edge of the bounding element, in
absolute px.

##### boundsRight

`number`

The right edge of the bounding element, in
absolute px.

##### divWidth

`number`

The width of the div in px.

#### Returns

`object`

An object containing metrics for
the x positions of the left side of the DropDownDiv and the arrow.

##### arrowX

> **arrowX**: `number`

##### divX

> **divX**: `number`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:11034

---

### hide()

> `static` **hide**(): `void`

Hide the menu, triggering animation.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:11054

---

### hideIfOwner()

> `static` **hideIfOwner**(`owner`, `opt_withoutAnimation`?): `boolean`

Hide the menu only if it is owned by the provided object.

#### Parameters

##### owner

`any`

Object which must be owning the drop-down to hide.

##### opt_withoutAnimation?

`boolean`

True if we should hide the dropdown
without animating.

#### Returns

`boolean`

True if hidden.

#### Defined in

node_modules/blockly/blockly.d.ts:11050

---

### hideWithoutAnimation()

> `static` **hideWithoutAnimation**(): `void`

Hide the menu, without animation.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:11058

---

### isVisible()

> `static` **isVisible**(): `boolean`

Is the container visible?

#### Returns

`boolean`

True if visible.

#### Defined in

node_modules/blockly/blockly.d.ts:11042

---

### repositionForWindowResize()

> `static` **repositionForWindowResize**(): `void`

Repositions the dropdownDiv on window resize. If it doesn't know how to
calculate the new position, it will just hide it instead.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:11064

---

### setBoundsElement()

> `static` **setBoundsElement**(`boundsElement`): `void`

Set an element to maintain bounds within. Drop-downs will appear
within the box of this element if possible.

#### Parameters

##### boundsElement

`Element`

Element to bind drop-down to.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:10956

---

### setColour()

> `static` **setColour**(`backgroundColour`, `borderColour`): `void`

Set the colour for the drop-down.

#### Parameters

##### backgroundColour

`string`

Any CSS colour for the background.

##### borderColour

`string`

Any CSS colour for the border.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:10971

---

### show()

> `static` **show**(`owner`, `rtl`, `primaryX`, `primaryY`, `secondaryX`, `secondaryY`, `opt_onHide`?): `boolean`

Show and place the drop-down.
The drop-down is placed with an absolute "origin point" (x, y) - i.e.,
the arrow will point at this origin and box will positioned below or above
it. If we can maintain the container bounds at the primary point, the arrow
will point there, and the container will be positioned below it.
If we can't maintain the container bounds at the primary point, fall-back to
the secondary point and position above.

#### Parameters

##### owner

`any`

The object showing the drop-down

##### rtl

`boolean`

Right-to-left (true) or left-to-right (false).

##### primaryX

`number`

Desired origin point x, in absolute px.

##### primaryY

`number`

Desired origin point y, in absolute px.

##### secondaryX

`number`

Secondary/alternative origin point x, in absolute
px.

##### secondaryY

`number`

Secondary/alternative origin point y, in absolute
px.

##### opt_onHide?

`Function`

Optional callback for when the drop-down is
hidden.

#### Returns

`boolean`

True if the menu rendered at the primary origin point.

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:11020

---

### showPositionedByBlock()

> `static` **showPositionedByBlock**(`field`, `block`, `opt_onHide`?, `opt_secondaryYOffset`?): `boolean`

Shortcut to show and place the drop-down with positioning determined
by a particular block. The primary position will be below the block,
and the secondary position above the block. Drop-down will be
constrained to the block's workspace.

#### Parameters

##### field

[`Field`](Field.md)

The field showing the drop-down.

##### block

[`BlockSvg`](BlockSvg.md)

Block to position the drop-down around.

##### opt_onHide?

`Function`

Optional callback for when the drop-down is
hidden.

##### opt_secondaryYOffset?

`number`

Optional Y offset for above-block
positioning.

#### Returns

`boolean`

True if the menu rendered below block; false if above.

#### Defined in

node_modules/blockly/blockly.d.ts:10985

---

### showPositionedByField()

> `static` **showPositionedByField**(`field`, `opt_onHide`?, `opt_secondaryYOffset`?): `boolean`

Shortcut to show and place the drop-down with positioning determined
by a particular field. The primary position will be below the field,
and the secondary position above the field. Drop-down will be
constrained to the block's workspace.

#### Parameters

##### field

[`Field`](Field.md)

The field to position the dropdown against.

##### opt_onHide?

`Function`

Optional callback for when the drop-down is
hidden.

##### opt_secondaryYOffset?

`number`

Optional Y offset for above-block
positioning.

#### Returns

`boolean`

True if the menu rendered below block; false if above.

#### Defined in

node_modules/blockly/blockly.d.ts:10998
