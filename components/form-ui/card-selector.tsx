import React, { useRef, useEffect, useState } from "react";

import { Id as CardId, UseCardFocusReturn } from "@/hooks/useCardFocus";

// 假设 child 的类型是 React.ReactElement<any, any>
// 定义一个类型来包容 selected 属性
type ChildWithSelected = React.ReactElement<any, any> & { selected?: boolean };

interface CardSelectorProps extends UseCardFocusReturn {
  children: React.ReactNode;
  id: CardId;
}

/**
 * CardSelector组件
 * 该组件用于在一组卡片中管理和选择特定的卡片。
 * 它接收一个卡片ID（id）和子组件（children），
 * 并通过useCardFocus hook管理卡片的选中状态。
 *
 * @param {React.ReactNode} children - 子组件
 * @param {CardId} id - 卡片的唯一标识符
 * @param {CardId} selectedCard - 当前选中的卡片ID
 * @param {Function} setSelectedCard - 设置选中卡片ID的函数
 * @param {Function} registerCard - 注册卡片的函数
 * @param {Function} removeCard - 移除卡片的函数
 */
export const CardSelector: React.FC<CardSelectorProps> = ({
  children,
  id,
  selectedCard,
  setSelectedCard,
  registerCard,
  removeCard,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [selected, setSelected] = useState(false);

  useEffect(() => {
    registerCard(ref.current, id);

    return () => {
      removeCard(id);
    };
  }, [registerCard, removeCard, id]);

  useEffect(() => {
    setSelected(() => selectedCard === id.toString());
  }, [selectedCard, id]);

  // 过滤并克隆子组件，确保只克隆有效的 ReactElement
  const clonedChildren = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child as ChildWithSelected, {
        selected: selected,
      });
    }

    return child; // 如果不是有效的 ReactElement，则原样返回
  });

  return <div ref={ref}>{clonedChildren}</div>;
};
