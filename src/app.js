import * as PIXI from 'pixi.js'

// I'm a jerk-face :)
PIXI.utils.skipHello()

const size = [800, 600]
const ratio = size[0] / size[1]

export const app = new PIXI.Application(window.innerWidth, window.innerHeight, {
  resolution: window.devicePixelRatio,
  autoResize: true
})

const resize = () => {
  let w
  let h
  if (window.innerWidth / window.innerHeight >= ratio) {
    w = window.innerHeight * ratio
    h = window.innerHeight
  } else {
    w = window.innerWidth
    h = window.innerWidth / ratio
  }
  app.renderer.view.style.width = w + 'px'
  app.renderer.view.style.height = h + 'px'
}

window.addEventListener('resize', resize)
resize()

export default app
