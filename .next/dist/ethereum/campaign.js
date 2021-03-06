'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _Campaign = require('./build/Campaign');

var _Campaign2 = _interopRequireDefault(_Campaign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//used by the react front end to get the app details.

exports.default = function (address) {
	return new _web2.default.eth.Contract(JSON.parse(_Campaign2.default.interface), address);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiYWRkcmVzcyIsImV0aCIsIkNvbnRyYWN0IiwiSlNPTiIsInBhcnNlIiwiaW50ZXJmYWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFFQTs7OztBQUNBOzs7Ozs7QUFIQTs7a0JBS2dCLFVBQVVBLE9BQVYsRUFBbUI7QUFDbEMsUUFBTyxJQUFJLGNBQUtDLEdBQUwsQ0FBU0MsUUFBYixDQUFzQkMsS0FBS0MsS0FBTCxDQUFXLG1CQUFTQyxTQUFwQixDQUF0QixFQUFzREwsT0FBdEQsQ0FBUDtBQUNBLEMiLCJmaWxlIjoidW5rbm93biIsInNvdXJjZXNDb250ZW50IjpbIi8vdXNlZCBieSB0aGUgcmVhY3QgZnJvbnQgZW5kIHRvIGdldCB0aGUgYXBwIGRldGFpbHMuXG5cbmltcG9ydCB3ZWIzIGZyb20gJy4vd2ViMyc7XG5pbXBvcnQgQ2FtcGFpZ24gZnJvbSAnLi9idWlsZC9DYW1wYWlnbic7XG5cbmV4cG9ydCBkZWZhdWx0IChmdW5jdGlvbiAoYWRkcmVzcykge1xuXHRyZXR1cm4gbmV3IHdlYjMuZXRoLkNvbnRyYWN0KEpTT04ucGFyc2UoQ2FtcGFpZ24uaW50ZXJmYWNlKSwgYWRkcmVzcyk7XG59KTsiXX0=
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiYWRkcmVzcyIsImV0aCIsIkNvbnRyYWN0IiwiSlNPTiIsInBhcnNlIiwiaW50ZXJmYWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFFQTs7OztBQUNBOzs7Ozs7QUFIQTs7a0JBS2dCLFVBQVVBLE9BQVYsRUFBbUI7QUFDbEMsUUFBTyxJQUFJLGNBQUtDLEdBQUwsQ0FBU0MsUUFBYixDQUFzQkMsS0FBS0MsS0FBTCxDQUFXLG1CQUFTQyxTQUFwQixDQUF0QixFQUFzREwsT0FBdEQsQ0FBUDtBQUNBLEMiLCJmaWxlIjoidW5rbm93biJ9