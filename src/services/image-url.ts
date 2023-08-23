const getCroppedImageUrl = (url: string) => {
  if (!url) return ""; // not all games have images; handle those cases
  const target = "media/";
  // the images coming in are big, and we don't want to download them just
  // to display a thumbnail
  // the API provides a parameter to rop
  // we want to crop the images using the api crop parameter
  // find where we start the media parameter so we can add crop
  const index = url.indexOf(target) + "media/".length;
  // we want to insert the crop parameter in the request URI
  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
};

export default getCroppedImageUrl;
