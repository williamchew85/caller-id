const express = require('express');
const app = express();
const http = require('http');

const port = process.argv[2];
const env = process.argv[3] || 'dev';

app.get('/proxy', (req, res) => {
  const options = {
    host: 'api.example.com',
    path: req.url,
    headers: {
      'Authorization': 'Bearer <TOKEN>',
      'X-Custom-Header': '<VALUE>'
    }
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

app.listen(port, () => {
  console.log(`Running on port ${port} in ${env} environment`);
});
