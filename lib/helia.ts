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

export const getJsonByCid = async <T>(
  cidString: string,
  timeout: number = 10000,
): Promise<T> => {
  const cid = CID.parse(cidString);

  const helia = await createHeliaSingleton();
  const j = json(helia);

  const controller = new AbortController();
  const timeoutId = setTimeout(() => {
    controller.abort();
  }, timeout);

  try {
    const result: T = await j.get(cid, {
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    return result;
  } catch (error) {
    clearTimeout(timeoutId);
    throw error;
  }
};

export const pingCid = async (cidString: string) => {
  const cid = CID.parse(cidString);
  const helia = await createHeliaSingleton();

  // 添加 Pin 并处理 AsyncGenerator 返回值
  for await (const pinnedCid of helia.pins.add(cid)) {
    console.log(`Pinned CID: ${pinnedCid.toString()}`);
  }
};
