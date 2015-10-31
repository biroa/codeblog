/* google maps */
var myLatlng = new google.maps.LatLng(53.2781227,-6.2062544);

var mapInitOpts = {
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    center: myLatlng,
    zoom: 14
};

var map = new google.maps.Map(document.getElementById("my-location"), mapInitOpts);

var marker = new google.maps.Marker({
    position: myLatlng, 
    map: map, 
    title: "My Office" 
});


$('a[href="#contact"]').on('shown', function (e){

    center_map();

    google.maps.event.trigger(map, 'resize'); 
    moveTo();

});

$(window).on('resize', function (e){
    
    center_map();

});

function center_map(){
    
    window.setTimeout(function() {
        map.panTo(marker.getPosition()); 
        }, 500);

};