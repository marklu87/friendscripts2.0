module.exports = function(sequelize, DataTypes) {
  var newSentence = sequelize.define("newSentence", {
	    Sentence: {
	      type: DataTypes.STRING,
	      allowNull: false
	      // validate: {
	      //   len: [1]
	      // }
	    },
	    storyID: {
	      type: DataTypes.INTEGER,
	      allowNull: false
	      // len: [1]
	    },
	    authorID: {
	      type: DataTypes.INTEGER,
	      allowNull: false
	      // len: [1]
	  }
  });

  newSentence.associate = function(models) {
  	newSentence.belongsTo(models.newStory, {
      foreignKey: {
        allowNull: true
      }
  	});
  };

  return newSentence;
};
