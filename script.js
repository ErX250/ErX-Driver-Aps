
function startDriving() {
  alert("Sürüşe başlandı!");
}

var map = L.map('map').setView([28.3747, -81.5494], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 18,
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);
