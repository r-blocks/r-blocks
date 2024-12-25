# Class: Workspace

## Extended by

- [`WorkspaceSvg`](WorkspaceSvg.md)

## Constructors

### new Workspace()

> **new Workspace**(`opt_options`?): [`Workspace`](Workspace.md)

Class for a workspace. This is a data structure that contains blocks.
There is no UI, and can be created headlessly.

#### Parameters

##### opt_options?

[`Options`](Options.md)

Dictionary of options.

#### Returns

[`Workspace`](Workspace.md)

#### Implements

#### Alias

Blockly.Workspace

#### Defined in

node_modules/blockly/blockly.d.ts:4578

## Properties

### connectionChecker

> **connectionChecker**: [`IConnectionChecker`](IConnectionChecker.md)

An object that encapsulates logic for safety, type, and dragging checks.

#### Defined in

node_modules/blockly/blockly.d.ts:4593

---

### connectionDBList

> **connectionDBList**: [`ConnectionDB`](ConnectionDB.md)[]

Set of databases for rapid lookup of connection locations.

#### Defined in

node_modules/blockly/blockly.d.ts:4966

---

### horizontalLayout

> **horizontalLayout**: `boolean`

#### Defined in

node_modules/blockly/blockly.d.ts:4586

---

### id

> **id**: `string`

#### Defined in

node_modules/blockly/blockly.d.ts:4580

---

### isClearing

> **isClearing**: `boolean`

#### Defined in

node_modules/blockly/blockly.d.ts:4737

---

### MAX_UNDO

> **MAX_UNDO**: `number`

Maximum number of undo events in stack. `0` turns off undo, `Infinity` sets
it to unlimited.

#### Defined in

node_modules/blockly/blockly.d.ts:4961

---

### options

> **options**: [`Options`](Options.md)

#### Defined in

node_modules/blockly/blockly.d.ts:4582

---

### redoStack\_

> `protected` **redoStack\_**: [`events/events_abstract`](../events/events/events/events_abstract/index.md)[]

#### Defined in

node_modules/blockly/blockly.d.ts:4623

---

### rendered

> **rendered**: `boolean`

Returns `true` if the workspace is visible and `false` if it's headless.

#### Defined in

node_modules/blockly/blockly.d.ts:4955

---

### RTL

> **RTL**: `boolean`

#### Defined in

node_modules/blockly/blockly.d.ts:4584

---

### toolboxPosition

> **toolboxPosition**: `number`

#### Defined in

node_modules/blockly/blockly.d.ts:4588

---

### undoStack\_

> `protected` **undoStack\_**: [`events/events_abstract`](../events/events/events/events_abstract/index.md)[]

#### Defined in

node_modules/blockly/blockly.d.ts:4618

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

#### Defined in

node_modules/blockly/blockly.d.ts:4882

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

#### Defined in

node_modules/blockly/blockly.d.ts:4675

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

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:4711

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

#### Defined in

node_modules/blockly/blockly.d.ts:4692

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

#### Defined in

node_modules/blockly/blockly.d.ts:4927

---

### clear()

> **clear**(): `void`

Dispose of all blocks and comments in workspace.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:4736

---

### clearUndo()

> **clearUndo**(): `void`

Clear the undo/redo stacks.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:4873

---

### createPotentialVariableMap()

> **createPotentialVariableMap**(): `void`

Create and store the potential variable map for this workspace.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:4939

---

### createVariable()

> **createVariable**(`name`, `opt_type`?, `opt_id`?): [`VariableModel`](VariableModel.md)

Create a variable with a given name, optional type, and optional ID.

#### Parameters

##### name

`string`

The name of the variable. This must be unique across
variables and procedures.

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

#### Defined in

node_modules/blockly/blockly.d.ts:4756

---

### deleteVariableById()

> **deleteVariableById**(`id`): `void`

Delete a variables by the passed in ID and all of its uses from this
workspace. May prompt the user for confirmation.

#### Parameters

##### id

`string`

ID of variable to delete.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:4768

---

### dispose()

> **dispose**(): `void`

Dispose of this workspace.
Unlink from all DOM elements to prevent memory leaks.

#### Returns

`void`

#### Suppress

#### Defined in

node_modules/blockly/blockly.d.ts:4658

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

#### Defined in

node_modules/blockly/blockly.d.ts:4732

---

### getAllVariableNames()

> **getAllVariableNames**(): `string`[]

Returns all variable names of all types.

#### Returns

`string`[]

List of all variable names of all types.

#### Defined in

node_modules/blockly/blockly.d.ts:4806

---

### getAllVariables()

> **getAllVariables**(): [`VariableModel`](VariableModel.md)[]

Return all variables of all types.

#### Returns

[`VariableModel`](VariableModel.md)[]

List of variable models.

#### Defined in

node_modules/blockly/blockly.d.ts:4801

---

### getBlockById()

> **getBlockById**(`id`): [`Block`](Block.md)

Find the block on this workspace with the specified ID.

#### Parameters

##### id

`string`

ID of block to find.

#### Returns

[`Block`](Block.md)

The sought after block, or null if not found.

#### Defined in

node_modules/blockly/blockly.d.ts:4898

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

#### Defined in

node_modules/blockly/blockly.d.ts:4705

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

#### Defined in

node_modules/blockly/blockly.d.ts:4919

---

### getPotentialVariableMap()

> **getPotentialVariableMap**(): [`VariableMap`](VariableMap.md)

Return the variable map that contains "potential" variables.
These exist in the flyout but not in the workspace.

#### Returns

[`VariableMap`](VariableMap.md)

The potential variable map.

#### Package

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

#### Defined in

node_modules/blockly/blockly.d.ts:4864

---

### getTopBlocks()

> **getTopBlocks**(`ordered`): [`Block`](Block.md)[]

Finds the top-level blocks and returns them. Blocks are optionally sorted
by position; top to bottom (with slight LTR or RTL bias).

#### Parameters

##### ordered

`boolean`

Sort the list if true.

#### Returns

[`Block`](Block.md)[]

The top-level block objects.

#### Defined in

node_modules/blockly/blockly.d.ts:4687

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

#### Defined in

node_modules/blockly/blockly.d.ts:4782

---

### getVariableMap()

> **getVariableMap**(): [`VariableMap`](VariableMap.md)

Return the map of all variables on the workspace.

#### Returns

[`VariableMap`](VariableMap.md)

The variable map.

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

#### Defined in

node_modules/blockly/blockly.d.ts:4762

---

### getWidth()

> **getWidth**(): `number`

Returns the horizontal offset of the workspace.
Intended for LTR/RTL compatibility in XML.
Not relevant for a headless workspace.

#### Returns

`number`

Width.

#### Defined in

node_modules/blockly/blockly.d.ts:4813

---

### hasBlockLimits()

> **hasBlockLimits**(): `boolean`

Checks if the workspace has any limits on the maximum number of blocks,
or the maximum number of blocks of specific types.

#### Returns

`boolean`

True if it has block limits, false otherwise.

#### Defined in

node_modules/blockly/blockly.d.ts:4852

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

#### Defined in

node_modules/blockly/blockly.d.ts:4846

---

### newBlock()

> **newBlock**(`prototypeName`, `opt_id`?): [`Block`](Block.md)

Obtain a newly created block.

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

[`Block`](Block.md)

The created block.

#### Defined in

node_modules/blockly/blockly.d.ts:4822

---

### remainingCapacity()

> **remainingCapacity**(): `number`

The number of blocks that may be added to the workspace before reaching
the maxBlocks.

#### Returns

`number`

Number of blocks left.

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

#### Defined in

node_modules/blockly/blockly.d.ts:4911

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

#### Defined in

node_modules/blockly/blockly.d.ts:4887

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

#### Defined in

node_modules/blockly/blockly.d.ts:4680

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

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:4717

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

#### Defined in

node_modules/blockly/blockly.d.ts:4697

---

### renameVariableById()

> **renameVariableById**(`id`, `newName`): `void`

Rename a variable by updating its name in the variable map. Identify the
variable to rename with the given ID.

#### Parameters

##### id

`string`

ID of the variable to rename.

##### newName

`string`

New variable name.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:4744

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

#### Defined in

node_modules/blockly/blockly.d.ts:4905

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

#### Defined in

node_modules/blockly/blockly.d.ts:4950

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

#### Defined in

node_modules/blockly/blockly.d.ts:4869

---

### getAll()

> `static` **getAll**(): [`Workspace`](Workspace.md)[]

Find all workspaces.

#### Returns

[`Workspace`](Workspace.md)[]

Array of workspaces.

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

#### Defined in

node_modules/blockly/blockly.d.ts:4564
