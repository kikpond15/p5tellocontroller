input.onButtonPressed(Button.A, function () {
    if (A == 0) {
        A = 1
    } else {
        A = 0
    }
})
input.onButtonPressed(Button.AB, function () {
    if (AB == 0) {
        AB = 1
    } else {
        AB = 0
    }
})
input.onButtonPressed(Button.B, function () {
    if (B == 0) {
        B = 1
    } else {
        B = 0
    }
})
let AB = 0
let B = 0
let A = 0
let led_x = 0
let led_y = 0
A = 0
B = 0
AB = 0
serial.setBaudRate(BaudRate.BaudRate115200)
serial.redirectToUSB()
basic.forever(function () {
    led.unplot(led_x, led_y)
    led_x = Math.map(input.acceleration(Dimension.X), -1023, 1023, 0, 5)
    led_y = Math.map(input.acceleration(Dimension.Y), -1023, 1023, 0, 5)
    led.plot(led_x, led_y)
    serial.writeNumbers([
    input.acceleration(Dimension.X),
    input.acceleration(Dimension.Y),
    A,
    B,
    AB
    ])
})
