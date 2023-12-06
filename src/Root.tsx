import { Composition } from 'remotion';
import remotionMetricProps from '../utils/settings';
import './style.css';
import Video from './Video';

export const RemotionRoot = () => {
  return (
    <>
        <Composition
            id="Video"
            component={Video}
            durationInFrames={1380}
            {...remotionMetricProps}
        />
    </>
  );
};
