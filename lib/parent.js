'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Parent = function () {
	function Parent(v) {
		_classCallCheck(this, Parent);

		this.alias = {
			id: v ? v.id : 'id',
			pId: v ? v.pId : 'pId',
			children: v ? v.children : 'children'
		};
	}

	/**
  * -
  * @param trees
  * @param nodeId
  * @returns {*}
  */


	_createClass(Parent, [{
		key: 'findPidsByTrees',
		value: function findPidsByTrees(trees, nodeId) {
			var _iteratorNormalCompletion = true;
			var _didIteratorError = false;
			var _iteratorError = undefined;

			try {
				for (var _iterator = trees[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
					var tree = _step.value;

					var res = this.findParents(tree, nodeId);
					if (res && res.length) return res;
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

			return [];
		}
	}, {
		key: 'hasNodeId',
		value: function hasNodeId(tree, nodeId) {
			return !!this.getNodeById(tree, nodeId);
		}
	}, {
		key: 'getNodeById',
		value: function getNodeById(tree, nodeId) {
			if (Array.isArray(tree)) {
				var _iteratorNormalCompletion2 = true;
				var _didIteratorError2 = false;
				var _iteratorError2 = undefined;

				try {
					for (var _iterator2 = tree[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
						var v = _step2.value;

						var res = this.getNodeById(v, nodeId);
						if (res) return res;
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
			} else {
				if (tree[this.alias.id] === nodeId) return tree;
				if (tree[this.alias.children]) {
					return this.getNodeById(tree[this.alias.children], nodeId);
				}
				return null;
			}
		}
	}, {
		key: 'findParentIds',
		value: function findParentIds(tree, nodeId) {
			var pList = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

			if (Array.isArray(tree)) {
				var _iteratorNormalCompletion3 = true;
				var _didIteratorError3 = false;
				var _iteratorError3 = undefined;

				try {
					for (var _iterator3 = tree[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
						var v = _step3.value;

						var res = this.findParentIds(v, nodeId, pList);
						if (res && res.length) return res;
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
				var array = JSON.parse(JSON.stringify(pList));
				array.push(tree[this.alias.id]);
				if (tree[this.alias.id] === nodeId) return array;
				if (tree[this.alias.children]) {
					return this.findParentIds(tree[this.alias.children], nodeId, array);
				}
			}
			pList = [];
			return pList;
		}
	}, {
		key: 'findTree',
		value: function findTree(tree, nodeId) {
			var parents = this.findParents(tree, nodeId);
			return parents && parents.length ? parents[0] : parents;
		}
	}, {
		key: 'findParents',
		value: function findParents(tree, nodeId) {
			var pList = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

			if (Array.isArray(tree)) {
				var _iteratorNormalCompletion4 = true;
				var _didIteratorError4 = false;
				var _iteratorError4 = undefined;

				try {
					for (var _iterator4 = tree[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
						var v = _step4.value;

						var res = this.findParents(v, nodeId, pList);
						if (res && res.length) return res;
					}
				} catch (err) {
					_didIteratorError4 = true;
					_iteratorError4 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion4 && _iterator4.return) {
							_iterator4.return();
						}
					} finally {
						if (_didIteratorError4) {
							throw _iteratorError4;
						}
					}
				}
			} else {
				var array = JSON.parse(JSON.stringify(pList));
				array.push(tree);
				if (tree[this.alias.id] === nodeId) return array;
				if (tree[this.alias.children]) {
					return this.findParents(tree[this.alias.children], nodeId, array);
				}
			}
			pList = [];
			return pList;
		}
	}]);

	return Parent;
}();

exports.default = Parent;