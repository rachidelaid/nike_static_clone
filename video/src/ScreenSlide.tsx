import type React from "react";
import {
  AbsoluteFill,
  interpolate,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import type { ScreenData } from "./screens";

type ScreenSlideProps = {
  screen: ScreenData;
  index: number;
  total: number;
};

export const ScreenSlide: React.FC<ScreenSlideProps> = ({ screen, index, total }) => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  const zoom = 1 + spring({ frame, fps, config: { damping: 200 } }) * 0.03;
  const overlayOpacity = interpolate(
    frame,
    [0, 15, durationInFrames - 20, durationInFrames - 1],
    [0, 1, 1, 0],
  );

  return (
    <AbsoluteFill
      style={{ background: "radial-gradient(circle at 15% 20%, #1f2230 0%, #090a0f 70%)" }}
    >
      <AbsoluteFill
        style={{
          justifyContent: "center",
          alignItems: "center",
          padding: 64,
        }}
      >
        <img
          src={staticFile(screen.imagePath)}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            borderRadius: 24,
            boxShadow: "0 40px 120px rgba(0,0,0,0.55)",
            transform: `scale(${zoom})`,
          }}
        />
      </AbsoluteFill>

      <AbsoluteFill
        style={{
          justifyContent: "space-between",
          pointerEvents: "none",
          opacity: overlayOpacity,
        }}
      >
        <div style={{ padding: "48px 56px 0 56px", color: "#f7f7f8" }}>
          <div style={{ fontSize: 52, fontWeight: 700, lineHeight: 1.1, maxWidth: 1200 }}>
            {screen.title}
          </div>
          <div
            style={{
              fontSize: 24,
              lineHeight: 1.4,
              maxWidth: 1200,
              marginTop: 14,
              color: "#d3d7e2",
            }}
          >
            {screen.description}
          </div>
        </div>
        <div style={{ padding: "0 56px 42px 56px", color: "#cfd3df", fontSize: 24 }}>
          Screen {index + 1}/{total}
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
