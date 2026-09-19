import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.name} · ${site.star} · The Birthday Issue`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

async function loadPlayfair() {
  const response = await fetch(
    "https://cdn.jsdelivr.net/fontsource/fonts/playfair-display@5.2.6/latin-500-normal.ttf",
  );

  if (!response.ok) {
    return undefined;
  }

  return response.arrayBuffer();
}

export default async function Image() {
  const playfair = await loadPlayfair();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f6f1ea",
          color: "#111111",
          padding: "56px 72px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 18,
            letterSpacing: "0.38em",
            textTransform: "uppercase",
            color: "#c41e3a",
          }}
        >
          <span>Vol. 01</span>
          <span>October 2026</span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            flexGrow: 1,
          }}
        >
          <div
            style={{
              fontSize: 220,
              lineHeight: 0.75,
              letterSpacing: "-0.06em",
              fontFamily: playfair ? "Playfair" : "serif",
            }}
          >
            ARU
          </div>
          <div
            style={{
              marginTop: 28,
              fontSize: 22,
              letterSpacing: "0.46em",
              textTransform: "uppercase",
            }}
          >
            The Aru Edition
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            fontSize: 24,
            letterSpacing: "0.08em",
          }}
        >
          <span>{site.star}</span>
          <span style={{ color: "#c41e3a" }}>The Birthday Issue</span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: playfair
        ? [
            {
              name: "Playfair",
              data: playfair,
              style: "normal",
              weight: 500,
            },
          ]
        : [],
    },
  );
}
