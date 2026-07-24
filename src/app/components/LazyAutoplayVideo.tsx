import { useEffect, useRef } from 'react';

interface LazyAutoplayVideoProps {
  src: string;
  className?: string;
}

export function LazyAutoplayVideo({ src, className }: LazyAutoplayVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={videoRef}
      src={src}
      controls
      muted
      loop
      playsInline
      preload="none"
      className={className}
    />
  );
}
