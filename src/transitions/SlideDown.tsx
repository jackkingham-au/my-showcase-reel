import React from "react";
import { useCurrentFrame, useVideoConfig } from "remotion";
import { slideY } from "../../utils/animations";
import AbsoluteCenter from "../components/AbsoluteCenter";

const SlideDown = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    const frame = useCurrentFrame();
    const { height } = useVideoConfig();
    const transitionDuration = 40;

    return (
        <AbsoluteCenter
            className={`z-50 ` + className}
            style={slideY(frame, height, transitionDuration)}
        >
            {children}
        </AbsoluteCenter>
    )
}

export default SlideDown;