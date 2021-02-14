let strip: neopixel.Strip = null
// Rojo: puntos
// Lila: rayas
// =SOS
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 3; index++) {
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
        basic.pause(200)
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
        basic.pause(200)
    }
    for (let index = 0; index < 3; index++) {
        strip.showColor(neopixel.colors(NeoPixelColors.Purple))
        basic.pause(500)
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
        basic.pause(500)
    }
    for (let index = 0; index < 3; index++) {
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
        basic.pause(200)
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
        basic.pause(200)
    }
})
// Amarillo: puntos
// Azul: rayas
input.onButtonPressed(Button.B, function () {
    strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
    basic.pause(500)
    strip.showColor(neopixel.colors(NeoPixelColors.Black))
    basic.pause(500)
    for (let index = 0; index < 3; index++) {
        strip.showColor(neopixel.colors(NeoPixelColors.Blue))
        basic.pause(1000)
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
        basic.pause(1000)
    }
    strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
    basic.pause(500)
    strip.showColor(neopixel.colors(NeoPixelColors.Black))
    basic.pause(500)
    strip.showColor(neopixel.colors(NeoPixelColors.Blue))
    basic.pause(1000)
    strip.showColor(neopixel.colors(NeoPixelColors.Black))
    basic.pause(1000)
    strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
    basic.pause(500)
    strip.showColor(neopixel.colors(NeoPixelColors.Black))
    basic.pause(500)
    strip.showColor(neopixel.colors(NeoPixelColors.Blue))
    basic.pause(1000)
    strip.showColor(neopixel.colors(NeoPixelColors.Black))
    basic.pause(1000)
    strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
    basic.pause(500)
    strip.showColor(neopixel.colors(NeoPixelColors.Black))
    basic.pause(500)
    strip.showColor(neopixel.colors(NeoPixelColors.Blue))
    basic.pause(1000)
    strip.showColor(neopixel.colors(NeoPixelColors.Black))
    basic.pause(1000)
    strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
    basic.pause(500)
    strip.showColor(neopixel.colors(NeoPixelColors.Black))
    basic.pause(500)
    for (let index = 0; index < 2; index++) {
        strip.showColor(neopixel.colors(NeoPixelColors.Blue))
        basic.pause(1000)
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
        basic.pause(1000)
    }
})
basic.forever(function () {
    strip = neopixel.create(DigitalPin.P8, 10, NeoPixelMode.RGB)
})
