// ---------- Array'e ----------
// Główne array'e (poza tymi od zapisu) wykorzystywane do przechowywania informacji o przedmiotach i przeciwnikach.

// Przedmioty
	// Bronie ["nazwa", "opis", "rodzaj", obrażenia, waga, cena]
		var prdm_bron_a_1 = ["Sztylet", "Nawet nie naostrzony.", "Broń", 2, 1, 5];
		var prdm_bron_a_2 = ["Przerobiony sztylet", "W końcu dopasowany do wilczej łapy.", "Broń", 3, 1, 8];
		var prdm_bron_a_3 = ["Nakładka na łapę", "Wygodniejsze niż mogło by się wydawać.", "Broń", 5, 1, 20];
		var prdm_bron_a_4 = ["Drewniany kostur", "Po prostu długi patyk.", "Broń", 1.5, 1, 5];
		var prdm_bron_a_5 = ["Patyk", "Lepszy niż nic.", "Broń", 1, 1, 2];
		var prdm_bron_a_5 = ["Łuk", "Cięciwa jest trochę naderwana.", "Broń", 5, 1, 15];
			
	// Zbroje ["nazwa", "opis", "rodzaj", pancerz, waga, cena]
		var prdm_zbroja_a_1 = ["Drewniany hełm", "Chroni, ale tylko trochę.", "Hełm", 0.5, 1, 5,];
		var prdm_zbroja_a_2 = ["Drewniany napierśnik", "Wytrzyma kilka uderzeń.", "Napierśnik", 1.5, 1, 10];
		var prdm_zbroja_a_3 = ["Drewniane nagolenniki", "Niewiele chronią, jednak lepsze one niż nic.", "Spodnie", 1, 1, 7];						
		var prdm_zbroja_a_4 = ["Drewniane ochronniki na łapy", "Jedne z dziwniejszych rzeczy jakie udało się wystrugać.", "Buty", 0.5, 1, 6];
		var prdm_zbroja_b_1 = ["Wzmocniony drewniany hełm", "W końcu da się go nosić bez otarć.", "Hełm", 1, 1, 10,];
		var prdm_zbroja_b_2 = ["Wzmocniony drewniany napierśnik", "Całkiem lekki.", "Napierśnik", 2	, 1, 20];
		var prdm_zbroja_b_3 = ["Wzmocnione drewniane nagolenniki", "Twarde ale elastyczne... na swój sposób.", "Spodnie", 1.5, 1, 14];						
		var prdm_zbroja_b_4 = ["Wzmocnione drewniane ochronniki na łapy", "Jedne z lepszych dzieł Nagala.", "Buty", 1, 1, 12];

	// Inne przedmioty ["nazwa", "opis", "rodzaj", cena]
		var prdm_1 = ["Drewniany pojemnik", "Może przechowywać ciecze, dodając im posmaku żywicy.", "Przedmiot", 3];
		var prdm_2 = ["Połamany miecz", "Nadaje się już tylko na przetopienie.", "Przedmiot", 5];
		
	// Grzyby [Takie same jak przedmioty]
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
	var prze_lesnaDroga1_ = [ // Przeciwnicy z "Leśna droga [1]"
	["Leżące drzewo", "Leżące_drzewo", "Blokuje drogę.", 5, 1, 0, 0, 1],
	["null"]
	];
	var prze_zniszczonaDroga_ = [ // Przeciwnicy z "Zniszczona droga"
	["Leżące drzewo", "Leżące_drzewo", "Blokuje drogę.", 5, 1, 0, 0, 1],
	["null"]
	];
	var prze_lesnaDroga2_ = [ // Przeciwnicy z "Leśna droga [2]"
	["Leżące drzewo", "Leżące_drzewo", "Blokuje drogę.", 5, 1, 0, 0, 1],
	["Grzybiarz", "Grzybiarz", "Przepłynął przez rzekę?!", 20, 2, 2, 1, 1],
	]
	var prze_zrujnowanyOboz_ = [ // Przeciwnicy ze "Zrujnowany obóz"
	["Szczurzy strażnik", "Szczurzy_strażnik", "Strażnik zrujnowanego obozu. Ciekawe w jakim celu...", 20, 5, 3, 2, 1],
	["null"]
	];
	var prze_lesnaDroga3_ = [ // Przeciwnicy z "Leśna droga [3]"
	["Grzybiarz", "Grzybiarz", "Idzie do grzybowego pola.", 20, 2, 2, 1, 1],
	["Pułapka", "Pułapka", "Bardzo dobrze ukryta.", 10, 3, 2, 0, 1],
	["Młody myśliwy", "Młody_myśliwy", "Niedoświadczony, ale nie beznadziejny.", 25, 3, 5, 0.5, 2]
	];
	var prze_grzybowePole_ = [ // Przeciwnicy z "Grzybowe Pole"
	["Grzybiarz", "Grzybiarz", "Ma koszyk pełen grzybów.", 20, 2, 2, 1, 1],
	["Doświadczony grzybiarz", "Doświadczony_grzybiarz", "Ma dwa koszyki pełne grzybów", 20, 3, 2, 2, 1],
	["Zielony grzyb", "Zielony_grzyb", "", 10, 0, 0, 0, 1],
	["Czerwony grzyb", "Czerwony_grzyb", "", 10, 0, 0, 0, 1],
	["Niebieski grzyb", "Niebieski_grzyb", "", 10, 0, 0, 0, 1]
	];
	var prze_wyjscieZLasu_ = [ // Przeciwnicy z "Wyjście z lasu"
	["Młody myśliwy", "Młody_myśliwy", "Niedoświadczony, ale nie beznadziejny.", 25, 3, 5, 0.5, 2],
	["Grzybiarz", "Grzybiarz", "Idzie do grzybowego pola.", 20, 2, 2, 1, 1],
	];
	var prze_wiezaMaga_ = [ // Przeciwnicy z "Wieża maga" NIEWYKORZYSTYWANE
	["Magiczne pole", "Magiczne_pole", "Stworzone do obrony wieży.", 1, 2000, 30, 0, 1],
	["null"]
	];
	var prze_dolina = []

// ---------- Koniec array'ów ---------

// ---------- Zmienne ----------

// Statystyki
	// Gracz
		var nick = "Ruffus";			// Nick gracza, defaultowo "Ruffus"
		var nickWpisano = false;		// Przechowuje informacje o wpisanym nicku
		var pancerzHelm = 0;			// Ilość pancerza z 1 slotu od góry w wyposażeniu
		var pancerzNapiersnik = 0;		// Ilość pancerza z 2 slotu od góry w wyposażeniu
		var pancerzSpodnie = 0;			// Ilość pancerza z 3 slotu od góry w wyposażeniu
		var pancerzButy = 0;			// Ilość pancerza z 4 slotu od góry w wyposażeniu
		var pancerzKoncowy = 0;			// Ilość pancerza po podliczeniu wszystkich powyższych slotów, wykorzystywana do walki
		var waluta = 20;			// NIE WYKORZYSTYWANE	Waluta gracza, służąca do kupna
		var zdrowieBazowe = 20;			// Zdrowie bazowe gracza
		var zdrowieEkwipunek = 20;		// Zdrowie gracza po podliczeniu ekwipunku i innych bonusów
		var zdrowieKoncowe = 20;		// Zdrowie gracza wykorzystywane do walki
		var kondycjaBazowa = 10;		// Kondycja bazowa gracza
		var kondycjaEkwipunek = 10;		// Kondycja gracza po podliczeniu ekwipunku i innych bonusów
		var kondycjaKoncowa = 10;		// Kondycja gracza wykorzystywana do walki
		var kondycjaRegeneracja = 0.25; 	// Określa o ile regeneruje się kondycja gracza (raz na 250ms, inaczej 1/4 sekundy)
		var obrazeniaBazowe = 3;		// Obrażenia bazowe gracza
		var obrazeniaEkwipunek = 0;		// Obrażenia gracza po podliczeniu ekwipunku i innych bonusów (obrazenia + obrazeniaBazowe)
		var obrazeniaKoncowe = 0;		// Obrażenia gracza wykorzystywane do walki (obrazeniaEkwipunek + mnoznikObrazenCiosu[])
		var szybkoscBazowa = 1;			// NIE WYKORZYSTYWANE	Szybkość bazowa gracza
		var szybkoscEkwipunek = 1;		// NIE WYKORZYSTYWANE	Szybkość gracza po podliczeniu ekwipunku i innych bonusów
		var szybkoscKoncowa	= 1;		// NIE WYKORZYSTYWANE	Szybkość gracza wykorzystywana do walki

	// Przeciwnik
		var nazwaPrzeciwnik = "Brak przeciwnika"; 	// Służy do przechowywania nazwy przeciwnika podczas walki
		var opisPrzeciwnik = " ";			// Służy do przechowywania opisu przeciwnika podczas walki
		var zdrowiePrzeciwnik = " ";			// Służy do przechowywania zdrowia przeciwnika podczas walki
		var pancerzPrzeciwnik = 0;			// Pancerza przeciwnika podczas walki
		var obrazeniaPrzeciwnik = 0;			// Obrażenia przeciwnika podczas walki
		var zakresPrzeciwnik = 0;			// Zakres obrażeń przeciwnika podczas walki
		var lokacjaId = "null"; 			// Lokacja w której rozgrywa się walka, wykorzystywane do odblokowywania dróg
		
	// Ekwipunek
		var slotWolny = 1;	// Przechowuje informacje o tym który slot jest wolny
		var itemIdMax = 1;	// Przechowuje informacje o maksymalnym wykorzystywanym id przedmiotu (w rzeczywistości o ostatnim zajętym slocie przed slotem wolnym: itemIdMax == 3 oznacza więc że slot 4 jest pusty nawet jeśli slot 5 czy inne są zajęte)
		
	// Walka
		var blokadaWalki = false;			// Blokada dla rozpoczęcia walki, gdy wartość jest równa "false" walka nie może się rozpocząć
		var walkaTrwa = false;				// Przechowuje informacje czy walka jeszcze trwa
		var walkaKoniec = false; 			// Przechowuje informacje czy walka właśnie się skończyła
		var wybranyCios = "default"; 			// Służy do przechowywania podstawowego rodzaju ciosu dla funkcji, "default" jest jako zabezpieczenie dla pierwszego ciosu
		var mnoznikObrazenCiosu = [1, 1.75, 0.65];	// Mnożniki obrażeń ciosów [zwykły, potężny, szybki]
		var szybkoscCiosu = [1, 1, 3] 			// Szybkości ciosu (ile razy na turę) [zwykły, potężny, szybki]
		var interval1 = "";
		var interval2 = "";
		
	// HTML
		var zdrowieMaksymalnePrzeciwnik = zdrowiePrzeciwnik;  // Służy do wyświetlania 0/0 w HTML po włączeniu gry, czysto estetyczne
		
	//Rozmowy
		var rozmowaGrotaStart = "Radziłbym Ci uważać w tych rejonach. Nigdy nie wiesz kogo możesz spotkać, prawda?"
		var rozmowaGrotaStartOdpowiedz = "'Kim jesteś?'"
		var rozmowaGrotaA = "Nazywam się Nagal, ale wszyscy z obozu nazywają mnie Stolarzem. Zgadnij dlaczego."
			var rozmowaGrotaAOdpowiedz1 = "'Ponieważ jesteś Stolarzem?'" //B1
			var rozmowaGrotaAOdpowiedz2 = "'Poprosiłbym o łatwiejszą zagadkę.'" //B2
			var rozmowaGrotaB1 = "Nieprawdopodobne, prawda? Niemniej jednak, widzę że udało wam się posprzątać ten chaos. Już dawno nie było takiej burzy..."
				var rozmowaGrotaB1Odpowiedz1 = "'Nie do końca. Most jest zniszczony.'" //C1
				var rozmowaGrotaB1Odpowiedz2 = "'Potrzebujemy Cię w obozie.'" //C2
			var rozmowaGrotaB2 = "Dobrze. Ile zajmuje naprawienie drogi po przejściu okropnej burzy? Odpowiedź brzmi: najwyraźniej tydzień. Całkiem dobry wynik, jeśli się mnie spytasz."
				var rozmowaGrotaB2Odpowiedz1 = "'Teraz moja kolej. Ile zajmuje naprawienie mostu po przejściu okropnej burzy?'" //C3
				var rozmowaGrotaB2Odpowiedz2 = "'Potrzebujemy Cię w obozie.'" //C2
				var rozmowaGrotaC1 = "Most jest... cholera. Dobrze, posprzątam tu nieco, zabiorę potrzebne rzeczy i... widzimy się w obozie, " + nick + "."
					var rozmowaGrotaC1Odpowiedz1 = "'Czekaj, skąd wiesz jak się nazywam?'" //D
					var rozmowaGrotaC1Odpowiedz2 = "Zakończ rozmowę."
				var rozmowaGrotaC2 = "Coś się stało? Burza uszkodziła mur? Posterunek runął?"
					var rozmowaGrotaC2Odpowiedz1 = "'Burza zniszczyła most.'" //C1
				var rozmowaGrotaC3 = "Pomyślmy. Trzy dni na zebranie materiałów, dzień na przygotowanie narzędzi... chwila, most jest zniszczony?! Natychmiast muszę wrócić do obozu. Dziękuję za uratowanie mnie, jeśli można to tak nazwać."
					var rozmowaGrotaC3Odpowiedz1 = "Zakończ rozmowę."
					var rozmowaGrotaD = "Żyjemy w tym samym obozie od lat, głupio byłoby gdybym Cię nie znał. Tak czy siak, muszę się zbierać. Dziękuję ze za wszystko."
						var rozmowaGrotaDOdpowiedz1 = "Zakończ rozmowę."
				
	// Crafting
		// Przepisy
			var przepisyDrewno = false;
			var przepisyDrewnoSpecjalne = false;
			var przepisyMiedziane = false;
			var przepisyZelazne = false;
		
	// Mapa
		// Blokady - służą do wyświetlania przycisków na mapie
			var blokadaPosterunekWilkow = true;	// Blokada przycisku "Posterunek wilków"
			var blokadaZrujnowanyOboz = true;	// Blokada przycisku "Zrujnowany obóz"
			var blokadaLesnaDroga2 = true;		// Blokada przycisku "Leśna droga [2]"
			var blokadaZniszczonaDroga = true;	// Blokada przycisku "Zniszczona droga"
			var blokadaGrota = true;		// Blokada przycisku "Grota"
			var blokadaLesnaDroga3 = true; 		// Blokada przycisku "Leśna droga [3]"
			var blokadaWiezaMaga = true;		// Blokada przycisku "Wieża maga"
			var blokadaGrzybowePole = true;		// Blokada przycisku "Grzybowe pole"
			var blokadaWyjscieZLasu = true;		// Blokada przycisku "Wyjście z lasu"
			var blokadaGory = true;			// NIE WYKORZYSTYWANE	Blokada przycisku "Góry"
			var blokadaDolina = true;		// Blokada przycisku "Dolina"
			var blokadaMoczary = true;		// Blokada przycisku "Moczary"
			
		// Kamienie milowe - Naprawy, osiągnięcia i inne zdarzenia zmieniające wygląd mapy i odblokowujące nowe lokacje
			var pradawnyLasDroga = false;	// Czy droga w pradawnym lesie jest naprawiona
			var pradawnyLasStolarz = false; // Czy stolarz jest w obozie
			var pradawnyLasMost = false;	// Czy most w pradawnym lesie jest naprawiony
			var zniszczoneDrzewa = 0;		// Liczy ile drzew zostało zniszczonych przez gracza
		
		// Bossowie - zmienne służą do określania czy bossowie zostali pokonani, "true" oznacza że tak
			var bossZrujnowanyOboz = false; 	// Boss z lokacji "Zrujnowany obóz"
		
		// Inne
			var resetKlikniety = false; 	// Safe-switch do wykonania resetu, gdy jest ustawiony na "false" gra nie usunie progressu.
			var obozWlaczony = false; 	// Przechowuje informacje o tym czy obóz jest włączony
			var craftingWlaczony = false;	// Przechowuje informacje o tym czy crafting jest włączony
			var alfaWlaczony = false; // Przechowuje informacje o tym czy fracz jest u Alfy
		
		
// ---------- Koniec zmiennych ----------

function zakladka(NrZakladki) {
	switch(NrZakladki){
		case 0:{
		if(obozWlaczony == true){
			document.getElementsByClassName("oboz")[0].hidden = false;
		} else if(craftingWlaczony == true){
			document.getElementsByClassName("crafting")[0].hidden = false;
		} else if(alfaWlaczony == true){
			document.getElementsByClassName("alfa")[0].hidden = false;
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
		document.getElementsByClassName("alfa")[0].hidden = true;
		document.getElementById("zakladkaWalka").style.zIndex="-1";
		document.getElementById("zakladkaEkwipunek").style.zIndex="0";
		document.getElementById("zakladkaMenu").style.zIndex="-1";
		document.getElementById("zakladkaUstawienia").style.zIndex="-1";
		break;
		}
		case 2:{
		document.getElementsByClassName("oboz")[0].hidden = true;
		document.getElementsByClassName("crafting")[0].hidden = true;
		document.getElementsByClassName("alfa")[0].hidden = true;
		document.getElementById("zakladkaWalka").style.zIndex="-1";
		document.getElementById("zakladkaEkwipunek").style.zIndex="-1";
		document.getElementById("zakladkaMenu").style.zIndex="0";
		document.getElementById("zakladkaUstawienia").style.zIndex="-1";
		break;
		}
		case 3:{
		document.getElementsByClassName("oboz")[0].hidden = true;
		document.getElementsByClassName("crafting")[0].hidden = true;
		document.getElementsByClassName("alfa")[0].hidden = true;
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
	zakonczRozmowe();
	ekranPodrozy();
	sprawdzWyposazenie("walka");
	setTimeout(function(){
		obrazeniaKoncowe = obrazeniaBazowe + obrazeniaEkwipunek;
		if(zdrowieKoncowe >= 0.1 && blokadaWalki == false && walkaTrwa == false){  // Walka rozpocznie się tylko gdy gracz ma więcej niż 0.1 punktów zdrowia, blokada walki nie jest włączona i nie jest w trakcie trwającej już walki
			walkaTrwa = true;  // Określa że walka trwa
			blokadaWalki = true;  //Blokuje rozpoczęcie nowej walki
			wybierzPrzeciwnika(biom, trudnosc);  // Wywołuje funkcję do wybrania przeciwnika
			setTimeout(function(){
				wpiszTekst("linia");  // Puste linie dla logów walki, aby oddzielić je między sobą
				wpiszTekst("linia");
				wpiszTekst("walkaPoczatek", nazwaPrzeciwnik);  // Wpisuje do logów że przeciwnik zaatakował gracza
				interval = setInterval(walka, 1000);  // Rozpoczyna funkcję odpowiedzialną za automatyczne zadawanie obrażeń podczas walki, defaultowo wywoływana raz na sekundę
				interval2 = setInterval(kondycjaLiczenie, 250);  // Rozpoczyna funkcję regenerującą kondycje
			}, 1500);
		}
	}, 300);
}

	// Funkcja odpowiedzialna za loopa walki
function walka(typ){
	if(typ != "specjalny"){  // Jeśli typ jest specjalny funkcja pomija zadawanie obrażeń i przeskakuje od razu do sprawdzenia zdrowia gracza i przeciwnika
	
		//Początek tury gracza
		kalkulacja = (obrazeniaKoncowe - pancerzPrzeciwnik) * szybkoscKoncowa  // Obliczanie realnych obrażeń zadanych przez gracza po trafieniu przeciwnika w pancerz
		if(kalkulacja < 0){  // Zerowanie obrażeń jeśli mniejsze od zera
			kalkulacja = 0; 
		}
		zdrowiePrzeciwnik = zdrowiePrzeciwnik - kalkulacja;  // Zapisuje zdrowie przeciwnika po otrzymaniu obrażeń
		if(zdrowiePrzeciwnik < 0){ zdrowiePrzeciwnik = 0; }  // Wyzerowanie zdrowia przeciwnika jeśli zeszło na minus
		wpiszTekst("walka", nick, nazwaPrzeciwnik, kalkulacja);
		
		// Koniec tury gracza, początek tury przeciwnika
		if(zdrowiePrzeciwnik >= 0.1){  // Jeśli przeciwnik żyje, zada obrażenia
			if(zakresPrzeciwnik != 0){  // Jeśli zakres obrażeń przeciwnika nie jest równy zero
				kalkulacja = ((obrazeniaPrzeciwnik - (zakresPrzeciwnik * 0.5)) + (Math.floor(Math.random() * zakresPrzeciwnik + 1))) - pancerzKoncowy;  // Obliczanie realnych obrażeń zadanych przez przeciwnika po trafieniu gracza w pancerz
			} else {
				kalkulacja = ((obrazeniaPrzeciwnik - (zakresPrzeciwnik * 0.5)) + (Math.floor(Math.random() * zakresPrzeciwnik))) - pancerzKoncowy;  // Obliczanie realnych obrażeń zadanych przez przeciwnika po trafieniu gracza w pancerz
			}
			if(kalkulacja < 0){  // Zerowanie obrażeń jeśli mniejsze od zera
				kalkulacja = 0;
			}
			zdrowieKoncowe = zdrowieKoncowe - kalkulacja;  // Zapisuje zdrowie gracza po otrzymaniu obrażeń
			wpiszTekst("walka", nazwaPrzeciwnik, nick, kalkulacja);
		// Koniec tury przeciwnika
		
		odswiezZmienne("walka");  // Wywołuje funkcję odpowiedzialną za odświeżenie liczb w HTML'u
		} else {};
		kalkulacja = 0;  // Wyzerowanie zmiennej od przechowywania obrażeń
	}
		if(zdrowieKoncowe <= 0 || zdrowiePrzeciwnik <= 0){
			if(zdrowieKoncowe <= 0){
				wpiszTekst("koniecWalki", nazwaPrzeciwnik, nick);
			} else if(zdrowiePrzeciwnik <= 0){
				wpiszTekst("koniecWalki", nick, nazwaPrzeciwnik);
				loot(nazwaPrzeciwnik);
				odswiezZmienne("koniecWalki");
				clearInterval(interval);
				clearInterval(interval2);
				switch(lokacjaId){
					case "lesnaDroga1":{
						if(blokadaZrujnowanyOboz == true && blokadaPosterunekWilkow == true  && blokadaZniszczonaDroga == true && blokadaLesnaDroga2 == true && zniszczoneDrzewa >= 5){
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
					case "zniszczonaDroga":{
						if(blokadaGrota == true){
							wpiszTekst("odblokowanieLokacji", "Grota");
							blokadaGrota = false;
							grota.style.display = "inline";
						}
						break;
					}
					case "lesnaDroga3":{
						if(blokadaWyjscieZLasu == true){
							wpiszTekst("odblokowanieLokacji", "Wyjście z lasu")
							blokadaWyjscieZLasu = false;
							wyjscieZLasu.style.display = false;
						}
					}
					case "wyjscieZLasu":{
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
  
function obraz(losowe, nazwa, postac) {
	if (losowe == -1) {
		document.getElementById("obrazPrzeciwnik").src = "Obrazy/Przeciwnicy/Brak_przeciwnika.png";
	}
	else if(postac !== true){
		document.getElementById("obrazPrzeciwnik").src = "Obrazy/Przeciwnicy/" + nazwa + ".png";
	} else {
		document.getElementById("obrazPrzeciwnik").src = "Obrazy/Postacie/" + nazwa + ".png";
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
			case "zniszczonaDroga":{
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
				if(losowe <= 600){
					losowe = 0;
				} else if(losowe > 600 && losowe <= 900){
					losowe = 1;
				} else {
					losowe = 2;
				}
				break;
			}
			case "wyjscieZLasu":{
				if(losowe <= 800){
					losowe = 0;
				} else {
					losowe = 1;
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
			obrazeniaKoncowe = obrazeniaKoncowe * mnoznikObrazenCiosu[0];
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
						obrazeniaKoncoweAtak = obrazeniaBazowe * mnoznikObrazenCiosu[0] + (obrazeniaBazowe * 0.25);
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
							obrazeniaKoncoweAtak = obrazeniaBazowe * mnoznikObrazenCiosu[0] + (obrazeniaBazowe * 0.25);
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
					obrazeniaKoncoweAtak = obrazeniaBazowe * mnoznikObrazenCiosu[1];
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
		case "szybki":{ // Chwilowo niewykorzystywany
			//obrazeniaKoncowe = obrazeniaEkwipunek * mnoznikObrazenCiosu[2];
			//szybkoscKoncowa = szybkoscEkwipunek * szybkoscCiosu[2];
			break;
		}
	}
}
		
	// Wybieranie loot-u
function loot(nazwaPrzeciwnik){
	switch(nazwaPrzeciwnik){
		case "Leżące drzewo":{
			utworzPrzedmiot("crft_1", "crafting", "Obrazy/Przedmioty/Kłoda.png");
			losowe = Math.floor(Math.random() * 10) + 1;
			if(losowe <= 6){
				utworzPrzedmiot("prdm_bron_a_5", "bron", "Obrazy/Przedmioty/Patyk.png");
			}
			zniszczoneDrzewa += 1;
			break;
		}
		case "Grzybiarz":{
			losowe = Math.floor(Math.random() * 10) + 1;
			if(losowe <= 2){ 
				utworzPrzedmiot("prdm_bron_a_1", "bron", "Obrazy/Przedmioty/Sztylet.png");
			}
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
			utworzPrzedmiot("prdm_bron_a_1", "bron", "Obrazy/Przedmioty/Sztylet.png");
			losowe = Math.floor(Math.random() * 10) + 1;
			if(losowe <= 2){
				utworzPrzedmiot("prdm_bron_a_6", "bron", "Obrazy/Przedmioty/Łuk.png");
			}
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
			logi = document.getElementById("logi");
			if(typeof logi.childNodes[0] !== "undefined"){
				var tekst = " ";
			} else {
				return;
			}
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
		case "rozmowa":{
			var tekst = " " + postacPierwsza;
			break;
		}
		case "gracz":{
			var tekst = " " + postacPierwsza;
			pasek.style.color = "#0f7bff";
			break;
		}
		case "akcja":{
			var tekst = " " + postacPierwsza;
			pasek.style.color = "magenta";
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
	} else if(rodzaj == "item" || rodzaj == "bossZrujnowanyObozKoniec" || rodzaj == "rozmowa"){
		pasek.style.color = "#34cceb";
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
		case "slotBron":{
			if(src.alt != "bron"){ break; }
			if(tgt == null){
				var data = ev.dataTransfer.getData("src");
				ev.target.appendChild(document.getElementById(data));
			} else {
				ev.currentTarget.replaceChild(src, tgt);
				srcParent.appendChild(tgt);
			}
			sprawdzWyposazenie("bron", src, str);
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
		odczytCrafting();
		getNick();
		zakonczRozmowe();
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
		wyczyscTekst()
    }
}

function pusta(){ // Pusta funkcja do debuggingu
}

	// Funkcja od wybierania slotów dla przedmiotów
function wybieranieSlotu(){
	liczba = 1;
	slotWolny = "slot" + liczba;
	slotWolny2 = document.getElementById(slotWolny);
	while(slotWolny2.hasChildNodes() == true || slotWolny2.hidden == true){
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
		case "bron":{
			przedmiot = window[src.lang];
			if(slotBron.hasChildNodes() == true){
				obrazeniaEkwipunek = przedmiot[3];
			} else {
				obrazeniaEkwipunek = 0;
			}
			break;
			}
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
		case "walka":{
			if(slotBron.hasChildNodes() !== true){
				obrazeniaEkwipunek = 0;
			}
			if(slotHelm.hasChildNodes() !== true){
				pancerzHelm = 0;
			}
			if(slotNapiersnik.hasChildNodes() !== true){
				pancerzNapiersnik = 0;
			}
			if(slotSpodnie.hasChildNodes() !== true){
				pancerzSpodnie = 0;
			}
			if(slotButy.hasChildNodes() !== true){
				pancerzButy = 0;
			}
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
	wyposazenieArray = [document.getElementById("slotHelm").outerHTML, document.getElementById("slotNapiersnik").outerHTML, document.getElementById("slotSpodnie").outerHTML, document.getElementById("slotButy").outerHTML, document.getElementById("slotBron").outerHTML];
	statystykiArray = [nick, nickWpisano, pancerzHelm, pancerzNapiersnik, pancerzSpodnie, pancerzButy, pancerzKoncowy, zdrowieBazowe, zdrowieEkwipunek, zdrowieKoncowe, kondycjaBazowa, kondycjaEkwipunek, kondycjaKoncowa, obrazeniaBazowe, obrazeniaEkwipunek, szybkoscBazowa, szybkoscEkwipunek, szybkoscKoncowa];
	blokadyArray = [blokadaPosterunekWilkow, blokadaZrujnowanyOboz, blokadaLesnaDroga2, blokadaZniszczonaDroga, blokadaGrota, blokadaLesnaDroga3, blokadaGrzybowePole, blokadaWyjscieZLasu, blokadaDolina, blokadaMoczary, bossZrujnowanyOboz, pradawnyLasDroga, pradawnyLasStolarz, pradawnyLasMost, zniszczoneDrzewa];
	magazynArray = [klody, drewno];
	craftingArray = [przepisyDrewno, przepisyDrewnoSpecjalne, przepisyMiedziane, przepisyZelazne];
	localStorage.setItem("Ekwipunek", JSON.stringify(arr));
	localStorage.setItem("Wyposazenie", JSON.stringify(wyposazenieArray));
	localStorage.setItem("Statystyki", JSON.stringify(statystykiArray));
	localStorage.setItem("Blokady", JSON.stringify(blokadyArray));
	localStorage.setItem("Magazyn", JSON.stringify(magazynArray));
	localStorage.setItem("Crafting", JSON.stringify(craftingArray));
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
		slotBron.outerHTML = wyposazenieArray[4];
	} else {
		wyposazenieArray = [document.getElementById("slotHelm").outerHTML, document.getElementById("slotNapiersnik").outerHTML, document.getElementById("slotSpodnie").outerHTML, document.getElementById("slotButy").outerHTML, document.getElementById("slotBron").outerHTML];
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
		szybkoscBazowa = statystykiArray[15];
		szybkoscEkwipunek = statystykiArray[16];
		szybkoscKoncowa = statystykiArray[17];
		obrazeniaKoncowe = obrazeniaBazowe + obrazeniaEkwipunek;
		zdrowieKoncowe = zdrowieEkwipunek;
		kondycjaKoncowa = kondycjaEkwipunek;
	} else {
		statystykiArray = [nick, nickWpisano, pancerzHelm, pancerzNapiersnik, pancerzSpodnie, pancerzButy, pancerzKoncowy, zdrowieBazowe, zdrowieEkwipunek, zdrowieKoncowe, kondycjaBazowa, kondycjaEkwipunek, kondycjaKoncowa, obrazeniaBazowe, obrazeniaEkwipunek, szybkoscBazowa, szybkoscEkwipunek, szybkoscKoncowa];
		localStorage.setItem("Statystyki", JSON.stringify(statystykiArray));
	}
	if (localStorage.getItem("Blokady") !== null){
		blokadyArray = JSON.parse(localStorage.getItem("Blokady"));
		blokadaPosterunekWilkow = blokadyArray[0];
		blokadaZrujnowanyOboz = blokadyArray[1];
		blokadaLesnaDroga2 = blokadyArray[2];
		blokadaZniszczonaDroga = blokadyArray[3];
		blokadaGrota = blokadyArray[4];
		blokadaLesnaDroga3 = blokadyArray[5];
		blokadaGrzybowePole = blokadyArray[6];
		blokadaWyjscieZLasu = blokadyArray[7];
		blokadaDolina = blokadyArray[8];
		blokadaMoczary = blokadyArray[9];
		bossZrujnowanyOboz = blokadyArray[10];
		pradawnyLasDroga = blokadyArray[11];
		pradawnyLasStolarz = blokadyArray[12];
		pradawnyLasMost = blokadyArray[13];
		zniszczoneDrzewa = blokadyArray[14];
	} else {
		blokadyArray = [blokadaPosterunekWilkow, blokadaZrujnowanyOboz, blokadaLesnaDroga2, blokadaZniszczonaDroga, blokadaGrota, blokadaLesnaDroga3, blokadaGrzybowePole, blokadaWyjscieZLasu, blokadaDolina, blokadaMoczary, bossZrujnowanyOboz, pradawnyLasDroga, pradawnyLasStolarz, pradawnyLasMost, zniszczoneDrzewa];
	}
	if (localStorage.getItem("Magazyn") !== null){
		magazynArray = JSON.parse(localStorage.getItem("Magazyn"));
		klody = magazynArray[0];
		drewno = magazynArray[1];
		document.getElementsByClassName("licznikKlody").innerHTML = klody;
		document.getElementsByClassName("licznikDrewno").innerHTML = drewno;
	} else {
		magazynArray = [klody, drewno];
		localStorage.setItem("Magazyn", JSON.stringify(magazynArray));
	}
	if (localStorage.getItem("Crafting") !== null){
		craftingArray = JSON.parse(localStorage.getItem("Crafting"));
		przepisyDrewno = craftingArray[0];
		przepisyDrewnoSpecjalne = craftingArray[1];
		przepisyMiedziane = craftingArray[2];
		przepisyZelazne = craftingArray[3];
	} else {
		craftingArray = [przepisyDrewno, przepisyDrewnoSpecjalne, przepisyMiedziane, przepisyZelazne];
		localStorage.setItem("Crafting", JSON.stringify(craftingArray));
	}
	
	if(drewno >= 5 && pradawnyLasStolarz == true){
		document.getElementById("naprawMost").style.background = "gray";
		document.getElementById("naprawMost").setAttribute("disabled", "");
	}
	rozmowaGrotaC1 = "Most jest... cholera. Dobrze, posprzątam tu nieco, zabiorę potrzebne rzeczy i... widzimy się w obozie, " + nick + "."
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
	if(walkaTrwa == false){
	switch(lokacja){
		case "pradawnyLas":{
			obozWlaczony = false;
			document.getElementsByClassName("oboz")[0].hidden=true;
			las.style.display = "none";
			dolina.style.display = "none";
			if(pradawnyLasDroga == false && pradawnyLasMost == false){
				mapa.src = "Obrazy/Mapa/PradawnyLas.png";
			} else if(pradawnyLasDroga == true && pradawnyLasMost == false){
				mapa.src = "Obrazy/Mapa/PradawnyLasNaprawionaDroga.png";
			} else {
				mapa.src = "Obrazy/Mapa/PradawnyLasNaprawionyMost.png";
			}
			zakladkaWalka.style.backgroundImage = "url('Obrazy/Tła/PradawnyLas.png')";
			obozWilkow.style.display = "inline";
			lesnaDroga1.style.display = "inline";
			if(blokadaPosterunekWilkow == false){ posterunekWilkow.style.display = "inline"; }
			if(blokadaZrujnowanyOboz == false){ zrujnowanyOboz.style.display = "inline"; }
			if(blokadaLesnaDroga2 == false){ lesnaDroga2.style.display = "inline"; }
			if(blokadaGrzybowePole == false){ grzybowePole.style.display = "inline"; }
			if(blokadaZniszczonaDroga == false){ zniszczonaDroga.style.display = "inline"; }
			if(blokadaGrota == false){ grota.style.display = "inline"; }
			if(blokadaLesnaDroga3 == false){ lesnaDroga3.style.display = "inline"; }
			if(blokadaWyjscieZLasu == false){ wyjscieZLasu.style.display = "inline"; }
			cofnij.style.display = "inline";
			cofnijOboz.style.display = "none";
			break;
		}
		case "obozWilkow":{
			craftingWlaczony = false;
			obozWlaczony = true;
			document.getElementsByClassName("oboz")[0].hidden = false;
			document.getElementsByClassName("crafting")[0].hidden = true;
			document.getElementsByClassName("alfa")[0].hidden = true;
			document.getElementById("licznikKlody").innerHTML = klody;
			document.getElementById("licznikDrewno").innerHTML = drewno;
			zakonczRozmowe();
			break;
		}
		case "crafting":{
			odczytCrafting();
			craftingWlaczony = true;
			obozWlaczony = false;
			document.getElementsByClassName("crafting")[0].hidden = false;
			document.getElementsByClassName("oboz")[0].hidden = true;
			document.getElementById("licznikKlodyCrafting").innerHTML = klody;
			document.getElementById("licznikDrewnoCrafting").innerHTML = drewno;
			break;
		}
		case "alfa":{
			alfaWlaczony = true;
			obozWlaczony = false;
			document.getElementsByClassName("alfa")[0].hidden = false;
			document.getElementsByClassName("oboz")[0].hidden = true;
			break;
		}
		case "lesnaDroga1":{
			zakladkaWalka.style.backgroundImage = "url('Obrazy/Tła/PradawnyLas.png')";
			rozpocznijWalke("lesnaDroga1", 1);
			break;
		}
		case "posterunekWilkow":{
			zakladkaWalka.style.backgroundImage = "url('Obrazy/Tła/PradawnyLas.png')";
			zakonczRozmowe();
			break;
		}
		case "zrujnowanyOboz":{
			if(bossZrujnowanyOboz == false){
				zakladkaWalka.style.backgroundImage = "url('Obrazy/Tła/ZrujnowanyObóz.png')";
				rozpocznijWalke("zrujnowanyOboz", 1);
			} else {
			mapa.src = "Obrazy/Mapa/ZrujnowanyObóz.png";
			zakladkaWalka.style.backgroundImage = "url('Obrazy/Tła/ZrujnowanyObóz.png')";
			obozWilkow.style.display = "none";
			lesnaDroga1.style.display = "none";
			posterunekWilkow.style.display = "none";
			zrujnowanyOboz.style.display = "none";
			lesnaDroga2.style.display = "none";
			grzybowePole.style.display = "none";
			zniszczonaDroga.style.display = "none";
			grota.style.display = "none";
			lesnaDroga3.style.display = "none";
			wyjscieZLasu.style.display = "none"
			cofnij.style.display = "none";
			cofnijOboz.style.display = "inline";
			zakonczRozmowe();
			}
			break;
		}
		case "zniszczonaDroga":{
			zakladkaWalka.style.backgroundImage = "url('Obrazy/Tła/PradawnyLas.png')";
			rozpocznijWalke("zniszczonaDroga", 1);
			break;
		}
		case "lesnaDroga2":{
			zakladkaWalka.style.backgroundImage = "url('Obrazy/Tła/PradawnyLas.png')";
			rozpocznijWalke("lesnaDroga2", 1);
			break;
		}
		case "grzybowePole":{
			zakladkaWalka.style.backgroundImage = "url('Obrazy/Tła/GrzybowePole.png')";
			rozpocznijWalke("grzybowePole", 1);
			break;
		}
		case "lesnaDroga3":{
			zakladkaWalka.style.backgroundImage = "url('Obrazy/Tła/PradawnyLas.png')";
			rozpocznijWalke("lesnaDroga3", 1);
			break;
		}
		case "grota":{
			zakladkaWalka.style.backgroundImage = "url('Obrazy/Tła/Grota.png')";
			if(pradawnyLasStolarz == false){
				if(document.getElementById("rozmowa") == null){
					rozpocznijRozmowe("Wilk");
					rozmowa("grota", "start");
				}
			}
			break;
		}
		case "wyjscieZLasu":{
			zakladkaWalka.style.backgroundImage = "url('Obrazy/Tła/PradawnyLas.png')";
			rozpocznijWalke("wyjscieZLasu", 1);
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
			grzybowePole.style.display = "none";
			zniszczonaDroga.style.display = "none";
			grota.style.display = "none";
			lesnaDroga3.style.display = "none";
			wyjscieZLasu.style.display = "none";
			cofnij.style.display = "none";
			zakonczRozmowe();
			break;
		}
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
		case "nakladkaNaLape":{
			if(drewno >= 1){
				var liczba = 1;
				zajetySlot1 = 0;
				zajetySlot2 = 0;
				zajetySlot3 = 0;
				slotCrafting = null;
				slotCrafting1 = "nic";
				slotCrafting2 = "nic";
				slotCrafting3 = "nic";
					while (liczba <= 159) {
						slot = "slot" + liczba;
						calySlotCrafting = document.getElementById(slot);
							if(calySlotCrafting.hasChildNodes() == true){
								calySlotChild = calySlotCrafting.childNodes[0];
								if(calySlotChild.lang == "prdm_bron_a_1"){
									slotCrafting = calySlotCrafting;
								}
							}
						if(slotCrafting != null){
							if(liczba != zajetySlot1 && liczba != zajetySlot2 && liczba != zajetySlot3 && slotCrafting1 == "nic"){
								slotCrafting1 = slotCrafting;
								zajetySlot1 = liczba;
								slotCrafting = null;
							} else if(liczba != zajetySlot1 && liczba != zajetySlot2 && liczba != zajetySlot3 && slotCrafting2 == "nic"){
								slotCrafting2 = slotCrafting;
								zajetySlot2 = liczba;
								slotCrafting = null;
							} else if(liczba != zajetySlot1 && liczba != zajetySlot2 && liczba != zajetySlot3 && slotCrafting3 == "nic"){
								slotCrafting3 = slotCrafting;
								zajetySlot3 = liczba;
								slotCrafting = null;
							}
						}
						liczba += 1;
					}
				if(slotCrafting1 != "nic" && slotCrafting2 != "nic" && slotCrafting3 != "nic"){
					calySlotChild = slotCrafting1.childNodes[0];
					slotCrafting1.removeChild(calySlotChild);
					calySlotChild = slotCrafting2.childNodes[0];
					slotCrafting2.removeChild(calySlotChild);
					calySlotChild = slotCrafting3.childNodes[0];
					slotCrafting3.removeChild(calySlotChild);
					drewno -= 1;
					utworzPrzedmiot("prdm_bron_a_3", "bron", "Obrazy/Przedmioty/Nakładka_na_łapę.png");
				}
			}
			document.getElementById("licznikDrewnoCrafting").innerHTML = drewno;
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
			przedmiotOpis = prdm_bron_a_2;
			document.getElementById("craftingPrzedmiot").innerHTML = przedmiotOpis[0];
			document.getElementById("craftingOpis").innerHTML = przedmiotOpis[1];
			document.getElementById("craftingKoszt").innerHTML = "1x Sztylet, 1x Drewno";
			break;
		}
		case "nakladkaNaLape":{
			przedmiotOpis = prdm_bron_a_3;
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
			przedmiotOpis = prdm_bron_a_4;
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

	// Funkcja odpowiadająca za wyświetlanie przedmiotów do wytworzenia
function odczytCrafting(sposobWyswietlania){
	switch(sposobWyswietlania){
		default:{
			if(przepisyDrewno == true){
				document.getElementById("crafting1").removeAttribute("hidden");
				document.getElementById("crafting2").removeAttribute("hidden");
				document.getElementById("crafting3").removeAttribute("hidden");
				document.getElementById("crafting4").removeAttribute("hidden");
				document.getElementById("crafting5").removeAttribute("hidden");
				document.getElementById("crafting6").removeAttribute("hidden");
				document.getElementById("crafting7").removeAttribute("hidden");
				document.getElementById("crafting8").removeAttribute("hidden");
				document.getElementById("crafting9").removeAttribute("hidden");
			}
			break;
		}
		case "bron":{
			if(przepisyDrewno == true){
				document.getElementById("crafting1").setAttribute("hidden", "");
				document.getElementById("crafting2").removeAttribute("hidden");
				document.getElementById("crafting3").removeAttribute("hidden");
				document.getElementById("crafting4").setAttribute("hidden", "");
				document.getElementById("crafting5").setAttribute("hidden", "");
				document.getElementById("crafting6").setAttribute("hidden", "");
				document.getElementById("crafting7").setAttribute("hidden", "");
				document.getElementById("crafting8").setAttribute("hidden", "");
				document.getElementById("crafting9").setAttribute("hidden", "");
			}
			break;
		}
		case "pancerz":{
			if(przepisyDrewno == true){
				document.getElementById("crafting1").setAttribute("hidden", "");
				document.getElementById("crafting2").setAttribute("hidden", "");
				document.getElementById("crafting3").setAttribute("hidden", "");
				document.getElementById("crafting4").removeAttribute("hidden");
				document.getElementById("crafting5").removeAttribute("hidden");
				document.getElementById("crafting6").removeAttribute("hidden");
				document.getElementById("crafting7").removeAttribute("hidden");
				document.getElementById("crafting8").setAttribute("hidden", "");
				document.getElementById("crafting9").setAttribute("hidden", "");
			}
			break;
		}
		case "przedmioty":{
			if(przepisyDrewno == true){
				document.getElementById("crafting1").setAttribute("hidden", "");
				document.getElementById("crafting2").setAttribute("hidden", "");
				document.getElementById("crafting3").setAttribute("hidden", "");
				document.getElementById("crafting4").setAttribute("hidden", "");
				document.getElementById("crafting5").setAttribute("hidden", "");
				document.getElementById("crafting6").setAttribute("hidden", "");
				document.getElementById("crafting7").setAttribute("hidden", "");
				document.getElementById("crafting8").removeAttribute("hidden");
				document.getElementById("crafting9").removeAttribute("hidden");
			}
			break;
		}
		case "skladniki":{
			if(przepisyDrewno == true){
				document.getElementById("crafting1").removeAttribute("hidden");
				document.getElementById("crafting2").setAttribute("hidden", "");
				document.getElementById("crafting3").setAttribute("hidden", "");
				document.getElementById("crafting4").setAttribute("hidden", "");
				document.getElementById("crafting5").setAttribute("hidden", "");
				document.getElementById("crafting6").setAttribute("hidden", "");
				document.getElementById("crafting7").setAttribute("hidden", "");
				document.getElementById("crafting8").setAttribute("hidden", "");
				document.getElementById("crafting9").setAttribute("hidden", "");
			}
			break;
		}
		case "inne":{
			if(przepisyDrewno == true){
				document.getElementById("crafting1").setAttribute("hidden", "");
				document.getElementById("crafting2").setAttribute("hidden", "");
				document.getElementById("crafting3").setAttribute("hidden", "");
				document.getElementById("crafting4").setAttribute("hidden", "");
				document.getElementById("crafting5").setAttribute("hidden", "");
				document.getElementById("crafting6").setAttribute("hidden", "");
				document.getElementById("crafting7").setAttribute("hidden", "");
				document.getElementById("crafting8").setAttribute("hidden", "");
				document.getElementById("crafting9").setAttribute("hidden", "");
			}
			break;
		}
	}
}

function rozmowa(lokacja, odpowiedz){
	wyczyscRozmowe();
	switch(lokacja){
		case "grota":{
			switch(odpowiedz){
				case "start":{
					wpiszTekst("linia");
					wpiszTekst("rozmowa", rozmowaGrotaStart);
					wpiszTekst("linia");
					utworzPrzycisk("grota", "a", rozmowaGrotaStartOdpowiedz);
					break;
				}
				case "a":{
					wpiszTekst("gracz", rozmowaGrotaStartOdpowiedz);
					wpiszTekst("rozmowa", rozmowaGrotaA);
					wpiszTekst("linia");
					utworzPrzycisk("grota", "b1", rozmowaGrotaAOdpowiedz1);
					utworzPrzycisk("grota", "b2", rozmowaGrotaAOdpowiedz2);
					break;
				}
				case "b1":{
					wpiszTekst("gracz", rozmowaGrotaAOdpowiedz1);
					wpiszTekst("rozmowa", rozmowaGrotaB1);
					wpiszTekst("linia");
					utworzPrzycisk("grota", "c1", rozmowaGrotaB1Odpowiedz1);
					utworzPrzycisk("grota", "c2", rozmowaGrotaB1Odpowiedz2);
					break;
				}
				case "b2":{
					wpiszTekst("gracz", rozmowaGrotaAOdpowiedz2);
					wpiszTekst("rozmowa", rozmowaGrotaB2);
					wpiszTekst("linia");
					utworzPrzycisk("grota", "c3", rozmowaGrotaB2Odpowiedz1);
					utworzPrzycisk("grota", "c2", rozmowaGrotaB2Odpowiedz2);
					break;
				}
				case "c1":{
					wpiszTekst("gracz", rozmowaGrotaB1Odpowiedz1);
					wpiszTekst("rozmowa", rozmowaGrotaC1);
					wpiszTekst("linia");
					utworzPrzycisk("grota", "d", rozmowaGrotaC1Odpowiedz1);
					utworzPrzycisk("grota", "zakoncz", rozmowaGrotaC1Odpowiedz2, "zakoncz");
					break;
				}
				case "c2":{
					wpiszTekst("gracz", rozmowaGrotaB1Odpowiedz2);
					wpiszTekst("rozmowa", rozmowaGrotaC2);
					wpiszTekst("linia");
					utworzPrzycisk("grota", "c1", rozmowaGrotaC2Odpowiedz1);
					break;
				}
				case "c3":{
					wpiszTekst("gracz", rozmowaGrotaB2Odpowiedz1);
					wpiszTekst("rozmowa", rozmowaGrotaC3);
					wpiszTekst("linia");
					utworzPrzycisk("grota", "zakoncz", rozmowaGrotaC3Odpowiedz1, "zakoncz");
					break;
				}
				case "d":{
					wpiszTekst("gracz", rozmowaGrotaC1Odpowiedz1);
					wpiszTekst("rozmowa", rozmowaGrotaD);
					wpiszTekst("linia");
					utworzPrzycisk("grota", "zakoncz", rozmowaGrotaDOdpowiedz1, "zakoncz");
					break;
				}
				case "zakoncz":{
					pradawnyLasStolarz = true;
					przepisyDrewno = true;
					zakonczRozmowe();
					break;
				}
			break;
			}
		}
	}
}

function rozpocznijRozmowe(nazwaObrazu){
	document.getElementById("pazury").setAttribute("hidden", "");
	document.getElementById("kly").setAttribute("hidden", "");
	document.getElementById("atak3").setAttribute("hidden", "");
	document.getElementById("atak4").setAttribute("hidden", "");
	document.getElementById("hpGraczDiv").setAttribute("hidden", "");
	document.getElementById("kondycjaGraczDiv").setAttribute("hidden", "");
	document.getElementById("pancerzGraczDiv").setAttribute("hidden", "");
	document.getElementById("hpPrzeciwnikDiv").setAttribute("hidden", "");
	document.getElementById("pancerzPrzeciwnikDiv").setAttribute("hidden", "");
	document.getElementById("nazwaPrzeciwnika").innerHTML = nazwaObrazu;
	obraz(1, nazwaObrazu, true);
	odswiezZmienne("walka");
	wyczyscRozmowe();
}

function zakonczRozmowe(){
	document.getElementById("pazury").removeAttribute("hidden");
	document.getElementById("kly").removeAttribute("hidden");
	document.getElementById("atak3").removeAttribute("hidden");
	document.getElementById("atak4").removeAttribute("hidden");
	document.getElementById("hpGraczDiv").removeAttribute("hidden");
	document.getElementById("kondycjaGraczDiv").removeAttribute("hidden");
	document.getElementById("pancerzGraczDiv").removeAttribute("hidden");
	document.getElementById("hpPrzeciwnikDiv").removeAttribute("hidden");
	document.getElementById("pancerzPrzeciwnikDiv").removeAttribute("hidden");
	document.getElementById("obrazPrzeciwnik").src = "Obrazy/Przeciwnicy/Brak_przeciwnika.png";
	odswiezZmienne("koniecWalki");
	wyczyscRozmowe();
}

function wyczyscRozmowe(){
	while(document.getElementById("rozmowa") !== null){ document.getElementById("rozmowa").remove() }
}

function utworzPrzycisk(lokacja, identyfikator, inner, background){
	okno = document.getElementById("ataki");
	przycisk = document.createElement("BUTTON");
	przycisk.id = "rozmowa";
	przycisk.className = "przyciskRozmowy";
	przycisk.onclick = function(){ rozmowa(lokacja, identyfikator) };
	przycisk.innerHTML = inner;
	if(background !== null){
		if(background == "zakoncz"){
			przycisk.style.backgroundColor = "#d6d6d6";
		} else if(background == "walka"){
			przycisk.style.backgroundColor = "#d40000";
		}
	}
	okno.appendChild(przycisk);
}

function ekranPodrozy(){
	document.getElementById("podroz").removeAttribute("hidden");
	setTimeout(function(){ document.getElementById("dalej1").removeAttribute("hidden"); }, 500);
	setTimeout(function(){ document.getElementById("dalej2").removeAttribute("hidden"); }, 1000);
	setTimeout(function(){ document.getElementById("dalej3").removeAttribute("hidden"); }, 1500);
	setTimeout(function(){ 
		document.getElementById("podroz").setAttribute("hidden", ""); 
		document.getElementById("dalej1").setAttribute("hidden", "");
		document.getElementById("dalej2").setAttribute("hidden", "");
		document.getElementById("dalej3").setAttribute("hidden", "");
	}, 1800);
}

function akcja(identyfikator){
	switch(identyfikator){
		case "naprawMost":{
			if(drewno >= 5 && pradawnyLasStolarz == true){
				drewno -= 5;
				wpiszTekst("akcja", "Naprawiłeś most w pradawnym lesie.");
				wpiszTekst("odblokowanieLokacji", "Grzybowe pole");
				wpiszTekst("odblokowanieLokacji", "Leśna droga [3]");
				document.getElementById("licznikDrewno").innerHTML = drewno;
				document.getElementById("naprawMost").style.background = "gray";
				document.getElementById("naprawMost").setAttribute("disabled", "");
				pradawnyLasMost = true;
				blokadaGrzybowePole = false;
				blokadaLesnaDroga3 = false;
			}
			break;
		}
	}
}
