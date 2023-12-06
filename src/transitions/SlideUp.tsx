import React from "react";
import { useCurrentFrame, useVideoConfig } from "remotion";
import AbsoluteCenter from "../components/AbsoluteCenter";
import { slideY } from "../../utils/animations";

const SlideUp = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    const frame = useCurrentFrame();
    const { height } = useVideoConfig();
    const transitionDuration = 40;

    return (
        <AbsoluteCenter
            className={`z-50 ` + className}
            style={slideY(frame, height, transitionDuration, 'bottom')}
        >
            {children}
        </AbsoluteCenter>
    )
}

export default SlideUp;