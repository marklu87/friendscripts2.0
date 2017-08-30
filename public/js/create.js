
 $(document).ready(function() {


  // Initial Values
   var name = "";
   var email = "";
   var age = 0;
   var adLibArray = [];
   var adLib;
   var storyPrompt;

   var storyIndex;
   var storyPath;
   var randomWordLength = "";
   var maxCharCount = 150;
   var id;


$(".commitNewStory").click(function(){
  console.log("here");

  var newPost = {
    storyTitle: $(".userTitle").val().trim(),
    authorID: $(".userAuthor").val().trim(),
    sentence: $("#newStoryText").val().trim()
  };

  $.post("/api/stories", newPost, function() {
    // window.location.href = "/read";
    }).done(function(data){
        console.log(data);
      });

  $(".userTitle").val("");
  $(".userAuthor").val("");
  $("#newStoryText").val("");
  $(".thumbStyle").empty();
  $(".charCount").text("Characters Remaining: " + 150);
})

//Lexical Buttons for New Story
$(".lexicalNew").click(function(){
     event.preventDefault();
     var currentText = $("#newStoryText").val();
     var lexical = $(this).attr("lexicalCategory");
     var queryURL = "https://api.wordnik.com/v4/words.json/randomWord?hasDictionaryDef=true&includePartOfSpeech="+lexical+"&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5";
     $.ajax({
       type: "GET",
       url: queryURL,
       success: function(data) {console.log(data);},
       error: function(response) {console.log(response);}
     })
     .done(function(data) {

       var randomWord = data.word;
       randomWordLength = randomWord.length;
       var length = $("#newStoryText").val().length;

       var charRemain = maxCharCount - length - randomWordLength;

       if (charRemain >= randomWordLength) {
         $("#newStoryText").val(currentText + data.word+" ");
         $(".charCount").text("Characters Remaining: " + charRemain);
       } else if(charRemain <= 0){
         charRemain = 0;
         $(".charCount").text("Characters Remaining: " + charRemain);
       }

       $.ajax({
         type: "GET",
         url: "https://api.wordnik.com/v4/word.json/"+randomWord+"/definitions?limit=200&includeRelated=true&useCanonical=false&includeTags=false&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5",
         success: function(data) {console.log(data[0].text);}
       })
       .done(function(data) {
         $(".thumbStyle").prepend(randomWord+": "+data[0].text+"<br>");
         //Keep Definitions textarea scrolled to the bottom
         $(".thumbStyle").each(function() {this.scrollTop = 0;})
       });
     });
   });

//New Story Char Count
$("#newStoryText").keyup(function() {
   var length = $(this).val().length;
   var charRemain = maxCharCount - length;
   if (charRemain >= 0) {
       $(".charCount").text("Characters Remaining: " + charRemain);
   }
 })


});



//Join Story Div

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
      for (var i = 0; i < data.length; i++) {
          var storyDiv = $(`<div class="col-md-3 storyStyle" >`);
          storyDiv.addClass("newStoryDiv");
          storyDiv.attr("id", "storyID-" + data[i].id)
          $(".title").append(storyDiv);

          $("#storyID-" + data[i].id).append(`<h4 class="col-md-12">${data[i].authorID}</h4>`);
          $("#storyID-" + data[i].id).append(`<h3 class="col-md-12">Story Title: ${data[i].storyTitle}</h3>`);
          $("#storyID-" + data[i].id).append(`<p col-md-8 col-md-offset-2>${data[i].sentence}</p> <br>`);
          $("#storyID-" + data[i].id).append(`<button id="joinScript-${data[i].id}" type="button" class="btn btn-primary btn-sm btn3d col-md-4" value="join">Join</button>`);
          $("#storyID-" + data[i].id).append(`<button id="readScript-${data[i].id}" type="button" class="btn btn-info btn-sm btn3d col-md-4" value="read">Read</button>`);
          // $("#storyID-" + data[i].id).append(`<div class="row"></div>`);
          $("#storyID-" + data[i].id).bind('click', {id: data[i].id}, (function(event) {
            window.location.href = "http://localhost:8080/edit/" + event.target.id;
          }));

          // $("#storyID-" + data[i].id).append(`<h4 class="col-md-12">${data[i].storyTitle}</h4>`);
          // $("#storyID-" + data[i].id).append(`<h3 class="col-md-12">by: ${data[i].authorID}</h3>`);
          // $("#storyID-" + data[i].id).append(`<p class="col-md-8 col-md-offset-2">${data[i].sentence}</p><br>`);
          // $("#storyID-" + data[i].id).append(`<button id="readScript" type="button" class=" btn btn-info btn-sm btn3d col-md-4 col-md-offset-1" value="read">Read</button>`);
          // $("#storyID-" + data[i].id).append(`<button id="joinScript" type="button" class=" btn btn-primary btn-sm btn3d col-md-4 col-md-offset-1" value="join">Join</button>`+ `<br><hr></hr>`);



          // $("#storyID-" + data[i].id).append(`<button type="button" class="btn btn-primary btn-sm btn3d col-md-2">Read</button>`);
          // $("#storyID-" + data[i].id).append(`<button type="button" class="btn btn-primary btn-sm btn3d col-md-2">Read</button>`);
          // $("#storyID-" + data[i].id).append(`<button type="button" class="btn btn-primary btn-sm btn3d col-md-2">Read</button>`);
          // $("#storyID-" + data[i].id).bind('click', { id: data[i].id }, (function(event) {
          //     window.location.href = "http://localhost:8080/edit/" + event.target.id;
          // }));
      }
    });




// on click for the read story div
