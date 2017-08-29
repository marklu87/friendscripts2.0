module.exports = function(sequelize, DataTypes) {
  var newStory = sequelize.define("stories", {
    storyTitle: {
      type: DataTypes.STRING,
      allowNull: true
    },
    sentence: {
      type: DataTypes.STRING,
      allowNull: false
    },
    authorID: {
      type: DataTypes.STRING
    }
    });
  

  newStory.associate = function(models) {
  	newStory.belongsTo(models.authors, {
      foreignKey: {
        allowNull: false
  	}
  });

  return newStory;
};
};
