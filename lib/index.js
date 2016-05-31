export default class ForbiddenError extends Error {
  constructor() {
    super();

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

ForbiddenError.prototype.name = 'ForbiddenError';
ForbiddenError.prototype.message = '';
