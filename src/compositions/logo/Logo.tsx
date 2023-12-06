import { interpolate, useCurrentFrame } from "remotion";
import Triangle from "./Triangle";

const Logo = () => {
    const frame = useCurrentFrame();
    const opacity = interpolate(frame, [0, 30, 150], [0.3, 1, 1])
    
    const innerScale = interpolate(frame, [0, 20, 150], [7, 1, 1])
    const midScale = interpolate(frame, [0, 40, 150], [7, 1, 1])
    const outerScale = interpolate(frame, [0, 60, 150], [7, 1, 1])

    return (
        <>
            <Triangle size={300} opacity={opacity} scale={innerScale} />
            <Triangle size={400} opacity={opacity / 2} scale={midScale} />
            <Triangle size={500} opacity={opacity / 3} scale={outerScale} />        
        </>
    )
}

export default Logo;