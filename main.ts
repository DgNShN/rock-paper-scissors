let Item = 0
input.onGesture(Gesture.Shake, function () {
    Item = randint(0, 2)
    if (Item == 0) {
        basic.showIcon(IconNames.Chessboard)
    } else if (Item == 1) {
        basic.showIcon(IconNames.SmallDiamond)
    } else if (Item == 2) {
        basic.showIcon(IconNames.Scissors)
    }
})
