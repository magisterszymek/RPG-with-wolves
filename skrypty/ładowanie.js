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
setTimeout(function(){ image.style.backgroundImage = "url('Obrazy/Mapa/Mapa.png')"; }, 1);
setTimeout(function(){ image.style.backgroundImage = "url('Obrazy/Mapa/PradawnyLas.png')"; }, 2);
setTimeout(function(){ image.style.backgroundImage = "url('Obrazy/Mapa/ZrujnowanyObóz.png')"; }, 3);
setTimeout(function(){ image.style.backgroundImage = "url('Obrazy/Tła/Grota.png')"; }, 4);
setTimeout(function(){ image.style.backgroundImage = "url('Obrazy/Tła/GrzybowePole.png')"; }, 5);
setTimeout(function(){ image.style.backgroundImage = "url('Obrazy/Tła/PradawnyLas.png')"; }, 6);
setTimeout(function(){ image.style.backgroundImage = "url('Obrazy/Tła/WieżaMaga.png')"; }, 7);
setTimeout(function(){ image.style.backgroundImage = "url('Obrazy/Tła/ZrujnowanyObóz.png')"; }, 8);
setTimeout(function(){ image.style.backgroundImage = "url('Obrazy/Przeciwnicy/Drwal.png')"; }, 9);
setTimeout(function(){ image.style.backgroundImage = "url('Obrazy/Przeciwnicy/Kowal.png')"; }, 10);
setTimeout(function(){ image.style.backgroundImage = "url('Obrazy/Przeciwnicy/Leżące_drzewo.png')"; }, 11);
setTimeout(function(){ image.style.backgroundImage = "url('Obrazy/Przeciwnicy/Magiczne_Pole.png')"; }, 12);
setTimeout(function(){ image.style.backgroundImage = "url('Obrazy/Przeciwnicy/Grzybiarz.png')"; }, 13);
setTimeout(function(){ image.style.backgroundImage = "url('Obrazy/Przeciwnicy/Pułapka.png')"; }, 14);
setTimeout(function(){ image.style.backgroundImage = "url('Obrazy/Przeciwnicy/Myśliwy.png')"; }, 15);
setTimeout(function(){ image.style.backgroundImage = "url('Obrazy/Przeciwnicy/Młody_myśliwy.png')"; }, 16);
setTimeout(function(){ image.style.backgroundImage = "url('Obrazy/Przeciwnicy/Szczurzy_strażnik.png')"; }, 17);
setTimeout(function(){ image.style.backgroundImage = "url('Obrazy/Przeciwnicy/Wieśniak.png')"; }, 18);
setTimeout(function(){ document.getElementById("ladowanie").setAttribute("hidden", ""); }, 3000);
