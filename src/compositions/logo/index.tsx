import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import Logo from "./Logo";
import Text from "./Text";

const Composition = () => {
    const frame = useCurrentFrame();
    const slideLeft = interpolate(frame, [0, 60, 80, 150], [0, 0, -250, -250])
    const slideRight = interpolate(frame, [0, 60, 80, 150], [0, 0, 250, 250])


    return (
        <AbsoluteFill className="bg-white flex items-center justify-center">
            <div
                style={{
                    transform: `translateX(${slideLeft}px)`
                }} 
                className="relative"
            >
                <Logo />
            </div>
            <div
                style={{
                    transform: `translateX(${slideRight}px)`
                }}
            >
                <Text />
            </div>
            
        </AbsoluteFill>
    )
}

export default Composition;