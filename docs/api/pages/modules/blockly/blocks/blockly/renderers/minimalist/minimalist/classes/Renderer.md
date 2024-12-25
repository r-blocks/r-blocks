# Class: Renderer

The minimalist renderer.

## Param

The renderer name.

## Package

## Alias

Blockly.minimalist.Renderer

## Extends

- [`Renderer`](../../../common/block_rendering/classes/Renderer.md)

## Constructors

### new Renderer()

> **new Renderer**(`name`): [`Renderer`](Renderer.md)

#### Parameters

##### name

`any`

#### Returns

[`Renderer`](Renderer.md)

#### Overrides

[`Renderer`](../../../common/block_rendering/classes/Renderer.md).[`constructor`](../../../common/block_rendering/classes/Renderer.md#constructors)

#### Defined in

node_modules/blockly/blockly.d.ts:20709

## Properties

### name

> **name**: `string`

The renderer name.

#### Package

#### Inherited from

[`Renderer`](../../../common/block_rendering/classes/Renderer.md).[`name`](../../../common/block_rendering/classes/Renderer.md#name-1)

#### Defined in

node_modules/blockly/blockly.d.ts:9444

---

### overrides

> **overrides**: `any`

Rendering constant overrides, passed in through options.

#### Package

#### Inherited from

[`Renderer`](../../../common/block_rendering/classes/Renderer.md).[`overrides`](../../../common/block_rendering/classes/Renderer.md#overrides)

#### Defined in

node_modules/blockly/blockly.d.ts:9456

## Methods

### createDom()

> **createDom**(`svg`, `theme`): `void`

Create any DOM elements that this renderer needs.

#### Parameters

##### svg

`SVGElement`

The root of the workspace's SVG.

##### theme

[`Theme`](../../../../classes/Theme.md)

The workspace theme object.

#### Returns

`void`

#### Package

#### Inherited from

[`Renderer`](../../../common/block_rendering/classes/Renderer.md).[`createDom`](../../../common/block_rendering/classes/Renderer.md#createdom)

#### Defined in

node_modules/blockly/blockly.d.ts:9476

---

### dispose()

> **dispose**(): `void`

Dispose of this renderer.
Delete all DOM elements that this renderer and its constants created.

#### Returns

`void`

#### Package

#### Inherited from

[`Renderer`](../../../common/block_rendering/classes/Renderer.md).[`dispose`](../../../common/block_rendering/classes/Renderer.md#dispose)

#### Defined in

node_modules/blockly/blockly.d.ts:9489

---

### getClassName()

> **getClassName**(): `string`

Gets the class name that identifies this renderer.

#### Returns

`string`

The CSS class name.

#### Package

#### Inherited from

[`Renderer`](../../../common/block_rendering/classes/Renderer.md).[`getClassName`](../../../common/block_rendering/classes/Renderer.md#getclassname)

#### Defined in

node_modules/blockly/blockly.d.ts:9462

---

### getConnectionPreviewMethod()

> **getConnectionPreviewMethod**(`closest`, `local`, `topBlock`): `number`

Chooses a connection preview method based on the available connection, the
current dragged connection, and the block being dragged.

#### Parameters

##### closest

[`RenderedConnection`](../../../../classes/RenderedConnection.md)

The available connection.

##### local

[`RenderedConnection`](../../../../classes/RenderedConnection.md)

The connection currently being
dragged.

##### topBlock

[`BlockSvg`](../../../../classes/BlockSvg.md)

The block currently being dragged.

#### Returns

`number`

The preview type
to display.

#### Package

#### Inherited from

[`Renderer`](../../../common/block_rendering/classes/Renderer.md).[`getConnectionPreviewMethod`](../../../common/block_rendering/classes/Renderer.md#getconnectionpreviewmethod)

#### Defined in

node_modules/blockly/blockly.d.ts:9577

---

### getConstants()

> **getConstants**(): [`ConstantProvider`](../../../common/block_rendering/classes/ConstantProvider.md)

Get the current renderer's constant provider. We assume that when this is
called, the renderer has already been initialized.

#### Returns

[`ConstantProvider`](../../../common/block_rendering/classes/ConstantProvider.md)

The constant provider.

#### Package

#### Inherited from

[`Renderer`](../../../common/block_rendering/classes/Renderer.md).[`getConstants`](../../../common/block_rendering/classes/Renderer.md#getconstants)

#### Defined in

node_modules/blockly/blockly.d.ts:9543

---

### init()

> **init**(`theme`, `opt_rendererOverrides`?): `void`

Initialize the renderer.

#### Parameters

##### theme

[`Theme`](../../../../classes/Theme.md)

The workspace theme object.

##### opt_rendererOverrides?

`any`

Rendering constant overrides.

#### Returns

`void`

#### Package

#### Inherited from

[`Renderer`](../../../common/block_rendering/classes/Renderer.md).[`init`](../../../common/block_rendering/classes/Renderer.md#init)

#### Defined in

node_modules/blockly/blockly.d.ts:9469

---

### makeConstants\_()

> `protected` **makeConstants\_**(): [`ConstantProvider`](ConstantProvider.md)

Create a new instance of the renderer's constant provider.

#### Returns

[`ConstantProvider`](ConstantProvider.md)

The constant provider.

#### Overrides

[`Renderer`](../../../common/block_rendering/classes/Renderer.md).[`makeConstants_`](../../../common/block_rendering/classes/Renderer.md#makeconstants_)

#### Defined in

node_modules/blockly/blockly.d.ts:20716

---

### makeDebugger\_()

> `protected` **makeDebugger\_**(): [`Debug`](../../../common/block_rendering/classes/Debug.md)

Create a new instance of the renderer's debugger.

#### Returns

[`Debug`](../../../common/block_rendering/classes/Debug.md)

The renderer debugger.

#### Suppress

Debug renderer only included in playground.

#### Inherited from

[`Renderer`](../../../common/block_rendering/classes/Renderer.md).[`makeDebugger_`](../../../common/block_rendering/classes/Renderer.md#makedebugger_)

#### Defined in

node_modules/blockly/blockly.d.ts:9518

---

### makeDrawer\_()

> `protected` **makeDrawer\_**(`block`, `info`): [`Drawer`](Drawer.md)

Create a new instance of the renderer's drawer.

#### Parameters

##### block

[`BlockSvg`](../../../../classes/BlockSvg.md)

The block to render.

##### info

[`RenderInfo`](../../../common/block_rendering/classes/RenderInfo.md)

An object containing all
information needed to render this block.

#### Returns

[`Drawer`](Drawer.md)

The drawer.

#### Overrides

[`Renderer`](../../../common/block_rendering/classes/Renderer.md).[`makeDrawer_`](../../../common/block_rendering/classes/Renderer.md#makedrawer_)

#### Defined in

node_modules/blockly/blockly.d.ts:20734

---

### makeMarkerDrawer()

> **makeMarkerDrawer**(`workspace`, `marker`): [`MarkerSvg`](../../../common/block_rendering/classes/MarkerSvg.md)

Create a new instance of the renderer's marker drawer.

#### Parameters

##### workspace

[`WorkspaceSvg`](../../../../classes/WorkspaceSvg.md)

The workspace the marker belongs to.

##### marker

[`Marker`](../../../../classes/Marker.md)

The marker.

#### Returns

[`MarkerSvg`](../../../common/block_rendering/classes/MarkerSvg.md)

The object in charge of drawing
the marker.

#### Package

#### Inherited from

[`Renderer`](../../../common/block_rendering/classes/Renderer.md).[`makeMarkerDrawer`](../../../common/block_rendering/classes/Renderer.md#makemarkerdrawer)

#### Defined in

node_modules/blockly/blockly.d.ts:9527

---

### makePathObject()

> **makePathObject**(`root`, `style`): [`IPathObject`](../../../common/block_rendering/classes/IPathObject.md)

Create a new instance of a renderer path object.

#### Parameters

##### root

`SVGElement`

The root SVG element.

##### style

[`BlockStyle`](../../../../namespaces/Theme/type-aliases/BlockStyle.md)

The style object to use for
colouring.

#### Returns

[`IPathObject`](../../../common/block_rendering/classes/IPathObject.md)

The renderer path object.

#### Package

#### Inherited from

[`Renderer`](../../../common/block_rendering/classes/Renderer.md).[`makePathObject`](../../../common/block_rendering/classes/Renderer.md#makepathobject)

#### Defined in

node_modules/blockly/blockly.d.ts:9536

---

### makeRenderInfo\_()

> `protected` **makeRenderInfo\_**(`block`): [`RenderInfo`](RenderInfo.md)

Create a new instance of the renderer's render info object.

#### Parameters

##### block

[`BlockSvg`](../../../../classes/BlockSvg.md)

The block to measure.

#### Returns

[`RenderInfo`](RenderInfo.md)

The render info object.

#### Overrides

[`Renderer`](../../../common/block_rendering/classes/Renderer.md).[`makeRenderInfo_`](../../../common/block_rendering/classes/Renderer.md#makerenderinfo_)

#### Defined in

node_modules/blockly/blockly.d.ts:20724

---

### orphanCanConnectAtEnd()

> **orphanCanConnectAtEnd**(`topBlock`, `orphanBlock`, `localType`): `boolean`

Checks if an orphaned block can connect to the "end" of the topBlock's
block-clump. If the clump is a row the end is the last input. If the clump
is a stack, the end is the last next connection. If the clump is neither,
then this returns false.

#### Parameters

##### topBlock

[`BlockSvg`](../../../../classes/BlockSvg.md)

The top block of the block clump we want to try
and connect to.

##### orphanBlock

[`BlockSvg`](../../../../classes/BlockSvg.md)

The orphan block that wants to find
a home.

##### localType

`number`

The type of the connection being dragged.

#### Returns

`boolean`

Whether there is a home for the orphan or not.

#### Package

#### Inherited from

[`Renderer`](../../../common/block_rendering/classes/Renderer.md).[`orphanCanConnectAtEnd`](../../../common/block_rendering/classes/Renderer.md#orphancanconnectatend)

#### Defined in

node_modules/blockly/blockly.d.ts:9565

---

### refreshDom()

> **refreshDom**(`svg`, `theme`): `void`

Refresh the renderer after a theme change.

#### Parameters

##### svg

`SVGElement`

The root of the workspace's SVG.

##### theme

[`Theme`](../../../../classes/Theme.md)

The workspace theme object.

#### Returns

`void`

#### Package

#### Inherited from

[`Renderer`](../../../common/block_rendering/classes/Renderer.md).[`refreshDom`](../../../common/block_rendering/classes/Renderer.md#refreshdom)

#### Defined in

node_modules/blockly/blockly.d.ts:9483

---

### render()

> **render**(`block`): `void`

Render the block.

#### Parameters

##### block

[`BlockSvg`](../../../../classes/BlockSvg.md)

The block to render.

#### Returns

`void`

#### Package

#### Inherited from

[`Renderer`](../../../common/block_rendering/classes/Renderer.md).[`render`](../../../common/block_rendering/classes/Renderer.md#render)

#### Defined in

node_modules/blockly/blockly.d.ts:9583

---

### shouldHighlightConnection()

> **shouldHighlightConnection**(`_conn`): `boolean`

Determine whether or not to highlight a connection.

#### Parameters

##### \_conn

[`Connection`](../../../../classes/Connection.md)

The connection to determine whether or not
to highlight.

#### Returns

`boolean`

True if we should highlight the connection.

#### Package

#### Inherited from

[`Renderer`](../../../common/block_rendering/classes/Renderer.md).[`shouldHighlightConnection`](../../../common/block_rendering/classes/Renderer.md#shouldhighlightconnection)

#### Defined in

node_modules/blockly/blockly.d.ts:9551
