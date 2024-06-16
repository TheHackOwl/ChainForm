import { useCallback } from "react";
import { toast } from "react-hot-toast";
/**
 * useShare Hook
 *
 * This hook returns a function that, when called with an id, will copy the current URL
 * along with the provided id to the clipboard. It also shows a successful copy message.
 *
 * 该 hook 返回一个函数，当该函数使用一个 id 调用时，会将当前的 URL 和提供的 id
 * 一起复制到剪切板，并显示复制成功的消息。
 *
 * @returns {function} A function that accepts an id and copies the share link to the clipboard.
 * 返回一个接收 id 并将分享链接复制到剪切板的函数。
 */
export const useShare = (): ((id: string) => void) => {
  const copyToClipboard = async (text: string): Promise<void> => {
    try {
      await navigator.clipboard.writeText(text);
      toast.success("Share link copied to clipboard");
    } catch (err) {
      console.error("Failed to copy!", err);
    }
  };

  return useCallback((id: string): void => {
    const url = `${window.location.host}/forms/answer/${id}`;

    copyToClipboard(url);
  }, []);
};
