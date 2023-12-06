import { AbsoluteFill, Img, staticFile, useCurrentFrame, useVideoConfig } from "remotion";
import { slideX } from "../../../../utils/animations";

const Opener = () => {
  const { width } = useVideoConfig()
  const frame = useCurrentFrame()

  return (
    <>
      <AbsoluteFill className="z-10">
        <Img src={staticFile('/assets/sites/bimcodes/background.svg')} />
      </AbsoluteFill>
      <Img src={staticFile('/assets/sites/bimcodes/opener.svg')} style={slideX(frame, width, 30, 'right')} className="max-w-[75vw] z-50 ml-12" />
      <Img src={staticFile('/assets/sites/bimcodes/opener-asset-1.png')} style={slideX(frame, width, 30, 'left')} className="absolute top-[5%] right-16 z-50" />
      <Img src={staticFile('/assets/sites/bimcodes/opener-asset-2.png')} style={slideX(frame, width, 30, 'left')} className="absolute right-16 bottom-[5%] z-50" />

    </>
  )
}

export default Opener;