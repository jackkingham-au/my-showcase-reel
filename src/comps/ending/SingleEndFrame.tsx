import { Img, staticFile } from "remotion";

const SingleEndFrame = () => {
const slideNumber = 25

  return (
    <>
      <Img src={staticFile(`/assets/slides/Frame ${slideNumber}.svg`)} />
    </>
  )
}

export default SingleEndFrame;