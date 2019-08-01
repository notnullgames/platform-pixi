import * as PIXI from 'pixi.js'
import emitonoff from 'emitonoff'

// I'm a jerk-face :)
PIXI.utils.skipHello()

const size = [800, 600]
const ratio = size[0] / size[1]

export const app = new PIXI.Application(window.innerWidth, window.innerHeight, {
  resolution: window.devicePixelRatio,
  autoResize: true
})

// wrapp all game-level events in emitonoff & normalize them

app.ev = emitonoff()

const resize = e => {
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
  app.ev.emit('resize', { event: e, width: w, height: h })
}

window.addEventListener('resize', resize)
resize()

window.addEventListener('keyup', e => {
  app.ev.emit('keyup', { event: e })
  if (e.key === 'Escape') {
    app.ev.emit('escape')
  }
  if (e.key === 'ArrowUp') {
    app.ev.emit('up', { force: 0, player: 0 })
  }
  if (e.key === 'ArrowDown') {
    app.ev.emit('down', { force: 0, player: 0 })
  }
  if (e.key === 'ArrowLeft') {
    app.ev.emit('left', { force: 0, player: 0 })
  }
  if (e.key === 'ArrowRight') {
    app.ev.emit('right', { force: 0, player: 0 })
  }
})

window.addEventListener('keydown', e => {
  app.ev.emit('keydown', { event: e })
  if (e.key === 'ArrowUp') {
    app.ev.emit('up', { force: 1, player: 0 })
  }
  if (e.key === 'ArrowDown') {
    app.ev.emit('down', { force: 1, player: 0 })
  }
  if (e.key === 'ArrowLeft') {
    app.ev.emit('left', { force: 1, player: 0 })
  }
  if (e.key === 'ArrowRight') {
    app.ev.emit('right', { force: 1, player: 0 })
  }
})

if ('getGamepads' in navigator) {
  let gamepads = []

  const handleGamepad = e => {
    // TODO: emit normalized gamepad forces
  }

  const updateGamepads = () => {
    gamepads.forEach((g, i) => {
      app.ev.off(`joy${i}`, handleGamepad)
    })
    gamepads = [...navigator.getGamepads()]
    gamepads.forEach((g, i) => {
      app.ev.on(`joy${i}`, handleGamepad)
    })
  }

  window.addEventListener('gamepadconnected', updateGamepads)
  window.addEventListener('gamepaddisconnected', updateGamepads)
  updateGamepads()
}

app.ticker.add(delta => app.ev.emit('update', delta))

export default app
