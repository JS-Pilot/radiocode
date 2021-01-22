input.onButtonPressed(Button.A, function () {
    if (have_chance_for_radiocode == true) {
        entered_radiocode = [EventBusSource.MICROBIT_ID_BUTTON_A]
    }
})
input.onButtonPressed(Button.AB, function () {
    if (have_chance_for_radiocode == true) {
        entered_radiocode = [EventBusSource.MICROBIT_ID_BUTTON_AB]
    }
})
input.onButtonPressed(Button.B, function () {
    if (have_chance_for_radiocode == true) {
        entered_radiocode = [EventBusSource.MICROBIT_ID_BUTTON_B]
    }
})
function check_radiocode () {
    if (have_chance_for_radiocode == true) {
        if (entered_radiocode == radiocode) {
            rdiocode_true = true
            return true
        } else if (entered_radiocode.length != radiocode.length) {
            return true
        } else {
            return false
        }
    } else {
        return false
    }
}
let rdiocode_true = false
let radiocode = 0
let entered_radiocode: number[] = []
let have_chance_for_radiocode = false
have_chance_for_radiocode = true
entered_radiocode = []
radiocode = 0
basic.forever(function () {
    have_chance_for_radiocode = check_radiocode()
    if (rdiocode_true == true) {
        music.playMelody("G B A G C5 B A B ", 120)
        control.reset()
    }
})
