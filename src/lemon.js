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
function Lemon(v) {
	this.alias = {
		id: v ? v.id : 'id',
		children: v ? v.children : 'children',
		pId: v ? v.pId : 'pId:',
	};
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
Lemon.prototype.findPidsByTrees = function(trees, nodeId) {
	for (const tree of trees) {
		const res = this.findParents(tree, nodeId);
		if (res && res.length) return res;
	}
	return [];
};

/**
 * 判断 nodeId 是否在 tree 中
 * 继承自 getNodeById
 * @param tree
 * @param nodeId
 * @returns {boolean}
 */
Lemon.prototype.hasNodeId = function(tree, nodeId) {
	return !!this.getNodeById(tree, nodeId);
};

/**
 * 返回 tree 中 nodeId 节点
 * @param tree
 * @param nodeId
 * @returns {node}
 */
Lemon.prototype.getNodeById = function(tree, nodeId) {
	if (Array.isArray(tree)) {
		for (const v of tree) {
			const res = this.getNodeById(v, nodeId);
			if (res) return res;
		}
	} else {
		if (tree[this.alias.id] === nodeId) return tree;
		if (tree[this.alias.children]) {
			return this.getNodeById(tree[this.alias.children], nodeId);
		}
		return null;
	}
};

/**
 * 返回以 nodeId 为节点的全部节点 数组
 * DFS 算法
 * @param tree 完整树结构
 * @param nodeId 节点id
 * @param pList 不必填
 * @returns {Array}
 */
Lemon.prototype.findParents = function(tree, nodeId, pList = []) {
	if (Array.isArray(tree)) {
		for (const v of tree) {
			const res = this.findParents(v, nodeId, pList);
			if (res && res.length) return res;
		}
	} else {
		const array = JSON.parse(JSON.stringify(pList));
		array.push(tree[this.alias.id]);
		if (tree[this.alias.id] === nodeId) return array;
		if (tree[this.alias.children]) {
			return this.findParents(tree[this.alias.children], nodeId, array);
		}
	}
	pList = [];
	return pList;
};

module.exports = Lemon;
