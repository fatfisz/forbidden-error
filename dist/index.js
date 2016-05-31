'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ForbiddenError = (function (_Error) {
  _inherits(ForbiddenError, _Error);

  function ForbiddenError() {
    _classCallCheck(this, ForbiddenError);

    _Error.call(this);

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }
  }

  return ForbiddenError;
})(Error);

exports['default'] = ForbiddenError;

ForbiddenError.prototype.name = 'ForbiddenError';
ForbiddenError.prototype.message = '';
module.exports = exports['default'];
