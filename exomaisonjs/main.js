var demo1 = document.getElementById("demo1")
if (demo1.getContext) {
    var ctx = demo1.getContext('2d')

    ctx.fillStyle = "red"
    ctx.fillRect(50, 50, 400, 150)//x, y, w, h

    ctx.fillStyle = "blue"
    ctx.fillRect(70, 50, 100, 150)

    ctx.fillStyle = "green"
    ctx.fillRect(190, 50, 30, 150)

    ctx.clearRect(230, 60, 200, 130)

    ctx.strokeStyle = "white"
    ctx.strokeRect(250, 70, 150, 100)

    ctx.fillRect(250, 70, 150, 100)


    console.log(ctx)
}



var exos1 = document.getElementById("exos1")
if (exos1.getContext) {
    var ctx = exos1.getContext('2d')

    ctx.fillStyle = "black"
    ctx.fillRect(50, 50, 200, 200)

    ctx.clearRect(70, 70, 160, 160)

    ctx.strokeStyle = "black"
    ctx.strokeRect(90, 90, 120, 120)

}



var exos2 = document.getElementById("exos2")
if (exos2.getContext) {
    var ctx = exos2.getContext("2d")

    ctx.strokeStyle = "grey"
    ctx.strokeRect(50, 50, 400, 250)

    ctx.fillStyle = "red"
    ctx.fillRect(70, 70, 360, 210)

    ctx.clearRect(175, 155, 150, 40) //400-150 = 250 / 2 = 125 + 50 = 175 //250 - 40 = 210 /2 = 105 + 50 =155
    ctx.clearRect(230, 100, 40, 150) // 400 -40 = 360 /2 = 180 +50 = 230 // 250 - 150 = 100 /2 = 50 + 50 = 100
}



var demo2 = document.getElementById("demo2")
if (demo2.getContext) {
    var ctx = demo2.getContext("2d")

    ctx.beginPath()

    ctx.moveTo(50, 50)
    ctx.lineTo(300, 50)
    ctx.lineTo(50, 300)
    ctx.lineTo(50, 50)

    ctx.fill()
    ctx.closePath()



    ctx.beginPath()

    ctx.moveTo(350, 100)
    ctx.lineTo(350, 350)
    ctx.lineTo(100, 350)
    ctx.lineTo(350, 100)

    ctx.stroke()
    ctx.closePath()
}



var demo3 = document.getElementById("demo3")
if (demo3.getContext) {
    var ctx = demo3.getContext("2d")

    ctx.beginPath()

    ctx.moveTo(50, 50)
    // ctx.lineTo(350, 50)
    // ctx.lineTo(350, 350)
    // ctx.lineTo(50, 350)
    // ctx.lineTo(50, 50)

    ctx.rect(50, 50 , 300, 300)

    ctx.strokeStyle = "green"
    ctx.stroke()
    ctx.closePath()
}


var demo4 = document.getElementById("demo4")
if (demo4.getContext) {
    var ctx = demo4.getContext("2d")

    ctx.beginPath()
    ctx.moveTo(350, 250)
    ctx.arc(250, 250, 100, 0, Math.PI * 2)

    ctx.moveTo(230, 210)
    ctx.arc(210, 210, 20, 0, Math.PI * 2)

    ctx.moveTo(310, 210)
    ctx.arc(290, 210, 20, 0, Math.PI * 2)

    ctx.moveTo(330, 250)
    ctx.arc(250, 250, 80, 0, Math.PI)

    ctx.stroke()

    ctx.closePath()
}


var demo5 = document.getElementById("demo5")
if (demo5.getContext) {
    var ctx = demo5.getContext("2d")


    ctx.beginPath()
    ctx.moveTo(55, 50)
    ctx.fillStyle = "red"
    ctx.arc(50, 50, 5, 0, Math.PI * 2)
    ctx.fill()

    ctx.moveTo(355, 350)
    ctx.arc(350, 350, 5, 0, Math.PI * 2)
    ctx.fill()

    ctx.moveTo(355, 50)
    ctx.arc(350, 50, 5, 0, Math.PI * 2)
    ctx.fill()
    ctx.closePath()

    ctx.beginPath()
    ctx.lineWidth = "10"
    ctx.moveTo(50, 50)
    ctx.arcTo(350, 50, 350, 350, 100)
    ctx.lineTo(350, 350)


    ctx.stroke()
    ctx.closePath()


}


var exos3 = document.getElementById("exos3")
if (exos3.getContext) {
    var ctx = exos3.getContext("2d")

    ctx.beginPath()
    ctx.fillStyle = "red"

    ctx.moveTo(55, 50)
    ctx.arc(50, 50, 5, 0, Math.PI * 2)

    ctx.moveTo(205, 200)
    ctx.arc(200, 200, 5, 0, Math.PI * 2)

    ctx.moveTo(355, 50)
    ctx.arc(350, 50, 5, 0, Math.PI * 2)

    ctx.fill()
    ctx.closePath()

    ctx.beginPath()
    ctx.strokeStyle = "grey"
    ctx.moveTo(50, 50)
    ctx.lineTo(200, 200)
    ctx.lineTo(350, 50)
    ctx.stroke()
    ctx.closePath()


    ctx.beginPath()
    ctx.strokeStyle = "black"
    ctx.lineWidth = 5
    ctx.moveTo(50, 50)
    ctx.arcTo(200, 200, 350, 50, 210)
    ctx.stroke()
    ctx.closePath()

}

var exos3_5 = document.getElementById("exos3_5")
if (exos3_5.getContext) {
    var ctx = exos3_5.getContext("2d")
    ctx.beginPath()
    ctx.fillStyle = "blue"
    ctx.fillRect(50, 50, 400, 150)

    ctx.strokeStyle = "pink"
    ctx.lineCap = "round"

    ctx.lineWidth = 10
    ctx.moveTo(200, 100)
    ctx.arc(150, 100, 50, 0, Math.PI)
    ctx.stroke()
    ctx.closePath()
}

const demo6 = document.getElementById('demo6')

if (demo6.getContext) {
    const ctx = demo6.getContext('2d')

    // Points de visualisation
    ctx.beginPath()

    ctx.fillStyle = "red"

    // Premier point
    // ctx.moveTo(55, 50)
    ctx.arc(50, 50, 5, 0, Math.PI * 2)

    // Deuxième point
    // ctx.moveTo(125, 100)
    ctx.arc(125, 100, 5, 0, Math.PI * 2)

    // Troisième point
    ctx.moveTo(200, 50)
    ctx.arc(200, 50, 5, 0, Math.PI * 2)

    // ctx.stroke()
    ctx.fill()
    ctx.closePath()

    // Courbe
    ctx.beginPath()
    ctx.moveTo(50, 50)
    ctx.bezierCurveTo(50, 100, 200, 100, 200, 50)
    ctx.stroke()

    ctx.closePath()

}

const demo7 = document.getElementById('demo7')

if (demo7.getContext) {
    const ctx = demo7.getContext('2d')

    // Points de visualisation
    ctx.beginPath()

    ctx.fillStyle = "red"

    // Premier point
    // ctx.moveTo(55, 50)
    ctx.arc(50, 50, 5, 0, Math.PI * 2)

    // Deuxième point
    // ctx.moveTo(125, 100)
    ctx.arc(125, 150, 5, 0, Math.PI * 2)

    // Troisième point
    ctx.moveTo(200, 50)
    ctx.arc(200, 50, 5, 0, Math.PI * 2)

    // ctx.stroke()
    ctx.fill()
    ctx.closePath()

    // Courbe
    ctx.beginPath()
    ctx.moveTo(50, 50)
    ctx.quadraticCurveTo(125, 150, 200, 50)
    ctx.stroke()

    ctx.closePath()

}


var demo8 = document.getElementById("demo8")
if (demo8.getContext) {
    var ctx = demo8.getContext("2d")

    ctx.beginPath()

    ctx.moveTo(50, 50)
    // ctx.lineTo(350, 50)
    // ctx.lineTo(350, 350)
    // ctx.lineTo(50, 350)
    // ctx.lineTo(50, 50)

    ctx.rect(50, 50 , 300, 300)

    ctx.strokeStyle = "green"
    ctx.stroke()
    ctx.closePath()
}


for ( i= 0; i < 16; i++) {
    // Ceci sera exécuté 5 fois
    // À chaque éxécution, la variable "pas" augmentera de 1
    // Lorsque'elle sera arrivée à 5, le boucle se terminera.
    console.log('Faire ' + pas + ' pas vers l\'est');
  }