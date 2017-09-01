$(document).ready(function() {

  var trimStoryID = window.location.pathname.toString();
  trimStoryID = trimStoryID.substr(trimStoryID.indexOf("-") + 1)
  console.log(trimStoryID);

  //Click Function to Post new sentence
  $(".commitNewSentence").click(function(){
    var newPost = {
      sentence: $("#newStoryText").val().trim(),
      storyId: trimStoryID
    };
    $.post("/api/sentences", newPost, function() {
      // window.location.href = "/read";
      }).done(function(data){
          console.log(data);
          location.reload()
        });
  });

  $.get("/api/firstsentence-" + trimStoryID, function(data) {
      // console.log("stories data: " + data[1].id);
      for (var i = 0; i < data.length; i++) {
        console.log(data[i].sentence)
        $("#fullStory").append(data[i].sentence + " ");
      }
    });

  $.get("/api/fullstory-" + trimStoryID, function(data) {
    // console.log("fullstory data: " + data[1].sentence);
    for(var i = 0; i < data.length; i++){
      console.log("sentences: " + data[i].sentence);
      $("#fullStory").append(data[i].sentence + " ");
    }
  })

  $.get("/api/stories", function(data) {
      // console.log("stories data: " + data[1].id);
      for (var i = 0; i < data.length; i++) {
          var storyDivTwo = $(`<div class="col-md-12">`);
          storyDivTwo.addClass("newStoryDivTwo");
          storyDivTwo.attr("id", "storyID-" + data[i].id)
          $(".sideTitle").append(storyDivTwo);
      }
    });

    $.get("/api/stories", function(data) {
        for (var i = 0; i < data.length; i++) {
            var storyDiv = $(`<div class="col-md-3 storyStyle" >`);
            storyDiv.addClass("newStoryDiv");
            storyDiv.attr("id", "storyID-" + data[i].id)
            $(".title").append(storyDiv);

            $("#storyID-" + data[i].id).append(`<h4 class="col-md-12">${data[i].author.authorName}</h4>`);
            $("#storyID-" + data[i].id).append(`<h3 class="col-md-12">Story Title: ${data[i].storyTitle}</h3>`);
            $("#storyID-" + data[i].id).append(`<p col-md-8 col-md-offset-2>${data[i].sentence}</p> <br>`);
            $("#storyID-" + data[i].id).append(`<button id="joinScript-${data[i].id}" type="button" class="btn btn-primary btn-sm btn3d col-md-4" value="join">Join</button>`);
            $("#storyID-" + data[i].id).append(`<button id="readScript-${data[i].id}" type="button" class="btn btn-info btn-sm btn3d col-md-4" value="read">Read</button>`);
            // $("#storyID-" + data[i].id).append(`<div class="row"></div>`);
            $("#joinScript-" + data[i].id).on('click', {id: data[i].id}, (function(event) {
              window.location.href =  "/edit/" + event.target.id;
            }));

            $("#readScript-" + data[i].id).on('click', {id: data[i].id}, (function(event) {
              window.location.href = "/join/" + event.target.id;
            }));

        }


      });


});
