# Class: WorkspaceSvg

## Extends

- [`Workspace`](Workspace.md)

## Constructors

### new WorkspaceSvg()

> **new WorkspaceSvg**(`options`, `opt_blockDragSurface`?, `opt_wsDragSurface`?): [`WorkspaceSvg`](WorkspaceSvg.md)

Class for a workspace. This is an onscreen area with optional trashcan,
scrollbars, bubbles, and dragging.

#### Parameters

##### options

[`Options`](Options.md)

Dictionary of options.

##### opt_blockDragSurface?

[`BlockDragSurfaceSvg`](BlockDragSurfaceSvg.md)

Drag surface for
blocks.

##### opt_wsDragSurface?

[`WorkspaceDragSurfaceSvg`](WorkspaceDragSurfaceSvg.md)

Drag surface for
the workspace.

#### Returns

[`WorkspaceSvg`](WorkspaceSvg.md)

#### Implements

#### Alias

Blockly.WorkspaceSvg

#### Overrides

[`Workspace`](Workspace.md).[`constructor`](Workspace.md#constructors)

#### Defined in

node_modules/blockly/blockly.d.ts:13194

## Properties

### blockDragSurface\_

> **blockDragSurface\_**: [`BlockDragSurfaceSvg`](BlockDragSurfaceSvg.md)

#### Defined in

node_modules/blockly/blockly.d.ts:13222

---

### connectionChecker

> **connectionChecker**: [`IConnectionChecker`](IConnectionChecker.md)

An object that encapsulates logic for safety, type, and dragging checks.

#### Inherited from

[`Workspace`](Workspace.md).[`connectionChecker`](Workspace.md#connectionchecker)

#### Defined in

node_modules/blockly/blockly.d.ts:4593

---

### connectionDBList

> **connectionDBList**: [`ConnectionDB`](ConnectionDB.md)[]

Set of databases for rapid lookup of connection locations.

#### Overrides

[`Workspace`](Workspace.md).[`connectionDBList`](Workspace.md#connectiondblist)

#### Defined in

node_modules/blockly/blockly.d.ts:13221

---

### currentGesture\_

> **currentGesture\_**: [`TouchGesture`](TouchGesture.md)

#### Defined in

node_modules/blockly/blockly.d.ts:14013

---

### dragDeltaXY\_

> **dragDeltaXY\_**: [`Coordinate`](../utils/classes/Coordinate.md)

#### Defined in

node_modules/blockly/blockly.d.ts:13746

---

### flyout\_

> **flyout\_**: [`IFlyout`](IFlyout.md)

#### Defined in

node_modules/blockly/blockly.d.ts:13492

---

### getMetrics()

> **getMetrics**: () => [`Metrics`](../utils/classes/Metrics.md)

Method to get all the metrics that have to do with a workspace.

#### Returns

[`Metrics`](../utils/classes/Metrics.md)

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:13206

---

### horizontalLayout

> **horizontalLayout**: `boolean`

#### Inherited from

[`Workspace`](Workspace.md).[`horizontalLayout`](Workspace.md#horizontallayout)

#### Defined in

node_modules/blockly/blockly.d.ts:4586

---

### id

> **id**: `string`

#### Inherited from

[`Workspace`](Workspace.md).[`id`](Workspace.md#id)

#### Defined in

node_modules/blockly/blockly.d.ts:4580

---

### injectionDiv\_

> **injectionDiv\_**: `Element`

#### Defined in

node_modules/blockly/blockly.d.ts:13447

---

### inverseScreenCTM\_

> **inverseScreenCTM\_**: `DOMMatrix`

#### Defined in

node_modules/blockly/blockly.d.ts:13401

---

### inverseScreenCTMDirty\_

> **inverseScreenCTMDirty\_**: `boolean`

#### Defined in

node_modules/blockly/blockly.d.ts:13402

---

### isClearing

> **isClearing**: `boolean`

#### Inherited from

[`Workspace`](Workspace.md).[`isClearing`](Workspace.md#isclearing)

#### Defined in

node_modules/blockly/blockly.d.ts:4737

---

### isDragSurfaceActive\_

> **isDragSurfaceActive\_**: `boolean`

#### Defined in

node_modules/blockly/blockly.d.ts:13622

---

### isFlyout

> **isFlyout**: `boolean`

Is this workspace the surface for a flyout?

#### Defined in

node_modules/blockly/blockly.d.ts:14044

---

### isMutator

> **isMutator**: `boolean`

Is this workspace the surface for a mutator?

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:14050

---

### isVisible\_

> **isVisible\_**: `boolean`

#### Defined in

node_modules/blockly/blockly.d.ts:13649

---

### keyboardAccessibilityMode

> **keyboardAccessibilityMode**: `boolean`

True if keyboard accessibility mode is on, false otherwise.

#### Defined in

node_modules/blockly/blockly.d.ts:13287

---

### lastRecordedPageScroll\_

> **lastRecordedPageScroll\_**: [`Coordinate`](../utils/classes/Coordinate.md)

#### Defined in

node_modules/blockly/blockly.d.ts:13572

---

### MAX_UNDO

> **MAX_UNDO**: `number`

Maximum number of undo events in stack. `0` turns off undo, `Infinity` sets
it to unlimited.

#### Inherited from

[`Workspace`](Workspace.md).[`MAX_UNDO`](Workspace.md#max_undo)

#### Defined in

node_modules/blockly/blockly.d.ts:4961

---

### oldLeft\_

> **oldLeft\_**: `number`

#### Defined in

node_modules/blockly/blockly.d.ts:13606

---

### oldScale\_

> **oldScale\_**: `any`

#### Defined in

node_modules/blockly/blockly.d.ts:13604

---

### oldTop\_

> **oldTop\_**: `number`

#### Defined in

node_modules/blockly/blockly.d.ts:13605

---

### options

> **options**: [`Options`](Options.md)

#### Inherited from

[`Workspace`](Workspace.md).[`options`](Workspace.md#options)

#### Defined in

node_modules/blockly/blockly.d.ts:4582

---

### redoStack\_

> `protected` **redoStack\_**: [`events/events_abstract`](../events/events/events/events_abstract/index.md)[]

#### Inherited from

[`Workspace`](Workspace.md).[`redoStack_`](Workspace.md#redostack_)

#### Defined in

node_modules/blockly/blockly.d.ts:4623

---

### rendered

> **rendered**: `boolean`

Returns `true` if the workspace is visible and `false` if it's headless.

#### Overrides

[`Workspace`](Workspace.md).[`rendered`](Workspace.md#rendered)

#### Defined in

node_modules/blockly/blockly.d.ts:13491

---

### resizeHandlerWrapper\_

> **resizeHandlerWrapper\_**: `any`[][]

#### Defined in

node_modules/blockly/blockly.d.ts:13460

---

### resizesEnabled\_

> **resizesEnabled\_**: `boolean`

#### Defined in

node_modules/blockly/blockly.d.ts:13951

---

### RTL

> **RTL**: `boolean`

#### Inherited from

[`Workspace`](Workspace.md).[`RTL`](Workspace.md#rtl)

#### Defined in

node_modules/blockly/blockly.d.ts:4584

---

### scale

> **scale**: `number`

#### Defined in

node_modules/blockly/blockly.d.ts:13877

---

### scrollbar

> **scrollbar**: [`ScrollbarPair`](ScrollbarPair.md)

#### Defined in

node_modules/blockly/blockly.d.ts:13494

---

### scrollX

> **scrollX**: `number`

#### Defined in

node_modules/blockly/blockly.d.ts:13839

---

### scrollY

> **scrollY**: `number`

#### Defined in

node_modules/blockly/blockly.d.ts:13840

---

### setMetrics()

> **setMetrics**: (`arg0`) => `void`

Translates the workspace.

#### Parameters

##### arg0

###### x

`number`

###### y

`number`

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:13212

---

### startScrollX

> **startScrollX**: `number`

Horizontal scroll value when scrolling started in pixel units.

#### Defined in

node_modules/blockly/blockly.d.ts:14055

---

### startScrollY

> **startScrollY**: `number`

Vertical scroll value when scrolling started in pixel units.

#### Defined in

node_modules/blockly/blockly.d.ts:14060

---

### svgBackground\_

> **svgBackground\_**: `SVGElement`

#### Defined in

node_modules/blockly/blockly.d.ts:13479

---

### svgBlockCanvas\_

> **svgBlockCanvas\_**: `SVGElement`

#### Defined in

node_modules/blockly/blockly.d.ts:13481

---

### svgBubbleCanvas\_

> **svgBubbleCanvas\_**: `SVGElement`

#### Defined in

node_modules/blockly/blockly.d.ts:13483

---

### svgGroup\_

> **svgGroup\_**: `SVGElement`

<g class="blocklyWorkspace">
  <rect class="blocklyMainBackground" height="100%" width="100%"></rect>
  [Trashcan and/or flyout may go here]
  <g class="blocklyBlockCanvas"></g>
  <g class="blocklyBubbleCanvas"></g>
</g>

#### Defined in

node_modules/blockly/blockly.d.ts:13477

---

### targetWorkspace

> **targetWorkspace**: [`WorkspaceSvg`](WorkspaceSvg.md)

In a flyout, the target workspace where blocks should be placed after a drag.
Otherwise null.

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:14067

---

### themeManager\_

> `protected` **themeManager\_**: [`ThemeManager`](ThemeManager.md)

Object in charge of storing and updating the workspace theme.

#### Defined in

node_modules/blockly/blockly.d.ts:13270

---

### toolbox\_

> **toolbox\_**: [`IToolbox`](IToolbox.md)

#### Defined in

node_modules/blockly/blockly.d.ts:13484

---

### toolboxPosition

> **toolboxPosition**: `number`

#### Inherited from

[`Workspace`](Workspace.md).[`toolboxPosition`](Workspace.md#toolboxposition)

#### Defined in

node_modules/blockly/blockly.d.ts:4588

---

### trashcan

> **trashcan**: [`Trashcan`](Trashcan.md)

#### Defined in

node_modules/blockly/blockly.d.ts:13493

---

### undoStack\_

> `protected` **undoStack\_**: [`events/events_abstract`](../events/events/events/events_abstract/index.md)[]

#### Inherited from

[`Workspace`](Workspace.md).[`undoStack_`](Workspace.md#undostack_)

#### Defined in

node_modules/blockly/blockly.d.ts:4618

---

### useWorkspaceDragSurface\_

> **useWorkspaceDragSurface\_**: `boolean`

#### Defined in

node_modules/blockly/blockly.d.ts:13224

---

### workspaceDragSurface\_

> **workspaceDragSurface\_**: [`WorkspaceDragSurfaceSvg`](WorkspaceDragSurfaceSvg.md)

#### Defined in

node_modules/blockly/blockly.d.ts:13223

---

### zoomControls\_

> **zoomControls\_**: [`ZoomControls`](ZoomControls.md)

#### Defined in

node_modules/blockly/blockly.d.ts:13495

## Methods

### addChangeListener()

> **addChangeListener**(`func`): `Function`

When something in this workspace changes, call a function.
Note that there may be a few recent events already on the stack. Thus the
new change listener might be called with events that occurred a few
milliseconds before the change listener was added.

#### Parameters

##### func

`Function`

Function to call.

#### Returns

`Function`

Obsolete return value, ignore.

#### Inherited from

[`Workspace`](Workspace.md).[`addChangeListener`](Workspace.md#addchangelistener)

#### Defined in

node_modules/blockly/blockly.d.ts:4882

---

### addFlyout()

> **addFlyout**(`tagName`): `Element`

Add a flyout element in an element with the given tag name.

#### Parameters

##### tagName

What type of tag the
flyout belongs in.

`string` | [`Svg`](../utils/namespaces/Svg/index.md)\<`SVGSVGElement`\> | [`Svg`](../utils/namespaces/Svg/index.md)\<`SVGGElement`\>

#### Returns

`Element`

The element containing the flyout DOM.

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:13529

---

### addTopBlock()

> **addTopBlock**(`block`): `void`

Adds a block to the list of top blocks.

#### Parameters

##### block

[`Block`](Block.md)

Block to add.

#### Returns

`void`

#### Overrides

[`Workspace`](Workspace.md).[`addTopBlock`](Workspace.md#addtopblock)

#### Defined in

node_modules/blockly/blockly.d.ts:13912

---

### addTopBoundedElement()

> **addTopBoundedElement**(`element`): `void`

Adds a bounded element to the list of top bounded elements.

#### Parameters

##### element

[`IBoundedElement`](IBoundedElement.md)

Bounded element to add.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:13932

---

### addTopComment()

> **addTopComment**(`comment`): `void`

Adds a comment to the list of top comments.

#### Parameters

##### comment

[`WorkspaceComment`](WorkspaceComment.md)

comment to add.

#### Returns

`void`

#### Overrides

[`Workspace`](Workspace.md).[`addTopComment`](Workspace.md#addtopcomment)

#### Defined in

node_modules/blockly/blockly.d.ts:13922

---

### addTrashcan()

> **addTrashcan**(): `void`

Add a trashcan.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:13514

---

### addTypedBlock()

> **addTypedBlock**(`block`): `void`

Add a block to the list of blocks keyed by type.

#### Parameters

##### block

[`Block`](Block.md)

Block to add.

#### Returns

`void`

#### Inherited from

[`Workspace`](Workspace.md).[`addTypedBlock`](Workspace.md#addtypedblock)

#### Defined in

node_modules/blockly/blockly.d.ts:4692

---

### addZoomControls()

> **addZoomControls**(): `void`

Add zoom controls.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:13519

---

### allInputsFilled()

> **allInputsFilled**(`opt_shadowBlocksAreFilled`?): `boolean`

Checks whether all value and statement inputs in the workspace are filled
with blocks.

#### Parameters

##### opt_shadowBlocksAreFilled?

`boolean`

An optional argument controlling
whether shadow blocks are counted as filled. Defaults to true.

#### Returns

`boolean`

True if all inputs are filled, false otherwise.

#### Inherited from

[`Workspace`](Workspace.md).[`allInputsFilled`](Workspace.md#allinputsfilled)

#### Defined in

node_modules/blockly/blockly.d.ts:4927

---

### beginCanvasTransition()

> **beginCanvasTransition**(): `void`

Add a transition class to the block and bubble canvas, to animate any
transform changes.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:13855

---

### cancelCurrentGesture()

> **cancelCurrentGesture**(): `void`

Cancel the current gesture, if one exists.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:14023

---

### centerOnBlock()

> **centerOnBlock**(`id`): `void`

Scroll the workspace to center on the given block. If the block has other
blocks stacked below it, the workspace will be centered on the stack.

#### Parameters

##### id

`string`

ID of block center on.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:13871

---

### cleanUp()

> **cleanUp**(): `void`

Clean up the workspace by ordering all the blocks in a column.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:13803

---

### clear()

> **clear**(): `void`

Dispose of all blocks in workspace, with an optimization to prevent resizes.

#### Returns

`void`

#### Overrides

[`Workspace`](Workspace.md).[`clear`](Workspace.md#clear)

#### Defined in

node_modules/blockly/blockly.d.ts:13955

---

### clearGesture()

> **clearGesture**(): `void`

Clear the reference to the current gesture.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:14018

---

### clearUndo()

> **clearUndo**(): `void`

Clear the undo/redo stacks.

#### Returns

`void`

#### Inherited from

[`Workspace`](Workspace.md).[`clearUndo`](Workspace.md#clearundo)

#### Defined in

node_modules/blockly/blockly.d.ts:4873

---

### createDom()

> **createDom**(`opt_backgroundClass`?): `Element`

Create the workspace DOM elements.

#### Parameters

##### opt_backgroundClass?

`string`

Either 'blocklyMainBackground' or
'blocklyMutatorBackground'.

#### Returns

`Element`

The workspace's SVG group.

#### Defined in

node_modules/blockly/blockly.d.ts:13467

---

### createPotentialVariableMap()

> **createPotentialVariableMap**(): `void`

Create and store the potential variable map for this workspace.

#### Returns

`void`

#### Package

#### Inherited from

[`Workspace`](Workspace.md).[`createPotentialVariableMap`](Workspace.md#createpotentialvariablemap)

#### Defined in

node_modules/blockly/blockly.d.ts:4939

---

### createVariable()

> **createVariable**(`name`, `opt_type`?, `opt_id`?): [`VariableModel`](VariableModel.md)

Create a new variable with the given name. Update the flyout to show the
new variable immediately.

#### Parameters

##### name

`string`

The new variable's name.

##### opt_type?

`string`

The type of the variable like 'int' or 'string'.
Does not need to be unique. Field_variable can filter variables based on
their type. This will default to '' which is a specific type.

##### opt_id?

`string`

The unique ID of the variable. This will default to
a UUID.

#### Returns

[`VariableModel`](VariableModel.md)

The newly created variable.

#### Overrides

[`Workspace`](Workspace.md).[`createVariable`](Workspace.md#createvariable)

#### Defined in

node_modules/blockly/blockly.d.ts:13717

---

### deleteVariableById()

> **deleteVariableById**(`id`): `void`

Delete a variable by the passed in ID. Update the flyout to show
immediately that the variable is deleted.

#### Parameters

##### id

`string`

ID of variable to delete.

#### Returns

`void`

#### Overrides

[`Workspace`](Workspace.md).[`deleteVariableById`](Workspace.md#deletevariablebyid)

#### Defined in

node_modules/blockly/blockly.d.ts:13705

---

### dispose()

> **dispose**(): `void`

Dispose of this workspace.
Unlink from all DOM elements to prevent memory leaks.

#### Returns

`void`

#### Suppress

#### Overrides

[`Workspace`](Workspace.md).[`dispose`](Workspace.md#dispose)

#### Defined in

node_modules/blockly/blockly.d.ts:13490

---

### endCanvasTransition()

> **endCanvasTransition**(): `void`

Remove transition class from the block and bubble canvas.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:13860

---

### fireChangeListener()

> **fireChangeListener**(`event`): `void`

Fire a change event.

#### Parameters

##### event

[`events/events_abstract`](../events/events/events/events_abstract/index.md)

Event to fire.

#### Returns

`void`

#### Inherited from

[`Workspace`](Workspace.md).[`fireChangeListener`](Workspace.md#firechangelistener)

#### Defined in

node_modules/blockly/blockly.d.ts:4892

---

### getAllBlocks()

> **getAllBlocks**(`ordered`): [`Block`](Block.md)[]

Find all blocks in workspace. Blocks are optionally sorted
by position; top to bottom (with slight LTR or RTL bias).

#### Parameters

##### ordered

`boolean`

Sort the list if true.

#### Returns

[`Block`](Block.md)[]

Array of blocks.

#### Inherited from

[`Workspace`](Workspace.md).[`getAllBlocks`](Workspace.md#getallblocks)

#### Defined in

node_modules/blockly/blockly.d.ts:4732

---

### getAllVariableNames()

> **getAllVariableNames**(): `string`[]

Returns all variable names of all types.

#### Returns

`string`[]

List of all variable names of all types.

#### Inherited from

[`Workspace`](Workspace.md).[`getAllVariableNames`](Workspace.md#getallvariablenames)

#### Defined in

node_modules/blockly/blockly.d.ts:4806

---

### getAllVariables()

> **getAllVariables**(): [`VariableModel`](VariableModel.md)[]

Return all variables of all types.

#### Returns

[`VariableModel`](VariableModel.md)[]

List of variable models.

#### Inherited from

[`Workspace`](Workspace.md).[`getAllVariables`](Workspace.md#getallvariables)

#### Defined in

node_modules/blockly/blockly.d.ts:4801

---

### getAudioManager()

> **getAudioManager**(): [`WorkspaceAudio`](WorkspaceAudio.md)

Get the audio manager for this workspace.

#### Returns

[`WorkspaceAudio`](WorkspaceAudio.md)

The audio manager for this workspace.

#### Defined in

node_modules/blockly/blockly.d.ts:14028

---

### getBlockById()

> **getBlockById**(`id`): [`BlockSvg`](BlockSvg.md)

Find the block on this workspace with the specified ID.

#### Parameters

##### id

`string`

ID of block to find.

#### Returns

[`BlockSvg`](BlockSvg.md)

The sought after block, or null if not found.

#### Overrides

[`Workspace`](Workspace.md).[`getBlockById`](Workspace.md#getblockbyid)

#### Defined in

node_modules/blockly/blockly.d.ts:13899

---

### getBlockCanvas()

> **getBlockCanvas**(): `SVGElement`

Get the SVG block canvas for the workspace.

#### Returns

`SVGElement`

The SVG group for the workspace.

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:13453

---

### getBlockDragSurface()

> **getBlockDragSurface**(): [`BlockDragSurfaceSvg`](BlockDragSurfaceSvg.md)

Gets the drag surface blocks are moved to when a drag is started.

#### Returns

[`BlockDragSurfaceSvg`](BlockDragSurfaceSvg.md)

This workspace's block drag surface,
if one is in use.

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:13636

---

### getBlocksBoundingBox()

> **getBlocksBoundingBox**(): [`Rect`](../utils/classes/Rect.md)

Calculate the bounding box for the blocks on the workspace.
Coordinate system: workspace coordinates.

#### Returns

[`Rect`](../utils/classes/Rect.md)

Contains the position and size of the
bounding box containing the blocks on the workspace.

#### Defined in

node_modules/blockly/blockly.d.ts:13799

---

### getBlocksByType()

> **getBlocksByType**(`type`, `ordered`): [`Block`](Block.md)[]

Finds the blocks with the associated type and returns them. Blocks are
optionally sorted by position; top to bottom (with slight LTR or RTL bias).

#### Parameters

##### type

`string`

The type of block to search for.

##### ordered

`boolean`

Sort the list if true.

#### Returns

[`Block`](Block.md)[]

The blocks of the given type.

#### Inherited from

[`Workspace`](Workspace.md).[`getBlocksByType`](Workspace.md#getblocksbytype)

#### Defined in

node_modules/blockly/blockly.d.ts:4705

---

### getBubbleCanvas()

> **getBubbleCanvas**(): `SVGGElement`

Get the SVG element that forms the bubble surface.

#### Returns

`SVGGElement`

SVG group element.

#### Defined in

node_modules/blockly/blockly.d.ts:13590

---

### getButtonCallback()

> **getButtonCallback**(`key`): (`arg0`) => `any`

Get the callback function associated with a given key, for clicks on buttons
and labels in the flyout.

#### Parameters

##### key

`string`

The name to use to look up the function.

#### Returns

`Function`

The function corresponding to the
given key for this workspace; null if no callback is registered.

##### Parameters

###### arg0

[`FlyoutButton`](FlyoutButton.md)

##### Returns

`any`

#### Defined in

node_modules/blockly/blockly.d.ts:13975

---

### getCachedParentSvgSize()

> **getCachedParentSvgSize**(): [`Size`](../utils/classes/Size.md)

Gets the size of the workspace's parent SVG element.

#### Returns

[`Size`](../utils/classes/Size.md)

The cached width and height of the workspace's
parent SVG element.

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:13428

---

### getCanvas()

> **getCanvas**(): `SVGGElement`

Get the SVG element that forms the drawing surface.

#### Returns

`SVGGElement`

SVG group element.

#### Defined in

node_modules/blockly/blockly.d.ts:13577

---

### getCommentById()

> **getCommentById**(`id`): [`WorkspaceComment`](WorkspaceComment.md)

Find the comment on this workspace with the specified ID.

#### Parameters

##### id

`string`

ID of comment to find.

#### Returns

[`WorkspaceComment`](WorkspaceComment.md)

The sought after comment, or null if not
found.

#### Package

#### Inherited from

[`Workspace`](Workspace.md).[`getCommentById`](Workspace.md#getcommentbyid)

#### Defined in

node_modules/blockly/blockly.d.ts:4919

---

### getComponentManager()

> **getComponentManager**(): [`ComponentManager`](ComponentManager.md)

Gets the component manager for this workspace.

#### Returns

[`ComponentManager`](ComponentManager.md)

The component manager.

#### Defined in

node_modules/blockly/blockly.d.ts:13333

---

### getCursor()

> **getCursor**(): [`Cursor`](Cursor.md)

The cursor for this workspace.

#### Returns

[`Cursor`](Cursor.md)

The cursor for the workspace.

#### Defined in

node_modules/blockly/blockly.d.ts:13360

---

### getDragTarget()

> **getDragTarget**(`e`): [`IDragTarget`](IDragTarget.md)

Returns the drag target the mouse event is over.

#### Parameters

##### e

`Event`

Mouse move event.

#### Returns

[`IDragTarget`](IDragTarget.md)

Null if not over a drag target, or the drag
target the event is over.

#### Defined in

node_modules/blockly/blockly.d.ts:13733

---

### getFlyout()

> **getFlyout**(`opt_own`?): [`IFlyout`](IFlyout.md)

Getter for the flyout associated with this workspace. This flyout may be
owned by either the toolbox or the workspace, depending on toolbox
configuration. It will be null if there is no flyout.

#### Parameters

##### opt_own?

`boolean`

Whether to only return the workspace's own flyout.

#### Returns

[`IFlyout`](IFlyout.md)

The flyout on this workspace.

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:13538

---

### getGesture()

> **getGesture**(`e`): [`TouchGesture`](TouchGesture.md)

Look up the gesture that is tracking this touch stream on this workspace.
May create a new gesture.

#### Parameters

##### e

`Event`

Mouse event or touch event.

#### Returns

[`TouchGesture`](TouchGesture.md)

The gesture that is tracking this touch
stream, or null if no valid gesture exists.

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:14012

---

### getGrid()

> **getGrid**(): [`Grid`](Grid.md)

Get the grid object for this workspace, or null if there is none.

#### Returns

[`Grid`](Grid.md)

The grid object for this workspace.

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:14034

---

### getInjectionDiv()

> **getInjectionDiv**(): `Element`

Return the injection div that is a parent of this workspace.
Walks the DOM the first time it's called, then returns a cached value.
Note: We assume this is only called after the workspace has been injected
into the DOM.

#### Returns

`Element`

The first parent div with 'injectionDiv' in the name.

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:13446

---

### getInverseScreenCTM()

> **getInverseScreenCTM**(): `DOMMatrix`

Getter for the inverted screen CTM.

#### Returns

`DOMMatrix`

The matrix to use in mouseToSvg

#### Defined in

node_modules/blockly/blockly.d.ts:13400

---

### getMarker()

> **getMarker**(`id`): [`Marker`](Marker.md)

Get the marker with the given ID.

#### Parameters

##### id

`string`

The ID of the marker.

#### Returns

[`Marker`](Marker.md)

The marker with the given ID or null if no marker
with the given ID exists.

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:13355

---

### getMarkerManager()

> **getMarkerManager**(): [`MarkerManager`](MarkerManager.md)

Get the marker manager for this workspace.

#### Returns

[`MarkerManager`](MarkerManager.md)

The marker manager.

#### Defined in

node_modules/blockly/blockly.d.ts:13315

---

### getMetricsManager()

> **getMetricsManager**(): [`IMetricsManager`](IMetricsManager.md)

Gets the metrics manager for this workspace.

#### Returns

[`IMetricsManager`](IMetricsManager.md)

The metrics manager.

#### Defined in

node_modules/blockly/blockly.d.ts:13321

---

### getOriginOffsetInPixels()

> **getOriginOffsetInPixels**(): [`Coordinate`](../utils/classes/Coordinate.md)

Return the position of the workspace origin relative to the injection div
origin in pixels.
The workspace origin is where a block would render at position (0, 0).
It is not the upper left corner of the workspace SVG.

#### Returns

[`Coordinate`](../utils/classes/Coordinate.md)

Offset in pixels.

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:13437

---

### getParentSvg()

> **getParentSvg**(): `SVGElement`

Get the SVG element that contains this workspace.
Note: We assume this is only called after the workspace has been injected
into the DOM.

#### Returns

`SVGElement`

SVG element.

#### Defined in

node_modules/blockly/blockly.d.ts:13597

---

### getPotentialVariableMap()

> **getPotentialVariableMap**(): [`VariableMap`](VariableMap.md)

Return the variable map that contains "potential" variables.
These exist in the flyout but not in the workspace.

#### Returns

[`VariableMap`](VariableMap.md)

The potential variable map.

#### Package

#### Inherited from

[`Workspace`](Workspace.md).[`getPotentialVariableMap`](Workspace.md#getpotentialvariablemap)

#### Defined in

node_modules/blockly/blockly.d.ts:4934

---

### getRedoStack()

> **getRedoStack**(): [`events/events_abstract`](../events/events/events/events_abstract/index.md)[]

Gets the redo stack for workplace.

#### Returns

[`events/events_abstract`](../events/events/events/events_abstract/index.md)[]

redo stack

#### Package

#### Inherited from

[`Workspace`](Workspace.md).[`getRedoStack`](Workspace.md#getredostack)

#### Defined in

node_modules/blockly/blockly.d.ts:4864

---

### getRenderer()

> **getRenderer**(): [`Renderer`](../renderers/common/block_rendering/classes/Renderer.md)

Get the block renderer attached to this workspace.

#### Returns

[`Renderer`](../renderers/common/block_rendering/classes/Renderer.md)

The renderer attached to this
workspace.

#### Defined in

node_modules/blockly/blockly.d.ts:13366

---

### getScale()

> **getScale**(): `number`

Get the workspace's zoom factor. If the workspace has a parent, we call into
the parent to get the workspace scale.

#### Returns

`number`

The workspace zoom factor. Units: (pixels / workspaceUnit).

#### Defined in

node_modules/blockly/blockly.d.ts:13883

---

### getSvgXY()

> **getSvgXY**(`element`): [`Coordinate`](../utils/classes/Coordinate.md)

Return the absolute coordinates of the top-left corner of this element,
scales that after canvas SVG element, if it's a descendant.
The origin (0,0) is the top-left corner of the Blockly SVG.

#### Parameters

##### element

`SVGElement`

SVG element to find the coordinates of.

#### Returns

[`Coordinate`](../utils/classes/Coordinate.md)

Object with .x and .y properties.

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:13421

---

### getTheme()

> **getTheme**(): [`Theme`](Theme.md)

Get the workspace theme object.

#### Returns

[`Theme`](Theme.md)

The workspace theme object.

#### Defined in

node_modules/blockly/blockly.d.ts:13377

---

### getThemeManager()

> **getThemeManager**(): [`ThemeManager`](ThemeManager.md)

Get the theme manager for this workspace.

#### Returns

[`ThemeManager`](ThemeManager.md)

The theme manager for this workspace.

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:13372

---

### getToolbox()

> **getToolbox**(): [`IToolbox`](IToolbox.md)

Getter for the toolbox associated with this workspace, if one exists.

#### Returns

[`IToolbox`](IToolbox.md)

The toolbox on this workspace.

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:13544

---

### getToolboxCategoryCallback()

> **getToolboxCategoryCallback**(`key`): (`arg0`) => `any`

Get the callback function associated with a given key, for populating
custom toolbox categories in this workspace.

#### Parameters

##### key

`string`

The name to use to look up the function.

#### Returns

`Function`

The function
corresponding to the given key for this workspace, or null if no function
is registered.

##### Parameters

###### arg0

[`Workspace`](Workspace.md)

##### Returns

`any`

#### Defined in

node_modules/blockly/blockly.d.ts:13998

---

### getTopBlocks()

> **getTopBlocks**(`ordered`): [`BlockSvg`](BlockSvg.md)[]

Finds the top-level blocks and returns them. Blocks are optionally sorted
by position; top to bottom (with slight LTR or RTL bias).

#### Parameters

##### ordered

`boolean`

Sort the list if true.

#### Returns

[`BlockSvg`](BlockSvg.md)[]

The top-level block objects.

#### Overrides

[`Workspace`](Workspace.md).[`getTopBlocks`](Workspace.md#gettopblocks)

#### Defined in

node_modules/blockly/blockly.d.ts:13907

---

### getTopBoundedElements()

> **getTopBoundedElements**(): [`IBoundedElement`](IBoundedElement.md)[]

Finds the top-level bounded elements and returns them.

#### Returns

[`IBoundedElement`](IBoundedElement.md)[]

The top-level bounded elements.

#### Defined in

node_modules/blockly/blockly.d.ts:13942

---

### getTopComments()

> **getTopComments**(`ordered`): [`WorkspaceComment`](WorkspaceComment.md)[]

Finds the top-level comments and returns them. Comments are optionally
sorted by position; top to bottom (with slight LTR or RTL bias).

#### Parameters

##### ordered

`boolean`

Sort the list if true.

#### Returns

[`WorkspaceComment`](WorkspaceComment.md)[]

The top-level comment objects.

#### Package

#### Inherited from

[`Workspace`](Workspace.md).[`getTopComments`](Workspace.md#gettopcomments)

#### Defined in

node_modules/blockly/blockly.d.ts:4725

---

### getUndoStack()

> **getUndoStack**(): [`events/events_abstract`](../events/events/events/events_abstract/index.md)[]

Gets the undo stack for workplace.

#### Returns

[`events/events_abstract`](../events/events/events/events_abstract/index.md)[]

undo stack

#### Package

#### Inherited from

[`Workspace`](Workspace.md).[`getUndoStack`](Workspace.md#getundostack)

#### Defined in

node_modules/blockly/blockly.d.ts:4858

---

### getVariable()

> **getVariable**(`name`, `opt_type`?): [`VariableModel`](VariableModel.md)

Find the variable by the given name and return it. Return null if not found.

#### Parameters

##### name

`string`

The name to check for.

##### opt_type?

`string`

The type of the variable. If not provided it
defaults to the empty string, which is a specific type.

#### Returns

[`VariableModel`](VariableModel.md)

The variable with the given name.

#### Inherited from

[`Workspace`](Workspace.md).[`getVariable`](Workspace.md#getvariable)

#### Defined in

node_modules/blockly/blockly.d.ts:4776

---

### getVariableById()

> **getVariableById**(`id`): [`VariableModel`](VariableModel.md)

Find the variable by the given ID and return it. Return null if not found.

#### Parameters

##### id

`string`

The ID to check for.

#### Returns

[`VariableModel`](VariableModel.md)

The variable with the given ID.

#### Inherited from

[`Workspace`](Workspace.md).[`getVariableById`](Workspace.md#getvariablebyid)

#### Defined in

node_modules/blockly/blockly.d.ts:4782

---

### getVariableMap()

> **getVariableMap**(): [`VariableMap`](VariableMap.md)

Return the map of all variables on the workspace.

#### Returns

[`VariableMap`](VariableMap.md)

The variable map.

#### Inherited from

[`Workspace`](Workspace.md).[`getVariableMap`](Workspace.md#getvariablemap)

#### Defined in

node_modules/blockly/blockly.d.ts:4944

---

### getVariablesOfType()

> **getVariablesOfType**(`type`): [`VariableModel`](VariableModel.md)[]

Find the variable with the specified type. If type is null, return list of
variables with empty string type.

#### Parameters

##### type

`string`

Type of the variables to find.

#### Returns

[`VariableModel`](VariableModel.md)[]

The sought after variables of the
passed in type. An empty array if none are found.

#### Inherited from

[`Workspace`](Workspace.md).[`getVariablesOfType`](Workspace.md#getvariablesoftype)

#### Defined in

node_modules/blockly/blockly.d.ts:4790

---

### getVariableTypes()

> **getVariableTypes**(): `string`[]

Return all variable types.

#### Returns

`string`[]

List of variable types.

#### Package

#### Inherited from

[`Workspace`](Workspace.md).[`getVariableTypes`](Workspace.md#getvariabletypes)

#### Defined in

node_modules/blockly/blockly.d.ts:4796

---

### getVariableUsesById()

> **getVariableUsesById**(`id`): [`Block`](Block.md)[]

Find all the uses of the given variable, which is identified by ID.

#### Parameters

##### id

`string`

ID of the variable to find.

#### Returns

[`Block`](Block.md)[]

Array of block usages.

#### Inherited from

[`Workspace`](Workspace.md).[`getVariableUsesById`](Workspace.md#getvariableusesbyid)

#### Defined in

node_modules/blockly/blockly.d.ts:4762

---

### getWidth()

> **getWidth**(): `number`

Returns the horizontal offset of the workspace.
Intended for LTR/RTL compatibility in XML.

#### Returns

`number`

Width.

#### Overrides

[`Workspace`](Workspace.md).[`getWidth`](Workspace.md#getwidth)

#### Defined in

node_modules/blockly/blockly.d.ts:13642

---

### hasBlockLimits()

> **hasBlockLimits**(): `boolean`

Checks if the workspace has any limits on the maximum number of blocks,
or the maximum number of blocks of specific types.

#### Returns

`boolean`

True if it has block limits, false otherwise.

#### Inherited from

[`Workspace`](Workspace.md).[`hasBlockLimits`](Workspace.md#hasblocklimits)

#### Defined in

node_modules/blockly/blockly.d.ts:4852

---

### hideChaff()

> **hideChaff**(`opt_onlyClosePopups`?): `void`

Close tooltips, context menus, dropdown selections, etc.

#### Parameters

##### opt_onlyClosePopups?

`boolean`

Whether only popups should be closed.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:14039

---

### highlightBlock()

> **highlightBlock**(`id`, `opt_state`?): `void`

Highlight or unhighlight a block in the workspace. Block highlighting is
often used to visually mark blocks currently being executed.

#### Parameters

##### id

`string`

ID of block to highlight/unhighlight,
or null for no block (used to unhighlight all blocks).

##### opt_state?

`boolean`

If undefined, highlight specified block and
automatically unhighlight all others. If true or false, manually
highlight/unhighlight the specified block.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:13663

---

### isCapacityAvailable()

> **isCapacityAvailable**(`typeCountsMap`): `boolean`

Check if there is remaining capacity for blocks of the given counts to be
created. If the total number of blocks represented by the map is more than
the total remaining capacity, it returns false. If a type count is more
than the remaining capacity for that type, it returns false.

#### Parameters

##### typeCountsMap

`any`

A map of types to counts (usually representing
blocks to be created).

#### Returns

`boolean`

True if there is capacity for the given map,
false otherwise.

#### Inherited from

[`Workspace`](Workspace.md).[`isCapacityAvailable`](Workspace.md#iscapacityavailable)

#### Defined in

node_modules/blockly/blockly.d.ts:4846

---

### isDraggable()

> **isDraggable**(): `boolean`

Is this workspace draggable?

#### Returns

`boolean`

True if this workspace may be dragged.

#### Defined in

node_modules/blockly/blockly.d.ts:13762

---

### isDragging()

> **isDragging**(): `boolean`

Is the user currently dragging a block or scrolling the flyout/workspace?

#### Returns

`boolean`

True if currently dragging or scrolling.

#### Defined in

node_modules/blockly/blockly.d.ts:13757

---

### isMovable()

> **isMovable**(): `boolean`

Is this workspace movable?

This means the user can reposition the X Y coordinates of the workspace
through input. This can be through scrollbars, scroll wheel, dragging, or
through zooming with the scroll wheel or pinch (since the zoom is centered on
the mouse position). This does not include zooming with the zoom controls
since the X Y coordinates are decided programmatically.

#### Returns

`boolean`

True if the workspace is movable, false otherwise.

#### Defined in

node_modules/blockly/blockly.d.ts:13773

---

### isMovableHorizontally()

> **isMovableHorizontally**(): `boolean`

Is this workspace movable horizontally?

#### Returns

`boolean`

True if the workspace is movable horizontally, false
otherwise.

#### Defined in

node_modules/blockly/blockly.d.ts:13779

---

### isMovableVertically()

> **isMovableVertically**(): `boolean`

Is this workspace movable vertically?

#### Returns

`boolean`

True if the workspace is movable vertically, false
otherwise.

#### Defined in

node_modules/blockly/blockly.d.ts:13785

---

### isVisible()

> **isVisible**(): `boolean`

Getter for isVisible

#### Returns

`boolean`

Whether the workspace is visible.
False if the workspace has been hidden by calling `setVisible(false)`.

#### Defined in

node_modules/blockly/blockly.d.ts:13412

---

### markFocused()

> **markFocused**(): `void`

Mark this workspace as the currently focused main workspace.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:13820

---

### maybeFireViewportChangeEvent()

> **maybeFireViewportChangeEvent**(): `void`

Fires a viewport event if events are enabled and there is a change in
viewport values.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:13603

---

### moveDrag()

> **moveDrag**(`e`): [`Coordinate`](../utils/classes/Coordinate.md)

Track a drag of an object on this workspace.

#### Parameters

##### e

`Event`

Mouse move event.

#### Returns

[`Coordinate`](../utils/classes/Coordinate.md)

New location of object.

#### Defined in

node_modules/blockly/blockly.d.ts:13752

---

### newBlock()

> **newBlock**(`prototypeName`, `opt_id`?): [`BlockSvg`](BlockSvg.md)

Obtain a newly created block.

This block's SVG must still be initialized
([initSvg][BlockSvg#initSvg](BlockSvg.md#initsvg)) and it must be rendered
([render][BlockSvg#render](BlockSvg.md#render)) before the block will be visible.

#### Parameters

##### prototypeName

`string`

Name of the language object containing
type-specific functions for this block.

##### opt_id?

`string`

Optional ID. Use this ID if provided, otherwise
create a new ID.

#### Returns

[`BlockSvg`](BlockSvg.md)

The created block.

#### Overrides

[`Workspace`](Workspace.md).[`newBlock`](Workspace.md#newblock)

#### Defined in

node_modules/blockly/blockly.d.ts:13509

---

### paste()

> **paste**(`state`): `void`

Pastes the provided block or workspace comment onto the workspace.
Does not check whether there is remaining capacity for the object, that
should be done before calling this method.

#### Parameters

##### state

`any`

The representation of the
thing to paste.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:13671

---

### ~~recordDeleteAreas()~~

> **recordDeleteAreas**(): `void`

Make a list of all the delete areas for this workspace.

#### Returns

`void`

#### Deprecated

Use workspace.recordDragTargets. (2021 June)

#### Defined in

node_modules/blockly/blockly.d.ts:13722

---

### recordDragTargets()

> **recordDragTargets**(): `void`

Make a list of all the delete areas for this workspace.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:13726

---

### refreshTheme()

> **refreshTheme**(): `void`

Refresh all blocks on the workspace after a theme update.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:13388

---

### refreshToolboxSelection()

> **refreshToolboxSelection**(): `void`

Refresh the toolbox unless there's a drag in progress.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:13692

---

### registerButtonCallback()

> **registerButtonCallback**(`key`, `func`): `void`

Register a callback function associated with a given key, for clicks on
buttons and labels in the flyout.
For instance, a button specified by the XML
<button text="create variable" callbackKey="CREATE_VARIABLE"></button>
should be matched by a call to
registerButtonCallback("CREATE_VARIABLE", yourCallbackFunction).

#### Parameters

##### key

`string`

The name to use to look up this function.

##### func

(`arg0`) => `any`

The function to call when the
given button is clicked.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:13967

---

### registerToolboxCategoryCallback()

> **registerToolboxCategoryCallback**(`key`, `func`): `void`

Register a callback function associated with a given key, for populating
custom toolbox categories in this workspace. See the variable and procedure
categories as an example.

#### Parameters

##### key

`string`

The name to use to look up this function.

##### func

(`arg0`) => `any`

The function to
call when the given toolbox category is opened.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:13989

---

### remainingCapacity()

> **remainingCapacity**(): `number`

The number of blocks that may be added to the workspace before reaching
the maxBlocks.

#### Returns

`number`

Number of blocks left.

#### Inherited from

[`Workspace`](Workspace.md).[`remainingCapacity`](Workspace.md#remainingcapacity)

#### Defined in

node_modules/blockly/blockly.d.ts:4828

---

### remainingCapacityOfType()

> **remainingCapacityOfType**(`type`): `number`

The number of blocks of the given type that may be added to the workspace
before reaching the maxInstances allowed for that type.

#### Parameters

##### type

`string`

Type of block to return capacity for.

#### Returns

`number`

Number of blocks of type left.

#### Inherited from

[`Workspace`](Workspace.md).[`remainingCapacityOfType`](Workspace.md#remainingcapacityoftype)

#### Defined in

node_modules/blockly/blockly.d.ts:4835

---

### removeBlockById()

> **removeBlockById**(`id`): `void`

Delete a block off this workspace with the specified ID.

#### Parameters

##### id

`string`

ID of block to delete.

#### Returns

`void`

#### Package

#### Inherited from

[`Workspace`](Workspace.md).[`removeBlockById`](Workspace.md#removeblockbyid)

#### Defined in

node_modules/blockly/blockly.d.ts:4911

---

### removeButtonCallback()

> **removeButtonCallback**(`key`): `void`

Remove a callback for a click on a button in the flyout.

#### Parameters

##### key

`string`

The name associated with the callback function.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:13980

---

### removeChangeListener()

> **removeChangeListener**(`func`): `void`

Stop listening for this workspace's changes.

#### Parameters

##### func

`Function`

Function to stop calling.

#### Returns

`void`

#### Inherited from

[`Workspace`](Workspace.md).[`removeChangeListener`](Workspace.md#removechangelistener)

#### Defined in

node_modules/blockly/blockly.d.ts:4887

---

### removeToolboxCategoryCallback()

> **removeToolboxCategoryCallback**(`key`): `void`

Remove a callback for a click on a custom category's name in the toolbox.

#### Parameters

##### key

`string`

The name associated with the callback function.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:14003

---

### removeTopBlock()

> **removeTopBlock**(`block`): `void`

Removes a block from the list of top blocks.

#### Parameters

##### block

[`Block`](Block.md)

Block to remove.

#### Returns

`void`

#### Overrides

[`Workspace`](Workspace.md).[`removeTopBlock`](Workspace.md#removetopblock)

#### Defined in

node_modules/blockly/blockly.d.ts:13917

---

### removeTopBoundedElement()

> **removeTopBoundedElement**(`element`): `void`

Removes a bounded element from the list of top bounded elements.

#### Parameters

##### element

[`IBoundedElement`](IBoundedElement.md)

Bounded element to remove.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:13937

---

### removeTopComment()

> **removeTopComment**(`comment`): `void`

Removes a comment from the list of top comments.

#### Parameters

##### comment

[`WorkspaceComment`](WorkspaceComment.md)

comment to remove.

#### Returns

`void`

#### Overrides

[`Workspace`](Workspace.md).[`removeTopComment`](Workspace.md#removetopcomment)

#### Defined in

node_modules/blockly/blockly.d.ts:13927

---

### removeTypedBlock()

> **removeTypedBlock**(`block`): `void`

Remove a block from the list of blocks keyed by type.

#### Parameters

##### block

[`Block`](Block.md)

Block to remove.

#### Returns

`void`

#### Inherited from

[`Workspace`](Workspace.md).[`removeTypedBlock`](Workspace.md#removetypedblock)

#### Defined in

node_modules/blockly/blockly.d.ts:4697

---

### renameVariableById()

> **renameVariableById**(`id`, `newName`): `void`

Rename a variable by updating its name in the variable map. Update the
flyout to show the renamed variable immediately.

#### Parameters

##### id

`string`

ID of the variable to rename.

##### newName

`string`

New variable name.

#### Returns

`void`

#### Overrides

[`Workspace`](Workspace.md).[`renameVariableById`](Workspace.md#renamevariablebyid)

#### Defined in

node_modules/blockly/blockly.d.ts:13699

---

### render()

> **render**(): `void`

Render all blocks in workspace.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:13653

---

### resetDragSurface()

> **resetDragSurface**(): `void`

Called at the end of a workspace drag to take the contents
out of the drag surface and put them back into the workspace SVG.
Does nothing if the workspace drag surface is not enabled.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:13621

---

### resize()

> **resize**(): `void`

Resize and reposition all of the workspace chrome (toolbox,
trash, scrollbars etc.)
This should be called when something changes that
requires recalculating dimensions and positions of the
trash, zoom, toolbox, etc. (e.g. window resize).

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:13565

---

### resizeContents()

> **resizeContents**(): `void`

If enabled, resize the parts of the workspace that change when the workspace
contents (e.g. block positions) change. This will also scroll the
workspace contents if needed.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:13557

---

### scroll()

> **scroll**(`x`, `y`): `void`

Scroll the workspace to a specified offset (in pixels), keeping in the
workspace bounds. See comment on workspaceSvg.scrollX for more detail on
the meaning of these values.

#### Parameters

##### x

`number`

Target X to scroll to.

##### y

`number`

Target Y to scroll to.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:13892

---

### scrollCenter()

> **scrollCenter**(): `void`

Center the workspace.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:13864

---

### setBlockById()

> **setBlockById**(`id`, `block`): `void`

Set a block on this workspace with the specified ID.

#### Parameters

##### id

`string`

ID of block to set.

##### block

[`Block`](Block.md)

The block to set.

#### Returns

`void`

#### Package

#### Inherited from

[`Workspace`](Workspace.md).[`setBlockById`](Workspace.md#setblockbyid)

#### Defined in

node_modules/blockly/blockly.d.ts:4905

---

### setCachedParentSvgSize()

> **setCachedParentSvgSize**(`width`, `height`): `void`

Caches the width and height of the workspace's parent SVG element for use
with getSvgMetrics.

#### Parameters

##### width

`number`

The width of the parent SVG element.

##### height

`number`

The height of the parent SVG element

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:13585

---

### setCursorSvg()

> **setCursorSvg**(`cursorSvg`): `void`

Add the cursor SVG to this workspaces SVG group.

#### Parameters

##### cursorSvg

`SVGElement`

The SVG root of the cursor to be added to the
workspace SVG group.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:13340

---

### setMarkerSvg()

> **setMarkerSvg**(`markerSvg`): `void`

Add the marker SVG to this workspaces SVG group.

#### Parameters

##### markerSvg

`SVGElement`

The SVG root of the marker to be added to the
workspace SVG group.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:13347

---

### setMetricsManager()

> **setMetricsManager**(`metricsManager`): `void`

Sets the metrics manager for the workspace.

#### Parameters

##### metricsManager

[`IMetricsManager`](IMetricsManager.md)

The metrics manager.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:13327

---

### setResizeHandlerWrapper()

> **setResizeHandlerWrapper**(`handler`): `void`

Save resize handler data so we can delete it later in dispose.

#### Parameters

##### handler

`any`[][]

Data that can be passed to
eventHandling.unbind.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:13459

---

### setResizesEnabled()

> **setResizesEnabled**(`enabled`): `void`

Update whether this workspace has resizes enabled.
If enabled, workspace will resize when appropriate.
If disabled, workspace will not resize until re-enabled.
Use to avoid resizing during a batch operation, for performance.

#### Parameters

##### enabled

`boolean`

Whether resizes should be enabled.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:13950

---

### setScale()

> **setScale**(`newScale`): `void`

Set the workspace's zoom factor.

#### Parameters

##### newScale

`number`

Zoom factor. Units: (pixels / workspaceUnit).

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:13876

---

### setTheme()

> **setTheme**(`theme`): `void`

Set the workspace theme object.
If no theme is passed, default to the `Classic` theme.

#### Parameters

##### theme

[`Theme`](Theme.md)

The workspace theme object.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:13383

---

### setupDragSurface()

> **setupDragSurface**(): `void`

Called at the beginning of a workspace drag to move contents of
the workspace to the drag surface.
Does nothing if the drag surface is not enabled.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:13629

---

### setVariableMap()

> **setVariableMap**(`variableMap`): `void`

Set the map of all variables on the workspace.

#### Parameters

##### variableMap

[`VariableMap`](VariableMap.md)

The variable map.

#### Returns

`void`

#### Package

#### Inherited from

[`Workspace`](Workspace.md).[`setVariableMap`](Workspace.md#setvariablemap)

#### Defined in

node_modules/blockly/blockly.d.ts:4950

---

### setVisible()

> **setVisible**(`isVisible`): `void`

Toggles the visibility of the workspace.
Currently only intended for main workspace.

#### Parameters

##### isVisible

`boolean`

True if workspace should be visible.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:13648

---

### showContextMenu()

> **showContextMenu**(`e`): `void`

Show the context menu for the workspace.

#### Parameters

##### e

`Event`

Mouse event.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:13809

---

### startDrag()

> **startDrag**(`e`, `xy`): `void`

Start tracking a drag of an object on this workspace.

#### Parameters

##### e

`Event`

Mouse down event.

##### xy

[`Coordinate`](../utils/classes/Coordinate.md)

Starting location of object.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:13745

---

### translate()

> **translate**(`x`, `y`): `void`

Translate this workspace to new coordinates.

#### Parameters

##### x

`number`

Horizontal translation, in pixel units relative to the
top left of the Blockly div.

##### y

`number`

Vertical translation, in pixel units relative to the
top left of the Blockly div.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:13614

---

### undo()

> **undo**(`redo`): `void`

Undo or redo the previous action.

#### Parameters

##### redo

`boolean`

False if undo, true if redo.

#### Returns

`void`

#### Inherited from

[`Workspace`](Workspace.md).[`undo`](Workspace.md#undo)

#### Defined in

node_modules/blockly/blockly.d.ts:4869

---

### updateInverseScreenCTM()

> **updateInverseScreenCTM**(): `void`

Mark the inverse screen CTM as dirty.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:13406

---

### updateScreenCalculationsIfScrolled()

> **updateScreenCalculationsIfScrolled**(): `void`

Resizes and repositions workspace chrome if the page has a new
scroll position.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:13571

---

### updateToolbox()

> **updateToolbox**(`toolboxDef`): `void`

Modify the block tree on the existing toolbox.

#### Parameters

##### toolboxDef

[`ToolboxDefinition`](../utils/utils/toolbox/type-aliases/ToolboxDefinition.md)

DOM tree of toolbox contents, string of toolbox contents, or JSON
representing toolbox definition.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:13816

---

### zoom()

> **zoom**(`x`, `y`, `amount`): `void`

Zooms the workspace in or out relative to/centered on the given (x, y)
coordinate.

#### Parameters

##### x

`number`

X coordinate of center, in pixel units relative to the
top-left corner of the parentSVG.

##### y

`number`

Y coordinate of center, in pixel units relative to the
top-left corner of the parentSVG.

##### amount

`number`

Amount of zooming. The formula for the new scale
is newScale = currentScale \* (scaleSpeed^amount). scaleSpeed is set in
the workspace options. Negative amount values zoom out, and positive
amount values zoom in.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:13838

---

### zoomCenter()

> **zoomCenter**(`type`): `void`

Zooming the blocks centered in the center of view with zooming in or out.

#### Parameters

##### type

`number`

Type of zooming (-1 zooming out and 1 zooming in).

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:13845

---

### zoomToFit()

> **zoomToFit**(): `void`

Zoom the blocks to fit in the workspace if possible.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:13849

---

### getAll()

> `static` **getAll**(): [`Workspace`](Workspace.md)[]

Find all workspaces.

#### Returns

[`Workspace`](Workspace.md)[]

Array of workspaces.

#### Inherited from

[`Workspace`](Workspace.md).[`getAll`](Workspace.md#getall)

#### Defined in

node_modules/blockly/blockly.d.ts:4569

---

### getById()

> `static` **getById**(`id`): [`Workspace`](Workspace.md)

Find the workspace with the specified ID.

#### Parameters

##### id

`string`

ID of workspace to find.

#### Returns

[`Workspace`](Workspace.md)

The sought after workspace or null if not found.

#### Inherited from

[`Workspace`](Workspace.md).[`getById`](Workspace.md#getbyid)

#### Defined in

node_modules/blockly/blockly.d.ts:4564
