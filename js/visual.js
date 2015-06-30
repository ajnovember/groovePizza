function drawPizza(){
	noStroke();
	fill(60, 150);
	ellipse((canvasWidth+2)/2,(canvasHeight+3)/2,752,752);
	fill(230,180,120);
	ellipse(canvasWidth/2,canvasHeight/2,750,750);
	fill(255,50,30);
	ellipse(canvasWidth/2,canvasHeight/2, 730,730);
	fill(255,255,0);
	ellipse(canvasWidth/2,canvasHeight/2, 715,715);
	
	for(var i = 0; i < slices; i ++){
	 	var theta = 2*PI/slices;
		stroke(70);
		strokeWeight(.3);
		line(canvasWidth/2, canvasHeight/2, canvasWidth/2 + 375* cos(theta*3/2 + i*theta - PI/2), canvasHeight/2 + 375 * sin(theta*3/2 + i*theta - PI/2));
		stroke(0);
		textSize(20);
		fill(0); 
		var Xoffset = 0;
		var Yoffset = 0;
		if(i>9){
			Yoffset = 10;
			Xoffset = 10;
		}
	
		if (labelMode == 0){label = "";}
		if (labelMode == 2){label = i+1;}	
		if (labelMode == 1){label = i%2==0?(i/2)+1:'+';}
		if (labelMode == 3){label = label16ths[i];}

		
				
	
		text(label,(canvasWidth-13)/2 + (347)* cos((-PI/2)+i*(PI/(slices/2))), (canvasHeight+11)/2 + (347) * sin((-PI/2)+i*(PI/(slices/2))));
	}
}

function updatePepperonis(beat){
	//console.log("made it");
	for(var i = 0; i < slices; i ++){
	//console.log("made it2");
		if (i == beat){
			var rad = 45;
		}
		else var rad = 30;
		var theta = (-PI/2)+i*PI/(slices/2);		
		if(rhythm1[i] == 0){
			fill(255,225,0);
			noStroke();
		}
		else{
			
			fill(100,60,0);
			noStroke();
		}
		//if(i%2 == 0){		
		//	ellipse(canvasWidth/2 + (dia1/2) * cos(theta), canvasHeight/2 + (dia1/2) * sin((theta) ) ,rad , rad);
		//}
		//else{ 
			ellipse(canvasWidth/2 + (dia1/2) * cos(theta), canvasHeight/2 + (dia1/2) * sin(theta) ,rad + 30, rad + 30);			
	//	}
		
		if(rhythm2[i] == 0){
			fill(255,225,0);
			noStroke()
		}
		else{
			fill(255,50,30);			
			noStroke();
		}
		
		ellipse(canvasWidth/2 + (dia2/2) * cos((-PI/2)+i*PI/(slices/2)), canvasHeight/2 + (dia2/2) * sin((-PI/2)+i*PI/(slices/2)),rad + 20, rad + 20);
		
		if(rhythm3[i] == 0){
			fill(255,225,0);
			noStroke();
		}
		else{
			
			fill(100,60,0);
			fill(0,102,0);

			noStroke();
		}
	
		ellipse(canvasWidth/2 + (dia3/2) * cos((-PI/2)+i*PI/(slices/2)), canvasHeight/2 + (dia3/2) * sin((-PI/2)+i*PI/(slices/2)),rad + 10, rad + 10);
		
		if(rhythm5[i] == 0){
			fill(255,225,0);
			noStroke();
		}
		else{
			fill(10);
			noStroke();
		}
		ellipse(canvasWidth/2 + (dia5/2) * cos((-PI/2)+i*PI/(slices/2)), canvasHeight/2 + (dia5/2) * sin((-PI/2)+i*PI/(slices/2)),rad-5, rad -5);
		fill(255,225,0);
		ellipse(canvasWidth/2 + (dia5/2) * cos((-PI/2)+i*PI/(slices/2)), canvasHeight/2 + (dia5/2) * sin((-PI/2)+i*PI/(slices/2)),(rad-5)/2 , (rad-5)/2 );
		
		
		if(rhythm4[i] == 0){
			fill(255,225,0);
			noStroke();
		}
		else{
			
			 
			fill(214,184,153);

			noStroke();
		}
	
		ellipse(canvasWidth/2 + (dia4/2) * cos((-PI/2)+i*PI/(slices/2)), canvasHeight/2 + (dia4/2) * sin((-PI/2)+i*PI/(slices/2)),rad , rad );


	
	}

	
}