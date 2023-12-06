import { AbsoluteFill, Img, staticFile, useCurrentFrame, useVideoConfig } from "remotion";
import { slideX, upAndFade } from "../../../../utils/animations";

const Opener = () => {
  const { width, fps } = useVideoConfig()
  const frame = useCurrentFrame()

  return (
    <>
      <AbsoluteFill>
        <Img src={staticFile('/assets/sites/mytherapymentor/background.svg')} />
      </AbsoluteFill>
      <Img style={upAndFade(fps, frame)} src={staticFile('/assets/sites/mytherapymentor/opener.svg')} className="max-w-[90vw] mx-auto" />
      <Img src={staticFile('/assets/sites/mytherapymentor/opener-asset-1.svg')} style={slideX(frame, width, 30, 'left')} className="absolute top-[38%] right-32 z-50 scale-150" />
      <Img src={staticFile('/assets/sites/mytherapymentor/opener-asset-2.svg')} style={slideX(frame, width, 30, 'right')} className="absolute bottom-[23%] left-[5%] z-50 block scale-150" />
    </>
  )
}

export default Opener;