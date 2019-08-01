import * as PIXI from 'pixi.js'

import app from './app'

export const scene = new PIXI.Container()

const skySpeed = 0.1
const citySpeed = 0.5

const background = PIXI.TilingSprite.from('./Background-Day.png', 800, 800)
background.anchor.set(0)
background.position.set(0)
scene.addChild(background)

const moon = PIXI.Sprite.from('./Moon-Day.png')
moon.setTransform(500, 100, 0.5, 0.5)
moon.anchor.set(0.5)
scene.addChild(moon)

const city = PIXI.TilingSprite.from('./City-Block.png', 800, 800)
city.anchor.set(0)
city.setTransform(0, 200)
scene.addChild(city)

const update = delta => {
  background.tilePosition.x -= (delta * skySpeed)
  city.tilePosition.x -= (delta * citySpeed)
}

app.ev.on('update', delta => scene.visible && update(delta))

export default scene
