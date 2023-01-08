# frontend for caller-id
An Express.js server with a single route, /proxy, that acts as a proxy pass to the API endpoint at api.example.com. It uses the http module to send a GET request to the endpoint and receive the response. The query string is parsed using the req.query property, and the response from the API is sent back to the client.

To use this proxy server, you can send a request to http://localhost:3000/proxy?<query_string>, where <query_string> is the query string you want to send to the API endpoint.

Install NPM and Nodejs
```bash
sudo apt update
sudo apt-get install npm nodejs
```

Intall npm express
```bash
npm install express
```

Run nodejs server
```bash
npm start
```

