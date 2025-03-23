import {createServer} from 'http';
import {} from 'dotenv/config';
const PORT = process.env.PORT;

const server = createServer((req, res) => {
    if(req.method === 'GET') {
        res.writeHeader(200, ('Content-Type', 'text/html'));
        res.end('<h1>Hey there</h1>');
    } else {
        res.setHeader('Content-type', 'text/plain');
        res.statusCode = 404;
        res.end('Server error');
    }
})

server.listen(PORT, () => {
    console.log(`server running on http://localhost:${PORT}`);
})
