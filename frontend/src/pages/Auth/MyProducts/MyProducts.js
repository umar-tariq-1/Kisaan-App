import React, { useState } from "react";
import axios from "axios";
import LoadingBar from "../../../components/LoadingBar/LoadingBar";
import { useSnackbar } from "notistack";

const MyProducts = () => {
  const [selectedImages, setSelectedImages] = useState([]);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  const handleImageChange = (e) => {
    const files = e.target.files;
    const newSelectedImages = [];
    for (let i = 0; i < files.length; i++) {
      if (files[i].type.startsWith("image/")) {
        if (
          !newSelectedImages.find((file) => {
            return file.name === files[i].name;
          })
        ) {
          newSelectedImages.push(files[i]);
        }
      } else {
        alert(`File ${files[i].name} is not a valid image. Skipping.`);
      }
    }
    e.target.value = null;
    setSelectedImages([...newSelectedImages]);
  };

  const handleAddImages = (e) => {
    const files = e.target.files;
    const newSelectedImages = [];
    for (let i = 0; i < files.length; i++) {
      if (files[i].type.startsWith("image/")) {
        if (
          !selectedImages.find((file) => {
            return file.name === files[i].name;
          })
        ) {
          newSelectedImages.push(files[i]);
          console.log(newSelectedImages);
        }
      } else {
        alert(`File ${files[i].name} is not a valid image. Skipping.`);
      }
    }
    e.target.value = null;
    setSelectedImages((prevSelectedImages) => [
      ...prevSelectedImages,
      ...newSelectedImages,
    ]);
  };

  const handleImageUploadOptimized = async () => {
    if (selectedImages.length > 0 && selectedImages.length < 5) {
      setButtonDisabled(true);
      var formData = new FormData();
      selectedImages.forEach((image) => {
        formData.append("image", image);
      });
      const config = {
        onUploadProgress: (progressEvent) => {
          const progress = (progressEvent.loaded / progressEvent.total) * 100;
          setUploadProgress(progress.toFixed(0));
        },
        withCredentials: true,
      };

      // Perform the image upload using Axios
      try {
        await axios.post("http://localhost:3001/addProduct", formData, config);
        enqueueSnackbar("Images uploaded successfully", {
          variant: "success",
        });
      } catch (error) {
        setButtonDisabled(true);
        enqueueSnackbar(
          error?.response?.data?.message ||
            "Server not working. Try again later",
          { variant: "error" }
        );
      }

      setTimeout(() => {
        setSelectedImages([]);
        setUploadProgress(0);
        setButtonDisabled(false);
      }, 700);
    } else if (!(selectedImages.length > 0)) {
      enqueueSnackbar("Select atleast 1 image before uploading", {
        variant: "error",
      });
    } else if (selectedImages.length > 4) {
      enqueueSnackbar("Select atmost 4 images before uploading", {
        variant: "error",
      });
    }
  };

  return (
    <>
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
        onClick={handleImageUploadOptimized}
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
        {selectedImages.map((image, index) => (
          <p key={Date.now().toString() + index.toString()}>{image.name}</p>
        ))}
      </div>
      {buttonDisabled && (
        <LoadingBar value={Number(uploadProgress)} width="80%" />
      )}
    </>
  );
};

export default MyProducts;
