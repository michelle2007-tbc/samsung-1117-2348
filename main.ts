let time2 = 0
let distance2 = 0
let distance1 = 0
let time1 = 5
if (distance1 <= 2) {
    music.playTone(523, music.beat(BeatFraction.Double))
    basic.showString("START")
    basic.showNumber(time1)
    basic.pause(1000)
    for (let index = 0; index < 5; index++) {
        time1 += -1
        basic.showNumber(time1)
        basic.pause(1000)
    }
}
if (distance2 <= 2) {
    music.playTone(392, music.beat(BeatFraction.Double))
    basic.showString("SOAP")
    time2 = 9
    basic.pause(1000)
    basic.showNumber(time2)
    for (let index = 0; index < 9; index++) {
        time2 += -1
        basic.showNumber(time2)
        basic.pause(1000)
    }
}
basic.forever(function () {
    distance1 = sonar.ping(
    DigitalPin.P0,
    DigitalPin.P1,
    PingUnit.Centimeters
    )
    distance2 = sonar.ping(
    DigitalPin.P8,
    DigitalPin.P12,
    PingUnit.Centimeters
    )
})
