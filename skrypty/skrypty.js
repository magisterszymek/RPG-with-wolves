// ---------- Zmienne ----------

// Przedmioty
	// Bronie ["nazwa", "opis", obrażenia, waga, rodzaj, cena, ilość, założony]
		var prdm_bron_a_1 = ["Drewniany miecz", "Nie masz nic twardszego?", 5, 1, 1, 10, 0, 0];
		var prdm_bron_a_2 = ["Drewniany topór", "Świeżo wystrugany.", 8, 2, 1, 15, 0, 0];
		var prdm_bron_a_3 = ["Drewniany miecz", "Nawet trochę ostry.", 3, 1, 1, 7, 0, 0];
			
	// Zbroje ["nazwa", "opis", pancerz, waga, rodzaj, cena, ilość, założony]
		var prdm_zbroja_a_1 = ["Drewniany hełm", "Ochroni przed jabłkami i kokosami.", 2, 1, 1, 13, 0, 0];	// Rodzaj 1 - Hełm
		var prdm_zbroja_a_2 = ["Drewniany napierśnik", "Wytrzyma kilka uderzeń.", 3, 1, 2, 25, 0, 0];		// Rodzaj 2 - Napierśnik
		var prdm_zbroja_a_3 = ["Drewniane spodnie", "Naprawdę?", 2, 1, 3, 17, 0, 0];						// Rodzaj 3 - Spodnie
		var prdm_zbroja_a_4 = ["Drewniane buty", "Niewygodne ale... nie, nie są dobre.", 1, 1, 4, 10, 0, 0];	// Rodzaj 4 - Buty
			
	// Inne przedmioty ["nazwa", "opis", cena, ilość]
		var prdm_1 = ["Różowy kwiatek", "Pachnie trawą.", 3, 0];
		var prdm_3 = ["Połamany miecz", "Nadaje się już tylko na przetopienie.", 5, 0];
		
// Przeciwnicy ["nazwa", "opis", zdrowie, pancerz, obrażenia, zakres, trudność]
	var prze_las_ = [
	["Wieśniak", "Musiał się zgubić.", 30, 2, 3, 2, 1],
	["Traper", "Ustawił kolejne pułapki.", 50, 5, 3, 1, 2],
	["Myśliwy", "Przygotowany na walkę.", 50, 2, 7, 2, 2]
	];
	var prze_gory_ = [
	["Krasnoludek", "Mały krasnal.", 30, 5, 3, 2, 1],
	["Krasnal", "Mały krasnolud.", 50, 7, 5, 1, 2],
	["Krasnolud", "Krasnolud.", 70, 10, 7, 1, 2]
	];
		
// Statystyki
	// Gracz
		var nick = "Ruffus";
		var pancerzHelm = 0;
		var pancerzNapiersnik = 0;
		var pancerzSpodnie = 0;
		var pancerzButy = 0;
		var pancerzKoncowy = 0;
		var waluta = 20;
		var zdrowieBazowe = 50;		// Zdrowie Bazowe
		var zdrowieEkwipunek = 50;	// zdrowieBazowe + Zdrowie z ekwipunku
		var zdrowieKoncowe = 50;	// zdrowieEkwipunek + Zdrowie z buffów
		var obrazeniaBazowe = 10;	// Obrażenia bazowe
		var obrazeniaEkwipunek = 10;// obrażeniaBazowe + Obrażenia z ekwipunku
		var obrazeniaKoncowe = 10;	// obrażeniaEkwipunek + Obrażenia z wybranego ciosu
		var szybkoscBazowa = 1;	// Szybkość bazowa
		var szybkoscEkwipunek = 1;	// szybkoscBazowa + Szybkość z ekwipunku
		var szybkoscKoncowa	= 1;		// szybkoscEkwipunek + Szybkość z wybranego ciosu

	// Przeciwnik
		var nazwaPrzeciwnik = 0;
		var opisPrzeciwnik = 0;
		var zdrowiePrzeciwnik = 0;
		var pancerzPrzeciwnik = 0;
		var obrazeniaPrzeciwnik = 0;
		var zakresPrzeciwnik = 0;
		
	// Ekwipunek
		var zalozonaBron = "brak";
		var zalozonyHelm = "brak";
		var zalozonyNapiersnik = "brak";
		var zalozonaZbroja = "brak";
		var slotWolny = 1;
		var itemIdMax = 1;
		
	// Walka
		var blokadaWalki = false;
		var walkaTrwa = false;
		var walkaKoniec = false;
		var wybranyCios = "zwykly";
		var mnoznikObrazenCiosu = [1, 1.25, 0.65]; // Mnożniki obrażeń ciosów [zwykły, potężny, szybki]
		var szybkoscCiosu = [1, 1, 2] // Szybkości ciosu (ile razy na turę) [zwykły, potężny, szybki]
		var tymczasoweZdrowie = 0; // Służy do przywracania zdrowia po walce
		
	// HTML
		var maksymalneZdrowie = zdrowieKoncowe;
		var maksymalneZdrowiePrzeciwnik = zdrowiePrzeciwnik;
		
	// Textbox
		var id = 1;
		var tekstId = "tekstId1";
		var odwrotneTekstId = "tekstId1";
		var tekst = "&nbsp";
		var arr = tekst.split(' ');
		
	// Mapa
		var blokadaGory = true;
		
// ---------- Koniec zmiennych ----------

function zakladka(NrZakladki) {
	switch(NrZakladki){
		case 0:{
		document.getElementById("zakladkaWalka").style.zIndex="0";
		document.getElementById("zakladkaEkwipunek").style.zIndex="-1";
		document.getElementById("zakladkaMenu").style.zIndex="-1";
		document.getElementById("zakladkaUstawienia").style.zIndex="-1";
		break;
		}
		case 1:{
		document.getElementById("zakladkaWalka").style.zIndex="-1";
		document.getElementById("zakladkaEkwipunek").style.zIndex="0";
		document.getElementById("zakladkaMenu").style.zIndex="-1";
		document.getElementById("zakladkaUstawienia").style.zIndex="-1";
		break;
		}
		case 2:{
		document.getElementById("zakladkaWalka").style.zIndex="-1";
		document.getElementById("zakladkaEkwipunek").style.zIndex="-1";
		document.getElementById("zakladkaMenu").style.zIndex="0";
		document.getElementById("zakladkaUstawienia").style.zIndex="-1";
		break;
		}
		case 3:{
		document.getElementById("zakladkaWalka").style.zIndex="-1";
		document.getElementById("zakladkaEkwipunek").style.zIndex="-1";
		document.getElementById("zakladkaMenu").style.zIndex="-1";
		document.getElementById("zakladkaUstawienia").style.zIndex="0";
		break;
		}
	}
}

	// Funkcja odpowiedzialna za inicjalizację walki i wywoływanie loopa
function rozpocznijWalke(biom, trudnosc){
	if(zdrowieKoncowe >= 1 && blokadaWalki == false && walkaTrwa == false){
		wpiszTekst("linia");
		wpiszTekst("linia");
		wybierzPrzeciwnika(biom, trudnosc);
		wpiszTekst("walkaPoczatek", nazwaPrzeciwnik);
		blokadaWalki = true;
		interval = setInterval(walka, 300);
	}
}

	// Funkcja odpowiedzialna za loopa walki
function walka(){
	if(walkaTrwa == false) { tymczasoweZdrowie = zdrowieKoncowe; }
	walkaTrwa = true;
		kalkulacja = ((obrazeniaPrzeciwnik - (zakresPrzeciwnik / 2)) + (Math.floor(Math.random() * zakresPrzeciwnik + 1))) - pancerzKoncowy; // Obliczanie realnych obrażeń przeciwnika po trafieniu w pancerz
		if(kalkulacja < 0){
			kalkulacja = 0; // Zerowanie obrażeń jeśli mniejsze od zera
		}
		zdrowieKoncowe = zdrowieKoncowe - kalkulacja;
		wpiszTekst("walka", nazwaPrzeciwnik, nick, kalkulacja);
		kalkulacja = (obrazeniaKoncowe - pancerzPrzeciwnik) * szybkoscKoncowa // Obliczanie realnych obrażeń gracza po trafieniu w pancerz
		if(kalkulacja < 0){
			kalkulacja = 0; // Zerowanie obrażeń jeśli mniejsze od zera
		}
		zdrowiePrzeciwnik = zdrowiePrzeciwnik - kalkulacja;
		wpiszTekst("walka", nick, nazwaPrzeciwnik, kalkulacja);
		zdrowieProcent = (zdrowieKoncowe / maksymalneZdrowie) * 100
		zdrowieProcentPrzeciwnik = (zdrowiePrzeciwnik / maksymalneZdrowiePrzeciwnik) * 100
		document.getElementsByClassName("zdrowieKoncowe")[0].style.width = zdrowieProcent + "%"
		document.getElementsByClassName("zdrowiePrzeciwnik")[0].style.width = zdrowieProcentPrzeciwnik + "%"
		document.getElementById("zdrowieKoncowe").innerHTML = zdrowieKoncowe;
		document.getElementById("zdrowiePrzeciwnik").innerHTML = zdrowiePrzeciwnik;
		if(zdrowieKoncowe <= 0 || zdrowiePrzeciwnik <= 0){
			if(zdrowieKoncowe <= 0){
				wpiszTekst("koniecWalki", nazwaPrzeciwnik, nick);
			} else if(zdrowiePrzeciwnik <= 0){
				wpiszTekst("koniecWalki", nick, nazwaPrzeciwnik);
				loot(nazwaPrzeciwnik);
				loot(nazwaPrzeciwnik);
				loot(nazwaPrzeciwnik);
				loot(nazwaPrzeciwnik);
				loot(nazwaPrzeciwnik);
				loot(nazwaPrzeciwnik);
				loot(nazwaPrzeciwnik);
				loot(nazwaPrzeciwnik);
				loot(nazwaPrzeciwnik);
				loot(nazwaPrzeciwnik);
				loot(nazwaPrzeciwnik);
				loot(nazwaPrzeciwnik);
				loot(nazwaPrzeciwnik);
				loot(nazwaPrzeciwnik);
				loot(nazwaPrzeciwnik);
				loot(nazwaPrzeciwnik);
				loot(nazwaPrzeciwnik);
				loot(nazwaPrzeciwnik);
				loot(nazwaPrzeciwnik);
				loot(nazwaPrzeciwnik);
				loot(nazwaPrzeciwnik);
				loot(nazwaPrzeciwnik);
				loot(nazwaPrzeciwnik);
				loot(nazwaPrzeciwnik);
				loot(nazwaPrzeciwnik);
				loot(nazwaPrzeciwnik);
			}
			clearInterval(interval);
			walkaKoniec = true;
			walkaTrwa = false;
			blokadaWalki = false;
			zdrowieKoncowe = tymczasoweZdrowie;
			tymczasoweZdrowie = 0;
			maksymalneZdrowiePrzeciwnik = 0;
			nazwaPrzeciwnik = "Brak przeciwnika";
			obraz(-1);
			opisPrzeciwnik = "";
			zdrowiePrzeciwnik = 0;
			pancerzPrzeciwnik = 0;
			obrazeniaPrzeciwnik = 0;
			zakresPrzeciwnik = 0;
			zdrowieProcent = (zdrowieKoncowe / maksymalneZdrowie) * 100
			zdrowieProcentPrzeciwnik = (zdrowiePrzeciwnik / maksymalneZdrowiePrzeciwnik) * 100
			document.getElementById("nick").innerHTML = nick;
			document.getElementById("zdrowieKoncowe").innerHTML = zdrowieKoncowe;
			document.getElementById("zdrowiePrzeciwnik").innerHTML = zdrowiePrzeciwnik;
			document.getElementById("pancerzKoncowy").innerHTML = pancerzKoncowy;
			document.getElementById("pancerzPrzeciwnik").innerHTML = pancerzPrzeciwnik;
			document.getElementById("nazwaPrzeciwnika").innerHTML = nazwaPrzeciwnik;
			document.getElementById("maksymalneZdrowie").innerHTML = maksymalneZdrowie;
			document.getElementById("maksymalneZdrowiePrzeciwnik").innerHTML = maksymalneZdrowiePrzeciwnik;
			document.getElementsByClassName("zdrowieKoncowe")[0].style.width = zdrowieProcent + "%"
			document.getElementsByClassName("zdrowiePrzeciwnik")[0].style.width = "0%"
		}
		kalkulacja = 0;
}
  
function obraz(losowe, biom) {
	if (losowe == -1) {
		document.getElementById("obrazPrzeciwnik").src = "Obrazy/Przeciwnicy/Brak_przeciwnika.png";
	}
	else {
		switch(biom){
			case "las":{
				document.getElementById("obrazPrzeciwnik").src = "Obrazy/Przeciwnicy/" + prze_las_[losowe][0] + ".png";
				break;
			}
			case "gory":{
				document.getElementById("obrazPrzeciwnik").src = "Obrazy/Przeciwnicy/" + prze_gory_[losowe][0] + ".png";
				break;
			}
		}
	}
}
  
  // Wybieranie przeciwnika
function wybierzPrzeciwnika(biom, trudnosc){
	let losowe = Math.floor(Math.random() * 3);
	obraz(losowe, biom);
	switch(biom){
		case "las":{
			nazwaPrzeciwnik = prze_las_[losowe][0];
			opisPrzeciwnik = prze_las_[losowe][1];
			zdrowiePrzeciwnik = prze_las_[losowe][2];
			pancerzPrzeciwnik = prze_las_[losowe][3];
			obrazeniaPrzeciwnik = prze_las_[losowe][4];
			zakresPrzeciwnik = prze_las_[losowe][5];
			break;
		}
		case "gory":
		{
			nazwaPrzeciwnik = prze_gory_[losowe][0];
			opisPrzeciwnik = prze_gory_[losowe][1];
			zdrowiePrzeciwnik = prze_gory_[losowe][2];
			pancerzPrzeciwnik = prze_gory_[losowe][3];
			obrazeniaPrzeciwnik = prze_gory_[losowe][4];
			zakresPrzeciwnik = prze_gory_[losowe][5];
			break;
		}
	}
	maksymalneZdrowiePrzeciwnik = zdrowiePrzeciwnik;
	maksymalneZdrowie = zdrowieKoncowe;
	zdrowieProcent = (zdrowieKoncowe / maksymalneZdrowie) * 100
	zdrowieProcentPrzeciwnik = (zdrowiePrzeciwnik / maksymalneZdrowiePrzeciwnik) * 100
	document.getElementById("nick").innerHTML = nick;
	document.getElementById("zdrowieKoncowe").innerHTML = zdrowieKoncowe;
	document.getElementById("zdrowiePrzeciwnik").innerHTML = zdrowiePrzeciwnik;
	document.getElementById("pancerzKoncowy").innerHTML = pancerzKoncowy;
	document.getElementById("pancerzPrzeciwnik").innerHTML = pancerzPrzeciwnik;
	document.getElementById("nazwaPrzeciwnika").innerHTML = nazwaPrzeciwnik;
	document.getElementById("maksymalneZdrowie").innerHTML = maksymalneZdrowie;
	document.getElementById("maksymalneZdrowiePrzeciwnik").innerHTML = maksymalneZdrowiePrzeciwnik;
	document.getElementsByClassName("zdrowieKoncowe")[0].style.width = zdrowieProcent + "%"
	document.getElementsByClassName("zdrowiePrzeciwnik")[0].style.width = zdrowieProcentPrzeciwnik + "%"
}

	// Wybieranie ciosu ["zwykly", "potezny", "szybki"]
function wybierzCios(nazwaCiosu){
	wybranyCios = nazwaCiosu;
	switch(nazwaCiosu){
		case "zwykly":{
			obrazeniaKoncowe = obrazeniaEkwipunek * mnoznikObrazenCiosu[0];
			szybkoscKoncowa = szybkoscEkwipunek * szybkoscCiosu[0];
			break;
		}
		case "potezny":{
			obrazeniaKoncowe = obrazeniaEkwipunek * mnoznikObrazenCiosu[1];
			szybkoscKoncowa = szybkoscEkwipunek * szybkoscCiosu[1];
			break;
		}
		case "szybki":{
			obrazeniaKoncowe = obrazeniaEkwipunek * mnoznikObrazenCiosu[2];
			szybkoscKoncowa = szybkoscEkwipunek * szybkoscCiosu[2];
			break;
		}
	}
}
		
	// Wybieranie loot-u
function loot(nazwaPrzeciwnik){
	switch(nazwaPrzeciwnik){
		case "Wieśniak":{
			if(blokadaGory == true){
				document.getElementsByClassName("przyciskGory")[0].style.display = "inline";
				wpiszTekst("odblokowanieLokacji", "Góry");
				blokadaGory = false;
			}
			utworzPrzedmiot("prdm_zbroja_a_1", "helm", "Obrazy/Przedmioty/Hełm.png");
			break;
		}
		case "Traper":{
			if(blokadaGory == true){
				document.getElementsByClassName("przyciskGory")[0].style.display = "inline";
				wpiszTekst("odblokowanieLokacji", "Góry");
				blokadaGory = false;
			}
			losowe = Math.floor(Math.random() * 10) + 1;
				if(losowe <= 4){ 
					break;
				} else if(losowe >= 5 && losowe <= 7){
					utworzPrzedmiot("prdm_zbroja_a_3", "spodnie", "Obrazy/Przedmioty/Spodnie.png");
				} else if(losowe >= 8 && losowe <= 10){
					utworzPrzedmiot("prdm_zbroja_a_2", "napiersnik", "Obrazy/Przedmioty/Napierśnik.png");
				}
			break;
		}
		case "Myśliwy":{
			if(blokadaGory == true){
				document.getElementsByClassName("przyciskGory")[0].style.display = "inline";
				wpiszTekst("odblokowanieLokacji", "Góry");
				blokadaGory = false;
			}
			utworzPrzedmiot("prdm_zbroja_a_4", "buty", "Obrazy/Przedmioty/Buty.png");
			break;
		}
		case "Krasnoludek":{
			break;
		}
		case "Krasnal":{
			break;
		}
		case "Krasnolud":{
			break;
		}
	}
	//document.getElementById("slot50").appendChild(item);
}

	// Funkcja do wpisywania tekstu
function wpiszTekst(rodzaj, postacPierwsza, postacDruga, liczba){
	var pasek = document.createElement('i');
	var pasekBR = document.createElement('br');	
	switch(rodzaj){
		case "walka":{ // Funkcja wywoływana podczas walki
			if(postacDruga == nick){
				var tekst = " " + postacPierwsza + " " + "zadał" + " " + "Ci" + " "+ liczba + " " + "obrażeń!"; // Jeśli przeciwnik zadał obrażenia
			} else if(postacPierwsza == nick){
				var tekst = " " + "Zadałeś/aś" + " " + "przeciwnikowi" + " " + liczba + " " + "obrażeń!"; // Jeśli gracz zadał obrażenia
			}
			break;
		}
		case "walkaPoczatek":{
			var tekst = " " + "Zaatakował Cię" + " " + postacPierwsza + "!";
			pasek.style.color = "#d10e00";
			break;
		}
		case "koniecWalki":{ // Funkcja wywoływana na koniec walki
			if(postacDruga == nick){
				var tekst = " " + postacPierwsza + " " + "cię" + " " + "pokonał!"; // Jeśli przeciwnik wygrał
			} else if(postacPierwsza == nick){
				var tekst = " " + "Pokonałeś" + " " + postacDruga + "!"; // Jeśli gracz wygrał
			}
			break;
		}
		case "odblokowanieLokacji":{ // Funkcja wywoływana podczas odblokowania lokacji
			var tekst = " " + "Odblokowałeś lokację:" + " " + postacPierwsza + "!"; // Jeśli przeciwnik wygrał
			pasek.style.color = "magenta";
			break;
		}
		case "linia":{
			var tekst = " ";
			break;
		}
		case "item":{
			var tekst = " " + "Otrzymałeś przedmiot:" + " " + postacPierwsza + "!"
		}
	}
	var pasekTekst = document.createTextNode(tekst);
	pasek.appendChild(pasekTekst);
	document.getElementById("logi").appendChild(pasek);
	document.getElementById("logi").appendChild(pasekBR);
	var box = document.getElementById("logi");
	box.scrollTop = box.scrollHeight;
	if(rodzaj == "koniecWalki" && postacPierwsza == nick){ // Gdy gracz wygra
		pasek.style.color = "#1d993e";
	} else if(rodzaj == "koniecWalki" && postacDruga == nick){ // Gdy przeciwnik wygra
		pasek.style.color = "#d10e00";
	} else if(rodzaj == "item"){
		pasek.style.color = "#3c62c7";
	}
}

	// Funkcja do resetu tekstu
function wyczyscTekst(){
	var box = document.getElementById("logi");
	while(box.hasChildNodes() == true){
		box.removeChild(box.childNodes[0]);
	}
}

// Inicjalizacja podstawowych funkcji
wybierzCios("zwykly");

// ----- Funkcje ekwipunku -----

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("src", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var src = document.getElementById(ev.dataTransfer.getData("src"));
    var srcParent = src.parentNode;
	var tgt = ev.currentTarget.firstElementChild;
	var str = ev.currentTarget;
	switch(str.id){
		case "slot101":{
			var data = ev.dataTransfer.getData("src");
			ev.target.appendChild(document.getElementById(data));
			ev.target.removeChild(src);
			break;
		}
		case "slotHelm":{
			if(src.alt != "helm"){ break; }
			if(tgt == null){
				var data = ev.dataTransfer.getData("src");
				ev.target.appendChild(document.getElementById(data));
			} else {
				ev.currentTarget.replaceChild(src, tgt);
				srcParent.appendChild(tgt);
			}
			sprawdzWyposazenie("helm", src, str);
			break;
		}
		case "slotNapiersnik":{
			if(src.alt != "napiersnik"){ break; }
			if(tgt == null){
				var data = ev.dataTransfer.getData("src");
				ev.target.appendChild(document.getElementById(data));
			} else {
				ev.currentTarget.replaceChild(src, tgt);
				srcParent.appendChild(tgt);
			}
			sprawdzWyposazenie("napiersnik", src, str);
			break;
		}
		case "slotSpodnie":{
			if(src.alt != "spodnie"){ break; }
			if(tgt == null){
				var data = ev.dataTransfer.getData("src");
				ev.target.appendChild(document.getElementById(data));
			} else {
				ev.currentTarget.replaceChild(src, tgt);
				srcParent.appendChild(tgt);
			}
			sprawdzWyposazenie("spodnie", src, str);
			break;
		}
		case "slotButy":{
			if(src.alt != "buty"){ break; }
			if(tgt == null){
				var data = ev.dataTransfer.getData("src");
				ev.target.appendChild(document.getElementById(data));
			} else {
				ev.currentTarget.replaceChild(src, tgt);
				srcParent.appendChild(tgt);
			}
			sprawdzWyposazenie("buty", src, str);
			break;
		}
		default:{
			if(tgt == null){
				var data = ev.dataTransfer.getData("src");
				ev.target.appendChild(document.getElementById(data));
			} else {
				ev.currentTarget.replaceChild(src, tgt);
				srcParent.appendChild(tgt);
			}
			break;
		}
	}
	sprawdzWyposazenieNull();
}
function GetzIndex(element) {
	var zindex = window.getComputedStyle(element, null).getPropertyValue("z-index");
	return zindex;
}
function zapamietajZakladke(bool) {
	if (bool) {
		var test = document.getElementsByClassName("zakladka");
		if (GetzIndex(test[0]) == 0) {
			localStorage.setItem("zakladka", 0);
		}
		else if (GetzIndex(test[1]) == 0) {
			localStorage.setItem("zakladka", 1);
		}
		else if (GetzIndex(test[2]) == 0) {
			localStorage.setItem("zakladka", 2);
		}
		else if (GetzIndex(test[3]) == 0) {
			localStorage.setItem("zakladka", 3);
		}
	}
	else {
		if (localStorage.getItem("zakladka") !== null) {
			var zakladka = localStorage.getItem("zakladka");
			document.getElementsByClassName("zakladka")[zakladka].style.zIndex = 0;
		}
		else {
			localStorage.setItem("zakladka", 0);
			document.getElementsByClassName("zakladka")[0].style.zIndex = 0;
        }
    }
}

function pusta(){ // Pusta funkcja do debuggingu
}

	// Funkcja od wybierania slotów dla przedmiotów
function wybieranieSlotu(){
	liczba = 1;
	slotWolny = "slot" + liczba;
	slotWolny2 = document.getElementById(slotWolny);
	while(slotWolny2.hasChildNodes() == true){
		liczba += 1;
		slotWolny = "slot" + liczba;
		slotWolny2 = document.getElementById(slotWolny);
	}
	slotWolny = "slot" + liczba;
}

	// Funkcja od tworzenia przedmiotów
function utworzPrzedmiot(nazwa, rodzaj, grafika){
	przedmiot = window[nazwa];
	wpiszTekst("item", przedmiot[0]);
	itemIdMax = 1;
	wybieranieSlotu();
	var item = document.createElement('img');
	tymczasowe = "itemId" + itemIdMax;
	tymczasowe2 = document.getElementById(tymczasowe);
	console.log
	while(tymczasowe2 != null){ 
		itemIdMax += 1;
		tymczasowe = "itemId" + itemIdMax;
		tymczasowe2 = document.getElementById(tymczasowe);
		}
	item.id = "itemId" + itemIdMax;
	item.src = grafika;
	item.href = "#";
	item.setAttribute("ondragstart", "drag(event)");
	item.alt = rodzaj;
	item.draggable = true;
	item.innerHTML = nazwa;
	slot = document.getElementById(slotWolny);
	slot.appendChild(item);
	if(slot.id == "slot101"){
		slot.removeChild(item);
	}
}

	// Funkcja do sprawdzania wyposażenia i dodawania jego statystyk
function sprawdzWyposazenie(rodzaj, src, str){
	switch(rodzaj){
		case "helm":{
			przedmiot = window[src.innerHTML];
			if(slotHelm.hasChildNodes() == true){
				pancerzHelm = przedmiot[2];
			} else {
				pancerzHelm = 0;
			}
			break;
		}
		case "napiersnik":{
			przedmiot = window[src.innerHTML];
			if(slotNapiersnik.hasChildNodes() == true){
				pancerzNapiersnik = przedmiot[2]
			} else {
				pancerzNapiersnik = 0;
			}
			break;
		}
		case "spodnie":{
			przedmiot = window[src.innerHTML];
			if(slotSpodnie.hasChildNodes() == true){
				pancerzSpodnie = przedmiot[2];
			} else {
				pancerzSpodnie = 0;
			}
			break;
		}
		case "buty":{
			przedmiot = window[src.innerHTML];
			if(slotButy.hasChildNodes() == true){
				pancerzButy = przedmiot[2];
			} else {
				pancerzButy = 0;
			}
			break;
		}
		default:{
			break;
		}
	}
	sprawdzWyposazenieNull();
	document.getElementById("pancerzKoncowy").innerHTML = pancerzKoncowy;
}

	// Funkcja od czyszczenia pancerza jeśli któryś ze slotów jest pusty
function sprawdzWyposazenieNull(){
	if(slotHelm.hasChildNodes() == false){ pancerzHelm = 0; }
	if(slotNapiersnik.hasChildNodes() == false){ pancerzNapiersnik = 0; }
	if(slotSpodnie.hasChildNodes() == false){ pancerzSpodnie = 0; }
	if(slotButy.hasChildNodes() == false){ pancerzButy = 0; }
	pancerzKoncowy = pancerzHelm + pancerzNapiersnik + pancerzSpodnie + pancerzButy;
	document.getElementById("pancerzKoncowy").innerHTML = pancerzKoncowy;
}
