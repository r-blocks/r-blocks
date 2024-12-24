# Class: Block

## Extended by

- [`BlockSvg`](BlockSvg.md)

## Constructors

### new Block()

> **new Block**(`workspace`, `prototypeName`, `opt_id`?): [`Block`](Block.md)

Class for one block.
Not normally called directly, workspace.newBlock() is preferred.

#### Parameters

##### workspace

[`Workspace`](Workspace.md)

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

[`Block`](Block.md)

#### Implements

#### Implements

#### Throws

When the prototypeName is not valid or not allowed.

#### Alias

Blockly.Block

#### Defined in

node_modules/blockly/blockly.d.ts:18959

## Properties

### childBlocks\_

> `protected` **childBlocks\_**: [`Block`](Block.md)[]

#### Defined in

node_modules/blockly/blockly.d.ts:18990

---

### collapsed\_

> `protected` **collapsed\_**: `boolean`

#### Defined in

node_modules/blockly/blockly.d.ts:19015

---

### colour\_

> **colour\_**: `string`

#### Defined in

node_modules/blockly/blockly.d.ts:19340

---

### ~~comment~~

> **comment**: `string` \| [`Comment`](Comment.md)

A string representing the comment attached to this block.

#### Deprecated

August 2019. Use getCommentText instead.

#### Defined in

node_modules/blockly/blockly.d.ts:19026

---

### commentModel

> **commentModel**: [`CommentModel`](../namespaces/Block/type-aliases/CommentModel.md)

A model of the comment attached to this block.

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:19032

---

### contextMenu

> **contextMenu**: `boolean`

#### Defined in

node_modules/blockly/blockly.d.ts:18980

---

### data

> **data**: `string`

Optional text data that round-trips between blocks and XML.
Has no effect. May be used by 3rd parties for meta information.

#### Defined in

node_modules/blockly/blockly.d.ts:19711

---

### disposed

> **disposed**: `boolean`

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

#### Defined in

node_modules/blockly/blockly.d.ts:19728

---

### getDeveloperVariables()

> **getDeveloperVariables**: () => `string`[]

An optional property for declaring developer variables. Return a list of
variable names for use by generators. Developer variables are never shown to
the user, but are declared as global variables in the generated code.

#### Returns

`string`[]

#### Defined in

node_modules/blockly/blockly.d.ts:19749

---

### hat

> **hat**: `string`

Name of the type of hat.

#### Defined in

node_modules/blockly/blockly.d.ts:19058

---

### helpUrl

> **helpUrl**: `string` \| `Function`

#### Defined in

node_modules/blockly/blockly.d.ts:19305

---

### hue\_

> **hue\_**: `number`

#### Defined in

node_modules/blockly/blockly.d.ts:19339

---

### id

> **id**: `string`

#### Defined in

node_modules/blockly/blockly.d.ts:18961

---

### init()

> **init**: () => `any`

An optional method called during initialization.

#### Returns

`any`

#### Defined in

node_modules/blockly/blockly.d.ts:19716

---

### inputList

> **inputList**: [`Input`](Input.md)[]

#### Defined in

node_modules/blockly/blockly.d.ts:18969

---

### inputsInline

> **inputsInline**: `boolean`

#### Defined in

node_modules/blockly/blockly.d.ts:18971

---

### inputsInlineDefault

> **inputsInlineDefault**: `boolean`

#### Defined in

node_modules/blockly/blockly.d.ts:19070

---

### isInFlyout

> **isInFlyout**: `boolean`

#### Defined in

node_modules/blockly/blockly.d.ts:19043

---

### isInMutator

> **isInMutator**: `boolean`

#### Defined in

node_modules/blockly/blockly.d.ts:19045

---

### isInsertionMarker\_

> `protected` **isInsertionMarker\_**: `boolean`

True if this block is an insertion marker.

#### Defined in

node_modules/blockly/blockly.d.ts:19053

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

#### Defined in

node_modules/blockly/blockly.d.ts:19722

---

### nextConnection

> **nextConnection**: [`Connection`](Connection.md)

#### Defined in

node_modules/blockly/blockly.d.ts:18965

---

### onchange()

> **onchange**: (`arg0`) => `any`

#### Parameters

##### arg0

[`events/events_abstract`](../events/events/events/events_abstract/index.md)

#### Returns

`any`

#### Defined in

node_modules/blockly/blockly.d.ts:19357

---

### onchangeWrapper\_

> **onchangeWrapper\_**: `any`

#### Defined in

node_modules/blockly/blockly.d.ts:19358

---

### outputConnection

> **outputConnection**: [`Connection`](Connection.md)

#### Defined in

node_modules/blockly/blockly.d.ts:18963

---

### outputShape\_

> `protected` **outputShape\_**: `number`

#### Defined in

node_modules/blockly/blockly.d.ts:19020

---

### parentBlock\_

> `protected` **parentBlock\_**: [`Block`](Block.md)

#### Defined in

node_modules/blockly/blockly.d.ts:18985

---

### previousConnection

> **previousConnection**: [`Connection`](Connection.md)

#### Defined in

node_modules/blockly/blockly.d.ts:18967

---

### rendered

> **rendered**: `boolean`

#### Defined in

node_modules/blockly/blockly.d.ts:19060

---

### RTL

> **RTL**: `boolean`

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

#### Defined in

node_modules/blockly/blockly.d.ts:19735

---

### statementInputCount

> **statementInputCount**: `number`

A count of statement inputs on the block.

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:19066

---

### styleName\_

> **styleName\_**: `string`

#### Defined in

node_modules/blockly/blockly.d.ts:19346

---

### suppressPrefixSuffix

> **suppressPrefixSuffix**: `boolean`

#### Defined in

node_modules/blockly/blockly.d.ts:19506

---

### tooltip

> **tooltip**: [`TipInfo`](../tooltip/type-aliases/TipInfo.md)

#### Defined in

node_modules/blockly/blockly.d.ts:18978

---

### type

> **type**: `string`

#### Defined in

node_modules/blockly/blockly.d.ts:19068

---

### workspace

> **workspace**: [`Workspace`](Workspace.md)

#### Defined in

node_modules/blockly/blockly.d.ts:19041

## Methods

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

#### Defined in

node_modules/blockly/blockly.d.ts:19610

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

#### Defined in

node_modules/blockly/blockly.d.ts:19485

---

### bumpNeighbours()

> **bumpNeighbours**(): `void`

Bump unconnected blocks out of alignment. Two blocks which aren't actually
connected should not coincidentally line up on screen.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:19144

---

### dispose()

> **dispose**(`healStack`): `void`

Dispose of this block.

#### Parameters

##### healStack

`boolean`

If true, then try to heal any gap by connecting
the next statement with the previous statement. Otherwise, dispose of
all children of this block.

#### Returns

`void`

#### Suppress

#### Defined in

node_modules/blockly/blockly.d.ts:19078

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

#### Defined in

node_modules/blockly/blockly.d.ts:19206

---

### getColour()

> **getColour**(): `string`

Get the colour of a block.

#### Returns

`string`

#RRGGBB string.

#### Defined in

node_modules/blockly/blockly.d.ts:19322

---

### getCommentText()

> **getCommentText**(): `string`

Returns the comment on this block (or null if there is no comment).

#### Returns

`string`

Block's comment.

#### Defined in

node_modules/blockly/blockly.d.ts:19650

---

### getConnections\_()

> **getConnections\_**(`_all`): [`Connection`](Connection.md)[]

Returns all connections originating from this block.

#### Parameters

##### \_all

`boolean`

If true, return all connections even hidden ones.

#### Returns

[`Connection`](Connection.md)[]

Array of connections.

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:19130

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

#### Defined in

node_modules/blockly/blockly.d.ts:19183

---

### getHue()

> **getHue**(): `number`

Get the HSV hue value of a block. Null if hue not set.

#### Returns

`number`

Hue value (0-360).

#### Defined in

node_modules/blockly/blockly.d.ts:19332

---

### getInheritedDisabled()

> **getInheritedDisabled**(): `boolean`

Get whether the block is disabled or not due to parents.
The block's own disabled property is not considered.

#### Returns

`boolean`

True if disabled.

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

#### Defined in

node_modules/blockly/blockly.d.ts:19638

---

### getInputsInline()

> **getInputsInline**(): `boolean`

Get whether value inputs are arranged horizontally or vertically.

#### Returns

`boolean`

True if inputs are horizontal.

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

#### Defined in

node_modules/blockly/blockly.d.ts:19159

---

### getMatchingConnection()

> **getMatchingConnection**(`otherBlock`, `conn`): [`Connection`](Connection.md)

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

[`Connection`](Connection.md)

The matching connection on this block, or null.

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:19298

---

### getNextBlock()

> **getNextBlock**(): [`Block`](Block.md)

Return the next statement block directly connected to this block.

#### Returns

[`Block`](Block.md)

The next statement block or null.

#### Defined in

node_modules/blockly/blockly.d.ts:19171

---

### getOutputShape()

> **getOutputShape**(): `number`

Get the block's output shape.

#### Returns

`number`

Value representing output shape if one exists.

#### Defined in

node_modules/blockly/blockly.d.ts:19444

---

### getParent()

> **getParent**(): [`Block`](Block.md)

Return the parent block or null if this block is at the top level. The parent
block is either the block connected to the previous connection (for a
statement block) or the block connected to the output connection (for a value
block).

#### Returns

[`Block`](Block.md)

The block (if any) that holds the current block.

#### Defined in

node_modules/blockly/blockly.d.ts:19152

---

### getPreviousBlock()

> **getPreviousBlock**(): [`Block`](Block.md)

Returns the block connected to the previous connection.

#### Returns

[`Block`](Block.md)

The previous statement block or null.

#### Defined in

node_modules/blockly/blockly.d.ts:19176

---

### getRelativeToSurfaceXY()

> **getRelativeToSurfaceXY**(): [`Coordinate`](../utils/classes/Coordinate.md)

Return the coordinates of the top-left corner of this block relative to the
drawing surface's origin (0,0), in workspace units.

#### Returns

[`Coordinate`](../utils/classes/Coordinate.md)

Object with .x and .y properties.

#### Defined in

node_modules/blockly/blockly.d.ts:19674

---

### getRootBlock()

> **getRootBlock**(): [`Block`](Block.md)

Return the top-most block in this block's tree.
This will return itself if this block is at the top level.

#### Returns

[`Block`](Block.md)

The root block.

#### Defined in

node_modules/blockly/blockly.d.ts:19189

---

### getStyleName()

> **getStyleName**(): `string`

Get the name of the block style.

#### Returns

`string`

Name of the block style.

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

#### Defined in

node_modules/blockly/blockly.d.ts:19166

---

### getTooltip()

> **getTooltip**(): `string`

Returns the tooltip text for this block.

#### Returns

`string`

The tooltip text for this block.

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

#### Defined in

node_modules/blockly/blockly.d.ts:19375

---

### getVars()

> **getVars**(): `string`[]

Return all variables referenced by this block.

#### Returns

`string`[]

List of variable ids.

#### Defined in

node_modules/blockly/blockly.d.ts:19369

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

#### Defined in

node_modules/blockly/blockly.d.ts:19089

---

### isCollapsed()

> **isCollapsed**(): `boolean`

Get whether the block is collapsed or not.

#### Returns

`boolean`

True if collapsed.

#### Defined in

node_modules/blockly/blockly.d.ts:19465

---

### isDeletable()

> **isDeletable**(): `boolean`

Get whether this block is deletable or not.

#### Returns

`boolean`

True if deletable.

#### Defined in

node_modules/blockly/blockly.d.ts:19227

---

### isDisposed()

> **isDisposed**(): `boolean`

Returns if this block has been disposed of / deleted.

#### Returns

`boolean`

True if this block has been disposed of / deleted.

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

#### Defined in

node_modules/blockly/blockly.d.ts:19250

---

### isEditable()

> **isEditable**(): `boolean`

Get whether this block is editable or not.

#### Returns

`boolean`

True if editable.

#### Defined in

node_modules/blockly/blockly.d.ts:19278

---

### isEnabled()

> **isEnabled**(): `boolean`

Get whether this block is enabled or not.

#### Returns

`boolean`

True if enabled.

#### Defined in

node_modules/blockly/blockly.d.ts:19449

---

### isInsertionMarker()

> **isInsertionMarker**(): `boolean`

Get whether this block is an insertion marker block or not.

#### Returns

`boolean`

True if an insertion marker.

#### Defined in

node_modules/blockly/blockly.d.ts:19266

---

### isMovable()

> **isMovable**(): `boolean`

Get whether this block is movable or not.

#### Returns

`boolean`

True if movable.

#### Defined in

node_modules/blockly/blockly.d.ts:19237

---

### isShadow()

> **isShadow**(): `boolean`

Get whether this block is a shadow block or not.

#### Returns

`boolean`

True if a shadow.

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

#### Defined in

node_modules/blockly/blockly.d.ts:19505

---

### lastConnectionInStack()

> **lastConnectionInStack**(`ignoreShadows`): [`Connection`](Connection.md)

Walks down a stack of blocks and finds the last next connection on the stack.

#### Parameters

##### ignoreShadows

`boolean`

If true,the last connection on a non-shadow
block will be returned. If false, this will follow shadows to find the
last connection.

#### Returns

[`Connection`](Connection.md)

The last next connection on the stack, or null.

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:19139

---

### makeConnection\_()

> `protected` **makeConnection\_**(`type`): [`Connection`](Connection.md)

Create a connection of the specified type.

#### Parameters

##### type

`number`

The type of the connection to create.

#### Returns

[`Connection`](Connection.md)

A new connection of the specified type.

#### Defined in

node_modules/blockly/blockly.d.ts:19687

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

#### Defined in

node_modules/blockly/blockly.d.ts:19530

---

### moveBy()

> **moveBy**(`dx`, `dy`): `void`

Move a block by a relative offset.

#### Parameters

##### dx

`number`

Horizontal offset, in workspace units.

##### dy

`number`

Vertical offset, in workspace units.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:19680

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

#### Defined in

node_modules/blockly/blockly.d.ts:19623

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

True to prevent an error if input is not present.

#### Returns

`boolean`

True if operation succeeds, false if input is not present
and opt_quiet is true.

#### Throws

if the input is not present and opt_quiet is not true.

#### Defined in

node_modules/blockly/blockly.d.ts:19632

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

#### Defined in

node_modules/blockly/blockly.d.ts:19390

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

#### Defined in

node_modules/blockly/blockly.d.ts:19470

---

### setColour()

> **setColour**(`colour`): `void`

Change the colour of a block.

#### Parameters

##### colour

HSV hue value (0 to 360), #RRGGBB string,
or a message reference string pointing to one of those two values.

`string` | `number`

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:19338

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

#### Defined in

node_modules/blockly/blockly.d.ts:19655

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

#### Defined in

node_modules/blockly/blockly.d.ts:19232

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

#### Defined in

node_modules/blockly/blockly.d.ts:19283

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

#### Defined in

node_modules/blockly/blockly.d.ts:19454

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

#### Defined in

node_modules/blockly/blockly.d.ts:19304

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

#### Defined in

node_modules/blockly/blockly.d.ts:19429

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

#### Defined in

node_modules/blockly/blockly.d.ts:19273

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

#### Defined in

node_modules/blockly/blockly.d.ts:19242

---

### setMutator()

> **setMutator**(`_mutator`): `void`

Give this block a mutator dialog.

#### Parameters

##### \_mutator

[`Mutator`](Mutator.md)

A mutator dialog instance or null to
remove.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:19668

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

#### Defined in

node_modules/blockly/blockly.d.ts:19416

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

#### Defined in

node_modules/blockly/blockly.d.ts:19424

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

#### Defined in

node_modules/blockly/blockly.d.ts:19439

---

### setParent()

> **setParent**(`newParent`): `void`

Set parent of this block to be a new block or null.

#### Parameters

##### newParent

[`Block`](Block.md)

New parent block.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:19212

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

#### Defined in

node_modules/blockly/blockly.d.ts:19409

---

### setShadow()

> **setShadow**(`shadow`): `void`

Set whether this block is a shadow block or not.

#### Parameters

##### shadow

`boolean`

True if a shadow.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:19261

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

#### Defined in

node_modules/blockly/blockly.d.ts:19345

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

#### Defined in

node_modules/blockly/blockly.d.ts:19312

---

### setWarningText()

> **setWarningText**(`_text`, `_opt_id`?): `void`

Set this block's warning text.

#### Parameters

##### \_text

`string`

The text, or null to delete.

##### \_opt_id?

`string`

An optional ID for the warning text to be able to
maintain multiple warnings.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:19662

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

#### Defined in

node_modules/blockly/blockly.d.ts:19478

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

#### Defined in

node_modules/blockly/blockly.d.ts:19096

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

#### Defined in

node_modules/blockly/blockly.d.ts:19382
