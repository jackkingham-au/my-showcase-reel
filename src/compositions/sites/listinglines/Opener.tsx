import { AbsoluteFill } from "remotion"
import { Img, staticFile, useVideoConfig, useCurrentFrame } from "remotion";
import { slideY, upAndFade } from "../../../../utils/animations";

const Opener = () => {
  const { fps, height } = useVideoConfig()
  const frame = useCurrentFrame()

  return (
    <>
      <AbsoluteFill className="z-10">
        <Img src={staticFile('/assets/sites/listinglines/background.svg')} />
      </AbsoluteFill>
      <Img src={staticFile('/assets/sites/listinglines/opener.svg')} style={slideY(frame, height, 30, 'top')} className="max-w-[100vw] z-50 mx-auto" />
      <Img src={staticFile('/assets/sites/listinglines/opener-asset-1.svg')} style={upAndFade(fps, frame, 20)} className="absolute bottom-4 right-56 z-50 scale-150" />
    </>
  )
}

export default Opener;