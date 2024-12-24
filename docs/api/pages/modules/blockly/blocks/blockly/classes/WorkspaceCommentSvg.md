# Class: WorkspaceCommentSvg

## Constructors

### new WorkspaceCommentSvg()

> **new WorkspaceCommentSvg**(`workspace`, `content`, `height`, `width`, `opt_id`?): [`WorkspaceCommentSvg`](WorkspaceCommentSvg.md)

Class for a workspace comment's SVG representation.

#### Parameters

##### workspace

[`WorkspaceSvg`](WorkspaceSvg.md)

The block's workspace.

##### content

`string`

The content of this workspace comment.

##### height

`number`

Height of the comment.

##### width

`number`

Width of the comment.

##### opt_id?

`string`

Optional ID. Use this ID if provided, otherwise
create a new ID.

#### Returns

[`WorkspaceCommentSvg`](WorkspaceCommentSvg.md)

#### Implements

#### Implements

#### Implements

#### Alias

Blockly.WorkspaceCommentSvg

#### Defined in

node_modules/blockly/blockly.d.ts:12388

## Properties

### autoLayout\_

> **autoLayout\_**: `boolean`

#### Defined in

node_modules/blockly/blockly.d.ts:12695

---

### deleteGroup\_

> **deleteGroup\_**: `SVGGElement`

#### Defined in

node_modules/blockly/blockly.d.ts:12652

---

### deleteIconBorder\_

> **deleteIconBorder\_**: `SVGCircleElement`

#### Defined in

node_modules/blockly/blockly.d.ts:12653

---

### disposed\_

> **disposed\_**: `boolean`

#### Defined in

node_modules/blockly/blockly.d.ts:12716

---

### eventsInit\_

> **eventsInit\_**: `boolean`

#### Defined in

node_modules/blockly/blockly.d.ts:12439

---

### focused\_

> **focused\_**: `boolean`

#### Defined in

node_modules/blockly/blockly.d.ts:12722

---

### foreignObject\_

> **foreignObject\_**: `SVGForeignObjectElement`

#### Defined in

node_modules/blockly/blockly.d.ts:12639

---

### height\_

> **height\_**: `number`

#### Defined in

node_modules/blockly/blockly.d.ts:12710

---

### resizeGroup\_

> **resizeGroup\_**: `SVGGElement`

#### Defined in

node_modules/blockly/blockly.d.ts:12646

---

### svgHandleTarget\_

> **svgHandleTarget\_**: `SVGRectElement`

#### Defined in

node_modules/blockly/blockly.d.ts:12631

---

### svgRect\_

> **svgRect\_**: `SVGRectElement`

#### Defined in

node_modules/blockly/blockly.d.ts:12410

---

### svgRectTarget\_

> **svgRectTarget\_**: `SVGRectElement`

#### Defined in

node_modules/blockly/blockly.d.ts:12632

---

### textarea\_

> **textarea\_**: `HTMLElement`

#### Defined in

node_modules/blockly/blockly.d.ts:12640

---

### width\_

> **width\_**: `number`

#### Defined in

node_modules/blockly/blockly.d.ts:12709

---

### workspace

> **workspace**: [`WorkspaceSvg`](WorkspaceSvg.md)

#### Defined in

node_modules/blockly/blockly.d.ts:12392

---

### xy\_

> **xy\_**: [`Coordinate`](../utils/classes/Coordinate.md)

#### Defined in

node_modules/blockly/blockly.d.ts:12493

## Methods

### addFocus()

> **addFocus**(): `void`

Focus this comment. Highlight it visually.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:12476

---

### addSelect()

> **addSelect**(): `void`

Select this comment. Highlight it visually.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:12466

---

### blurFocus()

> **blurFocus**(): `void`

Remove focus from the text area.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:12727

---

### dispose()

> **dispose**(): `void`

Dispose of this comment.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:12428

---

### getBoundingRectangle()

> **getBoundingRectangle**(): [`Rect`](../utils/classes/Rect.md)

Returns the coordinates of a bounding box describing the dimensions of this
comment.
Coordinate system: workspace coordinates.

#### Returns

[`Rect`](../utils/classes/Rect.md)

Object with coordinates of the bounding box.

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:12546

---

### getContent()

> **getContent**(): `string`

Returns this comment's text.

#### Returns

`string`

Comment text.

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:12580

---

### getHeightWidth()

> **getHeightWidth**(): `object`

Returns a bounding box describing the dimensions of this comment.

#### Returns

`object`

Object with height and width
properties in workspace units.

##### height

> **height**: `number`

##### width

> **width**: `number`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:12622

---

### getRelativeToSurfaceXY()

> **getRelativeToSurfaceXY**(): [`Coordinate`](../utils/classes/Coordinate.md)

Return the coordinates of the top-left corner of this comment relative to
the drawing surface's origin (0,0), in workspace units.
If the comment is on the workspace, (0, 0) is the origin of the workspace
coordinate system.
This does not change with workspace scale.

#### Returns

[`Coordinate`](../utils/classes/Coordinate.md)

Object with .x and .y properties in
workspace coordinates.

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:12492

---

### getSvgRoot()

> **getSvgRoot**(): `SVGElement`

Return the root node of the SVG or null if none exists.

#### Returns

`SVGElement`

The root SVG node (probably a group).

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:12574

---

### initSvg()

> **initSvg**(`opt_noSelect`?): `void`

Create and initialize the SVG representation of a workspace comment.
May be called more than once.

#### Parameters

##### opt_noSelect?

`boolean`

Text inside text area will be selected if
false

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:12438

---

### moveBy()

> **moveBy**(`dx`, `dy`): `void`

Move a comment by a relative offset.

#### Parameters

##### dx

`number`

Horizontal offset, in workspace units.

##### dy

`number`

Vertical offset, in workspace units.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:12500

---

### moveDuringDrag()

> **moveDuringDrag**(`dragSurface`, `newLoc`): `void`

Move this comment during a drag, taking into account whether we are using a
drag surface to translate blocks.

#### Parameters

##### dragSurface

[`BlockDragSurfaceSvg`](BlockDragSurfaceSvg.md)

The surface that carries
rendered items during a drag, or null if no drag surface is in use.

##### newLoc

[`Coordinate`](../utils/classes/Coordinate.md)

The location to translate to, in
workspace coordinates.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:12525

---

### moveTo()

> **moveTo**(`x`, `y`): `void`

Move the bubble group to the specified location in workspace coordinates.

#### Parameters

##### x

`number`

The x position to move to.

##### y

`number`

The y position to move to.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:12532

---

### moveToDragSurface()

> **moveToDragSurface**(): `void`

Move this comment to its workspace's drag surface, accounting for
positioning. Generally should be called at the same time as
setDragging(true). Does nothing if useDragSurface\_ is false.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:12515

---

### removeFocus()

> **removeFocus**(): `void`

Unfocus this comment. Remove its highlighting.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:12481

---

### removeSelect()

> **removeSelect**(): `void`

Unselect this comment. Remove its highlighting.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:12471

---

### render()

> **render**(): `void`

Renders the workspace comment.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:12630

---

### select()

> **select**(): `void`

Select this comment. Highlight it visually.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:12456

---

### setAutoLayout()

> **setAutoLayout**(`_enable`): `void`

Set whether auto-layout of this bubble is enabled. The first time a bubble
is shown it positions itself to not cover any blocks. Once a user has
dragged it to reposition, it renders where the user put it.

#### Parameters

##### \_enable

`boolean`

True if auto-layout should be enabled, false
otherwise.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:12602

---

### setContent()

> **setContent**(`content`): `void`

Set this comment's content.

#### Parameters

##### content

`string`

Comment content.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:12586

---

### setDeleteStyle()

> **setDeleteStyle**(`enable`): `void`

Update the cursor over this comment by adding or removing a class.

#### Parameters

##### enable

`boolean`

True if the delete cursor should be shown, false
otherwise.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:12593

---

### setDragging()

> **setDragging**(`adding`): `void`

Recursively adds or removes the dragging class to this node and its children.

#### Parameters

##### adding

`boolean`

True if adding, false if removing.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:12568

---

### setEditable()

> **setEditable**(`editable`): `void`

Set whether this comment is editable or not.

#### Parameters

##### editable

`boolean`

True if editable.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:12562

---

### setFocus()

> **setFocus**(): `void`

Set the focus on the text area.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:12721

---

### setMovable()

> **setMovable**(`movable`): `void`

Set whether this comment is movable or not.

#### Parameters

##### movable

`boolean`

True if movable.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:12557

---

### showContextMenu()

> **showContextMenu**(`e`): `void`

Show the context menu for this workspace comment.

#### Parameters

##### e

`Event`

Mouse event.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:12451

---

### toCopyData()

> **toCopyData**(): [`CopyData`](../namespaces/ICopyable/type-aliases/CopyData.md)

Encode a comment for copying.

#### Returns

[`CopyData`](../namespaces/ICopyable/type-aliases/CopyData.md)

Copy metadata.

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:12615

---

### toXmlWithXY()

> **toXmlWithXY**(`opt_noId`?): `Element`

Encode a comment subtree as XML with XY coordinates.

#### Parameters

##### opt_noId?

`boolean`

True if the encoder should skip the comment ID.

#### Returns

`Element`

Tree of XML elements.

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:12609

---

### translate()

> **translate**(`x`, `y`): `void`

Transforms a comment by setting the translation on the transform attribute
of the block's SVG.

#### Parameters

##### x

`number`

The x coordinate of the translation in workspace units.

##### y

`number`

The y coordinate of the translation in workspace units.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:12508

---

### unselect()

> **unselect**(): `void`

Unselect this comment. Remove its highlighting.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:12461

---

### updateMovable()

> **updateMovable**(): `void`

Add or remove the UI indicating if this comment is movable or not.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:12551

---

### fromXml()

> `static` **fromXml**(`xmlComment`, `workspace`, `opt_wsWidth`?): [`WorkspaceCommentSvg`](WorkspaceCommentSvg.md)

Decode an XML comment tag and create a rendered comment on the workspace.

#### Parameters

##### xmlComment

`Element`

XML comment element.

##### workspace

[`WorkspaceSvg`](WorkspaceSvg.md)

The workspace.

##### opt_wsWidth?

`number`

The width of the workspace, which is used to
position comments correctly in RTL.

#### Returns

[`WorkspaceCommentSvg`](WorkspaceCommentSvg.md)

The created workspace comment.

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:12372
