const fs = require('fs');
const async = require('async');

module.exports = {
  getDelimiters : (req, res, next) => {
    const delim = req.params.delimiter;
    const cldr = __dirname + '/.././cldr/';
    const delimObj = {};
    fs.readdir(cldr, 'utf8', (err, files) => {
      async.eachSeries(files, (file, callback) => {
        if(fs.statSync(cldr+file+'/'+'delimiters.json')){
          fs.readFile(cldr+file+'/'+'delimiters.json', 'utf8', (err, data) => {
            if(err) {
              console.log('Unhappy: ', err);
            } else {
              const locale = file.toString();
              delimObj[locale] = JSON.parse(data).main[locale].delimiters[delim];
              callback();
            }
          })
        }      
      }, 
      (err) => {
        if(err){
          console.log('got and error: ', err);
        } else {
          console.log('Delimiters processed Successfully', delimObj);
          res.send(delimObj);
        }
      })
    })
  }
}

