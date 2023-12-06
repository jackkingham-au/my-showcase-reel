import { Img, staticFile, useCurrentFrame, useVideoConfig } from "remotion";
import { slideY } from "../../../utils/animations";

const FrameThree = () => {
  const frame = useCurrentFrame();
  const { height } = useVideoConfig();

  return (
    <>
      <Img src={staticFile('/assets/sites/listinglines/Asset-3.svg')} className="block w-[30%] max-h-full" style={slideY(frame, height, 40, 'top')} />
      <Img src={staticFile('/assets/sites/listinglines/Asset-4.svg')} style={slideY(frame, height, 40, 'bottom')} className="block w-[30%] max-h-full" />
      <Img src={staticFile('/assets/sites/listinglines/Asset-5.svg')} style={slideY(frame, height, 40, 'top')} className="block w-[30%] max-h-full" />
    </>
  )
}

export default FrameThree;