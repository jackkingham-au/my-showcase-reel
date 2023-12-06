import { Img, staticFile, useCurrentFrame, useVideoConfig } from "remotion";
import { slideX } from "../../../utils/animations";

const FrameTwo = () => {
  const frame = useCurrentFrame();
  const { width } = useVideoConfig()

  return (
    <>
      <Img src={staticFile("/assets/sites/mytherapymentor/Asset-1.svg")} />
      <Img src={staticFile("/assets/sites/mytherapymentor/Asset-2.svg")} className="absolute left-[16%] top-[24%]" style={slideX(frame, width, 30, 'right', 30)} />
      <Img src={staticFile("/assets/sites/mytherapymentor/Asset-3.svg")} className="absolute right-[30%] top-[49%]" style={slideX(frame, width, 60, 'left', 75)} />
      <Img src={staticFile("/assets/sites/mytherapymentor/Asset-4.svg")} className="absolute right-[12%] top-[38%]" style={slideX(frame, width, 60, 'left', 60)} />
    </>
  )
}

export default FrameTwo