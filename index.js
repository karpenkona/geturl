const request = require('request');
// 
const URL = 'https://www.google.com';

request(URL, function (error, response, body) {
  console.log('error:', error); 
  console.log('statusCode:', response && response.statusCode); 
  console.log('body:', body); 
});