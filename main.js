img="";
function preload(){
    img=loadImage("dog_cat.jpg");
}
function setup(){
    canvas= createCanvas(640,420);
    canvas.center();
}
function draw(){
    image(img,0,0,640,420);
    fill("#FF0000");
    text("dog",75,45);
    stroke("#FF0000")
    noFill();
    rect(75,30,400,400);
   
}