export default function getCroppedImg(imageSrc, crop, width, height) {
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");

  return new Promise((resolve, reject) => {
    const image = new Image();

    // Allow cross-origin images (needed for blobs/data URLs)
    image.crossOrigin = "anonymous";

    // If imageSrc is a File or Blob, convert to Data URL
    if (imageSrc instanceof File || imageSrc instanceof Blob) {
      const reader = new FileReader();
      reader.onload = () => {
        image.src = reader.result;
      };
      reader.onerror = reject;
      reader.readAsDataURL(imageSrc);
    } else {
      image.src = imageSrc; // string URL or data URL
    }

    image.onload = () => {
      const scaleX = image.naturalWidth / image.width;
      const scaleY = image.naturalHeight / image.height;

      ctx.drawImage(
        image,
        crop.x * scaleX,
        crop.y * scaleY,
        crop.width * scaleX,
        crop.height * scaleY,
        0,
        0,
        width,
        height
      );

      canvas.toBlob((blob) => {
        if (!blob) return reject(new Error("Canvas is empty"));
        resolve(blob);
      }, "image/png");
    };

    image.onerror = (err) => {
      reject(new Error("Failed to load image"));
    };
  });
}
