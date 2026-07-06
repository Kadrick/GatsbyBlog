import React, { useEffect, useId, useRef, useState } from "react";
import { Box } from "@chakra-ui/react";

type MermaidProps = {
  children?: React.ReactNode;
  chart?: string;
};

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
      mermaid.initialize({
        startOnLoad: false,
        theme: "base",
        securityLevel: "loose",
        fontFamily: "Pretendard-Regular, Inter, sans-serif",
      });

      if (cancelled || !containerRef.current) return;

      const { svg } = await mermaid.render(`mermaid-${chartId}`, chartText);
      containerRef.current.innerHTML = svg;
    };

    render().catch((error) => {
      if (!cancelled && containerRef.current) {
        containerRef.current.textContent =
          "Mermaid 차트를 렌더링하지 못했습니다.";
        console.error(error);
      }
    });

    return () => {
      cancelled = true;
    };
  }, [mounted, chartText, chartId]);

  return (
    <Box
      my={6}
      p={4}
      borderRadius={"md"}
      borderWidth={"1px"}
      borderColor={"gray.200"}
      bg={"white"}
      overflowX={"auto"}
      ref={containerRef}
    />
  );
};

export default Mermaid;
