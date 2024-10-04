module.exports = (sequelize, Sequelize) => {
  const Dream = sequelize.define("dream", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: Sequelize.STRING,
    },
    description: {
      type: Sequelize.STRING,
    },
    feel: {
      type: Sequelize.STRING,
    },
    img: {
      type: Sequelize.STRING,
    },
    date: {
      type: Sequelize.DATE,
    },
  });

  return Dream;
};

//función anonima.
