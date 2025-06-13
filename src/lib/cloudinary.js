import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const uploadImage = async (base64DataUri, folderName) => {
  try {
    if (!base64DataUri || typeof base64DataUri !== "string") {
      throw new Error("Invalid data URI provided");
    }

    if (!base64DataUri.startsWith("data:image/")) {
      throw new Error("Invalid image data URI format");
    }

    const result = await cloudinary.uploader.upload(base64DataUri, {
      folder: folderName,
      resource_type: "auto",
    });

    return {
      url: result.secure_url,
      public_id: result.public_id,
      fileType: result.format,
    };
  } catch (error) {
    console.error("Error uploading to Cloudinary:", error);
    throw new Error(`Failed to upload image: ${error.message}`);
  }
};

// Alternative method if you need to use buffer
export const uploadImageWithBuffer = async (dataUri, folderName) => {
  try {
    const blob = await fetch(dataUri).then((res) => {
      if (!res.ok) {
        throw new Error(`Failed to fetch blob: ${res.statusText}`);
      }
      return res.blob();
    });

    if (!blob || blob.size === 0) {
      throw new Error("Invalid file or file size is zero");
    }

    const buffer = await blob.arrayBuffer();
    const uint8Array = new Uint8Array(buffer);

    const result = await new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload_stream(
          {
            folder: folderName,
            resource_type: "auto",
          },
          (error, result) => {
            if (error) {
              reject(error);
            } else {
              resolve(result);
            }
          }
        )
        .end(uint8Array);
    });

    return {
      url: result.secure_url,
      public_id: result.public_id,
      //   fileType: result.format,
    };
  } catch (error) {
    console.error("Error uploading to Cloudinary:", error);
    throw new Error(`Failed to upload image: ${error.message}`);
  }
};

// Method 3: Using FormData (for file uploads from forms)
export const uploadImageFromFile = async (file, folderName) => {
  try {
    if (!file || file.size === 0) {
      throw new Error("Invalid file or file size is zero");
    }

    const base64 = await new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });

    const result = await cloudinary.uploader.upload(base64, {
      folder: folderName,
      resource_type: "auto",
    });

    return {
      url: result.secure_url,
      public_id: result.public_id,
      //   fileType: result.format,
    };
  } catch (error) {
    console.error("Error uploading to Cloudinary:", error);
    throw new Error(`Failed to upload image: ${error.message}`);
  }
};

export const deleteImage = async (public_id) => {
  try {
    if (!public_id) {
      throw new Error("Public ID is required");
    }
    const result = await cloudinary.uploader.destroy(public_id);
    console.log("Delete result:", result);
    return result;
  } catch (error) {
    console.error("Error deleting from Cloudinary:", error);
    throw new Error("Failed to delete image");
  }
};
