import { AbsoluteFill, useCurrentFrame, useVideoConfig } from "remotion";
import { fadeInAndOut } from "../../utils/animations";

const Fade = ({ transitionDuration }: { transitionDuration?: number }) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const duration = transitionDuration ?? 10;



  return (
    <AbsoluteFill
      className="z-50 bg-black"
      style={fadeInAndOut(frame, duration, durationInFrames, true)}
    />
  )
}

export default Fade;