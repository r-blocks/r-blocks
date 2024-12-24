# Type Alias: TrackedState

> **TrackedState**: `number`

Enum for different kinds of tracked states.

WILL_TRACK means that this connection will add itself to
the db on the next moveTo call it receives.

UNTRACKED means that this connection will not add
itself to the database until setTracking(true) is explicitly called.

TRACKED means that this connection is currently being tracked.

## Defined in

node_modules/blockly/blockly.d.ts:3021
