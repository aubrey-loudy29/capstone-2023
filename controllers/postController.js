const db = require('../models')

// create main Model

const Post = db.posts
const Comment = db.comments

// actions

// create

const addPost = async (req, res) => {
  let data = {
    name: req.body.name,
    description: req.body.description,
    published: req.body.published ? req.body.published : false
  }

  const post = await Post.create(data)

  res.status(201).send(post)
}

// index

const getAllPosts = async (req, res) => {
  let posts = await Post.findAll({
    // can specify what you want (serialize)
    // attributes: [name, description]
  })
  res.status(200).send(posts)
}

// show

const getPost = async (req, res) => {
  const id = req.params.id
  let post = await Post.findOne({
    where: { id: id }
  })
  res.status(200).send(post)
}

// update
const updatePost = async (req, res) => {
  const id = req.params.id
  let post = await Post.update(req.body, {
    where: { id: id }
  })

  res.status(200).send(post)
}

// delete

const deletePost = async (req, res) => {
  const id = req.params.id
  await Post.destroy({
    where: { id: id }
  })

  res.status(200).send('Post was successfully deleted')
}

// get by published
const getPublishedPosts = async (req, res) => {
  let posts = await Post.findAll({
    where: { published: true }
  })
  res.status(200).send(posts)
}

module.exports = {
  addPost,
  getAllPosts,
  getPost,
  deletePost,
  updatePost,
  getPublishedPosts
}
