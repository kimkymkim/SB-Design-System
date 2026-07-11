type AvatarProps = {
  /** Artwork image; when absent the neutral avatar placeholder shows */
  src?: string;
  alt?: string;
  width?: number;
  height?: number;
  className?: string;
};

/**
 * Artwork slot. Shows the uploaded image when present; otherwise a
 * neutral avatar placeholder — artwork is never mocked in.
 */
export function Avatar({ src, alt = "", width = 175, height = 179, className = "" }: AvatarProps) {
  if (src) {
    return (
      <img
        src={src}
        alt={alt}
        className={`rounded-photo object-cover shadow-photo ${className}`}
        style={{ width, height }}
      />
    );
  }
  return (
    <div
      className={`flex items-center justify-center rounded-photo bg-grey-100 shadow-photo ${className}`}
      style={{ width, height }}
      role="img"
      aria-label="No artwork yet"
    >
      <svg
        width={Math.min(width, height) * 0.36}
        height={Math.min(width, height) * 0.36}
        viewBox="0 0 24 24"
        fill="var(--color-grey-400)"
        aria-hidden="true"
      >
        <circle cx="12" cy="8" r="4" />
        <path d="M4 20c0-3.3 3.6-5.5 8-5.5s8 2.2 8 5.5v1H4v-1Z" />
      </svg>
    </div>
  );
}
