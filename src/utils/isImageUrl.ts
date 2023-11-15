export const isImageUrl = (url: string | undefined) => {
  if (!url) {
    return false;
  }
  const dotIndex = url.lastIndexOf('.') + 1;
  const extension = (url.slice(dotIndex) || '').toLowerCase();
  const imageExtensions = ['jpg', 'png', 'webp', 'jpeg'];

  return imageExtensions.includes(extension);
};
