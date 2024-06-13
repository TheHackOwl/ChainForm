import { useEffect, useState, useRef } from "react";

/**
 * useFocus Hook 用于监控一个元素是否被聚焦
 * This useFocus hook monitors whether an element is focused
 *
 * @returns 一个包含两个元素的数组: [ref, isFocused]
 *          A tuple containing two elements: [ref, isFocused]
 *
 * ref: 用于绑定到目标 HTML 元素的引用
 *      A ref to be attached to the target HTML element
 *
 * isFocused: 布尔值，表示该元素是否被聚焦
 *            A boolean indicating whether the element is focused
 */
export const useFocus = <T extends HTMLElement>() => {
  const [isFocused, setIsFocused] = useState(false);
  const ref = useRef<T>(null);

  useEffect(() => {
    // 处理 focusin 事件
    // Handle the focusin event
    const handleFocusIn = (event: FocusEvent) => {
      if (ref.current && ref.current.contains(event.target as Node)) {
        setIsFocused(true);
      }
    };

    // 处理 focusout 事件
    // Handle the focusout event
    const handleFocusOut = (event: FocusEvent) => {
      if (ref.current && !ref.current.contains(event.relatedTarget as Node)) {
        setIsFocused(false);
      }
    };

    // 监听 document 的 focusin 和 focusout 事件
    // Listen to document's focusin and focusout events
    document.addEventListener("focusin", handleFocusIn);
    document.addEventListener("focusout", handleFocusOut);

    // 清理事件监听器
    // Cleanup event listeners
    return () => {
      document.removeEventListener("focusin", handleFocusIn);
      document.removeEventListener("focusout", handleFocusOut);
    };
  }, [ref.current]);

  // 返回 ref 和 isFocused
  // Return ref and isFocused
  return [ref, isFocused] as const;
};
