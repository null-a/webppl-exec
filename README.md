# webppl-exec

This package wraps Node's `child_process.execSync`.

## Installation

To globally install `webppl-exec`, run:

    mkdir -p ~/.webppl
    npm install --prefix ~/.webppl https://github.com/null-a/webppl-exec

This may print warnings (npm WARN ENOENT...) which can be ignored.

## Usage

Once installed, you can make `exec` available to `program.wppl` by
running:

    webppl program.wppl --require webppl-exec

### `exec(command)`

Spawns a shell then executes the command within that shell.

## License

MIT
