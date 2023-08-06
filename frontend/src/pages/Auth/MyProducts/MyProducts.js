import React, { useState } from "react";
import axios from "axios";

const MyProducts = () => {
  const [selectedImages, setSelectedImages] = useState([]);
  const [uploadProgress, setUploadProgress] = useState({});
  const [buttonDisabled, setButtonDisabled] = useState(false);

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
    // document.getElementById("imagesInputSelect").value = null;
    // document.getElementById("imagesInputAdd").value = null;
    e.target.value = null;
    setSelectedImages([...newSelectedImages]);
  };

  const handleAddImages = (e) => {
    const files = e.target.files;
    const newSelectedImages = [];
    for (let i = 0; i < files.length; i++) {
      if (files[i].type.startsWith("image/")) {
        newSelectedImages.push(files[i]);
      } else {
        alert(`File ${files[i].name} is not a valid image. Skipping.`);
      }
    }
    // document.getElementById("imagesInputAdd").value = null;
    // document.getElementById("imagesInputSelect").value = null;
    e.target.value = null;
    setSelectedImages((prevSelectedImages) => [
      ...prevSelectedImages,
      ...newSelectedImages,
    ]);
  };

  const handleImageUpload = () => {
    if (selectedImages.length > 0) {
      setButtonDisabled(true);
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
            setButtonDisabled(true);
            alert(`Error uploading ${image.name}.\n` + error);
          });
      });
      // document.getElementById("imagesInputSelect").value = null;
      // document.getElementById("imagesInputAdd").value = null;
      setTimeout(() => {
        setSelectedImages([]);
        setUploadProgress({});
        setButtonDisabled(false);
      }, 1000);
    } else {
      alert("Please select at least one image before uploading.");
    }
  };
  return (
    <div>
      <input
        id="imagesInputSelect"
        type="file"
        accept="image/*"
        multiple
        onChange={handleImageChange}
        className="d-none"
      />
      <button
        className={`btn btn-primary ${buttonDisabled && "disabled"} mx-2 mb-4`}
        onClick={() => {
          document.getElementById("imagesInputSelect").click();
        }}
      >
        Choose Images
      </button>
      <input
        id="imagesInputAdd"
        type="file"
        accept="image/*"
        multiple
        onChange={handleAddImages}
        className="d-none"
      />
      <button
        className={`btn btn-primary ${buttonDisabled && "disabled"} mx-2 mb-4`}
        onClick={() => {
          document.getElementById("imagesInputAdd").click();
        }}
      >
        Add Images
      </button>
      <button
        className={`btn btn-primary ${buttonDisabled && "disabled"} mx-2 mb-4`}
        onClick={handleImageUpload}
      >
        Upload Images
      </button>
      <button
        className={`btn btn-primary ${buttonDisabled && "disabled"} mx-2 mb-4`}
        onClick={() => {
          setSelectedImages([]);
        }}
      >
        Clear Images
      </button>
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
