export const getYoutubeIdFromUrl = (url) => {
  const match = url.match(/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/);

  return match && match[7].length === 11 ? match[7] : false;
};
