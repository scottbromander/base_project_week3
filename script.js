var cityData = null;
var cityHtml = null;


function createCities(){
    for(var i = 0; i < cityData.locations.length; i++){
        $("#more-stuff").append(cityHtml);
        var context = $("#more-stuff").children().last();
        context.find('.location-name').text(cityData.locations[i].location);
        context.find('.city-population').text(cityData.locations[i].population);
        context.hide().slideDown(i * 200);
    }
}

$(document).ready(function(){

    if(cityData === null){
        $.get('data.json', function(data){
            cityData = data;
        });
    } else {
        console.log("You already got the city data");
    }


    $("#get-info-btn").on('click', function(){
        if(cityHtml === null){
            $.get('location.html', function(data){
                cityHtml = data;
                $("#more-stuff").empty();
                createCities();
            });


        } else {
            $("#more-stuff").empty();
            createCities();
        }


    });

    $("#more-stuff").on('click', '.btn-remove', function(){
       $(this).parent().slideUp(function() {
          $(this).remove();
       });
    });
});

