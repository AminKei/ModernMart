import { useState, useEffect } from "react";

const useResponsive = () => {
  const [screenSize, setScreenSize] = useState<"sm" | "md" | "lg" | "xl">("sm");

  useEffect(() => {
    const checkScreenSize = () => {
      if (window.matchMedia("(max-width: 639px)").matches) {
        setScreenSize("sm");
      } else if (
        window.matchMedia("(min-width: 640px) and (max-width: 767px)").matches
      ) {
        setScreenSize("md");
      } else if (
        window.matchMedia("(min-width: 768px) and (max-width: 1023px)").matches
      ) {
        setScreenSize("lg");
      } else {
        setScreenSize("xl");
      }
    };

    checkScreenSize();

    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return screenSize;
};

export default useResponsive;
