import Resizer from "react-image-file-resizer";

export const resizeFile = async (file) =>
  new Promise((resolve) => {
    Resizer.imageFileResizer(
      file,
      300,
      300,
      "JPEG",
      100,
      0,
      (uri) => {
        let base64 = (uri + "").split(",")[1];
        resolve(base64);
      },
      "base64"
    );
  });
