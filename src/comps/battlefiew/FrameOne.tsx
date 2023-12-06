import { Img, staticFile, useCurrentFrame, useVideoConfig } from "remotion";
import { downAndFade, slideY } from "../../../utils/animations";

const FrameOne = () => {
  const frame = useCurrentFrame();
  const { height, fps } = useVideoConfig();

  return (
    <>
        <Img src={staticFile("/assets/sites/battlefiew/Asset-1.svg")} className='absolute top-24 left-[37%]' style={slideY(frame, height, 40, 'top')} />
        <Img src={staticFile("/assets/sites/battlefiew/Asset-2.svg")} className='absolute top-24 left-[8%]' style={slideY(frame, height, 50, 'top')} />
        <Img src={staticFile("/assets/sites/battlefiew/Asset-3.svg")} className='absolute bottom-12 left-[8%]' />
        <Img src={staticFile("/assets/sites/battlefiew/Asset-4.svg")} className='absolute top-[30%] right-[18%]' style={downAndFade(fps, frame, 30)} />
    </>
  )
}

export default FrameOne