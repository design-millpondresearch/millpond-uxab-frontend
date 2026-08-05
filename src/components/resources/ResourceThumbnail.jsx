/**
 * ResourceThumbnail — consistent SVG thumbnails using the MPR brand palette.
 *
 * Each thumbnail uses the cream-and-blue editorial palette from the design
 * system, with a simple technical illustration derived from the article
 * category. The goal is to visually summarize the content rather than
 * signal "technology" or "AI" generically.
 */
const BRAND_COLORS = {
  bg: '#F5EFE7',    /* sand */
  fg: '#1F4E79',    /* primary blue */
  accent: '#C8D9E6', /* sky */
  subtle: '#FBFAF8', /* surface */
};

const CATEGORY_DIAGRAMS = {
  Blog: {
    icon: 'M4 4h16v16H4z',                             /* square bracket */
    iconX: 10, iconY: 10,
    label: 'Blog',
  },
  'White Paper': {
    icon: 'M4 4h12v4M4 10h12M4 16h8',                   /* document lines */
    iconX: 10, iconY: 11,
    label: 'Paper',
  },
  'Case Study': {
    icon: 'M8 4l8 8-8 8',                                /* diamond / study */
    iconX: 12, iconY: 10,
    label: 'Study',
  },
  News: {
    icon: 'M4 4l12 12M16 4L4 16',                         /* cross / news */
    iconX: 10, iconY: 10,
    label: 'News',
  },
  Press: {
    icon: 'M4 4h16v12H4zM4 10h16',                       /* quote box */
    iconX: 10, iconY: 10,
    label: 'Press',
  },
  Video: {
    icon: 'M6 4l12 8-12 8z',                               /* play triangle */
    iconX: 10, iconY: 10,
    label: 'Video',
  },
  Datasheet: {
    icon: 'M4 4h16v16H4zM10 4v16M4 10h16',              /* grid / table */
    iconX: 10, iconY: 10,
    label: 'Data',
  },
  Podcast: {
    icon: 'M6 6a10 10 0 0112 0M8 9a6 6 0 018 0',        /* sound waves */
    iconX: 10, iconY: 9,
    label: 'Audio',
  },
};

const DEFAULT_DIAGRAM = CATEGORY_DIAGRAMS.Blog;

function ResourceThumbnail({ title, category }) {
  const diagram = CATEGORY_DIAGRAMS[category] || DEFAULT_DIAGRAM;
  const initials = title
    .split(' ')
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase();

  return (
    <svg
      viewBox="0 0 400 260"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full block"
      role="img"
      aria-label={`${category} thumbnail for ${title}`}
    >
      {/* Background — brand sand */}
      <rect width="400" height="260" rx="16" fill={BRAND_COLORS.bg} />

      {/* Subtle accent circle top-left */}
      <circle cx="60" cy="60" r="120" fill={BRAND_COLORS.accent} opacity="0.15" />

      {/* Subtle accent circle bottom-right */}
      <circle cx="340" cy="200" r="80" fill={BRAND_COLORS.accent} opacity="0.1" />

      {/* Category icon — clean geometric shape */}
      <g
        transform={`translate(${diagram.iconX}, ${diagram.iconY})`}
        stroke={BRAND_COLORS.fg}
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.2"
      >
        <path d={diagram.icon} />
      </g>

      {/* Small category bar at top */}
      <rect x="0" y="0" width="400" height="4" fill={BRAND_COLORS.accent} opacity="0.3" />

      {/* Category label */}
      <text
        x="20" y="28"
        fontSize="11"
        fontFamily="system-ui, sans-serif"
        fontWeight="600"
        fill={BRAND_COLORS.fg}
        opacity="0.35"
      >
        {diagram.label}
      </text>

      {/* Large initials watermark — bottom right */}
      <text
        x="380"
        y="220"
        textAnchor="end"
        fontSize="72"
        fontFamily="system-ui, sans-serif"
        fontWeight="700"
        fill={BRAND_COLORS.fg}
        opacity="0.04"
      >
        {initials}
      </text>
    </svg>
  );
}

export default ResourceThumbnail;