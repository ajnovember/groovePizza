var grid;
var slices;
var beat;
var tempo;




function setup(){
	grid= [
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
		];
	var canvas = createCanvas(850, 780);
	canvas.parent('pizza');
	slices = 16;
}

function draw(){
	drawPizza();
	for(var i = 0; i < slices; i++){
	drawPepperonis(i);
	label();
	playSounds();
	}

}

function time(){

}

function mousePressed(){
	//console.log(rhythm5);
	for(var j = 0; j < grid.length; j++){

		for(var i = 0; i < slices; i++){
			var d = dist(mouseX, mouseY, width/2 + (diams[j]/2) * cos((-PI/2)+i*(PI/(slices/2))), height/2 + (diams[j]/2) * sin((-PI/2)+i*(PI/(slices/2))));
			if (d < 27){
				if(grid[j][i] == 0){
				grid[j][i] = 1;
				}
				else{
				grid[j][i] = 0;
				}
			} 
		}
	}		
}


function drawPizza(){
	noStroke();
	fill(60, 150);
	ellipse((width+2)/2,(height+3)/2,752,752);
	fill(230,180,120);
	ellipse(width/2,height/2,750,750);
	fill(255,50,30);
	ellipse(width/2,height/2, 730,730);
	fill(255,255,0);
	ellipse(width/2,height/2, 715,715);
}

function drawPepperonis(beat){
	rad = 30;
	var diams = [600, 460, 374, 240, 154];
	for(var i = 0; i < 5; i++){
	stroke(0);
	ellipse(width/2 + (diams[i]/2) * cos((-PI/2)+beat*PI/(slices/2)), height/2 + (diams[i]/2) * sin((-PI/2)+beat*PI/(slices/2)),rad, rad);
	}

}

function label(){}
function playSounds(){}



