
//test with music
//var mySong
//function preload(){
//   mySong = loadSound('nygga.mp3'); 
//}
function setup() {
  createCanvas(800,800);
 mic = new p5.AudioIn();
 mic.start();
 
   //analyzer = new p5.Amplitude();    
   //analyzer.setInput(mySong); 
  //background(255)
  noFill();
  angleMode(DEGREES);
  frameRate(12);
}
/*function mousePressed(){
  if(mySong.isPlaying()=== true){
  mySong.pause(); 
  }else{
    mySong.play();
  }
}*/
function draw() {
  background(255,20)
  //var volume = analyzer.getLevel();
  var volume=mic.getLevel();
  var volume2= map(volume,0,1,100,255);
  var volume3= map(volume,0,1,200,255);


  volume=map(volume,0,1,80,800);
  console.log(volume);
  translate(width/2,height/2);
  stroke(lerpColor(color(volume3,volume3,10),color(volume2,0,100),(frameCount%600)/600))
 line(0,0,volume*sin(frameCount*3),volume*cos(frameCount*3));

}