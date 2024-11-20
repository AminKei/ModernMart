import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const useCursorAnimation = () => {
  const appRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(".square", { rotate: 360, duration: 2 });
    }, appRef);

    return () => ctx.revert();
  }, []);

  let posX = 0,
    posY = 0;

  let mouseX = 0,
    mouseY = 0;

  useEffect(() => {
    const cursorAnimation = gsap.to(".cursor-example", {
      duration: 0.018,
      repeat: -1,
      onRepeat: function () {
        posX += (mouseX - posX) / 8;
        posY += (mouseY - posY) / 8;

        gsap.set(".cursor-example", {
          css: {
            left: posX - 1, // Adjust cursor position as needed
            top: posY - 2,
          },
        });
      },
    });

    const mouseMoveHandler = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    document.addEventListener("mousemove", mouseMoveHandler);

    return () => {
      cursorAnimation.kill(); // Clean up the GSAP animation
      document.removeEventListener("mousemove", mouseMoveHandler);
    };
  }, []);

  return appRef; // Providing reference to the app element
};

export default useCursorAnimation;
