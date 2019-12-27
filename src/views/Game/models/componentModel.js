class GameArea {
  constructor () {
    this.canvas = document.createElement('canvas')
    this.canvas.width = 480
    this.canvas.height = 270
    this.context = this.canvas.getContext('2d')
    this.frameNo = 0
  }
  start (_fn) {
    document.body.insertBefore(this.canvas, document.body.childNodes[0])
    // _fn()
    // return this.canvas
  }
  clear () {
    // this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
  }
}

class GameComponent {
  constructor (width, height, color, x, y, type, myGameArea) {
    this.type = type
    this.score = 0
    this.width = width
    this.height = height
    this.speedX = 0
    this.speedY = 0
    this.x = x
    this.y = y
    this.gravity = 0
    this.gravitySpeed = 0
    this.myGameArea = myGameArea
    this.color = color
  }

  update () {
    let ctx = this.myGameArea.context
    if (this.type === 'text') {
      ctx.font = this.width + ' ' + this.height
      ctx.fillStyle = this.color
      ctx.fillText(this.text, this.x, this.y)
    } else {
      ctx.fillStyle = this.color
      ctx.fillRect(this.x, this.y, this.width, this.height)
    }
  }
  newPos () {
    this.gravitySpeed += this.gravity
    this.x += this.speedX
    this.y += this.speedY + this.gravitySpeed
    this.hitBottom()
  }
  hitBottom () {
    var rockbottom = this.myGameArea.canvas.height - this.height
    if (this.y > rockbottom) {
      this.y = rockbottom
      this.gravitySpeed = 0
    }
  }
  crashWith (otherobj) {
    var myleft = this.x
    var myright = this.x + (this.width)
    var mytop = this.y
    var mybottom = this.y + (this.height)
    var otherleft = otherobj.x
    var otherright = otherobj.x + (otherobj.width)
    var othertop = otherobj.y
    var otherbottom = otherobj.y + (otherobj.height)
    var crash = true
    if ((mybottom < othertop) || (mytop > otherbottom) || (myright < otherleft) || (myleft > otherright)) {
      crash = false
    }
    return crash
  }
}

export {
  GameArea,
  GameComponent
}
