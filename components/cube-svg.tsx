import React from 'react';

interface CubeSvgProps {
  width?: number | string;
  height?: number | string;
  top?: number | string;
  left?: number | string;
  angle?: number;
  opacity?: number;
  className?: string;
  blur?: number;
  style?: React.CSSProperties;
}

/**
 * Renders a cube SVG background with customizable size, position, rotation, opacity, and blur.
 * Uses absolute positioning by default.
 */
const CubeSvg: React.FC<CubeSvgProps> = ({
  width = 820.6,
  height = 793,
  top = undefined,
  left = undefined,
  angle = -180,
  opacity = 0.74,
  blur = 0,
  className = '',
  style = {},
}) => {
  return (
    <img
      src="/cube.svg"
      alt="Cube background"
      style={{
        width: typeof width === 'number' ? `${width}px` : width,
        height: typeof height === 'number' ? `${height}px` : height,
        top: top !== undefined ? (typeof top === 'number' ? `${top}px` : top) : undefined,
        left: left !== undefined ? (typeof left === 'number' ? `${left}px` : left) : undefined,
        opacity,
        filter: blur ? `blur(${blur}px)` : undefined,
        transform: `rotate(${angle}deg)`,
        position: 'absolute',
        ...style,
      }}
      className={className}
      draggable={false}
    />
  );
};

export default CubeSvg; 