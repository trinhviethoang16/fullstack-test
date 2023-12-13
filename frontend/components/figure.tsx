import React from "react";
import { getValidArray } from "../utils/isArray";

interface FigureProps {
  figures: string[];
  color: string;
}

const Figure = (props: FigureProps) => {
  const { figures, color } = props;
  return (
    <div className="figure-background">
      {getValidArray(figures).map((row, index) => (
        <div className="figure" style={{ color: color }} key={index}>
          {row}
        </div>
      ))}
    </div>
  );
}
export default Figure;
