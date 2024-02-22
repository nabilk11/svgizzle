import { useState, ChangeEvent } from 'react';
import { Modal, Sidebar } from '@headlessui/react';
import sharp from 'sharp';
import fs from 'fs';

const ImageConverter: React.FC = () => {
  const [convertedSvg, setConvertedSvg] = useState<Buffer | null>(null);

  const convertImageToSvg = (imageData: File) => {
    sharp(imageData.path)
      .toBuffer()
      .then((data) => {
        setConvertedSvg(data);
      })
      .catch((err) => {
        console.error('An error occurred:', err);
      });
  };

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      convertImageToSvg(e.target.files[0]);
    }
  };

  return (
    <div className="flex">
      <Modal>
        {/* Modal Form for Image Upload */}
        <form>
          {/* Form Input for Image Upload */}
          <input type="file" accept="image/*" onChange={handleImageUpload} />
        </form>
      </Modal>

      <Sidebar>
        {/* Dummy Text Buttons in Sidebar */}
        <button>Button 1</button>
        <button>Button 2</button>
        <button>Button 3</button>
      </Sidebar>

      {/* Area to Display Converted SVG */}
      {convertedSvg && (
        <div>
          <svg>{convertedSvg.toString()}</svg>
        </div>
      )}
    </div>
  );
};

export default ImageConverter;
