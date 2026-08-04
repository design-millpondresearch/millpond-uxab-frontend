/**
 * ResourceThumbnail — standardized SVG thumbnails for resource cards.
 *
 * Generates a consistent visual placeholder based on the resource's category
 * and title. No external images needed — every thumbnail is inline SVG.
 */

const CATEGORY_COLORS = {
  Blog:        { bg: "#DBEAFE", fg: "#1E40AF" },
  "White Paper": { bg: "#D1FAE5", fg: "#065F46" },
  "Case Study": { bg: "#FEE2E2", fg: "#991B1B" },
  News:        { bg: "#E2E8F0", fg: "#334155" },
  Press:       { bg: "#FEF3C7", fg: "#92400E" },
  Video:       { bg: "#EDE9FE", fg: "#5B21B6" },
  Datasheet:   { bg: "#E0E7FF", fg: "#3730A3" },
  Podcast:     { bg: "#FCE7F3", fg: "#9D174D" },
};

const DEFAULT_COLOR = { bg: "#F3F4F6", fg: "#4B5563" };

const PATTERNS = {
  Blog:        "M0 0l20 20M20 0l-20 20",
  "White Paper": "M10 0v20M0 10h20",
  "Case Study": "M0 0h20M0 20h20",
  News:        "M0 0l10 10 10-10M0 20l10-10 10 10",
  Press:       "M0 10a10 10 0 1010-10",
  Video:       "M5 5l10 5-10 5z",
  Datasheet:   "M3 3h14v14H3zM3 10h14M10 3v14",
  Podcast:     "M10 3a7 7 0 010 14M7 7a4 4 0 010 6",
};

function ResourceThumbnail({ title, category }) {
  const colors = CATEGORY_COLORS[category] || DEFAULT_COLOR;
  const pattern = PATTERNS[category] || PATTERNS.Blog;
  const initials = title
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

  return (
    <svg
      viewBox="0 0 400 260"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full block"
      role="img"
      aria-label={`${category} thumbnail for ${title}`}
    >
      {/* Background */}
      <rect width="400" height="260" rx="8" fill={colors.bg} />

      {/* Subtle pattern overlay */}
      <g opacity="0.1" stroke={colors.fg} strokeWidth="1" fill="none">
        {Array.from({ length: 10 }, (_, i) =>
          Array.from({ length: 10 }, (_, j) => (
            <path key={`${i}-${j}`}
              d={pattern}
              transform={`translate(${i * 40}, ${j * 30}) scale(1.2)`}
            />
          ))
        )}
      </g>

      {/* Category badge */}
      <rect x="16" y="16" rx="4" fill={colors.fg} opacity="0.15" />
      <text
        x="24" y="30"
        fontSize="11"
        fontFamily="system-ui, sans-serif"
        fontWeight="600"
        fill={colors.fg}
      >
        {category}
      </text>

      {/* Large initials watermark */}
      <text
        x="360"
        y="200"
        textAnchor="end"
        fontSize="80"
        fontFamily="system-ui, sans-serif"
        fontWeight="800"
        fill={colors.fg}
        opacity="0.06"
      >
        {initials}
      </text>

      {/* Bottom bar */}
      <rect y="210" width="400" height="50" fill={colors.fg} opacity="0.04" />
    </svg>
  );
}

export default ResourceThumbnail;