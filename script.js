let map, userMarker, tripCount = 0, earnings = 0;

// Giriş yapınca app açılıyor
function enterApp() {
  document.getElementById("login-screen").style.display = "none";
  document.getElementById("app").style.display = "block";
  initMap();
}

// Harita başlat
function initMap() {
  map = L.map('map').setView([41.885, -87.65], 13);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors',
  }).addTo(map);

  // Araç ikonları
  const carIcon = L.icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/854/854894.png',
    iconSize: [32, 32],
    iconAnchor: [16, 16],
  });

  const locations = [
    [41.89, -87.63],
    [41.88, -87.66],
    [41.887, -87.653],
  ];

  locations.forEach((loc) => {
    L.marker(loc, { icon: carIcon }).addTo(map);
  });

  // Bonuslar
  L.marker([41.885, -87.65]).addTo(map)
    .bindPopup('<div class="bonus-label">🔥 $20 BONUS</div>');

  L.marker([41.881, -87.643]).addTo(map)
    .bindPopup('<div class="bonus-label">💰 $10 EXTRA</div>');
}

// Shift başlat
function startShift() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;
      if (userMarker) map.removeLayer(userMarker);
      userMarker = L.marker([lat, lng]).addTo(map)
        .bindPopup("You're here").openPopup();
      map.setView([lat, lng], 14);

      tripCount++;
      earnings += 14.75;
      updateStats();
    });
  } else {
    alert("Geolocation not supported!");
  }
}

// Shift durdur
function stopShift() {
  if (userMarker) map.removeLayer(userMarker);
}

// Kazanç güncelle
function updateStats() {
  document.getElementById("trips").textContent = tripCount;
  document.getElementById("total").textContent = earnings.toFixed(2);
}

// Gece modu aç/kapat
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}
