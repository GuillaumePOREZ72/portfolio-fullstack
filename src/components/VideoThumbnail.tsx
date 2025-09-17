import React from "react";

interface VideoThumbnailProps {
  videoId: string;
  onClick?: () => void;
  alt?: string;
  className?: string;
  clickable?: boolean;
}

export default function VideoThumbnail({
  videoId,
  onClick,
  alt = "Miniature de la vidéo",
  className = "",
  clickable = true,
}: VideoThumbnailProps) {
  const src = `https://cdn.loom.com/sessions/thumbnails/${videoId}-with-play.jpg`;

  const Wrapper: React.ElementType = clickable ? "button" : "div";
  const wrapperProps = clickable
    ? {
        type: "button" as const,
        onClick,
        "aria-label": "OUvrir la vidéo de présentation",
      }
    : {};

  return (
    <Wrapper
      {...wrapperProps}
      className={`group realtive aspect-video w-48 overflow-hideen rounded-lg ring-1 ring-base-300 ${
        clickable
          ? "hover:ring-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary cursor-pointer"
          : ""
      } transition${className}`}
    >
      <img
        src={src}
        alt={alt}
        className="h-full w-full object-cover"
        loading="lazy"
        onError={(e) => {
          (e.currentTarget as HTMLImageElement).style.display = "none";
        }}
      />
      <div className="absolute inset-0 flex items-center justify-center bg-base-300/30 group-hover:bg-base-300/10">
        <span className="btn btn-circle btn-primary btn-sm shadow">▶</span>
      </div>
    </Wrapper>
  );
}
