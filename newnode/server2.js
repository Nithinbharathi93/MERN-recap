import {} from 'dotenv/config';
import { createServer } from 'http';
const PORT = process.env.PORT;

const users = [
    {'id': 1, 'username': 'nithin'},
    {'id': 2, 'username': 'bharathi'},
    {'id': 3, 'username': 'sri'},
];
 // Middleware can modify the request and responses..
const logger = (req, res, next) => {
    console.log(`${req.method}, ${req.url}`);
    next();
}

// JSON middleware
const jsonMiddleware = (req, res, next) => {
    res.setHeader('Content-Type', 'application/json');
    next();
}

// POST request handler
const  createUserHandler = (req, res) => {
    let body = "";
    req.on('data', (chunk) => {
        body += chunk.toString();
    });

    req.on('end', () => {
        const newUser = JSON.parse(body);
        users.push(newUser);
        res.statusCode = 201;
        res.write(JSON.stringify(newUser));
        res.end();
    })
}

// Route handler for GET /api/users
const getUsersHandlers = (req, res) => {
    res.write(JSON.stringify(users));
    res.end();
}

const getUserByID = (req, res) => {
    const id = req.url.split("/")[3];
    const user = users.find((user) => user.id === parseInt(id));
    if (user) {
        res.write(JSON.stringify(user));
    } else {
        res.statusCode = 404;
        res.write(JSON.stringify({message: 'User not found'}));
    }
    res.end();
}

//Not found handler
const notFoundHandler = (req, res) => {
    res.statusCode = 404;
    res.write(JSON.stringify({message: 'Route not found'}));
    res.end()
}

const server = createServer((req, res) => {
    logger(req, res, () => {
        jsonMiddleware(req, res, () => {
            if(req.url === '/api/users' && req.method === 'GET') {
                getUsersHandlers(req, res);
            } else if(req.url.match(/\/api\/users\/([0-9]+)/) && req.method === 'GET') {
                getUserByID(req, res);
            } else if(req.url === '/api/users' && req.method === 'POST') {
                createUserHandler(req, res);
            } else {
                notFoundHandler(req, res);
            }
        });
        // res.setHeader('Content-Type', 'application/json');
        // if (req.url === '/api/users' && req.method === 'GET') {
        //     res.write(JSON.stringify(users));
        // } else if(req.url.match(/\/api\/users\/([0-9]+)/) && req.method === 'GET')  {
        //     const id = req.url.split("/")[3];
        //     const user = users.find((user) => user.id === parseInt(id));
        //     if (user) {
        //         res.write(JSON.stringify(user));
        //     } else {
        //         res.write(JSON.stringify({message: 'User not found'}));
        //     }
        // } else {
        //     res.statusCode = 404;
        //     res.write(JSON.stringify({message: 'Route not found'}));
        // }
        // res.end();
    })
});

server.listen(PORT, () => {
    console.log(`Server running no http://localhost:${PORT}`);
})