$.get("/api/stories", function(data) {
  // console.log("stories... " + data[0].storyTitle);
  for (var i = 0; i < data.length; i++){
    console.log("stories..." + data[i].storyTitle);
    console.log("stories..." + data[i].authorID);
    console.log("stories..." + data[i].sentence);
  }
});
