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
setTimeout(function(){ 
	document.getElementById("podroz").setAttribute("hidden", "");
	document.getElementById("dalej1").setAttribute("hidden", "");
	document.getElementById("dalej2").setAttribute("hidden", "");
	document.getElementById("dalej3").setAttribute("hidden", "");	
}, 1);

setTimeout(function(){ image.style.backgroundImage = "url('Obrazy/Ładowanie/Dalej.png')"; }, 1000);
setTimeout(function(){ image.style.backgroundImage = "url('Obrazy/Ładowanie/Podróż.png')"; }, 1010);
setTimeout(function(){ image.style.backgroundImage = "url('Obrazy/Mapa/Mapa.png')"; }, 1020);
setTimeout(function(){ image.style.backgroundImage = "url('Obrazy/Mapa/PradawnyLas.png')"; }, 2030);
setTimeout(function(){ image.style.backgroundImage = "url('Obrazy/Mapa/ZrujnowanyObóz.png')"; }, 2040);
setTimeout(function(){ image.style.backgroundImage = "url('Obrazy/Tła/Grota.png')"; }, 2050);
setTimeout(function(){ image.style.backgroundImage = "url('Obrazy/Tła/GrzybowePole.png')"; }, 2060);
setTimeout(function(){ image.style.backgroundImage = "url('Obrazy/Tła/PradawnyLas.png')"; }, 2070);
setTimeout(function(){ image.style.backgroundImage = "url('Obrazy/Tła/WieżaMaga.png')"; }, 2080);
setTimeout(function(){ image.style.backgroundImage = "url('Obrazy/Tła/ZrujnowanyObóz.png')"; }, 2090);
setTimeout(function(){ image.style.backgroundImage = "url('Obrazy/Postacie/Wilk.png')"; }, 2100);
setTimeout(function(){ image.style.backgroundImage = "url('Obrazy/Mapa/PradawnyLasNaprawionaDroga.png')"; }, 2110);
setTimeout(function(){ image.style.backgroundImage = "url('Obrazy/Mapa/PradawnyLasNaprawionyMost.png')"; }, 2120);
setTimeout(function(){ document.getElementById("ladowanie").setAttribute("hidden", ""); }, 3000);
