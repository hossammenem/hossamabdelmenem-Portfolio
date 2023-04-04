import {
  useRef,
  useState,
  useEffect,
  CSSProperties,
  ReactNode,
  RefObject,
} from "react";

interface IAnimate {
  children: ReactNode;
  from: CSSProperties;
  to: CSSProperties;
  runOnce: boolean;
}

const useElementOnScreen = (ref: RefObject<Element>, runOnce: boolean) => {
  const rootMargin = "0px";
  const [isIntersecting, setIsIntersecting] = useState(true);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry], observer) => {
        if (runOnce && isIntersecting && ref.current) {
          observer.unobserve(ref.current);
        } else {
          setIsIntersecting(entry.isIntersecting);
        }
      },
      { rootMargin }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);
  return isIntersecting;
};
const Animation = (props: IAnimate) => {
  const { current: runOnce } = useRef(props.runOnce);
  const ref = useRef<HTMLDivElement>(null);
  const onScreen = useElementOnScreen(ref, runOnce);
  const defaultStyles: CSSProperties = {
    transition: "0.6s ease-in-out",
  };

  return (
    <div
      ref={ref}
      style={
        onScreen
          ? {
              ...defaultStyles,
              ...props.to,
            }
          : {
              ...defaultStyles,
              ...props.from,
            }
      }
    >
      {props.children}
    </div>
  );
};

const FadeIn = ({
  children,
  runOnce = false,
}: {
  children: ReactNode;
  runOnce?: boolean;
}) => (
  <Animation from={{ opacity: 0 }} to={{ opacity: 1 }} runOnce={runOnce}>
    {children}
  </Animation>
);

const FadeUp = ({
  children,
  runOnce = false,
}: {
  children: ReactNode;
  runOnce?: boolean;
}) => (
  <Animation
    from={{ opacity: 0, translate: "0 2rem" }}
    to={{ opacity: 1, translate: "none" }}
    runOnce={runOnce}
  >
    {children}
  </Animation>
);

const ScaleIn = ({
  children,
  runOnce = false,
}: {
  children: ReactNode;
  runOnce?: boolean;
}) => (
  <Animation from={{ scale: "0" }} to={{ scale: "1" }} runOnce={runOnce}>
    {children}
  </Animation>
);

const SlideFromLeft = ({
  children,
  runOnce = false,
}: {
  children: ReactNode;
  runOnce?: boolean;
}) => (
  <Animation
    from={{ transform: "translateX(-100%)" }}
    to={{ transform: "translateX(0px)" }}
    runOnce={runOnce}
  >
    {children}
  </Animation>
);

const SlideFromRight = ({
  children,
  runOnce = false,
}: {
  children: ReactNode;
  runOnce?: boolean;
}) => (
  <Animation
    from={{ transform: "translateX(100%)" }}
    to={{ transform: "translateX(0px)" }}
    runOnce={runOnce}
  >
    {children}
  </Animation>
);

export const Animate = {
  FadeIn,
  FadeUp,
  ScaleIn,
  SlideFromLeft,
  SlideFromRight,
};
