import test from 'ava';
import Lemon from '../src/lemon';

const array = [
	{ id: 1, pId: 0 },
	{ id: 2, pId: 1 },
	{ id: 3, pId: 1 },
	{ id: 4, pId: 3 },
	{ id: 5, pId: 4 },
	{ id: 6, pId: 0 },
	{ id: 7, pId: 6 },
	{ id: 8, pId: 7 },
	{ id: 9, pId: 8 },
	{ id: 10, pId: 0 },
];
test('array to tree 1', t => {
	const res = new Lemon().makeTree(array);
	t.is(res.length, 3);
});

const array2 = [
	{ Id: 1, pid: 0 },
	{ Id: 2, pid: 1 },
	{ Id: 3, pid: 1 },
	{ Id: 4, pid: 3 },
	{ Id: 5, pid: 4 },
	{ Id: 6, pid: 0 },
	{ Id: 7, pid: 6 },
	{ Id: 8, pid: 7 },
	{ Id: 9, pid: 8 },
	{ Id: 10, pid: 0 },
];
test('array to tree 2', t => {
	const res = new Lemon({ id: 'Id', pId: 'pid', children: 'child' }).makeTree(array2);
	t.is(res.length, 3);
});