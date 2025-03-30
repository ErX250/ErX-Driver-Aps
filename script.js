// Haritayı oluştur
const map = L.map('map').setView([41.885, -87.65], 13); // Chicago merkez

// Harita zeminini ekle
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors',
}).addTo(map);

// Araç simgesi tanımla
const carIcon = L.icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/854/854894.png',
  iconSize: [32, 32],
  iconAnchor: [16, 16],
});

// Örnek araç koordinatları
const drivers = [
  [41.89, -87.63],
  [41.88, -87.66],
  [41.882, -87.645],
  [41.887, -87.653],
];

// Araçları haritaya ekle
drivers.forEach(loc => {
  L.marker(loc, { icon: carIcon }).addTo(map);
});

// Bonus noktaları
L.marker([41.885, -87.65]).addTo(map)
  .bindPopup('<div class="bonus-label">🔥 $20 BONUS</div>');

L.marker([41.881, -87.643]).addTo(map)
  .bindPopup('<div class="bonus-label">💰 $10 EXTRA</div>');
