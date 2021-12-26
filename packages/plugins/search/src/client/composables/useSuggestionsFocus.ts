import { ref } from "vue";
import type { Ref } from "vue";

export const useSuggestionsFocus = (
  suggestions: Ref<unknown[]>
): {
  focusIndex: Ref<number>;
  focusNext: () => void;
  focusPrev: () => void;
  focusTo: (i: number) => void;
  unFocus: () => void;
} => {
  const focusIndex = ref(0);

  const focusNext = (): void => {
    if (focusIndex.value < suggestions.value.length - 1) {
      focusIndex.value += 1;
    } else {
      focusIndex.value = 0;
    }
  };

  const focusPrev = (): void => {
    if (focusIndex.value > 0) {
      focusIndex.value -= 1;
    } else {
      focusIndex.value = suggestions.value.length - 1;
    }
  };

  const focusTo = (i: number): void => {
    if (i >= 0 && i < suggestions.value.length) focusIndex.value = i;
  };

  const unFocus = (): void => {
    focusIndex.value = -1;
  };

  return {
    focusIndex,
    focusNext,
    focusPrev,
    focusTo,
    unFocus
  };
};
