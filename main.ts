function procurar () {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 99)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 99)
    procurando = true
    while (procurando) {
        distancia = maqueen.Ultrasonic(PingUnit.Centimeters)
        if (distancia > 0 && distancia < 30) {
            maqueen.motorStop(maqueen.Motors.All)
            encontrado = true
            procurando = false
        }
    }
}
let distancia = 0
let procurando = false
let encontrado = false
let activo = true
while (activo) {
    encontrado = false
    procurar()
}
