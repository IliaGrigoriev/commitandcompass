import { useEffect, useState, useRef } from 'react';

const CANVAS_WIDTH = 1000;
const CANVAS_HEIGHT = 600;
const POSITION_X = 500;
const POSITION_Y = 150;
const VIEWBOX_WIDTH = 600;
const VIEWBOX_HEIGHT = 300;
const NODE_RADIUS = 32;

export default function MyCompass() {
  return (
    <div style={{ position: 'absolute', left: POSITION_X, top: POSITION_Y, width: CANVAS_WIDTH, height: CANVAS_HEIGHT }}>
      <Compass />
    </div>
  );
}

const nodes = [
  { id: '1', x: 150, y: 200, label: 'Echoes' },
  { id: '2', x: 300, y: 200, label: 'Pathways' },
  { id: '3', x: 225, y: 100, label: 'Pulse' }
];

function getRandomFloat(min, max) {
  return Math.random() * (max - min) + min;
}

function getOuterPoint(center, angle, radius) {
  return {
    x: center.x + radius * Math.cos(angle),
    y: center.y + radius * Math.sin(angle),
  };
}

function getHullPath(points, radius) {
  const expanded = points.flatMap((p) => {
    const samples = 8;
    return [...Array(samples)].map((_, i) => {
      const angle = (2 * Math.PI * i) / samples;
      return getOuterPoint(p, angle, radius);
    });
  });

  if (expanded.length < 3) return '';
  const sorted = [...expanded].sort((a, b) => a.x - b.x || a.y - b.y);
  const cross = (o, a, b) => (a.x - o.x) * (b.y - o.y) - (a.y - o.y) * (b.x - o.x);

  const lower = [];
  for (let p of sorted) {
    while (lower.length >= 2 && cross(lower[lower.length - 2], lower[lower.length - 1], p) <= 0)
      lower.pop();
    lower.push(p);
  }

  const upper = [];
  for (let i = sorted.length - 1; i >= 0; i--) {
    const p = sorted[i];
    while (upper.length >= 2 && cross(upper[upper.length - 2], upper[upper.length - 1], p) <= 0)
      upper.pop();
    upper.push(p);
  }

  const hull = lower.concat(upper.slice(1, -1));
  return `M ${hull.map((p) => `${p.x},${p.y}`).join(' L ')} Z`;
}

function Compass() {
  const [positions, setPositions] = useState(() =>
    nodes.map((n) => ({
      ...n,
      offsetX: 0,
      offsetY: 0,
      ampX: getRandomFloat(6, 16),
      ampY: getRandomFloat(6, 16),
      dur: getRandomFloat(4, 8),
      delay: getRandomFloat(0, 2),
      time: Math.random() * 100,
    }))
  );

  const svgRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const rect = svgRef.current.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    let raf;
    const animate = () => {
      setPositions((prev) =>
        prev.map((n) => {
          const t = n.time + 0.016;
          const fx = Math.sin(t / n.dur + n.delay) * n.ampX;
          const fy = Math.cos(t / n.dur + n.delay) * n.ampY;

          const dx = mouseRef.current.x - (n.x + fx);
          const dy = mouseRef.current.y - (n.y + fy);
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxInfluence = 100;
          let influence = 0;

          if (dist < maxInfluence) {
            influence = (1 - dist / maxInfluence) * 0.25;
          }

          const targetX = fx + dx * influence;
          const targetY = fy + dy * influence;

          return {
            ...n,
            time: t,
            offsetX: n.offsetX + (targetX - n.offsetX) * 0.1,
            offsetY: n.offsetY + (targetY - n.offsetY) * 0.1,
          };
        })
      );
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, []);

  const nodeCenters = positions.map((n) => ({
    x: n.x + n.offsetX,
    y: n.y + n.offsetY,
  }));

  return (
    <svg ref={svgRef} width="100%" height="100%" viewBox={`0 0 ${VIEWBOX_WIDTH} ${VIEWBOX_HEIGHT}`}>
      <defs>
        <radialGradient id="volumetricNode" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#fff8cc" stopOpacity="1" />
          <stop offset="50%" stopColor="orange" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#ff9900" stopOpacity="0.2" />
        </radialGradient>

        <radialGradient id="volumetricSatellite" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffffcc" stopOpacity="1" />
          <stop offset="80%" stopColor="yellow" stopOpacity="0.4" />
          <stop offset="100%" stopColor="black" stopOpacity="0" />
        </radialGradient>

        <filter id="lampGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <filter id="ropeGlow" x="-100%" y="-100%" width="300%" height="300%">
          <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="2" result="turbulence" />
          <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="250" xChannelSelector="R" yChannelSelector="G" />
          <feGaussianBlur stdDeviation="2.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="blur" />
          </feMerge>
        </filter>

        <style>
          {`
            .lamp {
              animation: glowPulse 2.5s ease-in-out infinite;
            }
            .firefly-tail {
              animation: tailPulse 1.5s ease-in-out infinite;
            }  
            @keyframes glowPulse {
              0%, 100% { opacity: 0.8; }
              50% { opacity: 1; }
            }
            @keyframes tailPulse {
              0%, 100% { opacity: 0.4; }
              50% { opacity: 0.8; }
            }
          `}
        </style>
      </defs>

      <path
        d={getHullPath(nodeCenters, NODE_RADIUS)}
        fill="none"
        stroke="orange"
        strokeWidth="5"
        filter="url(#ropeGlow)"
        strokeLinejoin="round"
        opacity="0.4"
      />

      {positions.map((node) => {
        const x = node.x + node.offsetX;
        const y = node.y + node.offsetY;
        return (
          <g key={node.id}>
            <GalaxyNode x={x} y={y} nodeId={node.id} radius={NODE_RADIUS} />
            <text x={x} y={y + 45} textAnchor="middle" fontSize="12" fill="#ccc"  fontFamily="'Uncial Antiqua', cursive">
              {node.label}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

function GalaxyNode({ x, y, nodeId, radius }) {
  const [satellites, setSatellites] = useState(() =>
    Array.from({ length: 4 }).map(() => ({
      offsetX: 0,
      offsetY: 0,
      freqX: Math.random() * 0.0003 + 0.0001,
      freqY: Math.random() * 0.0003 + 0.0001,
      ampX: Math.random() * 22 + 8,
      ampY: Math.random() * 22 + 8,
      phaseX: Math.random() * Math.PI * 2,
      phaseY: Math.random() * Math.PI * 2,
    }))
  );

  useEffect(() => {
    let animId;
    const animate = () => {
      const time = Date.now();
      setSatellites((prev) =>
        prev.map((s) => ({
          ...s,
          offsetX: Math.sin(time * s.freqX + s.phaseX) * s.ampX,
          offsetY: Math.sin(time * s.freqY + s.phaseY) * s.ampY,
        }))
      );
      animId = requestAnimationFrame(animate);
    };
    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <g key={`galaxy-${nodeId}`}>
      {satellites.map((s, i) => (
        <g key={i}>
          {/*
          <circle
            cx={x + s.offsetX}
            cy={y + s.offsetY}
            r={2.5}
            fill="url(#volumetricSatellite)"
            opacity="0.9"
            filter="url(#lampGlow)"
          />
          */}

          <ellipse
            cx={x + s.offsetX}
            cy={y + s.offsetY}
            rx={1.7}
            ry={1}
            fill="brown"
            opacity="0.6"
          />
          <ellipse
            className="firefly-tail"
            cx={x + s.offsetX - 3}
            cy={y + s.offsetY}
            rx={2}
            ry={1.6}
            fill="yellow"
            opacity="0.6"
          />
        </g>
      ))}
      <circle
        cx={x}
        cy={y}
        r={radius / 2}
        fill="url(#volumetricNode)"
        filter="url(#lampGlow)"
        className="lamp"
      />
    </g>
  );
}
