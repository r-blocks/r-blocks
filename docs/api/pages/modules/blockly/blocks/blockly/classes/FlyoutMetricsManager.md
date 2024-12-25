# Class: FlyoutMetricsManager

Calculates metrics for a flyout's workspace.
The metrics are mainly used to size scrollbars for the flyout.

## Param

The flyout's workspace.

## Param

The flyout.

## Alias

Blockly.FlyoutMetricsManager

## Extends

- [`MetricsManager`](MetricsManager.md)

## Constructors

### new FlyoutMetricsManager()

> **new FlyoutMetricsManager**(`workspace`, `flyout`): [`FlyoutMetricsManager`](FlyoutMetricsManager.md)

#### Parameters

##### workspace

`any`

##### flyout

`any`

#### Returns

[`FlyoutMetricsManager`](FlyoutMetricsManager.md)

#### Overrides

[`MetricsManager`](MetricsManager.md).[`constructor`](MetricsManager.md#constructors)

#### Defined in

node_modules/blockly/blockly.d.ts:23794

## Properties

### flyout\_

> `protected` **flyout\_**: [`IFlyout`](IFlyout.md)

The flyout that owns the workspace to calculate metrics for.

#### Defined in

node_modules/blockly/blockly.d.ts:23800

---

### workspace\_

> `protected` **workspace\_**: [`WorkspaceSvg`](WorkspaceSvg.md)

The workspace to calculate metrics for.

#### Inherited from

[`MetricsManager`](MetricsManager.md).[`workspace_`](MetricsManager.md#workspace_)

#### Defined in

node_modules/blockly/blockly.d.ts:7132

## Methods

### getAbsoluteMetrics()

> **getAbsoluteMetrics**(): [`AbsoluteMetrics`](../namespaces/MetricsManager/type-aliases/AbsoluteMetrics.md)

Gets the absolute left and absolute top in pixel coordinates.
This is where the visible workspace starts in relation to the SVG container.

#### Returns

[`AbsoluteMetrics`](../namespaces/MetricsManager/type-aliases/AbsoluteMetrics.md)

The absolute metrics for
the workspace.

#### Inherited from

[`MetricsManager`](MetricsManager.md).[`getAbsoluteMetrics`](MetricsManager.md#getabsolutemetrics)

#### Defined in

node_modules/blockly/blockly.d.ts:7178

---

### getComputedFixedEdges\_()

> `protected` **getComputedFixedEdges\_**(`opt_viewMetrics`?): [`FixedEdges`](../namespaces/MetricsManager/type-aliases/FixedEdges.md)

Computes the fixed edges of the scroll area.

#### Parameters

##### opt_viewMetrics?

[`ContainerRegion`](../namespaces/MetricsManager/type-aliases/ContainerRegion.md)

The view
metrics if they have been previously computed. Passing in null may cause
the view metrics to be computed again, if it is needed.

#### Returns

[`FixedEdges`](../namespaces/MetricsManager/type-aliases/FixedEdges.md)

The fixed edges of the scroll
area.

#### Inherited from

[`MetricsManager`](MetricsManager.md).[`getComputedFixedEdges_`](MetricsManager.md#getcomputedfixededges_)

#### Defined in

node_modules/blockly/blockly.d.ts:7216

---

### getContentMetrics()

> **getContentMetrics**(`opt_getWorkspaceCoordinates`): `object`

#### Parameters

##### opt_getWorkspaceCoordinates

`any`

#### Returns

`object`

##### height

> **height**: `number`

##### left

> **left**: `number`

##### top

> **top**: `number`

##### width

> **width**: `number`

#### Overrides

[`MetricsManager`](MetricsManager.md).[`getContentMetrics`](MetricsManager.md#getcontentmetrics)

#### Defined in

node_modules/blockly/blockly.d.ts:23812

---

### getDimensionsPx\_()

> `protected` **getDimensionsPx\_**(`elem`): [`Size`](../utils/classes/Size.md)

Gets the dimensions of the given workspace component, in pixel coordinates.

#### Parameters

##### elem

The element to get the
dimensions of, or null. It should be a toolbox or flyout, and should
implement getWidth() and getHeight().

[`IToolbox`](IToolbox.md) | [`IFlyout`](IFlyout.md)

#### Returns

[`Size`](../utils/classes/Size.md)

An object containing width and height
attributes, which will both be zero if elem did not exist.

#### Inherited from

[`MetricsManager`](MetricsManager.md).[`getDimensionsPx_`](MetricsManager.md#getdimensionspx_)

#### Defined in

node_modules/blockly/blockly.d.ts:7142

---

### getFlyoutMetrics()

> **getFlyoutMetrics**(`opt_own`?): [`ToolboxMetrics`](../namespaces/MetricsManager/type-aliases/ToolboxMetrics.md)

Gets the width and the height of the flyout on the workspace in pixel
coordinates. Returns 0 for the width and height if the workspace has a
category toolbox instead of a simple toolbox.

#### Parameters

##### opt_own?

`boolean`

Whether to only return the workspace's own flyout.

#### Returns

[`ToolboxMetrics`](../namespaces/MetricsManager/type-aliases/ToolboxMetrics.md)

The width and height of the
flyout.

#### Inherited from

[`MetricsManager`](MetricsManager.md).[`getFlyoutMetrics`](MetricsManager.md#getflyoutmetrics)

#### Defined in

node_modules/blockly/blockly.d.ts:7152

---

### getMetrics()

> **getMetrics**(): [`Metrics`](../utils/classes/Metrics.md)

Returns an object with all the metrics required to size scrollbars for a
top level workspace. The following properties are computed:
Coordinate system: pixel coordinates, -left, -up, +right, +down
.viewHeight: Height of the visible portion of the workspace.
.viewWidth: Width of the visible portion of the workspace.
.contentHeight: Height of the content.
.contentWidth: Width of the content.
.scrollHeight: Height of the scroll area.
.scrollWidth: Width of the scroll area.
.svgHeight: Height of the Blockly div (the view + the toolbox,
simple or otherwise),
.svgWidth: Width of the Blockly div (the view + the toolbox,
simple or otherwise),
.viewTop: Top-edge of the visible portion of the workspace, relative to
the workspace origin.
.viewLeft: Left-edge of the visible portion of the workspace, relative to
the workspace origin.
.contentTop: Top-edge of the content, relative to the workspace origin.
.contentLeft: Left-edge of the content relative to the workspace origin.
.scrollTop: Top-edge of the scroll area, relative to the workspace origin.
.scrollLeft: Left-edge of the scroll area relative to the workspace origin.
.absoluteTop: Top-edge of the visible portion of the workspace, relative
to the blocklyDiv.
.absoluteLeft: Left-edge of the visible portion of the workspace, relative
to the blocklyDiv.
.toolboxWidth: Width of the toolbox, if it exists. Otherwise zero.
.toolboxHeight: Height of the toolbox, if it exists. Otherwise zero.
.flyoutWidth: Width of the flyout if it is always open. Otherwise zero.
.flyoutHeight: Height of the flyout if it is always open. Otherwise zero.
.toolboxPosition: Top, bottom, left or right. Use TOOLBOX_AT constants to
compare.

#### Returns

[`Metrics`](../utils/classes/Metrics.md)

Contains size and position metrics of a top
level workspace.

#### Inherited from

[`MetricsManager`](MetricsManager.md).[`getMetrics`](MetricsManager.md#getmetrics)

#### Defined in

node_modules/blockly/blockly.d.ts:7288

---

### getPaddedContent\_()

> `protected` **getPaddedContent\_**(`viewMetrics`, `contentMetrics`): `object`

Returns the content area with added padding.

#### Parameters

##### viewMetrics

[`ContainerRegion`](../namespaces/MetricsManager/type-aliases/ContainerRegion.md)

The view
metrics.

##### contentMetrics

[`ContainerRegion`](../namespaces/MetricsManager/type-aliases/ContainerRegion.md)

The content
metrics.

#### Returns

`object`

The
padded content area.

##### bottom

> **bottom**: `number`

##### left

> **left**: `number`

##### right

> **right**: `number`

##### top

> **top**: `number`

#### Inherited from

[`MetricsManager`](MetricsManager.md).[`getPaddedContent_`](MetricsManager.md#getpaddedcontent_)

#### Defined in

node_modules/blockly/blockly.d.ts:7227

---

### getScrollMetrics()

> **getScrollMetrics**(`opt_getWorkspaceCoordinates`, `opt_viewMetrics`, `opt_contentMetrics`): `object`

#### Parameters

##### opt_getWorkspaceCoordinates

`any`

##### opt_viewMetrics

`any`

##### opt_contentMetrics

`any`

#### Returns

`object`

##### height

> **height**: `number`

##### left

> **left**: `number`

##### top

> **top**: `number`

##### width

> **width**: `number`

#### Overrides

[`MetricsManager`](MetricsManager.md).[`getScrollMetrics`](MetricsManager.md#getscrollmetrics)

#### Defined in

node_modules/blockly/blockly.d.ts:23821

---

### getSvgMetrics()

> **getSvgMetrics**(): [`Size`](../utils/classes/Size.md)

Gets the width and height of the workspace's parent SVG element in pixel
coordinates. This area includes the toolbox and the visible workspace area.

#### Returns

[`Size`](../utils/classes/Size.md)

The width and height of the workspace's parent
SVG element.

#### Inherited from

[`MetricsManager`](MetricsManager.md).[`getSvgMetrics`](MetricsManager.md#getsvgmetrics)

#### Defined in

node_modules/blockly/blockly.d.ts:7170

---

### getToolboxMetrics()

> **getToolboxMetrics**(): [`ToolboxMetrics`](../namespaces/MetricsManager/type-aliases/ToolboxMetrics.md)

Gets the width, height and position of the toolbox on the workspace in pixel
coordinates. Returns 0 for the width and height if the workspace has a simple
toolbox instead of a category toolbox. To get the width and height of a
simple toolbox

#### Returns

[`ToolboxMetrics`](../namespaces/MetricsManager/type-aliases/ToolboxMetrics.md)

The object with the width,
height and position of the toolbox.

#### See

[getFlyoutMetrics](MetricsManager.md#getflyoutmetrics).

#### Inherited from

[`MetricsManager`](MetricsManager.md).[`getToolboxMetrics`](MetricsManager.md#gettoolboxmetrics)

#### Defined in

node_modules/blockly/blockly.d.ts:7162

---

### getUiMetrics()

> **getUiMetrics**(): [`UiMetrics`](../namespaces/MetricsManager/type-aliases/UiMetrics.md)

Returns common metrics used by UI elements.

#### Returns

[`UiMetrics`](../namespaces/MetricsManager/type-aliases/UiMetrics.md)

The UI metrics.

#### Inherited from

[`MetricsManager`](MetricsManager.md).[`getUiMetrics`](MetricsManager.md#getuimetrics)

#### Defined in

node_modules/blockly/blockly.d.ts:7251

---

### getViewMetrics()

> **getViewMetrics**(`opt_getWorkspaceCoordinates`?): [`ContainerRegion`](../namespaces/MetricsManager/type-aliases/ContainerRegion.md)

Gets the metrics for the visible workspace in either pixel or workspace
coordinates. The visible workspace does not include the toolbox or flyout.

#### Parameters

##### opt_getWorkspaceCoordinates?

`boolean`

True to get the view metrics in
workspace coordinates, false to get them in pixel coordinates.

#### Returns

[`ContainerRegion`](../namespaces/MetricsManager/type-aliases/ContainerRegion.md)

The width, height, top and
left of the viewport in either workspace coordinates or pixel
coordinates.

#### Inherited from

[`MetricsManager`](MetricsManager.md).[`getViewMetrics`](MetricsManager.md#getviewmetrics)

#### Defined in

node_modules/blockly/blockly.d.ts:7189

---

### hasFixedEdges()

> **hasFixedEdges**(): `boolean`

Returns whether the scroll area has fixed edges.

#### Returns

`boolean`

Whether the scroll area has fixed edges.

#### Package

#### Inherited from

[`MetricsManager`](MetricsManager.md).[`hasFixedEdges`](MetricsManager.md#hasfixededges)

#### Defined in

node_modules/blockly/blockly.d.ts:7206
