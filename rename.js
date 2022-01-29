const fs = require('fs');
var path = require('path');

const srcFolder = path.resolve(__dirname, './srcImage') + '/';
const outFolder = path.resolve(__dirname, './outImage') + '/';

fs.readdir(srcFolder, (err, files) => {
  files.forEach((file, i) => {
    let extension = path.extname(file);
    let notMin = file.replace('-min', '');
    fs.rename(srcFolder + file, outFolder + notMin, err => {
      if (err) throw err;
      console.log(`rename - ${file} completed!`);
    });
  });
});
