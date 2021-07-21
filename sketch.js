/* https://vimeo.com/144162102
JSON source (5:05) https://github.com/dariusk/corpora/blob/master/data/animals/birds_antarctica.json
Video referenced (9:05)"createP from DOM" https://vimeo.com/142698165 */

var data;

function preload() {
  data = loadJSON("birds.json");
}

function setup() {
	angleMode(DEGREES);
  createCanvas( windowWidth, windowHeight);
  // var bird = data.birds[1].competence[2];
  //createP[bird];

/*
  var birds = data.birds;

  for (var i = 0; i < birds.length; i++) {
    createElement('h1', birds[i].family);
    var aesthetics = birds[i].aesthetics;
    for (var j = 0; j < aesthetics.length; j++) {
      createDiv(aesthetics[j]);
    }
    var competence = birds[i].competence;
    for (var j = 0; j < competence.length; j++) {
      createDiv(competence[j]);
    }
    var energy = birds[i].energy;
    for (var j = 0; j < energy.length; j++) {
      createDiv(energy[j]);
    }


  }*/
}

function draw()
{
background('#f9f9f9');
var birds = data.birds;

// var max;
//     for (var i=0 ; i<birds.length ; i++) {
//         if (max == null || parseInt(birds[i]["energy"]) > parseInt(max["energy"]))
//             max = birds[i];
//     }
//     console.log(max["energy"]);

var x2 = map(mouseX,0,width,0,birds.length,true);

var c_size = birds[int(x2)].competence;
//console.log(birds[int(random(0,birds.length))].integrity);
var c_size_map = map(c_size,0,300,0,200,true);


var a_size = birds[int(x2)].aesthetics;
var a_size_map = map(a_size,0,300,0,74,true);


var e_size = birds[int(x2)].energy;
var e_size_map = map(e_size,0,300,0,34,true);



var s_size = birds[int(x2)].social;
var s_size_map = map(s_size,0,300,0,237,true);



var i_size = birds[int(x2)].integrity;
var i_size_map = map(i_size,0,300,0,971,true);



var ex_size = birds[int(x2)].explore;
var ex_size_map = map(ex_size,0,300,0,252,true);

/*
fill(63,87,1);
  ellipse(dist,dist,x,c_size_map);
  rotate(60);
  fill(150,154,70);
    ellipse(dist,dist,x,a_size_map);
  rotate(60);
  fill(242,238,147);
    ellipse(dist,dist,x,e_size_map);
  rotate(60);
  fill(255,133,8);
    ellipse(dist,dist,x,s_size_map);
  rotate(60);
  fill(200,130,80);
    ellipse(dist,dist,x,i_size_map);;
  rotate(60);
  fill(239,6,1);
    ellipse(dist,dist,x,ex_size_map);
*/

textSize(32);
noStroke();
fill('#0181BB');
text("Competence "+c_size,500,660);
fill('#77DAD5');
text("Aesthetics "+a_size,240,400);
  fill('#FFE877');
text("Energy  "+e_size,400,180);
fill('#DEDE0E');
text("Social "+s_size,820,180);
 fill('#F96E91');
text("Integrity "+i_size,950,360);
 fill('#232D3B');
text("Exploration "+ex_size,880,580);
 
fill(0);
textSize(16);
//text("move mouse from left to right to toggle dates",10,560);
textSize(48);
text(birds[int(x2)].family,620,100);
textSize(16);
text("move mouse from left to right to toggle dates",990,40);
textSize(32);
text("My Digital Life",590,40);

textSize(10);
text("The website count is categorised into ",20,560+70);
text("Competence: websites used for Phd research, ex: Google scholar, github ",20,580+70);
text("Aesthetics: websites used for Music,Movies,Images, ex: Netflix,Pinterest ",20,600+70);
text("Energy: websites used for basic needs, ex: Amazon,Flipkart",20,620+70);
text("Social: websites used for social activities, ex: Reddit, Whatsapp, Twitter",20,640+70);
text("Integrity: websites used for organising & transacting , ex: Google Drive, SBI, Axisbank",20,660+70);
text("Exploration: websites used for Information/Infotainment, ex: Youtube, Wikipedia ",20,680+70);
/*
var a_size = birds[int(x2)].aesthetics;
var e_size = birds[int(x2)].energy;
var s_size = birds[int(x2)].social;
var i_size = birds[int(x2)].integrity;
var ex_size = birds[int(x2)].explore;

*/
//background mandala
//rgb(63,87,1) , rgb(150,154,70), rgb(242,238,147) , rgb(255,133,8) , rgb(255,133,8) , rgb(239,6,1)

translate(windowWidth/2,windowHeight/2);
noFill();
var j = 50;
  var k = 3*j;
  var disti = 70;
  /*
  stroke(255,0,0);
  rotate(60);
  ellipse(disti,disti,j,k);
  rotate(60);
    ellipse(disti,disti,j,k);
  rotate(60);
    ellipse(disti,disti,j,k);
  rotate(60);
    ellipse(disti,disti,j,k);
  rotate(60);
    ellipse(disti,disti,j,k);;
  rotate(60);
    ellipse(disti,disti,j,k);
*/

//Mandala


//200,74,34,237,971,252




  
  //noFill();
  noStroke();
  var x = 50;
  var y = 3*x;
  var dist = 70;
  
 // let m = map(i_size_map, 0, 100, 0, 40);
  //ellipse(m, 50, 10, 10);
  rotate(60);
  
  stroke(63,87,1);
  noFill();
  strokeWeight(2);
  stroke(200);
  ellipse(dist,dist,200,200);
  noStroke();
  fill('#0181BB');
  ellipse(dist,dist,c_size_map,c_size_map);
  noFill();
  rotate(60);
  stroke(200);
  ellipse(dist,dist,200,200);
  noStroke();
  fill('#77DAD5');
    ellipse(dist,dist,a_size_map,a_size_map);
    noFill();
  rotate(60);
  stroke(200);
  ellipse(dist,dist,200,200);
  noStroke();
  fill('#FFE877');
    ellipse(dist,dist,e_size_map,e_size_map);
    noFill();
  rotate(60);
  stroke(200);
  ellipse(dist,dist,200,200);
  noStroke();
  fill('#DEDE0E');
    ellipse(dist,dist,s_size_map,s_size_map);
    noFill();
  rotate(60);
  stroke(200);
  ellipse(dist,dist,200,200);
  noStroke();
  fill('#F96E91');
    ellipse(dist,dist,i_size_map,i_size_map);
    noFill();
  rotate(60);
  stroke(200);
  ellipse(dist,dist,200,200);
  noStroke();
  fill('#232D3B');
    ellipse(dist,dist,ex_size_map,ex_size_map);
    noFill();



    
}

