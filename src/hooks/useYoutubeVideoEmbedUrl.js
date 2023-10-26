import { getYoutubeIdFromUrl } from "@/functions/getYoutubeIdFromUrl";

export const useYoutubeVideoEmbedUrl = (video_embed_url) => {
  if (!video_embed_url) {
    return null;
  }

  const video_id = getYoutubeIdFromUrl(video_embed_url);
  let [_, params] = video_embed_url.split("?");
  params = new URLSearchParams(params);
  params.set("controls", "1");
  params.set("color", "white");
  params.set("rel", "0");

  return `https://www.youtube-nocookie.com/embed/${video_id}?${params.toString()}`;
};
