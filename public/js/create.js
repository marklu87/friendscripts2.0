
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
