module.exports = function(sequelize, DataTypes) {
  var newStory = sequelize.define("newStory", {
    storyTitle: {
      type: DataTypes.STRING,
      allowNull: true,
      // validate: {
      //   len: [1]
      // }
    },
    authorID: {
      type: DataTypes.STRING,
      allowNull: true,
      // len: [1]
    },
    sentence: {
      type: DataTypes.TEXT,
      allowNull: false,
      // len: [1]
    }
  });

  newStory.associate = function(models) {
  	newStory.hasMany(models.newSentence, {
  		// onDelete: "cascade"
      foreignKey: {allowNull: false}
  	});
  };

  return newStory;
};
