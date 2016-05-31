# ForbiddenError

> When you can't get something

[![Dependency Status](https://david-dm.org/fatfisz/forbidden-error.svg)](https://david-dm.org/fatfisz/forbidden-error)
[![devDependency Status](https://david-dm.org/fatfisz/forbidden-error/dev-status.svg)](https://david-dm.org/fatfisz/forbidden-error#info=devDependencies)

An exception for use in certain situations (e.g. to signal HTTP 403 error).
Created because of a need for a cross-package standard exception.

## Getting started

Install the package with this command:
```shell
npm install forbidden-error --save
```

## Usage

```js
// Import ES6-style
import ForbiddenError from 'forbidden-error';

// Or CommonJS-style
const ForbiddenError = require('forbidden-error');

// Then just use like this:
throw new ForbiddenError();
```

## Contributing

In lieu of a formal style guide, take care to maintain the existing coding style.

## License

Copyright (c) 2016 Rafał Ruciński. Licensed under the WTFPL license.
