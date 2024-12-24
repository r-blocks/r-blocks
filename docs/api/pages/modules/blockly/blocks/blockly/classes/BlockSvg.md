# Class: BlockSvg

## Extends

- [`Block`](Block.md)

## Constructors

### new BlockSvg()

> **new BlockSvg**(`workspace`, `prototypeName`, `opt_id`?): [`BlockSvg`](BlockSvg.md)

Class for a block's SVG representation.
Not normally called directly, workspace.newBlock() is preferred.

#### Parameters

##### workspace

[`WorkspaceSvg`](WorkspaceSvg.md)

The block's workspace.

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

#### Implements

#### Implements

#### Implements

#### Implements

#### Alias

Blockly.BlockSvg

#### Overrides

[`Block`](Block.md).[`constructor`](Block.md#constructors)

#### Defined in

node_modules/blockly/blockly.d.ts:15106

## Properties

### childBlocks\_

> `protected` **childBlocks\_**: [`Block`](Block.md)[]

#### Inherited from

[`Block`](Block.md).[`childBlocks_`](Block.md#childblocks_)

#### Defined in

node_modules/blockly/blockly.d.ts:18990

---

### collapsed\_

> `protected` **collapsed\_**: `boolean`

#### Inherited from

[`Block`](Block.md).[`collapsed_`](Block.md#collapsed_)

#### Defined in

node_modules/blockly/blockly.d.ts:19015

---

### colour\_

> **colour\_**: `string`

#### Overrides

[`Block`](Block.md).[`colour_`](Block.md#colour_)

#### Defined in

node_modules/blockly/blockly.d.ts:15459

---

### ~~comment~~

> **comment**: [`Comment`](Comment.md)

A string representing the comment attached to this block.

#### Deprecated

August 2019. Use getCommentText instead.

#### Overrides

[`Block`](Block.md).[`comment`](Block.md#comment)

#### Defined in

node_modules/blockly/blockly.d.ts:15396

---

### commentIcon\_

> **commentIcon\_**: [`Comment`](Comment.md)

#### Defined in

node_modules/blockly/blockly.d.ts:15395

---

### commentModel

> **commentModel**: [`CommentModel`](../namespaces/Block/type-aliases/CommentModel.md)

A model of the comment attached to this block.

#### Package

#### Inherited from

[`Block`](Block.md).[`commentModel`](Block.md#commentmodel)

#### Defined in

node_modules/blockly/blockly.d.ts:19032

---

### compose()

> **compose**: (`arg0`) => `any`

An optional method called when a mutator dialog saves its content.
This function is called to modify the original block according to new
settings. This method must also be coupled with defining a `decompose`
method for the default mutation dialog button and UI to appear.

#### Parameters

##### arg0

[`BlockSvg`](BlockSvg.md)

#### Returns

`any`

#### Defined in

node_modules/blockly/blockly.d.ts:15689

---

### contextMenu

> **contextMenu**: `boolean`

#### Inherited from

[`Block`](Block.md).[`contextMenu`](Block.md#contextmenu)

#### Defined in

node_modules/blockly/blockly.d.ts:18980

---

### customContextMenu()

> **customContextMenu**: (`arg0`) => `any`

An optional method for defining custom block context menu items.

#### Parameters

##### arg0

`any`[]

#### Returns

`any`

#### Defined in

node_modules/blockly/blockly.d.ts:15694

---

### data

> **data**: `string`

Optional text data that round-trips between blocks and XML.
Has no effect. May be used by 3rd parties for meta information.

#### Inherited from

[`Block`](Block.md).[`data`](Block.md#data)

#### Defined in

node_modules/blockly/blockly.d.ts:19711

---

### decompose()

> **decompose**: (`arg0`) => [`BlockSvg`](BlockSvg.md)

An optional method called when a mutator dialog is first opened.
This function must create and initialize a top-level block for the mutator
dialog, and return it. This function should also populate this top-level
block with any sub-blocks which are appropriate. This method must also be
coupled with defining a `compose` method for the default mutation dialog
button and UI to appear.

#### Parameters

##### arg0

[`WorkspaceSvg`](WorkspaceSvg.md)

#### Returns

[`BlockSvg`](BlockSvg.md)

#### Defined in

node_modules/blockly/blockly.d.ts:15681

---

### disposed

> **disposed**: `boolean`

#### Inherited from

[`Block`](Block.md).[`disposed`](Block.md#disposed)

#### Defined in

node_modules/blockly/blockly.d.ts:19079

---

### domToMutation()

> **domToMutation**: (`arg0`) => `any`

An optional deserialization method for defining how to deserialize the
mutation state from XML. This must be coupled with defining `mutationToDom`.

#### Parameters

##### arg0

`Element`

#### Returns

`any`

#### Inherited from

[`Block`](Block.md).[`domToMutation`](Block.md#domtomutation)

#### Defined in

node_modules/blockly/blockly.d.ts:19728

---

### eventsInit\_

> **eventsInit\_**: `boolean`

#### Defined in

node_modules/blockly/blockly.d.ts:15152

---

### getDeveloperVariables()

> **getDeveloperVariables**: () => `string`[]

An optional property for declaring developer variables. Return a list of
variable names for use by generators. Developer variables are never shown to
the user, but are declared as global variables in the generated code.

#### Returns

`string`[]

#### Inherited from

[`Block`](Block.md).[`getDeveloperVariables`](Block.md#getdevelopervariables)

#### Defined in

node_modules/blockly/blockly.d.ts:19749

---

### hat

> **hat**: `string`

Name of the type of hat.

#### Overrides

[`Block`](Block.md).[`hat`](Block.md#hat)

#### Defined in

node_modules/blockly/blockly.d.ts:15458

---

### height

> **height**: `number`

Height of this block, not including any statement blocks above or below.
Height is in workspace units.

#### Defined in

node_modules/blockly/blockly.d.ts:15666

---

### helpUrl

> **helpUrl**: `string` \| `Function`

#### Inherited from

[`Block`](Block.md).[`helpUrl`](Block.md#helpurl)

#### Defined in

node_modules/blockly/blockly.d.ts:19305

---

### hue\_

> **hue\_**: `number`

#### Inherited from

[`Block`](Block.md).[`hue_`](Block.md#hue_)

#### Defined in

node_modules/blockly/blockly.d.ts:19339

---

### id

> **id**: `string`

#### Inherited from

[`Block`](Block.md).[`id`](Block.md#id)

#### Defined in

node_modules/blockly/blockly.d.ts:18961

---

### init()

> **init**: () => `any`

An optional method called during initialization.

#### Returns

`any`

#### Inherited from

[`Block`](Block.md).[`init`](Block.md#init)

#### Defined in

node_modules/blockly/blockly.d.ts:19716

---

### inputList

> **inputList**: [`Input`](Input.md)[]

#### Inherited from

[`Block`](Block.md).[`inputList`](Block.md#inputlist)

#### Defined in

node_modules/blockly/blockly.d.ts:18969

---

### inputsInline

> **inputsInline**: `boolean`

#### Inherited from

[`Block`](Block.md).[`inputsInline`](Block.md#inputsinline)

#### Defined in

node_modules/blockly/blockly.d.ts:18971

---

### inputsInlineDefault

> **inputsInlineDefault**: `boolean`

#### Inherited from

[`Block`](Block.md).[`inputsInlineDefault`](Block.md#inputsinlinedefault)

#### Defined in

node_modules/blockly/blockly.d.ts:19070

---

### isInFlyout

> **isInFlyout**: `boolean`

#### Inherited from

[`Block`](Block.md).[`isInFlyout`](Block.md#isinflyout)

#### Defined in

node_modules/blockly/blockly.d.ts:19043

---

### isInMutator

> **isInMutator**: `boolean`

#### Inherited from

[`Block`](Block.md).[`isInMutator`](Block.md#isinmutator)

#### Defined in

node_modules/blockly/blockly.d.ts:19045

---

### isInsertionMarker\_

> `protected` **isInsertionMarker\_**: `any`

True if this block is an insertion marker.

#### Overrides

[`Block`](Block.md).[`isInsertionMarker_`](Block.md#isinsertionmarker_)

#### Defined in

node_modules/blockly/blockly.d.ts:15339

---

### loadExtraState()

> **loadExtraState**: (`arg0`) => `any`

An optional serialization method for defining how to deserialize the block's
extra state (eg mutation state) from something JSON compatible. This must be
coupled with defining `saveExtraState`.

#### Parameters

##### arg0

`any`

#### Returns

`any`

#### Inherited from

[`Block`](Block.md).[`loadExtraState`](Block.md#loadextrastate)

#### Defined in

node_modules/blockly/blockly.d.ts:19742

---

### mutationToDom()

> **mutationToDom**: (...`args`) => `Element`

An optional serialization method for defining how to serialize the
mutation state to XML. This must be coupled with defining `domToMutation`.

#### Parameters

##### args

...`any`[]

#### Returns

`Element`

#### Inherited from

[`Block`](Block.md).[`mutationToDom`](Block.md#mutationtodom)

#### Defined in

node_modules/blockly/blockly.d.ts:19722

---

### mutator

> **mutator**: `any`

#### Defined in

node_modules/blockly/blockly.d.ts:15410

---

### nextConnection

> **nextConnection**: [`RenderedConnection`](RenderedConnection.md)

#### Overrides

[`Block`](Block.md).[`nextConnection`](Block.md#nextconnection)

#### Defined in

node_modules/blockly/blockly.d.ts:15137

---

### onchange()

> **onchange**: (`arg0`) => `any`

#### Parameters

##### arg0

[`events/events_abstract`](../events/events/events/events_abstract/index.md)

#### Returns

`any`

#### Inherited from

[`Block`](Block.md).[`onchange`](Block.md#onchange)

#### Defined in

node_modules/blockly/blockly.d.ts:19357

---

### onchangeWrapper\_

> **onchangeWrapper\_**: `any`

#### Inherited from

[`Block`](Block.md).[`onchangeWrapper_`](Block.md#onchangewrapper_)

#### Defined in

node_modules/blockly/blockly.d.ts:19358

---

### outputConnection

> **outputConnection**: [`RenderedConnection`](RenderedConnection.md)

#### Overrides

[`Block`](Block.md).[`outputConnection`](Block.md#outputconnection)

#### Defined in

node_modules/blockly/blockly.d.ts:15135

---

### outputShape\_

> `protected` **outputShape\_**: `number`

#### Inherited from

[`Block`](Block.md).[`outputShape_`](Block.md#outputshape_)

#### Defined in

node_modules/blockly/blockly.d.ts:19020

---

### parentBlock\_

> `protected` **parentBlock\_**: [`Block`](Block.md)

#### Inherited from

[`Block`](Block.md).[`parentBlock_`](Block.md#parentblock_)

#### Defined in

node_modules/blockly/blockly.d.ts:18985

---

### pathObject

> **pathObject**: [`IPathObject`](../renderers/common/block_rendering/classes/IPathObject.md)

The renderer's path object.

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:15122

---

### previousConnection

> **previousConnection**: [`RenderedConnection`](RenderedConnection.md)

#### Overrides

[`Block`](Block.md).[`previousConnection`](Block.md#previousconnection)

#### Defined in

node_modules/blockly/blockly.d.ts:15139

---

### rendered

> **rendered**: `boolean`

#### Overrides

[`Block`](Block.md).[`rendered`](Block.md#rendered)

#### Defined in

node_modules/blockly/blockly.d.ts:15124

---

### renderingDebugger

> **renderingDebugger**: [`Debug`](../renderers/common/block_rendering/classes/Debug.md)

An property used internally to reference the block's rendering debugger.

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:15700

---

### RTL

> **RTL**: `boolean`

#### Inherited from

[`Block`](Block.md).[`RTL`](Block.md#rtl)

#### Defined in

node_modules/blockly/blockly.d.ts:19047

---

### saveExtraState()

> **saveExtraState**: () => `any`

An optional serialization method for defining how to serialize the block's
extra state (eg mutation state) to something JSON compatible. This must be
coupled with defining `loadExtraState`.

#### Returns

`any`

#### Inherited from

[`Block`](Block.md).[`saveExtraState`](Block.md#saveextrastate)

#### Defined in

node_modules/blockly/blockly.d.ts:19735

---

### statementInputCount

> **statementInputCount**: `number`

A count of statement inputs on the block.

#### Package

#### Inherited from

[`Block`](Block.md).[`statementInputCount`](Block.md#statementinputcount)

#### Defined in

node_modules/blockly/blockly.d.ts:19066

---

### style

> **style**: [`BlockStyle`](../namespaces/Theme/type-aliases/BlockStyle.md)

A block style object.

#### Defined in

node_modules/blockly/blockly.d.ts:15116

---

### styleName\_

> **styleName\_**: `string`

#### Overrides

[`Block`](Block.md).[`styleName_`](Block.md#stylename_)

#### Defined in

node_modules/blockly/blockly.d.ts:15451

---

### suppressPrefixSuffix

> **suppressPrefixSuffix**: `boolean`

#### Inherited from

[`Block`](Block.md).[`suppressPrefixSuffix`](Block.md#suppressprefixsuffix)

#### Defined in

node_modules/blockly/blockly.d.ts:19506

---

### tooltip

> **tooltip**: [`TipInfo`](../tooltip/type-aliases/TipInfo.md)

#### Inherited from

[`Block`](Block.md).[`tooltip`](Block.md#tooltip)

#### Defined in

node_modules/blockly/blockly.d.ts:18978

---

### type

> **type**: `string`

#### Inherited from

[`Block`](Block.md).[`type`](Block.md#type)

#### Defined in

node_modules/blockly/blockly.d.ts:19068

---

### warning

> **warning**: [`Warning`](Warning.md)

#### Defined in

node_modules/blockly/blockly.d.ts:15404

---

### warningTextDb\_

> **warningTextDb\_**: `object`

#### Index Signature

\[`x`: `string`\]: `number`

#### Defined in

node_modules/blockly/blockly.d.ts:15354

---

### width

> **width**: `number`

Width of this block, including any connected value blocks.
Width is in workspace units.

#### Defined in

node_modules/blockly/blockly.d.ts:15671

---

### workspace

> **workspace**: [`WorkspaceSvg`](WorkspaceSvg.md)

#### Overrides

[`Block`](Block.md).[`workspace`](Block.md#workspace-1)

#### Defined in

node_modules/blockly/blockly.d.ts:15133

## Methods

### addSelect()

> **addSelect**(): `void`

Adds the visual "select" effect to the block, but does not actually select
it or fire an event.

#### Returns

`void`

#### See

BlockSvg#select

#### Defined in

node_modules/blockly/blockly.d.ts:15427

---

### allInputsFilled()

> **allInputsFilled**(`opt_shadowBlocksAreFilled`?): `boolean`

Recursively checks whether all statement and value inputs are filled with
blocks. Also checks all following statement blocks in this stack.

#### Parameters

##### opt_shadowBlocksAreFilled?

`boolean`

An optional argument controlling
whether shadow blocks are counted as filled. Defaults to true.

#### Returns

`boolean`

True if all inputs are filled, false otherwise.

#### Inherited from

[`Block`](Block.md).[`allInputsFilled`](Block.md#allinputsfilled)

#### Defined in

node_modules/blockly/blockly.d.ts:19695

---

### appendDummyInput()

> **appendDummyInput**(`opt_name`?): [`Input`](Input.md)

Shortcut for appending a dummy input row.

#### Parameters

##### opt_name?

`string`

Language-neutral identifier which may used to find
this input again. Should be unique to this block.

#### Returns

[`Input`](Input.md)

The input object created.

#### Inherited from

[`Block`](Block.md).[`appendDummyInput`](Block.md#appenddummyinput)

#### Defined in

node_modules/blockly/blockly.d.ts:19499

---

### appendInput\_()

> `protected` **appendInput\_**(`type`, `name`): [`Input`](Input.md)

Add a value input, statement input or local variable to this block.

#### Parameters

##### type

`number`

One of Blockly.inputTypes.

##### name

`string`

Language-neutral identifier which may used to find this
input again. Should be unique to this block.

#### Returns

[`Input`](Input.md)

The input object created.

#### Overrides

[`Block`](Block.md).[`appendInput_`](Block.md#appendinput_)

#### Defined in

node_modules/blockly/blockly.d.ts:15519

---

### appendStatementInput()

> **appendStatementInput**(`name`): [`Input`](Input.md)

Shortcut for appending a statement input row.

#### Parameters

##### name

`string`

Language-neutral identifier which may used to find this
input again. Should be unique to this block.

#### Returns

[`Input`](Input.md)

The input object created.

#### Inherited from

[`Block`](Block.md).[`appendStatementInput`](Block.md#appendstatementinput)

#### Defined in

node_modules/blockly/blockly.d.ts:19492

---

### appendValueInput()

> **appendValueInput**(`name`): [`Input`](Input.md)

Shortcut for appending a value input row.

#### Parameters

##### name

`string`

Language-neutral identifier which may used to find this
input again. Should be unique to this block.

#### Returns

[`Input`](Input.md)

The input object created.

#### Inherited from

[`Block`](Block.md).[`appendValueInput`](Block.md#appendvalueinput)

#### Defined in

node_modules/blockly/blockly.d.ts:19485

---

### applyColour()

> **applyColour**(): `void`

Updates the colour of the block to match the block's state.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:15377

---

### bringToFront()

> **bringToFront**(): `void`

Move this block to the front of the visible workspace.
<g> tags do not respect z-index so SVG renders them in the
order that they are in the DOM. By placing this block first within the
block group's <g>, it will render on top of any other blocks.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:15467

---

### bumpNeighbours()

> **bumpNeighbours**(): `void`

Bump unconnected blocks out of alignment. Two blocks which aren't actually
connected should not coincidentally line up on screen.

#### Returns

`void`

#### Overrides

[`Block`](Block.md).[`bumpNeighbours`](Block.md#bumpneighbours)

#### Defined in

node_modules/blockly/blockly.d.ts:15573

---

### checkAndDelete()

> **checkAndDelete**(): `void`

Delete a block and hide chaff when doing so. The block will not be deleted if
it's in a flyout. This is called from the context menu and keyboard shortcuts
as the full delete action. If you are disposing of a block from the workspace
and don't need to perform flyout checks, handle event grouping, or hide
chaff, then use `block.dispose()` directly.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:15365

---

### dispose()

> **dispose**(`healStack`?, `animate`?): `void`

Dispose of this block.

#### Parameters

##### healStack?

`boolean`

If true, then try to heal any gap by connecting
the next statement with the previous statement. Otherwise, dispose of
all children of this block.

##### animate?

`boolean`

If true, show a disposal animation and sound.

#### Returns

`void`

#### Suppress

#### Overrides

[`Block`](Block.md).[`dispose`](Block.md#dispose)

#### Defined in

node_modules/blockly/blockly.d.ts:15353

---

### fadeForReplacement()

> **fadeForReplacement**(`add`): `void`

Visual effect to show that if the dragging block is dropped, this block will
be replaced. If a shadow block, it will disappear. Otherwise it will bump.

#### Parameters

##### add

`boolean`

True if highlighting should be added.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:15653

---

### generateContextMenu()

> `protected` **generateContextMenu**(): `any`[]

Generate the context menu for this block.

#### Returns

`any`[]

Context menu options or null if no menu.

#### Defined in

node_modules/blockly/blockly.d.ts:15293

---

### getBoundingRectangle()

> **getBoundingRectangle**(): [`Rect`](../utils/classes/Rect.md)

Returns the coordinates of a bounding box describing the dimensions of this
block and any blocks stacked below it.
Coordinate system: workspace coordinates.

#### Returns

[`Rect`](../utils/classes/Rect.md)

Object with coordinates of the bounding box.

#### Defined in

node_modules/blockly/blockly.d.ts:15254

---

### getChildren()

> **getChildren**(`ordered`): [`Block`](Block.md)[]

Find all the blocks that are directly nested inside this one.
Includes value and statement inputs, as well as any following statement.
Excludes any connection on an output tab or any preceding statement.
Blocks are optionally sorted by position; top to bottom.

#### Parameters

##### ordered

`boolean`

Sort the list if true.

#### Returns

[`Block`](Block.md)[]

Array of blocks.

#### Inherited from

[`Block`](Block.md).[`getChildren`](Block.md#getchildren)

#### Defined in

node_modules/blockly/blockly.d.ts:19206

---

### getColour()

> **getColour**(): `string`

Get the colour of a block.

#### Returns

`string`

#RRGGBB string.

#### Overrides

[`Block`](Block.md).[`getColour`](Block.md#getcolour)

#### Defined in

node_modules/blockly/blockly.d.ts:15445

---

### getColourSecondary()

> **getColourSecondary**(): `string`

Get the secondary colour of a block.

#### Returns

`string`

#RRGGBB string.

#### Defined in

node_modules/blockly/blockly.d.ts:15157

---

### getColourTertiary()

> **getColourTertiary**(): `string`

Get the tertiary colour of a block.

#### Returns

`string`

#RRGGBB string.

#### Defined in

node_modules/blockly/blockly.d.ts:15162

---

### getCommentIcon()

> **getCommentIcon**(): [`Comment`](Comment.md)

Get the comment icon attached to this block, or null if the block has no
comment.

#### Returns

[`Comment`](Comment.md)

The comment icon attached to this block, or null.

#### Defined in

node_modules/blockly/blockly.d.ts:15389

---

### getCommentText()

> **getCommentText**(): `string`

Returns the comment on this block (or null if there is no comment).

#### Returns

`string`

Block's comment.

#### Inherited from

[`Block`](Block.md).[`getCommentText`](Block.md#getcommenttext)

#### Defined in

node_modules/blockly/blockly.d.ts:19650

---

### getConnections\_()

> **getConnections\_**(`all`): [`RenderedConnection`](RenderedConnection.md)[]

Returns connections originating from this block.

#### Parameters

##### all

`boolean`

If true, return all connections even hidden ones.
Otherwise, for a non-rendered block return an empty list, and for a
collapsed block don't return inputs connections.

#### Returns

[`RenderedConnection`](RenderedConnection.md)[]

Array of connections.

#### Package

#### Overrides

[`Block`](Block.md).[`getConnections_`](Block.md#getconnections_)

#### Defined in

node_modules/blockly/blockly.d.ts:15538

---

### getDescendants()

> **getDescendants**(`ordered`): [`Block`](Block.md)[]

Find all the blocks that are directly or indirectly nested inside this one.
Includes this block in the list.
Includes value and statement inputs, as well as any following statements.
Excludes any connection on an output tab or any preceding statements.
Blocks are optionally sorted by position; top to bottom.

#### Parameters

##### ordered

`boolean`

Sort the list if true.

#### Returns

[`Block`](Block.md)[]

Flattened array of blocks.

#### Inherited from

[`Block`](Block.md).[`getDescendants`](Block.md#getdescendants)

#### Defined in

node_modules/blockly/blockly.d.ts:19222

---

### getField()

> **getField**(`name`): [`Field`](Field.md)

Returns the named field from a block.

#### Parameters

##### name

`string`

The name of the field.

#### Returns

[`Field`](Field.md)

Named field, or null if field does not exist.

#### Inherited from

[`Block`](Block.md).[`getField`](Block.md#getfield)

#### Defined in

node_modules/blockly/blockly.d.ts:19364

---

### getFieldValue()

> **getFieldValue**(`name`): `any`

Returns the language-neutral value of the given field.

#### Parameters

##### name

`string`

The name of the field.

#### Returns

`any`

Value of the field or null if field does not exist.

#### Inherited from

[`Block`](Block.md).[`getFieldValue`](Block.md#getfieldvalue)

#### Defined in

node_modules/blockly/blockly.d.ts:19396

---

### getFirstStatementConnection()

> **getFirstStatementConnection**(): [`Connection`](Connection.md)

Return the connection on the first statement input on this block, or null if
there are none.

#### Returns

[`Connection`](Connection.md)

The first statement connection or null.

#### Package

#### Inherited from

[`Block`](Block.md).[`getFirstStatementConnection`](Block.md#getfirststatementconnection)

#### Defined in

node_modules/blockly/blockly.d.ts:19183

---

### getHeightWidth()

> **getHeightWidth**(): `object`

Returns a bounding box describing the dimensions of this block
and any blocks stacked below it.

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

node_modules/blockly/blockly.d.ts:15643

---

### getHue()

> **getHue**(): `number`

Get the HSV hue value of a block. Null if hue not set.

#### Returns

`number`

Hue value (0-360).

#### Inherited from

[`Block`](Block.md).[`getHue`](Block.md#gethue)

#### Defined in

node_modules/blockly/blockly.d.ts:19332

---

### getIcons()

> **getIcons**(): [`Icon`](Icon.md)[]

Returns a list of mutator, comment, and warning icons.

#### Returns

[`Icon`](Icon.md)[]

List of icons.

#### Defined in

node_modules/blockly/blockly.d.ts:15177

---

### getInheritedDisabled()

> **getInheritedDisabled**(): `boolean`

Get whether the block is disabled or not due to parents.
The block's own disabled property is not considered.

#### Returns

`boolean`

True if disabled.

#### Inherited from

[`Block`](Block.md).[`getInheritedDisabled`](Block.md#getinheriteddisabled)

#### Defined in

node_modules/blockly/blockly.d.ts:19460

---

### getInput()

> **getInput**(`name`): [`Input`](Input.md)

Fetches the named input object.

#### Parameters

##### name

`string`

The name of the input.

#### Returns

[`Input`](Input.md)

The input object, or null if input does not exist.

#### Inherited from

[`Block`](Block.md).[`getInput`](Block.md#getinput)

#### Defined in

node_modules/blockly/blockly.d.ts:19638

---

### getInputsInline()

> **getInputsInline**(): `boolean`

Get whether value inputs are arranged horizontally or vertically.

#### Returns

`boolean`

True if inputs are horizontal.

#### Inherited from

[`Block`](Block.md).[`getInputsInline`](Block.md#getinputsinline)

#### Defined in

node_modules/blockly/blockly.d.ts:19434

---

### getInputTargetBlock()

> **getInputTargetBlock**(`name`): [`Block`](Block.md)

Fetches the block attached to the named input.

#### Parameters

##### name

`string`

The name of the input.

#### Returns

[`Block`](Block.md)

The attached value block, or null if the input is
either disconnected or if the input does not exist.

#### Inherited from

[`Block`](Block.md).[`getInputTargetBlock`](Block.md#getinputtargetblock)

#### Defined in

node_modules/blockly/blockly.d.ts:19645

---

### getInputWithBlock()

> **getInputWithBlock**(`block`): [`Input`](Input.md)

Return the input that connects to the specified block.

#### Parameters

##### block

[`Block`](Block.md)

A block connected to an input on this block.

#### Returns

[`Input`](Input.md)

The input (if any) that connects to the specified
block.

#### Inherited from

[`Block`](Block.md).[`getInputWithBlock`](Block.md#getinputwithblock)

#### Defined in

node_modules/blockly/blockly.d.ts:19159

---

### getMatchingConnection()

> **getMatchingConnection**(`otherBlock`, `conn`): [`RenderedConnection`](RenderedConnection.md)

Find the connection on this block that corresponds to the given connection
on the other block.
Used to match connections between a block and its insertion marker.

#### Parameters

##### otherBlock

[`Block`](Block.md)

The other block to match against.

##### conn

[`Connection`](Connection.md)

The other connection to match.

#### Returns

[`RenderedConnection`](RenderedConnection.md)

The matching connection on this block,
or null.

#### Package

#### Overrides

[`Block`](Block.md).[`getMatchingConnection`](Block.md#getmatchingconnection)

#### Defined in

node_modules/blockly/blockly.d.ts:15561

---

### getNextBlock()

> **getNextBlock**(): [`Block`](Block.md)

Return the next statement block directly connected to this block.

#### Returns

[`Block`](Block.md)

The next statement block or null.

#### Inherited from

[`Block`](Block.md).[`getNextBlock`](Block.md#getnextblock)

#### Defined in

node_modules/blockly/blockly.d.ts:19171

---

### getOutputShape()

> **getOutputShape**(): `number`

Get the block's output shape.

#### Returns

`number`

Value representing output shape if one exists.

#### Inherited from

[`Block`](Block.md).[`getOutputShape`](Block.md#getoutputshape)

#### Defined in

node_modules/blockly/blockly.d.ts:19444

---

### getParent()

> **getParent**(): [`BlockSvg`](BlockSvg.md)

Return the parent block or null if this block is at the top level.

#### Returns

[`BlockSvg`](BlockSvg.md)

The block (if any) that holds the current block.

#### Overrides

[`Block`](Block.md).[`getParent`](Block.md#getparent)

#### Defined in

node_modules/blockly/blockly.d.ts:15596

---

### getPreviousBlock()

> **getPreviousBlock**(): [`Block`](Block.md)

Returns the block connected to the previous connection.

#### Returns

[`Block`](Block.md)

The previous statement block or null.

#### Inherited from

[`Block`](Block.md).[`getPreviousBlock`](Block.md#getpreviousblock)

#### Defined in

node_modules/blockly/blockly.d.ts:19176

---

### getRelativeToSurfaceXY()

> **getRelativeToSurfaceXY**(): [`Coordinate`](../utils/classes/Coordinate.md)

Return the coordinates of the top-left corner of this block relative to the
drawing surface's origin (0,0), in workspace units.
If the block is on the workspace, (0, 0) is the origin of the workspace
coordinate system.
This does not change with workspace scale.

#### Returns

[`Coordinate`](../utils/classes/Coordinate.md)

Object with .x and .y properties in
workspace coordinates.

#### Overrides

[`Block`](Block.md).[`getRelativeToSurfaceXY`](Block.md#getrelativetosurfacexy)

#### Defined in

node_modules/blockly/blockly.d.ts:15194

---

### getRootBlock()

> **getRootBlock**(): [`BlockSvg`](BlockSvg.md)

Return the top-most block in this block's tree.
This will return itself if this block is at the top level.

#### Returns

[`BlockSvg`](BlockSvg.md)

The root block.

#### Overrides

[`Block`](Block.md).[`getRootBlock`](Block.md#getrootblock)

#### Defined in

node_modules/blockly/blockly.d.ts:15603

---

### getStyleName()

> **getStyleName**(): `string`

Get the name of the block style.

#### Returns

`string`

Name of the block style.

#### Inherited from

[`Block`](Block.md).[`getStyleName`](Block.md#getstylename)

#### Defined in

node_modules/blockly/blockly.d.ts:19327

---

### getSurroundParent()

> **getSurroundParent**(): [`Block`](Block.md)

Return the parent block that surrounds the current block, or null if this
block has no surrounding block. A parent block might just be the previous
statement, whereas the surrounding block is an if statement, while loop, etc.

#### Returns

[`Block`](Block.md)

The block (if any) that surrounds the current block.

#### Inherited from

[`Block`](Block.md).[`getSurroundParent`](Block.md#getsurroundparent)

#### Defined in

node_modules/blockly/blockly.d.ts:19166

---

### getSvgRoot()

> **getSvgRoot**(): `SVGGElement`

Return the root node of the SVG or null if none exists.

#### Returns

`SVGGElement`

The root SVG node (probably a group).

#### Defined in

node_modules/blockly/blockly.d.ts:15344

---

### getTooltip()

> **getTooltip**(): `string`

Returns the tooltip text for this block.

#### Returns

`string`

The tooltip text for this block.

#### Inherited from

[`Block`](Block.md).[`getTooltip`](Block.md#gettooltip)

#### Defined in

node_modules/blockly/blockly.d.ts:19317

---

### getTopStackBlock()

> **getTopStackBlock**(): [`Block`](Block.md)

Walk up from the given block up through the stack of blocks to find
the top block of the sub stack. If we are nested in a statement input only
find the top-most nested block. Do not go all the way to the root block.

#### Returns

[`Block`](Block.md)

The top block in a stack.

#### Package

#### Inherited from

[`Block`](Block.md).[`getTopStackBlock`](Block.md#gettopstackblock)

#### Defined in

node_modules/blockly/blockly.d.ts:19197

---

### getVarModels()

> **getVarModels**(): [`VariableModel`](VariableModel.md)[]

Return all variables referenced by this block.

#### Returns

[`VariableModel`](VariableModel.md)[]

List of variable models.

#### Package

#### Inherited from

[`Block`](Block.md).[`getVarModels`](Block.md#getvarmodels)

#### Defined in

node_modules/blockly/blockly.d.ts:19375

---

### getVars()

> **getVars**(): `string`[]

Return all variables referenced by this block.

#### Returns

`string`[]

List of variable ids.

#### Inherited from

[`Block`](Block.md).[`getVars`](Block.md#getvars)

#### Defined in

node_modules/blockly/blockly.d.ts:19369

---

### highlightShapeForInput()

> **highlightShapeForInput**(`conn`, `add`): `void`

Visual effect to show that if the dragging block is dropped it will connect
to this input.

#### Parameters

##### conn

[`Connection`](Connection.md)

The connection on the input to highlight.

##### add

`boolean`

True if highlighting should be added.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:15661

---

### initModel()

> **initModel**(): `void`

Call initModel on all fields on the block.
May be called more than once.
Either initModel or initSvg must be called after creating a block and before
the first interaction with it. Interactions include UI actions
(e.g. clicking and dragging) and firing events (e.g. create, delete, and
change).

#### Returns

`void`

#### Inherited from

[`Block`](Block.md).[`initModel`](Block.md#initmodel)

#### Defined in

node_modules/blockly/blockly.d.ts:19089

---

### initSvg()

> **initSvg**(): `void`

Create and initialize the SVG representation of the block.
May be called more than once.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:15151

---

### isCollapsed()

> **isCollapsed**(): `boolean`

Get whether the block is collapsed or not.

#### Returns

`boolean`

True if collapsed.

#### Inherited from

[`Block`](Block.md).[`isCollapsed`](Block.md#iscollapsed)

#### Defined in

node_modules/blockly/blockly.d.ts:19465

---

### isDeletable()

> **isDeletable**(): `boolean`

Get whether this block is deletable or not.

#### Returns

`boolean`

True if deletable.

#### Inherited from

[`Block`](Block.md).[`isDeletable`](Block.md#isdeletable)

#### Defined in

node_modules/blockly/blockly.d.ts:19227

---

### isDisposed()

> **isDisposed**(): `boolean`

Returns if this block has been disposed of / deleted.

#### Returns

`boolean`

True if this block has been disposed of / deleted.

#### Inherited from

[`Block`](Block.md).[`isDisposed`](Block.md#isdisposed)

#### Defined in

node_modules/blockly/blockly.d.ts:19288

---

### isDuplicatable()

> **isDuplicatable**(): `boolean`

Get whether is block is duplicatable or not. If duplicating this block and
descendants will put this block over the workspace's capacity this block is
not duplicatable. If duplicating this block and descendants will put any
type over their maxInstances this block is not duplicatable.

#### Returns

`boolean`

True if duplicatable.

#### Inherited from

[`Block`](Block.md).[`isDuplicatable`](Block.md#isduplicatable)

#### Defined in

node_modules/blockly/blockly.d.ts:19250

---

### isEditable()

> **isEditable**(): `boolean`

Get whether this block is editable or not.

#### Returns

`boolean`

True if editable.

#### Inherited from

[`Block`](Block.md).[`isEditable`](Block.md#iseditable)

#### Defined in

node_modules/blockly/blockly.d.ts:19278

---

### isEnabled()

> **isEnabled**(): `boolean`

Get whether this block is enabled or not.

#### Returns

`boolean`

True if enabled.

#### Inherited from

[`Block`](Block.md).[`isEnabled`](Block.md#isenabled)

#### Defined in

node_modules/blockly/blockly.d.ts:19449

---

### isInsertionMarker()

> **isInsertionMarker**(): `boolean`

Get whether this block is an insertion marker block or not.

#### Returns

`boolean`

True if an insertion marker.

#### Inherited from

[`Block`](Block.md).[`isInsertionMarker`](Block.md#isinsertionmarker)

#### Defined in

node_modules/blockly/blockly.d.ts:19266

---

### isMovable()

> **isMovable**(): `boolean`

Get whether this block is movable or not.

#### Returns

`boolean`

True if movable.

#### Inherited from

[`Block`](Block.md).[`isMovable`](Block.md#ismovable)

#### Defined in

node_modules/blockly/blockly.d.ts:19237

---

### isShadow()

> **isShadow**(): `boolean`

Get whether this block is a shadow block or not.

#### Returns

`boolean`

True if a shadow.

#### Inherited from

[`Block`](Block.md).[`isShadow`](Block.md#isshadow)

#### Defined in

node_modules/blockly/blockly.d.ts:19255

---

### jsonInit()

> **jsonInit**(`json`): `void`

Initialize this block using a cross-platform, internationalization-friendly
JSON description.

#### Parameters

##### json

`any`

Structured data describing the block.

#### Returns

`void`

#### Inherited from

[`Block`](Block.md).[`jsonInit`](Block.md#jsoninit)

#### Defined in

node_modules/blockly/blockly.d.ts:19505

---

### lastConnectionInStack()

> **lastConnectionInStack**(`ignoreShadows`): [`RenderedConnection`](RenderedConnection.md)

Walks down a stack of blocks and finds the last next connection on the stack.

#### Parameters

##### ignoreShadows

`boolean`

If true,the last connection on a non-shadow
block will be returned. If false, this will follow shadows to find the
last connection.

#### Returns

[`RenderedConnection`](RenderedConnection.md)

The last next connection on the stack,
or null.

#### Package

#### Overrides

[`Block`](Block.md).[`lastConnectionInStack`](Block.md#lastconnectioninstack)

#### Defined in

node_modules/blockly/blockly.d.ts:15549

---

### makeConnection\_()

> `protected` **makeConnection\_**(`type`): [`RenderedConnection`](RenderedConnection.md)

Create a connection of the specified type.

#### Parameters

##### type

`number`

The type of the connection to create.

#### Returns

[`RenderedConnection`](RenderedConnection.md)

A new connection of the specified type.

#### Overrides

[`Block`](Block.md).[`makeConnection_`](Block.md#makeconnection_)

#### Defined in

node_modules/blockly/blockly.d.ts:15568

---

### markDirty()

> **markDirty**(): `void`

Notify every input on this block to mark its fields as dirty.
A dirty field is a field that needs to be re-rendered.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:15259

---

### mixin()

> **mixin**(`mixinObj`, `opt_disableCheck`?): `void`

Add key/values from mixinObj to this block object. By default, this method
will check that the keys in mixinObj will not overwrite existing values in
the block, including prototype values. This provides some insurance against
mixin / extension incompatibilities with future block features. This check
can be disabled by passing true as the second argument.

#### Parameters

##### mixinObj

`any`

The key/values pairs to add to this block object.

##### opt_disableCheck?

`boolean`

Option flag to disable overwrite checks.

#### Returns

`void`

#### Inherited from

[`Block`](Block.md).[`mixin`](Block.md#mixin)

#### Defined in

node_modules/blockly/blockly.d.ts:19530

---

### moveBy()

> **moveBy**(`dx`, `dy`): `void`

Move a block by a relative offset.

#### Parameters

##### dx

`number`

Horizontal offset in workspace units.

##### dy

`number`

Vertical offset in workspace units.

#### Returns

`void`

#### Overrides

[`Block`](Block.md).[`moveBy`](Block.md#moveby)

#### Defined in

node_modules/blockly/blockly.d.ts:15200

---

### moveConnections()

> **moveConnections**(`dx`, `dy`): `void`

Move the connections for this block and all blocks attached under it.
Also update any attached bubbles.

#### Parameters

##### dx

`number`

Horizontal offset from current location, in workspace
units.

##### dy

`number`

Vertical offset from current location, in workspace
units.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:15309

---

### moveDuringDrag()

> **moveDuringDrag**(`newLoc`): `void`

Move this block during a drag, taking into account whether we are using a
drag surface to translate blocks.
This block must be a top-level block.

#### Parameters

##### newLoc

[`Coordinate`](../utils/classes/Coordinate.md)

The location to translate to, in
workspace coordinates.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:15237

---

### moveInputBefore()

> **moveInputBefore**(`name`, `refName`): `void`

Move a named input to a different location on this block.

#### Parameters

##### name

`string`

The name of the input to move.

##### refName

`string`

Name of input that should be after the moved input,
or null to be the input at the end.

#### Returns

`void`

#### Inherited from

[`Block`](Block.md).[`moveInputBefore`](Block.md#moveinputbefore)

#### Defined in

node_modules/blockly/blockly.d.ts:19617

---

### moveNumberedInputBefore()

> **moveNumberedInputBefore**(`inputIndex`, `refIndex`): `void`

Move a numbered input to a different location on this block.

#### Parameters

##### inputIndex

`number`

Index of the input to move.

##### refIndex

`number`

Index of input that should be after the moved input.

#### Returns

`void`

#### Overrides

[`Block`](Block.md).[`moveNumberedInputBefore`](Block.md#movenumberedinputbefore)

#### Defined in

node_modules/blockly/blockly.d.ts:15509

---

### moveOffDragSurface()

> **moveOffDragSurface**(`newXY`): `void`

Move this block back to the workspace block canvas.
Generally should be called at the same time as setDragging*(false).
Does nothing if useDragSurface* is false.

#### Parameters

##### newXY

[`Coordinate`](../utils/classes/Coordinate.md)

The position the block should take on
on the workspace canvas, in workspace coordinates.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:15228

---

### moveTo()

> **moveTo**(`xy`): `void`

Move a block to a position.

#### Parameters

##### xy

[`Coordinate`](../utils/classes/Coordinate.md)

The position to move to in workspace units.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:15219

---

### moveToDragSurface()

> **moveToDragSurface**(): `void`

Move this block to its workspace's drag surface, accounting for positioning.
Generally should be called at the same time as setDragging*(true).
Does nothing if useDragSurface* is false.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:15214

---

### positionNearConnection()

> **positionNearConnection**(`sourceConnection`, `targetConnection`): `void`

Position a block so that it doesn't move the target block when connected.
The block to position is usually either the first block in a dragged stack or
an insertion marker.

#### Parameters

##### sourceConnection

[`RenderedConnection`](RenderedConnection.md)

The connection on the
moving block's stack.

##### targetConnection

[`RenderedConnection`](RenderedConnection.md)

The connection that
should stay stationary as this block is positioned.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:15590

---

### removeInput()

> **removeInput**(`name`, `opt_quiet`?): `boolean`

Remove an input from this block.

#### Parameters

##### name

`string`

The name of the input.

##### opt_quiet?

`boolean`

True to prevent error if input is not present.

#### Returns

`boolean`

True if operation succeeds, false if input is not present
and opt_quiet is true

#### Throws

if the input is not present and opt_quiet is not true.

#### Overrides

[`Block`](Block.md).[`removeInput`](Block.md#removeinput)

#### Defined in

node_modules/blockly/blockly.d.ts:15503

---

### removeSelect()

> **removeSelect**(): `void`

Removes the visual "select" effect from the block, but does not actually
unselect it or fire an event.

#### Returns

`void`

#### See

BlockSvg#unselect

#### Defined in

node_modules/blockly/blockly.d.ts:15433

---

### renameVarById()

> **renameVarById**(`oldId`, `newId`): `void`

Notification that a variable is renaming.
If the ID matches one of this block's variables, rename it.

#### Parameters

##### oldId

`string`

ID of variable to rename.

##### newId

`string`

ID of new variable. May be the same as oldId, but with
an updated name.

#### Returns

`void`

#### Inherited from

[`Block`](Block.md).[`renameVarById`](Block.md#renamevarbyid)

#### Defined in

node_modules/blockly/blockly.d.ts:19390

---

### render()

> **render**(`opt_bubble`?): `void`

Lays out and reflows a block based on its contents and settings.

#### Parameters

##### opt_bubble?

`boolean`

If false, just render this block.
If true, also render block's parent, grandparent, etc. Defaults to true.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:15609

---

### scheduleSnapAndBump()

> **scheduleSnapAndBump**(): `void`

Schedule snapping to grid and bumping neighbours to occur after a brief
delay.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:15579

---

### select()

> **select**(): `void`

Selects this block. Highlights the block visually and fires a select event
if the block is not already selected.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:15167

---

### setCollapsed()

> **setCollapsed**(`collapsed`): `void`

Set whether the block is collapsed or not.

#### Parameters

##### collapsed

`boolean`

True if collapsed.

#### Returns

`void`

#### Overrides

[`Block`](Block.md).[`setCollapsed`](Block.md#setcollapsed)

#### Defined in

node_modules/blockly/blockly.d.ts:15264

---

### setColour()

> **setColour**(`colour`): `void`

Change the colour of a block.

#### Parameters

##### colour

HSV hue value, or #RRGGBB string.

`string` | `number`

#### Returns

`void`

#### Overrides

[`Block`](Block.md).[`setColour`](Block.md#setcolour)

#### Defined in

node_modules/blockly/blockly.d.ts:15450

---

### setCommentText()

> **setCommentText**(`text`): `void`

Set this block's comment text.

#### Parameters

##### text

`string`

The text, or null to delete.

#### Returns

`void`

#### Overrides

[`Block`](Block.md).[`setCommentText`](Block.md#setcommenttext)

#### Defined in

node_modules/blockly/blockly.d.ts:15394

---

### setConnectionTracking()

> **setConnectionTracking**(`track`): `void`

Sets whether this block's connections are tracked in the database or not.

Used by the deserializer to be more efficient. Setting a connection's
tracked\_ value to false keeps it from adding itself to the db when it
gets its first moveTo call, saving expensive ops for later.

#### Parameters

##### track

`boolean`

If true, start tracking. If false, stop tracking.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:15529

---

### setCursorSvg()

> **setCursorSvg**(`cursorSvg`): `void`

Add the cursor SVG to this block's SVG group.

#### Parameters

##### cursorSvg

`SVGElement`

The SVG root of the cursor to be added to the
block SVG group.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:15628

---

### setDeletable()

> **setDeletable**(`deletable`): `void`

Set whether this block is deletable or not.

#### Parameters

##### deletable

`boolean`

True if deletable.

#### Returns

`void`

#### Inherited from

[`Block`](Block.md).[`setDeletable`](Block.md#setdeletable)

#### Defined in

node_modules/blockly/blockly.d.ts:19232

---

### setDeleteStyle()

> **setDeleteStyle**(`enable`): `void`

Update the cursor over this block by adding or removing a class.

#### Parameters

##### enable

`boolean`

True if the delete cursor should be shown, false
otherwise.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:15440

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

node_modules/blockly/blockly.d.ts:15315

---

### setEditable()

> **setEditable**(`editable`): `void`

Set whether this block is editable or not.

#### Parameters

##### editable

`boolean`

True if editable.

#### Returns

`void`

#### Overrides

[`Block`](Block.md).[`setEditable`](Block.md#seteditable)

#### Defined in

node_modules/blockly/blockly.d.ts:15325

---

### setEnabled()

> **setEnabled**(`enabled`): `void`

Set whether the block is enabled or not.

#### Parameters

##### enabled

`boolean`

True if enabled.

#### Returns

`void`

#### Overrides

[`Block`](Block.md).[`setEnabled`](Block.md#setenabled)

#### Defined in

node_modules/blockly/blockly.d.ts:15415

---

### setFieldValue()

> **setFieldValue**(`newValue`, `name`): `void`

Sets the value of the given field for this block.

#### Parameters

##### newValue

`any`

The value to set.

##### name

`string`

The name of the field to set the value of.

#### Returns

`void`

#### Inherited from

[`Block`](Block.md).[`setFieldValue`](Block.md#setfieldvalue)

#### Defined in

node_modules/blockly/blockly.d.ts:19402

---

### setHelpUrl()

> **setHelpUrl**(`url`): `void`

Set the URL of this block's help page.

#### Parameters

##### url

URL string for block help, or function that
returns a URL. Null for no help.

`string` | `Function`

#### Returns

`void`

#### Inherited from

[`Block`](Block.md).[`setHelpUrl`](Block.md#sethelpurl)

#### Defined in

node_modules/blockly/blockly.d.ts:19304

---

### setHighlighted()

> **setHighlighted**(`highlighted`): `void`

Set whether the block is highlighted or not. Block highlighting is
often used to visually mark blocks currently being executed.

#### Parameters

##### highlighted

`boolean`

True if highlighted.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:15421

---

### setInputsInline()

> **setInputsInline**(`newBoolean`): `void`

Set whether value inputs are arranged horizontally or vertically.

#### Parameters

##### newBoolean

`boolean`

True if inputs are horizontal.

#### Returns

`void`

#### Overrides

[`Block`](Block.md).[`setInputsInline`](Block.md#setinputsinline)

#### Defined in

node_modules/blockly/blockly.d.ts:15494

---

### setInsertionMarker()

> **setInsertionMarker**(`insertionMarker`): `void`

Set whether this block is an insertion marker block or not.
Once set this cannot be unset.

#### Parameters

##### insertionMarker

`boolean`

True if an insertion marker.

#### Returns

`void`

#### Package

#### Overrides

[`Block`](Block.md).[`setInsertionMarker`](Block.md#setinsertionmarker)

#### Defined in

node_modules/blockly/blockly.d.ts:15338

---

### setMarkerSvg()

> **setMarkerSvg**(`markerSvg`): `void`

Add the marker SVG to this block's SVG group.

#### Parameters

##### markerSvg

`SVGElement`

The SVG root of the marker to be added to the
block SVG group.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:15635

---

### setMovable()

> **setMovable**(`movable`): `void`

Set whether this block is movable or not.

#### Parameters

##### movable

`boolean`

True if movable.

#### Returns

`void`

#### Overrides

[`Block`](Block.md).[`setMovable`](Block.md#setmovable)

#### Defined in

node_modules/blockly/blockly.d.ts:15320

---

### setMutator()

> **setMutator**(`mutator`): `void`

Give this block a mutator dialog.

#### Parameters

##### mutator

[`Mutator`](Mutator.md)

A mutator dialog instance or null to remove.

#### Returns

`void`

#### Overrides

[`Block`](Block.md).[`setMutator`](Block.md#setmutator)

#### Defined in

node_modules/blockly/blockly.d.ts:15409

---

### setNextStatement()

> **setNextStatement**(`newBoolean`, `opt_check`?): `void`

Set whether another block can chain onto the bottom of this block.

#### Parameters

##### newBoolean

`boolean`

True if there can be a next statement.

##### opt_check?

Statement type or
list of statement types. Null/undefined if any type could be connected.

`string` | `string`[]

#### Returns

`void`

#### Overrides

[`Block`](Block.md).[`setNextStatement`](Block.md#setnextstatement)

#### Defined in

node_modules/blockly/blockly.d.ts:15481

---

### setOnChange()

> **setOnChange**(`onchangeFn`): `void`

Sets a callback function to use whenever the block's parent workspace
changes, replacing any prior onchange handler. This is usually only called
from the constructor, the block type initializer function, or an extension
initializer function.

#### Parameters

##### onchangeFn

(`arg0`) => `any`

The callback to call
when the block's workspace changes.

#### Returns

`void`

#### Throws

if onchangeFn is not falsey and not a function.

#### Inherited from

[`Block`](Block.md).[`setOnChange`](Block.md#setonchange)

#### Defined in

node_modules/blockly/blockly.d.ts:19356

---

### setOutput()

> **setOutput**(`newBoolean`, `opt_check`?): `void`

Set whether this block returns a value.

#### Parameters

##### newBoolean

`boolean`

True if there is an output.

##### opt_check?

Returned type or list
of returned types. Null or undefined if any type could be returned
(e.g. variable get).

`string` | `string`[]

#### Returns

`void`

#### Overrides

[`Block`](Block.md).[`setOutput`](Block.md#setoutput)

#### Defined in

node_modules/blockly/blockly.d.ts:15489

---

### setOutputShape()

> **setOutputShape**(`outputShape`): `void`

Set the block's output shape.

#### Parameters

##### outputShape

`number`

Value representing an output shape.

#### Returns

`void`

#### Inherited from

[`Block`](Block.md).[`setOutputShape`](Block.md#setoutputshape)

#### Defined in

node_modules/blockly/blockly.d.ts:19439

---

### setParent()

> **setParent**(`newParent`): `void`

Sets the parent of this block to be a new block or null.

#### Parameters

##### newParent

[`Block`](Block.md)

New parent block.

#### Returns

`void`

#### Package

#### Overrides

[`Block`](Block.md).[`setParent`](Block.md#setparent)

#### Defined in

node_modules/blockly/blockly.d.ts:15184

---

### setPreviousStatement()

> **setPreviousStatement**(`newBoolean`, `opt_check`?): `void`

Set whether this block can chain onto the bottom of another block.

#### Parameters

##### newBoolean

`boolean`

True if there can be a previous statement.

##### opt_check?

Statement type or
list of statement types. Null/undefined if any type could be connected.

`string` | `string`[]

#### Returns

`void`

#### Overrides

[`Block`](Block.md).[`setPreviousStatement`](Block.md#setpreviousstatement)

#### Defined in

node_modules/blockly/blockly.d.ts:15474

---

### setShadow()

> **setShadow**(`shadow`): `void`

Sets whether this block is a shadow block or not.

#### Parameters

##### shadow

`boolean`

True if a shadow.

#### Returns

`void`

#### Package

#### Overrides

[`Block`](Block.md).[`setShadow`](Block.md#setshadow)

#### Defined in

node_modules/blockly/blockly.d.ts:15331

---

### setStyle()

> **setStyle**(`blockStyleName`): `void`

Set the style and colour values of a block.

#### Parameters

##### blockStyleName

`string`

Name of the block style.

#### Returns

`void`

#### Throws

if the block style does not exist.

#### Overrides

[`Block`](Block.md).[`setStyle`](Block.md#setstyle)

#### Defined in

node_modules/blockly/blockly.d.ts:15457

---

### setTooltip()

> **setTooltip**(`newTip`): `void`

Sets the tooltip for this block.

#### Parameters

##### newTip

[`TipInfo`](../tooltip/type-aliases/TipInfo.md)

The text for the tooltip, a function
that returns the text for the tooltip, or a parent object whose tooltip
will be used. To not display a tooltip pass the empty string.

#### Returns

`void`

#### Inherited from

[`Block`](Block.md).[`setTooltip`](Block.md#settooltip)

#### Defined in

node_modules/blockly/blockly.d.ts:19312

---

### setWarningText()

> **setWarningText**(`text`, `opt_id`?): `void`

Set this block's warning text.

#### Parameters

##### text

`string`

The text, or null to delete.

##### opt_id?

`string`

An optional ID for the warning text to be able to
maintain multiple warnings.

#### Returns

`void`

#### Overrides

[`Block`](Block.md).[`setWarningText`](Block.md#setwarningtext)

#### Defined in

node_modules/blockly/blockly.d.ts:15403

---

### showContextMenu()

> **showContextMenu**(`e`): `void`

Show the context menu for this block.

#### Parameters

##### e

`Event`

Mouse event.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:15299

---

### showHelp()

> **showHelp**(): `void`

Load the block's help page in a new window.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:15287

---

### snapToGrid()

> **snapToGrid**(): `void`

Snap this block to the nearest grid point.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:15247

---

### tab()

> **tab**(`start`, `forward`): `void`

Open the next (or previous) FieldTextInput.

#### Parameters

##### start

[`Field`](Field.md)

Current field.

##### forward

`boolean`

If true go forward, otherwise backward.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:15276

---

### toCopyData()

> **toCopyData**(): [`CopyData`](../namespaces/ICopyable/type-aliases/CopyData.md)

Encode a block for copying.

#### Returns

[`CopyData`](../namespaces/ICopyable/type-aliases/CopyData.md)

Copy metadata, or null if the block is
an insertion marker.

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:15372

---

### toDevString()

> **toDevString**(): `string`

This method returns a string describing this Block in developer terms (type
name and ID; English only).

Intended to on be used in console logs and errors. If you need a string that
uses the user's native language (including block text, field values, and
child blocks), use [toString()][Block#toString](Block.md#tostring).

#### Returns

`string`

The description.

#### Inherited from

[`Block`](Block.md).[`toDevString`](Block.md#todevstring)

#### Defined in

node_modules/blockly/blockly.d.ts:19705

---

### toString()

> **toString**(`opt_maxLength`?, `opt_emptyToken`?): `string`

Create a human-readable text representation of this block and any children.

#### Parameters

##### opt_maxLength?

`number`

Truncate the string to this length.

##### opt_emptyToken?

`string`

The placeholder string used to denote an
empty field. If not specified, '?' is used.

#### Returns

`string`

Text of block.

#### Inherited from

[`Block`](Block.md).[`toString`](Block.md#tostring)

#### Defined in

node_modules/blockly/blockly.d.ts:19478

---

### translate()

> **translate**(`x`, `y`): `void`

Transforms a block by setting the translation on the transform attribute
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

#### Defined in

node_modules/blockly/blockly.d.ts:15207

---

### unplug()

> **unplug**(`opt_healStack`?): `void`

Unplug this block from its superior block. If this block is a statement,
optionally reconnect the block underneath with the block on top.

#### Parameters

##### opt_healStack?

`boolean`

Disconnect child statement and reconnect
stack. Defaults to false.

#### Returns

`void`

#### Inherited from

[`Block`](Block.md).[`unplug`](Block.md#unplug)

#### Defined in

node_modules/blockly/blockly.d.ts:19096

---

### unselect()

> **unselect**(): `void`

Unselects this block. Unhighlights the block and fires a select (false) event
if the block is currently selected.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:15172

---

### updateDisabled()

> **updateDisabled**(): `void`

Updates the color of the block (and children) to match the current disabled
state.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:15383

---

### updateMarkers\_()

> `protected` **updateMarkers\_**(): `void`

Redraw any attached marker or cursor svgs if needed.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:15614

---

### updateVarName()

> **updateVarName**(`variable`): `void`

Notification that a variable is renaming but keeping the same ID. If the
variable is in use on this block, rerender to show the new name.

#### Parameters

##### variable

[`VariableModel`](VariableModel.md)

The variable being renamed.

#### Returns

`void`

#### Package

#### Inherited from

[`Block`](Block.md).[`updateVarName`](Block.md#updatevarname)

#### Defined in

node_modules/blockly/blockly.d.ts:19382
