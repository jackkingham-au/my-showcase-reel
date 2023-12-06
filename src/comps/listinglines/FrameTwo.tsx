import { Img, staticFile, useCurrentFrame, useVideoConfig, interpolate } from "remotion";
import { slideX, upAndFade } from "../../../utils/animations";

const FrameTwo = () => {
  const frame = useCurrentFrame();
  const { fps, width } = useVideoConfig();

  const marginTop = interpolate(frame, [10, 120], [1500, -1000], {
    extrapolateLeft: 'clamp'
  })

  return (
    <div className="bg-[#AEF1FF] w-full min-h-screen flex items-center justify-between z-10 flex-row p-12">
      <Img src={staticFile('/assets/sites/listinglines/Asset-1.svg')} className="block w-[30%] max-h-full" style={slideX(frame, width, 40)} />
      <Img src={staticFile('/assets/sites/listinglines/Asset-2.svg')} className="block w-[60%] rounded-3xl" style={{ marginTop, ...upAndFade(fps, frame) }} />
    </div>
  )
}

export default FrameTwo;