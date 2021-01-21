
const axios = require('axios');
const moesif = require('moesif-nodejs');

const moesifMiddleware = moesif({
  applicationId: 'Your Moesif Application Id',
  logBody: true,
});

moesifMiddleware.startCaptureOutgoing();

axios.get('https://jsonplaceholder.typicode.com/todos/1').then((response) => {
  console.log(response);
  console.log('data');
  console.log(response.data);
}).catch((err) => {
  console.log(error);
});


axios.post('https://jsonplaceholder.typicode.com/todos/', {
  hello: 'bah'
}).then((response) => {
  console.log(response);
  console.log('data');
  console.log(response.data);
}).catch((err) => {
  console.log(error);
});
