"use client";

import React, { useState } from "react";
import { cn } from "../ui/utils";

export interface SlidingLogoMarqueeItem {
  id: string;
  content: React.ReactNode;
  href?: string;
}

export interface SlidingLogoMarqueeProps {
  items: SlidingLogoMarqueeItem[];
  speed?: number;
  pauseOnHover?: boolean;
  enableBlur?: boolean;
  blurIntensity?: number;
  height?: string;
  width?: string;
  gap?: string;
  scale?: number;
  direction?: "horizontal" | "vertical";
  autoPlay?: boolean;
  backgroundColor?: string;
  showGridBackground?: boolean;
  className?: string;
  onItemClick?: (item: SlidingLogoMarqueeItem) => void;
  enableSpillEffect?: boolean;
  animationSteps?: number;
  showControls?: boolean;
}

export function SlidingLogoMarquee({
  items,
  speed = 60,
  pauseOnHover = true,
  enableBlur = true,
  blurIntensity = 1,
  height = "100px",
  width = "100%",
  gap = "0.5rem",
  scale = 1,
  direction = "horizontal",
  autoPlay = true,
  backgroundColor,
  showGridBackground = false,
  className,
  onItemClick,
  enableSpillEffect = false,
  animationSteps = 8,
  showControls = true,
}: SlidingLogoMarqueeProps) {
  const [isPlaying, setIsPlaying] = useState(autoPlay);

  const handleItemClick = (item: SlidingLogoMarqueeItem) => {
    if (item.href) {
      window.open(item.href, "_blank", "noopener,noreferrer");
    }
    onItemClick?.(item);
  };

  const blurDivs = Array.from({ length: animationSteps }, (_, index) => (
    <div key={index} style={{ "--index": index } as React.CSSProperties} />
  ));

  return (
    <>
      <style>
        {`
        .sliding-marquee-container {
          --speed: ${speed};
          --count: ${items.length};
          --scale: ${scale};
          --blur: ${blurIntensity};
          --blurs: ${animationSteps};
        }

        .sliding-marquee-resizable {
          overflow: clip;
          scale: var(--scale);
          width: 100%;
          height: ${height};
          min-height: 100px;
        }

        .sliding-marquee-resizable[data-spill="true"] .sliding-marquee-inner::after {
          content: "";
          position: fixed;
          top: 50%;
          left: 50%;
          width: calc(var(--scale) * 10000vw);
          height: calc(var(--scale) * 10000vh);
          pointer-events: none;
          translate: -50% -50%;
          mask: linear-gradient(white, white) 50% 50% / 100% 100% no-repeat,
              linear-gradient(white, white) 50% 50% / 100cqi 100cqh no-repeat;
          mask-composite: exclude;
        }

        .sliding-marquee-inner {
          height: 100%;
          width: 100%;
          position: relative;
          mask: linear-gradient(90deg, transparent, black 15% 85%, transparent);
          display: flex;
          align-items: center;
          min-height: 100px;
          pointer-events: none;
          overflow: hidden;
        }

        .sliding-marquee-blur {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 25%;
          z-index: 2;
          pointer-events: none;
        }

        .sliding-marquee-blur--right {
          right: 0;
        }

        .sliding-marquee-blur--left {
          left: 0;
          rotate: 180deg;
        }

        .sliding-marquee-blur div {
          position: absolute;
          inset: 0;
          z-index: var(--index);
          mask: linear-gradient(90deg,
              transparent calc(var(--index) * calc((100 / var(--blurs)) * 1%)),
              black calc((var(--index) + 1) * calc((100 / var(--blurs)) * 1%)),
              black calc((var(--index) + 2) * calc((100 / var(--blurs)) * 1%)),
              transparent calc((var(--index) + 3) * calc((100 / var(--blurs)) * 1%)));
          backdrop-filter: blur(calc((var(--index, 0) * var(--blur, 0)) * 1px));
        }

        .sliding-marquee-list {
          display: flex;
          gap: ${gap};
          padding: 0;
          margin: 0;
          list-style-type: none;
          height: 100%;
          width: max-content;
          flex-wrap: nowrap;
          align-items: center;
          pointer-events: auto;
          will-change: transform;
          white-space: nowrap;
          flex: 0 0 auto;
        }

        .sliding-marquee-track {
          display: flex;
          align-items: center;
          width: max-content;
          min-width: max-content;
          height: 100%;
          will-change: transform;
          animation: marquee-scroll calc(var(--speed) * 1s) linear infinite;
        }

        .sliding-marquee-item {
          height: 80%;
          aspect-ratio: 16 / 9;
          font-size: clamp(1rem, 3vw + 0.5rem, 4rem);
          display: grid;
          place-items: center;
          cursor: pointer;
          transition: transform 0.2s ease;
          pointer-events: auto;
          flex: 0 0 auto;
        }

        .sliding-marquee-item:hover {
          transform: scale(1.05);
        }

        .sliding-marquee-item svg {
          height: 65%;
        }

        @media (max-width: 767px) {
          .sliding-marquee-list {
            gap: 0.25rem !important;
          }

          .sliding-marquee-item {
            height: 60% !important;
            font-size: 0.875rem !important;
          }

          .sliding-marquee-item svg {
            height: 45% !important;
          }
        }

        [data-play-state="running"] .sliding-marquee-track,
        [data-play-state="running"] .sliding-marquee-list,
        [data-play-state="running"] .sliding-marquee-item {
          animation-play-state: running !important;
        }

        [data-play-state="paused"] .sliding-marquee-track,
        [data-play-state="paused"] .sliding-marquee-list,
        [data-play-state="paused"] .sliding-marquee-item {
          animation-play-state: paused !important;
        }

        @keyframes marquee-scroll {
          from {
            transform: translate3d(0, 0, 0);
          }

          to {
            transform: translate3d(calc(-50% - (${gap} / 2)), 0, 0);
          }
        }
        `}
      </style>

      <div
        className={cn("sliding-marquee-container relative", className)}
        style={{ width, background: backgroundColor }}
        onMouseEnter={() => pauseOnHover && setIsPlaying(false)}
        onMouseLeave={() => pauseOnHover && setIsPlaying(true)}
      >
        {showGridBackground && <div className="" />}

        <div
          className="sliding-marquee-resizable"
          data-translate="items"
          data-direction={direction}
          data-blurring={enableBlur}
          data-play-state={isPlaying ? "running" : "paused"}
          data-spill={enableSpillEffect}
        >
          <div className="sliding-marquee-inner">
            {enableBlur && (
              <div className="sliding-marquee-blur sliding-marquee-blur--left">
                {blurDivs}
              </div>
            )}

            <div className="sliding-marquee-track">
              {[0, 1].map((trackIndex) => (
                <ul
                  key={trackIndex}
                  className="sliding-marquee-list text-foreground"
                  aria-hidden={trackIndex === 1}
                >
                  {items.map((item, index) => (
                    <li
                      key={`${trackIndex}-${item.id}-${index}`}
                      className="sliding-marquee-item text-foreground"
                      style={{ "--index": index } as React.CSSProperties}
                      onClick={() => handleItemClick(item)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          handleItemClick(item);
                        }
                      }}
                    >
                      {item.content}
                    </li>
                  ))}
                </ul>
              ))}
            </div>

            {enableBlur && (
              <div className="sliding-marquee-blur sliding-marquee-blur--right">
                {blurDivs}
              </div>
            )}
          </div>
        </div>

        {/*showControls && (
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="absolute top-0 right-0 z-10 px-2 py-1 text-xs bg-white/10 text-foreground
            rounded hover:bg-background/20 transition-colors"
            aria-label={isPlaying ? "Pause animation" : "Play animation"}
          >
            {isPlaying ? "Pause" : "Play"}
          </button>
        )*/}
      </div>
    </>
  );
}

export default SlidingLogoMarquee;
