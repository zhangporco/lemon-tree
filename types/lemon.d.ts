/*
 * @Author: Porco
 * @Date: 2019-11-11 14:23:12
 * @LastEditTime: 2019-11-13 20:15:29
 * @Description: 请填写文件注释
 */

export declare class LemonTree {
  constructor(option: object);

  findPidsByTrees(tree: object, nodeId: string): Array<any>;

  hasNodeId(tree: object, nodeId: string): boolean;

  getNodeById<T>(tree: T, nodeId: string): T;

  findParentIds(tree: object, nodeId: string): Array<any>;
  
  findParents(tree: object, nodeId: string): Array<any>;

  findTree<T>(tree: T, nodeId: string): T;

  makeTree(array: Array<any>): object;

  makeArray(tree: object): Array<any>;
}