import React, { useState } from "react";





const ImageToSvgConverter: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedFile(event.target.files ? event.target.files[0] : null);
  };

  const convertToSvg = () => {
    // Add your image to SVG conversion logic here
    console.log("Converting image to SVG...");
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Image to SVG Converter</h1>
      <input type="file" onChange={handleFileChange} className="mb-4" />
      <button
        onClick={convertToSvg}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Convert to SVG
      </button>
    </div>
  );
};

export default ImageToSvgConverter;
