const http = require('https');
const request = require('request');
const promise = require('bluebird');
const cldr = require('cldr');

module.exports = promise.promisifyAll({
  /*
   *getDelimiters(req, res, next) {
   *  console.log('inside getDelimiters');
   *  const localeList = cldr.localeIds;
   *  const url =
   *    'https://raw.githubusercontent.com/unicode-cldr/cldr-misc-full/master/main/';
   *  const locale = localeList[600];
   *  const delimiter = req.params.delimiter;
   *  console.log("Your locale is: ", locale);
   */
  getDel: function(locale, callback) {
    const base = 'https://raw.githubusercontent.com/unicode-cldr/cldr-misc-full/master/main/';
    const url = base + locale + '/delimiters.json';
  
    request.get(url, (error, response, body) => {
      /*
       *if(error){
       *  console.log('Request Failed: ', error);
       *}
       *const obj = JSON.parse(body);
       *
       *console.log('Got response: ', res.statusCode);
       */
      /*
       *console.log('Returned Object: '+ locale +' = '+
       *            obj.main[locale].delimiters[delimiter]);
       */
      callback(error, response); 
    })
  }
    /*
     *.on('error', (e) => {
     *  console.log('Got an Error: ', e.message);
     *});
     */
  //}
});

