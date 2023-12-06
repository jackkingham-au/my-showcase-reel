import { Img, Sequence, staticFile } from "remotion";
import Fade from "../../transitions/Fade";

const Ending = () => {
  let from = 0;
  const slides = [
    19, 20, 21, 22, 23, 24, 26
  ]
  
  const durations = {
    23: 120,
    24: 70,
    25: 300,
    26: 300
  }

  return (
    <>
      {
        slides.map((slideNumber, index) => {
          const defaultDuration = 60
          const prevSlideNumber = slides[(index - 1)];
          const prevDuration = durations[prevSlideNumber as keyof typeof durations] ? durations[prevSlideNumber as keyof typeof durations] : defaultDuration
          const duration = durations[slideNumber as keyof typeof durations] ? durations[slideNumber as keyof typeof durations] : defaultDuration

          from += (index === 0) ? 0 : prevDuration;

          console.log(from, duration)

          return (
            <Sequence key={index} from={from} durationInFrames={duration}>
              <Img src={staticFile(`/assets/slides/Frame ${slideNumber}.svg`)} />
              <Fade />
            </Sequence>
          )
        })
      }
    </>
  )
}

export default Ending;