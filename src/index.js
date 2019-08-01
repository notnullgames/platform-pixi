import app from './app'
import level1 from './level1'
import level2 from './level2'

document.body.appendChild(app.view)

app.stage.addChild(level1)
app.stage.addChild(level2)

level1.visible = true
level2.visible = false

// ESC cycles active level
app.ev.on('escape', () => {
  const activeScene = app.stage.children.map(c => c.visible).indexOf(true)
  app.stage.children.forEach(c => c.visible = false)
  app.stage.children[ (activeScene + 1) % app.stage.children.length ].visible = true
})
