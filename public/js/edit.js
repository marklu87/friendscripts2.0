$(document).ready(function() {
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

//Lexical Buttons for Story
$(".lexicalEdit").click(function(){
    event.preventDefault();
    var currentText = $("#editStoryCommit").val();
    var lexical = $(this).attr("lexicalCategory");
    var queryURL = "https://api.wordnik.com/v4/words.json/randomWord?hasDictionaryDef=true&includePartOfSpeech="+lexical+"&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5";
    $.ajax({
      type: "GET",
      url: queryURL,
      // data: config,
      success: function(data) {console.log(data);},
      error: function(response) {console.log(response);}
    })
    .done(function(data) {

      var randomWord = data.word;
      randomWordLength = randomWord.length;
      var length = $("#editStoryCommit").val().length;

      var charRemain = maxCharCount - length - randomWordLength;

      if (charRemain >= randomWordLength) {
        $("#editStoryCommit").val(currentText + data.word+" ");
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
$("#editStoryCommit").keyup(function() {
  var length = $(this).val().length;
  var charRemain = maxCharCount - length;
  if (charRemain >= 0) {
      $(".charCount").text("Characters Remaining: " + charRemain);
  }
})

// Text to speech API
  $(".speakStoryButt").click(function(event){
      responsiveVoice.speak($("#editStoryCommit").val(), "UK English Female", {pitch: 1, rate: 0.8});
  });
  $(".pauseStoryButt").click(function(event){
      responsiveVoice.pause();
  });
  $(".resumeStoryButt").click(function(event){
      responsiveVoice.resume();
  });


//Click Function to Post new sentence
$(".commitNewSentence").click(function(){
  var newPost = {
  sentence: $("#editStoryCommit").val().trim(),
  storyID: trimStoryID
  };
  $.post("/api/sentences", newPost, function() {
    // window.location.href = "/read";
    }).done(function(data){
        console.log(data);
      });
});

});
