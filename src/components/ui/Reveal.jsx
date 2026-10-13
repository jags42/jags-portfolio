import { useEffect, useRef, useState } from "react";

const supportsObserver =
  typeof window !== "undefined" && "IntersectionObserver" in window;

export default function Reveal({ as: Tag = "div", className = "", children, ...rest }) {
  const ref = useRef(null);

  // Without IntersectionObserver there is nothing to wait for, so show it now.
  const [isVisible, setIsVisible] = useState(!supportsObserver);

  useEffect(() => {
    const element = ref.current;

    if (!supportsObserver || !element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px" }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${isVisible ? "is-visible" : ""} ${className}`.trim()}
      {...rest}
    >
      {children}
    </Tag>
  );
}
