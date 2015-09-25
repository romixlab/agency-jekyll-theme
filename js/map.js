ymaps.ready(init);

var myMap;

function init(){ 
    myMap = new ymaps.Map("map", {
        center: [55.76, 37.64],
                zoom: 10
    }); 
            
    $.getJSON('/data/placemarks.json', function(data) {
        for(var i = 0; i < data.length; ++i) {
            var placemark = new ymaps.Placemark(data[i].coordinate, {
                hintContent: data[i].hintContent,
                balloonContent: data[i].balloonContent
            });
            myMap.geoObjects.add(placemark);
        }
    })    
}

