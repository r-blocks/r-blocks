# Class: WorkspaceAudio

## Constructors

### new WorkspaceAudio()

> **new WorkspaceAudio**(`parentWorkspace`): [`WorkspaceAudio`](WorkspaceAudio.md)

Class for loading, storing, and playing audio for a workspace.

#### Parameters

##### parentWorkspace

[`WorkspaceSvg`](WorkspaceSvg.md)

The parent of the workspace
this audio object belongs to, or null.

#### Returns

[`WorkspaceAudio`](WorkspaceAudio.md)

#### Alias

Blockly.WorkspaceAudio

#### Defined in

node_modules/blockly/blockly.d.ts:12277

## Properties

### lastSound\_

> **lastSound\_**: `Date`

#### Defined in

node_modules/blockly/blockly.d.ts:12315

## Methods

### dispose()

> **dispose**(): `void`

Dispose of this audio manager.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:12294

---

### load()

> **load**(`filenames`, `name`): `void`

Load an audio file. Cache it, ready for instantaneous playing.

#### Parameters

##### filenames

`string`[]

List of file types in decreasing order of
preference (i.e. increasing size). E.g. ['media/go.mp3', 'media/go.wav']
Filenames include path from Blockly's root. File extensions matter.

##### name

`string`

Name of sound.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:12302

---

### play()

> **play**(`name`, `opt_volume`?): `void`

Play a named sound at specified volume. If volume is not specified,
use full volume (1).

#### Parameters

##### name

`string`

Name of sound.

##### opt_volume?

`number`

Volume of sound (0-1).

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:12314

---

### preload()

> **preload**(): `void`

Preload all the audio files so that they play quickly when asked for.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:12307
