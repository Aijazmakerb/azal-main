import { useEffect } from "react";

export function useSlashFocus(ref) {
  useEffect(() => {
    const listener = (e) => {
      if (e.key === "/") {
        if (
          document.activeElement &&
          document.activeElement.tagName.toLowerCase() === "input"
        )
          return;
        e.preventDefault();
        ref.current && ref.current.focus();
      }
    };

    window.addEventListener("keydown", listener);
    return () => {
      window.removeEventListener("keydown", listener);
    };
  }, [ref]);
}
