input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Angry)
    music.play(music.stringPlayable("C5 G E B C A F C ", 120), music.PlaybackMode.UntilDone)
})
