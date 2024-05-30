// Create a new file, e.g., server.js
const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    // Serve your HTML file
    const htmlPath = path.join(__dirname, 'index.html');
    fs.readFile(htmlPath, (err, html) => {
      if (err) {
        res.statusCode = 500;
        res.end(`Error: ${err.message}`);
      } else {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end(html);
      }
    });
  } else {
    // Serve other static files (CSS, JavaScript, images, etc.)
    const filePath = path.join(__dirname, req.url);
    fs.readFile(filePath, (err, content) => {
      if (err) {
        res.statusCode = 500;
        res.end(`Error: ${err.message}`);
      } else {
        res.statusCode = 200;
        res.end(content);
      }
    });
  }
});

const port = 8000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});