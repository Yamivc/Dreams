module.exports = (sequelize, Sequelize) => {
  const Dream = sequelize.define("dream", {
    title: {
      type: Sequelize.STRING,
    },
    description: {
      type: Sequelize.STRING,
    },
    feel: {
      type: Sequelize.STRING,
    },
  });

  return Dream;
};

//función anonima.
