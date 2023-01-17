function empurra () {
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
}
function procurar () {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 100)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 100)
    procurando = true
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
    }
}
let procurando = false
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
    }
}
