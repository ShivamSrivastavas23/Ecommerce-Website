// Initialize and add the map
function initMap() {
    // The location of Uluru
    var russia = { lat: 3.51602, lng: -2.1969 };
    // The map, centered at Uluru
    var universityLocation = { lat: 26.9167, lng: 81.0000 }; // Example coordinates

var map = new google.maps.Map(
        document.getElementById('map'), { zoom: 15, center: universityLocation });

// You can also add a marker:
var marker = new google.maps.Marker({
    position: universityLocation,
    map: map,
    title: 'Shri Ramswaroop Memorial University'
});
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({ position: russia, map: map });
}


// toggle menu
var MenuItems = document.getElementById("menu-items");

MenuItems.style.maxHeight = "0px";

function menutoggle(){
    if(MenuItems.style.maxHeight == "0"){
        MenuItems.style.maxHeight = "200px";
    } else {
        MenuItems.style.maxHeight = "0px";
    }
}
