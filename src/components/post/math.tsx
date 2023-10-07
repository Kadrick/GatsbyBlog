import React from "react";
import "katex/dist/katex.min.css";
import { InlineMath, BlockMath } from "react-katex";
import { Text } from "@chakra-ui/react";

export type MathProps = {
  type?: "inline" | "block";
  expression?: string;
};

const Math: React.FC<MathProps> = ({ type, expression }) => {
  if (!expression) {
    return <Text>{" Math is not working "}</Text>;
  }

  if (type === "inline") return <InlineMath math={expression}></InlineMath>;
  else return <BlockMath math={expression}></BlockMath>;
};

export default Math;
