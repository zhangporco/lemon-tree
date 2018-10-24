# lemon-tree

**lemon-tree** 作为 js 操作 树形结构工具，它所支持的功能是从实际工作以及
leetcode 扫题中总结出的常用函数。

## 下载、安装

```javascript
npm i lemon-tree
```

```javascript
yarn add lemon-tree
```

## 导入

```javascript
import Lemon from 'lemon-tree';
```

## 使用

#### 基本用法 

```javascript 1.8
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
const nodeId = 4;
const res = new Lemon().findParents(tree, nodeId);
```

返回值为：

```javascript 1.8
[ 1, 2, 3, 4 ]
```

#### 获取树中特定节点对象

```javascript 1.8
const trees = [
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
const nodeId = 8;
const res = new Lemon().getNodeById(tree, nodeId);
```

返回值为：
```javascript 1.8
{ id: 23 }
```
#### 别名

lemon-tree 还支持列别名

```javascript 1.8
const data = {
    ID: 'XX',
    CHILDREN: {
        ID: 'XXX',
        CHILDREN: {},
    },
};
const tree = new Lemon({ id: 'ID', children: 'CHILDREN' });
const res = tree.findParents(data, 'XXX');
```