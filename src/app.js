import * as PIXI from 'pixi.js'

// I'm a jerk-face :)
PIXI.utils.skipHello()

export const width = 800
export const height = 600

export const app = new PIXI.Application({ width, height, resolution: window.devicePixelRatio, autoResize: true })

const resize = () => {
  const ratio = Math.min(window.innerWidth / width, window.innerHeight / height)
  app.stage.position.set(app.renderer.width / 2, app.renderer.height / 2)
  app.stage.scale.set(1, 1)
  app.stage.pivot.set(width / 2, height / 2)
}

window.addEventListener('resize', resize)
resize()

export default app
