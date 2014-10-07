var post_image, post_title, post_made, post_price, post_currency;

etsyData.results.forEach(function(x){

  post_title = x.title;
  console.log(post_title);

  post_image = x.Images.forEach(function(a){
    a.url_fullxfull;
  });

  console.log(post_image);

});