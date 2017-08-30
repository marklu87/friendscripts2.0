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

});
