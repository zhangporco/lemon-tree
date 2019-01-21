'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _parent = require('./parent');

var _parent2 = _interopRequireDefault(_parent);

var _make = require('./make');

var _make2 = _interopRequireDefault(_make);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * 树结构 公共函数
 * 此函数tree 默认结构为:
 * {
 *    id: '',
 *    children: {},
 * }
 *
 * 支持列别名
 * @example
 * const data = {
 *    ID: 'XX',
 *    CHILDREN: {
 *      ID: 'XXX',
				CHILDREN: {
				
				},
 *    },
 * }
 * const tree = new TreeHelper({ id: 'ID', children: 'CHILDREN' });
 * const res = tree.findParentIdList(data, 'XXX');
 * // ['XX', 'XXX']
 *
 * @author Porco
 */
var Lemon = function () {
	function Lemon(v) {
		_classCallCheck(this, Lemon);

		this.v = v;
	}

	/**
  * -
  * 该函数将废弃
  * 推荐使用 findParentIdList 函数
  * 返回 tree 数组中
  * 以 nodeId 为节点的一棵树全部节点 id 数组
  * @param trees tree 数组
  * @param nodeId
  * @returns {Array}
  */


	_createClass(Lemon, [{
		key: 'findPidsByTrees',
		value: function findPidsByTrees(tree, nodeId) {
			return new _parent2.default(this.v).findPidsByTrees(tree, nodeId);
		}

		/**
   * 判断 nodeId 是否在 tree 中
   * 继承自 getNodeById
   * @param tree
   * @param nodeId
   * @returns {boolean}
   */

	}, {
		key: 'hasNodeId',
		value: function hasNodeId(tree, nodeId) {
			return !!this.getNodeById(tree, nodeId);
		}

		/**
   * 返回 tree 中 nodeId 节点
   * @param tree
   * @param nodeId
   * @returns {node}
   */

	}, {
		key: 'getNodeById',
		value: function getNodeById(tree, nodeId) {
			return new _parent2.default(this.v).getNodeById(tree, nodeId);
		}

		/**
   * 返回以 nodeId 为节点的全部节点 id 数组
   * DFS 算法
   * @param tree 完整树结构
   * @param nodeId 节点id
   * @returns {Array}
   */

	}, {
		key: 'findParentIds',
		value: function findParentIds(tree, nodeId) {
			return new _parent2.default(this.v).findParentIds(tree, nodeId);
		}

		/**
   * 返回以 nodeId 为节点的全部节点 数组
   * DFS 算法
   * @param tree 完整树结构
   * @param nodeId 节点id
   * @returns {Array}
   */

	}, {
		key: 'findParents',
		value: function findParents(tree, nodeId) {
			return new _parent2.default(this.v).findParents(tree, nodeId);
		}

		/**
   * 返回 包含 nodeId 的完整 tree 对象
   * @param tree
   * @param nodeId
   */

	}, {
		key: 'findTree',
		value: function findTree(tree, nodeId) {
			return new _parent2.default(this.v).findTree(tree, nodeId);
		}

		/**
   * 将数组转化成树形结构返回
   * @param array
   * @returns {Array}
   */

	}, {
		key: 'makeTree',
		value: function makeTree(array) {
			return new _make2.default(this.v).arrayToTree(array);
		}

		/**
   * 将树转化成对象数组返回
   * @param tree
   * @returns {*}
   */

	}, {
		key: 'makeArray',
		value: function makeArray(tree) {
			return new _make2.default(this.v).treeToArray(tree);
		}
	}]);

	return Lemon;
}();

exports.default = Lemon;