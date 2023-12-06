import { Sequence, Img, staticFile, useCurrentFrame, useVideoConfig } from "remotion";
import { slideX } from "../../../../utils/animations";

const SlideOne = () => {
  const { width } = useVideoConfig()
  const frame = useCurrentFrame()

  return <Img src={staticFile('/assets/images/slide-design-black.svg')} style={slideX(frame, width, 30, 'left')} />
}

const SlideTwo = () => {

  return <Img src={staticFile('/assets/images/slide-design-white.svg')} />
}

const Slide = () => {
  

  return (
    <>
      <Sequence from={0}>
        <SlideOne />
      </Sequence>
      <Sequence from={60} className="z-[60]">
        <SlideTwo />
      </Sequence>
    </>
  )
}

export default Slide;