const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');


var data = {
  id:4
};

var resultToken = jwt.sign(data,'someSecrets');

var verifyToken = jwt.verify(resultToken,'someSecrets');

console.log(resultToken);
console.log(verifyToken);


// jwt.sign();
// jwt.verify();

// var data = 4
// var hash = SHA256(data).toString();

// console.log(data);
// console.log(hash);

// var token = {
//   data,
//   hashing:SHA256(JSON.stringify(data) + 'someSecrets').toString()
// };

// var resultHashing = SHA256(JSON.stringify(token.data)).toString();

// if(token.hashing === resultHashing){
//   console.log('Data is not changed');
// }else{
//   console.log('Data is changed,dont trust');
