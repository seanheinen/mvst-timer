const http = require('http'),
  fs = require('fs'),
  path = require('path');

const port = process.env.PORT || 3001,
  appRoot = __dirname + "/www",
  appPath = appRoot + "/index.html"

const app = (request, response) => {

  // infer the intended request from request url
  let requestUrl = request.url;

  // default to index.html for all but resource requests (SPA)
  let responseFilePath = appPath;
  let contentType = 'text/html';

  // remove resources url parameters
  const requestUrlExtension = path.extname(requestUrl);
  if (!!requestUrlExtension) {
    responseFilePath = appRoot + requestUrl;
    responseFilePath = responseFilePath.split("?")[0];
  }
  // find appropriate content type
  switch (requestUrlExtension) {
    case '.js':
      contentType = 'text/javascript';
      break;
    case '.css':
      contentType = 'text/css';
      break;
    case '.png':
      contentType = 'image/png';
      break;
    case '.jpg':
      contentType = 'image/jpg';
      break;
    case '.svg':
      contentType = "image/svg+xml";
      break;
    case '.otf':
      contentType = "font/otf";
      break;
    case '.ttf':
      contentType = "font/ttf";
      break;
    case '.woff':
      contentType = "font/woff";
      break;
  }

  fs.readFile(responseFilePath, (error, content) => {
    if (!!error) {
      response.writeHead(404, { 'Content-Type': contentType });
      response.end("error", 'utf-8');
    } else {
      response.writeHead(200, { 'Content-Type': contentType });
      response.end(content, 'utf-8');
    }
  });
};
module.exports = app;
if (!module.parent) {
  console.log('Initialising server');
  http.createServer(app).listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
  });
}