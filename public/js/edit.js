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
        });
  });

});
