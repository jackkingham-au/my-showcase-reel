import { AbsoluteFill, staticFile, Video } from "remotion";
import Fade from "../../transitions/Fade";
// import Music from "../../components/Music";
import IntroSlide from "./IntroSlide";

const Outro = () => {

    return (
        <AbsoluteFill className="z-20">
            <Video src={staticFile('/assets/videos/intro-video.mp4')} startFrom={150} endAt={330} />
            <IntroSlide />
            <Fade />
        </AbsoluteFill>
    )
}

export default Outro;