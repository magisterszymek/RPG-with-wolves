// ---------- Zmienne ----------

// Przedmioty
	// Bronie ["nazwa", "opis", obrażenia, waga, cena]
		var prdm_bron_a_1 = ["Drewniany miecz", "Nie masz nic twardszego?", 5, 1, 10];
		var prdm_bron_a_2 = ["Drewniany topór", "Świeżo wystrugany.", 8, 2, 15,];
		var prdm_bron_a_3 = ["Drewniany miecz", "Nawet trochę ostry.", 3, 1, 7,];
			
	// Zbroje ["nazwa", "opis", "rodzaj", pancerz, waga, cena]
		var prdm_zbroja_a_1 = ["Drewniany hełm", "Ochroni przed jabłkami i kokosami.", "Hełm", 2, 1, 13,];
		var prdm_zbroja_a_2 = ["Drewniany napierśnik", "Wytrzyma kilka uderzeń.", "Napierśnik", 3, 1, 25];
		var prdm_zbroja_a_3 = ["Drewniane spodnie", "Naprawdę?", "Spodnie", 2, 1, 17];						
		var prdm_zbroja_a_4 = ["Drewniane buty", "Niewygodne ale... nie, nie są dobre.", "Buty", 1, 1, 10];
			
	// Inne przedmioty ["nazwa", "opis", cena]
		var prdm_1 = ["Różowy kwiatek", "Pachnie trawą.", 3];
		var prdm_3 = ["Połamany miecz", "Nadaje się już tylko na przetopienie.", 5];
		
// Przeciwnicy ["nazwa", "opis", zdrowie, pancerz, obrażenia, zakres, trudność]
	var prze_lesnaDroga1_ = [
	["Kłoda", "Blokuje drogę.", 5, 1, 0, 0, 1],
	["null"]
	];
	var prze_lesnaDroga2_ = [
	["Kłoda", "Blokuje drogę.", 5, 1, 0, 0, 1],
	["Grzybiarz", "Zawędrował zbyt daleko.", 20, 2, 1, 2, 1]
	]
	var prze_lesnaDroga3_ = [
	["Grzybiarz", "Zawędrował zbyt daleko.", 20, 2, 1, 2, 1],
	["Pułapka", "Bardzo dobrze ukryta.", 10, 5, 1, 0, 1],
	["Młody myśliwy", "Niedoświadczony, ale nie beznadziejny.", 30, 2, 4, 2, 2]
	];
	var prze_dolina = []
	
// Maksymalna ilość przeciwników w array'u
	var lesnaDroga1Max = 1;
	var lesnaDroga2Max = 2;
	var lesnaDroga3Max = 3;
		
// Statystyki
	// Gracz
		var nick = "Ruffus";
		var pancerzHelm = 0;
		var pancerzNapiersnik = 0;
		var pancerzSpodnie = 0;
		var pancerzButy = 0;
		var pancerzKoncowy = 0;
		var waluta = 20;
		var zdrowieBazowe = 20;		// Zdrowie Bazowe
		var zdrowieEkwipunek = 20;	// zdrowieBazowe + Zdrowie z ekwipunku
		var zdrowieKoncowe = 20;	// zdrowieEkwipunek + Zdrowie z buffów
		var obrazeniaBazowe = 3;	// Obrażenia bazowe
		var obrazeniaEkwipunek = 3;// obrażeniaBazowe + Obrażenia z ekwipunku
		var obrazeniaKoncowe = 3;	// obrażeniaEkwipunek + Obrażenia z wybranego ciosu
		var szybkoscBazowa = 1;	// Szybkość bazowa
		var szybkoscEkwipunek = 1;	// szybkoscBazowa + Szybkość z ekwipunku
		var szybkoscKoncowa	= 1;		// szybkoscEkwipunek + Szybkość z wybranego ciosu

	// Przeciwnik
		var nazwaPrzeciwnik = "Brak przeciwnika";
		var opisPrzeciwnik = " ";
		var zdrowiePrzeciwnik = " ";
		var pancerzPrzeciwnik = 0;
		var obrazeniaPrzeciwnik = 0;
		var zakresPrzeciwnik = 0;
		var lokacjaId = "null"; // Lokacja w której rozgrywa się walka, wykorzystywane do odblokowywania dróg
		
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
		var wybranyCios = "pazury";
		var mnoznikObrazenCiosu = [1, 3, 0.65]; // Mnożniki obrażeń ciosów [zwykły, potężny, szybki]
		var szybkoscCiosu = [1, 1, 3] // Szybkości ciosu (ile razy na turę) [zwykły, potężny, szybki]
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
		var blokadaPosterunekWilkow = true;
		var blokadaZrujnowanyOboz = true;
		var blokadaLesnaDroga2 = true;
		var blokadaLesnaDroga3 = true;
		var blokadaWiezaMaga = true;
		var blokadaGrzybowePole = true;
		var blokadaGory = true;
		var blokadaDolina = true;
		var blokadaMoczary = true;
		var resetKlikniety = false;
		
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
		walkaTrwa = true;
		wpiszTekst("linia");
		wpiszTekst("linia");
		wybierzPrzeciwnika(biom, trudnosc);
		wpiszTekst("walkaPoczatek", nazwaPrzeciwnik);
		blokadaWalki = true;
		tymczasoweZdrowie = zdrowieKoncowe;
		interval = setInterval(walka, 1000);
	}
}

	// Funkcja odpowiedzialna za loopa walki
function walka(typ){
	if(typ != "specjalny"){
		//Początek tury gracza
		kalkulacja = (obrazeniaKoncowe - pancerzPrzeciwnik) * szybkoscKoncowa // Obliczanie realnych obrażeń gracza po trafieniu w pancerz
		if(kalkulacja < 0){
			kalkulacja = 0; // Zerowanie obrażeń jeśli mniejsze od zera
		}
		zdrowiePrzeciwnik = zdrowiePrzeciwnik - kalkulacja;
		if(zdrowiePrzeciwnik < 0){ zdrowiePrzeciwnik = 0; }
		wpiszTekst("walka", nick, nazwaPrzeciwnik, kalkulacja);
		
		// Koniec tury gracza, początek tury przeciwnika
		if(zdrowiePrzeciwnik >= 1){
			if(zakresPrzeciwnik != 0){
				kalkulacja = ((obrazeniaPrzeciwnik - (zakresPrzeciwnik * 0.5)) + (Math.floor(Math.random() * zakresPrzeciwnik + 1))) - pancerzKoncowy; // Obliczanie realnych obrażeń przeciwnika po trafieniu w pancerz
			} else {
				kalkulacja = ((obrazeniaPrzeciwnik - (zakresPrzeciwnik * 0.5)) + (Math.floor(Math.random() * zakresPrzeciwnik))) - pancerzKoncowy; // Obliczanie realnych obrażeń przeciwnika po trafieniu w pancerz
			}
			if(kalkulacja < 0){
				kalkulacja = 0; // Zerowanie obrażeń jeśli mniejsze od zera
			}
			zdrowieKoncowe = zdrowieKoncowe - kalkulacja;
			wpiszTekst("walka", nazwaPrzeciwnik, nick, kalkulacja);
		// Koniec tury przeciwnika
		
		zdrowieProcent = (zdrowieKoncowe / maksymalneZdrowie) * 100
		zdrowieProcentPrzeciwnik = (zdrowiePrzeciwnik / maksymalneZdrowiePrzeciwnik) * 100
		odswiezZmienne("walka");
		} else {};
	}
		if(zdrowieKoncowe <= 0 || zdrowiePrzeciwnik <= 0){
			if(zdrowieKoncowe <= 0){
				wpiszTekst("koniecWalki", nazwaPrzeciwnik, nick);
			} else if(zdrowiePrzeciwnik <= 0){
				wpiszTekst("koniecWalki", nick, nazwaPrzeciwnik);
				loot(nazwaPrzeciwnik);
				switch(lokacjaId){
					case "lesnaDroga1":{
						if(blokadaZrujnowanyOboz == true && blokadaPosterunekWilkow == true && blokadaLesnaDroga2 == true){
							wpiszTekst("odblokowanieLokacji", "Zrujnowany obóz")
							wpiszTekst("odblokowanieLokacji", "Posterunek wilków")
							wpiszTekst("odblokowanieLokacji", "Leśna droga [2]")
							blokadaZrujnowanyOboz = false;
							blokadaPosterunekWilkow = false;
							blokadaLesnaDroga2 = false;
							zrujnowanyOboz.style.display = "inline";
							posterunekWilkow.style.display = "inline";
							lesnaDroga2.style.display = "inline";
						}
						break;
					}
					case "lesnaDroga2":{
						if(blokadaWiezaMaga == true && blokadaGrzybowePole == true && blokadaLesnaDroga3 == true){
							wpiszTekst("odblokowanieLokacji", "Wieża maga")
							wpiszTekst("odblokowanieLokacji", "Grzybowe pole")
							wpiszTekst("odblokowanieLokacji", "Leśna droga [3]")
							blokadaWiezaMaga = false;
							blokadaGrzybowePole = false;
							blokadaLesnaDroga3 = false;
							wiezaMaga.style.display = "inline";
							grzybowePole.style.display = "inline";
							lesnaDroga3.style.display = "inline";
						}
						break;
					}
				}
			}
			obraz(-1);
			odswiezZmienne("koniecWalki");
			clearInterval(interval);
		}
		kalkulacja = 0;
}
  
function obraz(losowe, biom) {
	if (losowe == -1) {
		document.getElementById("obrazPrzeciwnik").src = "Obrazy/Przeciwnicy/Brak_przeciwnika.png";
	}
	else {
		switch(biom){
			case "pradawnyLas":{
				document.getElementById("obrazPrzeciwnik").src = "Obrazy/Przeciwnicy/" + prze_pradawnyLas_[losowe][0] + ".png";
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
	max = window[biom + "Max"];
	losowe = Math.floor(Math.random() * max);
	obraz(losowe, biom);
	biomTymczasowe = "prze_" + biom + "_";
	biomNazwa = window[biomTymczasowe];
	nazwaPrzeciwnik = biomNazwa[losowe][0];
	opisPrzeciwnik = biomNazwa[losowe][1];
	zdrowiePrzeciwnik = biomNazwa[losowe][2];
	pancerzPrzeciwnik = biomNazwa[losowe][3];
	obrazeniaPrzeciwnik = biomNazwa[losowe][4];
	zakresPrzeciwnik = biomNazwa[losowe][5];
	lokacjaId = biom;
	odswiezZmienne("poczatekWalki");
}

	// Wybieranie ciosu
function wybierzCios(nazwaCiosu){
	wybranyCios = nazwaCiosu;
	switch(nazwaCiosu){
		case "pazury":{
			obrazeniaKoncowe = obrazeniaEkwipunek * mnoznikObrazenCiosu[0];
			szybkoscKoncowa = szybkoscEkwipunek * szybkoscCiosu[0];
			break;
		}
		case "kly":{
			przycisk = document.getElementById("kly");
			if(przycisk.disabled == false){
			obrazeniaKoncoweAtak = obrazeniaEkwipunek * mnoznikObrazenCiosu[1];
			szybkoscKoncowaAtak = szybkoscEkwipunek * szybkoscCiosu[1];
			kalkulacja = (obrazeniaKoncoweAtak - pancerzPrzeciwnik) * szybkoscKoncowaAtak // Obliczanie realnych obrażeń gracza po trafieniu w pancerz
			if(kalkulacja < 0){
				kalkulacja = 0; // Zerowanie obrażeń jeśli mniejsze od zera
			}
			zdrowiePrzeciwnik = zdrowiePrzeciwnik - kalkulacja;
			if(walkaTrwa == true){ 
				wpiszTekst("walka", nick, nazwaPrzeciwnik, kalkulacja);
				if(zdrowiePrzeciwnik < 0){ zdrowiePrzeciwnik = 0; }
				zdrowieProcentPrzeciwnik = (zdrowiePrzeciwnik / maksymalneZdrowiePrzeciwnik) * 100;
				document.getElementsByClassName("zdrowiePrzeciwnik")[0].style.width = zdrowieProcentPrzeciwnik + "%";
				document.getElementById("zdrowiePrzeciwnik").innerHTML = zdrowiePrzeciwnik;
			}
			przycisk.disabled = true;
			przycisk.style.backgroundColor = "red";
			setTimeout(function odblokujPrzycisk(){
				przycisk.disabled = false; 
				przycisk.style.backgroundColor = "";
				}, 3000);
			setTimeout(walka("specjalny"), 1);
			break;
			} else { 
			break;
			}
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
		case "Kłoda":{
			break;
		}
		case "Grzybiarz":{
			utworzPrzedmiot("prdm_zbroja_a_1", "helm", "Obrazy/Przedmioty/Hełm.png");
			break;
		}
		case "Pułapka":{
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
		case "Młody myśliwy":{
			if(blokadaGory == true){
				document.getElementsByClassName("przyciskGory")[0].style.display = "inline";
				wpiszTekst("odblokowanieLokacji", "Góry");
				blokadaGory = false;
			}
			utworzPrzedmiot("prdm_zbroja_a_4", "buty", "Obrazy/Przedmioty/Buty.png");
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
	if(tgt != null){
		if(tgt.alt == "buty" && src.alt != "buty"){
			return;
		} else if(tgt.alt == "napiersnik" && src.alt != "napiersnik"){
			return;
		} else if(tgt.alt == "spodnie" && src.alt != "spodnie"){
			return;
		} else if(tgt.alt == "buty" && src.alt != "buty"){
			return;
		}
	}
	switch(str.id){
		case "slot160":{
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
		var zakladki = document.getElementsByClassName("zakladka");
		if (GetzIndex(zakladki[0]) == 0) {
			localStorage.setItem("zakladka", 0);
		}
		else if (GetzIndex(zakladki[1]) == 0) {
			localStorage.setItem("zakladka", 1);
		}
		else if (GetzIndex(zakladki[2]) == 0) {
			localStorage.setItem("zakladka", 2);
		}
		else if (GetzIndex(zakladki[3]) == 0) {
			localStorage.setItem("zakladka", 3);
		}
		if(resetKlikniety == true) {
		} else {
		zapis();
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
		odczyt();
		odswiezZmienne("zapis");
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
	item.lang = nazwa;
	slot = document.getElementById(slotWolny);
	slot.appendChild(item);
	if(slot.id == "slot160"){
		slot.removeChild(item);
	}
}

	// Funkcja do sprawdzania wyposażenia i dodawania jego statystyk
function sprawdzWyposazenie(rodzaj, src, str){
	switch(rodzaj){
		case "helm":{
			przedmiot = window[src.lang];
			if(slotHelm.hasChildNodes() == true){
				pancerzHelm = przedmiot[3];
			} else {
				pancerzHelm = 0;
			}
			break;
		}
		case "napiersnik":{
			przedmiot = window[src.lang];
			if(slotNapiersnik.hasChildNodes() == true){
				pancerzNapiersnik = przedmiot[3]
			} else {
				pancerzNapiersnik = 0;
			}
			break;
		}
		case "spodnie":{
			przedmiot = window[src.lang];
			if(slotSpodnie.hasChildNodes() == true){
				pancerzSpodnie = przedmiot[3];
			} else {
				pancerzSpodnie = 0;
			}
			break;
		}
		case "buty":{
			przedmiot = window[src.lang];
			if(slotButy.hasChildNodes() == true){
				pancerzButy = przedmiot[3];
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

function zapis() {
	var liczba = 1;
	arr = [];
	while (liczba <= 159) {
		slot = "slot" + liczba;
		calySlot = document.getElementById(slot).outerHTML;
		arr.push(calySlot);
		liczba += 1;
	}
	wyposazenieArray = [document.getElementById("slotHelm").outerHTML, document.getElementById("slotNapiersnik").outerHTML, document.getElementById("slotSpodnie").outerHTML, document.getElementById("slotButy").outerHTML];
	statystykiArray = [nick, pancerzHelm, pancerzNapiersnik, pancerzSpodnie, pancerzButy, pancerzKoncowy, zdrowieBazowe, zdrowieEkwipunek, zdrowieKoncowe, obrazeniaBazowe, obrazeniaEkwipunek, obrazeniaKoncowe, szybkoscBazowa, szybkoscEkwipunek, szybkoscKoncowa, blokadaGory, blokadaDolina, blokadaMoczary];
	localStorage.setItem("Ekwipunek", JSON.stringify(arr));
	localStorage.setItem("Wyposazenie", JSON.stringify(wyposazenieArray));
	localStorage.setItem("Statystyki", JSON.stringify(statystykiArray));
}

function odczyt() {
	if (localStorage.getItem("Ekwipunek") !== null) {//sprawdza czy taki localstorage istnieje, jeśli nie tworzy go zapisując w nim pusty ekwipunek funkcją "zapis()"
		arr = JSON.parse(localStorage.getItem("Ekwipunek"));
		var liczba = 1;
		while (liczba <= 159) {
			slot = "slot" + liczba;
			slotId = window[slot];
			slotId.outerHTML = arr[liczba - 1];
			liczba += 1;
		}
	}
	else {
		zapis();
    }
	if (localStorage.getItem("Wyposazenie") !== null) {
		wyposazenieArray = JSON.parse(localStorage.getItem("Wyposazenie"));
		slotHelm.outerHTML = wyposazenieArray[0];
		slotNapiersnik.outerHTML = wyposazenieArray[1];
		slotSpodnie.outerHTML = wyposazenieArray[2];
		slotButy.outerHTML = wyposazenieArray[3];
	} else {
		wyposazenieArray = [document.getElementById("slotHelm").outerHTML, document.getElementById("slotNapiersnik").outerHTML, document.getElementById("slotSpodnie").outerHTML, document.getElementById("slotButy").outerHTML];
		localStorage.setItem("Wyposazenie", JSON.stringify(wyposazenieArray));
	}
	if (localStorage.getItem("Statystyki") !== null) {
		statystykiArray = JSON.parse(localStorage.getItem("Statystyki"));
		nick = statystykiArray[0];
		pancerzHelm = statystykiArray[1];
		pancerzNapiersnik = statystykiArray[2];
		pancerzSpodnie = statystykiArray[3];
		pancerzButy = statystykiArray[4];
		pancerzKoncowy = statystykiArray[5];
		zdrowieBazowe = statystykiArray[6];
		zdrowieEkwipunek = statystykiArray[7];
		zdrowieKoncowe = statystykiArray[8];
		obrazeniaBazowe = statystykiArray[9];
		obrazeniaEkwipunek = statystykiArray[10];
		obrazeniaKoncowe = statystykiArray[11];
		szybkoscBazowa = statystykiArray[12];
		szybkoscEkwipunek = statystykiArray[13];
		szybkoscKoncowa = statystykiArray[14];
		blokadaGory = statystykiArray[15];
		blokadaDolina = statystykiArray[16];
		blokadaMoczary = statystykiArray[17];
		zdrowieKoncowe = zdrowieEkwipunek;
		if(blokadaGory == false){ document.getElementsByClassName("przyciskGory")[0].style.display = "inline"; }
	} else {
		statystykiArray = [nick, pancerzHelm, pancerzNapiersnik, pancerzSpodnie, pancerzButy, pancerzKoncowy, zdrowieBazowe, zdrowieEkwipunek, zdrowieKoncowe, obrazeniaBazowe, obrazeniaEkwipunek, obrazeniaKoncowe, szybkoscBazowa, szybkoscEkwipunek, szybkoscKoncowa, blokadaGory, blokadaDolina, blokadaMoczary];
		localStorage.setItem("Statystyki", JSON.stringify(statystykiArray));
	}
}
function reset() {
	localStorage.clear();
	resetKlikniety = true;
	location.reload();
}

document.onmouseover = function opis(id) {
	if(id.target.lang != "" && id.target.alt != "" && id.target.draggable == true){
		przedmiotOpis = window[id.target.lang];
		document.getElementById("opisPrzedmiot").innerHTML = przedmiotOpis[0];
		document.getElementById("opisOpis").innerHTML = przedmiotOpis[1];
		document.getElementById("opisRodzaj").innerHTML = przedmiotOpis[2];
		document.getElementById("opisCena").innerHTML = przedmiotOpis[5];
		document.getElementById("opisRodzajTekst").innerHTML = "Rodzaj:";
		document.getElementById("opisWartosc").innerHTML = "Wartość:";
		if(przedmiotOpis[2] == "Broń"){
			document.getElementById("opisTyp").innerHTML = "Obrażenia:";
			document.getElementById("opisStatystyka").innerHTML = przedmiotOpis[2];
		} else if(przedmiotOpis[2] == "Hełm" || przedmiotOpis[2] == "Napierśnik" || przedmiotOpis[2] == "Spodnie" || przedmiotOpis[2] == "Buty"){
			document.getElementById("opisTyp").innerHTML = "Pancerz:";
			document.getElementById("opisStatystyka").innerHTML = przedmiotOpis[3];
		} else { 
		document.getElementById("opisTyp").innerHTML = "";
		document.getElementById("opisStatystyka").innerHTML = "";
		}
	} else {
		document.getElementById("opisPrzedmiot").innerHTML = "";
		document.getElementById("opisOpis").innerHTML = "";
		document.getElementById("opisRodzaj").innerHTML = "";
		document.getElementById("opisRodzajTekst").innerHTML = "";
		document.getElementById("opisWartosc").innerHTML = "";
		document.getElementById("opisCena").innerHTML = "";
		document.getElementById("opisTyp").innerHTML = "";
		document.getElementById("opisStatystyka").innerHTML = "";
	}
}

	// Funkcja służąca do odświeżania czy zapisywania zmiennych, aby uniknąć spaghetti w kodzie
function odswiezZmienne(rodzaj){
	if(rodzaj == "walka"){
		document.getElementsByClassName("zdrowieKoncowe")[0].style.width = zdrowieProcent + "%"
		document.getElementsByClassName("zdrowiePrzeciwnik")[0].style.width = zdrowieProcentPrzeciwnik + "%"
		document.getElementById("zdrowieKoncowe").innerHTML = zdrowieKoncowe;
		document.getElementById("zdrowiePrzeciwnik").innerHTML = zdrowiePrzeciwnik;
	} else if(rodzaj == "koniecWalki"){
		walkaKoniec = true;
		walkaTrwa = false;
		blokadaWalki = false;
		nazwaPrzeciwnik = "Brak przeciwnika";
		opisPrzeciwnik = "";
		zdrowieKoncowe = tymczasoweZdrowie;
		tymczasoweZdrowie = 0;
		maksymalneZdrowiePrzeciwnik = 0;
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
		if(document.getElementById("kly").disabled == true){
			document.getElementById("kly").disabled = false;
			document.getElementById("kly").style.backgroundColor = "";
		}
	} else if(rodzaj == "zapis"){
		maksymalneZdrowiePrzeciwnik = zdrowiePrzeciwnik;
		maksymalneZdrowie = zdrowieKoncowe;
		document.getElementById("nick").innerHTML = nick;
		document.getElementById("zdrowieKoncowe").innerHTML = zdrowieKoncowe;
		document.getElementById("zdrowiePrzeciwnik").innerHTML = zdrowiePrzeciwnik;
		document.getElementById("pancerzKoncowy").innerHTML = pancerzKoncowy;
		document.getElementById("pancerzPrzeciwnik").innerHTML = pancerzPrzeciwnik;
		document.getElementById("nazwaPrzeciwnika").innerHTML = nazwaPrzeciwnik;
		document.getElementById("maksymalneZdrowie").innerHTML = maksymalneZdrowie;
		document.getElementById("maksymalneZdrowiePrzeciwnik").innerHTML = maksymalneZdrowiePrzeciwnik;
	} else if(rodzaj =="poczatekWalki"){
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
}

function lokacja(lokacja){
	switch(lokacja){
		case "pradawnyLas":{
			las.style.display = "none";
			mapa.src = "Obrazy/Mapa/PradawnyLas.png";
			obozWilkow.style.display = "inline";
			lesnaDroga1.style.display = "inline";
			if(blokadaPosterunekWilkow == false){ posterunekWilkow.style.display = "inline"; }
			if(blokadaZrujnowanyOboz == false){ zrujnowanyOboz.style.display = "inline"; }
			if(blokadaLesnaDroga2 == false){ lesnaDroga2.style.display = "inline"; }
			if(blokadaWiezaMaga == false){ wiezaMaga.style.display = "inline"; }
			if(blokadaGrzybowePole == false){ grzybowePole.style.display = "inline"; }
			if(blokadaLesnaDroga3 == false){ lesnaDroga3.style.display = "inline"; }
			cofnij.style.display = "inline";
			break;
		}
		case "obozWilkow":{
			break;
		}
		case "lesnaDroga1":{
			rozpocznijWalke("lesnaDroga1", 1);
			break;
		}
		case "posterunekWilkow":{
			break;
		}
		case "zrujnowanyOboz":{
			break;
		}
		case "lesnaDroga2":{
			rozpocznijWalke("lesnaDroga2", 1);
			break;
		}
		case "wiezaMaga":{
			break;
		}
		case "grzybowePole":{
			break;
		}
		case "lesnaDroga3":{
			rozpocznijWalke("lesnaDroga3", 1);
			break;
		}
		case "cofnij":{
			las.style.display = "inline";
			mapa.src = "Obrazy/Mapa/Mapa.png";
			obozWilkow.style.display = "none";
			lesnaDroga1.style.display = "none";
			posterunekWilkow.style.display = "none";
			zrujnowanyOboz.style.display = "none";
			lesnaDroga2.style.display = "none";
			wiezaMaga.style.display = "none";
			grzybowePole.style.display = "none";
			lesnaDroga3.style.display = "none";
			cofnij.style.display = "none";
			break;
		}
	}
}
