var trimStoryID = window.location.pathname.toString();
trimStoryID = trimStoryID.substr(trimStoryID.indexOf("-") + 1)

$.get("/api/firstsentence-" + trimStoryID, function(data) {
    // console.log("stories data: " + data[1].id);
    for (var i = 0; i < data.length; i++) {
      console.log(data[i].sentence)
      $("#readStoryText").append(data[i].sentence + " ");
    }
  });

$.get("/api/fullstory-" + trimStoryID, function(data) {
  // console.log("fullstory data: " + data[1].sentence);
  for(var i = 0; i < data.length; i++){
    console.log("sentences: " + data[i].sentence);
    $("#readStoryText").append(data[i].sentence + " ");
  }
})
