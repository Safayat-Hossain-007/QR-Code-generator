import qr from "qr-image";
import fs from "fs";
import inquirer from 'inquirer';

inquirer
  .prompt([
   {
    message :"Enter your URL: ",
    name :"URL",
   }
  ])
  .then((answers) => {
    const url = answers.URL;
    var qr_svg = qr.image(url, { type: 'png' });
    qr_svg.pipe(fs.createWriteStream('qr_image.png'));
    fs.writeFile('qr_image.txt', url, function (err) {
      if (err) throw err;
      console.log('Saved!');
    });
 

  })



  .catch((error) => {
    if (error.isTtyError) {
      
    } else {
      
    }
  });