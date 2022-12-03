import { useEffect } from 'react'

export function useOnHoverOutside(flg, handler) {
  useEffect(
    () => {
      const listener = (event) => {
        if (!flg.current || flg.current.contains(event.target)) {
          return;
        }
        handler(event);
      };
      document.addEventListener("mouseover", listener);
      return () => {
        document.removeEventListener("mouseout", listener);
      };
    },
    [flg,handler]
  );
}
