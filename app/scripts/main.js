var container = $('#posts'),
post_image, post_title, post_made, post_price, post_currency, post_item;


etsyData.results.forEach(function(x){

    x.Images.forEach(function(a){
      post_image = '<img src="' + a.url_170x135 + '">';
    });

    post_title = '<a href="#" class="title">' + x.title + '</a>';

    post_made = '<a href="#" class="whoMade">' + x.Shop.shop_name + '</a>';

    post_currency = '<span class="currency">' + x.currency_code + '</span>';

    post_price = '<span class="price">' + x.price + " " + post_currency + '</span>';

    post_icons = '<div class="icons"><a class="like" href="#"></a><a class="options" href="#"></a></div>'

    post_item = '<li>' + post_image + post_icons + post_title + post_made + post_price + '</li>';

    container.append(post_item);

});
