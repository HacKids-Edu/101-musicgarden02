input.onButtonPressed(Button.A, function () {
    while (!(input.buttonIsPressed(Button.B))) {
        music.playMelody("E B C5 A B G A F ", 120)
    }
})
input.onButtonPressed(Button.AB, function () {
    music.stopMelody(MelodyStopOptions.All)
})
input.onButtonPressed(Button.B, function () {
    while (!(input.buttonIsPressed(Button.A))) {
        music.playMelody("A F E F D G E F ", 200)
    }
})
basic.showIcon(IconNames.EigthNote)
basic.forever(function () {
	
})
