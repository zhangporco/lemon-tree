'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Make = function () {
	function Make(v) {
		_classCallCheck(this, Make);

		this.alias = {
			id: v ? v.id : 'id',
			pId: v ? v.pId : 'pId',
			children: v ? v.children : 'children'
		};
	}

	_createClass(Make, [{
		key: 'arrayToTree',
		value: function arrayToTree(array) {
			var iterator = JSON.parse(JSON.stringify(array));
			var res = [];
			var _iteratorNormalCompletion = true;
			var _didIteratorError = false;
			var _iteratorError = undefined;

			try {
				for (var _iterator = iterator[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
					var vi = _step.value;

					var boo = false;
					var _iteratorNormalCompletion2 = true;
					var _didIteratorError2 = false;
					var _iteratorError2 = undefined;

					try {
						for (var _iterator2 = iterator[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
							var vj = _step2.value;

							if (vj[this.alias.id] === vi[this.alias.pId]) {
								boo = true;
							}
							if (vj[this.alias.pId] === vi[this.alias.id]) {
								vi[this.alias.children] = vi[this.alias.children] ? [].concat(_toConsumableArray(vi[this.alias.children]), [vj]) : [vj];
							}
						}
					} catch (err) {
						_didIteratorError2 = true;
						_iteratorError2 = err;
					} finally {
						try {
							if (!_iteratorNormalCompletion2 && _iterator2.return) {
								_iterator2.return();
							}
						} finally {
							if (_didIteratorError2) {
								throw _iteratorError2;
							}
						}
					}

					if (!boo) {
						res.push(vi);
					}
				}
			} catch (err) {
				_didIteratorError = true;
				_iteratorError = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion && _iterator.return) {
						_iterator.return();
					}
				} finally {
					if (_didIteratorError) {
						throw _iteratorError;
					}
				}
			}

			return res;
		}
	}, {
		key: 'treeToArray',
		value: function treeToArray(tree) {
			var _this = this;

			var array = [];
			var makeArray = function makeArray(trees) {
				if (Array.isArray(trees)) {
					var _iteratorNormalCompletion3 = true;
					var _didIteratorError3 = false;
					var _iteratorError3 = undefined;

					try {
						for (var _iterator3 = trees[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
							var v = _step3.value;

							makeArray(v);
						}
					} catch (err) {
						_didIteratorError3 = true;
						_iteratorError3 = err;
					} finally {
						try {
							if (!_iteratorNormalCompletion3 && _iterator3.return) {
								_iterator3.return();
							}
						} finally {
							if (_didIteratorError3) {
								throw _iteratorError3;
							}
						}
					}
				} else {
					var json = _lodash2.default.cloneDeep(trees);
					delete json.children;
					if (json[_this.alias.id]) {
						array.push(json);
					}
					if (trees && trees[_this.alias.children]) {
						makeArray(trees[_this.alias.children]);
					}
				}
			};
			makeArray(tree);
			return array;
		}
	}]);

	return Make;
}();

exports.default = Make;