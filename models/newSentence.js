module.exports = function(sequelize, DataTypes) {
  var newSentence = sequelize.define("sentences", {
	    sentence: {
	      type: DataTypes.STRING,
	      allowNull: false
	    }
  });

   newSentence.associate = function(models) {
    newSentence.belongsTo(models.stories, {
      foreignKey: 'storyID'
    });

    newSentence.belongsTo(models.authors, {
      foreignKey: 'authorID'
    });
  };


  return newSentence;
};
