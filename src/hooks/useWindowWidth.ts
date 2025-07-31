import { useEffect, useState } from "react";

export default function useWindowWidth() {
  const [width, setWidth] = useState(() => {
    if (typeof window === "undefined") {
      return 1880;
    }

    return window.innerWidth;
  });

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
}
