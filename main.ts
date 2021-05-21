namespace SpriteKind {
    export const dart = SpriteKind.create()
    export const bowchest = SpriteKind.create()
}
controller.combos.attachCombo("U+A", function () {
    timer.after(200, function () {
        punch = 0
        animation.stopAnimation(animation.AnimationTypes.All, mySprite)
        animation.runImageAnimation(
        mySprite,
        assets.animation`backdash`,
        100,
        false
        )
        mySprite.vy = -300
        dash = 1
        timer.after(200, function () {
            mySprite.vy = 0
            dash = 0
        })
    })
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`BackWalk`,
    200,
    true
    )
    playerFacing = 1
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (bow == 1 && ATKcooldown == 0) {
        if (playerFacing == 1) {
            animation.runImageAnimation(
            mySprite,
            assets.animation`backshoot`,
            100,
            false
            )
            timer.after(500, function () {
                projectile = sprites.createProjectileFromSprite(assets.image`arup`, mySprite, 0, -100)
            })
        } else if (playerFacing == 2) {
            animation.runImageAnimation(
            mySprite,
            assets.animation`shootright`,
            100,
            false
            )
            timer.after(500, function () {
                projectile = sprites.createProjectileFromSprite(assets.image`arup`, mySprite, 100, 0)
                projectile.setImage(assets.image`rightarrow`)
            })
        } else if (playerFacing == 3) {
            animation.runImageAnimation(
            mySprite,
            assets.animation`shootleft`,
            100,
            false
            )
            timer.after(500, function () {
                projectile = sprites.createProjectileFromSprite(assets.image`arup`, mySprite, -100, 0)
                projectile.setImage(assets.image`leftarrow`)
            })
        } else if (playerFacing == 4) {
            animation.runImageAnimation(
            mySprite,
            assets.animation`frontshoot`,
            100,
            false
            )
            timer.after(500, function () {
                projectile = sprites.createProjectileFromSprite(assets.image`arup`, mySprite, 0, 100)
                projectile.setImage(assets.image`downarrow`)
            })
        }
        ATKcooldown = 1
        timer.after(5000, function () {
            ATKcooldown = 0
        })
    } else {
        music.thump.play()
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (playerFacing == 1) {
        animation.runImageAnimation(
        mySprite,
        assets.animation`punchup`,
        100,
        false
        )
    } else if (playerFacing == 2) {
        animation.runImageAnimation(
        mySprite,
        assets.animation`punchright`,
        100,
        false
        )
    } else if (playerFacing == 3) {
        animation.runImageAnimation(
        mySprite,
        assets.animation`punchleft`,
        100,
        false
        )
    } else if (playerFacing == 4) {
        animation.runImageAnimation(
        mySprite,
        assets.animation`front punch`,
        100,
        false
        )
    }
    music.knock.play()
    punch = 1
    timer.after(500, function () {
        punch = 0
    })
})
controller.down.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, mySprite)
    mySprite.setImage(assets.image`FrontPlayer`)
})
controller.combos.attachCombo("R+A", function () {
    timer.after(200, function () {
        punch = 0
        animation.stopAnimation(animation.AnimationTypes.All, mySprite)
        animation.runImageAnimation(
        mySprite,
        assets.animation`dashright`,
        100,
        false
        )
        mySprite.vx = 300
        dash = 1
        timer.after(200, function () {
            mySprite.vx = 0
            dash = 0
        })
    })
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`Walkleft`,
    200,
    true
    )
    playerFacing = 3
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, mySprite)
    mySprite.setImage(assets.image`PlayerRight`)
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, mySprite)
    mySprite.setImage(assets.image`PlayerLeft`)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.bowchest, function (sprite, otherSprite) {
    if (punch == 1) {
        otherSprite.destroy(effects.confetti, 500)
        bow = 1
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`Walkright`,
    200,
    true
    )
    playerFacing = 2
})
controller.combos.attachCombo("D+A", function () {
    timer.after(200, function () {
        punch = 0
        animation.stopAnimation(animation.AnimationTypes.All, mySprite)
        animation.runImageAnimation(
        mySprite,
        assets.animation`frontdash`,
        100,
        false
        )
        mySprite.vy = 300
        dash = 1
        timer.after(200, function () {
            mySprite.vy = 0
            dash = 0
        })
    })
})
controller.up.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, mySprite)
    mySprite.setImage(assets.image`BackPlayer`)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`Frontwalk`,
    200,
    true
    )
    playerFacing = 4
})
function You_may_delete_after_reading () {
    game.showLongText("Welcome to the \"Tall engine.\"", DialogLayout.Bottom)
    game.showLongText("The first and best fan-made character engine for others to use!", DialogLayout.Bottom)
    game.showLongText("You may move normally but the biggest thing about this engine is the new size of character!", DialogLayout.Bottom)
    game.showLongText("Some new mechanics are punching, (use A to punch and open chests)", DialogLayout.Bottom)
    game.showLongText("Chests give you bows, use B to use the bow! (It has a cooldown)", DialogLayout.Bottom)
    game.showLongText("The other biggest thing is the new dash mechanic!", DialogLayout.Bottom)
    game.showLongText("The other biggest thing is the new dash mechanic!", DialogLayout.Bottom)
    game.showLongText("Press the direction and A buttons at the same time!", DialogLayout.Bottom)
}
controller.combos.attachCombo("L+A", function () {
    timer.after(200, function () {
        punch = 0
        animation.stopAnimation(animation.AnimationTypes.All, mySprite)
        animation.runImageAnimation(
        mySprite,
        assets.animation`dashleft`,
        100,
        false
        )
        mySprite.vx = -300
        dash = 1
        timer.after(200, function () {
            mySprite.vx = 0
            dash = 0
        })
    })
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.spray, 500)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (punch == 1) {
        otherSprite.destroy(effects.spray, 500)
    } else if (dash == 1) {
        sprite.startEffect(effects.disintegrate, 200)
        otherSprite.startEffect(effects.disintegrate, 200)
    } else {
        otherSprite.destroy()
        info.changeLifeBy(-1)
    }
})
let projectile: Sprite = null
let bow = 0
let dash = 0
let punch = 0
let Chestwithbow: Sprite = null
let playerFacing = 0
let ATKcooldown = 0
let mySprite: Sprite = null
tiles.setTilemap(tilemap`level2`)
mySprite = sprites.create(assets.image`FrontPlayer`, SpriteKind.Player)
scene.cameraFollowSprite(mySprite)
controller.moveSprite(mySprite, 100, 100)
ATKcooldown = 0
playerFacing = 4
tiles.placeOnRandomTile(mySprite, sprites.castle.tilePath5)
for (let value of tiles.getTilesByType(assets.tile`chestyes`)) {
    Chestwithbow = sprites.create(img`
        . . f f f f f f f f f f f f . . 
        . f c c c c c c c c c c c c f . 
        f c c e e e e e e e e e e c c f 
        f c e e e e e e e e e e e e c f 
        f c e e e e e e e e e e e e c f 
        f e e e e e e e e e e e e e e f 
        f e e e e e e e e e e e e e e f 
        f e e e e e e f f e e e e e e f 
        f f f f f f f 5 d f f f f f f f 
        f c c c c c c f f c c c c c c f 
        f e e e e e e e e e e e e e e f 
        f e e e e e e e e e e e e e e f 
        f c e e e e e e e e e e e e c f 
        f c c e e e e e e e e e e c c f 
        . f c c c e e e e e e c c c f . 
        . . f f f f f f f f f f f f . . 
        `, SpriteKind.bowchest)
    tiles.placeOnRandomTile(Chestwithbow, assets.tile`chestyes`)
}
info.setLife(5)
timer.after(10, function () {
    You_may_delete_after_reading()
})
