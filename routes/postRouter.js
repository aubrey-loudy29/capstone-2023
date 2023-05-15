const postController = require('../controllers/postController')

const postRouter = require('express').Router()

postRouter.post('/addPost', postController.addPost)
postRouter.get('/posts', postController.getAllPosts)
postRouter.get('/publishedPosts', postController.getPublishedPosts)
postRouter.get('/post/:id', postController.getPost)
postRouter.delete('/post/:id', postController.deletePost)
postRouter.put('/post/:id', postController.updatePost)

module.exports = postRouter
