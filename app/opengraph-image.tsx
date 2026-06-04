import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "yugyo inc. — Be where you are meant to be.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Walking the Wild: paper-cream 背景 + ink-navy の wordmark / Vision。
// JP フォントを埋め込まずに済むよう EN のみで構成（lining numerals, declarative）。
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#E8DFCC",
          padding: "80px",
          color: "#0E1B2C",
        }}
      >
        <div
          style={{
            fontSize: 44,
            fontWeight: 800,
            letterSpacing: "-0.025em",
          }}
        >
          yugyo inc.
        </div>
        <div
          style={{
            fontSize: 84,
            fontWeight: 800,
            letterSpacing: "-0.025em",
            lineHeight: 1.1,
            maxWidth: "900px",
          }}
        >
          Be where you are meant to be.
        </div>
      </div>
    ),
    { ...size }
  );
}
