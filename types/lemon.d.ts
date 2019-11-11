/*
 * @Author: Porco
 * @Date: 2019-11-11 14:23:12
 * @LastEditTime: 2019-11-11 14:58:14
 * @Description: 请填写文件注释
 */

export declare class LemonTree {
  findPidsByTrees(tree: object, nodeId: string): Array<any>;

  hasNodeId(tree: object, nodeId: string): boolean;

  getNodeById(tree: object, nodeId: string): object;

  findParentIds(tree: object, nodeId: string): Array<any>;
  
  findParents(tree: object, nodeId: string): Array<any>;

  findTree(tree: object, nodeId: string): object;

  makeTree(array: Array<any>): object;

  makeArray(tree: object): Array<any>;
}