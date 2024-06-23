import { useRef, useCallback } from "react";

export type verificationMethod = () => boolean;

export type RegistryState = Map<string, verificationMethod>;

export type RegisterType = (
  id: string,
  verificationMethod: verificationMethod,
) => void;

export type UnregisterType = (id: string) => void;

export interface VerifyMethods {
  register: RegisterType;
  unregister: UnregisterType;
}

export interface useVerifyReturn extends VerifyMethods {
  verify: () => boolean;
}

export const useVerify = (): useVerifyReturn => {
  const registry = useRef<RegistryState>(new Map());

  const register = useCallback(
    (id: string, verificationMethod: verificationMethod) => {
      registry.current.set(id, verificationMethod);
    },
    [],
  );

  const unregister = useCallback((id: string) => {
    registry.current.delete(id);
  }, []);
  const verify = (): boolean => {
    return Array.from(registry.current.values()).every((verificationMethod) => {
      return verificationMethod();
    });
  };

  return {
    register,
    unregister,
    verify,
  };
};
