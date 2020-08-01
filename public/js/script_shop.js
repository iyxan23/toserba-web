// Global variables
var col_count = 3; // default value

// Ambil data carousel
fetch("https://toserba-project.firebaseio.com/carousel.json")
.then((response) => {
    return response.json();
})
.then((data) => {
    var list_carousel = document.getElementById("carousel-imgs");
    var indicators = document.getElementById("indicators");
    var index = 0;
    for (x in data) {
        var isactive_indicators = '<li data-target="#carouselIndicators" data-slide-to="' + index + '"></li>';
        var isactive = '<div class="carousel-item">';
        if (index == 0) {
            isactive = '<div class="carousel-item active">'
            var isactive_indicators = '<li data-target="#carouselIndicators" data-slide-to="' + index + '" class="active"></li>';
        }
        indicators.innerHTML += isactive_indicators;
        list_carousel.innerHTML += isactive +
        '<img class="d-block" style="width: 100%; max-height: 75vh; object-fit: cover;" src="' + data[x]["url"] + '" alt="' + data[x]["title"] + '">'+
    '</div>';

        index++;
    }
    return null;
});

fetch("https://toserba-project.firebaseio.com/products.json")
.then((reponse) => {
    return reponse.json();
})
.then((data) => {
    var products = document.getElementById("products");
    for (x in data) {
        var rating = "";
        var rating_num = data[x]["rating"];
        for (var index = 5; index != 0; index--) {
            if (rating_num > 0) {
                rating += "&#9733;";
            } else {
                rating += "&#9734;";
            }
            rating_num--;
        }
        products.innerHTML += '<div class="col-lg-4 col-md-6 mb-4">' + 
                            '<div class="card h-100">' +
                            '<a href="#"><img style="width: 100%; max-height: 400px;" class="card-img-top" src="' + data[x]["img"] + '" alt=""></a>' +
                            '<div class="card-body">' +
                                '<h4 class="card-title">' +
                                '<a href="#">' + data[x]["title"] + '</a>' +
                                '</h4>' +
                                '<h5>' + data[x]["price"] + '</h5>' +
                                '<p class="card-text">' + data[x]["desc"] + '</p>' +
                            '</div>' +
                            '<div class="card-footer">' +
                                '<small class="text-muted">' + rating + '</small>' +
                            '</div>' +
                            '</div>' +
                        '</div>'
    }
    return null;
});

// Ambil data lain-lain
fetch("https://toserba-project.firebaseio.com/data.json")
.then((reponse) => {
    return reponse.json();
})
.then((data) => {
    col_count = data["item-col"];
    console.log(col_count);
    return null;
})