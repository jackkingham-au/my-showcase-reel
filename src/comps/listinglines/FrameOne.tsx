import { Img, useCurrentFrame, staticFile, interpolate } from "remotion";

const FrameOne = () => {
  const frame = useCurrentFrame();
  const scale = interpolate(frame, [0, 30, 60, 120], [3, 3.5, 1.5, 1], {
    extrapolateRight: 'clamp'
  })

  return (
    <Img src={staticFile("/assets/sites/listinglines/Frame-1.svg")} style={{transform: `scale(${scale})`}} />
  )
}

export default FrameOne