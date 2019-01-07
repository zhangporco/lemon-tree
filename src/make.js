import _ from 'lodash';

export default class Make {
	constructor(v) {
		this.alias = {
			id: v ? v.id : 'id',
			pId: v ? v.pId : 'pId',
			children: v ? v.children : 'children',
		};
	}
	
	arrayToTree(array) {
		const iterator = JSON.parse(JSON.stringify(array));
		const res = [];
		for (const vi of iterator) {
			let boo = false;
			for (const vj of iterator) {
				if (vj[this.alias.id] === vi[this.alias.pId]) {
					boo = true;
				}
				if (vj[this.alias.pId] === vi[this.alias.id]) {
					vi[this.alias.children] = vi[this.alias.children] ?
						[...vi[this.alias.children], vj] : [vj];
				}
			}
			if (!boo) {
				res.push(vi);
			}
		}
		return res;
	}
	
	treeToArray(tree) {
		const array = [];
		const makeArray = (trees) => {
			if (Array.isArray(trees)) {
				for (const v of trees) {
					makeArray(v);
				}
			} else {
				const json = _.cloneDeep(trees);
				delete json.children;
				if (json[this.alias.id]) {
					array.push(json);
				}
				if (trees && trees[this.alias.children]) {
					makeArray(trees[this.alias.children]);
				}
			}
		};
		makeArray(tree);
		return array;
	}
}