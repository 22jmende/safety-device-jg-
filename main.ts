radio.onReceivedNumber(function (receivedNumber) {
    soundExpression.soaring.play()
})
input.onButtonPressed(Button.A, function () {
    radio.sendString("HELP")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.No)
    radio.sendNumber(1)
})
radio.setGroup(13)
basic.forever(function () {
    serial.writeValue("Light", input.lightLevel())
    if (input.lightLevel() < 30) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    } else {
        basic.clearScreen()
    }
})
