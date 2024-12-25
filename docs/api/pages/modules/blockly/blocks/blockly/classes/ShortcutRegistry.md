# Class: ShortcutRegistry

## Constructors

### new ShortcutRegistry()

> **new ShortcutRegistry**(): [`ShortcutRegistry`](ShortcutRegistry.md)

#### Returns

[`ShortcutRegistry`](ShortcutRegistry.md)

## Methods

### addKeyMapping()

> **addKeyMapping**(`keyCode`, `shortcutName`, `opt_allowCollision`?): `void`

Adds a mapping between a keycode and a keyboard shortcut.

#### Parameters

##### keyCode

The key code for the keyboard
shortcut. If registering a key code with a modifier (ex: ctrl+c) use
ShortcutRegistry.registry.createSerializedKey;

`string` | `number`

##### shortcutName

`string`

The name of the shortcut to execute when the
given keycode is pressed.

##### opt_allowCollision?

`boolean`

True to prevent an error when adding a
shortcut to a key that is already mapped to a shortcut.

#### Returns

`void`

#### Throws

if the given key code is already mapped to a shortcut.

#### Defined in

node_modules/blockly/blockly.d.ts:17042

---

### createSerializedKey()

> **createSerializedKey**(`keyCode`, `modifiers`): `string`

Creates the serialized key code that will be used in the key map.

#### Parameters

##### keyCode

`number`

Number code representing the key.

##### modifiers

`string`[]

List of modifier key codes to be used with
the key. All valid modifiers can be found in the
ShortcutRegistry.modifierKeys.

#### Returns

`string`

The serialized key code for the given modifiers and key.

#### Defined in

node_modules/blockly/blockly.d.ts:17141

---

### getKeyCodesByShortcutName()

> **getKeyCodesByShortcutName**(`shortcutName`): `string`[]

Gets the serialized key codes that the shortcut with the given name is
registered under.

#### Parameters

##### shortcutName

`string`

The name of the shortcut.

#### Returns

`string`[]

An array with all the key codes the shortcut is
registered under.

#### Defined in

node_modules/blockly/blockly.d.ts:17117

---

### getKeyMap()

> **getKeyMap**(): `object`

Gets the current key map.

#### Returns

`object`

The object holding key codes to ShortcutRegistry.KeyboardShortcut.

#### Defined in

node_modules/blockly/blockly.d.ts:17080

---

### getRegistry()

> **getRegistry**(): `object`

Gets the registry of keyboard shortcuts.

#### Returns

`object`

The registry of keyboard shortcuts.

#### Defined in

node_modules/blockly/blockly.d.ts:17089

---

### getShortcutNamesByKeyCode()

> **getShortcutNamesByKeyCode**(`keyCode`): `string`[]

Gets the shortcuts registered to the given key code.

#### Parameters

##### keyCode

`string`

The serialized key code.

#### Returns

`string`[]

The list of shortcuts to call when the
given keyCode is used. Undefined if no shortcuts exist.

#### Defined in

node_modules/blockly/blockly.d.ts:17108

---

### onKeyDown()

> **onKeyDown**(`workspace`, `e`): `boolean`

Handles key down events.

#### Parameters

##### workspace

[`Workspace`](Workspace.md)

The main workspace where the event was
captured.

##### e

`Event`

The key down event.

#### Returns

`boolean`

True if the event was handled, false otherwise.

#### Defined in

node_modules/blockly/blockly.d.ts:17100

---

### register()

> **register**(`shortcut`, `opt_allowOverrides`?): `void`

Registers a keyboard shortcut.

#### Parameters

##### shortcut

[`KeyboardShortcut`](../namespaces/ShortcutRegistry/type-aliases/KeyboardShortcut.md)

The
shortcut for this key code.

##### opt_allowOverrides?

`boolean`

True to prevent a warning when
overriding an already registered item.

#### Returns

`void`

#### Throws

if a shortcut with the same name already exists.

#### Defined in

node_modules/blockly/blockly.d.ts:17021

---

### removeAllKeyMappings()

> **removeAllKeyMappings**(`shortcutName`): `void`

Removes all the key mappings for a shortcut with the given name.
Useful when changing the default key mappings and the key codes registered to
the shortcut are unknown.

#### Parameters

##### shortcutName

`string`

The name of the shortcut to remove from the key
map.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:17064

---

### removeKeyMapping()

> **removeKeyMapping**(`keyCode`, `shortcutName`, `opt_quiet`?): `boolean`

Removes a mapping between a keycode and a keyboard shortcut.

#### Parameters

##### keyCode

`string`

The key code for the keyboard shortcut. If
registering a key code with a modifier (ex: ctrl+c) use
ShortcutRegistry.registry.createSerializedKey;

##### shortcutName

`string`

The name of the shortcut to execute when the
given keycode is pressed.

##### opt_quiet?

`boolean`

True to not console warn when there is no
shortcut to remove.

#### Returns

`boolean`

True if a key mapping was removed, false otherwise.

#### Defined in

node_modules/blockly/blockly.d.ts:17055

---

### setKeyMap()

> **setKeyMap**(`keyMap`): `void`

Sets the key map. Setting the key map will override any default key mappings.

#### Parameters

##### keyMap

The object with key code to
shortcut names.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:17071

---

### unregister()

> **unregister**(`shortcutName`): `boolean`

Unregisters a keyboard shortcut registered with the given key code. This will
also remove any key mappings that reference this shortcut.

#### Parameters

##### shortcutName

`string`

The name of the shortcut to unregister.

#### Returns

`boolean`

True if an item was unregistered, false otherwise.

#### Defined in

node_modules/blockly/blockly.d.ts:17029
