import pinataSDK from "@pinata/sdk";
/**
 * 创建pinata
 */
export const createPinatan = () => {
  const pinata = new pinataSDK({
    pinataJWTKey: (process as any).env.PINATA_JWT,
  });

  return pinata;
};
