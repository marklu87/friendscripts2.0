alert('linked');

$.get("/api/stories", function(data) {
    for (var i = 0; i < data.length; i++) {
      var storyDiv = $("<div>");
      storyDiv.addClass("newStoryDiv");
      storyDiv.attr("id", "storyID-" + data[i].id)
      $(".title").append(storyDiv);

      $("#storyID-" + data[i].id).append("<strong>Title:</strong> " + data[i].storyTitle + "<br>");
      $("#storyID-" + data[i].id).append("<strong>Author:</strong> " + data[i].authorID + "<br>");
      $("#storyID-" + data[i].id).append("<strong>Story Preview:</strong> "  + data[i].sentence);

      $("#storyID-" + data[i].id).bind('click', {id: data[i].id}, (function(event) {
        window.location.href = "http://localhost:8080/read/" + event.target.id;
      }));
    }
});
