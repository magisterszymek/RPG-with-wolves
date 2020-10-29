//Ładowanie grafik
document.getElementById("ladowanie").style.backgroundImage = "url('Obrazy/Ładowanie.png')";
document.getElementById("ladowanie").style.backgroundPosition = "center";
document.getElementById("ladowanie").style.backgroundRepeat = "no-repeat";
document.getElementById("ladowanie").style.backgroundSize = "cover";
document.getElementById("ladowanie").style.zIndex = "2";
var image = new Image(1, 1);
image.src = "Obrazy/Mapa/Mapa.png";
image.src = "Obrazy/Mapa/PradawnyLas.png";
image.src = "Obrazy/Mapa/ZrujnowanyObóz.png";
image.src = "Obrazy/Tła/Grota.png"
image.src = "Obrazy/Tła/GrzybowePole.png"
image.src = "Obrazy/Tła/PradawnyLas.png"
image.src = "Obrazy/Tła/WieżaMaga.png"
image.src = "Obrazy/Tła/ZrujnowanyObóz.png"
image.src = "Obrazy/Przeciwnicy/Drwal.png"
image.src = "Obrazy/Przeciwnicy/Kowal.png"
image.src = "Obrazy/Przeciwnicy/Leżące_drzewo.png"
image.src = "Obrazy/Przeciwnicy/Magiczne_Pole.png"
image.src = "Obrazy/Przeciwnicy/Grzybiarz.png"
image.src = "Obrazy/Przeciwnicy/Pułapka.png"
image.src = "Obrazy/Przeciwnicy/Myśliwy.png"
image.src = "Obrazy/Przeciwnicy/Młody_myśliwy.png"
image.src = "Obrazy/Przeciwnicy/Szczurzy_strażnik.png"
image.src = "Obrazy/Przeciwnicy/Wieśniak.png"
setInterval(document.getElementById("ladowanie").setAttribute("hidden", ""), 3000);