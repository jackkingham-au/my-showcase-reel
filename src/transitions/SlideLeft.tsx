import React from "react";
import { useCurrentFrame, useVideoConfig } from "remotion";
import AbsoluteCenter from "../components/AbsoluteCenter";
import { slideX } from "../../utils/animations";

const SlideLeft = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    const frame = useCurrentFrame();
    const { width } = useVideoConfig();
    const transitionDuration = 40;

    return (
        <AbsoluteCenter
            className={`z-50 ` + className}
            style={slideX(frame, width, transitionDuration, 'left')}
        >
            {children}
        </AbsoluteCenter>
    )
}

export default SlideLeft;