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
<<<<<<< HEAD
  	newStory.hasMany(models.newSentence, {
  		// onDelete: "cascade"
      foreignKey: {allowNull: false}
  	});
  };
=======
  	newStory.belongsTo(models.authors, {
      foreignKey: {
        allowNull: false
  	}
  });
>>>>>>> babd72062bf582264fa2cede0a768011e9af3278

  return newStory;
};
};
