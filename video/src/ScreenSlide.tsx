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
  slideDurationInFrames: number;
};

const colors = {
  primaryInk: "#111111",
  softSurface: "#FCF9F2",
  actionVolt: "#D7FF38",
  carbonText: "#1C1C18",
  graphiteText: "#444748",
  precisionOutline: "#747878",
  softDivider: "#C4C7C7",
  deepNight: "#141C24",
};

export const ScreenSlide: React.FC<ScreenSlideProps> = ({
  screen,
  index,
  total,
  slideDurationInFrames,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({
    frame,
    fps,
    config: { damping: 16, stiffness: 70 },
  });
  const zoom =
    1.015 +
    interpolate(frame, [0, slideDurationInFrames], [0, 0.035], {
      extrapolateRight: "clamp",
    });
  const cardY = interpolate(entrance, [0, 1], [28, 0], {
    extrapolateRight: "clamp",
  });
  const overlayOpacity = interpolate(
    frame,
    [0, 15, slideDurationInFrames - 20, slideDurationInFrames - 1],
    [0, 1, 1, 0],
  );
  const progress = interpolate(frame, [0, slideDurationInFrames - 1], [0, 100], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        background: `radial-gradient(circle at 15% 20%, ${colors.deepNight} 0%, ${colors.primaryInk} 72%)`,
      }}
    >
      <AbsoluteFill
        style={{
          justifyContent: "center",
          alignItems: "center",
          padding: "72px 96px 96px",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            borderRadius: 28,
            overflow: "hidden",
            boxShadow: "0 40px 120px rgba(0,0,0,0.55)",
            transform: `translateY(${cardY}px)`,
            backgroundColor: colors.softSurface,
          }}
        >
          <img
            src={staticFile(screen.imagePath)}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transform: `scale(${zoom})`,
            }}
          />
        </div>
      </AbsoluteFill>

      <AbsoluteFill
        style={{
          justifyContent: "space-between",
          pointerEvents: "none",
          opacity: overlayOpacity,
        }}
      >
        <div style={{ padding: "44px 64px 0 64px" }}>
          <div
            style={{
              width: 940,
              padding: "24px 28px 28px",
              borderRadius: 18,
              background: "rgba(252, 249, 242, 0.96)",
              border: `1px solid ${colors.softDivider}`,
              boxShadow: "0 24px 80px rgba(0,0,0,0.28)",
            }}
          >
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 12,
                padding: "10px 16px",
                borderRadius: 999,
                background: colors.actionVolt,
                color: colors.primaryInk,
                fontSize: 18,
                fontWeight: 800,
                letterSpacing: 4,
                textTransform: "uppercase",
              }}
            >
              {screen.accent}
            </div>
            <div
              style={{
                fontSize: 52,
                fontWeight: 800,
                lineHeight: 1.05,
                maxWidth: 1120,
                marginTop: 18,
                color: colors.carbonText,
              }}
            >
              {screen.title}
            </div>
            <div
              style={{
                fontSize: 24,
                lineHeight: 1.4,
                maxWidth: 840,
                marginTop: 14,
                color: colors.graphiteText,
              }}
            >
              {screen.description}
            </div>
          </div>
        </div>
        <div style={{ padding: "0 64px 44px 64px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 20,
              fontSize: 24,
              padding: "18px 22px",
              borderRadius: 999,
              background: colors.primaryInk,
              border: `1px solid ${colors.precisionOutline}`,
              boxShadow: "0 18px 50px rgba(0,0,0,0.35)",
            }}
          >
            <div style={{ color: colors.actionVolt, fontWeight: 800 }}>
              {String(index + 1).padStart(2, "0")}
            </div>
            <div
              style={{
                flex: 1,
                height: 4,
                borderRadius: 999,
                background: colors.precisionOutline,
              }}
            >
              <div
                style={{
                  width: `${progress}%`,
                  height: "100%",
                  borderRadius: 999,
                  background: colors.actionVolt,
                }}
              />
            </div>
            <div style={{ color: colors.softSurface }}>{String(total).padStart(2, "0")}</div>
          </div>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
