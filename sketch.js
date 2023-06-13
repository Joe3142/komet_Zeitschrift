let k;
let c;
let a;


function preload(){
  k = loadImage('pic/Zeitung-Komet.png');
  c = loadImage('pic/cover.png');
  a = loadImage('pic/cover-ad.png');
}

function setup() {
  createCanvas(1920, 1080);
}



function draw() {
  background(255);
  noStroke();
  textSize(48);
  fill(0);
  text("Komet Zeitschrift",750,100);
  fill(0,0,255);
  rect(0,0,1920,50);
  fill(255);
  imageMode(CORNER);
  image(k,0,50,250,250);
  zeitschrift();
  advertisement();
  aboutus();
}

function between(x,y,x2,y2,x3,y3){
  return (x3 > x && x3 < x2 && y3 > y && y3 < y2); 
}

function tooltip(txt){
  fill(255);
  stroke(0);
  rect(mouseX,mouseY,txt.length * 8,20);
  fill(0);
  noStroke();
  textSize(14);
  text(txt, mouseX + 10, mouseY + 14);
}

function zeitschrift(){
  stroke(0);
  rect(560,177,660,450 );
  imageMode(CORNER);
  image(c,570,187,300,426);
  textSize(14);
  fill(0);
  noStroke();
  text("Komet Ausgabe 1: Mysteriöses Universum - ",890,200);
  text("Das unendliche Geheimnis", 900,220);
  text("Haben sie sich auch schon oftmals gewundert,", 890,260);
  text("welche Geheimnisse sich im Universum verbergen?", 890, 280);
  text("Wir haben die Antworten auf die Fragen rund", 890 ,300);
  text("um das Universum.", 890,320);
  text("Erscheinungsdatum: 14.6.2023", 890,340);
  text("Preis: 4,99€", 890,360 );
  fill(0,0,255);
  rect(890,400,120,50);
  fill(255);
  textSize(20);
  text("kaufen", 920, 430);
  if(between(890,400,1010,450,mouseX,mouseY)){
  tooltip("Nicht mehr verfügbar");
  }
}

function advertisement(){
  fill(255);
  stroke(0);
  rect(0,400,300,500);
  imageMode(CORNER);
  image(a,20,420,220,312);
  textSize(50);
  fill(255,100,0);
  text("Jetzt", 40,790);
  text("Kaufen", 60, 850);
}

function aboutus(){
  fill(255);
  stroke(0);
  rect(1620,100,300,200);
  noStroke();
  fill(0);
  textSize(24)
  text("Über uns:", 1700, 130);
  textSize(14);
  text("Wir sind vier Schüler aus einem Schulprokjekt,", 1630, 160)
  text("die eine Zeitschrift erstellt haben und jede", 1630, 180)
  text("Zeitschrift hat eine Website, also haben", 1630, 200)
  text("wir eine erstellt.", 1630, 220);
}
