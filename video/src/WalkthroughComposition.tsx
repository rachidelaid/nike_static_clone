import { Fragment, type FC } from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { TransitionSeries } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { springTiming } from "@remotion/transitions";
import { ScreenSlide } from "./ScreenSlide";
import { screens } from "./screens";

export const fps = 30;
const introDurationSeconds = 2;
const outroDurationSeconds = 2;
const colors = {
  primaryInk: "#111111",
  softSurface: "#FCF9F2",
  actionVolt: "#D7FF38",
  technicalGrey: "#B6BEC8",
  deepNight: "#141C24",
};

export const totalDurationInFrames =
  screens.reduce((acc, screen) => acc + screen.durationSeconds * fps, 0) +
  introDurationSeconds * fps +
  outroDurationSeconds * fps;

const IntroCard: FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const rise = interpolate(frame, [0, 30], [22, 0], {
    extrapolateRight: "clamp",
  });
  const logoScale = 0.9 + spring({ frame, fps, config: { damping: 14 } }) * 0.1;

  return (
    <AbsoluteFill
      style={{
        background: `linear-gradient(135deg, ${colors.primaryInk} 0%, ${colors.deepNight} 60%, #000000 100%)`,
      }}
    >
      <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
        <div
          style={{
            width: 220,
            height: 220,
            borderRadius: 999,
            border: `3px solid ${colors.actionVolt}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transform: `scale(${logoScale})`,
            boxShadow: "0 0 70px rgba(215,255,56,0.22)",
          }}
        >
          <div
            style={{
              fontSize: 42,
              color: colors.softSurface,
              fontWeight: 800,
              letterSpacing: 3,
            }}
          >
            AF
          </div>
        </div>
        <div
          style={{
            fontSize: 76,
            fontWeight: 800,
            color: colors.softSurface,
            marginTop: 34,
            transform: `translateY(${rise}px)`,
          }}
        >
          Premium Clothing Walkthrough
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

const OutroCard: FC = () => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 18], [0, 1], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        background: `radial-gradient(circle at 50% 40%, ${colors.deepNight} 0%, ${colors.primaryInk} 75%)`,
      }}
    >
      <AbsoluteFill
        style={{
          justifyContent: "center",
          alignItems: "center",
          color: colors.softSurface,
          opacity,
        }}
      >
        <div style={{ fontSize: 82, fontWeight: 800, letterSpacing: 1 }}>Thanks for watching</div>
        <div style={{ fontSize: 30, marginTop: 18, color: colors.technicalGrey }}>
          APEX FORM collection preview
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

export const WalkthroughComposition: FC = () => {
  return (
    <AbsoluteFill>
      <TransitionSeries>
        <TransitionSeries.Sequence durationInFrames={introDurationSeconds * fps}>
          <IntroCard />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition
          presentation={fade()}
          timing={springTiming({ config: { damping: 200 } })}
        />

        {screens.map((screen, index) => {
          const frames = screen.durationSeconds * fps;
          const isLast = index === screens.length - 1;

          return (
            <Fragment key={screen.id}>
              <TransitionSeries.Sequence durationInFrames={frames}>
                <ScreenSlide
                  screen={screen}
                  index={index}
                  total={screens.length}
                  slideDurationInFrames={frames}
                />
              </TransitionSeries.Sequence>
              {!isLast ? (
                <TransitionSeries.Transition
                  presentation={fade()}
                  timing={springTiming({ config: { damping: 200 } })}
                />
              ) : null}
            </Fragment>
          );
        })}

        <TransitionSeries.Transition
          presentation={fade()}
          timing={springTiming({ config: { damping: 200 } })}
        />
        <TransitionSeries.Sequence durationInFrames={outroDurationSeconds * fps}>
          <OutroCard />
        </TransitionSeries.Sequence>
      </TransitionSeries>
    </AbsoluteFill>
  );
};
