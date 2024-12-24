# Class: VariableMap

## Constructors

### new VariableMap()

> **new VariableMap**(`workspace`): [`VariableMap`](VariableMap.md)

Class for a variable map. This contains a dictionary data structure with
variable types as keys and lists of variables as values. The list of
variables are the type indicated by the key.

#### Parameters

##### workspace

[`Workspace`](Workspace.md)

The workspace this map belongs to.

#### Returns

[`VariableMap`](VariableMap.md)

#### Alias

Blockly.VariableMap

#### Defined in

node_modules/blockly/blockly.d.ts:3878

## Properties

### workspace

> **workspace**: [`Workspace`](Workspace.md)

The workspace this map belongs to.

#### Defined in

node_modules/blockly/blockly.d.ts:3891

## Methods

### clear()

> **clear**(): `void`

Clear the variable map.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:3895

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

node_modules/blockly/blockly.d.ts:3945

---

### deleteVariable()

> **deleteVariable**(`variable`): `void`

Delete a variable.

#### Parameters

##### variable

[`VariableModel`](VariableModel.md)

Variable to delete.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:3950

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

node_modules/blockly/blockly.d.ts:3956

---

### deleteVariableInternal()

> **deleteVariableInternal**(`variable`, `uses`): `void`

Deletes a variable and all of its uses from this workspace without asking the
user for confirmation.

#### Parameters

##### variable

[`VariableModel`](VariableModel.md)

Variable to delete.

##### uses

[`Block`](Block.md)[]

An array of uses of the variable.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:3964

---

### getAllVariableNames()

> **getAllVariableNames**(): `string`[]

Returns all of the variable names of all types.

#### Returns

`string`[]

All of the variable names of all types.

#### Defined in

node_modules/blockly/blockly.d.ts:4008

---

### getAllVariables()

> **getAllVariables**(): [`VariableModel`](VariableModel.md)[]

Return all variables of all types.

#### Returns

[`VariableModel`](VariableModel.md)[]

List of variable models.

#### Defined in

node_modules/blockly/blockly.d.ts:4003

---

### getVariable()

> **getVariable**(`name`, `opt_type`?): [`VariableModel`](VariableModel.md)

Find the variable by the given name and type and return it. Return null if
it is not found.

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

The variable with the given name, or null if
it was not found.

#### Defined in

node_modules/blockly/blockly.d.ts:3974

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

node_modules/blockly/blockly.d.ts:3980

---

### getVariablesOfType()

> **getVariablesOfType**(`type`): [`VariableModel`](VariableModel.md)[]

Get a list containing all of the variables of a specified type. If type is
null, return list of variables with empty string type.

#### Parameters

##### type

`string`

Type of the variables to find.

#### Returns

[`VariableModel`](VariableModel.md)[]

The sought after variables of the
passed in type. An empty array if none are found.

#### Defined in

node_modules/blockly/blockly.d.ts:3988

---

### getVariableTypes()

> **getVariableTypes**(`ws`): `string`[]

Return all variable and potential variable types. This list always contains
the empty string.

#### Parameters

##### ws

[`Workspace`](Workspace.md)

The workspace used to look for potential
variables. This can be different than the workspace stored on this object
if the passed in ws is a flyout workspace.

#### Returns

`string`[]

List of variable types.

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:3998

---

### getVariableUsesById()

> **getVariableUsesById**(`id`): [`Block`](Block.md)[]

Find all the uses of a named variable.

#### Parameters

##### id

`string`

ID of the variable to find.

#### Returns

[`Block`](Block.md)[]

Array of block usages.

#### Defined in

node_modules/blockly/blockly.d.ts:4014

---

### renameVariable()

> **renameVariable**(`variable`, `newName`): `void`

Rename the given variable by updating its name in the variable map.

#### Parameters

##### variable

[`VariableModel`](VariableModel.md)

Variable to rename.

##### newName

`string`

New variable name.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:3902

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

node_modules/blockly/blockly.d.ts:3909
