import test from 'ava';
import Lemon from '../src/lemon';

test('tree to array 1', t => {
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
	const array = new Lemon().makeArray(tree);
	t.is(array.length, 5);
});

test('tree to array 2', t => {
	const tree = {
		id: 1,
		children: [
			{
				id: 2,
				children: [],
			},
			{
				id: 3,
				children: {}
			},
			{
				id: 4,
				children: null
			},
			{
				id: 5,
			},
		],
	};
	const array = new Lemon().makeArray(tree);
	t.is(array.length, 5);
});

test('tree to array 3', t => {
	const tree = [
		{
			id: 1,
			children: [
				{
					id: 2,
					children: [],
				},
				{
					id: 3,
					children: {}
				},
			],
		},
		{
			id: 11,
			children: {
				id: 12,
			},
		}
	];
	const array = new Lemon().makeArray(tree);
	t.is(array.length, 5);
});