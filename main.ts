function meteor (bool: boolean) {
    if (bool) {
        shoot = sprites.createProjectileFromSide(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . c c c . . . . . . 
            . . . . . . a b a a . . . . . . 
            . . . . . c b a f c a c . . . . 
            . . . . c b b b f f a c c . . . 
            . . . . b b f a b b a a c . . . 
            . . . . c b f f b a f c a . . . 
            . . . . . c a a c b b a . . . . 
            . . . . . . c c c c . . . . . . 
            . . . . . . . c . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, randint(-140, -90), randint(10, -10))
        shoot.setPosition(160, randint(0, scene.screenHeight()))
        follow()
        animation.runImageAnimation(
        shoot,
        [img`
            . . . . . . . . . c c 8 . . . . 
            . . . . . . 8 c c c f 8 c c . . 
            . . . c c 8 8 f c a f f f c c . 
            . . c c c f f f c a a f f c c c 
            8 c c c f f f f c c a a c 8 c c 
            c c c b f f f 8 a c c a a a c c 
            c a a b b 8 a b c c c c c c c c 
            a f c a a b b a c c c c c f f c 
            a 8 f c a a c c a c a c f f f c 
            c a 8 a a c c c c a a f f f 8 a 
            . a c a a c f f a a b 8 f f c a 
            . . c c b a f f f a b b c c 6 c 
            . . . c b b a f f 6 6 a b 6 c . 
            . . . c c b b b 6 6 a c c c c . 
            . . . . c c a b b c c c . . . . 
            . . . . . c c c c c c . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . c c c c . . 
            . c c c c c . c c c c c f c c . 
            c c a c c c c c 8 f f c f f c c 
            c a f a a c c a f f c a a f f c 
            c a 8 f a a c a c c c a a a a c 
            c b c f a a a a a c c c c c c c 
            c b b a a c f 8 a c c c 8 c c c 
            . c b b a b c f a a a 8 8 c c . 
            . . . . a a b b b a a 8 a c . . 
            . . . . c b c a a c c b . . . . 
            . . . . b b c c a b b a . . . . 
            . . . . b b a b a 6 a . . . . . 
            . . . . c b b b 6 6 c . . . . . 
            . . . . . c a 6 6 b c . . . . . 
            . . . . . . . c c c . . . . . . 
            `,img`
            . . . . . . c c c . . . . . . . 
            . . . . . a a a c c c . . . . . 
            . . . c a c f a a a a c . . . . 
            . . c a c f f f a f f a c . . . 
            . c c a c c f a a c f f a c . . 
            . a b a a c 6 a a c c f a c c c 
            . a b b b 6 a b b a a c a f f c 
            . . a b b a f f b b a a c f f c 
            c . a a a c c f c b a a c f a c 
            c c a a a c c a a a b b a c a c 
            a c a b b a a 6 a b b 6 b b c . 
            b a c b b b 6 b c . c c a c . . 
            b a c c a b b a c . . . . . . . 
            b b a c a b a a . . . . . . . . 
            a b 6 b b a c . . . . . . . . . 
            . a a b c . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . c c . . . . . . . . 
            . . . . c a f b c . . . . . . . 
            . . . . b f f b c c . . . . . . 
            . . . a a f b a b a c . . . . . 
            . . . c a c b b f f b . . . . . 
            . . . . b f f b f a b . . . . . 
            . . . . a f f b b b a . . . . . 
            . . . . . a b b c c . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . c b a c . . . . . . 
            . . . . c c b c f a c . . . . . 
            . . . . a f b b b a c . . . . . 
            . . . . a f f b a f c c . . . . 
            . . . . c b b a f f c . . . . . 
            . . . . . b b a f a . . . . . . 
            . . . . . . c b b . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . f b a . . . . . . . 
            . . . . . b b a f f . . . . . . 
            . . . . . b b a f a . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        500,
        false
        )
    }
}
/**
 * fire effect
 */
function follow () {
    projectile2 = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . a b . . . . . . . 
        . . . . . . b f a a . . . . . . 
        . . . . . . b a f c . . . . . . 
        . . . . . . . c a . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, shoot, shoot.vx, shoot.vy)
    projectile2.destroy(effects.fire, 1000)
}
function doSomething (bool: boolean, bool2: boolean) {
    if (bool) {
        projectile = sprites.createProjectileFromSide(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 9 . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, 0, randint(-30, -90))
        projectile.setPosition(randint(0, scene.screenWidth()), 120)
    } else {
        if (bool2) {
            projectile = sprites.createProjectileFromSide(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 1 . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, 0, randint(-30, -90))
            projectile.setPosition(randint(0, scene.screenWidth()), 120)
        } else {
            projectile = sprites.createProjectileFromSide(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 5 . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, 0, randint(-30, -90))
            projectile.setPosition(randint(0, scene.screenWidth()), 120)
        }
    }
}
let projectile: Sprite = null
let projectile2: Sprite = null
let shoot: Sprite = null
scene.setBackgroundColor(15)
game.onUpdateInterval(20, function () {
    doSomething(Math.percentChance(5), Math.percentChance(75))
})
