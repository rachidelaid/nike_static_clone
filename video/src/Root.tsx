import type React from "react";
import { Composition } from "remotion";
import { WalkthroughComposition, fps, totalDurationInFrames } from "./WalkthroughComposition";

export const RemotionRoot: React.FC = () => {
  return (
    <Composition
      id="WalkthroughComposition"
      component={WalkthroughComposition}
      width={1920}
      height={1080}
      fps={fps}
      durationInFrames={totalDurationInFrames}
    />
  );
};
