var canvas;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12;
var ball, edges;
var music;

var count = 0;

function preload(){
    // load sound here
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(0,580,360,30);
    block1.shapeColor = "blue";

    block2 = createSprite(295,580,200,30);
    block2.shapeColor = "yellow";

    block3 = createSprite(510,580,200,30);
    block3.shapeColor = "red";

    block4 = createSprite(725,580,200,30);
    block4.shapeColor = "green";

    block5 = createSprite(0,20,360,30);
    block5.shapeColor = "blue";

    block6 = createSprite(295,20,200,30);
    block6.shapeColor = "yellow";

    block7 = createSprite(510,20,200,30);
    block7.shapeColor = "red";

    block8 = createSprite(725,20,200,30);
    block8.shapeColor = "green";

    block9 = createSprite(10,300,20,50);
    block9.shapeColor = "black";
    block9.velocityY = 3;
    
    block10 = createSprite(790,300,20,50);
    block10.shapeColor = "black";
    block10.velocityY = -3;

    block11 = createSprite(300,300,20,50);
    block11.shapeColor = "white";
    block11.velocityY = -3;
    
    block12 = createSprite(500,300,20,50);
    block12.shapeColor = "white";
    block12.velocityY = 3;

    //create two more blocks i.e. block3 and block4 here

    ball = createSprite(random(20,750),random(100,500), 40,40);
    ball.shapeColor = rgb(255,255,255);
    ball.velocityX = 3;
    ball.velocityY = 3;
    //write code to add velocityX and velocityY

}

function draw() {
    background("purple");
    edges=createEdgeSprites();
    ball.bounceOff(edges);

    
    //write code to bounce off ball from the block1 
    
   

    if(ball.bounceOff(block11)){
        count = count + 1;
    }

    
    if(ball.bounceOff(block12)){
        count = count + 1;
    }

    
    if(ball.bounceOff(block9)){
        count = count - 1;
    }

    
    if(ball.bounceOff(block10)){
        count = count - 1;
    }

    if(block1.isTouching(block9)){
        block9.shapeColor = "black";
        music.stop();
    }

    if(block5.isTouching(block9)){
        block9.shapeColor = "black";
        music.stop();
    }

    if(block4.isTouching(block10)){
        block10.shapeColor = "black";
        music.stop();
    }

    if(block8.isTouching(block10)){
        block10.shapeColor = "black";
        music.stop();
    }

    if(block2.isTouching(block11)){
        block11.shapeColor = "white";
        music.stop();
    }

    if(block6.isTouching(block11)){
        block11.shapeColor = "white";
        music.stop();
    }

    if(block3.isTouching(block12)){
        block12.shapeColor = "white";
        music.stop();
    }

    if(block7.isTouching(block12)){
        block12.shapeColor = "white";
        music.stop();
    }
    

    if(ball.bounceOff(block9))(
        block9.shapeColor = "black"
    )

    if(ball.bounceOff(block10))(
        block10.shapeColor = "black"
    )

    if(ball.bounceOff(block11))(
        block11.shapeColor = "white"
    )

    if(ball.bounceOff(block12))(
        block12.shapeColor = "white"
    )

    if(block1.isTouching(block9) &&block9.bounceOff(block1)){
        block9.shapeColor = "black";
        music.stop();
    }

    if(block5.isTouching(block9) && block9.bounceOff(block5)){
        block9.shapeColor = "black";
        music.stop();
    }

    if(block2.isTouching(block11)&& block11.bounceOff(block2)){
        block11.shapeColor = "white";
        music.stop();
    }

    if(block6.isTouching(block11) && block11.bounceOff(block6)){
        block11.shapeColor = "white";
        music.stop();
    }

    if(block3.isTouching(block12)&& block12.bounceOff(block3)){
        block12.shapeColor = "white";
        music.stop();
    }

    if(block7.isTouching(block12) && block12.bounceOff(block7)){
        block12.shapeColor = "white";
        music.stop();
    }

    if(block4.isTouching(block10) && block10.bounceOff(block4)){
        block10.shapeColor = "black";
        music.stop();
    }

    if(block8.isTouching(block10) && block10.bounceOff(block8)){
        block10.shapeColor = "black";
        music.stop();
    }

    


    if(block1.isTouching(ball) && ball.bounceOff(block1)){
        ball.shapeColor = "blue";
        music.play();
    }

    if(block2.isTouching(ball)&& ball.bounceOff(block2)){
        ball.shapeColor = "yellow";
        music.play();
    }

    //write code to bounce off ball from the block3
    if(block3.isTouching(ball) && ball.bounceOff(block3)){
        ball.shapeColor = "red";
        music.play();
    }

    //write code to bounce off ball from the block4
    if(block4.isTouching(ball) && ball.bounceOff(block4)){
        ball.shapeColor = "green";
        music.play();
    }

    if(block5.isTouching(ball) && ball.bounceOff(block5)){
        ball.shapeColor = "blue";
        music.play();
    }



    if(block6.isTouching(ball)&& ball.bounceOff(block6)){
        ball.shapeColor = "yellow";
        music.play();
    }

    //write code to bounce off ball from the block3
    if(block7.isTouching(ball) && ball.bounceOff(block7)){
        ball.shapeColor = "red";
        music.play();
    }

    //write code to bounce off ball from the block4
    if(block8.isTouching(ball) && ball.bounceOff(block8)){
        ball.shapeColor = "green";
        music.play();
    }

   

    drawSprites();

  textSize(18);
  fill("pink")
  text("If the ball touches the white moving rectangle,",230,140); 

  textSize(18);
  fill("pink")
  text("then your score will increase by 1.",280,160); 

  textSize(18);
  fill("pink")
  text("If the ball touches the black moving rectangle,",230,180); 

  textSize(18);
  fill("pink")
  text("then your score will decrease by 1.",280,200); 

  textSize(18);
  fill("pink")
  text("$It all depends on your luck$",300,220); 

  textSize(22);
  fill("pink")
  text("Best of luck!",350,240); 

  textSize(25);
  fill("pink")
  text("THE GAME OF LUCK",280,80); 

  textSize(25);
  fill("pink")
  text("Score: "+ count, 360,110);
}