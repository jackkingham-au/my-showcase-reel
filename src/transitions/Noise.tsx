import { noise2D } from "@remotion/noise";
import { useCurrentFrame } from "remotion";
import AbsoluteCenter from "../components/AbsoluteCenter";

const Noise = () => {
    const frame = useCurrentFrame();
    const transform = {
        x: noise2D('my-seed', 10, frame * 0.058) * 15,
        y: noise2D('hello-world', 10, frame * 0.058) * 15,
    }

    console.log(transform.x)

    return (
        <AbsoluteCenter className="bg-green-500">
            <p className="text-white text-8xl font-bold ease-in-out transition-transform" style={{transform: `translateX(${transform.x}px) translateY(${transform.y}px)`}}>Jack Kingham</p>
        </AbsoluteCenter>
    )
}

export default Noise;