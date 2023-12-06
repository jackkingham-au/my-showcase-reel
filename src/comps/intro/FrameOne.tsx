import { Video, staticFile, AbsoluteFill, useCurrentFrame, useVideoConfig } from "remotion";
import { upAndFade, wave } from "../../../utils/animations";
import { loadFont } from "@remotion/google-fonts/Montserrat";

const { fontFamily } = loadFont();

const FrameOne = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <AbsoluteFill className="bg-slate-900">
      <Video
        className="z-30"
        src={staticFile('/assets/videos/intro-video.mp4')}
        startFrom={150}
        endAt={330}
        style={{ clipPath: 'circle(23% at 62% 57%)' }}
      />
      <p className="text-[300px] left-[5%] top-[-5%] font-medium my-12 text-white absolute" style={wave(frame, 1)}>👋</p>
      <p className="text-[120px] left-[5%] top-[35%] font-medium my-12 text-white/50 absolute" style={{ fontFamily, ...upAndFade(fps, frame, 15) }}>I'm</p>
      <p className="text-[150px] left-[5%] top-[50%] font-medium my-12 text-white absolute" style={{ fontFamily, ...upAndFade(fps, frame, 15) }}>Jack</p>
      <p className="text-[150px] left-[4%] top-[65%] font-medium my-12 text-white absolute" style={{ fontFamily, ...upAndFade(fps, frame, 20) }}>Kingham</p>
    </AbsoluteFill>
  )
}

export default FrameOne;