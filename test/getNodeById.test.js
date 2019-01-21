import test from 'ava';
import Lemon from '../src/lemon';

test('tree getNodeById 1', t => {
	const nodeId = 3;
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
	const res = new Lemon().getNodeById(tree, nodeId);
	t.pass(res.length, 3);
});