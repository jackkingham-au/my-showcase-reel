import { Img, staticFile, useCurrentFrame, useVideoConfig } from "remotion";
import { upAndFade } from "../../../utils/animations";

const FrameOne = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig()

  return (
    <>
      <Img src={staticFile("/assets/sites/transicon/Asset-1.png")} className="w-[25%] z-50" style={upAndFade(fps, frame, 30)} />
      <Img src={staticFile("/assets/sites/transicon/Asset-2.png")} className="w-[25%] z-50" style={upAndFade(fps, frame, 30)} />
      <Img src={staticFile("/assets/sites/transicon/Asset-3.png")} className="w-[25%] z-50" style={upAndFade(fps, frame, 30)} />
      <div className="bg-white absolute bottom-0 right-0 left-0 w-full h-[300px] z-40" style={{ ...upAndFade(fps, frame, 60) }}></div>
    </>
  )
}

export default FrameOne