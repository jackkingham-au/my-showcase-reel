import { useCurrentFrame, useVideoConfig } from "remotion";
import { upAndFade, wave } from "../../../utils/animations";

const IntroSlide = () => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    return (
        <div className="p-24 border-r-[24px] border-r-white bg-slate-900 absolute z-40 top-0 bottom-0 left-0 w-[40%]">
            <p className="text-8xl font-medium my-12 text-white" style={wave(frame, 1)}>👋</p>
            <p className="text-6xl font-medium my-12 text-white" style={upAndFade(fps, frame, 26)}>My name is,</p>
            <h1 className="text-white text-8xl font-semibold" style={upAndFade(fps, frame, 43)}>Jack</h1>
            <h1 className="text-white text-8xl font-semibold" style={upAndFade(fps, frame, 45)}>Kingham</h1>
            <p className="text-6xl font-medium my-12 text-white" style={upAndFade(fps, frame, 120)}>Welcome to</p>
            <h1 className="text-white text-7xl font-semibold" style={upAndFade(fps, frame, 130)}>MY WORLD 🌎</h1>
        </div>
    )
}

export default IntroSlide;