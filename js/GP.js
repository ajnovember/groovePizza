var canvas;
var canvasWidth; 
var canvasHeight; 
var dia1 = 600;
var dia2 = 460;
var dia3 = 340;
var dia4 = 240;
var dia5 = 154;
var diams = [600, 460, 374, 240, 154];
var rhythm1 = [1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0];
var rhythm2 = [0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0];
var rhythm3 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var rhythm4 = [0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0];
var rhythm5 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var pizza = [rhythm1, rhythm2, rhythm3, rhythm4, rhythm5];
var tempo;
var tempoMs;
var playing = false;
var beat;
//var tempoSlider;
//var swingSlider;
var volume;
var img;
var slices;
//var slicesSlider;
var running;
var label;
var hat1,kick1,snare1,tamb1;
var hat2,kick2,snare2,tamb2;
var hat3,kick3,snare3,tamb3;
var hat,kick,snare,tamb;
var tapOn;
var beatMs;
var lastTempo;
var current;
var reverb;
var reverbAmt;
var labelMode;
var label;
var label16ths = ['1','e','+','a','2','e','+','a','3','e','+','a','4','e','+','a'];
var sound1, sound2, sound3, sound4, sound5;
var sounds = [sound1, sound2, sound3, sound4, sound5];

function preload(){
	reverb = createConvolver('sf/concrete-tunnel.mp3')
	
	acKick1 = loadSound('./sf/KICK_14H.wav');
	acKick2 = loadSound('./sf/KICK_02J.wav');
	elKick1 = loadSound('./sf/01kick_hip-hop.wav');
	elKick2 = loadSound('./sf/eKick.wav');
	
	acSnare1 = loadSound('./sf/SNAR_10E.wav');
	acSnare2 = loadSound('./sf/SNAR_10E.wav');
	elSnare1 = loadSound('./sf/02snare_hip-hop.wav');
	elSnare2 = loadSound('./sf/02snare_techno.wav');

	acHat1 = loadSound('./sf/03hhclosed_acoustic.wav');
	elHat1 = loadSound('./sf/03hhclosed_hip-hop.wav');
	elHat2 = loadSound('./sf/04hhopen_hip-hop.wav');	
	tamb = loadSound('./sf/TAMB_31E.wav');
	
	ride1 = loadSound('./sf/06ride_acoustic.wav');
	ride2 = loadSound('./sf/06ride_techno.wav');
	openHat = loadSound('./sf/04hhopen_acoustic.wav');
	stick = loadSound('./sf/stick.wav');
	
	cowbell1 = loadSound('./sf/08cowbell_acoustic.wav');
	cowbell2 = loadSound('./sf/CB.mp3');
	clave = loadSound('./sf/CL.mp3');
	clap = loadSound('./sf/05clap_techno.wav');
	
	
	img = loadImage('./imgs/cardboard.jpg')


}

function setup(){
	labelMode = 1;
	canvasWidth = 850;
	canvasHeight = 780; 
	reverbAmt = 0;
	running = true;
	
	image(img,0,0,canvasWidth, canvasHeight);
	canvas = createCanvas(canvasWidth, canvasHeight);
	canvas.style("margin","1px");
	//canvas.position(250,0);
	tempo = 90;
	tempoMs = 30000/tempo;
	beat = -1;
	canvas.parent('pizza');
	
	tapOn = false;

	beatMs = 30000/tempo;
	slices = 8;

	lastTempo = 0;
	//bootsNcats();
	billieJean();
	document.getElementById("reverb").value = 0;	
	labelMode = 0;
	soundChange();
}


function draw(){
	image(img,0,0,canvasWidth, canvasHeight);
//	slices = sliceSlider.value();
	slices = document.getElementById("slices").value;	
	//console.log(beat);
	//background(70);
	
	volume = document.getElementById("volume").value/100 ;
	masterVolume(volume);
	
	if(lastTempo != document.getElementById('tempo').value){
	tempo = document.getElementById('tempo').value;
	}
	beatMs = 30000/tempo;
	lastTempo = document.getElementById('tempo').value;
	
	drawPizza();
	var swing;
	//ellipse(canvasWidth/2,canvasWidth/2, dia1, dia1);
	//ellipse(canvasWidth/2,canvasWidth/2, dia2, dia2);
	//ellipse(canvasWidth/2,canvasWidth/2, dia3, dia3);
	//ellipse(canvasWidth/2,canvasWidth/2, dia4, dia4);
	
	updatePepperonis(beat);
	
	if(beat%2==0){
		swing = beatMs*(document.getElementById("swing").value)*.01;
	}
	else{
		swing = -beatMs*(document.getElementById("swing").value)*.01;
		
	}
	if(millis() > tempoMs + swing){
		if (running){beat++;}
		if (beat > slices)
		beat = 0;
		
	tempoMs = (30000/tempo) + millis();
		if (beat == slices)
		beat = 0;
		
		if (running){playBeats(beat);}
	
	}
	
	
	
		
	

}






function mousePressed(){
	//console.log(rhythm5);
	for(var i = 0; i < slices; i++){
		var d = dist(mouseX, mouseY, canvasWidth/2 + (dia1/2) * cos((-PI/2)+i*(PI/(slices/2))), canvasHeight/2 + (dia1/2) * sin((-PI/2)+i*(PI/(slices/2))));
		if (d < 27){
			if(rhythm1[i] == 0){
			rhythm1[i] = 1;
			}
			else{
			rhythm1[i] = 0;
			}
		} 
		var d = dist(mouseX, mouseY, canvasWidth/2 + (dia2/2) * cos((-PI/2)+i*(PI/(slices/2))), canvasHeight/2 + (dia2/2) * sin((-PI/2)+i*(PI/(slices/2))));
		if (d < 20){
			if(rhythm2[i] == 0){
			rhythm2[i] = 1;
			}
			else{
			rhythm2[i] = 0;
			}
		} 
		var d = dist(mouseX, mouseY, canvasWidth/2 + (dia3/2) * cos((-PI/2)+i*(PI/(slices/2))), canvasHeight/2 + (dia3/2) * sin((-PI/2)+i*(PI/(slices/2))));
		if (d < 17){
			if(rhythm3[i] == 0){
			rhythm3[i] = 1;
			}
			else{
			rhythm3[i] = 0;
			}
		} 
		var d = dist(mouseX, mouseY, canvasWidth/2 + (dia4/2) * cos((-PI/2)+i*(PI/(slices/2))), canvasHeight/2 + (dia4/2) * sin((-PI/2)+i*(PI/(slices/2))));
		if (d < 17){
			if(rhythm4[i] == 0){
			rhythm4[i] = 1;
			}
			else{
			rhythm4[i] = 0;
			}
		} 
		var d = dist(mouseX, mouseY, canvasWidth/2 + (dia5/2) * cos((-PI/2)+i*(PI/(slices/2))), canvasHeight/2 + (dia5/2) * sin((-PI/2)+i*(PI/(slices/2))));
		if (d < 17){
			if(rhythm5[i] == 0){
			rhythm5[i] = 1;
			}
			else{
			rhythm4[i] = 0;
			}
		} 
	}
}



function playBeats(beat){
	if(rhythm1[beat] == 1){
	playSound(sound1);
	
	}
	if(rhythm2[beat] == 1){
	playSound(sound2);
	
	

	}
	if(rhythm3[beat] == 1){
	playSound(sound3);
	
	

	}
	if(rhythm4[beat] == 1){
	playSound(sound4);
	
	}
	
	if(rhythm5[beat] == 1){
	playSound(sound5);
	
	
	}

}

function reset(){
	
	
	
rhythm1 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
rhythm2 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
rhythm3 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
rhythm4 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
rhythm5 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];


	
	
}


	
function tap(){
	if (tapOn == false){
	current = millis();
	tapOn = true;
	}
	else{
	var diff = millis() - current;
	newTempo = (30000.0/diff)*2;
	tapOn = false;
	}
	tempo = newTempo;
	
	
}
	

	




function playSound(soundfile){
	reverbAmt = document.getElementById("reverb").value/50.0;
	
	soundfile.connect(reverb);
	reverb.amp(reverbAmt);
	soundfile.play();

	
	
}


function keyPressed() {
	if (keyCode == 32){
		if(running == true){
		running = false;
		//noLoop();
		}
		else{
			running = true
		//	loop();
		}
	} 
}

function labelChange(){
	if(document.getElementById('label').value == 'none') {labelMode = 0;}
	if(document.getElementById('label').value == '8ths') {labelMode = 1;}
	if(document.getElementById('label').value == 'straight') {labelMode = 2;}
	if(document.getElementById('label').value == '16ths') {labelMode = 3;}
}



function soundChange(){
	
	//console.log(document.getElementById('sound1').value);
	if(document.getElementById('sound1').value == 'acKick1') {sound1 = acKick1;}
	if(document.getElementById('sound1').value == 'acKick2') {sound1 = acKick2;}
	if(document.getElementById('sound1').value == 'elKick1') {sound1 = elKick1;}
	if(document.getElementById('sound1').value == 'elKick2') {sound1 = elKick2;}
	
	if(document.getElementById('sound2').value == 'acSnare1') {sound2 = acSnare1;}
	if(document.getElementById('sound2').value == 'acSnare2') {sound2 = acSnare2;}
	if(document.getElementById('sound2').value == 'elSnare1') {sound2 = elSnare1;}
	if(document.getElementById('sound2').value == 'elSnare2') {sound2 = elSnare2;}
	
	if(document.getElementById('sound3').value == 'acHat1') {sound3 = acHat1;}
	if(document.getElementById('sound3').value == 'elHat1') {sound3 = elHat1;}
	if(document.getElementById('sound3').value == 'elHat2') {sound3 = elHat2;}
	if(document.getElementById('sound3').value == 'tamb') {sound3 = tamb;}

	if(document.getElementById('sound4').value == 'ride1') {sound4 = ride1;}
	if(document.getElementById('sound4').value == 'ride2') {sound4 = ride2;}
	if(document.getElementById('sound4').value == 'stick') {sound4 = stick;}
	if(document.getElementById('sound4').value == 'openHat') {sound4 = openHat;}
	
	if(document.getElementById('sound5').value == 'cowbell1') {sound5 = cowbell1;}
	if(document.getElementById('sound5').value == 'cowbell2') {sound5 = cowbell2;}
	if(document.getElementById('sound5').value == 'clave') {sound5 = clave;}
	if(document.getElementById('sound5').value == 'clap') {sound5 = clap;}
    
	
	
}






