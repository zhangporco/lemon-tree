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
test('tree findParents 1', t => {
	const nodeId = 5;
	const res = new Lemon().findParents(tree, nodeId);
	t.is(res.length, 5);
});
test('tree findParents 2', t => {
	const nodeId = 2;
	const res = new Lemon().findParents(tree, nodeId);
	t.is(res[ 0 ], 1);
});
test('tree findParents 3', t => {
	const nodeId = 8;
	const res = new Lemon().findParents(tree, nodeId);
	t.is(res.length, 0);
});

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
test('tree findPidsByTrees 1', t => {
	const nodeId = 23;
	const res = new Lemon().findPidsByTrees(trees, nodeId);
	t.is(res.length, 3);
});
test('tree findPidsByTrees 2', t => {
	const nodeId = 3;
	const res = new Lemon().findPidsByTrees(trees, nodeId);
	t.is(res.length, 3);
});


test('tree new 1', t => {
	const data = {
		ID: 'XX',
		CHILDREN: {
			ID: 'XXX',
			CHILDREN: {},
		},
	};
	const tree = new Lemon({ id: 'ID', children: 'CHILDREN' });
	const res = tree.findParents(data, 'XXX');
	t.is(res.length, 2);
});

test('tree children array 1', t => {
	const data = {
		menuId: 1,
		children: [
			{
				menuId: 2,
				children: {},
			},
			{
				menuId: 3,
				children: {},
			},
			{
				menuId: 4,
				children: {},
			},
		],
	};
	const tree = new Lemon({ id: 'menuId', children: 'children'});
	const res = tree.findParents(data, 3);
	t.is(res.length, 2);
});


test('tree children array 2', t => {
	const data = {
		menuId: 1,
		children: [
			{
				menuId: 2,
				children: {},
			},
			{
				menuId: 3,
				children: {},
			},
			{
				menuId: 4,
				children: {
					menuId: 41,
					children: [
						{
							menuId: 411,
							children: {},
						},
						{
							menuId: 412,
							children: {},
						},
					],
				},
			},
		],
	};
	const tree = new Lemon({ id: 'menuId', children: 'children'});
	const res = tree.findParents(data, 411);
	t.is(res.length, 4);
});