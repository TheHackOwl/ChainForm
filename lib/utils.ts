import { createHash } from "crypto";

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

/**
 * 将时间戳转换为 yyyy-mm-dd 格式的日期字符串
 * @param timestamp - 时间戳（毫秒）
 * @returns 格式化的日期字符串
 */
export function formatTimestampToDate(timestamp: number): string {
  const date = new Date(timestamp);

  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); // 月份从0开始，所以加1
  const day = date.getDate().toString().padStart(2, "0");

  return `${year}-${month}-${day}`;
}

/**
 * 简写地址，只保留前6后4
 * @param address
 * @returns
 */
export function abbreviateAddress(address: string): string {
  // 判断是否为有效的地址
  if (!address || address.length <= 10) {
    return address;
  }

  // 取前六个字符（包括0x）和最后四个字符
  const firstSix = address.substring(0, 6);
  const lastIndex = address.length - 4;
  const lastFour = address.substring(lastIndex);

  // 返回结果
  return `${firstSix}...${lastFour}`;
}

export function getFormatNumberRegex(decimalPlaces: number) {
  const regexPattern = `^\\D*(\\d*(?:\\.\\d{0,${decimalPlaces}})?).*?$`;
  const regex = new RegExp(regexPattern);

  return regex;
}

/**
 * hash生成函数
 * @param obj
 * @returns
 */
export async function generateHash(obj: Object) {
  const hash = createHash("md5"); // 这里使用 md5 哈希算法

  hash.update(JSON.stringify(obj));

  return hash.digest("hex");
}
