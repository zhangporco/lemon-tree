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

## API

- getNodeById(tree, nodeId) 返回树中特定节点对象
- hasNodeId(tree, nodeId) 判断特定节点是否在树中
- findParentIds(tree, nodeId) 获取全部父节点 id 数组（包括结点自身）
- findParents(tree, nodeId) 获取全部父节点 数组（包括结点自身)
- findTree(tree, nodeId) 获取 nodeId 所在树对象
- arrayToTree(array, template) 将数组转化成树形结构返回

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
const res = new Lemon().findParentIds(tree, nodeId);
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
      	  id: 113
        } 
      } 
    ]
  },
  {
    id: 21,
    children: {
      id: 22,
      children: {
        id: 23
      }
    }
  }
];
const nodeId = 23;
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
const res = tree.findParentIds(data, 'XXX');
```

```javascript 1.8
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
const template = { id: 'Id', pId: 'pid', children: 'child' };
const res = new Lemon().arrayToTree(array2, template);
```

（如果对使用有疑问，可以参考 **test** 目录下代码）
