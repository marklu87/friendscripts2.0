module.exports = function(sequelize, DataTypes) {
  var newStory = sequelize.define("stories", {
    storyTitle: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    sentence: {
      type: DataTypes.TEXT,
      allowNull: false,
      // len: [1]
    }
  });
  console.log("story to author fk")
  newStory.associate = function(models) {
    newStory.belongsTo(models.authors, {
      foreignKey: {
        allowNull: false
      }
    });
  };


  return newStory;
};
