// Sierpinski triangle using a chaos game 

    var p1 = [];
    var p2 = [];
    var p3 = [];
    var v = [];
    var counter = 0;

function setup() {
    createCanvas(600,600);
    background(0);
     p1 = createVector(0,0);
     p2 = createVector(1,0);
     p3 = createVector(0.5,0.866);
     v = createVector(random(1),random(0.866));
    stroke(255);
    strokeWeight(1)
    point(map(p1.x,0,1,0,width), map(p1.y,0,0.866,0,0.866*height));
    point(map(p2.x,0,1,0,width), map(p2.y,0,0.866,0,0.866*height));
    point(map(p3.x,0,1,0,width), map(p3.y,0,0.866,0,0.866*height));
}

function draw() {
    
    
    for(var i=0; i<100;i++){
    
    var n = random([1,2,3]);
    
    if (n==1){
             v.add(p1);
        } else if (n==2){
             v.add(p2);
        } else {
             v.add(p3);
        }        
    v.div(2);  
    stroke(map(v.x,0,1,128,255),map(v.y,0,0.866,0,255),map(v.x,0,1,255,128));
    point(map(v.x,0,1,0,width), map(v.y,0,0.866,0,0.866*height));
    }
    
    counter+=1;
    if (counter >= 1000){
    noStroke();
    fill(255, 255, 255);
    textSize(10);
    text("M. A. Koch, PhD. 2020", width-115, height-8);
    noLoop();
    } 
    //noStroke();
//    fill(255, 255, 255);
//    textSize(25);
//    text("N = "+counter, width-115, height-8);
    
    
    
    }