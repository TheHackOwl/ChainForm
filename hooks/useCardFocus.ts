import { useState, useEffect, useRef, useCallback } from "react";

export type Id = number | string;

export interface UseCardFocusReturn {
  selectedCard: Id | null;
  setSelectedCard: (id: Id) => void;
  registerCard: (ref: HTMLElement | null, id: Id) => void;
  removeCard: (id: Id) => void;
}

export const useCardFocus = (): UseCardFocusReturn => {
  const [selectedCard, setSelectedCard] = useState<Id | null>(null);
  const cardRefs = useRef<{ [key: Id]: HTMLElement | null }>({});

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const targetRef = Object.entries(cardRefs.current).find(
        ([id, ref]) =>
          ref &&
          ref.contains(event.target as Node) &&
          parseInt(id) !== selectedCard,
      );

      if (targetRef) {
        setSelectedCard(targetRef[0]);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const registerCard = useCallback((ref: HTMLElement | null, id: Id) => {
    console.log(id, "id");

    cardRefs.current[id] = ref;
  }, []);

  const removeCard = useCallback((id: Id) => {
    delete cardRefs.current[id];
  }, []);

  return {
    selectedCard,
    setSelectedCard,
    registerCard,
    removeCard,
  };
};
