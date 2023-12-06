import { Img, staticFile, useCurrentFrame, interpolate, useVideoConfig, Sequence } from "remotion";
import { slideX } from "../../../utils/animations";

const FrameOne = () => {
  const frame = useCurrentFrame();
  const marginTop = interpolate(frame, [20, 70], [1000, -750], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' })
  const { width } = useVideoConfig();

  return (
    <>
      <Sequence durationInFrames={150}>
        <Img src={staticFile("/assets/sites/bimcodes/Asset-1.svg")} style={{ marginTop }} className="z-40 absolute w-[1600px] top-0 right-8 left-1/2 -translate-x-1/2" />
      </Sequence>
      <Sequence from={60} durationInFrames={90}>
        <Img src={staticFile("/assets/sites/bimcodes/Asset-2.svg")} className='absolute left-[15%] bottom-[30%] z-50' style={slideX(frame, width, 30, 'right', 70)} />
        <Img src={staticFile("/assets/sites/bimcodes/Asset-3.svg")} className='absolute right-[15%] bottom-[30%] z-50' style={slideX(frame, width, 30, 'left', 70)} />
      </Sequence>
    </>
  )
}

export default FrameOne