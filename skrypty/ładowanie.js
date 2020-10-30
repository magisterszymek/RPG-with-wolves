//Ładowanie grafik

//Ekran ładowania
div = document.createElement("DIV");
image = document.getElementById("ladowanieZdjecie");
div.style.backgroundImage = "url('Obrazy/Ładowanie/Ładowanie.png')";
div.style.backgroundPosition = "center";
div.style.backgroundRepeat = "no-repeat";
div.style.backgroundSize = "cover";
div.style.zIndex = "2";
div.className = "wyborNicku";
div.id = "ladowanie";
document.body.appendChild(div);

//Ekran podróży
div = document.createElement("DIV");
image = document.getElementById("ladowanieZdjecie");
div.style.backgroundImage = "url('Obrazy/Ładowanie/Podróż.png')";
div.style.backgroundPosition = "center";
div.style.backgroundRepeat = "no-repeat";
div.style.backgroundSize = "100%";
div.style.backgroundColor = "rgba(0, 0, 0, 0.3)";
div.style.zIndex = "1";
div.className = "wyborNicku";
div.id = "podroz";
document.body.appendChild(div);
setTimeout(function(){ document.getElementById("podroz").setAttribute("hidden", ""); }, 1);

setTimeout(function(){ image.style.backgroundImage = "url('Obrazy/Mapa/Mapa.png')"; }, 1010);
setTimeout(function(){ image.style.backgroundImage = "url('Obrazy/Mapa/PradawnyLas.png')"; }, 2020);
setTimeout(function(){ image.style.backgroundImage = "url('Obrazy/Mapa/ZrujnowanyObóz.png')"; }, 2030);
setTimeout(function(){ image.style.backgroundImage = "url('Obrazy/Tła/Grota.png')"; }, 2040);
setTimeout(function(){ image.style.backgroundImage = "url('Obrazy/Tła/GrzybowePole.png')"; }, 2050);
setTimeout(function(){ image.style.backgroundImage = "url('Obrazy/Tła/PradawnyLas.png')"; }, 2060);
setTimeout(function(){ image.style.backgroundImage = "url('Obrazy/Tła/WieżaMaga.png')"; }, 2070);
setTimeout(function(){ image.style.backgroundImage = "url('Obrazy/Tła/ZrujnowanyObóz.png')"; }, 2080);
setTimeout(function(){ image.style.backgroundImage = "url('Obrazy/Postacie/Wilk.png')"; }, 2190);
setTimeout(function(){ document.getElementById("ladowanie").setAttribute("hidden", ""); }, 3000);
