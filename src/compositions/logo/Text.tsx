import { loadFont } from "@remotion/google-fonts/Roboto";
import { interpolate, useCurrentFrame } from "remotion";

const { fontFamily } = loadFont();

const Text = () => {
    const frame = useCurrentFrame();
    const opacity = interpolate(frame, [0, 60, 61, 90], [0, 0, 0, 1])

    return (
        <p style={{ fontFamily, opacity }} className="font-bold text-8xl text-gray-800 relative bottom-8">Remotion</p>
    )
}

export default Text;