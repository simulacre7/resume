import { useRef, useEffect, useCallback } from "react";

const useScrollFadeIn = (direction = "up", duration = 1, delay = 0) => {
  const element = useRef();

  const handleDirection = (name) => {
    switch (name) {
      case "up":
        return "translate3d(0, 0.6rem, 0)";
      case "down":
        return "translate3d(0, -3vh, 0)";
      case "left":
        return "translate3d(50%, 0, 0)";
      case "right":
        return "translate3d(-50%, 0, 0)";
      default:
        return;
    }
  };

  const onScroll = useCallback(([entry]) => {
    const { current } = element;
    if (entry.isIntersecting) {
      current.style.opacity = 1;
      current.style.transform = "translate3d(0, 0, 0)";
    }
  }, []);

  useEffect(() => {
    let observer;

    if (element.current) {
      observer = new IntersectionObserver(onScroll, { threshold: 0.7 });
      observer.observe(element.current);
    }

    return () => observer && observer.disconnect();
  }, [onScroll]);

  return {
    ref: element,
    style: {
      opacity: 0,
      transform: handleDirection(direction),
      transitionProperty: "opacity, transform",
      transitionDuration: `${duration}s`,
      transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
      transitionDelay: `${delay}s`,
    },
  };
};

export default useScrollFadeIn;
