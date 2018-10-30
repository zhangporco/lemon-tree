'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
let Parent = class Parent {
	constructor(v) {
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
	findPidsByTrees(trees, nodeId) {
		for (const tree of trees) {
			const res = this.findParents(tree, nodeId);
			if (res && res.length) return res;
		}
		return [];
	}

	hasNodeId(tree, nodeId) {
		return !!this.getNodeById(tree, nodeId);
	}

	getNodeById(tree, nodeId) {
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
	}

	findParentIds(tree, nodeId, pList = []) {
		if (Array.isArray(tree)) {
			for (const v of tree) {
				const res = this.findParentIds(v, nodeId, pList);
				if (res && res.length) return res;
			}
		} else {
			const array = JSON.parse(JSON.stringify(pList));
			array.push(tree[this.alias.id]);
			if (tree[this.alias.id] === nodeId) return array;
			if (tree[this.alias.children]) {
				return this.findParentIds(tree[this.alias.children], nodeId, array);
			}
		}
		pList = [];
		return pList;
	}

	findTree(tree, nodeId) {
		const parents = this.findParents(tree, nodeId);
		return parents && parents.length ? parents[0] : parents;
	}

	findParents(tree, nodeId, pList = []) {
		if (Array.isArray(tree)) {
			for (const v of tree) {
				const res = this.findParents(v, nodeId, pList);
				if (res && res.length) return res;
			}
		} else {
			const array = JSON.parse(JSON.stringify(pList));
			array.push(tree);
			if (tree[this.alias.id] === nodeId) return array;
			if (tree[this.alias.children]) {
				return this.findParents(tree[this.alias.children], nodeId, array);
			}
		}
		pList = [];
		return pList;
	}
};
exports.default = Parent;