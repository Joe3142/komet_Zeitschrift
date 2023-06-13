let k;
let c;
let a;

let d;

function preload(){
  k = loadImage('pic/Zeitung-Komet.png');
  c = loadImage('pic/cover.png');
  a = loadImage('pic/cover_ad.png');
}

function setup() {
  createCanvas(1920, 1080);
  d = 1;
}



function draw() {
  background(255);
  noStroke();
  textSize(48 * d);
  fill(0);
  text("Komet Zeitschrift",750 * d,100 * d);
  fill(0,0,255);
  rect(0,0,1920 * d,50 * d);
  fill(255);
  imageMode(CORNER);
  image(k,0,50 * d,250 * d,250 * d);
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
  rect(560 * d,177 * d,660 * d,450 * d);
  imageMode(CORNER);
  image(c,570 * d,187 * d,300 * d,426 * d);
  textSize(14 * d);
  fill(0);
  noStroke();
  text("Komet Ausgabe 1: Mysteriöses Universum - ",890 * d,200 * d);
  text("Das unendliche Geheimnis", 900 * d,220 * d);
  text("Haben sie sich auch schon oftmals gewundert,", 890 * d,260 * d);
  text("welche Geheimnisse sich im Universum verbergen?", 890 * d,280 * d);
  text("Wir haben die Antworten auf die Fragen rund", 890 * d,300 * d);
  text("um das Universum.", 890 * d,320 * d);
  text("Erscheinungsdatum: 14.6.2023", 890 * d,340 * d);
  text("Preis: 4,99€", 890 * d,360 * d);
  fill(0,0,255);
  rect(890 * d,400 * d,120 * d,50 * d);
  fill(255);
  textSize(20 * d);
  text("kaufen", 920 * d, 430 * d);
  if(between(890 * d,400 * d,1010 * d,450 * d,mouseX,mouseY)){
  tooltip("Nicht mehr verfügbar");
  }
}

function advertisement(){
  fill(255);
  stroke(0);
  rect(0,400 * d,300 * d,500 * d);
  imageMode(CORNER);
  image(a,20 * d,420 * d,220 * d,312 * d);
  textSize(50 * d);
  fill(255,100,0);
  text("Jetzt", 40 * d,790 * d);
  text("Kaufen", 60 * d, 850 * d);
}

function aboutus(){
  fill(255);
  stroke(0);
  rect(1620 * d,100 * d,300 * d,200 * d);
  noStroke();
  fill(0);
  textSize(24 * d)
  text("Über uns:", 1700 * d, 130 * d);
  textSize(14 * d);
  text("Wir sind vier Schüler aus einem Schulprokjekt,", 1630 * d, 160 * d)
  text("die eine Zeitschrift erstellt haben und jede", 1630 * d, 180 * d)
  text("Zeitschrift hat eine Website, also haben", 1630 * d, 200 * d)
  text("wir eine erstellt.", 1630 * d, 220 * d);
}