export const validateImage = (name) => {
  return (
    name.endsWith(".jpg") ||
    name.endsWith(".jpeg") ||
    name.endsWith(".png") ||
    name.endsWith(".JPG") ||
    name.endsWith(".JPEG") ||
    name.endsWith(".PNG") ||
    name.endsWith(".JFIF") ||
    name.endsWith(".jfif") ||
    name.endsWith(".webp") ||
    name.endsWith(".WEBP")
  );
};
