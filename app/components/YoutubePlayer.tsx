import React, { useEffect, useRef } from "react";

function YouTubePlayer({
  videoId,
  setIsPlaying,
}: {
  videoId: string;
  isPlaying: boolean;
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
} & React.ComponentPropsWithoutRef<"div">) {
  const playerRef = useRef<any>(null);

  // Load the YouTube IFrame API script
  useEffect(() => {
    const existingScript = document.getElementById("youtube-iframe-api");
    if (!existingScript) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      tag.id = "youtube-iframe-api";
      document.body.appendChild(tag);
    }

    // Attach the global function expected by the API
    (window as any).onYouTubeIframeAPIReady = () => {
      playerRef.current = new (window as any).YT.Player("player", {
        height: "100%",
        width: "100%",
        // videoId: "hECAbASrGLs",
        videoId,
        events: {
          onStateChange: (event: any) => {
            const YT = (window as any).YT;
            if (event.data === YT.PlayerState.PLAYING) {
              setIsPlaying(true);
            } else if (
              event.data === YT.PlayerState.PAUSED ||
              event.data === YT.PlayerState.ENDED
            ) {
              setIsPlaying(false);
            }
          },
        },
      });
    };

    // Clean up
    return () => {
      if (playerRef.current && playerRef.current.destroy) {
        playerRef.current.destroy();
      }
    };
  }, []);

  return (
    <div>
      <div
        className="aspect-video w-[20rem] bg-slate-950/80 sm:w-[25rem] md:w-[35rem]"
        id="player"
      ></div>
    </div>
  );
}

export default YouTubePlayer;
