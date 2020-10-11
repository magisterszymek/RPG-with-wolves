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
		
	//Ekwipunek
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
		
	//Textbox
		var id = 1;
		var tekstId = "tekstId1";
		var tekst = "null";
		var arr = tekst.split(' ');
		
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
		wybierzPrzeciwnika(biom, trudnosc);
		blokadaWalki = true;
		interval = setInterval(walka, 3000);
	}
}

	// Funkcja odpowiedzialna za loopa walki
function walka(){
	if(walkaTrwa == false) { tymczasoweZdrowie = zdrowieKoncowe; }
	walkaTrwa = true;
		kalkulacja = ((obrazeniaPrzeciwnik - (zakresPrzeciwnik / 2)) + (Math.floor(Math.random() * zakresPrzeciwnik))) - pancerz; // Obliczanie realnych obrażeń przeciwnika po trafieniu w pancerz
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
			document.getElementsByClassName("zdrowiePrzeciwnik")[0].style.width = zdrowieProcentPrzeciwnik + "%"
		}
}
  
function obraz(losowe) {
	if (losowe == -1) {
		document.getElementById("obrazPrzeciwnik").src = "Obrazy\\Przeciwnicy\\Brak przeciwnika.png";
	}
	else
	document.getElementById("obrazPrzeciwnik").src = "Obrazy\\Przeciwnicy\\" + prze_las_[losowe][0] + ".png";
}
  
  // Wybieranie przeciwnika
function wybierzPrzeciwnika(biom, trudnosc){
	let losowe = Math.floor(Math.random() * 3);
	obraz(losowe);
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
		
function loot(nazwaPrzeciwnik){
}

function wpiszTekst(rodzaj, postacPierwsza, postacDruga, liczba){
	switch(rodzaj){
		case "walka":{
			if(postacDruga == nick){
				var tekst = "&nbsp" + postacPierwsza + "&nbsp" + "zadał/a" + "&nbsp" + "Ci" + "&nbsp"+ liczba + "&nbsp" + "obrażeń!";
			} else if(postacPierwsza == nick){
				var tekst = "&nbsp" + postacPierwsza + "&nbsp" + "zadał/a" + "&nbsp" + "przeciwnikowi" + "&nbsp" + liczba + "&nbsp" + "obrażeń!";
			}
			break;
		}
	}
	var paragraf = document.getElementById(tekstId);
	paragraf.innerHTML = "<span>" + tekst + "</span>";
	tekstId = "tekstId" + id;
	id += 1;
	if (id >= 11) {
		id = 1;
	}
}

// Inicjalizacja podstawowych funkcji
wybierzCios("zwykly");
