module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define(
    'book',
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      author: {
        type: DataTypes.STRING,
        allowNull: false
      },
      pages: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
    }
  );

  return Book;
};