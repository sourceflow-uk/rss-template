import { useMemo } from "react";
import { getYoutubeIdFromUrl } from "@/functions/getYoutubeIdFromUrl";

export const useYoutubeCoverImageFallback = (video_embed_url, img = null) => {
  return useMemo(() => {
    if (img) {
      return img;
    }

    return video_embed_url
      ? `https://i3.ytimg.com/vi_webp/${getYoutubeIdFromUrl(video_embed_url)}/sddefault.webp`
      : null;
  }, [img, video_embed_url]);
};
