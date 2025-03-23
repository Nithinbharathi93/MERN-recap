import express from 'express';
const router = express.Router();

let posts = [
    {id: 1, title: 'Post One'},
    {id: 2, title: 'Post Two'},
    {id: 3, title: 'Post Three'},
];

//query handling
router.get('/', (req, res) => {
    // console.log(req.query)
    const limit = parseInt(req.query.limit);
    if(!isNaN(limit) && limit > 0) {
        res.status(200).json(posts.slice(0, limit));
    } else {
        res.status(200).json(posts);
    }
});

// req.param handling
router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    // res.json(posts.filter((post) => post.id === id));
    const post = posts.find((post) => post.id === id);
    if (!post) {
        res.status(404).json({msg: `Post not found`});
    } else {
        res.status(200).json(post);
    }
});

// create new post
router.post('/', (req, res) => {
    console.log(req.body);
    res.status(201).json(posts);
});

// module.exports = router;
export default router;