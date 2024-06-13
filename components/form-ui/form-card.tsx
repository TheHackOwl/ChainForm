import React, { useRef, useEffect } from "react";
import { Card } from "@nextui-org/card";
import clsx from "clsx";

import { Id as CardId, UseCardFocusReturn } from "@/hooks/useCardFocus";

interface FormCard extends UseCardFocusReturn {
  children: React.ReactNode;
  id: CardId;
}

export const FormCard: React.FC<FormCard> = ({
  children,
  id,
  selectedCard,
  setSelectedCard,
  registerCard,
  removeCard,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const cardclasses = clsx("p-4  border-l-4", {
    "border-s-indigo-500": selectedCard === id,
  });

  useEffect(() => {
    registerCard(cardRef.current, id);

    return () => {
      removeCard(id);
    };
  }, [registerCard, removeCard, id]);

  const handleFocus = () => {
    setSelectedCard(id);
  };

  return (
    <Card ref={cardRef} isBlurred className={cardclasses} onFocus={handleFocus}>
      {children}
    </Card>
  );
};
