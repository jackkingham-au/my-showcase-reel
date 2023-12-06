import { Sequence, useCurrentFrame, useVideoConfig } from "remotion";
import { slideX } from "../../../utils/animations";
import Text from "../../components/Text";
import SlideLeft from "../../transitions/SlideLeft";
import SlideRight from "../../transitions/SlideRight";

const MixTransition = () => {
    const { width } = useVideoConfig()
    const frame = useCurrentFrame()

    return (
        <>
            <div className="h-1/2 w-full bg-red-500" style={slideX(frame, width, 60, 'right')}></div>
            <div className="h-1/2 w-full bg-cyan-500" style={slideX(frame, width, 60, 'left')}></div>
        </>
    )
}

const BIMCodes = () => {

    return (
        <>
            <Sequence from={0} durationInFrames={120}>
                <SlideLeft className="bg-blue-500">
                    <Text>A Saas for real estate...</Text>
                </SlideLeft>
            </Sequence>
            <Sequence from={60} durationInFrames={160} className="z-[60] flex-col">
                <MixTransition />
            </Sequence>
            <Sequence from={180} className="z-[70]">
                <SlideRight className="bg-blue-500">
                    <Text>End</Text>
                </SlideRight>
            </Sequence>
        </>
    )
}

export default BIMCodes;