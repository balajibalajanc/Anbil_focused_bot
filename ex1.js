const request = require('request');

const get_message=(conversationId,authToken)=>{
    request.get({
        url: `https://api.symbl.ai/v1/conversations/${conversationId}/messages`,
      headers: { 'Authorization': `Bearer ${authToken}` },
      json: true
                }, (err, response, body) => {
                                                console.log(body);
                                                                     })
                        }

module.exports=get_message;