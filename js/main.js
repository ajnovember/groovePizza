var GP;


function init(){

	GP = {
		grid:{
		{0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0},
		{0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0},
		{0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0},
		{0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0},
		},

		bpm:90,
		slices:8,
		beat: 0;
		running: false;



}

function setup(){
	var canvasWidth = 850;
	var canvasHeight = 780; 
	var canvas = createCanvas(canvasWidth, canvasHeight);
	canvas.parent('pizza');
}

function draw(){

}

function time();

}