import { createHash } from "crypto";

import { addJson, getJsonByCid } from "@/lib/helia";
import { FormDataType, AnswerFormType } from "@/types/index";

/**
 * 保存表单数据
 * @param form
 * @returns
 */
export async function saveForm(form: FormDataType): Promise<string> {
  const cid = await addJson<FormDataType>(form);

  return cid;
}

/**
 * 根据字符串cid获取表单数据
 * @param cid
 * @returns
 */
export async function getFormById(cid: string): Promise<FormDataType> {
  const formData = await getJsonByCid<FormDataType>(cid);

  return formData;
}

/**
 * 保存回答的问卷
 * @param form
 * @returns
 */
export async function saveAnswerForm(form: AnswerFormType): Promise<string> {
  const cid = await addJson<AnswerFormType>(form);

  return cid;
}

/**
 * hash生成函数
 * @param obj
 * @returns
 */
export function generateHash(obj: Object) {
  const hash = createHash("md5"); // 这里使用 md5 哈希算法

  hash.update(JSON.stringify(obj));

  return hash.digest("hex");
}
