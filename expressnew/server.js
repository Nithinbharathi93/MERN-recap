import {} from 'dotenv/config';
import express from 'express';
import path from 'path';
import posts from './routes/posts.js';
const PORT = process.env.PORT;

const app = express();

// body parser middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//Routes
app.use('/api/posts', posts);

app.listen(PORT, () => console.log(`The server is running at http://localhost:${PORT}`));


// the express static middleware
// app.use(express.static(path.join(__dirname, 'public')));

// app.get('/', (req, res) => {
//     // res.send({message: "Hey there"});
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

// app.get('/about', (req, res) => {
//     // res.send({message: "Hey there"});
//     res.sendFile(path.join(__dirname, 'public', 'about.html'));
// });

// let posts = [
//     {id: 1, title: 'Post One'},
//     {id: 2, title: 'Post Two'},
//     {id: 3, title: 'Post Three'},
// ];

// //query handling
// app.get('/api/posts', (req, res) => {
//     // console.log(req.query)
//     const limit = parseInt(req.query.limit);
//     if(!isNaN(limit) && limit > 0) {
//         res.status(200).json(posts.slice(0, limit));
//     } else {
//         res.status(200).json(posts);
//     }
// });

// // req.param handling
// app.get('/api/posts/:id', (req, res) => {
//     const id = parseInt(req.params.id);
//     // res.json(posts.filter((post) => post.id === id));
//     const post = posts.find((post) => post.id === id);
//     if (!post) {
//         res.status(404).json({msg: `Post not found`});
//     } else {
//         res.status(200).json(post);
//     }
// });
