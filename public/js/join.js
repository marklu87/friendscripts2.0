$.get("/api/stories", function(data) {
    for (var i = 0; i < data.length; i++) {
      var storyDiv = $("<div>");
      storyDiv.addClass("newStoryDiv");
      storyDiv.attr("id", "storyID-" + data[i].id)
      $(".title").append(storyDiv);

      $("#storyID-" + data[i].id).append("<h4>" + "Title: " + data[i].storyTitle + "</h4>");
      $("#storyID-" + data[i].id).append("<h4>" + data[i].authorID + "</h4>");
      $("#storyID-" + data[i].id).append("<h4>" + data[i].sentence + "</h4>");

      console.log("before click: ");
      var id = data[i].id;
      $("#storyID-"+data[i].id).click(function(idElement) {
        window.location.href = "http://localhost:8080/edit/" + id;
        // $.get("/edit/" + id, function(data){
        //   console.log(data);
        // })
      })
    }


    // var stories = [];
    // for (var i = 0; i < data.length; i++){
    //   stories.push("Title: " + data[i].storyTitle + "</br>" + "Author: " + data[i].authorID + "</br>" + "Story Preview: " + data[i].sentence);
    // }
    //
    // console.log(stories);
    //
    // for (var i = 0; i < stories.length; i++){
    //     var id = data[i].id;
    //     console.log("id" + id);
    //     $(".title").append("<div class='newStoryDiv'>" + stories[i] + "</div>").attr("id", id);
    // }
});
