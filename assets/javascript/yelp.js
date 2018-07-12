$(document).on('click', '#yelp-search', function() {
  event.preventDefault();




  /*add this to your html -> <script src="https://storage.googleapis.com/code-snippets/rapidapi.min.js"></script> */
  var rapid = new RapidAPI("hungryteam_5b4654e7e4b004833ec2655e", "da70f8e1-fd7f-4da4-b6be-2add1e8c39d8");
  

  rapid.call('YelpAPI', 'getBusinesses', { 
    'accessToken': 'sDKQbunPU1KnzeMLrV_TTqdY_RczqfSV1CiZC5XSqZsUr_dariJ7gaNSBnUjwmqkVEQmXGlmfvwSbYVoyXhVidzv_HzRO35udGwP1A3TBbGNWw1S0A758BtO89pGW3Yx',
    'location': '94116',
    'term': 'restaurants',
    limit: 2

  }).on('success', function (payload) {
    /*YOUR CODE GOES HERE*/ 
    console.log(payload);
  }).on('error', function (payload) {
    /*YOUR CODE GOES HERE*/ 
    console.log(payload);
  });

  rapid.call('NasaAPI', 'getPictureOfTheDay', {
  }).on('success', function (payload) {
    /*YOUR CODE GOES HERE*/ 
    console.log(payload);
  }).on('error', function (payload) {
    /*YOUR CODE GOES HERE*/ 
    console.log(payload);
  });


});

