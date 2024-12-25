# Class: MarkerManager

## Constructors

### new MarkerManager()

> **new MarkerManager**(`workspace`): [`MarkerManager`](MarkerManager.md)

Class to manage the multiple markers and the cursor on a workspace.

#### Parameters

##### workspace

[`WorkspaceSvg`](WorkspaceSvg.md)

The workspace for the marker manager.

#### Returns

[`MarkerManager`](MarkerManager.md)

#### Alias

Blockly.MarkerManager

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:11391

## Properties

### markerSvg\_

> **markerSvg\_**: `any`

#### Defined in

node_modules/blockly/blockly.d.ts:11458

## Methods

### dispose()

> **dispose**(): `void`

Dispose of the marker manager.
Go through and delete all markers associated with this marker manager.

#### Returns

`void`

#### Suppress

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:11470

---

### getCursor()

> **getCursor**(): [`Cursor`](Cursor.md)

Get the cursor for the workspace.

#### Returns

[`Cursor`](Cursor.md)

The cursor for this workspace.

#### Defined in

node_modules/blockly/blockly.d.ts:11431

---

### getMarker()

> **getMarker**(`id`): [`Marker`](Marker.md)

Get a single marker that corresponds to the given ID.

#### Parameters

##### id

`string`

A unique identifier for the marker.

#### Returns

[`Marker`](Marker.md)

The marker that corresponds to the given ID,
or null if none exists.

#### Defined in

node_modules/blockly/blockly.d.ts:11438

---

### registerMarker()

> **registerMarker**(`id`, `marker`): `void`

Register the marker by adding it to the map of markers.

#### Parameters

##### id

`string`

A unique identifier for the marker.

##### marker

[`Marker`](Marker.md)

The marker to register.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:11421

---

### setCursor()

> **setCursor**(`cursor`): `void`

Sets the cursor and initializes the drawer for use with keyboard navigation.

#### Parameters

##### cursor

[`Cursor`](Cursor.md)

The cursor used to move around this workspace.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:11443

---

### setCursorSvg()

> **setCursorSvg**(`cursorSvg`): `void`

Add the cursor SVG to this workspace SVG group.

#### Parameters

##### cursorSvg

`SVGElement`

The SVG root of the cursor to be added to the
workspace SVG group.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:11450

---

### setMarkerSvg()

> **setMarkerSvg**(`markerSvg`): `void`

Add the marker SVG to this workspaces SVG group.

#### Parameters

##### markerSvg

`SVGElement`

The SVG root of the marker to be added to the
workspace SVG group.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:11457

---

### unregisterMarker()

> **unregisterMarker**(`id`): `void`

Unregister the marker by removing it from the map of markers.

#### Parameters

##### id

`string`

The ID of the marker to unregister.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:11426

---

### updateMarkers()

> **updateMarkers**(): `void`

Redraw the attached cursor SVG if needed.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:11463
