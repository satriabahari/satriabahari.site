"use client";

import React from "react";

interface FolderProps {
  color?: string;
  size?: number;
  items?: React.ReactNode[];
  className?: string;
}

const darkenColor = (hex: string, percent: number): string => {
  let color = hex.startsWith("#") ? hex.slice(1) : hex;
  if (color.length === 3) {
    color = color
      .split("")
      .map((c) => c + c)
      .join("");
  }
  const num = parseInt(color, 16);
  let r = (num >> 16) & 0xff;
  let g = (num >> 8) & 0xff;
  let b = num & 0xff;
  r = Math.floor(r * (1 - percent));
  g = Math.floor(g * (1 - percent));
  b = Math.floor(b * (1 - percent));
  return (
    "#" +
    ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()
  );
};

const Folder: React.FC<FolderProps> = ({
  color = "#FACC15",
  size = 1,
  items = [],
  className = "",
}) => {
  const maxItems = 3;
  const papers = items.slice(0, maxItems);
  while (papers.length < maxItems) {
    papers.push(null);
  }

  const folderBackColor = darkenColor(color, 0.08);
  const paper1 = darkenColor("#fff", 0.1);
  const paper2 = darkenColor("#fff", 0.05);
  const paper3 = "#fff";

  const folderStyle: React.CSSProperties = {
    "--folder-color": color,
    "--folder-back-color": folderBackColor,
    "--paper-1": paper1,
    "--paper-2": paper2,
    "--paper-3": paper3,
  } as React.CSSProperties;

  const scaleStyle = { transform: `scale(${size})` };

  const paperTransforms = [
    "translate(-120%, -70%) rotate(-15deg)",
    "translate(10%, -70%) rotate(15deg)",
    "translate(-50%, -100%) rotate(5deg)",
  ];

  return (
    <div style={scaleStyle} className={className}>
      <div
        className="relative transition-all duration-200 ease-in"
        style={folderStyle}
      >
        <div
          className="rounded-tl-0 relative h-[80px] w-[100px] rounded-bl-[10px] rounded-br-[10px] rounded-tr-[10px]"
          style={{ backgroundColor: folderBackColor }}
        >
          <span
            className="absolute bottom-[98%] left-0 z-0 h-[10px] w-[30px] rounded-tl-[5px] rounded-tr-[5px]"
            style={{ backgroundColor: folderBackColor }}
          ></span>

          {papers.map((item, i) => {
            const sizeClasses = "w-[85%] h-[75%]";

            return (
              <div
                key={i}
                className={`absolute bottom-[10%] left-1/2 z-20 ${sizeClasses}`}
                style={{
                  transform: paperTransforms[i],
                  backgroundColor: [paper1, paper2, paper3][i],
                  borderRadius: "10px",
                }}
              >
                {item}
              </div>
            );
          })}

          {/* Folder front layers */}
          <div
            className="absolute z-30 h-full w-full origin-bottom"
            style={{
              backgroundColor: color,
              borderRadius: "5px 10px 10px 10px",
              transform: "skew(15deg) scaleY(0.6)",
            }}
          ></div>
          <div
            className="absolute z-30 h-full w-full origin-bottom"
            style={{
              backgroundColor: color,
              borderRadius: "5px 10px 10px 10px",
              transform: "skew(-15deg) scaleY(0.6)",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Folder;
