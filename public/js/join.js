$.get("/api/stories", function(data) {
  // console.log("stories... " + data[0].storyTitle);
    var stories = [];
    for (var i = 0; i < data.length; i++){
      stories.push("Title: " + data[i].storyTitle + "</br>" + "Author: " + data[i].authorID + "</br>" + "Story Preview: " + data[i].sentence);
      // console.log("stories..." + data[i].storyTitle);
      // console.log("stories..." + data[i].authorID);
      // console.log("stories..." + data[i].sentence);
      // $(".title").append("Title: " + data[j].storyTitle + "</br>" + "Author: " + data[j].authorID + "</br>" + "Story Preview: " + data[j].sentence).addClass("newStoryDiv");
    }

    console.log(stories);

    for (var i = 0; i < stories.length; i++){
        $(".title").append("<div class='newStoryDiv'>" + stories[i] + "</div>");
    }
});
