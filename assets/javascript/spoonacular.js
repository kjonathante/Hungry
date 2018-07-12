// These code snippets use an open-source library. http://unirest.io/nodejs
// unirest.get("https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search?diet=vegetarian&excludeIngredients=coconut&instructionsRequired=false&intolerances=egg%2C+gluten&limitLicense=false&number=10&offset=0&query=burger&type=main+course")
// .header("X-Mashape-Key", "<required>")
// .header("Accept", "application/json")
// .end(function (result) {
//   console.log(result.status, result.headers, result.body);
// });

// {
//   "baseUri": "https://spoonacular.com/recipeImages/",
//   "offset": 0,
//   "number": 10,
//   "totalResults": 10,
//   "processingTimeMs": 323,
//   "expires": 1473587241426,
//   "isStale": false,
//   "results": [
//     {
//       "id": 262682,
//       "title": "Thai Sweet Potato Veggie Burgers with Spicy Peanut Sauce",
//       "readyInMinutes": 75,
//       "image": "thai-sweet-potato-veggie-burgers-with-spicy-peanut-sauce-262682.jpg",
//       "imageUrls": [
//         "thai-sweet-potato-veggie-burgers-with-spicy-peanut-sauce-262682.jpg"
//       ]
//     }
//   ]
// }

$(document).on('click', '#search-recipes', function() {
  event.preventDefault();

  var endpoint = "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search";
  var mashapeKey = $('#mashape-key').val().trim(); 
  var query = $("#query").val().trim();
  var url = endpoint + "?" + $.param({
    query: encodeURI( query ),
    number: 1,
    offset: 0
  });

  $.ajax({
    url: url,
    type: 'GET', // The HTTP Method
    dataType: 'json',
    beforeSend: function(xhr) {
      xhr.setRequestHeader("X-Mashape-Key", mashapeKey); // Enter here your Mashape key
    }
  })
  .then(function(resp){
    console.log(resp);
    var baseUri = resp.baseUri;
    console.log( baseUri);

    var id;
    var image;
    var title;
    var $image;
    $('#result').empty();
    for( var val of resp.results ) {
      id = val.id;
      image = val.image;
      title = val.title;

      $image=$('<img>').attr({
        src: baseUri + image,
        alt: title,
        "data-id": id
      });
      $('#result').append( $image );

      console.log( id );
      console.log( image);
    }

    });    
  });
  
