# Class: ScrollbarPair

## Constructors

### new ScrollbarPair()

> **new ScrollbarPair**(`workspace`, `addHorizontal`?, `addVertical`?, `opt_class`?, `opt_margin`?): [`ScrollbarPair`](ScrollbarPair.md)

Class for a pair of scrollbars. Horizontal and vertical.

#### Parameters

##### workspace

[`WorkspaceSvg`](WorkspaceSvg.md)

Workspace to bind the scrollbars to.

##### addHorizontal?

`boolean`

Whether to add a horizontal scrollbar.
Defaults to true.

##### addVertical?

`boolean`

Whether to add a vertical scrollbar. Defaults
to true.

##### opt_class?

`string`

A class to be applied to these scrollbars.

##### opt_margin?

`number`

The margin to apply to these scrollbars.

#### Returns

[`ScrollbarPair`](ScrollbarPair.md)

#### Alias

Blockly.ScrollbarPair

#### Defined in

node_modules/blockly/blockly.d.ts:11493

## Properties

### corner\_

> **corner\_**: `SVGRectElement`

#### Defined in

node_modules/blockly/blockly.d.ts:11502

---

### hScroll

> **hScroll**: [`Scrollbar`](Scrollbar.md)

#### Defined in

node_modules/blockly/blockly.d.ts:11500

---

### vScroll

> **vScroll**: [`Scrollbar`](Scrollbar.md)

#### Defined in

node_modules/blockly/blockly.d.ts:11501

## Methods

### canScrollHorizontally()

> **canScrollHorizontally**(): `boolean`

Returns whether scrolling horizontally is enabled.

#### Returns

`boolean`

True if horizontal scroll is enabled.

#### Defined in

node_modules/blockly/blockly.d.ts:11524

---

### canScrollVertically()

> **canScrollVertically**(): `boolean`

Returns whether scrolling vertically is enabled.

#### Returns

`boolean`

True if vertical scroll is enabled.

#### Defined in

node_modules/blockly/blockly.d.ts:11529

---

### dispose()

> **dispose**(): `void`

Dispose of this pair of scrollbars.
Unlink from all DOM elements to prevent memory leaks.

#### Returns

`void`

#### Suppress

#### Defined in

node_modules/blockly/blockly.d.ts:11514

---

### isVisible()

> **isVisible**(): `boolean`

If any of the scrollbars are visible. Non-paired scrollbars may disappear
when they aren't needed.

#### Returns

`boolean`

True if visible.

#### Defined in

node_modules/blockly/blockly.d.ts:11572

---

### resize()

> **resize**(): `void`

Recalculate both of the scrollbars' locations and lengths.
Also reposition the corner rectangle.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:11519

---

### resizeContent()

> **resizeContent**(`hostMetrics`): `void`

Recalculates the scrollbars' locations within their path and length.
This should be called when the contents of the workspace have changed.

#### Parameters

##### hostMetrics

[`Metrics`](../utils/classes/Metrics.md)

A data structure describing all
the required dimensions, possibly fetched from the host object.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:11579

---

### resizeView()

> **resizeView**(`hostMetrics`): `void`

Recalculates the scrollbars' locations on the screen and path length.
This should be called when the layout or size of the window has changed.

#### Parameters

##### hostMetrics

[`Metrics`](../utils/classes/Metrics.md)

A data structure describing all
the required dimensions, possibly fetched from the host object.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:11586

---

### set()

> **set**(`x`, `y`, `updateMetrics`): `void`

Set the handles of both scrollbars.

#### Parameters

##### x

`number`

The horizontal content displacement, relative to the view
in pixels.

##### y

`number`

The vertical content displacement, relative to the view in
pixels.

##### updateMetrics

`boolean`

Whether to update metrics on this set call.
Defaults to true.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:11549

---

### setContainerVisible()

> **setContainerVisible**(`visible`): `void`

Set whether this scrollbar's container is visible.

#### Parameters

##### visible

`boolean`

Whether the container is visible.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:11566

---

### setOrigin()

> **setOrigin**(`x`, `y`): `void`

Record the origin of the workspace that the scrollbar is in, in pixels
relative to the injection div origin. This is for times when the scrollbar is
used in an object whose origin isn't the same as the main workspace
(e.g. in a flyout.)

#### Parameters

##### x

`number`

The x coordinate of the scrollbar's origin, in CSS pixels.

##### y

`number`

The y coordinate of the scrollbar's origin, in CSS pixels.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:11539

---

### setX()

> **setX**(`x`): `void`

Set the handle of the horizontal scrollbar to be at a certain position in
CSS pixels relative to its parents.

#### Parameters

##### x

`number`

Horizontal scroll value.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:11555

---

### setY()

> **setY**(`y`): `void`

Set the handle of the vertical scrollbar to be at a certain position in
CSS pixels relative to its parents.

#### Parameters

##### y

`number`

Vertical scroll value.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:11561
