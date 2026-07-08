import React, { useEffect, useId, useRef, useState } from "react";
import { Box } from "@chakra-ui/react";
import awsIconsPack from "../../data/aws-icons-mermaid.json";

type MermaidProps = {
  children?: React.ReactNode;
  chart?: string;
};

let mermaidInitialized = false;

const toChartText = (value: React.ReactNode): string => {
  if (typeof value === "string") return value;
  if (typeof value === "number") return String(value);
  if (Array.isArray(value)) return value.map(toChartText).join("");
  if (React.isValidElement(value)) return toChartText(value.props.children);
  return "";
};

const Mermaid: React.FC<MermaidProps> = ({ children, chart }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const chartId = useId().replace(/:/g, "");
  const chartText = (chart ?? toChartText(children)).trim();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || !chartText || typeof window === "undefined") return;

    let cancelled = false;

    const render = async () => {
      const mermaid = (await import("mermaid")).default;

      if (!mermaidInitialized) {
        mermaid.registerIconPacks([
          {
            name: "aws",
            icons: awsIconsPack,
          },
        ]);
        mermaid.initialize({
          startOnLoad: false,
          theme: "base",
          securityLevel: "loose",
          fontFamily: "Pretendard-Regular, Inter, sans-serif",
          themeVariables: {
            archEdgeColor: "#232F3E",
            archEdgeArrowColor: "#232F3E",
            archGroupBorderColor: "#7D8998",
            fontSize: "13px",
          },
          flowchart: {
            rankSpacing: 28,
            nodeSpacing: 20,
            padding: 12,
          },
          architecture: {
            iconSize: 48,
            idealEdgeLengthMultiplier: 1.8,
          },
        });
        mermaidInitialized = true;
      }

      if (cancelled || !containerRef.current) return;

      const { svg } = await mermaid.render(`mermaid-${chartId}`, chartText);
      if (!cancelled && containerRef.current) {
        containerRef.current.innerHTML = svg;
      }
    };

    render().catch((error) => {
      if (!cancelled && containerRef.current) {
        const message =
          error instanceof Error ? error.message : "알 수 없는 오류";
        containerRef.current.textContent =
          `Mermaid 차트를 렌더링하지 못했습니다. (${message})`;
        console.error("Mermaid render error:", error);
      }
    });

    return () => {
      cancelled = true;
    };
  }, [mounted, chartText, chartId]);

  return (
    <Box
      p={3}
      borderRadius={"md"}
      borderWidth={"1px"}
      borderColor={"gray.200"}
      bg={"white"}
      maxW={"100%"}
      overflowX={"auto"}
      ref={containerRef}
      sx={{
        "& svg": {
          display: "block",
          width: "100%",
          height: "auto",
        },
      }}
    />
  );
};

export default Mermaid;
