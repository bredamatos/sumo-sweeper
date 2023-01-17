function acabou () {
    basic.showIcon(IconNames.Yes)
    for (let index = 0; index < 3; index++) {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 150)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 150)
        maqueen.servoRun(maqueen.Servos.S1, 120)
        music.playTone(262, music.beat(BeatFraction.Quarter))
        basic.pause(100)
        maqueen.servoRun(maqueen.Servos.S1, 160)
        music.playTone(494, music.beat(BeatFraction.Half))
        basic.pause(200)
    }
    maqueen.motorStop(maqueen.Motors.All)
}
function empurra () {
    maqueen.servoRun(maqueen.Servos.S1, 120)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 150)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 130)
    basic.pause(500)
    empurrar = true
    while (empurrar) {
        if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0) {
            maqueen.motorStop(maqueen.Motors.All)
            basic.pause(500)
            empurrar = false
        }
    }
}
function recua () {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 150)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 110)
    basic.pause(500)
    recuar = true
    while (recuar) {
        if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0 || maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0) {
            maqueen.motorStop(maqueen.Motors.All)
            basic.pause(500)
            recuar = false
        }
    }
    maqueen.servoRun(maqueen.Servos.S1, 165)
}
function procurar () {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 100)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 100)
    contador = 0
    procurando = true
    basic.pause(500)
    while (procurando) {
        if (maqueen.Ultrasonic(PingUnit.Centimeters) < 30) {
            maqueen.motorStop(maqueen.Motors.All)
            basic.pause(200)
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 80)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 80)
            basic.pause(150)
            encontrado = true
            procurando = false
        }
        if (contador == 50) {
            maqueen.motorStop(maqueen.Motors.All)
            encontrado = false
            procurando = false
        }
        contador += 1
    }
}
let procurando = false
let contador = 0
let recuar = false
let empurrar = false
let encontrado = false
let activo = true
while (activo) {
    encontrado = false
    procurar()
    if (encontrado) {
        empurra()
        recua()
    } else {
        activo = false
    }
}
acabou()
