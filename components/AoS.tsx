import {
  useRef,
  useState,
  useEffect,
  CSSProperties,
  ReactNode,
  RefObject,
} from "react";

interface IAnimation {
  children: ReactNode;
  runOnce?: boolean;
  transitionProps?: CSSProperties;
}

interface IAnimate extends IAnimation {
  from: CSSProperties;
  to: CSSProperties;
  runOnce: boolean;
}

const useElementOnScreen = (ref: RefObject<Element>, runOnce: boolean) => {
  const [isIntersecting, setIsIntersecting] = useState(true);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry], observer) => {
        if (runOnce && ref.current && entry.isIntersecting) {
          observer.unobserve(ref.current);
        }
        setIsIntersecting(entry.isIntersecting);
      },
      { rootMargin: "-25% 0px" }
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

const Animate = (props: IAnimate) => {
  const { current: runOnce } = useRef(props.runOnce);
  const ref = useRef<HTMLDivElement>(null);
  const onScreen = useElementOnScreen(ref, runOnce);
  const transitionDefaultProps: CSSProperties = {
    transition: "0.6s ease-in-out",
  };

  const styleProps = props.transitionProps
    ? props.transitionProps
    : transitionDefaultProps;

  return (
    <div
      ref={ref}
      style={
        onScreen
          ? {
              ...styleProps,
              ...props.to,
            }
          : {
              ...styleProps,
              ...props.from,
            }
      }
    >
      {props.children}
    </div>
  );
};

const FadeIn = (props: IAnimation) => (
  <Animate
    from={{ opacity: 0 }}
    to={{ opacity: 1 }}
    runOnce={props.runOnce != undefined ? props.runOnce : true}
    transitionProps={props.transitionProps}
  >
    {props.children}
  </Animate>
);

const FadeUp = (props: IAnimation) => (
  <Animate
    from={{ opacity: 0, translate: "0 2rem" }}
    to={{ opacity: 1, translate: "none" }}
    runOnce={props.runOnce != undefined ? props.runOnce : true}
    transitionProps={props.transitionProps}
  >
    {props.children}
  </Animate>
);

const ScaleIn = (props: IAnimation) => (
  <Animate
    from={{ scale: "0" }}
    to={{ scale: "1" }}
    runOnce={props.runOnce != undefined ? props.runOnce : true}
    transitionProps={props.transitionProps}
  >
    {props.children}
  </Animate>
);

const SlideFromLeft = (props: IAnimation) => (
  <Animate
    from={{ transform: "translateX(-100%)", opacity: 0 }}
    to={{ transform: "translateX(0px)", opacity: 1 }}
    runOnce={props.runOnce != undefined ? props.runOnce : true}
    transitionProps={props.transitionProps}
  >
    {props.children}
  </Animate>
);

const SlideFromRight = (props: IAnimation) => (
  <Animate
    from={{ transform: "translateX(100%)", opacity: 0 }}
    to={{ transform: "translateX(0px)", opacity: 1 }}
    runOnce={props.runOnce != undefined ? props.runOnce : true}
    transitionProps={props.transitionProps}
  >
    {props.children}
  </Animate>
);

export const AoS = {
  Animate,
  FadeIn,
  FadeUp,
  ScaleIn,
  SlideFromLeft,
  SlideFromRight,
};
