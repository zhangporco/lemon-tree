'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _parent = require('./parent');

var _parent2 = _interopRequireDefault(_parent);

var _make = require('./make');

var _make2 = _interopRequireDefault(_make);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
let Lemon = class Lemon {
	constructor(v) {
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
	findPidsByTrees(tree, nodeId) {
		return new _parent2.default(this.v).findPidsByTrees(tree, nodeId);
	}

	/**
  * 判断 nodeId 是否在 tree 中
  * 继承自 getNodeById
  * @param tree
  * @param nodeId
  * @returns {boolean}
  */
	hasNodeId(tree, nodeId) {
		return !!this.getNodeById(tree, nodeId);
	}

	/**
  * 返回 tree 中 nodeId 节点
  * @param tree
  * @param nodeId
  * @returns {node}
  */
	getNodeById(tree, nodeId) {
		return new _parent2.default(this.v).getNodeById(tree, nodeId);
	}

	/**
  * 返回以 nodeId 为节点的全部节点 id 数组
  * DFS 算法
  * @param tree 完整树结构
  * @param nodeId 节点id
  * @returns {Array}
  */
	findParentIds(tree, nodeId) {
		return new _parent2.default(this.v).findParentIds(tree, nodeId);
	}

	/**
  * 返回以 nodeId 为节点的全部节点 数组
  * DFS 算法
  * @param tree 完整树结构
  * @param nodeId 节点id
  * @returns {Array}
  */
	findParents(tree, nodeId) {
		return new _parent2.default(this.v).findParents(tree, nodeId);
	}

	/**
  * 返回 包含 nodeId 的完整 tree 对象
  * @param tree
  * @param nodeId
  */
	findTree(tree, nodeId) {
		return new _parent2.default(this.v).findTree(tree, nodeId);
	}

	/**
  * 将数组转化成树形结构返回
  * @param array
  * @param template 结构模版
  * @returns {Array}
  */
	arrayToTree(array, template) {
		return new _make2.default(template).arrayToTree(array);
	}
};
exports.default = Lemon;