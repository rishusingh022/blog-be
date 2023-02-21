const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class BlogPost extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here
    }
  }
  BlogPost.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.STRING,
    },
    date: DataTypes.DATE,
    readingTime: {
      field: 'reading_time',
      type: DataTypes.STRING,
    },
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    claps: DataTypes.INTEGER,
    liked: DataTypes.BOOLEAN,
    image: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'blogPosts',
  });
  return BlogPost;
};
