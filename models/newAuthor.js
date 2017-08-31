module.exports = function(sequelize, DataTypes) {
  var newAuthor = sequelize.define("authors", {
	    authorName: {
	      type: DataTypes.STRING,
	      allowNull: false
	    },
	    userName: {
	      type: DataTypes.STRING,
	      allowNull: false
	      // len: [1]
	    },
	    password: {
	      type: DataTypes.STRING,
	      allowNull: false
	      // len: [1]
	  }
  });

  return newAuthor;
};
