$(document).ready(function() {

$.get("/api/stories", function(data) {
    // console.log("stories data: " + data[1].id);
    for (var i = 0; i < data.length; i++) {
        var storyDivTwo = $(`<div class="col-md-12">`);
        storyDivTwo.addClass("newStoryDivTwo");
        storyDivTwo.attr("id", "storyID-" + data[i].id)
        $(".sideTitle").append(storyDivTwo);

        // $("#storyID-" + data[i].id).append(`<h3 class="col-md-12">${data[i].authorID}</h3>`);
        // $("#storyID-" + data[i].id).append(`<h6 class="col-md-12>${data[i].storyTitle}</h6>`);
        // $("#storyID-" + data[i].id).append(`<p class="col-md-12>${data[i].sentence}</p>`);
        // $("#storyID-" + data[i].id).append(`<button id="joinScript" type="button" class="btn btn-primary btn-sm btn3d col-md-4" value="join">Join</button>`);
        // $("#storyID-" + data[i].id).append(`<button id="readScript" type="button" class="btn btn-info btn-sm btn3d col-md-4" value="read">Read</button>`);
    }
  });

$.get("/api/stories", function(data) {
  // console.log("stories data: " + data[1].id);
  for (var i = 0; i < data.length; i++) {
    var storyDiv = $(`<div class="col-sm-8 col-md-3 storyStyle">`);
    storyDiv.addClass("newStoryDiv");
    storyDiv.attr("id", "storyID-" + data[i].id)
    $(".title").append(storyDiv);


    $("#storyID-" + data[i].id).append(`<h4 class="col-sm-12 col-md-12">${data[i].author.authorName}</h4>`);
    $("#storyID-" + data[i].id).append(`<h3 class="col-sm-12 col-md-12">Story ID: ${data[i].storyTitle}</h3>`);
    $("#storyID-" + data[i].id).append(`<p col-sm-8 col-md-8 col-md-offset-2>${data[i].sentence}</p> <br>`);

    $("#storyID-" + data[i].id).append(`<div class="row">
                                          <div class="buttStyle col-md-10 col-md-offset-1">
                                            <button id="joinScript-${data[i].id}" type="button" class=" btn btn-primary btn-sm btn3d col-md-3" value="join">Join</button>
                                            <button id="readScript-${data[i].id}" type="button" class=" btn btn-info btn-sm btn3d col-md-3" value="read">Read</button>
                                          </div>
                                        </div>`);

    $("#joinScript-" + data[i].id).bind('click', {id: data[i].id}, (function(event) {
      window.location.href = window.location.href + "/edit/" + event.target.id;
    }));


    $("#readScript-" + data[i].id).bind('click', {id: data[i].id}, (function(event) {
      window.location.href = window.location.href + "/" + event.target.id;
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
});
