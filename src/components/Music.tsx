import { staticFile, Audio, interpolate, useCurrentFrame } from "remotion";

const Music = () => {
    const frame = useCurrentFrame();

    const volume = interpolate(frame, [0, 70, 270], [0.05, 0.15, 1], {
        extrapolateRight: 'clamp',
        extrapolateLeft: 'clamp'
    })

    return <Audio volume={volume} startFrom={355} src={staticFile('/assets/music/139573952-lo-f-hip-hop-inspiring-backgro.wav')} />
}

export default Music; 