import React, { useEffect, useMemo, useState } from "react";
import VisibilitySensor from "react-visibility-sensor";
import { useSpring, useTrail, animated as a } from "react-spring";

const AnimatedElement = ({ isVisible, getConfig, isOnce, children }) => {
    const [isInited, setIsInited] = useState(false);

    useEffect(() => {
        isOnce && isVisible && setIsInited(true);
        !isOnce && setIsInited(isVisible);
    }, [isVisible]);

    return React.cloneElement(children, {
        isVisible: isInited,
        config: getConfig(isInited),
    });
};

export const Animated = ({ children, getConfig = () => ({}), isOnce = false, className }) => (
    <div className={className}>
        <VisibilitySensor>
            {({ isVisible }) => (
                <AnimatedElement isOnce={isOnce} isVisible={isVisible} getConfig={getConfig}>
                    {children}
                </AnimatedElement>
            )}
        </VisibilitySensor>
    </div>
);

const Node = ({ config: cf, tag = "div", className = "", children }) => {
    const animationStyle = useSpring(cf);
    const Tag = useMemo(() => a[tag], [tag]);

    return (
        <Tag className={className} style={animationStyle}>
            {children}
        </Tag>
    );
};

const TrailText = ({ items = [], config: cf, isVisible = true, tag: Tag = "p", delay = 0 }) => {
    const trail = useTrail(items.length, {
        config: { mass: 5, tension: 2000, friction: 200, duration: 200, ...cf },
        delay,
        opacity: isVisible ? 1 : 0,
        x: isVisible ? 0 : 20,
        height: isVisible ? 80 : 0,
        from: { opacity: 0, x: 20, height: 0 },
    });

    return (
        <div className="trails-main">
            <Tag>
                {trail.map(({ x, height, ...rest }, index) => (
                    <a.span
                        key={items[index]}
                        className="trails-text"
                        style={{
                            ...rest,
                            transform: x.interpolate((x) => `translate3d(0,${x}px,0)`),
                        }}
                    >
                        <a.span style={{ marginRight: 4, height }}>{items[index]}</a.span>
                    </a.span>
                ))}
            </Tag>
        </div>
    );
};

Animated.TrailText = TrailText;
Animated.Node = Node;
