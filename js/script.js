window.addEventListener('load', function() {
    let map = L.map('map').setView([51.15472, 4.57775], 16);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    let Marker = L.marker([51.15472, 4.57775]).addTo(map)
        .bindPopup('<strong>Mijn woonplaats</strong><br>Ranstsesteenweg 34C')
        .openPopup();
});