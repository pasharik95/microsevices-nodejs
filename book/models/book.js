module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define(
    'book',
    {
      name: {
        type: DataTypes.STRING
      },
      author: {
        type: DataTypes.STRING
      },
      pages: {
        type: DataTypes.INTEGER
      },
    }
  );

  return Book;
};