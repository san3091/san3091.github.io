import { memo } from 'react'
import Sketch from 'react-p5'

const BackgroundSketch = (props) => {

  let start = 0
  const inc = 0.01

  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(window.innerWidth, window.innerHeight).parent(canvasParentRef)
  }

  // in mobile make the wave go from top to bottom (rotate 90deg)
  const draw = (p5) => {
    p5.background(255)
    p5.stroke(200)
    p5.noFill()
    p5.beginShape()
    let xoff = start
    for (let x = 0; x < p5.width; x++) {
      p5.stroke(200)
      let y = p5.noise(xoff) * p5.height
      p5.vertex(x, y)

      xoff += inc
    }

    p5.endShape()
    start += inc
    p5.noLoop()
  }


  return <Sketch setup={setup} draw={draw} />
}

export default memo(BackgroundSketch)
