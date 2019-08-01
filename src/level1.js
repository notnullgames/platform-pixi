import { Texture, Sprite, TilingSprite, Rectangle } from 'pixi.js'

import app from './app'
import landscapeImage from './assets/Background-Night.png'
import cityImage from './assets/City-Block.png'
import moonImage from './assets/Moon-Night.png'

const skySpeed = 0.1
const citySpeed = 0.5

const background = TilingSprite.from(landscapeImage, 800, 600)
background.anchor.set(0)
background.position.set(0)
app.stage.addChild(background)

const moon = Sprite.from(moonImage)
moon.setTransform(500, 100, 0.5, 0.5)
moon.anchor.set(0.5)
app.stage.addChild(moon)

const city = TilingSprite.from(cityImage, 800, 600)
city.anchor.set(0)
city.setTransform(0, 200)
app.stage.addChild(city)

app.ticker.add(delta => {
  background.tilePosition.x -= (delta * skySpeed)
  city.tilePosition.x -= (delta * citySpeed)
})
