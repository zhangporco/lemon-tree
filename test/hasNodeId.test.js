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

const trees = [
	tree,
	{
		id: 11,
		children: [
			{
				id: 112,
				children: {
					id: 113,
				},
			},
			{
				id: 122,
				children: {
					id: 123,
				},
			},
		],
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
test('hasNodeId 1', t => {
	const nodeId = 8;
	const res = new Lemon().hasNodeId(tree, nodeId);
	t.false(res);
});
test('hasNodeId 2', t => {
	const nodeId = 23;
	const res = new Lemon().hasNodeId(trees, nodeId);
	t.true(res);
});
test('hasNodeId 3', t => {
	const nodeId = 112;
	const res = new Lemon().hasNodeId(trees, nodeId);
	t.true(res);
});
