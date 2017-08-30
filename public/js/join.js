$.get("/api/stories", function(data) {
    // console.log("stories data: " + data[1].id);
    for (var i = 0; i < data.length; i++) {
      var storyDiv = $("<div>");
      storyDiv.addClass("newStoryDiv");
      storyDiv.attr("id", "storyID-" + data[i].id)
      $(".title").append(storyDiv);

      $("#storyID-" + data[i].id).append(`<h4 class="col-md-12">${data[i].authorID}</h4> <br>`);
      $("#storyID-" + data[i].id).append(`<h3>Story Title: ${data[i].storyTitle}</h3>`);
      $("#storyID-" + data[i].id).append(`<p col-md-8 col-md-offset-2>${data[i].sentence}</p> <br>`);
      $("#storyID-" + data[i].id).append(`<button id="joinScript-${data[i].id}" type="button" class="btn btn-primary btn-sm btn3d col-md-4" value="join">Join</button>`);
      $("#storyID-" + data[i].id).append(`<button id="readScript-${data[i].id}" type="button" class="btn btn-info btn-sm btn3d col-md-4" value="read">Read</button>`);
      $("#storyID-" + data[i].id).append(`<div class="row"></div>`);

      $("#storyID-" + data[i].id).bind('click', {id: data[i].id}, (function(event) {
        window.location.href = "http://localhost:8080/edit/" + event.target.id;
      }));
    }
  });

  $(".bootSideNav").on("click", "#readScript", function(event){
    // event.preventDefault();
    // if ($(this).val() == "read"){
    //   $("#toggleJoin").hide();
    //   $("#toggleRead").show();
    //
    // }
  });

  $(".bootSide").on("click", "#joinScript", function(event){
    // event.preventDefault();
    // console.log($(this))
    // if ($(this).val() == "join"){
    //   $("#toggleJoin").show();
    //   $("#toggleRead").hide();
    // }
  });
