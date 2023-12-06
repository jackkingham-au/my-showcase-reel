import React from "react";
import { useCurrentFrame, useVideoConfig } from "remotion";
import { slideX } from "../../utils/animations";
import AbsoluteCenter from "../components/AbsoluteCenter";

const SlideRight = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    const frame = useCurrentFrame();
    const { width } = useVideoConfig();
    const transitionDuration = 40;

    return (
        <AbsoluteCenter
            className={`z-50 ` + className}
            style={slideX(frame, width, transitionDuration, 'right')}
        >
            {children}
        </AbsoluteCenter>
    )
}

export default SlideRight;