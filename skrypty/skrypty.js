var testt=0;// nie bij za ten kod, to tak tylko na początek XD
function test(){
	if(testt==0){
	document.getElementById("jeden").style.zIndex="-1";
	document.getElementById("dwa").style.zIndex="0";
	testt=1;
	}	
	else{
	document.getElementById("jeden").style.zIndex="0";
	document.getElementById("dwa").style.zIndex="-1";
	testt=0
	}
}