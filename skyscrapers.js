var skyscrapers;//variable van de wolkenkrabbers
let img;//variable van de foto van de wolk
var cloudWidth = 1180; //Breedte van de wolk
var cloudHeight = 492; //Hoogte van de wolk
let xpos = -1180;//Beginpositie x van wolk 1
let xpos2 = -1680;//Beginpositie x van wolk 2
let ypos = 800;//Beginpositie y van wolk 1
let ypos2 = 400;//Beginpositie y van wolk 2
var move = 2;//Bewegingssnelheid van wolk

function preload() {
  skyscrapers = loadTable('skyscrapers.csv', 'csv','header');//Hier wordt het csv tabel gelinkt
  img = loadImage('cloud.png'); //Het plaatje van de wolk wordt geladen
}

function setup(){//Deze functie wordt maar 1 keer gerunt
  createCanvas(16500, 1800);//De grootte van he canvas
}

function draw(){//Deze functie wordt elke keer opnieuw gerunt
	background(102, 204, 255);//De blauew achtergrond
	for (var j = 0; j < skyscrapers.getRowCount(); j++) {//loop, zodat alle wolkenkrabbers getekend worden
	 hoogte = skyscrapers.getNum(j,'height');//Hier worden de gegevens uit het tabel gehaald en hoogte wordt gedefinieerd
	 fill(200);//De grijze kleur van de wolkenkrabbers
     rect(10+(10*j), height, 10, -hoogte);//De wolkenkrabbers
	}
	
	image(img, xpos , ypos, cloudWidth, cloudHeight);//wolk 1
	xpos = xpos + move;//De beweging van wolk 1
	if(xpos >16500){//Als de wolk aan het einde is, gaat hij weer terug naar het begin
	  xpos = -1180;//Het beginpunt
	}
   image(img, xpos2 , ypos2, cloudWidth, cloudHeight);//wolk 2
	xpos2 = xpos2 + move;//De beweging van wolk 2
	if(xpos2 >16500){//Als de wolk aan het einde is, gaat hij weer terug naar het begin
	  xpos2 = -1180;//Het beginpunt
	}

} 








