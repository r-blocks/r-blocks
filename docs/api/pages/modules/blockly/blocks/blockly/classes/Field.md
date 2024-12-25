# Class: Field

## Extended by

- [`FieldCheckbox`](FieldCheckbox.md)
- [`FieldColour`](FieldColour.md)
- [`FieldDropdown`](FieldDropdown.md)
- [`FieldImage`](FieldImage.md)
- [`FieldLabel`](FieldLabel.md)
- [`FieldTextInput`](FieldTextInput.md)

## Constructors

### new Field()

> `abstract` **new Field**(`value`, `opt_validator`?, `opt_config`?): [`Field`](Field.md)

Abstract class for an editable field.

#### Parameters

##### value

`any`

The initial value of the field.

##### opt_validator?

`Function`

A function that is called to validate
changes to the field's value. Takes in a value & returns a validated
value, or null to abort the change.

##### opt_config?

`any`

A map of options used to configure the field. See
the individual field's documentation for a list of properties this
parameter supports.

#### Returns

[`Field`](Field.md)

#### Implements

#### Implements

#### Implements

#### Implements

#### Alias

Blockly.Field

#### Defined in

node_modules/blockly/blockly.d.ts:17191

## Properties

### borderRect\_

> `protected` **borderRect\_**: `SVGRectElement`

The rendered field's SVG border element.

#### Defined in

node_modules/blockly/blockly.d.ts:17243

---

### clickTarget\_

> `protected` **clickTarget\_**: `Element`

The element the click handler is bound to.

#### Defined in

node_modules/blockly/blockly.d.ts:17700

---

### constants\_

> `protected` **constants\_**: [`ConstantProvider`](../renderers/common/block_rendering/classes/ConstantProvider.md)

Constants associated with the source block's renderer.

#### Defined in

node_modules/blockly/blockly.d.ts:17267

---

### DEFAULT_VALUE

> `protected` **DEFAULT_VALUE**: `any`

The default value for this field.

#### Defined in

node_modules/blockly/blockly.d.ts:17683

---

### disposed

> **disposed**: `boolean`

#### Defined in

node_modules/blockly/blockly.d.ts:17388

---

### EDITABLE

> **EDITABLE**: `boolean`

Editable fields usually show some sort of UI indicating they are editable.
They will also be saved by the XML renderer.

#### Defined in

node_modules/blockly/blockly.d.ts:17706

---

### enabled\_

> **enabled\_**: `boolean`

#### Defined in

node_modules/blockly/blockly.d.ts:17399

---

### fieldGroup\_

> `protected` **fieldGroup\_**: `SVGGElement`

The rendered field's SVG group element.

#### Defined in

node_modules/blockly/blockly.d.ts:17237

---

### isDirty\_

> **isDirty\_**: `boolean`

#### Defined in

node_modules/blockly/blockly.d.ts:17512

---

### maxDisplayLength

> **maxDisplayLength**: `number`

Maximum characters of text to display before adding an ellipsis.

#### Defined in

node_modules/blockly/blockly.d.ts:17694

---

### name

> **name**: `string`

Name of field. Unique within each block.
Static labels are usually unnamed.

#### Defined in

node_modules/blockly/blockly.d.ts:17689

---

### SERIALIZABLE

> **SERIALIZABLE**: `boolean`

Serializable fields are saved by the XML renderer, non-serializable fields
are not. Editable fields should also be serializable. This is not the
case by default so that SERIALIZABLE is backwards compatible.

#### Defined in

node_modules/blockly/blockly.d.ts:17713

---

### size\_

> `protected` **size\_**: [`Size`](../utils/classes/Size.md)

The size of the area rendered by the field.

#### Defined in

node_modules/blockly/blockly.d.ts:17217

---

### sourceBlock\_

> **sourceBlock\_**: [`Block`](Block.md)

#### Defined in

node_modules/blockly/blockly.d.ts:17281

---

### textContent\_

> `protected` **textContent\_**: `Text`

The rendered field's text content element.

#### Defined in

node_modules/blockly/blockly.d.ts:17255

---

### textElement\_

> `protected` **textElement\_**: `SVGTextElement`

The rendered field's SVG text element.

#### Defined in

node_modules/blockly/blockly.d.ts:17249

---

### validator\_

> `protected` **validator\_**: `Function`

Validation function called when user edits an editable field.

#### Defined in

node_modules/blockly/blockly.d.ts:17204

---

### value\_

> `protected` **value\_**: `any`

A generic value possessed by the field.
Should generally be non-null, only null when the field is created.

#### Defined in

node_modules/blockly/blockly.d.ts:17198

---

### visible\_

> **visible\_**: `any`

#### Defined in

node_modules/blockly/blockly.d.ts:17437

## Methods

### applyColour()

> **applyColour**(): `void`

Updates the field to match the colour/style of the block. Should only be
called by BlockSvg.applyColour().

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:17470

---

### bindEvents\_()

> `protected` **bindEvents\_**(): `void`

Bind events to the field. Can be overridden by subclasses if they need to do
custom input handling.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:17329

---

### configure\_()

> `protected` **configure\_**(`config`): `void`

Process the configuration map passed to the field.

#### Parameters

##### config

`any`

A map of options used to configure the field. See
the individual field's documentation for a list of properties this
parameter supports.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:17275

---

### createBorderRect\_()

> `protected` **createBorderRect\_**(): `void`

Create a field border rect element. Not to be overridden by subclasses.
Instead modify the result of the function inside initView, or create a
separate function to call.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:17316

---

### createTextElement\_()

> `protected` **createTextElement\_**(): `void`

Create a field text element. Not to be overridden by subclasses. Instead
modify the result of the function inside initView, or create a separate
function to call.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:17323

---

### dispose()

> **dispose**(): `void`

Dispose of all DOM objects and events belonging to this editable field.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:17387

---

### doClassValidation\_()

> `protected` **doClassValidation\_**(`opt_newValue`?): `any`

Used to validate a value. Returns input by default. Can be overridden by
subclasses, see FieldDropdown.

#### Parameters

##### opt_newValue?

`any`

The value to be validated.

#### Returns

`any`

The validated value, same as input by default.

#### Defined in

node_modules/blockly/blockly.d.ts:17576

---

### doValueInvalid\_()

> `protected` **doValueInvalid\_**(`_invalidValue`): `void`

Used to notify the field an invalid value was input. Can be overridden by
subclasses, see FieldTextInput.
No-op by default.

#### Parameters

##### \_invalidValue

`any`

The input value that was determined to be invalid.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:17591

---

### doValueUpdate\_()

> `protected` **doValueUpdate\_**(`newValue`): `void`

Used to update the value of a field. Can be overridden by subclasses to do
custom storage of values/updating of external things.

#### Parameters

##### newValue

`any`

The value to be saved.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:17583

---

### forceRerender()

> **forceRerender**(): `void`

Force a rerender of the block that this field is installed on, which will
rerender this field and adjust for any sizing changes.
Other fields on the same block will not rerender, because their sizes have
already been recorded.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:17548

---

### fromXml()

> **fromXml**(`fieldElement`): `void`

Sets the field's value based on the given XML element. Should only be called
by Blockly.Xml.

#### Parameters

##### fieldElement

`Element`

The element containing info about the
field's state.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:17337

---

### getAbsoluteXY\_()

> `protected` **getAbsoluteXY\_**(): [`Coordinate`](../utils/classes/Coordinate.md)

Return the absolute coordinates of the top-left corner of this field.
The origin (0,0) is the top-left corner of the page body.

#### Returns

[`Coordinate`](../utils/classes/Coordinate.md)

Object with .x and .y properties.

#### Defined in

node_modules/blockly/blockly.d.ts:17625

---

### getClickTarget\_()

> `protected` **getClickTarget\_**(): `Element`

The element to bind the click handler to. If not set explicitly, defaults
to the SVG root of the field. When this element is
clicked on an editable field, the editor will open.

#### Returns

`Element`

Element to bind click handler to.

#### Defined in

node_modules/blockly/blockly.d.ts:17618

---

### getConstants()

> **getConstants**(): [`ConstantProvider`](../renderers/common/block_rendering/classes/ConstantProvider.md)

Get the renderer constant provider.

#### Returns

[`ConstantProvider`](../renderers/common/block_rendering/classes/ConstantProvider.md)

The renderer constant
provider.

#### Defined in

node_modules/blockly/blockly.d.ts:17287

---

### getDisplayText\_()

> `protected` **getDisplayText\_**(): `string`

Get the text from this field to display on the block. May differ from
`getText` due to ellipsis, and other formatting.

#### Returns

`string`

Text to display.

#### Defined in

node_modules/blockly/blockly.d.ts:17527

---

### getFlipRtl()

> **getFlipRtl**(): `boolean`

Returns whether or not we should flip the field in RTL.

#### Returns

`boolean`

True if we should flip in RTL.

#### Defined in

node_modules/blockly/blockly.d.ts:17645

---

### getParentInput()

> **getParentInput**(): [`Input`](Input.md)

Search through the list of inputs and their fields in order to find the
parent input of a field.

#### Returns

[`Input`](Input.md)

The input that the field belongs to.

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:17640

---

### getScaledBBox()

> **getScaledBBox**(): [`Rect`](../utils/classes/Rect.md)

Returns the bounding box of the rendered field, accounting for workspace
scaling.

#### Returns

[`Rect`](../utils/classes/Rect.md)

An object with top, bottom, left, and right in
pixels relative to the top left corner of the page (window coordinates).

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:17520

---

### getSize()

> **getSize**(): [`Size`](../utils/classes/Size.md)

Returns the height and width of the field.

This should _in general_ be the only place render\_ gets called from.

#### Returns

[`Size`](../utils/classes/Size.md)

Height and width.

#### Defined in

node_modules/blockly/blockly.d.ts:17511

---

### getSourceBlock()

> **getSourceBlock**(): [`Block`](Block.md)

Get the block this field is attached to.

#### Returns

[`Block`](Block.md)

The block containing this field.

#### Defined in

node_modules/blockly/blockly.d.ts:17292

---

### getSvgRoot()

> **getSvgRoot**(): `SVGGElement`

Gets the group element for this editable field.
Used for measuring the size and for positioning.

#### Returns

`SVGGElement`

The group element.

#### Defined in

node_modules/blockly/blockly.d.ts:17464

---

### getText()

> **getText**(): `string`

Get the text from this field.

#### Returns

`string`

Current text.

#### Defined in

node_modules/blockly/blockly.d.ts:17532

---

### getTooltip()

> **getTooltip**(): `string`

Returns the tooltip text for this field.

#### Returns

`string`

The tooltip text for this field.

#### Defined in

node_modules/blockly/blockly.d.ts:17610

---

### getValidator()

> **getValidator**(): `Function`

Gets the validation function for editable fields, or null if not set.

#### Returns

`Function`

Validation function, or null.

#### Defined in

node_modules/blockly/blockly.d.ts:17458

---

### getValue()

> **getValue**(): `any`

Get the current value of the field.

#### Returns

`any`

Current value.

#### Defined in

node_modules/blockly/blockly.d.ts:17568

---

### init()

> **init**(): `void`

Initialize everything to render this field. Override
methods initModel and initView rather than this method.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:17298

---

### initModel()

> **initModel**(): `void`

Initializes the model of the field after it has been installed on a block.
No-op by default.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:17309

---

### initView()

> **initView**(): `void`

Create the block UI for this field.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:17303

---

### isClickable()

> **isClickable**(): `boolean`

Check whether this field defines the showEditor\_ function.

#### Returns

`boolean`

Whether this field is clickable.

#### Defined in

node_modules/blockly/blockly.d.ts:17410

---

### isCurrentlyEditable()

> **isCurrentlyEditable**(): `boolean`

Check whether this field is currently editable. Some fields are never
EDITABLE (e.g. text labels). Other fields may be EDITABLE but may exist on
non-editable blocks or be currently disabled.

#### Returns

`boolean`

Whether this field is currently enabled, editable and on
an editable block.

#### Defined in

node_modules/blockly/blockly.d.ts:17418

---

### isEnabled()

> **isEnabled**(): `boolean`

Check whether this field's value can be changed using the editor when the
source block is editable.

#### Returns

`boolean`

Whether this field is enabled.

#### Defined in

node_modules/blockly/blockly.d.ts:17405

---

### isSerializable()

> **isSerializable**(): `boolean`

Check whether this field should be serialized by the XML renderer.
Handles the logic for backwards compatibility and incongruous states.

#### Returns

`boolean`

Whether this field should be serialized or not.

#### Defined in

node_modules/blockly/blockly.d.ts:17424

---

### isTabNavigable()

> **isTabNavigable**(): `boolean`

Returns whether or not the field is tab navigable.

#### Returns

`boolean`

True if the field is tab navigable.

#### Defined in

node_modules/blockly/blockly.d.ts:17650

---

### isVisible()

> **isVisible**(): `boolean`

Gets whether this editable field is visible or not.

#### Returns

`boolean`

True if visible.

#### Defined in

node_modules/blockly/blockly.d.ts:17429

---

### loadLegacyState()

> **loadLegacyState**(`callingClass`, `state`): `boolean`

Loads the given state using either the old XML hoooks, if they should be
used. Returns true to indicate loading has been handled, false otherwise.

#### Parameters

##### callingClass

`any`

The class calling this method.
Used to see if `this` has overridden any relevant hooks.

##### state

`any`

The state to apply to the field.

#### Returns

`boolean`

Whether the state was applied or not.

#### Defined in

node_modules/blockly/blockly.d.ts:17382

---

### loadState()

> **loadState**(`state`): `void`

Sets the field's state based on the given state value. Should only be called
by the serialization system.

#### Parameters

##### state

`any`

The state we want to apply to the field.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:17363

---

### markDirty()

> **markDirty**(): `void`

Force a rerender of the block that this field is installed on, which will
rerender this field and adjust for any sizing changes.
Other fields on the same block will not rerender, because their sizes have
already been recorded.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:17540

---

### onMouseDown\_()

> `protected` **onMouseDown\_**(`e`): `void`

Handle a mouse down event on a field.

#### Parameters

##### e

`Event`

Mouse down event.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:17597

---

### onShortcut()

> **onShortcut**(`_shortcut`): `boolean`

Handles the given keyboard shortcut.

#### Parameters

##### \_shortcut

[`KeyboardShortcut`](../namespaces/ShortcutRegistry/type-aliases/KeyboardShortcut.md)

The shortcut to be
handled.

#### Returns

`boolean`

True if the shortcut has been handled, false otherwise.

#### Defined in

node_modules/blockly/blockly.d.ts:17658

---

### positionBorderRect\_()

> `protected` **positionBorderRect\_**(): `void`

Position a field's border rect after a size change.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:17504

---

### positionTextElement\_()

> `protected` **positionTextElement\_**(`xOffset`, `contentWidth`): `void`

Position a field's text element after a size change. This handles both LTR
and RTL positioning.

#### Parameters

##### xOffset

`number`

x offset to use when positioning the text element.

##### contentWidth

`number`

The content width.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:17499

---

### referencesVariables()

> **referencesVariables**(): `boolean`

Whether this field references any Blockly variables. If true it may need to
be handled differently during serialization and deserialization. Subclasses
may override this.

#### Returns

`boolean`

True if this field has any variable references.

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:17633

---

### render\_()

> `protected` **render\_**(): `void`

Used by getSize() to move/resize any DOM elements, and get the new size.

All rendering that has an effect on the size/shape of the block should be
done here, and should be triggered by getSize().

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:17478

---

### saveLegacyState()

> `protected` **saveLegacyState**(`callingClass`): `string`

Returns a stringified version of the XML state, if it should be used.
Otherwise this returns null, to signal the field should use its own
serialization.

#### Parameters

##### callingClass

`any`

The class calling this method.
Used to see if `this` has overridden any relevant hooks.

#### Returns

`string`

The stringified version of the XML state, or null.

#### Defined in

node_modules/blockly/blockly.d.ts:17373

---

### saveState()

> **saveState**(`_doFullSerialization`?): `any`

Saves this fields value as something which can be serialized to JSON. Should
only be called by the serialization system.

#### Parameters

##### \_doFullSerialization?

`boolean`

If true, this signals to the field
that if it normally just saves a reference to some state (eg variable
fields) it should instead serialize the full state of the thing being
referenced.

#### Returns

`any`

JSON serializable state.

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:17356

---

### setCursorSvg()

> **setCursorSvg**(`cursorSvg`): `void`

Add the cursor SVG to this fields SVG group.

#### Parameters

##### cursorSvg

`SVGElement`

The SVG root of the cursor to be added to the
field group.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:17665

---

### setEnabled()

> **setEnabled**(`enabled`): `void`

Set whether this field's value can be changed using the editor when the
source block is editable.

#### Parameters

##### enabled

`boolean`

True if enabled.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:17398

---

### setMarkerSvg()

> **setMarkerSvg**(`markerSvg`): `void`

Add the marker SVG to this fields SVG group.

#### Parameters

##### markerSvg

`SVGElement`

The SVG root of the marker to be added to the
field group.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:17672

---

### setSourceBlock()

> **setSourceBlock**(`block`): `void`

Attach this field to a block.

#### Parameters

##### block

[`Block`](Block.md)

The block containing this field.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:17280

---

### setTooltip()

> **setTooltip**(`newTip`): `void`

Sets the tooltip for this field.

#### Parameters

##### newTip

[`TipInfo`](../tooltip/type-aliases/TipInfo.md)

The
text for the tooltip, a function that returns the text for the tooltip, a
parent object whose tooltip will be used, or null to display the tooltip
of the parent block. To not display a tooltip pass the empty string.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:17605

---

### setValidator()

> **setValidator**(`handler`): `void`

Sets a new validation function for editable fields, or clears a previously
set validator.

The validator function takes in the new field value, and returns
validated value. The validated value could be the input value, a modified
version of the input value, or null to abort the change.

If the function does not return anything (or returns undefined) the new
value is accepted as valid. This is to allow for fields using the
validated function as a field-level change event notification.

#### Parameters

##### handler

`Function`

The validator function
or null to clear a previous validator.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:17453

---

### setValue()

> **setValue**(`newValue`): `void`

Used to change the value of the field. Handles validation and events.
Subclasses should override doClassValidation* and doValueUpdate* rather
than this method.

#### Parameters

##### newValue

`any`

New value.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:17555

---

### setVisible()

> **setVisible**(`visible`): `void`

Sets whether this editable field is visible or not. Should only be called
by input.setVisible.

#### Parameters

##### visible

`boolean`

True if visible.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:17436

---

### showEditor()

> **showEditor**(`opt_e`?): `void`

Show an editor when the field is clicked only if the field is clickable.

#### Parameters

##### opt_e?

`Event`

Optional mouse event that triggered the field to open,
or undefined if triggered programmatically.

#### Returns

`void`

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:17485

---

### toXml()

> **toXml**(`fieldElement`): `Element`

Serializes this field's value to XML. Should only be called by Blockly.Xml.

#### Parameters

##### fieldElement

`Element`

The element to populate with info about the
field's state.

#### Returns

`Element`

The element containing info about the field's state.

#### Package

#### Defined in

node_modules/blockly/blockly.d.ts:17345

---

### updateEditable()

> **updateEditable**(): `void`

Add or remove the UI indicating if this field is editable or not.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:17392

---

### updateMarkers\_()

> `protected` **updateMarkers\_**(): `void`

Redraw any attached marker or cursor svgs if needed.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:17677

---

### updateSize\_()

> `protected` **updateSize\_**(`opt_margin`?): `void`

Updates the size of the field based on the text.

#### Parameters

##### opt_margin?

`number`

margin to use when positioning the text element.

#### Returns

`void`

#### Defined in

node_modules/blockly/blockly.d.ts:17491
