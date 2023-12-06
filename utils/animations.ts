import { spring, interpolate, Easing } from "remotion";

export const upAndFade = (fps: number, frame: number, delay: number = 0) => {
  const opacity = spring({
    fps,
    frame: frame - delay,
    config: { damping: 20 },
    durationInFrames: 40
  })

  const translateY = spring({
    fps,
    frame: frame - delay,
    from: 200,
    to: 0,
    config: { damping: 20 },
    durationInFrames: 40
  })

  return {
    opacity, transform: `translateY(${translateY}px)`
  }
}

export const fadeAndRotate = (fps: number, frame: number, delay: number = 0, rotateTo?: 'left' | 'right') => {
  const opacity = spring({
    fps,
    frame: frame - delay,
    config: { damping: 20 },
    durationInFrames: 40
  })

  const rotate = spring({
    fps,
    frame: frame - delay,
    from: 0,
    to: rotateTo === 'right' ? 35 : -35,
    config: { damping: 20 },
    durationInFrames: 40
  })

  return {
    opacity, transform: `rotate(${rotate}deg)`
  }
}

export const downAndFade = (fps: number, frame: number, delay: number = 0) => {
  const opacity = spring({
    fps,
    frame: frame - delay,
    config: { damping: 20 },
    durationInFrames: 40
  })

  const translateY = spring({
    fps,
    frame: frame - delay,
    from: -200,
    to: 0,
    config: { damping: 20 },
    durationInFrames: 40
  })

  return {
    opacity, transform: `translateY(${translateY}px)`
  }
}

export const wave = (frame: number, startFrame: number, frequency: number = 10) => {
  const inputRange = [0];
  const outputRange = [0, 0];

  for (let i = 0; i < 7; i++) {
    if (inputRange.length === 1) {
      inputRange.push(startFrame);
    } else {
      let lastInput = inputRange[inputRange.length - 1];
      let lastOutput = outputRange[outputRange.length - 1];

      inputRange.push(lastInput + frequency)
      outputRange.push(lastOutput === 0 ? 15 : 0);
    }
  }

  const rotate = interpolate(
    frame,
    inputRange,
    outputRange,
    {
      extrapolateRight: 'clamp',
    }
  )

  return {
    transform: `rotate(${rotate}deg)`, width: 'fit-content', transformOrigin: 'bottom right'
  }
}

export const slideX = (frame: number, videoWidth: number, duration: number = 20, slideInFrom: 'right' | 'left' = 'right', delay?: number) => {
  const translate = interpolate(
    frame,
    [delay ?? 0, (delay) ? delay + duration : duration],
    [videoWidth, 0],
    {
      extrapolateRight: 'clamp',
      easing: Easing.bezier(0.33, 1, 0.68, 1),
    }
  )

  return {
    transform: `translateX(${slideInFrom === 'right' ? '-' : ''}${translate}px)`
  }
}

export const slideY = (frame: number, videoHeight: number, duration: number = 20, slideInFrom: 'top' | 'bottom' = 'top', delay?: number) => {
  const translate = interpolate(
    frame,
    [delay ?? 0, (delay) ? delay + duration : duration],
    [videoHeight, 0],
    {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
      easing: Easing.bezier(0.33, 1, 0.68, 1),
    }
  )

  return {
    transform: `translateY(${slideInFrom === 'top' ? '-' : ''}${translate}px)`
  }
}

export const fadeInAndOut = (frame: number, transitionDuration: number, durationInFrames: number, reverse: boolean = false) => {
  const opacity = interpolate(
    frame,
    [0, transitionDuration, (durationInFrames - transitionDuration), durationInFrames],
    (reverse) ? [1, 0, 0, 1] : [0, 1, 1, 0]
  )

  return {
    opacity
  }
}

export const slowRotate = (fps: number, frame: number, options: { from: number, to: number, duration: number, reverse: boolean }) => {


  const rotate = spring({
    fps,
    frame,
    from: options.from,
    to: options.to,
    config: { damping: 20 },
    durationInFrames: options.duration
  })

  return {
    transform: `rotate(${!options.reverse ? '-' : ''}${rotate}deg)`, width: 'fit-content',
  }
}

export const circleScale = (fps: number, frame: number, options: { from: number, to: number, duration: number, reverse: boolean, delay?: number }) => {
  const scale = spring({
    fps,
    frame: (options.delay) ? frame - options.delay : frame,
    from: !options.reverse ? options.from : options.to,
    to: !options.reverse ? options.to : options.from,
    config: { damping: 20 },
    durationInFrames: options.duration
  })

  return {
    clipPath: `circle(${scale}%)`
  }
}