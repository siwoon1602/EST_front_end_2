import { useEffect } from "react";
import { useState } from "react";

const useIsBottom = () => {
  const [isBottom, setIsBottom] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setIsBottom(
        window.innerHeight + document.documentElement.scrollTop + 300 >=
          document.documentElement.offsetHeight
      );
    });
  }, []);
  return isBottom;
};

export default useIsBottom;
