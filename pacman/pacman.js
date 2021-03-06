var menu_but, crafts, computer_font;
function preload() {
  img = loadImage("Sources/Images/fondo.jpg");
  start = loadImage("Sources/Images/start.jpg")
  myFont = loadFont('Sources/Font/PAC-FONT.TTF');
  computer_font = loadFont( '../assets/computer_font.ttf' );
  soundFormats('mp3');
  startingAudio = loadSound('Sources/Audios/pacman_beginning.mp3');
  chomp = loadSound('Sources/Audios/pacman_chomp.mp3');
  deathAudio = loadSound('Sources/Audios/pacman_death.mp3');
  startingAudio.setVolume(0.1);
  chomp.setVolume(0.1);
  deathAudio.setVolume(0.1);

}
function setup() {
  counterTimeSound=0
  counterInitial=0;
  var canvas = createCanvas(1400, 1000);
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  canvas.position(x-200, y);
  noStroke();
  startBool = false;
  again = false;
  user = new pacman(822, 630);
  redGhost = new ghost(819, 367, 255, 0, 0, 0, true, false, false);
  yellowGhost = new ghost(819, 367, 255, 165, 0, 2, true, false, false);
  blueGhost = new ghost(819, 367, 0, 0, 255, 3, true, false, false);
  pinkGhost = new ghost(819, 367, 255, 0, 255, 2, true, false, false);
  let _x = ( (window.innerWidth/2) - 250 - ("Menú".length)*40 + 10 )/2;
  menu_but  = new Button( "Menú", 500, 0, "../index/index.html", _x, 150 );
  crafts    = [];
  crafts[0] = new Craft( "../assets/menu/galaga_craft.png",     createVector( 0.15, 0.15 ), true );
  crafts[1] = new Craft( "../assets/menu/spinvaders_craft.png", createVector( 3, 3 ),       false );
  lives = 3;
  cookieI = new cookies(548, 202, true);
  cookieII = new cookies(1096, 202, true);
  cookieIII = new cookies(544, 599, true);
  cookieIV = new cookies(1096, 599, true);
  collideI = false;
  collideII = false;
  collideIII = false;
  collideIV = false;
  cookieA = 0;
  cookieB = 0;
  cookieC = 0;
  cookieD = 0;
  counter = 0;
  collideCookie= false;
  booleanGoal=false;
  lifeI=0;
  lifeII=0;
  booleanGoalII = false;
}

function draw() {
  if(booleanGoal){
    if(lifeI==0){
      lifeI = milliSeconds;
    }
    milliSeconds=millis()-lifeI;
  }
  else{
  milliSeconds = millis();
}
  time = (minutes*60) + seconds;
  minutes = minute();
  seconds = second();
  if(!startBool||again){
    push();
    translate(500, 100);
    scale(3);
    image(start, 0, 0);
    pop();
    push();
    fill(0);
    rect(770, 650, 350, 70);
    pop();
    push();
    textSize(40);
    textFont( myFont );
    fill(255, 255, 0);
    text("NEW GAME", 785, 695)
    pop();


    if(mouseIsPressed){
      startBool = collidePointRect(mouseX, mouseY, 770, 650, 350, 70);
      user.puntuation=0;
      again=false;
      lives=3;
    }
    pop();
  }
  else{
  if(lives!=0){

    if(counterInitial==0){
      startingAudio.play();
      counterInitial+=1;
    }
    if((milliSeconds>5600)&&(!booleanGoal)){
    if(counterTimeSound==0){
      counterTimeSound=milliSeconds;
       chomp.play();
    }
    if(milliSeconds-counterTimeSound>=580){
      counterTimeSound=0;
    }
  }
  if(booleanGoal){
  if(counterTimeSound==0){
    counterTimeSound=milliSeconds;
     chomp.play();
  }
  if(milliSeconds-counterTimeSound>=580){
    counterTimeSound=0;
  }
}
  game();
  if(milliSeconds<10000){
    redGhost.goalX=548;
    redGhost.goalY=202;
    blueGhost.goalX=1096;
    blueGhost.goalY=202;
    yellowGhost.goalX=548;
    yellowGhost.goalY=599;
    pinkGhost.goalX=1096;
    pinkGhost.goalY=599;
  }
}
else{
  background(0);
  push();
  textSize(50);
  textFont(myFont);
  text("GAME OVER", 675, 500);
  pop();
  push();
  fill(0);
  rect(685, 645, 250, 70);
  pop();
  push();
  fill(255, 255, 0);
  textFont(myFont);
  pop();

}
}
menu_but.draw();
if ( menu_but.isMouseOn ) {
  crafts[0].moveTo( menu_but );
  crafts[1].moveTo( menu_but );
}
}
function field(){
  push();
  translate(500, 100);
  scale(3);
  image(img, 0, 0);
  pop();
}
function mousePressed() {
	if ( menu_but.isMouseOn )
		window.location = menu_but.url;
}
