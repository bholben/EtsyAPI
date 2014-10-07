var container = $('#post'),
post_image, post_title, post_made, post_price, post_currency, post_item;

etsyData.results.forEach(function(x){

  x.Images.forEach(function(a){
    post_image = '<img src="' + a.url_fullxfull + '">';
  });

  post_title = '<h4 class="title">' + x.title + '</h4>';

  post_made = '<span class="whoMade">' + x.Shop.shop_name + '</span>';

  post_currency = '<span class="currency">' + x.currency_code + '</span>';

  post_price = '<span class="price">' + x.price + " " + post_currency + '</span>';

  post_item = '<li>' + post_image + post_title + post_made + post_price + '</li>';

  console.log(post_item);

  container.append(post_item);

});
