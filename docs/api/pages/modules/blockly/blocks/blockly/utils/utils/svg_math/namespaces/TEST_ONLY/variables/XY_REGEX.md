# Variable: XY_REGEX

> `const` **XY_REGEX**: `RegExp`

Static regex to pull the x,y values out of an SVG translate() directive.
Note that Firefox and IE (9,10) return 'translate(12)' instead of
'translate(12, 0)'.
Note that IE (9,10) returns 'translate(16 8)' instead of 'translate(16, 8)'.
Note that IE has been reported to return scientific notation (0.123456e-42).

## Defined in

node_modules/blockly/blockly.d.ts:2794
