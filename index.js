const request = require('request');
const option = {
    method: 'get',
    uri: 'https://www.google.com',
};

request(option, function (error, response, body) {
  console.log('error:', error); 
  console.log('statusCode:', response && response.statusCode); 
  console.log('body:', body); 
});