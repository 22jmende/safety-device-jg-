input.onButtonPressed(Button.A, function () {
    radio.sendString("HELP")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(13)
    basic.showIcon(IconNames.No)
    music.playMelody("E B C5 A B G A F ", 120)
})
let bearing = 0
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
basic.forever(function () {
    bearing = input.compassHeading()
    if (bearing < 0) {
    	
    } else {
    	
    }
})
