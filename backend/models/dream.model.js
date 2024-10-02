module.exports = (sequelize, Sequelize) => {
    const Dream = sequelize.define("bicycle", {
    title: {
        type: Sequelize.STRING
    },
    description: {
        type: Sequelize.STRING
    },
    });

    return Dream;
};

//función anonima.