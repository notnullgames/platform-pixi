import { Sprite, TilingSprite } from 'pixi.js'

import app from './app'

const skySpeed = 0.1
const citySpeed = 0.5

const background = TilingSprite.from('/Background-Night.png', 800, 800)
background.anchor.set(0)
background.position.set(0)
app.stage.addChild(background)

const moon = Sprite.from('/Moon-Night.png')
moon.setTransform(500, 100, 0.5, 0.5)
moon.anchor.set(0.5)
app.stage.addChild(moon)

const city = TilingSprite.from('/City-Block.png', 800, 800)
city.anchor.set(0)
city.setTransform(0, 200)
app.stage.addChild(city)

app.ticker.add(delta => {
  background.tilePosition.x -= (delta * skySpeed)
  city.tilePosition.x -= (delta * citySpeed)
})
