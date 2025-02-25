scene.onOverlapTile(SpriteKind.Player, assets.tile`Chil`, function (sprite, location) {
    mySprite.sayText("Take a leap, the shadows will catch you.", 500, false)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.vy == 0) {
        mySprite.vy = -160
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Jerald`, function (sprite, location) {
    mySprite.sayText("Howdy! I'm Jerald. You have to jump to go further. Bye!", 500, false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Von`, function (sprite, location) {
    mySprite.sayText("A great dream world now ruins... The nightmares always come..", 500, false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Freedom`, function (sprite, location) {
    game.setGameOverEffect(true, effects.dissolve)
    game.gameOver(true)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`He`, function (sprite, location) {
    mySprite.sayText("Up there is the next dream world. You can go when you are ready.", 500, false)
})
let mySprite: Sprite = null
scene.setBackgroundImage(assets.image`City in the Sky`)
mySprite = sprites.create(assets.image`Cursed`, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 0)
scene.cameraFollowSprite(mySprite)
mySprite.ay = 350
tiles.setCurrentTilemap(tilemap`Level`)
tiles.placeOnRandomTile(mySprite, assets.tile`Start`)
game.onUpdate(function () {
    if (mySprite.y >= 244) {
        game.gameOver(false)
    }
})
