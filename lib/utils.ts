/**
 * 在指定的索引位置插入元素，并返回一个新的数组。
 *
 * @param array - 原始数组
 * @param index - 要插入元素的索引位置
 * @param item - 要插入的元素
 * @returns - 插入元素后的新数组
 */
export function insertAt<T>(array: T[], index: number, item: T): T[] {
  const newArray = [];

  for (let i = 0; i < array.length; i++) {
    if (i === index) {
      newArray.push(item);
    }
    newArray.push(array[i]);
  }
  if (index >= array.length) {
    newArray.push(item);
  }

  return newArray;
}
