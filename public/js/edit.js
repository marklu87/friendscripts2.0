 $(document).ready(function () {

 var config = {
   apiKey: "AIzaSyB3tLpkNwJljywfHXOfJiiLmKuyHyKoS50",
   authDomain: "friendscripts.firebaseapp.com",
   databaseURL: "https://friendscripts.firebaseio.com",
   projectId: "friendscripts",
   storageBucket: "friendscripts.appspot.com",
   messagingSenderId: "834536402255"
 };
 firebase.initializeApp(config);

   // Initial Values
  //  var dataRef = firebase.database();
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
   var trimStoryID = window.location.pathname.toString();
   trimStoryID = trimStoryID.substr(trimStoryID.indexOf("-") + 1)
   console.log(trimStoryID);

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

$(".lexicalEdit").click(function(){
      event.preventDefault();
      var currentText = $("#editStoryCommit").val();
      // console.log(currentText);
      // $("#editStoryCommit").empty();
      var lexical = $(this).attr("lexicalCategory");
      var queryURL = "https://api.wordnik.com/v4/words.json/randomWord?hasDictionaryDef=true&includePartOfSpeech="+lexical+"&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5";
      $.ajax({
        type: "GET",
        url: queryURL,
        data: config,
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
          data: config,
          success: function(data) {console.log(data[0].text);}
        })
        .done(function(data) {
          $(".thumbStyle").prepend(randomWord+": "+data[0].text+"<br>");
          //Keep Definitions textarea scrolled to the bottom
          $(".thumbStyle").each(function() {this.scrollTop = 0;})
        });
      });
    });
//Edit Story Char Count
$("#editStoryCommit").keyup(function() {
    var length = $(this).val().length;
    var charRemain = maxCharCount - length;
    if (charRemain >= 0) {
        $(".charCount").text("Characters Remaining: " + charRemain);
    }
  })
  
});