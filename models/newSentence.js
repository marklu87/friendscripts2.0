module.exports = function(sequelize, DataTypes) {
  var newSentence = sequelize.define("sentences", {
	    sentence: {
	      type: DataTypes.STRING,
	      allowNull: false
	    }
  });
   newSentence.associate = function(models) {
    newSentence.belongsTo(models.stories, {
      foreignKey: {
        allowNull: false
      }
    });

    newSentence.belongsTo(models.authors, {
      foreignKey: {
        allowNull: false
      }
    });
  };


  return newSentence;
};
