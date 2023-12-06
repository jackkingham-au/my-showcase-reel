import { AbsoluteFill, useCurrentFrame, useVideoConfig } from "remotion";
import { circleScale } from "../../utils/animations";

const CircleScale = ({ transitionDuration, className, delay, children }: { transitionDuration?: number, className?: string, delay?: number, children: React.ReactNode }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const duration = transitionDuration ?? 30
  const animation = circleScale(fps, frame, {
    from: 0,
    to: 99,
    duration,
    reverse: false,
    delay
  })

  return (
    <>
        <AbsoluteFill
          className={"z-50 " + className}
          style={animation}
        >
          {children}
        </AbsoluteFill>
    </>
  )
}

export default CircleScale;