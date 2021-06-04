const request = require('request');

const appId = '64505a35586747337663516a764443794755346a6c5762794241485031306e71';
const appSecret = '59756c76434346545f44794e737a7a6c7358513879684a73396d69694166347a79484962304b384b5974533069524e4d58564c5a487047566e4c764450574852';

const authOptions = {
  method: 'post',
  url: "https://api.symbl.ai/oauth2/token:generate",
  body: {
    type: "application",
    appId: appId,
    appSecret: appSecret
  },
  json: true
};

request(authOptions, (err, res, body) => {
  if (err) {
    console.error('error posting json: ', err);
    throw err
  }

  const {accessToken}=(body);
  console.log(accessToken); 
});