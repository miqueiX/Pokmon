var fundo;
var player, playerIMG, playerladoIMG, playercostasIMG;
var idleside, idleback, idle;


function preload() {
  fundo = loadImage("Fundo.png");
  playerIMG = loadImage("character/frontGif.gif");
  playerladoIMG = loadImage("character/sideGif.gif");
  playercostasIMG = loadImage("character/backGif.gif")
  idle= loadImage("character/idle.png")
  idleback= loadImage("character/idleback.png")
  idleside= loadImage("character/idleside.png")

}

function setup() {
  createCanvas(1280, 870);
  player = createSprite(897, 572);
  player.addImage("frente",playerIMG);
  player.addImage("costas", playercostasIMG);
  player.addImage("lado", playerladoIMG);
  player.addImage("idle", idle);
  player.addImage("idleback", idleback);
  player.addImage("idleside", idleside);

}

function draw() {
  
  background("black")
  
  image(fundo, 0, 0, 1800, 1600);

  if (keyDown("A")) {
    player.x -= 5;
    player.changeImage("lado")
    player.mirrorX (1)
  }

  if (keyDown("S")) {
    player.y += 10;
    player.changeImage("frente")
   
  }

  if (keyDown("D")) {
    player.x += 5;
    player.changeImage("lado")
    player.mirrorX (-1)
  }

  if (keyDown("W")) {
    player.y -= 10;
    player.changeImage("costas")
  }

  
  if(player.y < 447){
    camera.position.y = 447
  }
  else if(player.y> 1162){
    camera.position.y = 1162
  }
  
  else{
    camera.position.y = player.y
  }

  
  if(player.x < 642){
    camera.position.x =642
  }
  else if(player.x >1157){
    camera.position.x = 1157
  }
  else{
    camera.position.x = player.x
  }
  
 console.log("x:" + player.x + "y:" + player.y)
  drawSprites();
}

function keyReleased(){
  if(keyCode === 65){
  player.changeImage("idleside")
}
//a
  if(keyCode === 83){
  player.changeImage("idle")
}
//s
 if(keyCode === 68){
  player.changeImage("idleside")
}
//d
if(keyCode === 87){
  player.changeImage("idleback");
}
//w
}