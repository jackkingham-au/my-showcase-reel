import { Img, staticFile, useCurrentFrame, useVideoConfig } from "remotion";
import { slideX } from "../../../utils/animations";

const FrameFour = () => {
  const frame = useCurrentFrame();
  const { width } = useVideoConfig();

  return (
    <>
        <Img src={staticFile("/assets/sites/listinglines/Asset-6.svg")} className='absolute z-[60] top-[12%] left-[28%]' style={slideX(frame, width, 40, 'right', 30)} />
        <Img src={staticFile("/assets/sites/listinglines/Asset-7.svg")} className='absolute z-[60] top-[12%] left-[2%]' style={slideX(frame, width, 40, 'right', 20)} />
        <Img src={staticFile("/assets/sites/listinglines/Asset-8.svg")} className='absolute z-[60] bottom-[-5%] right-[22%]' style={slideX(frame, width, 40, 'left', 50)} />
        <Img src={staticFile("/assets/sites/listinglines/Asset-9.svg")} className='absolute z-[60] bottom-[-5%] right-[4%]' style={slideX(frame, width, 40, 'left', 50)} />
    </>
  )
}

export default FrameFour