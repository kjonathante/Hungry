// unirest.get("https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/convert?ingredientName=flour&sourceUnit=cups&targetUnit=grams&sourceAmount=2.5")
// .header("X-Mashape-Key", "")
// .header("X-Mashape-Host", "spoonacular-recipe-food-nutrition-v1.p.mashape.com")
// .end(function (result) {
//   console.log(result.status, result.headers, result.body);
// });


// $.ajax({
//   url: 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/convert?ingredientName=flour&sourceUnit=cups&targetUnit=grams&sourceAmount=2.5', // The URL to the API. You can get this by clicking on "Show CURL example" from an API profile
//   type: 'GET', // The HTTP Method
//   data: {}, // Additional parameters here
//   dataType: 'json',
//   success: function(data) { alert(JSON.stringify(data)); },
//   error: function(err) { alert(err); },
//   beforeSend: function(xhr) {
//     xhr.setRequestHeader("X-Mashape-Key", ""); // Enter here your Mashape key
//     xhr.setRequestHeader("X-Mashape-Host", "spoonacular-recipe-food-nutrition-v1.p.mashape.com");
//   }
// })
// .then(function(resp){
//   console.log(resp);
// });