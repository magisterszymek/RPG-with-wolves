//Ładowanie grafik
div = document.createElement("DIV");
image = document.getElementById("ladowanieZdjecie");
div.style.backgroundImage = "url('Obrazy/Ładowanie.png')";
div.style.backgroundPosition = "center";
div.style.backgroundRepeat = "no-repeat";
div.style.backgroundSize = "cover";
div.style.zIndex = "10";
div.className = "wyborNicku";
div.id = "ladowanie";
document.body.appendChild(div);
setTimeout(function(){ image.style.backgroundImage = "url('Obrazy/Mapa/Mapa.png')"; }, 1010);
setTimeout(function(){ image.style.backgroundImage = "url('Obrazy/Mapa/PradawnyLas.png')"; }, 2020);
setTimeout(function(){ image.style.backgroundImage = "url('Obrazy/Mapa/ZrujnowanyObóz.png')"; }, 2030);
setTimeout(function(){ image.style.backgroundImage = "url('Obrazy/Tła/Grota.png')"; }, 2040);
setTimeout(function(){ image.style.backgroundImage = "url('Obrazy/Tła/GrzybowePole.png')"; }, 2050);
setTimeout(function(){ image.style.backgroundImage = "url('Obrazy/Tła/PradawnyLas.png')"; }, 2060);
setTimeout(function(){ image.style.backgroundImage = "url('Obrazy/Tła/WieżaMaga.png')"; }, 2070);
setTimeout(function(){ image.style.backgroundImage = "url('Obrazy/Tła/ZrujnowanyObóz.png')"; }, 2080);
setTimeout(function(){ image.style.backgroundImage = "url('Obrazy/Przeciwnicy/Drwal.png')"; }, 2090);
setTimeout(function(){ image.style.backgroundImage = "url('Obrazy/Przeciwnicy/Kowal.png')"; }, 2100);
setTimeout(function(){ image.style.backgroundImage = "url('Obrazy/Przeciwnicy/Leżące_drzewo.png')"; }, 2110);
setTimeout(function(){ image.style.backgroundImage = "url('Obrazy/Przeciwnicy/Magiczne_pole.png')"; }, 2120);
setTimeout(function(){ image.style.backgroundImage = "url('Obrazy/Przeciwnicy/Grzybiarz.png')"; }, 2130);
setTimeout(function(){ image.style.backgroundImage = "url('Obrazy/Przeciwnicy/Pułapka.png')"; }, 2140);
setTimeout(function(){ image.style.backgroundImage = "url('Obrazy/Przeciwnicy/Myśliwy.png')"; }, 2150);
setTimeout(function(){ image.style.backgroundImage = "url('Obrazy/Przeciwnicy/Młody_myśliwy.png')"; }, 2160);
setTimeout(function(){ image.style.backgroundImage = "url('Obrazy/Przeciwnicy/Szczurzy_strażnik.png')"; }, 2170);
setTimeout(function(){ image.style.backgroundImage = "url('Obrazy/Przeciwnicy/Wieśniak.png')"; }, 2180);
setTimeout(function(){ document.getElementById("ladowanie").setAttribute("hidden", ""); }, 3000);
