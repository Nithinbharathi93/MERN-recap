import {} from 'dotenv/config';
import fs from 'fs/promises';
import http from 'http';
const PORT = process.env.PORT;
import url from 'url';
import path from 'path';

//Get current path
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(`File name: ${__filename}`);
console.log(`Directory name: ${__dirname}`);

const server = http.createServer(async (req, res) => {
    // res.setHeader('Content-type', 'text/html');
    // res.statusCode = 404;
    // console.log(req.url);
    // console.log(req.method);
    try {
        if(req.method === 'GET') {
            let filePath;
            if (req.url === '/') {
                filePath = path.join(__dirname, 'public', 'index.html');
            } else if (req.url === "/about") {
                filePath = path.join(__dirname, 'public', 'about.html');
            } else {
                throw new Error('Not Found');
            }
            const data = await fs.readFile(filePath);
            res.setHeader('Content-Type', 'text/html');
            res.write(data);
            res.end();
            // if(req.url === '/') {
            //     res.writeHead(200, {'Content-type': 'text/html'});
            //     res.end('<h1>Homepage</h1>');
            // } else if(req.url === '/about') {
            //     res.writeHead(200, {'Content-type': 'text/html'});
            //     res.end("<h1>About page</h1>");
            // } else {
            //     res.writeHead(404, {'Content-type': 'text/html'});
            //     res.end("<h1>Not found</h1>");
            // }
        } else {
            throw new Error('Method not allowed')
        }
    } catch (error) {
        res.writeHead(500, {'Content-type': 'text/plain'});
        res.end("Server Error");
    }
    // res.end(JSON.stringify({
    //     message: 'Got a Server Error'
    // }));
});
 
server.listen(PORT, () => {
    console.log(`server running on http://localhost:${PORT}`)
});