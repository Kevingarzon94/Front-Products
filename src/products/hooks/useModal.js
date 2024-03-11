import { useState } from "react";

export const useModal = () => {
  const [onShowing, setOnShowing] = useState(false);

  const toggle = () => {
    setOnShowing(!onShowing);
  };

  return {
    onShowing,
    toggle,
  };
};
