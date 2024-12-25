# Class: ASTNode

## Constructors

### new ASTNode()

> **new ASTNode**(`type`, `location`, `opt_params`?): [`ASTNode`](ASTNode.md)

Class for an AST node.
It is recommended that you use one of the createNode methods instead of
creating a node directly.

#### Parameters

##### type

`string`

The type of the location.
Must be in ASTNode.types.

##### location

[`IASTNodeLocation`](IASTNodeLocation.md)

The position in the AST.

##### opt_params?

[`Params`](../namespaces/ASTNode/type-aliases/Params.md)

Optional dictionary of options.

#### Returns

[`ASTNode`](ASTNode.md)

#### Alias

Blockly.ASTNode

#### Defined in

node_modules/blockly/blockly.d.ts:18211

## Methods

### getLocation()

> **getLocation**(): [`IASTNodeLocation`](IASTNodeLocation.md)

Gets the value pointed to by this node.
It is the callers responsibility to check the node type to figure out what
type of object they get back from this.

#### Returns

[`IASTNodeLocation`](IASTNodeLocation.md)

The current field, connection, workspace, or
block the cursor is on.

#### Defined in

node_modules/blockly/blockly.d.ts:18250

---

### getSourceBlock()

> **getSourceBlock**(): [`Block`](Block.md)

Finds the source block of the location of this node.

#### Returns

[`Block`](Block.md)

The source block of the location, or null if the node
is of type workspace.

#### Defined in

node_modules/blockly/blockly.d.ts:18344

---

### getType()

> **getType**(): `string`

The type of the current location.
One of ASTNode.types

#### Returns

`string`

The type of the location.

#### Defined in

node_modules/blockly/blockly.d.ts:18256

---

### getWsCoordinate()

> **getWsCoordinate**(): [`Coordinate`](../utils/classes/Coordinate.md)

The coordinate on the workspace.

#### Returns

[`Coordinate`](../utils/classes/Coordinate.md)

The workspace coordinate or null if the
location is not a workspace.

#### Defined in

node_modules/blockly/blockly.d.ts:18262

---

### in()

> **in**(): [`ASTNode`](ASTNode.md)

Find the element one level below and all the way to the left of the current
location.

#### Returns

[`ASTNode`](ASTNode.md)

An AST node that wraps the next field, connection,
workspace, or block. Or null if there is nothing below this node.

#### Defined in

node_modules/blockly/blockly.d.ts:18357

---

### isConnection()

> **isConnection**(): `boolean`

Whether the node points to a connection.

#### Returns

`boolean`

[description]

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:18268

---

### next()

> **next**(): [`ASTNode`](ASTNode.md)

Find the element to the right of the current element in the AST.

#### Returns

[`ASTNode`](ASTNode.md)

An AST node that wraps the next field, connection,
block, or workspace. Or null if there is no node to the right.

#### Defined in

node_modules/blockly/blockly.d.ts:18350

---

### out()

> **out**(): [`ASTNode`](ASTNode.md)

Find the next element that is one position above and all the way to the left
of the current location.

#### Returns

[`ASTNode`](ASTNode.md)

An AST node that wraps the next field, connection,
workspace or block. Or null if we are at the workspace level.

#### Defined in

node_modules/blockly/blockly.d.ts:18371

---

### prev()

> **prev**(): [`ASTNode`](ASTNode.md)

Find the element to the left of the current element in the AST.

#### Returns

[`ASTNode`](ASTNode.md)

An AST node that wraps the previous field,
connection, workspace or block. Or null if no node exists to the left.
null.

#### Defined in

node_modules/blockly/blockly.d.ts:18364

---

### createBlockNode()

> `static` **createBlockNode**(`block`): [`ASTNode`](ASTNode.md)

Creates an AST node pointing to a block.

#### Parameters

##### block

[`Block`](Block.md)

The block used to create an AST node.

#### Returns

[`ASTNode`](ASTNode.md)

An AST node pointing to a block.

#### Defined in

node_modules/blockly/blockly.d.ts:18173

---

### createConnectionNode()

> `static` **createConnectionNode**(`connection`): [`ASTNode`](ASTNode.md)

Creates an AST node pointing to a connection. If the connection has a parent
input then create an AST node of type input that will hold the connection.

#### Parameters

##### connection

[`Connection`](Connection.md)

This is the connection the node will
point to.

#### Returns

[`ASTNode`](ASTNode.md)

An AST node pointing to a connection.

#### Defined in

node_modules/blockly/blockly.d.ts:18160

---

### createFieldNode()

> `static` **createFieldNode**(`field`): [`ASTNode`](ASTNode.md)

Create an AST node pointing to a field.

#### Parameters

##### field

[`Field`](Field.md)

The location of the AST node.

#### Returns

[`ASTNode`](ASTNode.md)

An AST node pointing to a field.

#### Defined in

node_modules/blockly/blockly.d.ts:18152

---

### createInputNode()

> `static` **createInputNode**(`input`): [`ASTNode`](ASTNode.md)

Creates an AST node pointing to an input. Stores the input connection as the
location.

#### Parameters

##### input

[`Input`](Input.md)

The input used to create an AST node.

#### Returns

[`ASTNode`](ASTNode.md)

An AST node pointing to a input.

#### Defined in

node_modules/blockly/blockly.d.ts:18167

---

### createStackNode()

> `static` **createStackNode**(`topBlock`): [`ASTNode`](ASTNode.md)

Create an AST node of type stack. A stack, represented by its top block, is
the set of all blocks connected to a top block, including the top block.

#### Parameters

##### topBlock

[`Block`](Block.md)

A top block has no parent and can be found
in the list returned by workspace.getTopBlocks().

#### Returns

[`ASTNode`](ASTNode.md)

An AST node of type stack that points to the top
block on the stack.

#### Defined in

node_modules/blockly/blockly.d.ts:18182

---

### createTopNode()

> `static` **createTopNode**(`block`): [`ASTNode`](ASTNode.md)

Creates an AST node for the top position on a block.
This is either an output connection, previous connection, or block.

#### Parameters

##### block

[`Block`](Block.md)

The block to find the top most AST node on.

#### Returns

[`ASTNode`](ASTNode.md)

The AST node holding the top most position on the
block.

#### Defined in

node_modules/blockly/blockly.d.ts:18199

---

### createWorkspaceNode()

> `static` **createWorkspaceNode**(`workspace`, `wsCoordinate`): [`ASTNode`](ASTNode.md)

Creates an AST node pointing to a workspace.

#### Parameters

##### workspace

[`Workspace`](Workspace.md)

The workspace that we are on.

##### wsCoordinate

[`Coordinate`](../utils/classes/Coordinate.md)

The position on the workspace
for this node.

#### Returns

[`ASTNode`](ASTNode.md)

An AST node pointing to a workspace and a position
on the workspace.

#### Defined in

node_modules/blockly/blockly.d.ts:18191
