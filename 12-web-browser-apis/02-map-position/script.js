const map = L.map('map').setView([0, 0], 2);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// L.marker([51.5, -0.09])
//     .addTo(map)
//     .bindPopup('A pretty CSS popup.<br> Easily customizable.')
//     .openPopup();

const marker = L.marker([0, 0], 2).addTo(map);
navigator.geolocation.getCurrentPosition(function (pos) {
    const lat = pos.coords.latitude;
    const lang = pos.coords.longitude;
    marker.setLatLng([lat, lng]).update();
    map.setView([lat, lng], 13);
    map.bindPopup('<strong>Hello World</strong><br>This is my location');
})

