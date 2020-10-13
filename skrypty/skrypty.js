<!DOCTYPE html>
<html lang="pl">
<head>
	<title>RPG-with-wolves</title>
	<link rel="icon" href="Obrazy/Inne/icon.png">
	<meta http-equiv="content-type" content="text/html; charset=UTF-8">
	<script src="skrypty/skrypty.js"></script>
	<link type="text/css" rel="stylesheet" href="css/style.css" />
</head>
<body onload="zapamietajZakladke(false)" onbeforeunload="zapamietajZakladke(true)">
	<div class="pasekNawigacji noselect">
		<div class="przyciskNawigacji" style="background:var(--zakladka-walka-color);" onclick="zakladka(0);">Walka</div>
		<div class="przyciskNawigacji" style="background:var(--zakladka-ekwipunek-color);" onclick="zakladka(1);">Ekwipunek</div>
		<div class="przyciskNawigacji" style="background:var(--zakladka-menu-color);" onclick="zakladka(2);">Menu</div>
		<div class="przyciskNawigacji" style="background:var(--zakladka-ustawienia-color);" onclick="zakladka(3);">Ustawienia</div>
	</div>
	<div id="zakladkaWalka" class="zakladkaWalka zakladka">
		<!-- zakładka jeden-->
		<div class="walka">
			<div class="gracz noselect">
				<div class="nick"><span id="nick">&nbsp;</span></div>
				<div class="tloHp"><div class="napisHp"><span id="zdrowieKoncowe"> </span>/<span id="maksymalneZdrowie"> </span></div><div class="zdrowieKoncowe"></div></div>
				<div class="nick">Pancerz: <span id="pancerzKoncowy">&nbsp;</span></div>
				<div class="ataki">
					<button class="przyciskAtaku" onclick="wybierzCios('zwykly')">Zwykły cios</button>
					<button class="przyciskAtaku" onclick="wybierzCios('potezny')">Potężny cios</button>
					<button class="przyciskAtaku" onclick="wybierzCios('szybki')">Szybki cios</button>
					<button class="przyciskAtaku" onclick="">4</button>
				</div>
			</div>
			<div class="przeciwnik noselect">
				<div class="nick"><span id="nazwaPrzeciwnika">Brak przeciwnika</span></div>
				<div class="tloHp"><div class="napisHp"><span id="zdrowiePrzeciwnik"> </span>/<span id="maksymalneZdrowiePrzeciwnik"> </span></div><div class="zdrowiePrzeciwnik"></div></div>
				<div class="nick">Pancerz: <span id="pancerzPrzeciwnik">&nbsp;</span></div>
				<div class="ataki">
					<img id="obrazPrzeciwnik" alt="przeciwnik" class="nodrag" src="Obrazy/Inne/pustka.png" />
				</div>
			</div>
			<div class="opcjeWalki">

			</div>
			<div class="logi" id="logi">
			</div>
		</div>
		<div class="mapa">
			<button class="przyciskLas" onclick="rozpocznijWalke('las', 1)">Las</button>
			<button class="przyciskGory" onclick="rozpocznijWalke('gory', 1)">Góry</button>
			<img src="Obrazy/Mapa/Mapa.png" alt="mapa" class="nodrag" style="width: 98%; height: 60%;" />
		</div>
		<!-- zakładka jeden-->
	</div>
	<div id="zakladkaEkwipunek" class="zakladkaEkwipunek zakladka">
		<!-- zakładka dwa-->
		<div class="wyposazenie">
		<div class="slotWyposazenie" id="slotHelm" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
		<div class="slotWyposazenie" id="slotNapiersnik" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
		<div class="slotWyposazenie" id="slotSpodnie" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
		<div class="slotWyposazenie" id="slotButy" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
		</div>
		<div class="glownyEkwipunek">
			<!-- pierwszy wiersz -->
			<div class="slot" id="slot1" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
			<div class="slot" id="slot2" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
			<div class="slot" id="slot3" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
			<div class="slot" id="slot4" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
			<div class="slot" id="slot5" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
			<div class="slot" id="slot6" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
			<div class="slot" id="slot7" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
			<div class="slot" id="slot8" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
			<div class="slot" id="slot9" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
			<div class="slot" id="slot10" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
			<div class="slot" id="slot11" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
			<div class="slot" id="slot12" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
			<div class="slot" id="slot13" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
			<div class="slot" id="slot14" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
			<div class="slot" id="slot15" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
			<div class="slot" id="slot16" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
			<!-- drugi wiersz -->
			<div class="slot" id="slot17" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
			<div class="slot" id="slot18" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
			<div class="slot" id="slot19" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
			<div class="slot" id="slot20" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
			<div class="slot" id="slot21" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
			<div class="slot" id="slot22" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
			<div class="slot" id="slot23" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
			<div class="slot" id="slot24" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
			<div class="slot" id="slot25" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
			<div class="slot" id="slot26" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
			<div class="slot" id="slot27" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
			<div class="slot" id="slot28" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
			<div class="slot" id="slot29" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
			<div class="slot" id="slot30" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
			<div class="slot" id="slot31" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
			<div class="slot" id="slot32" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
			<!-- trzeci wiersz -->
			<div class="slot" id="slot33" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
			<div class="slot" id="slot34" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
			<div class="slot" id="slot35" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
			<div class="slot" id="slot36" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
			<div class="slot" id="slot37" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
			<div class="slot" id="slot38" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
			<div class="slot" id="slot39" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
			<div class="slot" id="slot40" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
			<div class="slot" id="slot41" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
			<div class="slot" id="slot42" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
			<div class="slot" id="slot43" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
			<div class="slot" id="slot44" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
			<div class="slot" id="slot45" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
			<div class="slot" id="slot46" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
			<div class="slot" id="slot47" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
			<div class="slot" id="slot48" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
			<!-- czwarty wiersz -->
			<div class="slot" id="slot49" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
			<div class="slot" id="slot50" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
			<div class="slot" id="slot51" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
			<div class="slot" id="slot52" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
			<div class="slot" id="slot53" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
			<div class="slot" id="slot54" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
			<div class="slot" id="slot55" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
			<div class="slot" id="slot56" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
			<div class="slot" id="slot57" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
			<div class="slot" id="slot58" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
			<div class="slot" id="slot59" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
			<div class="slot" id="slot60" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
			<div class="slot" id="slot61" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
			<div class="slot" id="slot62" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
			<div class="slot" id="slot63" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
			<div class="slot" id="slot64" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
			<!-- piąty wiersz -->
			<div class="slot" id="slot65" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
			<div class="slot" id="slot66" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
			<div class="slot" id="slot67" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
			<div class="slot" id="slot68" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
			<div class="slot" id="slot69" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
			<div class="slot" id="slot70" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
			<div class="slot" id="slot71" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
			<div class="slot" id="slot72" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
			<div class="slot" id="slot73" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
			<div class="slot" id="slot74" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
			<div class="slot" id="slot75" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
			<div class="slot" id="slot76" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
			<div class="slot" id="slot77" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
			<div class="slot" id="slot78" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
			<div class="slot" id="slot79" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
			<div class="slot" id="slot80" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
			<!-- szósty wiersz -->
			<div class="slot" id="slot81" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
			<div class="slot" id="slot82" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
			<div class="slot" id="slot83" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
			<div class="slot" id="slot84" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
			<div class="slot" id="slot85" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
			<div class="slot" id="slot86" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
			<div class="slot" id="slot87" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
			<div class="slot" id="slot88" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
			<div class="slot" id="slot89" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
			<div class="slot" id="slot90" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
			<div class="slot" id="slot91" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
			<div class="slot" id="slot92" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
			<div class="slot" id="slot93" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
			<div class="slot" id="slot94" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
			<div class="slot" id="slot95" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
			<div class="slot" id="slot96" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
			<!-- siódmy wiersz -->
			<div class="slot" id="slot97" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
			<div class="slot" id="slot98" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
			<div class="slot" id="slot99" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
			<div class="slot" id="slot100" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
			<div class="smietnik" id="slot101" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
		</div>
		<!-- zakładka dwa-->
	</div>
	<div id="zakladkaMenu" class="zakladkaMenu zakladka">
		<!-- zakładka trzy-->
		<!-- zakładka trzy-->
	</div>
	<div id="zakladkaUstawienia" class="zakladkaUstawienia zakladka">
		<!-- zakładka cztery-->
		<!-- zakładka cztery-->
	</div>
</body>
</html>
