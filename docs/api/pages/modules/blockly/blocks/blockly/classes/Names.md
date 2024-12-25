# Class: Names

## Constructors

### new Names()

> **new Names**(`reservedWords`, `opt_variablePrefix`?): [`Names`](Names.md)

Class for a database of entity names (variables, procedures, etc).

#### Parameters

##### reservedWords

`string`

A comma-separated string of words that are
illegal for use as names in a language (e.g. 'new,if,this,...').

##### opt_variablePrefix?

`string`

Some languages need a '$' or a namespace
before all variable names (but not procedure names).

#### Returns

[`Names`](Names.md)

#### Alias

Blockly.Names

#### Defined in

node_modules/blockly/blockly.d.ts:3677

## Properties

### db\_

> **db\_**: `any`

#### Defined in

node_modules/blockly/blockly.d.ts:3692

---

### dbReverse\_

> **dbReverse\_**: `any`

#### Defined in

node_modules/blockly/blockly.d.ts:3693

---

### reservedDict\_

> **reservedDict\_**: `any`

#### Defined in

node_modules/blockly/blockly.d.ts:3679

---

### variableMap\_

> **variableMap\_**: [`VariableMap`](VariableMap.md)

#### Defined in

node_modules/blockly/blockly.d.ts:3694

---

### variablePrefix\_

> **variablePrefix\_**: `string`

#### Defined in

node_modules/blockly/blockly.d.ts:3678

## Methods

### getDistinctName()

> **getDistinctName**(`name`, `realm`): `string`

Convert a Blockly entity name to a legal exportable entity name.
Ensure that this is a new name not overlapping any previously defined name.
Also check against list of reserved words for the current language and
ensure name doesn't collide.

#### Parameters

##### name

`string`

The Blockly entity name (no constraints).

##### realm

`string`

The realm of entity in Blockly
('VARIABLE', 'PROCEDURE', 'DEVELOPER_VARIABLE', etc...).

#### Returns

`string`

An entity name that is legal in the exported language.

#### Defined in

node_modules/blockly/blockly.d.ts:3746

---

### getName()

> **getName**(`nameOrId`, `realm`): `string`

Convert a Blockly entity name to a legal exportable entity name.

#### Parameters

##### nameOrId

`string`

The Blockly entity name (no constraints) or
variable ID.

##### realm

`string`

The realm of entity in Blockly
('VARIABLE', 'PROCEDURE', 'DEVELOPER_VARIABLE', etc...).

#### Returns

`string`

An entity name that is legal in the exported language.

#### Defined in

node_modules/blockly/blockly.d.ts:3728

---

### getUserNames()

> **getUserNames**(`realm`): `string`[]

Return a list of all known user-created names in a specified realm.

#### Parameters

##### realm

`string`

The realm of entity in Blockly
('VARIABLE', 'PROCEDURE', 'DEVELOPER_VARIABLE', etc...).

#### Returns

`string`[]

A list of Blockly entity names (no constraints).

#### Defined in

node_modules/blockly/blockly.d.ts:3735

---

### populateProcedures()

> **populateProcedures**(`workspace`): `void`

Generate names for procedures.

#### Parameters

##### workspace

[`Workspace`](Workspace.md)

Workspace to generate procedures from.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:3719

---

### populateVariables()

> **populateVariables**(`workspace`): `void`

Generate names for user variables, but only ones that are being used.

#### Parameters

##### workspace

[`Workspace`](Workspace.md)

Workspace to generate variables from.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:3714

---

### reset()

> **reset**(): `void`

Empty the database and start from scratch. The reserved words are kept.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:3691

---

### setVariableMap()

> **setVariableMap**(`map`): `void`

Set the variable map that maps from variable name to variable object.

#### Parameters

##### map

[`VariableMap`](VariableMap.md)

The map to track.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:3699

---

### equals()

> `static` **equals**(`name1`, `name2`): `boolean`

Do the given two entity names refer to the same entity?
Blockly names are case-insensitive.

#### Parameters

##### name1

`string`

First name.

##### name2

`string`

Second name.

#### Returns

`boolean`

True if names are the same.

#### Defined in

node_modules/blockly/blockly.d.ts:3667
