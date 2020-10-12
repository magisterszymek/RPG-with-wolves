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
		var pancerz = 1;
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

function zakladka(NrZakladki){
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
		wyczyscTekst();
		wybierzPrzeciwnika(biom, trudnosc);
		blokadaWalki = true;
		interval = setInterval(walka, 800);
	}
}

	// Funkcja odpowiedzialna za loopa walki
function walka(){
	if(walkaTrwa == false) { tymczasoweZdrowie = zdrowieKoncowe; }
	walkaTrwa = true;
		kalkulacja = ((obrazeniaPrzeciwnik - (zakresPrzeciwnik / 2)) + (Math.floor(Math.random() * zakresPrzeciwnik + 1))) - pancerz; // Obliczanie realnych obrażeń przeciwnika po trafieniu w pancerz
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
			}
			clearInterval(interval);
			walkaKoniec = true;
			walkaTrwa = false;
			blokadaWalki = false;
			loot(nazwaPrzeciwnik);
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
			document.getElementById("pancerz").innerHTML = pancerz;
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
	document.getElementById("pancerz").innerHTML = pancerz;
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
			break;
		}
		case "Traper":{
			if(blokadaGory == true){
				document.getElementsByClassName("przyciskGory")[0].style.display = "inline";
				wpiszTekst("odblokowanieLokacji", "Góry");
				blokadaGory = false;
			}
			break;
		}
		case "Myśliwy":{
			if(blokadaGory == true){
				document.getElementsByClassName("przyciskGory")[0].style.display = "inline";
				wpiszTekst("odblokowanieLokacji", "Góry");
				blokadaGory = false;
			}
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
}

	// Funkcja do wpisywania tekstu
function wpiszTekst(rodzaj, postacPierwsza, postacDruga, liczba){
	switch(rodzaj){
		case "walka":{ // Funkcja wywoływana podczas walki
			if(postacDruga == nick){
				var tekst = "&nbsp" + postacPierwsza + "&nbsp" + "zadał" + "&nbsp" + "Ci" + "&nbsp"+ liczba + "&nbsp" + "obrażeń!"; // Jeśli przeciwnik zadał obrażenia
			} else if(postacPierwsza == nick){
				var tekst = "&nbsp" + "Zadałeś/aś" + "&nbsp" + "przeciwnikowi" + "&nbsp" + liczba + "&nbsp" + "obrażeń!"; // Jeśli gracz zadał obrażenia
			}
			break;
		}
		case "koniecWalki":{ // Funkcja wywoływana na koniec walki
			if(postacDruga == nick){
				var tekst = "&nbsp" + postacPierwsza + "&nbsp" + "cię" + "&nbsp" + "pokonał!"; // Jeśli przeciwnik wygrał
			} else if(postacPierwsza == nick){
				var tekst = "&nbsp" + "Pokonałeś" + "&nbsp" + postacDruga + "!"; // Jeśli gracz wygrał
			}
			break;
		}
		case "odblokowanieLokacji":{ // Funkcja wywoływana podczas odblokowania lokacji
			var tekst = "&nbsp" + "Odblokowałeś lokację:" + "&nbsp" + postacPierwsza + "!"; // Jeśli przeciwnik wygrał
			break;
		}
	}
	var paragraf = document.getElementById(tekstId);
	paragraf.innerHTML = "<span>" + tekst + "</span>"; // Dodanie tekstu do HTML
	document.getElementById(tekstId).style.color = "white";
	switch(id){
		case 1:{
			document.getElementById("tekstId11").style.color = "#ebebeb"; // Zmiana poprzedniej linii na ciemniejszą
			document.getElementById("tekstId10").style.color = "#8a8a8a"; 
			document.getElementById("tekstId9").style.color = "#737373"; 
			document.getElementById("tekstId8").style.color = "#454545"; 
			break;
		}
		case 2:{
			document.getElementById("tekstId1").style.color = "#ebebeb"; // Zmiana poprzedniej linii na ciemniejszą
			document.getElementById("tekstId11").style.color = "#8a8a8a"; 
			document.getElementById("tekstId10").style.color = "#737373"; 
			document.getElementById("tekstId9").style.color = "#454545";
			break;
		}
		case 3:{
			document.getElementById("tekstId2").style.color = "#ebebeb"; // Zmiana poprzedniej linii na ciemniejszą
			document.getElementById("tekstId1").style.color = "#8a8a8a"; 
			document.getElementById("tekstId11").style.color = "#737373"; 
			document.getElementById("tekstId10").style.color = "#454545";
			break;
		}
		case 4:{
			document.getElementById("tekstId3").style.color = "#ebebeb"; // Zmiana poprzedniej linii na ciemniejszą
			document.getElementById("tekstId2").style.color = "#8a8a8a"; 
			document.getElementById("tekstId1").style.color = "#737373"; 
			document.getElementById("tekstId11").style.color = "#454545";
			break;
		}
		default:{
			odwrotneTekstId = "tekstId" + (id - 1);
			document.getElementById(odwrotneTekstId).style.color = "#ebebeb"; // Zmiana poprzedniej linii na ciemniejszą
			odwrotneTekstId = "tekstId" + (id - 2);
			document.getElementById(odwrotneTekstId).style.color = "#8a8a8a";
			odwrotneTekstId = "tekstId" + (id - 3);
			document.getElementById(odwrotneTekstId).style.color = "#737373";
			odwrotneTekstId = "tekstId" + (id - 4);
			document.getElementById(odwrotneTekstId).style.color = "#454545";
			break;
		}
	}
	if(rodzaj == "koniecWalki" && postacPierwsza == nick){ // Gdy gracz wygra
		document.getElementById(tekstId).style.color = "#1d993e";
	} else if(rodzaj == "koniecWalki" && postacDruga == nick){ // Gdy przeciwnik wygra
		document.getElementById(tekstId).style.color = "#d10e00";
	} else if(rodzaj == "odblokowanieLokacji"){
		document.getElementById(tekstId).style.color = "#59ffb7";
	}
	tekstId = "tekstId" + id; // Gdy funkcja zostanie wywołana po raz kolejny, będzie dotyczyła kolejnego paragrafu
	id += 1;
	if (id >= 12) {
		id = 1;
	}
}

	// Funkcja do resetu tekstu
function wyczyscTekst(){
	tekst = "&nbsp";
	var paragraf = document.getElementById("tekstId1");
	paragraf.innerHTML = "<span>" + tekst + "</span>";
	var paragraf = document.getElementById("tekstId2");
	paragraf.innerHTML = "<span>" + tekst + "</span>";
	var paragraf = document.getElementById("tekstId3");
	paragraf.innerHTML = "<span>" + tekst + "</span>";
	var paragraf = document.getElementById("tekstId4");
	paragraf.innerHTML = "<span>" + tekst + "</span>";
	var paragraf = document.getElementById("tekstId5");
	paragraf.innerHTML = "<span>" + tekst + "</span>";
	var paragraf = document.getElementById("tekstId6");
	paragraf.innerHTML = "<span>" + tekst + "</span>";
	var paragraf = document.getElementById("tekstId7");
	paragraf.innerHTML = "<span>" + tekst + "</span>";
	var paragraf = document.getElementById("tekstId8");
	paragraf.innerHTML = "<span>" + tekst + "</span>";
	var paragraf = document.getElementById("tekstId9");
	paragraf.innerHTML = "<span>" + tekst + "</span>";
	var paragraf = document.getElementById("tekstId10");
	paragraf.innerHTML = "<span>" + tekst + "</span>";
	var paragraf = document.getElementById("tekstId11");
	paragraf.innerHTML = "<span>" + tekst + "</span>";
	id = 1;
	tekstId = "tekstId" + id;
}

// Inicjalizacja podstawowych funkcji
wybierzCios("zwykly");

// ----- Funkcje ekwipunku -----

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev, el) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  el.appendChild(document.getElementById(data));
}
