import sharp from "sharp";
import fs from "fs";
import { error } from "console";

const inputImagePath = "input.jpg";
const outputSvgPath = "output.svg";

sharp(inputImagePath)
  .toBuffer()
  .then((data) => {
    fs.writeFileSync(outputSvgPath, `<svg>${data}</svg>`);
    console.log("Image converted to SVG successfully!");
  })
  .catch((err) => {
    console.error("An error occurred:", err);
    throw new error(err);
  });

  
// Run the script
// node svgWithSharp.js

// 3. Convert SVG to PNG using sharp
  
// Path: svgToPng.js
// import sharp from "sharp";
// import fs from "fs";
// import { error } from "console";

const inputSvgPath = "input.svg";
const outputPngPath = "output.png";

sharp(inputSvgPath)
  .toFile(outputPngPath)
  .then(() => {
    console.log("SVG converted to PNG successfully!");
  })
  .catch((err) => {
    console.error("An error occurred:", err);
    throw new error(err);
  }
);

// Run the script
// node svgToPng.js

// 4. Convert SVG to JPEG using sharp

// Path: svgToJpeg.js
// import sharp from "sharp";
// import fs from "fs";
// import { error } from "console";

const inputSvgPath2 = "input.svg";
const outputJpegPath = "output.jpeg";

sharp(inputSvgPath2)
  .toFile(outputJpegPath)
  .then(() => {
    console.log("SVG converted to JPEG successfully!");
  })
  .catch((err) => {
    console.error("An error occurred:", err);
    throw new error(err);
  });

// Run the script
// node svgToJpeg.js





