//VARIABLES
//===============

var topics = ["guitars", "music", "technology", "finance", "news", "travel", "sci-fi", "electronics"];
var numGif = 10;
var authKey = "&api_key=dc6zaTOxFJmzC&limit=10"
var queryURLBase = "https://api.giphy.com/v1/gifs/search?q=";



// FUNCTIONS
// ===============

//Create buttons from the topics array
for (var i = 0; i < topics.length; i++) {
    var b = $('<button>');
    b.addClass('btn-style');
    b.addClass('button');

    var plusTitles = topics[i].split(' ').join('+');
    b.attr('data-type', plusTitles).append(topics[i]);

    b.text(topics[i]);

    // push the buttons to the div
    $("#buttonDiv").append(b);
};


// Button on-click function
$('button').on('click', function() {

    var topic = $(this).data('type');
    console.log(topic);

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topic + "&api_key=dc6zaTOxFJmzC&limit=10";
    console.log(queryURL);

//ajax call to the API
    $.ajax({url: queryURL, method: 'GET'})
        .done(function(response) {
            console.log(response);

            $("#gifsShowHere").empty();

            for(i=0; i <numGif; i++) {
              console.log(response.data[i].images.fixed_height.url);
              console.log(response.data[i].rating);

              var rating = response.data[i].rating;

              //       start dumping into the HTML
              var gifWell = $("<div>");

              gifWell.addClass("well");
              gifWell.attr("id", "gifWell-" + i);
              $("#gifsShowHere").append(gifWell);

              $("#gifWell-" + i).append("<p>" + "Rating: " + rating);
              $("#gifWell-" + i).append("<img src=" + response.data[i].images.fixed_height.url + ">");

            }
      })
})



    // path to the gif: data.images.fixed_height;

// MAIN PROCESSES
//===============

// Search function
$("#runSearch").on("click", function(){

      // stores the user's search term as a variable and trims any whitespace
      searchTerm = $("#searchTerm").val().trim();
      console.log("Search Term: " + searchTerm);

      //push users term into array
      topics.push(searchTerm);
      console.log(topics);

          // push the new buttons to the div
          b.addClass('btn-style');
          b.attr('data-type', topics[i]);
          b.text(topics[i]);
          $("#buttonDiv").append(b);

      return false;
    })


