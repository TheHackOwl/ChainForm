import { createHelia, Helia } from "helia";
import { json, type JSON } from "@helia/json";
import { CID } from "multiformats/cid";

type HeliaJSON = JSON;

/**
 * 创建单例模式的helia
 */
export const createHeliaSingleton = (() => {
  let instance: Helia;

  async function createInstance() {
    const helia: Helia = await createHelia();

    return helia;
  }

  return async () => {
    if (!instance) {
      instance = await createInstance();
    }

    return instance;
  };
})();

export const addJson = async <T>(jsonData: T): Promise<string> => {
  const helia = await createHeliaSingleton();

  const j: HeliaJSON = json(helia);
  const cid = await j.add(jsonData);

  return cid.toString();
};

export const getJsonByCid = async <T>(cidString: string): Promise<T> => {
  const cid = CID.parse(cidString);

  console.log(cid, "cid");

  const helia = await createHeliaSingleton();

  const j = json(helia);

  return await j.get(cid);
};
