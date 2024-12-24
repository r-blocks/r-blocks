# Class: Scrollbar

A note on units: most of the numbers that are in CSS pixels are scaled if the
scrollbar is in a mutator.

## Constructors

### new Scrollbar()

> **new Scrollbar**(`workspace`, `horizontal`, `opt_pair`?, `opt_class`?, `opt_margin`?): [`Scrollbar`](Scrollbar.md)

Class for a pure SVG scrollbar.
This technique offers a scrollbar that is guaranteed to work, but may not
look or behave like the system's scrollbars.

#### Parameters

##### workspace

[`WorkspaceSvg`](WorkspaceSvg.md)

Workspace to bind the scrollbar to.

##### horizontal

`boolean`

True if horizontal, false if vertical.

##### opt_pair?

`boolean`

True if scrollbar is part of a horiz/vert pair.

##### opt_class?

`string`

A class to be applied to this scrollbar.

##### opt_margin?

`number`

The margin to apply to this scrollbar.

#### Returns

[`Scrollbar`](Scrollbar.md)

#### Alias

Blockly.Scrollbar

#### Defined in

node_modules/blockly/blockly.d.ts:7368

## Properties

### containerVisible\_

> **containerVisible\_**: `boolean`

#### Defined in

node_modules/blockly/blockly.d.ts:7553

---

### handleLength\_

> **handleLength\_**: `number`

#### Defined in

node_modules/blockly/blockly.d.ts:7444

---

### handlePosition\_

> **handlePosition\_**: `number`

#### Defined in

node_modules/blockly/blockly.d.ts:7459

---

### isVisible\_

> **isVisible\_**: `boolean`

#### Defined in

node_modules/blockly/blockly.d.ts:7560

---

### lengthAttribute\_

> **lengthAttribute\_**: `string`

#### Defined in

node_modules/blockly/blockly.d.ts:7415

---

### onMouseDownBarWrapper\_

> **onMouseDownBarWrapper\_**: `any`[][]

#### Defined in

node_modules/blockly/blockly.d.ts:7417

---

### onMouseDownHandleWrapper\_

> **onMouseDownHandleWrapper\_**: `any`[][]

#### Defined in

node_modules/blockly/blockly.d.ts:7418

---

### origin\_

> **origin\_**: [`Coordinate`](../utils/classes/Coordinate.md)

#### Defined in

node_modules/blockly/blockly.d.ts:7630

---

### outerSvg\_

> **outerSvg\_**: `SVGSVGElement`

#### Defined in

node_modules/blockly/blockly.d.ts:7425

---

### position

> **position**: [`Coordinate`](../utils/classes/Coordinate.md)

The upper left corner of the scrollbar's SVG group in CSS pixels relative
to the scrollbar's origin. This is usually relative to the injection div
origin.

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:7414

---

### positionAttribute\_

> **positionAttribute\_**: `string`

#### Defined in

node_modules/blockly/blockly.d.ts:7416

---

### ratio

> **ratio**: `number`

The ratio of handle position offset to workspace content displacement.

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:7406

---

### scrollbarLength\_

> **scrollbarLength\_**: `number`

#### Defined in

node_modules/blockly/blockly.d.ts:7467

---

### startDragHandle

> **startDragHandle**: `number`

#### Defined in

node_modules/blockly/blockly.d.ts:7582

---

### startDragMouse\_

> **startDragMouse\_**: `number`

#### Defined in

node_modules/blockly/blockly.d.ts:7583

---

### svgBackground\_

> **svgBackground\_**: `SVGRectElement`

#### Defined in

node_modules/blockly/blockly.d.ts:7427

---

### svgGroup\_

> **svgGroup\_**: `SVGGElement`

#### Defined in

node_modules/blockly/blockly.d.ts:7426

---

### svgHandle\_

> **svgHandle\_**: `SVGRectElement`

#### Defined in

node_modules/blockly/blockly.d.ts:7428

## Methods

### dispose()

> **dispose**(): `void`

Dispose of this scrollbar.
Unlink from all DOM elements to prevent memory leaks.

#### Returns

`void`

#### Suppress

#### Defined in

node_modules/blockly/blockly.d.ts:7424

---

### getRatio\_()

> **getRatio\_**(): `number`

Helper to calculate the ratio of handle position to scrollbar view size.

#### Returns

`number`

Ratio.

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:7606

---

### isVisible()

> **isVisible**(): `boolean`

Is the scrollbar visible. Non-paired scrollbars disappear when they aren't
needed.

#### Returns

`boolean`

True if visible.

#### Defined in

node_modules/blockly/blockly.d.ts:7546

---

### resize()

> **resize**(`opt_metrics`?): `void`

Recalculate the scrollbar's location and its length.

#### Parameters

##### opt_metrics?

[`Metrics`](../utils/classes/Metrics.md)

A data structure of from the
describing all the required dimensions. If not provided, it will be
fetched from the host object.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:7482

---

### resizeContentHorizontal()

> **resizeContentHorizontal**(`hostMetrics`): `void`

Recalculate a horizontal scrollbar's location within its path and length.
This should be called when the contents of the workspace have changed.

#### Parameters

##### hostMetrics

[`Metrics`](../utils/classes/Metrics.md)

A data structure describing all
the required dimensions, possibly fetched from the host object.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:7512

---

### resizeContentVertical()

> **resizeContentVertical**(`hostMetrics`): `void`

Recalculate a vertical scrollbar's location within its path and length.
This should be called when the contents of the workspace have changed.

#### Parameters

##### hostMetrics

[`Metrics`](../utils/classes/Metrics.md)

A data structure describing all
the required dimensions, possibly fetched from the host object.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:7533

---

### resizeViewHorizontal()

> **resizeViewHorizontal**(`hostMetrics`): `void`

Recalculate a horizontal scrollbar's location on the screen and path length.
This should be called when the layout or size of the window has changed.

#### Parameters

##### hostMetrics

[`Metrics`](../utils/classes/Metrics.md)

A data structure describing all
the required dimensions, possibly fetched from the host object.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:7505

---

### resizeViewVertical()

> **resizeViewVertical**(`hostMetrics`): `void`

Recalculate a vertical scrollbar's location on the screen and path length.
This should be called when the layout or size of the window has changed.

#### Parameters

##### hostMetrics

[`Metrics`](../utils/classes/Metrics.md)

A data structure describing all
the required dimensions, possibly fetched from the host object.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:7526

---

### set()

> **set**(`value`, `updateMetrics`?): `void`

Set the scrollbar handle's position.

#### Parameters

##### value

`number`

The content displacement, relative to the view in
pixels.

##### updateMetrics?

`boolean`

Whether to update metrics on this set call.
Defaults to true.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:7620

---

### setContainerVisible()

> **setContainerVisible**(`visible`): `void`

Set whether the scrollbar's container is visible and update
display accordingly if visibility has changed.

#### Parameters

##### visible

`boolean`

Whether the container is visible

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:7552

---

### setHandlePosition()

> **setHandlePosition**(`newPosition`): `void`

Set the offset of the scrollbar's handle from the scrollbar's position, and
change the SVG attribute accordingly.

#### Parameters

##### newPosition

`number`

The new scrollbar handle offset in CSS pixels.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:7458

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

#### Defined in

node_modules/blockly/blockly.d.ts:7629

---

### setPosition()

> **setPosition**(`x`, `y`): `void`

Set the position of the scrollbar's SVG group in CSS pixels relative to the
scrollbar's origin. This sets the scrollbar's location within the workspace.

#### Parameters

##### x

`number`

The new x coordinate.

##### y

`number`

The new y coordinate.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:7475

---

### setVisible()

> **setVisible**(`visible`): `void`

Set whether the scrollbar is visible.
Only applies to non-paired scrollbars.

#### Parameters

##### visible

`boolean`

True if visible.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:7559

---

### updateDisplay\_()

> **updateDisplay\_**(): `void`

Update visibility of scrollbar based on whether it thinks it should
be visible and whether its containing workspace is visible.
We cannot rely on the containing workspace being hidden to hide us
because it is not necessarily our parent in the DOM.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:7567
