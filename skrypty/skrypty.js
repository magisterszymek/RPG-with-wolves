// ---------- Zmienne ----------

// Przedmioty
	// Bronie ["nazwa", "opis", obrażenia, waga, cena]
		var prdm_bron_a_1 = ["Sztylet", "Nawet nie naostrzony.", "Broń", 2, 1, 5];
		var prdm_bron_a_2 = ["Przerobiony sztylet", "W końcu dopasowany do wilczej łapy.", "Broń", 3, 1, 8];
		var prdm_bron_a_3 = ["Nakładka na łapę", "Wygodniejsze niż mogło by się wydawać.", "Broń", 5, 1, 20];
		var prdm_bron_a_4 = ["Drewniany kostur", "Po prostu długi patyk.", "Broń", 2.5, 1, 5];
			
	// Zbroje ["nazwa", "opis", "rodzaj", pancerz, waga, cena]
		var prdm_zbroja_a_1 = ["Drewniany hełm", "Chroni, ale tylko trochę.", "Hełm", 0.5, 1, 5,];
		var prdm_zbroja_a_2 = ["Drewniany napierśnik", "Wytrzyma kilka uderzeń.", "Napierśnik", 1.5, 1, 10];
		var prdm_zbroja_a_3 = ["Drewniane nagolenniki", "Niewiele chronią, jednak lepsze one niż nic.", "Spodnie", 1, 1, 7];						
		var prdm_zbroja_a_4 = ["Drewniane ochronniki na łapy", "Jedne z dziwniejszych rzeczy jakie udało się wystrugać.", "Buty", 0.5, 1, 6];
		
		//utworzPrzedmiot("prdm_zbroja_a_1", "helm", "Obrazy/Przedmioty/Hełm.png");
		//utworzPrzedmiot("prdm_zbroja_a_2", "napiersnik", "Obrazy/Przedmioty/Napierśnik.png");
		//utworzPrzedmiot("prdm_zbroja_a_3", "spodnie", "Obrazy/Przedmioty/Spodnie.png");
		//utworzPrzedmiot("prdm_zbroja_a_4", "buty", "Obrazy/Przedmioty/Buty.png");
			
	// Inne przedmioty ["nazwa", "opis", "rodzaj", cena]
		var prdm_1 = ["Drewniany pojemnik", "Może przechowywać ciecze, dodając im posmaku żywicy.", "Przedmiot", 3];
		var prdm_2 = ["Połamany miecz", "Nadaje się już tylko na przetopienie.", "Przedmiot", 5];
		
		var grzyb_1 = ["Zielony grzyb", "Bardzo sycący.", "Składnik", 3];
		var grzyb_2 = ["Czerwony grzyb", "Trujący dla ludzi, zdrowy dla wilków.", "Składnik", 3];
		var grzyb_3 = ["Niebieski grzyb", "Duszący i niezbyt jadalny.", "Składnik", 5];
		var grzyb_4 = ["Różowy grzyb", "Nieczęsto spotykany, o specyficznych magicznych właściwościach.", "Składnik", 10];
		var grzyb_5 = ["Przezroczysty grzyb", "Niezwykle rzadki. Jego właściwości nie są znane.", "Składnik", 30];
		
	// Przedmioty do craftingu ["nazwa", "opis", cena]
		var crft_1 = ["Kłoda", "Gotowe do rąbania.", "Wytwarzanie", 1];
		klody = 0;
		var crft_2 = ["Drewno", "Służy głównie do budowy, ale można coś z niego wystrugać.", "Wytwarzanie", 3]
		drewno = 0;
		
// Przeciwnicy ["nazwa", "nazwa obrazka (bez spacji)", "opis", zdrowie, pancerz, obrażenia, zakres, trudność]
	var prze_lesnaDroga1_ = [
	["Leżące drzewo", "Leżące_drzewo", "Blokuje drogę.", 5, 1, 0, 0, 1],
	["null"]
	];
	var prze_lesnaDroga2_ = [
	["Leżące drzewo", "Leżące_drzewo", "Blokuje drogę.", 5, 1, 0, 0, 1],
	["Pułapka", "Pułapka", "Bardzo dobrze ukryta.", 10, 5, 2, 0, 1],
	["Grzybiarz", "Grzybiarz", "Zawędrował zbyt daleko.", 20, 2, 1, 2, 1]
	]
	var prze_zrujnowanyOboz_ = [
	["Szczurzy strażnik", "Szczurzy_strażnik", "Strażnik zrujnowanego obozu. Ciekawe w jakim celu...", 20, 5, 3, 2, 1],
	["null"]
	];
	var prze_lesnaDroga3_ = [
	["Grzybiarz", "Grzybiarz", "Idzie do grzybowego pola.", 20, 2, 1, 2, 1],
	["Pułapka", "Pułapka", "Bardzo dobrze ukryta.", 10, 5, 2, 0, 1],
	["Młody myśliwy", "Młody_myśliwy", "Niedoświadczony, ale nie beznadziejny.", 30, 4, 6, 2, 2]
	];
	var prze_grzybowePole_ = [
	["Grzybiarz", "Grzybiarz", "Ma koszyk pełen grzybów.", 20, 2, 1, 2, 1],
	["Doświadczony grzybiarz", "Doświadczony_grzybiarz", "Ma dwa koszyki pełne grzybów", 20, 3, 2, 2, 1],
	["Zielony grzyb", "Zielony_grzyb", "", 10, 0, 0, 0, 1],
	["Czerwony grzyb", "Czerwony_grzyb", "", 10, 0, 0, 0, 1],
	["Niebieski grzyb", "Niebieski_grzyb", "", 10, 0, 0, 0, 1]
	];
	var prze_wiezaMaga_ = [
	["Magiczne pole", "Magiczne_pole", "Stworzone do obrony wieży.", 1, 2000, 30, 0, 1],
	["null"]
	];
	var prze_dolina = []
		
// Statystyki
	// Gracz
		var nick = "Ruffus";
		var nickWpisano = false;
		var pancerzHelm = 0;
		var pancerzNapiersnik = 0;
		var pancerzSpodnie = 0;
		var pancerzButy = 0;
		var pancerzKoncowy = 0;
		var waluta = 20;
		var zdrowieBazowe = 20;		// Zdrowie Bazowe
		var zdrowieEkwipunek = 20;	// zdrowieBazowe + Zdrowie z ekwipunku
		var zdrowieKoncowe = 20;	// zdrowieEkwipunek + Zdrowie z buffów
		var kondycjaBazowa = 10;
		var kondycjaEkwipunek = 10;
		var kondycjaKoncowa = 10;
		var kondycjaRegeneracja = 0.25;
		var obrazeniaBazowe = 3;	// Obrażenia bazowe
		var obrazeniaEkwipunek = 3;	// obrażeniaBazowe + Obrażenia z ekwipunku
		var obrazeniaKoncowe = 3;	// obrażeniaEkwipunek + Obrażenia z wybranego ciosu
		var szybkoscBazowa = 1;		// Szybkość bazowa
		var szybkoscEkwipunek = 1;	// szybkoscBazowa + Szybkość z ekwipunku
		var szybkoscKoncowa	= 1;	// szybkoscEkwipunek + Szybkość z wybranego ciosu

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
		var wybranyCios = "default";
		var mnoznikObrazenCiosu = [1, 1.75, 0.65]; // Mnożniki obrażeń ciosów [zwykły, potężny, szybki]
		var szybkoscCiosu = [1, 1, 3] // Szybkości ciosu (ile razy na turę) [zwykły, potężny, szybki]
		
	// HTML
		var zdrowieMaksymalnePrzeciwnik = zdrowiePrzeciwnik;
		
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
		var blokadaZniszczonaDroga = true;
		var blokadaGrota = true;
		var blokadaLesnaDroga3 = true;
		var blokadaWiezaMaga = true;
		var blokadaGrzybowePole = true;
		var blokadaGory = true;
		var blokadaDolina = true;
		var blokadaMoczary = true;
		var resetKlikniety = false;
		
		var bossZrujnowanyOboz = false;
		
		var obozWlaczony = false; // Do obsługiwania zakładek przy włączonym obozie
		var craftingWlaczony = false;
		
// ---------- Koniec zmiennych ----------

function zakladka(NrZakladki) {
	switch(NrZakladki){
		case 0:{
		if(obozWlaczony == true){
			document.getElementsByClassName("oboz")[0].hidden = false;
		} else if(craftingWlaczony == true){
			document.getElementsByClassName("crafting")[0].hidden = false;
		}
		document.getElementById("zakladkaWalka").style.zIndex="0";
		document.getElementById("zakladkaEkwipunek").style.zIndex="-1";
		document.getElementById("zakladkaMenu").style.zIndex="-1";
		document.getElementById("zakladkaUstawienia").style.zIndex="-1";
		break;
		}
		case 1:{
		document.getElementsByClassName("oboz")[0].hidden = true;
		document.getElementsByClassName("crafting")[0].hidden = true;
		document.getElementById("zakladkaWalka").style.zIndex="-1";
		document.getElementById("zakladkaEkwipunek").style.zIndex="0";
		document.getElementById("zakladkaMenu").style.zIndex="-1";
		document.getElementById("zakladkaUstawienia").style.zIndex="-1";
		break;
		}
		case 2:{
		document.getElementsByClassName("oboz")[0].hidden = true;
		document.getElementsByClassName("crafting")[0].hidden = true;
		document.getElementById("zakladkaWalka").style.zIndex="-1";
		document.getElementById("zakladkaEkwipunek").style.zIndex="-1";
		document.getElementById("zakladkaMenu").style.zIndex="0";
		document.getElementById("zakladkaUstawienia").style.zIndex="-1";
		break;
		}
		case 3:{
		document.getElementsByClassName("oboz")[0].hidden = true;
		document.getElementsByClassName("crafting")[0].hidden = true;
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
	if(zdrowieKoncowe >= 0.1 && blokadaWalki == false && walkaTrwa == false){
		walkaTrwa = true;
		wpiszTekst("linia");
		wpiszTekst("linia");
		wybierzPrzeciwnika(biom, trudnosc);
		wpiszTekst("walkaPoczatek", nazwaPrzeciwnik);
		blokadaWalki = true;
		interval = setInterval(walka, 1000);
		interval2 = setInterval(kondycjaLiczenie, 250);
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
		if(zdrowiePrzeciwnik >= 0.1){
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
		odswiezZmienne("walka");
		} else {};
		kalkulacja = 0;
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
						if(blokadaWiezaMaga == true && blokadaGrzybowePole == true && blokadaZniszczonaDroga == true && blokadaLesnaDroga3 == true){
							wpiszTekst("odblokowanieLokacji", "Wieża maga");
							wpiszTekst("odblokowanieLokacji", "Grzybowe pole");
							wpiszTekst("odblokowanieLokacji", "Zniszczona droga");
							wpiszTekst("odblokowanieLokacji", "Leśna droga [3]");
							blokadaWiezaMaga = false;
							blokadaGrzybowePole = false;
							blokadaZniszczonaDroga = false;
							blokadaLesnaDroga3 = false;
							wiezaMaga.style.display = "inline";
							grzybowePole.style.display = "inline";
							zniszczonaDroga.style.display = "inline";
							lesnaDroga3.style.display = "inline";
						}
						break;
					}
					case "zniszczonaDroga":{
						if(blokadaGrota == true){
							wpiszTekst("odblokowanieLokacji", "Grota");
							blokadaGrota = false;
							grota.style.display = "inline";
						}
						break;
					}
					case "lesnaDroga3":{
						if(blokadaDolina == true && nazwaPrzeciwnik == "Młody myśliwy"){
							wpiszTekst("odblokowanieLokacji", "Dolina")
							blokadaDolina = false;
						}
					}
				}
			}
			obraz(-1);
			clearInterval(interval);
			clearInterval(interval2);
			odswiezZmienne("koniecWalki");
		}
}
  
function obraz(losowe, nazwa) {
	if (losowe == -1) {
		document.getElementById("obrazPrzeciwnik").src = "Obrazy/Przeciwnicy/Brak_przeciwnika.png";
	}
	else {
		document.getElementById("obrazPrzeciwnik").src = "Obrazy/Przeciwnicy/" + nazwa + ".png";
	}
}
  
  // Wybieranie przeciwnika
function wybierzPrzeciwnika(biom, trudnosc){
	losowe = Math.floor(Math.random() * 1000) + 1;
		switch(biom){
			case "lesnaDroga1":{
				losowe = 0;
				break;
			}
			case "lesnaDroga2":{
				if(losowe <= 800){
					losowe = 0;
				} else {
					losowe = 1
				}
				break;
			}
			case "zrujnowanyOboz":{
				losowe = 0;
				break;
			}
			case "lesnaDroga3":{
				if(losowe <= 400){
					losowe = 0;
				} else if(losowe > 400 && losowe <= 600){
					losowe = 1;
				} else {
					losowe = 2;
				}
				break;
			}
			case "grzybowePole":{
				if(losowe <= 600){
					losowe = 0;
				} else if(losowe > 600 && losowe <= 800){
					losowe = 1;
				} else if(losowe > 800 && losowe <= 900){
					losowe = 2;
				} else if(losowe > 900 && losowe <= 950){
					losowe = 3;
				} else {
					losowe = 4;
				}
				break;
			}
			case "wiezaMaga":{
				losowe = 0;
				break;
			}
		}
	biomTymczasowe = "prze_" + biom + "_";
	biomNazwa = window[biomTymczasowe];
	nazwaPrzeciwnik = biomNazwa[losowe][0];
	nazwaObrazekPrzeciwnik = biomNazwa[losowe][1];
	opisPrzeciwnik = biomNazwa[losowe][2];
	zdrowiePrzeciwnik = biomNazwa[losowe][3];
	pancerzPrzeciwnik = biomNazwa[losowe][4];
	obrazeniaPrzeciwnik = biomNazwa[losowe][5];
	zakresPrzeciwnik = biomNazwa[losowe][6];
	obraz(losowe, nazwaObrazekPrzeciwnik);
	lokacjaId = biom;
	odswiezZmienne("poczatekWalki");
}

	// Wybieranie ciosu
function wybierzCios(nazwaCiosu){
	wybranyCios = nazwaCiosu;
	switch(nazwaCiosu){
		case "default":{
			obrazeniaKoncowe = obrazeniaEkwipunek * mnoznikObrazenCiosu[0];
			szybkoscKoncowa = szybkoscEkwipunek * szybkoscCiosu[0];
			break;
		}
		case "pazury":{
			if(walkaTrwa == true && kondycjaKoncowa >= 4){
				przyciskPazury = document.getElementById("pazury");
				if(przyciskPazury.disabled == false){
					kondycjaKoncowa -= 4;
					kondycjaProcent = (kondycjaKoncowa / kondycjaEkwipunek) * 100;
					document.getElementById("kondycjaPasek").style.width = kondycjaProcent + "%"
					document.getElementById("kondycjaKoncowa").innerHTML = kondycjaKoncowa;
					setTimeout(function pazuryPierwszy(){
						obrazeniaKoncoweAtak = obrazeniaEkwipunek * mnoznikObrazenCiosu[0] + (obrazeniaEkwipunek * 0.25);
						szybkoscKoncowaAtak = szybkoscEkwipunek * szybkoscCiosu[0];
						kalkulacja = (obrazeniaKoncoweAtak - pancerzPrzeciwnik) * szybkoscKoncowaAtak; // Obliczanie realnych obrażeń gracza po trafieniu w pancerz
						if(kalkulacja < 0){
							kalkulacja = 0; // Zerowanie obrażeń jeśli mniejsze od zera
						}
						zdrowiePrzeciwnik = zdrowiePrzeciwnik - kalkulacja;
						wpiszTekst("walka", nick, nazwaPrzeciwnik, kalkulacja, "pazury");
						if(zdrowiePrzeciwnik < 0){ zdrowiePrzeciwnik = 0; }
						zdrowieProcentPrzeciwnik = (zdrowiePrzeciwnik / zdrowieMaksymalnePrzeciwnik) * 100;
						document.getElementById("zdrowiePasekPrzeciwnik").style.width = zdrowieProcentPrzeciwnik + "%";
						document.getElementById("zdrowiePrzeciwnik").innerHTML = zdrowiePrzeciwnik;
						przyciskPazury.disabled = true;
						przyciskPazury.style.backgroundColor = "red";
						if(kondycjaKoncowa < 4){ przyciskPazury.style.backgroundColor = "gray"; }
					}, 1);
					setTimeout(function pazuryDrugi(){
						if(zdrowiePrzeciwnik > 0){
							obrazeniaKoncoweAtak = obrazeniaEkwipunek * mnoznikObrazenCiosu[0] + (obrazeniaEkwipunek * 0.25);
							szybkoscKoncowaAtak = szybkoscEkwipunek * szybkoscCiosu[0];
							kalkulacja = (obrazeniaKoncoweAtak - pancerzPrzeciwnik) * szybkoscKoncowaAtak; // Obliczanie realnych obrażeń gracza po trafieniu w pancerz
							if(kalkulacja < 0){
								kalkulacja = 0; // Zerowanie obrażeń jeśli mniejsze od zera
							}
							zdrowiePrzeciwnik = zdrowiePrzeciwnik - kalkulacja;
							wpiszTekst("walka", nick, nazwaPrzeciwnik, kalkulacja, "pazury");
							if(zdrowiePrzeciwnik < 0){ zdrowiePrzeciwnik = 0; }
							zdrowieProcentPrzeciwnik = (zdrowiePrzeciwnik / zdrowieMaksymalnePrzeciwnik) * 100;
							document.getElementById("zdrowiePasekPrzeciwnik").style.width = zdrowieProcentPrzeciwnik + "%";
							document.getElementById("zdrowiePrzeciwnik").innerHTML = zdrowiePrzeciwnik;
							przyciskPazury.disabled = true;
							przyciskPazury.style.backgroundColor = "red";
							if(kondycjaKoncowa < 4){ przyciskPazury.style.backgroundColor = "gray"; }
							odswiezZmienne("sprawdzUmiejetnosci");
							setTimeout(walka("specjalny"), 1);
						}
					}, 300);
					odliczaniePazury = setTimeout(function odblokujPrzyciskPazury(){
						if(przyciskPazury.disabled == true && walkaTrwa == true){
						przyciskPazury.disabled = false; 
						przyciskPazury.style.backgroundColor = "";
						odswiezZmienne("sprawdzUmiejetnosci");
						}
					}, 2000);
					odswiezZmienne("sprawdzUmiejetnosci");
					setTimeout(walka("specjalny"), 1);
					break;
				} else {
					break;
				}
			}
		}
		case "kly":{
			if(walkaTrwa == true && kondycjaKoncowa >= 7){
				przyciskKly = document.getElementById("kly");
				if(przyciskKly.disabled == false){
					kondycjaKoncowa -= 7;
					kondycjaProcent = (kondycjaKoncowa / kondycjaEkwipunek) * 100;
					obrazeniaKoncoweAtak = obrazeniaEkwipunek * mnoznikObrazenCiosu[1];
					szybkoscKoncowaAtak = szybkoscEkwipunek * szybkoscCiosu[1];
					kalkulacja = (obrazeniaKoncoweAtak - pancerzPrzeciwnik) * szybkoscKoncowaAtak; // Obliczanie realnych obrażeń gracza po trafieniu w pancerz
					if(kalkulacja < 0){
					kalkulacja = 0; // Zerowanie obrażeń jeśli mniejsze od zera
					}
					zdrowiePrzeciwnik = zdrowiePrzeciwnik - kalkulacja;
					wpiszTekst("walka", nick, nazwaPrzeciwnik, kalkulacja, "kly");
					if(zdrowiePrzeciwnik < 0){ zdrowiePrzeciwnik = 0; }
					zdrowieProcentPrzeciwnik = (zdrowiePrzeciwnik / zdrowieMaksymalnePrzeciwnik) * 100;
					document.getElementById("kondycjaKoncowa").innerHTML = kondycjaKoncowa;
					document.getElementById("kondycjaPasek").style.width = kondycjaProcent + "%"
					document.getElementById("zdrowiePasekPrzeciwnik").style.width = zdrowieProcentPrzeciwnik + "%";
					document.getElementById("zdrowiePrzeciwnik").innerHTML = zdrowiePrzeciwnik;
					przyciskKly.disabled = true;
					przyciskKly.style.backgroundColor = "red";
					odliczanieKly = setTimeout(function odblokujPrzyciskKly(){
						if(przyciskKly.disabled == true && walkaTrwa == true){
						przyciskKly.disabled = false; 
						przyciskKly.style.backgroundColor = "";
						odswiezZmienne("sprawdzUmiejetnosci");
						}
					}, 3000);
					setTimeout(walka("specjalny"), 1);
					odswiezZmienne("sprawdzUmiejetnosci");
				}
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
		case "Leżące drzewo":{
			utworzPrzedmiot("crft_1", "crafting", "Obrazy/Przedmioty/Kłoda.png");
			break;
		}
		case "Grzybiarz":{
			losowe = Math.floor(Math.random() * 10) + 1;
			if(losowe <= 2){ 
				utworzPrzedmiot("grzyb_1", "skladnik", "Obrazy/Przedmioty/Zielony_grzyb.png");
			}
			losowe = Math.floor(Math.random() * 10) + 1;
			if(losowe <= 2){
				utworzPrzedmiot("grzyb_2", "skladnik", "Obrazy/Przedmioty/Czerwony_grzyb.png");
			}
			losowe = Math.floor(Math.random() * 10) + 1;
			if(losowe <= 2){
				utworzPrzedmiot("grzyb_3", "skladnik", "Obrazy/Przedmioty/Niebieski_grzyb.png");
			}
			break;
		}
		case "Szczurzy strażnik":{
			wpiszTekst("bossZrujnowanyObozKoniec");
			wpiszTekst("odblokowanieLokacji", "Zrujnowany obóz");
			bossZrujnowanyOboz = true;
			break;
		}
		case "Doświadczony grzybiarz":{
			losowe = Math.floor(Math.random() * 10) + 1;
			if(losowe <= 4){ 
				utworzPrzedmiot("grzyb_1", "skladnik", "Obrazy/Przedmioty/Zielony_grzyb.png");
			}
			losowe = Math.floor(Math.random() * 10) + 1;
			if(losowe <= 4){
				utworzPrzedmiot("grzyb_2", "skladnik", "Obrazy/Przedmioty/Czerwony_grzyb.png");
			}
			losowe = Math.floor(Math.random() * 10) + 1;
			if(losowe <= 4){
				utworzPrzedmiot("grzyb_3", "skladnik", "Obrazy/Przedmioty/Niebieski_grzyb.png");
			}
			break;
		}
		case "Pułapka":{
			break;
		}
		case "Młody myśliwy":{
			break;
		}
	}
}

	// Funkcja do wpisywania tekstu
function wpiszTekst(rodzaj, postacPierwsza, postacDruga, liczba, umiejetnosc){
	var pasek = document.createElement('i');
	var pasekBR = document.createElement('br');	
	switch(rodzaj){
		case "walka":{ // Funkcja wywoływana podczas walki
			if(postacDruga == nick){
				var tekst = " " + postacPierwsza + " " + "zadał" + " " + "Ci" + " "+ liczba + " " + "obrażeń!"; // Jeśli przeciwnik zadał obrażenia
			} else if(postacPierwsza == nick){
				if(umiejetnosc == "pazury"){
					var tekst = " " + "Zaatakowałeś przeciwnika pazurami za" + " " + liczba + " " + "obrażeń!"; // Jeśli gracz zadał obrażenia
				} else if(umiejetnosc == "kly"){
					var tekst = " " + "Ugryzłeś przeciwnika za" + " " + liczba + " " + "obrażeń!"; // Jeśli gracz zadał obrażenia
				} else {
					var tekst = " " + "Zadałeś" + " " + liczba + " " + "obrażeń!"; // Jeśli gracz zadał obrażenia
				}
			}
			break;
		}
		case "walkaPoczatek":{
			var tekst = " " + "Zostałeś zaatakowany przez" + " " + postacPierwsza + "!";
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
			break;
		}
		case "bossZrujnowanyObozKoniec":{
			var tekst = " " + "'Nie spodziewałem się, że będziesz taki silny! Wpuszczę Cię do obozu. Wiedz jednak, że w nim agresja nie będzie tolerowana.'";
			break;
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
	} else if(rodzaj == "item" || rodzaj == "bossZrujnowanyObozKoniec"){
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
		odczyt();
		getNick();
		if(nickWpisano == true){ setInterval(zapis, 30000); }
		if (localStorage.getItem("zakladka") !== null) {
			var zakladka = localStorage.getItem("zakladka");
			document.getElementsByClassName("zakladka")[zakladka].style.zIndex = 0;
		}
		else {
			localStorage.setItem("zakladka", 0);
			document.getElementsByClassName("zakladka")[0].style.zIndex = 0;
		}
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
	if(walkaTrwa == null){} else {
	var liczba = 1;
	arr = [];
	while (liczba <= 159) {
		slot = "slot" + liczba;
		calySlot = document.getElementById(slot).outerHTML;
		arr.push(calySlot);
		liczba += 1;
	}
	wyposazenieArray = [document.getElementById("slotHelm").outerHTML, document.getElementById("slotNapiersnik").outerHTML, document.getElementById("slotSpodnie").outerHTML, document.getElementById("slotButy").outerHTML];
	statystykiArray = [nick, nickWpisano, pancerzHelm, pancerzNapiersnik, pancerzSpodnie, pancerzButy, pancerzKoncowy, zdrowieBazowe, zdrowieEkwipunek, zdrowieKoncowe, kondycjaBazowa, kondycjaEkwipunek, kondycjaKoncowa, obrazeniaBazowe, obrazeniaEkwipunek, obrazeniaKoncowe, szybkoscBazowa, szybkoscEkwipunek, szybkoscKoncowa, blokadaPosterunekWilkow, blokadaZrujnowanyOboz, blokadaLesnaDroga2, blokadaZniszczonaDroga, blokadaGrota, blokadaLesnaDroga3, blokadaWiezaMaga, blokadaGrzybowePole, blokadaDolina, blokadaMoczary, bossZrujnowanyOboz];
	magazynArray = [klody, drewno];
	localStorage.setItem("Ekwipunek", JSON.stringify(arr));
	localStorage.setItem("Wyposazenie", JSON.stringify(wyposazenieArray));
	localStorage.setItem("Statystyki", JSON.stringify(statystykiArray));
	localStorage.setItem("Magazyn", JSON.stringify(magazynArray));
	odswiezZmienne("zapis");
	}
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
		nickWpisano = statystykiArray[1];
		pancerzHelm = statystykiArray[2];
		pancerzNapiersnik = statystykiArray[3];
		pancerzSpodnie = statystykiArray[4];
		pancerzButy = statystykiArray[5];
		pancerzKoncowy = statystykiArray[6];
		zdrowieBazowe = statystykiArray[7];
		zdrowieEkwipunek = statystykiArray[8];
		zdrowieKoncowe = statystykiArray[9];
		kondycjaBazowa = statystykiArray[10];
		kondycjaEkwipunek = statystykiArray[11];
		kondycjaKoncowa = statystykiArray[12];
		obrazeniaBazowe = statystykiArray[13];
		obrazeniaEkwipunek = statystykiArray[14];
		obrazeniaKoncowe = statystykiArray[15];
		szybkoscBazowa = statystykiArray[16];
		szybkoscEkwipunek = statystykiArray[17];
		szybkoscKoncowa = statystykiArray[18];
		blokadaPosterunekWilkow = statystykiArray[19];
		blokadaZrujnowanyOboz = statystykiArray[20];
		blokadaLesnaDroga2 = statystykiArray[21];
		blokadaZniszczonaDroga = statystykiArray[22];
		blokadaGrota = statystykiArray[23];
		blokadaLesnaDroga3 = statystykiArray[24];
		blokadaWiezaMaga = statystykiArray[25];
		blokadaGrzybowePole = statystykiArray[26];
		blokadaDolina = statystykiArray[27];
		blokadaMoczary = statystykiArray[28];
		bossZrujnowanyOboz = statystykiArray[29];
		zdrowieKoncowe = zdrowieEkwipunek;
		kondycjaKoncowa = kondycjaEkwipunek;
		if(blokadaGory == false){ document.getElementsByClassName("przyciskGory")[0].style.display = "inline"; }
	} else {
		statystykiArray = [nick, nickWpisano, pancerzHelm, pancerzNapiersnik, pancerzSpodnie, pancerzButy, pancerzKoncowy, zdrowieBazowe, zdrowieEkwipunek, zdrowieKoncowe, kondycjaBazowa, kondycjaEkwipunek, kondycjaKoncowa, obrazeniaBazowe, obrazeniaEkwipunek, obrazeniaKoncowe, szybkoscBazowa, szybkoscEkwipunek, szybkoscKoncowa, blokadaPosterunekWilkow, blokadaZrujnowanyOboz, blokadaLesnaDroga2, blokadaZniszczonaDroga, blokadaGrota, blokadaLesnaDroga3, blokadaWiezaMaga, blokadaGrzybowePole, blokadaDolina, blokadaMoczary, bossZrujnowanyOboz];
		localStorage.setItem("Statystyki", JSON.stringify(statystykiArray));
	}
	if (localStorage.getItem("Magazyn") !== null) {
		magazynArray = JSON.parse(localStorage.getItem("Magazyn"));
		klody = magazynArray[0];
		drewno = magazynArray[0];
	} else {
		magazynArray = [klody, drewno];
		localStorage.setItem("Magazyn", JSON.stringify(magazynArray));
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
			document.getElementById("opisStatystyka").innerHTML = przedmiotOpis[3];
		} else if(przedmiotOpis[2] == "Hełm" || przedmiotOpis[2] == "Napierśnik" || przedmiotOpis[2] == "Spodnie" || przedmiotOpis[2] == "Buty"){
			document.getElementById("opisTyp").innerHTML = "Pancerz:";
			document.getElementById("opisStatystyka").innerHTML = przedmiotOpis[3];
		} else { 
		document.getElementById("opisTyp").innerHTML = "";
		document.getElementById("opisCena").innerHTML = przedmiotOpis[3];
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
	switch(rodzaj){
		case "walka":{
			zdrowieProcent = (zdrowieKoncowe / zdrowieEkwipunek) * 100;
			kondycjaProcent = (kondycjaKoncowa / kondycjaEkwipunek) * 100;
			zdrowieProcentPrzeciwnik = (zdrowiePrzeciwnik / zdrowieMaksymalnePrzeciwnik) * 100;
			document.getElementById("zdrowiePasek").style.width = zdrowieProcent + "%"
			document.getElementById("kondycjaPasek").style.width = kondycjaProcent + "%"
			document.getElementById("zdrowiePasekPrzeciwnik").style.width = zdrowieProcentPrzeciwnik + "%"
			document.getElementById("zdrowieKoncowe").innerHTML = zdrowieKoncowe;
			document.getElementById("kondycjaKoncowa").innerHTML = kondycjaKoncowa;
			document.getElementById("zdrowiePrzeciwnik").innerHTML = zdrowiePrzeciwnik;
		break;
		}
		case "koniecWalki":{
			walkaKoniec = true;
			walkaTrwa = false;
			blokadaWalki = false;
			nazwaPrzeciwnik = "Brak przeciwnika";
			opisPrzeciwnik = "";
			zdrowieKoncowe = zdrowieEkwipunek;
			kondycjaKoncowa = kondycjaEkwipunek;
			zdrowieMaksymalnePrzeciwnik = 0;
			zdrowiePrzeciwnik = 0;
			pancerzPrzeciwnik = 0;
			obrazeniaPrzeciwnik = 0;
			zakresPrzeciwnik = 0;
			zdrowieProcent = (zdrowieKoncowe / zdrowieEkwipunek) * 100;
			kondycjaProcent = (kondycjaKoncowa / kondycjaEkwipunek) * 100;
			zdrowieProcentPrzeciwnik = (zdrowiePrzeciwnik / zdrowieMaksymalnePrzeciwnik) * 100;
			document.getElementById("nick").innerHTML = nick;
			document.getElementById("zdrowieKoncowe").innerHTML = zdrowieKoncowe;
			document.getElementById("kondycjaKoncowa").innerHTML = kondycjaKoncowa;
			document.getElementById("zdrowiePrzeciwnik").innerHTML = zdrowiePrzeciwnik;
			document.getElementById("pancerzKoncowy").innerHTML = pancerzKoncowy;
			document.getElementById("pancerzPrzeciwnik").innerHTML = pancerzPrzeciwnik;
			document.getElementById("nazwaPrzeciwnika").innerHTML = nazwaPrzeciwnik;
			document.getElementById("zdrowieMaksymalne").innerHTML = zdrowieEkwipunek;
			document.getElementById("kondycjaMaksymalna").innerHTML = kondycjaEkwipunek;
			document.getElementById("zdrowieMaksymalnePrzeciwnik").innerHTML = zdrowieMaksymalnePrzeciwnik;
			document.getElementById("zdrowiePasek").style.width = zdrowieProcent + "%"
			document.getElementById("kondycjaPasek").style.width = kondycjaProcent + "%"
			document.getElementsByClassName("zdrowiePrzeciwnik")[0].style.width = "0%"
			if(document.getElementById("kly").disabled == true){
				document.getElementById("kly").disabled = false;
				document.getElementById("kly").style.backgroundColor = "";
				clearTimeout(odliczanieKly);
			}
			if(document.getElementById("pazury").disabled == true){
				document.getElementById("pazury").disabled = false;
				document.getElementById("pazury").style.backgroundColor = "";
				clearTimeout(odliczaniePazury);
			}
			if(kondycjaKoncowa < 7){ document.getElementById("kly").style.backgroundColor = "gray"; } else if(document.getElementById("kly").disabled == false){ document.getElementById("kly").style.backgroundColor = ""; } else { document.getElementById("kly").style.backgroundColor = "red"; }
			if(kondycjaKoncowa < 4){ document.getElementById("pazury").style.backgroundColor = "gray"; } else if(document.getElementById("pazury").disabled == false){ document.getElementById("pazury").style.backgroundColor = ""; } else { document.getElementById("pazury").style.backgroundColor = "red"; }
			break;
		}
		case "zapis":{
			zdrowieMaksymalnePrzeciwnik = zdrowiePrzeciwnik;
			document.getElementById("nick").innerHTML = nick;
			document.getElementById("zdrowieKoncowe").innerHTML = zdrowieKoncowe;
			document.getElementById("kondycjaKoncowa").innerHTML = kondycjaKoncowa;
			document.getElementById("zdrowiePrzeciwnik").innerHTML = zdrowiePrzeciwnik;
			document.getElementById("pancerzKoncowy").innerHTML = pancerzKoncowy;
			document.getElementById("pancerzPrzeciwnik").innerHTML = pancerzPrzeciwnik;
			document.getElementById("nazwaPrzeciwnika").innerHTML = nazwaPrzeciwnik;
			document.getElementById("zdrowieMaksymalne").innerHTML = zdrowieEkwipunek;
			document.getElementById("kondycjaMaksymalna").innerHTML = kondycjaEkwipunek;
			document.getElementById("zdrowieMaksymalnePrzeciwnik").innerHTML = zdrowieMaksymalnePrzeciwnik;
			break;
		}
		case "poczatekWalki":{
			zdrowieMaksymalnePrzeciwnik = zdrowiePrzeciwnik;
			zdrowieProcent = (zdrowieKoncowe / zdrowieEkwipunek) * 100
			kondycjaProcent = (kondycjaKoncowa / kondycjaEkwipunek) * 100;
			zdrowieProcentPrzeciwnik = (zdrowiePrzeciwnik / zdrowieMaksymalnePrzeciwnik) * 100
			document.getElementById("nick").innerHTML = nick;
			document.getElementById("zdrowieKoncowe").innerHTML = zdrowieKoncowe;
			document.getElementById("kondycjaKoncowa").innerHTML = kondycjaKoncowa;
			document.getElementById("zdrowiePrzeciwnik").innerHTML = zdrowiePrzeciwnik;
			document.getElementById("pancerzKoncowy").innerHTML = pancerzKoncowy;
			document.getElementById("pancerzPrzeciwnik").innerHTML = pancerzPrzeciwnik;
			document.getElementById("nazwaPrzeciwnika").innerHTML = nazwaPrzeciwnik;
			document.getElementById("zdrowieMaksymalne").innerHTML = zdrowieEkwipunek;
			document.getElementById("kondycjaMaksymalna").innerHTML = kondycjaEkwipunek;
			document.getElementById("zdrowieMaksymalnePrzeciwnik").innerHTML = zdrowieMaksymalnePrzeciwnik;
			document.getElementById("zdrowiePasek").style.width = zdrowieProcent + "%"
			document.getElementById("kondycjaPasek").style.width = kondycjaProcent + "%"
			document.getElementById("zdrowiePasekPrzeciwnik").style.width = zdrowieProcentPrzeciwnik + "%"
			break;
		}
		case "sprawdzUmiejetnosci":{
			if(kondycjaKoncowa < 7){ document.getElementById("kly").style.backgroundColor = "gray"; } else if(document.getElementById("kly").disabled == false){ document.getElementById("kly").style.backgroundColor = ""; } else { document.getElementById("kly").style.backgroundColor = "red"; }
			if(kondycjaKoncowa < 4){ document.getElementById("pazury").style.backgroundColor = "gray"; } else if(document.getElementById("pazury").disabled == false){ document.getElementById("pazury").style.backgroundColor = ""; } else { document.getElementById("pazury").style.backgroundColor = "red"; }
		}
	}
}

function lokacja(lokacja){
	switch(lokacja){
		case "pradawnyLas":{
			obozWlaczony = false;
			document.getElementsByClassName("oboz")[0].hidden=true;
			las.style.display = "none";
			dolina.style.display = "none";
			mapa.src = "Obrazy/Mapa/PradawnyLas.png";
			obozWilkow.style.display = "inline";
			lesnaDroga1.style.display = "inline";
			if(blokadaPosterunekWilkow == false){ posterunekWilkow.style.display = "inline"; }
			if(blokadaZrujnowanyOboz == false){ zrujnowanyOboz.style.display = "inline"; }
			if(blokadaLesnaDroga2 == false){ lesnaDroga2.style.display = "inline"; }
			if(blokadaWiezaMaga == false){ wiezaMaga.style.display = "inline"; }
			if(blokadaGrzybowePole == false){ grzybowePole.style.display = "inline"; }
			if(blokadaZniszczonaDroga == false){ zniszczonaDroga.style.display = "inline"; }
			if(blokadaGrota == false){ grota.style.display = "inline"; }
			if(blokadaLesnaDroga3 == false){ lesnaDroga3.style.display = "inline"; }
			cofnij.style.display = "inline";
			cofnijOboz.style.display = "none";
			break;
		}
		case "obozWilkow":{
			craftingWlaczony = false;
			obozWlaczony = true;
			document.getElementsByClassName("oboz")[0].hidden = false;
			document.getElementsByClassName("crafting")[0].hidden = true;
			document.getElementById("licznikKlody").innerHTML = klody;
			document.getElementById("licznikDrewno").innerHTML = drewno;
			break;
		}
		case "crafting":{
			craftingWlaczony = true;
			obozWlaczony = false;
			document.getElementsByClassName("crafting")[0].hidden = false;
			document.getElementsByClassName("oboz")[0].hidden = true;
			document.getElementById("licznikKlodyCrafting").innerHTML = klody;
			document.getElementById("licznikDrewnoCrafting").innerHTML = drewno;
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
			if(bossZrujnowanyOboz == false){
				rozpocznijWalke("zrujnowanyOboz", 1);
			} else {
			mapa.src = "Obrazy/Mapa/ZrujnowanyObóz.png";
			obozWilkow.style.display = "none";
			lesnaDroga1.style.display = "none";
			posterunekWilkow.style.display = "none";
			zrujnowanyOboz.style.display = "none";
			lesnaDroga2.style.display = "none";
			wiezaMaga.style.display = "none";
			grzybowePole.style.display = "none";
			zniszczonaDroga.style.display = "none";
			grota.style.display = "none";
			lesnaDroga3.style.display = "none";
			cofnij.style.display = "none";
			cofnijOboz.style.display = "inline";
			}
			break;
		}
		case "lesnaDroga2":{
			rozpocznijWalke("lesnaDroga2", 1);
			break;
		}
		case "wiezaMaga":{
			rozpocznijWalke("wiezaMaga", 1);
			break;
		}
		case "grzybowePole":{
			rozpocznijWalke("grzybowePole", 1);
			break;
		}
		case "lesnaDroga3":{
			rozpocznijWalke("lesnaDroga3", 1);
			break;
		}
		case "cofnij":{
			document.getElementsByClassName("crafting")[0].hidden=true;
			document.getElementsByClassName("oboz")[0].hidden=true;
			las.style.display = "inline";
			if(blokadaDolina == false){ dolina.style.display = "inline"; }
			mapa.src = "Obrazy/Mapa/Mapa.png";
			obozWilkow.style.display = "none";
			lesnaDroga1.style.display = "none";
			posterunekWilkow.style.display = "none";
			zrujnowanyOboz.style.display = "none";
			lesnaDroga2.style.display = "none";
			wiezaMaga.style.display = "none";
			grzybowePole.style.display = "none";
			zniszczonaDroga.style.display = "none";
			grota.style.display = "none";
			lesnaDroga3.style.display = "none";
			cofnij.style.display = "none";
			break;
		}
	}
}

function crafting(przedmiot, doBazy, element){
	switch(przedmiot){
		case "drewno":{
			if(klody >= 3){
				klody -= 3;
				if(doBazy == true){
					drewno += 1;
				} else {
					utworzPrzedmiot("crft_2", "skladnik", "Obrazy/Przedmioty/Drewno.png");
				}
			}
			document.getElementById("licznikKlodyCrafting").innerHTML = klody;
			document.getElementById("licznikDrewnoCrafting").innerHTML = drewno;
			break;
		}
		case "przerobionySztylet":{
			if(drewno >= 1){
				var liczba = 1;
				while (liczba <= 159) {
					slot = "slot" + liczba;
					calySlotCrafting = document.getElementById(slot);
						if(calySlotCrafting.hasChildNodes() == true){
							calySlotChild = calySlotCrafting.childNodes[0];
							if(calySlotChild.lang == "prdm_bron_a_1"){
								calySlotCrafting.removeChild(calySlotChild);
								drewno -= 1;
								utworzPrzedmiot("prdm_bron_a_2", "bron", "Obrazy/Przedmioty/Przerobiony_sztylet.png");
								break;
							}
						}
					liczba += 1;
				}
			}
			document.getElementById("licznikDrewnoCrafting").innerHTML = drewno;
			break;
		}
		case "nakladkaNaLape":{ // TODO: sprawdzanie czy sztylet znajduje się w ekwipunku
			break;
		}
		case "drewnianyHelm":{
			if(drewno >= 1){
				drewno -= 1;
				utworzPrzedmiot("prdm_zbroja_a_1", "helm", "Obrazy/Przedmioty/Drewniany_hełm.png");
			}
			document.getElementById("licznikDrewnoCrafting").innerHTML = drewno;
			break;
		}
		case "drewnianyNapiersnik":{
			if(drewno >= 3){
				drewno -= 3;
				utworzPrzedmiot("prdm_zbroja_a_2", "napiersnik", "Obrazy/Przedmioty/Drewniany_napierśnik.png");
			}
			document.getElementById("licznikDrewnoCrafting").innerHTML = drewno;
			break;
		}
		case "drewnianeNagolenniki":{
			if(drewno >= 2){
				drewno -= 2;
				utworzPrzedmiot("prdm_zbroja_a_3", "spodnie", "Obrazy/Przedmioty/Drewniane_nagolenniki.png");
			}
			document.getElementById("licznikDrewnoCrafting").innerHTML = drewno;
			break;
		}
		case "drewnianeOchronnikiNaLapy":{
			if(drewno >= 2){
				drewno -= 2;
				utworzPrzedmiot("prdm_zbroja_a_4", "buty", "Obrazy/Przedmioty/Drewniane_ochronniki_na_łapy.png");
			}
			document.getElementById("licznikDrewnoCrafting").innerHTML = drewno;
			break;
		}
		case "drewnianyPojemnik":{
			if(drewno >= 1){
				drewno -= 1;
				utworzPrzedmiot("prdm_1", "przedmiot", "Obrazy/Przedmioty/Drewniany_pojemnik.png");
			}
			document.getElementById("licznikDrewnoCrafting").innerHTML = drewno;
			break;
		}
		case "drewnianyKostur":{
			if(drewno >= 2){
				drewno -= 2;
				utworzPrzedmiot("prdm_bron_a_4", "bron", "Obrazy/Przedmioty/Drewniany_kostur.png");
			}
			document.getElementById("licznikDrewnoCrafting").innerHTML = drewno;
			break;
		}
	}
	document.getElementById(element).style.filter = "brightness(40%)";
	setTimeout(function stop(){ document.getElementById(element).style.filter = ""; }, 50);
}

function craftingInfo(przedmiot){
	switch(przedmiot){
		case "drewno":{
			przedmiotOpis = crft_1;
			document.getElementById("craftingPrzedmiot").innerHTML = przedmiotOpis[0];
			document.getElementById("craftingOpis").innerHTML = przedmiotOpis[1];
			document.getElementById("craftingKoszt").innerHTML = "3x Kłoda";
			break;
		}
		case "przerobionySztylet":{
			przedmiotOpis = prdm_bron_a_1;
			document.getElementById("craftingPrzedmiot").innerHTML = przedmiotOpis[0];
			document.getElementById("craftingOpis").innerHTML = przedmiotOpis[1];
			document.getElementById("craftingKoszt").innerHTML = "1x Sztylet, 1x Drewno";
			break;
		}
		case "nakladkaNaLape":{
			przedmiotOpis = prdm_bron_a_2;
			document.getElementById("craftingPrzedmiot").innerHTML = przedmiotOpis[0];
			document.getElementById("craftingOpis").innerHTML = przedmiotOpis[1];
			document.getElementById("craftingKoszt").innerHTML = "3x Sztylet, 1x Drewno";
			break;
		}
		case "drewnianyHelm":{
			przedmiotOpis = prdm_zbroja_a_1;
			document.getElementById("craftingPrzedmiot").innerHTML = przedmiotOpis[0];
			document.getElementById("craftingOpis").innerHTML = przedmiotOpis[1];
			document.getElementById("craftingKoszt").innerHTML = "1x Drewno";
			break;
		}
		case "drewnianyNapiersnik":{
			przedmiotOpis = prdm_zbroja_a_2;
			document.getElementById("craftingPrzedmiot").innerHTML = przedmiotOpis[0];
			document.getElementById("craftingOpis").innerHTML = przedmiotOpis[1];
			document.getElementById("craftingKoszt").innerHTML = "3x Drewno";
			break;
		}
		case "drewnianeNagolenniki":{
			przedmiotOpis = prdm_zbroja_a_3;
			document.getElementById("craftingPrzedmiot").innerHTML = przedmiotOpis[0];
			document.getElementById("craftingOpis").innerHTML = przedmiotOpis[1];
			document.getElementById("craftingKoszt").innerHTML = "2x Drewno";
			break;
		}
		case "drewnianeOchronnikiNaLapy":{
			przedmiotOpis = prdm_zbroja_a_4;
			document.getElementById("craftingPrzedmiot").innerHTML = przedmiotOpis[0];
			document.getElementById("craftingOpis").innerHTML = przedmiotOpis[1];
			document.getElementById("craftingKoszt").innerHTML = "2x Drewno";
			break;
		}
		case "drewnianyPojemnik":{
			przedmiotOpis = prdm_1;
			document.getElementById("craftingPrzedmiot").innerHTML = przedmiotOpis[0];
			document.getElementById("craftingOpis").innerHTML = przedmiotOpis[1];
			document.getElementById("craftingKoszt").innerHTML = "1x Drewno";
			break;
		}
		case "drewnianyKostur":{
			przedmiotOpis = prdm_bron_a_3;
			document.getElementById("craftingPrzedmiot").innerHTML = przedmiotOpis[0];
			document.getElementById("craftingOpis").innerHTML = przedmiotOpis[1];
			document.getElementById("craftingKoszt").innerHTML = "2x Drewno";
			break;
		}
	}
}

function wrzucPrzedmioty(przedmiot){
	switch(przedmiot){
		case "klody":{
			var liczba = 1;
			while (liczba <= 159) {
				slot = "slot" + liczba;
				calySlotCrafting = document.getElementById(slot);
					if(calySlotCrafting.hasChildNodes() == true){
						calySlotChild = calySlotCrafting.childNodes[0];
						if(calySlotChild.lang == "crft_1"){
							calySlotCrafting.removeChild(calySlotChild);
							klody += 1;
							document.getElementById("licznikKlody").innerHTML = klody;
							document.getElementById("licznikKlodyCrafting").innerHTML = klody;
						}
					}
				liczba += 1;
			}
			break;
		}
		case "drewno":{
			var liczba = 1;
			while (liczba <= 159) {
				slot = "slot" + liczba;
				calySlotCrafting = document.getElementById(slot);
					if(calySlotCrafting.hasChildNodes() == true){
						calySlotChild = calySlotCrafting.childNodes[0];
						if(calySlotChild.lang == "crft_2"){
							calySlotCrafting.removeChild(calySlotChild);
							drewno += 1;
							document.getElementById("licznikDrewno").innerHTML = drewno;
							document.getElementById("licznikDrewnoCrafting").innerHTML = drewno;
						}
					}
				liczba += 1;
			}
			break;
		}
	}
}

function getNick(zmienna) {
	if (nickWpisano == true) {
		document.getElementsByClassName("wyborNicku")[0].style.visibility = "hidden";
	}
	else if (nickWpisano == false && zmienna == "klik") {
		nick = document.getElementById("wpiszNick").value;
		document.getElementsByClassName("wyborNicku")[0].style.visibility = "hidden";
		nickWpisano = true;
		zapis();
    }
}

function kondycjaLiczenie(){
	if(kondycjaKoncowa < kondycjaEkwipunek){
	kondycjaKoncowa += kondycjaRegeneracja;
	if(kondycjaKoncowa > kondycjaEkwipunek){ kondycjaKoncowa = kondycjaEkwipunek };
	kondycjaProcent = (kondycjaKoncowa / kondycjaEkwipunek) * 100;
	document.getElementById("kondycjaPasek").style.width = kondycjaProcent + "%"
	document.getElementById("kondycjaKoncowa").innerHTML = kondycjaKoncowa;
	odswiezZmienne("sprawdzUmiejetnosci");
	}
}
