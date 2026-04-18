'use client';

interface ScoreGaugeProps {
  score: number;
  max: number;
  label: string;
  color: string;
  size?: 'sm' | 'lg';
}

function getScoreColor(pct: number, color: string) {
  if (color === 'primary') {
    if (pct >= 80) return '#044d78';
    if (pct >= 60) return '#2e7ab5';
    if (pct >= 40) return '#f59e0b';
    return '#ef4444';
  }
  if (color === 'ai') {
    if (pct >= 80) return '#00a381';
    if (pct >= 60) return '#00c49a';
    if (pct >= 40) return '#f59e0b';
    return '#ef4444';
  }
  return '#044d78';
}

export default function ScoreGauge({ score, max, label, color, size = 'lg' }: ScoreGaugeProps) {
  const pct = Math.round((score / max) * 100);
  const isLarge = size === 'lg';
  const radius = isLarge ? 56 : 36;
  const strokeWidth = isLarge ? 8 : 6;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (pct / 100) * circumference;
  const svgSize = (radius + strokeWidth) * 2;
  const hex = getScoreColor(pct, color);

  const grade =
    pct >= 80 ? 'S' : pct >= 70 ? 'A' : pct >= 60 ? 'B' : pct >= 40 ? 'C' : 'D';
  const gradeColor =
    pct >= 80
      ? 'text-emerald-600'
      : pct >= 70
      ? 'text-blue-600'
      : pct >= 60
      ? 'text-yellow-600'
      : 'text-red-500';

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative" style={{ width: svgSize, height: svgSize }}>
        <svg width={svgSize} height={svgSize} className="-rotate-90" style={{ filter: 'drop-shadow(0 2px 8px rgba(4, 77, 120, 0.12))' }}>
          <circle
            cx={svgSize / 2}
            cy={svgSize / 2}
            r={radius}
            fill="none"
            stroke="#e5e7eb"
            strokeWidth={strokeWidth}
          />
          <circle
            cx={svgSize / 2}
            cy={svgSize / 2}
            r={radius}
            fill="none"
            stroke={hex}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            style={{ transition: 'stroke-dashoffset 0.8s ease' }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span
            className={`font-bold leading-none ${isLarge ? 'text-3xl' : 'text-xl'}`}
            style={{ color: hex }}
          >
            {score}
          </span>
          <span className={`text-gray-400 leading-none ${isLarge ? 'text-sm' : 'text-xs'}`}>
            / {max}
          </span>
        </div>
      </div>
      <div className="text-center">
        <div className={`font-medium text-gray-700 ${isLarge ? 'text-base' : 'text-sm'}`}>
          {label}
        </div>
        <div className={`font-bold ${gradeColor} ${isLarge ? 'text-2xl' : 'text-base'}`}>
          グレード {grade}
        </div>
      </div>
    </div>
  );
}
