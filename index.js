const express = require('express');
const app = express();
const http = require('http');

app.get('/proxy', (req, res) => {
  const options = {
    host: 'api.example.com',
    path: req.url
  };

  http.get(options, (apiRes) => {
    let data = '';
    apiRes.on('data', (chunk) => {
      data += chunk;
    });
    apiRes.on('end', () => {
      const query = req.query;
      console.log(`Received query: ${JSON.stringify(query)}`);
      res.send(data);
    });
  }).on('error', (err) => {
    console.log(`Error: ${err.message}`);
    res.send(err.message);
  });
});

app.listen(3000, () => {
  console.log('Proxy server listening on port 3000');
});
