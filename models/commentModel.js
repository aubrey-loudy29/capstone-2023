module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('comment', {
    // constructor
    content: {
      type: DataTypes.STRING,
      allowNull: false
    }
  })

  return Comment
}
