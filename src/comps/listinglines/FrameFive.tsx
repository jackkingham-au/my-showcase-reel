import { Img, staticFile, useCurrentFrame, useVideoConfig } from "remotion";
import { fadeAndRotate, upAndFade } from "../../../utils/animations";

const FrameFive = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <>
      <Img src={staticFile("/assets/sites/listinglines/Asset-10.svg")} className='absolute z-[60] top-[10%] left-[35%]' style={upAndFade(fps, frame)} />
      <Img src={staticFile("/assets/sites/listinglines/Asset-11.svg")} className='absolute z-[50] top-[15%] left-[35%] origin-bottom-right' style={fadeAndRotate(fps, frame, 30, 'right')} />
      <Img src={staticFile("/assets/sites/listinglines/Asset-12.svg")} className='absolute z-[40] top-[15%] left-[35%] origin-bottom-left' style={fadeAndRotate(fps, frame, 30, 'left')} />
      <div className="bg-gray-300 absolute -bottom-[175px] right-0 left-[39.5%] w-[300px] rounded-full h-[300px] z-40" style={upAndFade(fps, frame, 30)}></div>
    </>
  )
}

export default FrameFive