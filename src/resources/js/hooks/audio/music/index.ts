
// const context = new (window.AudioContext || window.AudioContext)()
let context: AudioContext | undefined = undefined

export const playTone = (frequency: number, duration: number) => {
    // Web Audio API コンテキストを作成する
    if (!context) {
        context = new AudioContext()
    }
    // const context = new (window.AudioContext || window.webkitAudioContext)()
    // 音を生成するためのオシレーターノードを作成
    const oscillator = context.createOscillator()
    // 音量を制御するためのゲインノードを作成
    const gainNode = context.createGain()

    // オシレーターの周波数を引数で渡された値に設定
    oscillator.frequency.value = frequency
    oscillator.type = "sine"

    // オシレーターノードをゲインノードに接続し、ゲインノードを出力に接続
    oscillator.connect(gainNode)
    gainNode.connect(context.destination)

    // 音の再生を開始
    oscillator.start()

    // 音量を徐々に下げていく
    gainNode.gain.setValueAtTime(1, context.currentTime)
    gainNode.gain.exponentialRampToValueAtTime(0.001, context.currentTime + duration / 1000)

    // 音の再生の終了
    oscillator.stop(context.currentTime + duration / 1000)

    return new Promise(resolve => setTimeout(resolve, duration))
}
