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
  // Author.associate = function(models) {
  // 	Author.hasMany(models.Post, {
  // 		onDelete: "cascade"
  // 	});
  // };
  return newStory;
};
