$.get("/api/stories", function(data) {
    for (var i = 0; i < data.length; i++) {
      var storyDiv = $("<div>");
      storyDiv.addClass("newStoryDiv");
      storyDiv.attr("id", "storyID-" + data[i].id)
      $(".title").append(storyDiv);

      $("#storyID-" + data[i].id).append("Title: " + data[i].storyTitle + "</br>");
      $("#storyID-" + data[i].id).append("Author: " + data[i].authorID + "</br>");
      $("#storyID-" + data[i].id).append("Story Preview: " + data[i].sentence);
      //
      // console.log("before click: ");
      // var id = data[i].id;
      // console.log("id's: "+id);
      console.log(data[i].id);
      $("#storyID-"+data[i].id).bind('click', {id: data[i].id}, (function(event) {
        window.location.href = "http://localhost:8080/edit/" + event.target.id;
        // $.get("/edit/" + id, function(data){
        //   console.log(data);
        // })
      }));
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
