# Variable: VERSION

> `const` **VERSION**: `"uncompiled"`

Blockly core version.
This constant is overridden by the build script (npm run build) to the value
of the version in package.json. This is done by the Closure Compiler in the
buildCompressed gulp task.
For local builds, you can pass --define='Blockly.VERSION=X.Y.Z' to the
compiler to override this constant.

## Define

## Alias

Blockly.VERSION

## Defined in

node_modules/blockly/blockly.d.ts:25206
