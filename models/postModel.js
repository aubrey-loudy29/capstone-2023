module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('post', {
    // constructor
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT
    },
    published: {
      type: DataTypes.BOOLEAN
    }
  })

  return Post
}
