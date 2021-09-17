whenPageLoads {
    mySprite = new Sprite(0, 0, "sprite.png");
    mySprite.turn(45)
    mySprite.move(50)
    wait(1000).then({
       mySprite.goTo(100,0);
    })
}
