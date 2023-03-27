function initMap() {
    const position = { 
    lat: -25.363, 
    lng: 131.044 
};
  

const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: position
})


const marker = new google.maps.Marker({
  position: position,
  map,
  title: "Posición inicial"
})
};