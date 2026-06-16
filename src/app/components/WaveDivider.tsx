interface WaveDividerProps {
  topColor: string;
  bottomColor: string;
  flip?: boolean;
}

export function WaveDivider({ topColor, bottomColor, flip = false }: WaveDividerProps) {
  return (
    <div className="relative w-full overflow-hidden" style={{ marginTop: '-1px', marginBottom: '-1px' }}>
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className={`w-full h-16 md:h-24 ${flip ? 'rotate-180' : ''}`}
        style={{ display: 'block' }}
      >
        <path
          d="M0,0 C150,80 350,80 600,50 C850,20 1050,20 1200,50 L1200,120 L0,120 Z"
          fill={topColor}
        />
      </svg>
      <div style={{ backgroundColor: bottomColor, height: '1px' }} />
    </div>
  );
}
