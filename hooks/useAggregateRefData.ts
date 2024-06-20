import { useRef } from "react";
export interface FancyMethods<T> {
  aggregateData: () => T;
  checkStatus: () => boolean;
}
export const useAggregateRefsData = <T>() => {
  const ref = useRef<FancyMethods<T> | null>(null);

  const aggregateData = (): T => {
    if (ref.current) {
      return ref.current.aggregateData();
    } else {
      throw new Error("Ref is not set");
    }
  };

  const checkComponentsStatus = (): boolean => {
    return ref.current ? ref.current.checkStatus() : false;
  };

  return {
    ref,
    aggregateData,
    checkComponentsStatus,
  };
};
