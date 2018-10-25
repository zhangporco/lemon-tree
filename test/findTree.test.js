import test from 'ava';
import Lemon from '../src/lemon';

const tree = {
	id: 1,
	children: {
		id: 2,
		children: {
			id: 3,
			children: {
				id: 4,
				children: {
					id: 5,
				},
			},
		},
	},
};
test('tree findTree 1', t => {
	const nodeId = 2;
	const res = new Lemon().findTree(tree, nodeId);
	t.is(res.id, 1);
});

test('tree findTree 1', t => {
	const trees = [
		tree,
		{
			id: 11,
			children: {
				id: 12,
				children: {
					id: 13,
				},
			},
		},
		{
			id: 21,
			children: {
				id: 22,
				children: {
					id: 23,
				},
			},
		},
	];
	
	const nodeId = 22;
	const res = new Lemon().findTree(trees, nodeId);
	t.is(res.id, 21);
});