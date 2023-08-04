/* import React from "react";

const MyProducts = () => {
  return (
    <div className="d-flex justify-content-center align-items-center h1">
      My Products
    </div>
  );
};

export default MyProducts; */

import React, { useState } from "react";
import axios from "axios";

const MyProducts = () => {
  /* const [selectedImages, setSelectedImages] = useState([]);
  const [uploadProgress, setUploadProgress] = useState([]);

  const handleImageChange = (e) => {
    const files = e.target.files;
    const newSelectedImages = [];
    for (let i = 0; i < files.length; i++) {
      if (files[i].type.startsWith("image/")) {
        newSelectedImages.push(files[i]);
      } else {
        alert(`File ${files[i].name} is not a valid image. Skipping.`);
      }
    }
    setSelectedImages((prevSelectedImages) => [
      ...prevSelectedImages,
      ...newSelectedImages,
    ]);
  };

  const handleImageUpload = () => {
    if (selectedImages.length > 0) {
      selectedImages.forEach((image, index) => {
        const formData = new FormData();
        formData.append(`image`, image);

        const config = {
          onUploadProgress: (progressEvent) => {
            const progress = Math.round(
              (progressEvent.loaded * 100) / progressEvent.total
            );
            setUploadProgress((prevProgress) => ({
              ...prevProgress,
              [image.name]: progress,
            }));
          },
        };

        // Perform the image upload using Fetch API
        // Replace 'your-upload-url' with your server endpoint
        fetch("http://localhost:3001/addProduct", {
          method: "POST",
          body: formData,
          ...config,
        })
          .then((response) => response.json())
          .then((data) => {
            console.log("Image uploaded:", data);
          })
          .catch((error) => {
            console.error("Error uploading image:", error);
          });
      });
    } else {
      alert("Please select at least one image before uploading.");
    }
  }; */

  const [selectedImages, setSelectedImages] = useState([]);
  const [uploadProgress, setUploadProgress] = useState({});

  const handleImageChange = (e) => {
    const files = e.target.files;
    const newSelectedImages = [];
    for (let i = 0; i < files.length; i++) {
      if (files[i].type.startsWith("image/")) {
        newSelectedImages.push(files[i]);
      } else {
        alert(`File ${files[i].name} is not a valid image. Skipping.`);
      }
    }
    setSelectedImages((prevSelectedImages) => [
      ...prevSelectedImages,
      ...newSelectedImages,
    ]);
  };

  const handleImageUpload = () => {
    if (selectedImages.length > 0) {
      selectedImages.forEach((image) => {
        const formData = new FormData();
        formData.append("image", image);

        const config = {
          onUploadProgress: (progressEvent) => {
            const progress = (progressEvent.loaded / progressEvent.total) * 100;
            setUploadProgress((prevUploadProgress) => ({
              ...prevUploadProgress,
              [image.name]: progress.toFixed(2),
            }));
          },
        };

        // Perform the image upload using Axios
        axios
          .post("http://localhost:3001/addProduct", formData, config)
          .then((response) => {
            console.log(`Image ${image.name} uploaded successfully.`);
          })
          .catch((error) => {
            console.error(`Error uploading ${image.name}.`);
          });
      });
    } else {
      alert("Please select at least one image before uploading.");
    }
  };
  return (
    <div>
      <input
        type="file"
        accept="image/*"
        multiple
        onChange={handleImageChange}
      />
      <button onClick={handleImageUpload}>Upload Images</button>
      <div>
        {selectedImages.map((image) => (
          <p key={image.name}>
            {image.name} - {uploadProgress[image.name] || 0}%
          </p>
        ))}
      </div>
    </div>
  );
};

export default MyProducts;
