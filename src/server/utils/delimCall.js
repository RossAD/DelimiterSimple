const locale = require('./localeCall.js');
const cldr = require('cldr');
const async = require('async');

module.exports = {
  getDelimiters : function (req, res, next) {
    const delim = req.params.delimiter;
    const localeArr = cldr.localeIds;
    async.map(localeArr, (loc) => {
      console.log('Locations: ', loc);
      locale.getDelAsync(loc)
      .then((dels) => {
        return res.send(dels.body);
      })
      .catch((e => {
        console.log("Error Happened: ", e);
        return res.sendStatus(400);
      }))
    })
  }
}
