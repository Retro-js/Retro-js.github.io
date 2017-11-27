var canvas,
    text_size,
    buttons,
    crafts;

function setup() {
	frameRate( 50 );
	canvas = createCanvas( window.innerWidth , 2000 );
	canvas.parent( 'p5-sketch' );
	buttons = [];
	buttons[0] = new Button( "Snake", 100, 0, "../Snake/index.html" );
	buttons[1] = new Button( "Space Invaders", 250, 1, "../Space_Invaders/Clases.html" );
	buttons[2] = new Button( "Tetris", 400, 2, "../404/index.html" );
  buttons[3] = new Button( "PONG", 550, 1, "../Pong/index.html" );
  buttons[4] = new Button( "Breakout", 700, 0, "../Breakout/index.html" );
  buttons[5] = new Button( "Pacman", 850, 1, "../Pacman/index.html" );
  buttons[6] = new Button( "Asteroids", 1000, 2, "../Asteroids/index.html" );

	crafts = [];
	crafts[0] = new Craft( "../assets/menu/galaga_craft.png", createVector( 0.15, 0.15 ), true );
	crafts[1] = new Craft( "../assets/menu/spinvaders_craft.png", createVector( 3, 3 ), false );
}

function draw() {
	background( 'black' );
	for ( let i=0; i<buttons.length; i++ ){
		buttons[i].draw();
    if ( buttons[i].isMouseOn ) {
      crafts[0].moveTo( buttons[i] );
    	crafts[1].moveTo( buttons[i] );
    }
  }
}
