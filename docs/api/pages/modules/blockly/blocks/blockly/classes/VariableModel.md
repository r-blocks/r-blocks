# Class: VariableModel

Class for a variable model.
Holds information for the variable including name, ID, and type.

## Param

The variable's workspace.

## Param

The name of the variable. This is the user-visible name
(e.g. 'my var' or '私の変数'), not the generated name.

## Param

The type of the variable like 'int' or 'string'.
Does not need to be unique. Field_variable can filter variables based on
their type. This will default to '' which is a specific type.

## Param

The unique ID of the variable. This will default to
a UUID.

## See

## Alias

Blockly.VariableModel

## Constructors

### new VariableModel()

> **new VariableModel**(`workspace`, `name`, `opt_type`, `opt_id`): [`VariableModel`](VariableModel.md)

#### Parameters

##### workspace

`any`

##### name

`any`

##### opt_type

`any`

##### opt_id

`any`

#### Returns

[`VariableModel`](VariableModel.md)

#### Defined in

node_modules/blockly/blockly.d.ts:5042

## Properties

### name

> **name**: `string`

The name of the variable, typically defined by the user. It may be
changed by the user.

#### Defined in

node_modules/blockly/blockly.d.ts:5053

---

### type

> **type**: `string`

The type of the variable, such as 'int' or 'sound_effect'. This may be
used to build a list of variables of a specific type. By default this is
the empty string '', which is a specific type.

#### See

#### Defined in

node_modules/blockly/blockly.d.ts:5061

---

### workspace

> **workspace**: [`Workspace`](Workspace.md)

The workspace the variable is in.

#### Defined in

node_modules/blockly/blockly.d.ts:5047

## Methods

### getId()

> **getId**(): `string`

#### Returns

`string`

The ID for the variable.

#### Defined in

node_modules/blockly/blockly.d.ts:5073

---

### compareByName()

> `static` **compareByName**(`var1`, `var2`): `number`

A custom compare function for the VariableModel objects.

#### Parameters

##### var1

[`VariableModel`](VariableModel.md)

First variable to compare.

##### var2

[`VariableModel`](VariableModel.md)

Second variable to compare.

#### Returns

`number`

-1 if name of var1 is less than name of var2, 0 if equal,
and 1 if greater.

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:5041
