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
      const clickedInsideAnotherCard = Object.entries(cardRefs.current).some(
        ([id, ref]) =>
          ref &&
          ref.contains(event.target as Node) &&
          parseInt(id) !== selectedCard,
      );

      if (clickedInsideAnotherCard) {
        setSelectedCard(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const registerCard = useCallback((ref: HTMLElement | null, id: Id) => {
    cardRefs.current[id] = ref;
  }, []);

  const removeCard = useCallback((id: Id) => {
    delete cardRefs.current[id];
  }, []);

  return { selectedCard, setSelectedCard, registerCard, removeCard };
};
