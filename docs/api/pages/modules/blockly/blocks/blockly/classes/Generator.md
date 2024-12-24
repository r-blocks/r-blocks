# Class: Generator

## Constructors

### new Generator()

> **new Generator**(`name`): [`Generator`](Generator.md)

Class for a code generator that translates the blocks into a language.

#### Parameters

##### name

`string`

Language name of this generator.

#### Returns

[`Generator`](Generator.md)

#### Alias

Blockly.Generator

#### Defined in

node_modules/blockly/blockly.d.ts:24277

## Properties

### COMMENT_WRAP

> **COMMENT_WRAP**: `number`

Maximum length for a comment before wrapping. Does not account for
indenting level.

#### Defined in

node_modules/blockly/blockly.d.ts:24448

---

### definitions\_

> **definitions\_**: `any`

#### Defined in

node_modules/blockly/blockly.d.ts:24383

---

### FUNCTION_NAME_PLACEHOLDER\_

> `protected` **FUNCTION_NAME_PLACEHOLDER\_**: `string`

This is used as a placeholder in functions defined using
Generator.provideFunction\_. It must not be legal code that could
legitimately appear in a function definition (or comment), and it must
not confuse the regular expression parser.

#### Defined in

node_modules/blockly/blockly.d.ts:24476

---

### FUNCTION_NAME_PLACEHOLDER_REGEXP\_

> **FUNCTION_NAME_PLACEHOLDER_REGEXP\_**: `RegExp`

#### Defined in

node_modules/blockly/blockly.d.ts:24279

---

### functionNames\_

> **functionNames\_**: `any`

#### Defined in

node_modules/blockly/blockly.d.ts:24384

---

### INDENT

> **INDENT**: `string`

The method of indenting. Defaults to two spaces, but language generators
may override this to increase indent or change to tabs.

#### Defined in

node_modules/blockly/blockly.d.ts:24442

---

### INFINITE_LOOP_TRAP

> **INFINITE_LOOP_TRAP**: `string`

Arbitrary code to inject into locations that risk causing infinite loops.
Any instances of '%1' will be replaced by the block ID that failed.
E.g. ' checkTimeout(%1);\n'

#### Defined in

node_modules/blockly/blockly.d.ts:24422

---

### isInitialized

> **isInitialized**: `boolean`

Whether the init method has been called.
Generators that set this flag to false after creation and true in init
will cause blockToCode to emit a warning if the generator has not been
initialized. If this flag is untouched, it will have no effect.

#### Defined in

node_modules/blockly/blockly.d.ts:24461

---

### name\_

> **name\_**: `string`

#### Defined in

node_modules/blockly/blockly.d.ts:24278

---

### nameDB\_

> `protected` **nameDB\_**: [`Names`](Names.md)

A database of variable and procedure names.

#### Defined in

node_modules/blockly/blockly.d.ts:24482

---

### ORDER_OVERRIDES

> **ORDER_OVERRIDES**: `number`[][]

List of outer-inner pairings that do NOT require parentheses.

#### Defined in

node_modules/blockly/blockly.d.ts:24453

---

### RESERVED_WORDS\_

> `protected` **RESERVED_WORDS\_**: `string`

Comma-separated list of reserved words.

#### Defined in

node_modules/blockly/blockly.d.ts:24467

---

### STATEMENT_PREFIX

> **STATEMENT_PREFIX**: `string`

Arbitrary code to inject before every statement.
Any instances of '%1' will be replaced by the block ID of the statement.
E.g. 'highlight(%1);\n'

#### Defined in

node_modules/blockly/blockly.d.ts:24429

---

### STATEMENT_SUFFIX

> **STATEMENT_SUFFIX**: `string`

Arbitrary code to inject after every statement.
Any instances of '%1' will be replaced by the block ID of the statement.
E.g. 'highlight(%1);\n'

#### Defined in

node_modules/blockly/blockly.d.ts:24436

## Methods

### addLoopTrap()

> **addLoopTrap**(`branch`, `block`): `string`

Add an infinite loop trap to the contents of a loop.
Add statement suffix at the start of the loop block (right after the loop
statement executes), and a statement prefix to the end of the loop block
(right before the loop statement executes).

#### Parameters

##### branch

`string`

Code for loop contents.

##### block

[`Block`](Block.md)

Enclosing block.

#### Returns

`string`

Loop contents, with infinite loop trap added.

#### Defined in

node_modules/blockly/blockly.d.ts:24339

---

### addReservedWords()

> **addReservedWords**(`words`): `void`

Add one or more words to the list of reserved words for this language.

#### Parameters

##### words

`string`

Comma-separated list of words to add to the list.
No spaces. Duplicates are ok.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:24353

---

### allNestedComments()

> **allNestedComments**(`block`): `string`

Recursively spider a tree of blocks, returning all their comments.

#### Parameters

##### block

[`Block`](Block.md)

The block from which to start spidering.

#### Returns

`string`

Concatenated list of comments.

#### Defined in

node_modules/blockly/blockly.d.ts:24299

---

### blockToCode()

> **blockToCode**(`block`, `opt_thisOnly`?): `string` \| `any`[]

Generate code for the specified block (and attached blocks).
The generator must be initialized before calling this function.

#### Parameters

##### block

[`Block`](Block.md)

The block to generate code for.

##### opt_thisOnly?

`boolean`

True to generate code for only this statement.

#### Returns

`string` \| `any`[]

For statement blocks, the generated code.
For value blocks, an array containing the generated code and an
operator order value. Returns '' if block is null.

#### Defined in

node_modules/blockly/blockly.d.ts:24309

---

### finish()

> **finish**(`code`): `string`

Hook for code to run at end of code generation.
Subclasses may override this, e.g. to prepend the generated code with import
statements or variable definitions.

#### Parameters

##### code

`string`

Generated code.

#### Returns

`string`

Completed code.

#### Defined in

node_modules/blockly/blockly.d.ts:24406

---

### init()

> **init**(`_workspace`): `void`

Hook for code to run before code generation starts.
Subclasses may override this, e.g. to initialise the database of variable
names.

#### Parameters

##### \_workspace

[`Workspace`](Workspace.md)

Workspace to generate code from.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:24382

---

### injectId()

> **injectId**(`msg`, `block`): `string`

Inject a block ID into a message to replace '%1'.
Used for STATEMENT_PREFIX, STATEMENT_SUFFIX, and INFINITE_LOOP_TRAP.

#### Parameters

##### msg

`string`

Code snippet with '%1'.

##### block

[`Block`](Block.md)

Block which has an ID.

#### Returns

`string`

Code snippet with ID.

#### Defined in

node_modules/blockly/blockly.d.ts:24347

---

### prefixLines()

> **prefixLines**(`text`, `prefix`): `string`

Prepend a common prefix onto each line of code.
Intended for indenting code or adding comment markers.

#### Parameters

##### text

`string`

The lines of code.

##### prefix

`string`

The common prefix.

#### Returns

`string`

The prefixed lines of code.

#### Defined in

node_modules/blockly/blockly.d.ts:24293

---

### provideFunction\_()

> `protected` **provideFunction\_**(`desiredName`, `code`): `string`

Define a developer-defined function (not a user-defined procedure) to be
included in the generated code. Used for creating private helper functions.
The first time this is called with a given desiredName, the code is
saved and an actual name is generated. Subsequent calls with the
same desiredName have no effect but have the same return value.

It is up to the caller to make sure the same desiredName is not
used for different helper functions (e.g. use "colourRandom" and
"listRandom", not "random"). There is no danger of colliding with reserved
words, or user-defined variable or procedure names.

The code gets output when Generator.finish() is called.

#### Parameters

##### desiredName

`string`

The desired name of the function
(e.g. mathIsPrime).

##### code

`string`[]

A list of statements. Use ' ' for indents.

#### Returns

`string`

The actual name of the new function. This may differ
from desiredName if the former has already been taken by the user.

#### Defined in

node_modules/blockly/blockly.d.ts:24375

---

### scrub\_()

> `protected` **scrub\_**(`_block`, `code`, `_opt_thisOnly`?): `string`

Common tasks for generating code from blocks. This is called from
blockToCode and is called on every block, not just top level blocks.
Subclasses may override this, e.g. to generate code for statements following
the block, or to handle comments for the specified block and any connected
value blocks.

#### Parameters

##### \_block

[`Block`](Block.md)

The current block.

##### code

`string`

The code created for this block.

##### \_opt_thisOnly?

`boolean`

True to generate code for only this
statement.

#### Returns

`string`

Code with comments and subsequent blocks added.

#### Defined in

node_modules/blockly/blockly.d.ts:24398

---

### scrubNakedValue()

> **scrubNakedValue**(`line`): `string`

Naked values are top-level blocks with outputs that aren't plugged into
anything.
Subclasses may override this, e.g. if their language does not allow
naked values.

#### Parameters

##### line

`string`

Line of generated code.

#### Returns

`string`

Legal line of code.

#### Defined in

node_modules/blockly/blockly.d.ts:24415

---

### statementToCode()

> **statementToCode**(`block`, `name`): `string`

Generate a code string representing the blocks attached to the named
statement input. Indent the code.
This is mainly used in generators. When trying to generate code to evaluate
look at using workspaceToCode or blockToCode.

#### Parameters

##### block

[`Block`](Block.md)

The block containing the input.

##### name

`string`

The name of the input.

#### Returns

`string`

Generated code or '' if no blocks are connected.

#### Defined in

node_modules/blockly/blockly.d.ts:24329

---

### valueToCode()

> **valueToCode**(`block`, `name`, `outerOrder`): `string`

Generate code representing the specified value input.

#### Parameters

##### block

[`Block`](Block.md)

The block containing the input.

##### name

`string`

The name of the input.

##### outerOrder

`number`

The maximum binding strength (minimum order value)
of any operators adjacent to "block".

#### Returns

`string`

Generated code or '' if no blocks are connected or the
specified input does not exist.

#### Defined in

node_modules/blockly/blockly.d.ts:24319

---

### workspaceToCode()

> **workspaceToCode**(`workspace`?): `string`

Generate code for all blocks in the workspace to the specified language.

#### Parameters

##### workspace?

[`Workspace`](Workspace.md)

Workspace to generate code from.

#### Returns

`string`

Generated code.

#### Defined in

node_modules/blockly/blockly.d.ts:24285
