import React, { useState } from "react";
import Button from 'react-bootstrap/Button';

const Upload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadTime, setUploadTime] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (selectedFile) {
      try {

        const formData = new FormData();
        formData.append("file", selectedFile);

        const currentTime = new Date().toLocaleString();

        setUploadTime(currentTime);

        const response = await fetch("/upload", {
          method: "POST",
          body: formData,
        });

        if (response.ok) {
          console.log("File uploaded successfully!");
        } else {
          console.error("File upload failed.");
        }
      } catch (error) {
        console.error("An error occurred during file upload:", error);
      }

      setSelectedFile(null);
    } else {
      alert("Please select a file to upload.");
    }
  };

  return (
    <div className="bg-gray-100 p-4">
      <h4 className="text-2xl font-bold mb-4">Upload File</h4>
      <input
        type="file"
        accept=".pdf,.jpg,.png,.jpeg"
        onChange={handleFileChange}
        className="mb-4"
      />
      <Button
        onClick={handleUpload}
       variant="dark"
      >
        Upload
      </Button>

      {uploadTime && (
        <p className="mt-4">File uploaded at: {uploadTime}</p>
      )}
    </div>
  );
};

export default Upload;
