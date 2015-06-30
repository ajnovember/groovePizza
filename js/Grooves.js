
function grooveChange(){


				if(document.getElementById('grooves').value =="plain" ) {reset();}
				 
				if(document.getElementById('grooves').value =="bootsNCats" ){bootsNCats();}
				 
				if(document.getElementById('grooves').value =="billieJean" ){billieJean();}
				 
				if(document.getElementById('grooves').value =="uhnTiss"){uhnTiss();}
				 
				if(document.getElementById('grooves').value =="random"){random();}
				 
				if(document.getElementById('grooves').value =="levee" ){levee();}
				 
				if(document.getElementById('grooves').value =="billieJean" ){billieJean();}
				 
				if(document.getElementById('grooves').value =="coldSweat"){coldSweat();}
				 
				if(document.getElementById('grooves').value =="funkyDrummer"){funkyDrummer();}
				 
				if(document.getElementById('grooves').value =="impeachPresident"){impeachPresident();}
				 
				if(document.getElementById('grooves').value =="walkThisWay"){walkThisWay();}
				 
				if(document.getElementById('grooves').value =="newDay"){itsANewDay();}
				 
				if(document.getElementById('grooves').value =="papaWasToo"){papaWasToo();}
				 
				if(document.getElementById('grooves').value =="bigBeat"){theBigBeat();}
				 
				if(document.getElementById('grooves').value =="ashleysRoachclip"){ashleysRoachclip();}
				 
				if(document.getElementById('grooves').value =="takeMeToMardiGras"){takeMeToMardiGras();}
				 
				if(document.getElementById('grooves').value =="apache1"){apache1();}
				 
				if(document.getElementById('grooves').value =="apache2"){apache2();}
				 
				if(document.getElementById('grooves').value =="apache3"){apache3();}
				 
				if(document.getElementById('grooves').value =="apache4"){apache4();}
				 
				if(document.getElementById('grooves').value =="syntheticSubtitution"){syntheticSubstitution1();}
				 
				if(document.getElementById('grooves').value =="sonClave32"){sonClave32();}
				 
				if(document.getElementById('grooves').value =="sonClave23"){sonClave23();}
				 
				if(document.getElementById('grooves').value =="rumba"){rumba();}
				 
				if(document.getElementById('grooves').value =="bossaNova"){bossaNova();}
				 
				if(document.getElementById('grooves').value =="soukous"){soukous();}
				 
				if(document.getElementById('grooves').value =="gahu"){gahu();}
				 
				if(document.getElementById('grooves').value =="shiko"){shiko();}
				 
				if(document.getElementById('grooves').value =="makongo"){makongo();}
				 	
	

}	


function randomSet(){
	var threshold = 1-(document.getElementById('density').value/100);
	//console.log(threshold);
	document.getElementById("slices").value = random(2,16);	
	document.getElementById("tempo").value = random(80, 300);
	document.getElementById("swing").value = random(50);
	
	
	for (var i = 0; i < slices; i++){
		rhythm1[i] = random(1);
		rhythm2[i] = random(1);
		rhythm3[i] = random(1);
		rhythm4[i] = random(1);	
		rhythm5[i] = random(1);	



		if (rhythm1[i] > threshold){
			rhythm1[i] = 1;
		}
		else rhythm1[i] = 0;
		
		if (rhythm2[i] > threshold){
			rhythm2[i] = 1;
		}
		else rhythm2[i] = 0;
		
		if (rhythm3[i] > threshold){
			rhythm3[i] = 1;
		}
		else rhythm3[i] = 0;
		
		if (rhythm4[i] > threshold){
			rhythm4[i] = 1;
		}
		else rhythm4[i] = 0;	
		
		if (rhythm5[i] > threshold){
			rhythm5[i] = 1;
		}
		else rhythm5[i] = 0;	
	}
	
	
	
}


function levee(){
rhythm1 = [1,1,0,0,0,0,0,1,0,0,1,1,0,0,0,0];
rhythm2 = [0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0];
rhythm3 = [1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0];		
rhythm4 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
rhythm5 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];		
document.getElementById("slices").value = 16;	
document.getElementById("tempo").value = 138;
document.getElementById("swing").value = 8;
document.getElementById("reverb").value = 80;
document.getElementById('sound1').value= 'acKick1';
document.getElementById('sound2').value= 'acSnare1';
document.getElementById('sound3').value= 'acHat1';


}

function bootsNcats(){
rhythm1 = [1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0];
rhythm2 = [0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0];
rhythm3 = [0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0];
rhythm4 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
rhythm5 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
document.getElementById("slices").value = 8;	
document.getElementById("tempo").value = 200;
document.getElementById("swing").value = 0;
document.getElementById("reverb").value = 0;
	
}


function uhnTiss(){
rhythm1 = [1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0];
rhythm2 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
rhythm3 = [0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0];
rhythm4 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1];
rhythm5 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
document.getElementById("slices").value = 16;	
document.getElementById("tempo").value = 266;
document.getElementById("swing").value = 25;
document.getElementById("reverb").value = 10;

	
}

function billieJean(){
rhythm1 = [1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0]; //kicks
rhythm2 = [0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0]; //snares
rhythm3 = [1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0]; //hat
rhythm4 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]; //ride/other

rhythm5 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
document.getElementById("slices").value = 16;	
document.getElementById("tempo").value = 250;
document.getElementById("swing").value = 0;
document.getElementById("reverb").value = 0;
}




function coldSweat(){
rhythm1 = [1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0]; //kicks
rhythm2 = [0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,1]; //snares
rhythm3 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]; //hat
rhythm4 = [1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0]; //ride/other
rhythm5 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
document.getElementById("slices").value = 16;	
document.getElementById("tempo").value = 200;
document.getElementById("swing").value = 0;
document.getElementById("reverb").value = 0;

}



function funkyDrummer(){
rhythm1 = [1,0,1,0,0,0,1,0,0,0,1,0,0,1,0,0]; //kicks
rhythm2 = [0,0,0,0,1,0,0,1,0,1,0,1,1,0,0,1]; //snares
rhythm3 = [1,1,1,1,1,1,1,0,1,1,1,1,1,0,1,1]; //hat
rhythm4 = [0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0]; //open hat
rhythm5 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
document.getElementById("slices").value = 16;	
document.getElementById("tempo").value = 200;
document.getElementById("swing").value = 0;
document.getElementById("reverb").value = 0;	



}

function inpeachPresident(){
rhythm1 = [1,0,0,0,0,0,0,1,1,0,0,0,0,0,1,0]; //kicks
rhythm2 = [0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0]; //snares
rhythm3 = [1,0,1,0,1,0,1,1,1,0,0,0,1,0,1,0]; //hat
rhythm4 = [0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0]; //open hat

rhythm5 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
document.getElementById("slices").value = 16;	
document.getElementById("tempo").value = 200;
document.getElementById("swing").value = 0;
document.getElementById("reverb").value = 0;


}



function walkThisWay(){
rhythm1 = [1,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0]; //kicks
rhythm2 = [0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0]; //snares
rhythm3 = [0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0]; //hat
rhythm4 = [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]; //open hat
rhythm5 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
document.getElementById("slices").value = 16;	
document.getElementById("tempo").value = 200;
document.getElementById("swing").value = 0;
document.getElementById("reverb").value = 0;



}

function itsANewDay(){
rhythm1 = [1,0,1,0,0,0,0,0,0,0,1,1,0,0,0,1]; //kicks
rhythm2 = [0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0]; //snares
rhythm3 = [1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0]; //hat
rhythm4 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]; //ride/other

rhythm5 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
document.getElementById("slices").value = 16;	
document.getElementById("tempo").value = 200;
document.getElementById("swing").value = 0;
document.getElementById("reverb").value = 0;

}



function papaWasToo(){
rhythm1 = [1,0,0,0,0,0,0,1,1,0,1,0,0,0,0,1]; //kicks
rhythm2 = [0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0]; //snares
rhythm3 = [0,0,0,0,1,0,0,0,1,0,1,0,1,0,1,1]; //hat
rhythm4 = [0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0]; //tambourine

rhythm5 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
document.getElementById("slices").value = 16;	
document.getElementById("tempo").value = 200;
document.getElementById("swing").value = 0;
document.getElementById("reverb").value = 0;


}

function theBigBeat(){
rhythm1 = [1,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0]; //kicks
rhythm2 = [0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0]; //snares
rhythm3 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]; //hat
rhythm4 = [0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0]; //clap

rhythm5 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
document.getElementById("slices").value = 16;	
document.getElementById("tempo").value = 200;
document.getElementById("swing").value = 0;
document.getElementById("reverb").value = 0;


}

function syntheticSubstition1(){
rhythm1 = [1,0,1,0,0,0,0,1,0,1,1,1,0,0,0,1]; //kicks
rhythm2 = [0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0]; //snares
rhythm3 = [1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0]; //hat
rhythm4 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]; //ride/other
rhythm5 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
document.getElementById("slices").value = 16;	
document.getElementById("tempo").value = 200;
document.getElementById("swing").value = 0;
document.getElementById("reverb").value = 0;



}

function amenBreak1(){
rhythm1 = [1,0,1,0,0,0,0,0,0,0,1,1,0,0,0,0]; //kicks
rhythm2 = [0,0,0,0,1,0,0,1,0,1,0,0,1,0,0,1]; //snares
rhythm3 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]; //hat
rhythm4 = [1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0]; //ride/other
rhythm5 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
document.getElementById("slices").value = 16;	
document.getElementById("tempo").value = 200;
document.getElementById("swing").value = 0;
document.getElementById("reverb").value = 0;



}


function sonClave32(){
rhythm1 = [1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1]; //kicks
rhythm2 = [1,0,0,1,0,0,1,0,0,0,1,0,1,0,0,0]; //rims
rhythm3 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]; //hat
rhythm4 = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]; //ride/other
rhythm5 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
document.getElementById("slices").value = 16;	
document.getElementById("tempo").value = 200;
document.getElementById("swing").value = 0;
document.getElementById("reverb").value = 0;

}

function sonClave23(){
rhythm1 = [1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1]; //kicks
rhythm2 = [0,0,1,0,1,0,0,0,1,0,0,1,0,0,1,0]; //rims
rhythm3 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]; //hat
rhythm4 = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]; //ride/other
rhythm5 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
document.getElementById("slices").value = 16;	
document.getElementById("tempo").value = 200;
document.getElementById("swing").value = 0;
document.getElementById("reverb").value = 0;


}

function rumba(){
rhythm1 = [1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1]; //kicks
rhythm2 = [1,0,0,1,0,0,0,1,0,0,1,0,1,0,0,0]; //rims
rhythm3 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]; //hat
rhythm4 = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]; //ride/other

rhythm5 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
document.getElementById("slices").value = 16;	
document.getElementById("tempo").value = 200;
document.getElementById("swing").value = 0;
document.getElementById("reverb").value = 0;


}

function bossaNova(){
rhythm1 = [1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1]; //kicks
rhythm2 = [1,0,0,1,0,0,1,0,0,0,1,0,0,1,0,0]; //rims
rhythm3 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]; //hat
rhythm4 = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]; //ride/other
rhythm5 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
document.getElementById("slices").value = 16;	
document.getElementById("tempo").value = 200;
document.getElementById("swing").value = 0;
document.getElementById("reverb").value = 0;



}

function soukous(){
rhythm1 = [1,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0]; //kicks
rhythm2 = [1,0,0,1,0,0,1,0,1,0,0,1,0,0,1,0]; //rims
rhythm3 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]; //hat
rhythm4 = [1,0,0,1,0,0,1,0,0,1,1,0,0,0,0,0]; //low bell
rhythm5 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
document.getElementById("slices").value = 16;	
document.getElementById("tempo").value = 200;
document.getElementById("swing").value = 0;
document.getElementById("reverb").value = 0;


}

function gahu(){
rhythm1 = [1,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0]; //kicks
rhythm2 = [0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1]; //rims
rhythm3 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]; //hat
rhythm4 = [1,0,0,1,0,0,1,0,0,0,1,0,0,0,1,0]; //low bell
rhythm5 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
document.getElementById("slices").value = 16;	
document.getElementById("tempo").value = 200;
document.getElementById("swing").value = 0;
document.getElementById("reverb").value = 0;


}



function shiko(){
rhythm1 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]; //kicks
rhythm2 = [0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1]; //rims
rhythm3 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]; //hat
rhythm4 = [1,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0]; //low bell

rhythm5 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
document.getElementById("slices").value = 16;	
document.getElementById("tempo").value = 200;
document.getElementById("swing").value = 0;
document.getElementById("reverb").value = 0;


}

function makongo(){
rhythm1 = [1,0,0,1,1,0,0,1,1,0,0,1,0,0,0,0]; //kicks
rhythm2 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]; //rims
rhythm3 = [1,0,1,0,1,0,1,0,1,0,1,0,0,0,0,0]; //hat
rhythm4 = [1,0,1,0,1,1,0,1,0,1,0,1,0,0,0,0]; //low bell

rhythm5 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

document.getElementById("slices").value = 12;	
document.getElementById("tempo").value = 200;
document.getElementById("swing").value = 0;
document.getElementById("reverb").value = 0;


}

function ashleysRoachclip(){
rhythm1 = [1,0,1,0,0,0,1,0,0,1,1,0,0,0,0,0]; //kicks
rhythm2 = [0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0]; //snares
rhythm3 = [1,0,1,0,1,0,1,0,1,0,0,0,1,0,1,0]; //closed hat
rhythm4 = [0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0]; //open hat
rhythm5 = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]; //tambourine
document.getElementById("slices").value = 16;	
document.getElementById("tempo").value = 200;
document.getElementById("swing").value = 0;
document.getElementById("reverb").value = 0;
}

function takeMeToTheMardiGras(){
rhythm1 = [1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0]; //kicks
rhythm2 = [0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0]; //snares
rhythm3 = [1,0,1,0,1,0,1,1,1,0,1,0,1,0,1,1]; //hat
rhythm4 = [1,0,1,0,0,1,0,0,0,1,0,0,1,0,0,0]; //high bell
rhythm5 = [0,0,0,0,1,0,0,1,0,0,1,0,0,1,0,1]; //low bell
document.getElementById("slices").value = 16;	
document.getElementById("tempo").value = 200;
document.getElementById("swing").value = 0;
document.getElementById("reverb").value = 0;



}

function apache1(){
rhythm1 = [1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0]; //kicks
rhythm2 = [0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,1]; //snares
rhythm3 = [1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0]; //hat
rhythm4 = [1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0]; //low conga
rhythm5 = [0,0,0,0,1,0,0,1,0,1,0,0,1,0,0,1]; //high conga
document.getElementById("slices").value = 16;	
document.getElementById("tempo").value = 200;
document.getElementById("swing").value = 0;
document.getElementById("reverb").value = 0;



}

function apache2(){
rhythm1 = [1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0]; //kicks
rhythm2 = [0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,1]; //snares
rhythm3 = [1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0]; //hat
rhythm4 = [1,0,1,1,0,0,0,0,0,0,0,0,0,0,1,0]; //low conga
rhythm5 = [0,0,0,0,1,0,0,1,0,1,1,0,1,1,0,0]; //high conga
document.getElementById("slices").value = 16;	
document.getElementById("tempo").value = 200;
document.getElementById("swing").value = 0;
document.getElementById("reverb").value = 0;
}

function apache3(){
rhythm1 = [1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0]; //kicks
rhythm2 = [0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,1]; //snares
rhythm3 = [1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0]; //hat
rhythm4 = [0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0]; //low conga
rhythm5 = [1,0,0,1,1,0,0,1,0,1,1,0,0,1,1,0]; //high conga
document.getElementById("slices").value = 16;	
document.getElementById("tempo").value = 200;
document.getElementById("swing").value = 0;
document.getElementById("reverb").value = 0;


}

function apache4(){
rhythm1 = [1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0]; //kicks
rhythm2 = [0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,1]; //snares
rhythm3 = [1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0]; //hat
rhythm4 = [1,0,0,0,0,0,1,1,0,0,0,1,0,0,1,0]; //low conga
rhythm5 = [0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0]; //high conga
document.getElementById("slices").value = 16;	
document.getElementById("tempo").value = 200;
document.getElementById("swing").value = 0;
document.getElementById("reverb").value = 0;
}
