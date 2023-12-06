import { Sequence, useCurrentFrame, useVideoConfig } from "remotion";
import { slideY } from "../../../utils/animations";
import SlideLeft from "../../transitions/SlideLeft";
import Text from "../../components/Text";
import SlideRight from "../../transitions/SlideRight";

const MixTransition = () => {
    const { height } = useVideoConfig()
    const frame = useCurrentFrame()

    return (
        <>
            <div className="w-1/4 bg-red-500" style={slideY(frame, height, 60, 'top')}></div>
            <div className="w-1/4 bg-cyan-500" style={slideY(frame, height, 60, 'bottom')}></div>
            <div className="w-1/4 bg-purple-500" style={slideY(frame, height, 60, 'top')}></div>
            <div className="w-1/4 bg-green-500" style={slideY(frame, height, 60, 'bottom')}></div>
        </>
    )
}

const ListingLines = () => {

    return (
        <>
            <Sequence from={0} durationInFrames={120}>
                <SlideLeft className="bg-blue-500">
                    <Text>A Saas for real estate...</Text>
                </SlideLeft>
            </Sequence>
            <Sequence from={60} durationInFrames={150} className="z-[60]">
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

export default ListingLines;