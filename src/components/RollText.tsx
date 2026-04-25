"use client";

import React from "react";

interface RollTextProps {
  text: string;
  className?: string;
}

export default function RollText({ text, className = "" }: RollTextProps) {
  return (
    <span className={`btn-roll ${className}`}>
      <span className="btn-roll-inner">{text}</span>
      <span className="btn-roll-hover" aria-hidden="true">
        {text}
      </span>
    </span>
  );
}
