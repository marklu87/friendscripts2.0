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
  // Author.associate = function(models) {
  // 	Author.hasMany(models.Post, {
  // 		onDelete: "cascade"
  // 	});
  // };
  return newSentence;
};
