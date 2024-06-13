import { useRef, useCallback } from "react";

/**
 * 自定义 Hook：useThrottle
 * Custom Hook: useThrottle
 *
 * @param callback - 需要节流的回调函数 The callback function to be throttled
 * @param delay - 节流的时间间隔（毫秒）The delay interval for throttling (milliseconds)
 * @returns 返回一个节流后的函数 Returns a throttled function
 */
export const useThrottle = (
  callback: (...args: any[]) => void,
  delay: number = 500,
) => {
  let timeId = useRef<NodeJS.Timeout | null>(null);
  // 返回一个节流后的函数 Returning a throttled function
  const throttledFunction = useCallback(
    (...args: any[]) => {
      if (timeId.current) clearTimeout(timeId.current);
      timeId.current = setTimeout(() => {
        callback(...args);
      }, delay);
    },
    [callback, delay],
  );

  return throttledFunction;
};
