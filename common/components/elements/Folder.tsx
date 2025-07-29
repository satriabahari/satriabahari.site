"use client";

import React, { useMemo, useState } from "react";

interface FolderProps {
  color?: string;
  size?: number;
  items?: React.ReactNode[];
  className?: string;
}

const darkenColor = (hex: string, percent: number): string => {
  let color = hex.startsWith("#") ? hex.slice(1) : hex;
  if (color.length === 3) {
    color = color.split("").map((c) => c + c).join("");
  }
  const num = parseInt(color, 16);
  let r = (num >> 16) & 0xff;
  let g = (num >> 8) & 0xff;
  let b = num & 0xff;
  r = Math.max(0, Math.min(255, Math.floor(r * (1 - percent))));
  g = Math.max(0, Math.min(255, Math.floor(g * (1 - percent))));
  b = Math.max(0, Math.min(255, Math.floor(b * (1 - percent))));
  return (
    "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()
  );
};

const Folder: React.FC<FolderProps> = ({
  color = "#5227FF",
  size = 1,
  items = [],
  className = "",
}) => {
  const [open, setOpen] = useState(true);
  const maxItems = 3;

  const papers = [...items.slice(0, maxItems)];
  while (papers.length < maxItems) {
    papers.push(null);
  }

  const folderBackColor = useMemo(() => darkenColor(color, 0.08), [color]);
  const paper1 = useMemo(() => darkenColor("#0037ff", 0.1), []);
  const paper2 = useMemo(() => darkenColor("#ffffff", 0.05), []);
  const paper3 = "#ffffff";

  const scaleStyle = { transform: `scale(${size})` };

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const paperTransforms = [
    "translate(-120%, -70%) rotate(-15deg)",
    "translate(10%, -70%) rotate(15deg)",
    "translate(-50%, -100%) rotate(5deg)",
  ];

  const paperColors = [paper1, paper2, paper3];
  const paperSizes = ["w-[70%] h-[80%]", "w-[80%] h-[70%]", "w-[90%] h-[60%]"];

  return (
    <div style={scaleStyle} className={className}>
      <div
        className={`group relative cursor-pointer transition-all duration-200 ease-in ${
          !open ? "hover:-translate-y-2" : ""
        }`}
        style={{
          transform: open ? "translateY(-8px)" : undefined,
        }}
        onClick={handleClick}
      >
        <div
          className="relative h-[80px] w-[100px] rounded-bl-[10px] rounded-br-[10px] rounded-tr-[10px]"
          style={{ backgroundColor: folderBackColor }}
        >
          <span
            className="absolute bottom-[98%] left-0 z-0 h-[10px] w-[30px] rounded-tl-[5px] rounded-tr-[5px]"
            style={{ backgroundColor: folderBackColor }}
          ></span>

          {/* Papers */}
          {papers.map((item, i) => (
            <div
              key={i}
              className={`absolute bottom-[10%] left-1/2 z-20 transition-transform duration-300 ease-in-out 
                ${!open ? "-translate-x-1/2 translate-y-[10%] group-hover:translate-y-0" : ""}
                ${open ? "hover:scale-105" : ""}
                ${paperSizes[i]}`}
              style={{
                transform: open ? paperTransforms[i] : undefined,
                backgroundColor: paperColors[i],
                borderRadius: "10px",
              }}
            >
              {item}
            </div>
          ))}

          {/* Folder covers */}
          <div
            className={`absolute z-30 h-full w-full origin-bottom transition-transform duration-300 ease-in-out ${
              !open ? "group-hover:[transform:skew(15deg)_scaleY(0.6)]" : ""
            }`}
            style={{
              backgroundColor: color,
              borderRadius: "5px 10px 10px 10px",
              ...(open && { transform: "skew(15deg) scaleY(0.6)" }),
            }}
          ></div>
          <div
            className={`absolute z-30 h-full w-full origin-bottom transition-transform duration-300 ease-in-out ${
              !open ? "group-hover:[transform:skew(-15deg)_scaleY(0.6)]" : ""
            }`}
            style={{
              backgroundColor: color,
              borderRadius: "5px 10px 10px 10px",
              ...(open && { transform: "skew(-15deg) scaleY(0.6)" }),
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Folder;
