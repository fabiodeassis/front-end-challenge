<template>
  <div id="game">
    <button id="accelerate">ACCELERATE</button>
    <button id="play">START</button>
  </div>
</template>

<script>
export default {
  name: 'Game',
  components: {
  },
  data () {
    return {
    }
  },
  methods: {
  },
  mounted () {
    let myGamePiece
    let myScore
    let countScore = false
    let scoreNumber = 0
    const myObstacles = []
    const container = document.getElementById('game')
    const myGameArea = {
      canvas: document.createElement('canvas'),
      start: function () {
        this.canvas.width = container.offsetWidth
        this.canvas.height = container.offsetHeight
        this.context = this.canvas.getContext('2d')
        container.append(this.canvas, document.getElementById('game').childNodes[0])
        this.frameNo = 0
        updateGameArea()
      },
      clear: function () {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
      }
    }

    const startGame = function () {
      myGamePiece = new Component(30, 30, 'red', 10, 120)
      myGamePiece.gravity = 0.05
      myScore = new Component('30px', 'Consolas', 'black', 280, 40, 'text')
      myGameArea.start()
    }

    const Component = function (width, height, color, x, y, type) {
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
      this.update = function () {
        var ctx = myGameArea.context
        if (this.type === 'text') {
          ctx.font = this.width + ' ' + this.height
          ctx.fillStyle = color
          ctx.fillText(this.text, this.x, this.y)
        } else {
          ctx.fillStyle = color
          ctx.fillRect(this.x, this.y, this.width, this.height)
        }
      }
      this.newPos = function () {
        this.gravitySpeed += this.gravity
        this.x += this.speedX
        this.y += this.speedY + this.gravitySpeed
        this.hit()
      }
      this.hit = function () {
        var rockbottom = myGameArea.canvas.height - this.height
        if (this.y > rockbottom) {
          this.y = rockbottom
          this.gravitySpeed = 0
        }

        if (this.y < 0) {
          this.y = 0
          this.gravitySpeed = 0
        }
      }
      this.crashWith = function (otherobj) {
        const lag = 5
        var myleft = this.x + (lag)
        var myright = this.x + (this.width) - (lag)
        var mytop = this.y + (lag)
        var mybottom = this.y + (this.height) - (lag)
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

    const updateGameArea = function () {
      let x, height, gap, minHeight, maxHeight, minGap, maxGap
      for (let i = 0; i < myObstacles.length; i += 1) {
        if (myGamePiece.crashWith(myObstacles[i])) {
          // GAME OVER
          return
        }
      }
      myGameArea.clear()
      myGameArea.frameNo += 1
      if (myGameArea.frameNo === 1 || everyinterval(150)) {
        x = myGameArea.canvas.width
        minHeight = 20
        maxHeight = myGameArea.canvas.height / 2
        height = Math.floor(Math.random() * (maxHeight - minHeight + 1) + minHeight)
        minGap = 50
        maxGap = 200
        gap = Math.floor(Math.random() * (maxGap - minGap + 1) + minGap)

        myObstacles.push(new Component(10, height, 'green', x, 0))
        myObstacles.push(new Component(10, x - height - gap, 'green', x, height + gap))
      }
      for (let i = 0; i < myObstacles.length; i += 1) {
        myObstacles[i].x += (-1 - Math.round(myGameArea.frameNo / 2000))
        myObstacles[i].update()
      }

      if (!countScore && myObstacles[0].x < myGamePiece.x) {
        countScore = true
      }
      if (countScore) {
        scoreNumber += 1
      }
      myScore.text = 'SCORE: ' + scoreNumber
      myScore.update()

      if (myObstacles[0].x + x < -20) {
        myObstacles.shift()
      }

      myGamePiece.newPos()
      myGamePiece.update()
    }

    const everyinterval = function (n) {
      if ((myGameArea.frameNo / n) % 1 === 0) {
        return true
      }
      return false
    }

    const accelerate = function (n) {
      if (!myGameArea.interval) {
        myGameArea.interval = setInterval(updateGameArea, 20)
      }
      myGamePiece.gravity = n
    }

    const play = function () {
      startGame()
    }

    const up = function () {
      accelerate(-0.2)
    }

    const down = function () {
      accelerate(0.05)
    }

    const btnPlay = document.getElementById('play')
    btnPlay.addEventListener('click', function () {
      btnPlay.classList.add('none')
      play()
    })

    const btnAccel = document.getElementById('accelerate')
    if ('ontouchstart' in window) {
      btnAccel.onclick = null
      btnAccel.ontouchstart = up
      btnAccel.ontouchend = down
    } else {
      btnAccel.onmousedown = up
      btnAccel.onmouseup = down
    }
  }
}
</script>

<style lang="scss">
#game {
  height: calc(100vh - 70px);
  position: relative;
  z-index: 9999999;
  canvas {
    border: 0;
    position: relative;
    z-index: 0;
  }
  button {
    background: transparent;
    border: 0;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 1;
    &#play {
      z-index: 3;
      &.none {
        display: none
      }
    }
  }
}
</style>
