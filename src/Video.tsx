import { Sequence } from "remotion";
import Music from "./components/Music";
import Battlefiew from "./comps/battlefiew";
import Bimcodes from "./comps/bimcodes";
import SingleEndFrame from "./comps/ending/SingleEndFrame";
import Intro from "./comps/intro";
import ListingLines from "./comps/listinglines";
import MyTherapyMentor from "./comps/mytherapymentor";
import Transicons from "./comps/transicons";
import CircleScale from "./transitions/CircleScale";
import Fade from "./transitions/Fade";
import SlideLeft from "./transitions/SlideLeft";
import SlideRight from "./transitions/SlideRight";
import SlideUp from "./transitions/SlideUp";

const Video = () => {

  return (
    <>
      <Sequence durationInFrames={240}>
        <Fade />
        <Intro.FrameOne />
      </Sequence>
      <Sequence from={140} durationInFrames={100}>
        <Intro.FrameTwo />
      </Sequence>
      <Sequence from={240} durationInFrames={120}>
        <Fade />
        <ListingLines.FrameOne />
      </Sequence>
      <Sequence from={360} durationInFrames={120}>
        <Fade />
        <MyTherapyMentor.FrameOne />
      </Sequence>
      <Sequence from={480} durationInFrames={120} className="bg-[#00002E]">
        <Fade />
        <Battlefiew.FrameOne />
      </Sequence>
      <Sequence from={570} durationInFrames={150}>
        <SlideUp className="bg-[#1A83C2]">
          <Bimcodes.FrameOne />
        </SlideUp>
      </Sequence>
      <Sequence from={690} durationInFrames={150}>
        <SlideUp className="bg-[#2979FF] !flex-row">
          <Transicons.FrameOne />
        </SlideUp>
      </Sequence>
      <Sequence from={810} durationInFrames={180}>
        <SlideLeft>
          <MyTherapyMentor.FrameTwo />
        </SlideLeft>
      </Sequence>
      <Sequence from={960} durationInFrames={150}>
        <CircleScale className="bg-[#023E8A]" transitionDuration={60}>
          <ListingLines.FrameFour />
        </CircleScale>
      </Sequence>
      <Sequence from={1080} durationInFrames={120}>
        <SlideRight className="bg-[#1E293B]">
          <ListingLines.FrameFive />
        </SlideRight>
      </Sequence>
      <Sequence from={1200} durationInFrames={180}>
        <SingleEndFrame />
        <Fade />
      </Sequence>
      <Sequence from={170}>
        <Music />
      </Sequence>
    </>
  )
}

export default Video;