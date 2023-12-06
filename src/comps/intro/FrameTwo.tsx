import { Img, staticFile, useCurrentFrame, useVideoConfig } from "remotion";
import { upAndFade } from "../../../utils/animations";
import { loadFont } from "@remotion/google-fonts/Montserrat";

const { fontFamily } = loadFont();

const FrameTwo = () => {
  const { fps } = useVideoConfig()
  const frame = useCurrentFrame();

  return (
    <>
      <div className="relative z-50 h-full w-full" style={upAndFade(fps, frame)}>
        <h1 style={{ fontFamily }} className="font-semibold text-white text-[80px] text-center absolute top-[32%] z-[60] w-full">WELCOME TO</h1>
        <h1 style={{ fontFamily }} className="font-semibold text-white text-[150px] text-center absolute top-[38%] z-[60] w-full">MY</h1>
        <Img src={staticFile('/assets/images/My-World-Background.png')} className="h-full w-full" />
      </div>
      <Img src={staticFile('/assets/images/My-World-Text.png')} className="h-auto max-w-full w-[80%] z-[60] absolute top-1/2 left-[10%]" style={upAndFade(fps, frame, 10)} />
    </>
  )
}

export default FrameTwo;