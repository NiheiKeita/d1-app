import { playMusicalScale, playRest } from "../audio"

export async function playDQOverture() {
    await playMusicalScale("C4") // 高ド
    await playRest("Z4")       // 休符
    await playMusicalScale("C4") // 高ド
    await playMusicalScale("F4", 8) // 高ファ
    await playMusicalScale("G4", 8) // 高ソ
    await playMusicalScale("A4", 8) // 高ラ
    await playMusicalScale("A#4", 8) // 高シ#
    await playMusicalScale("C5", 8) // 高ド
    await playMusicalScale("F5", 8) // 高ファ
    await playRest("Z4")       // 休符
    await playMusicalScale("E5", 4) // 高ミ
    await playMusicalScale("D5", 4) // 高レ
    await playMusicalScale("D5", 8) // 高レ
    await playRest("Z4")       // 休符
    await playMusicalScale("C5", 8) // 高ド
    await playRest("Z4")       // 休符
    await playMusicalScale("B4", 4) // 高シ
    await playMusicalScale("B4", 4) // 高シ
    await playMusicalScale("D5", 4) // 高レ
    await playMusicalScale("C5", 8) // 高ド
    await playMusicalScale("A4", 16) // 高ラ
    await playMusicalScale("A3", 4) // 高ラ
    await playMusicalScale("A3", 4) // 高ラ
    await playMusicalScale("A3", 8) // 高ラ
    await playMusicalScale("A#3", 8) // 高シ#
    await playMusicalScale("C#4", 8) // 高ド#
    await playMusicalScale("D4", 16) // 高レ
    await playRest("Z4")       // 休符
    await playMusicalScale("D5", 4) // 高レ
    await playMusicalScale("E5", 4) // 高ミ
    await playMusicalScale("F5", 4) // 高ファ
    await playMusicalScale("G5", 16) // 高ソ
    await playRest("Z4")       // 休符
    await playMusicalScale("D5", 4) // 高レ
    await playMusicalScale("D5", 4) // 高レ
    await playMusicalScale("F5", 4) // 高ファ
    await playMusicalScale("F5", 8) // 高ファ
    await playMusicalScale("E5", 8) // 高ミ
    await playMusicalScale("D5", 8) // 高レ
    await playMusicalScale("C5", 8) // 高ド
    await playMusicalScale("A5", 16) // 高ラ
    await playRest("Z4")       // 休符
    await playMusicalScale("A#5", 4) // 高シ#
    await playMusicalScale("A5", 4) // 高ラ
    await playMusicalScale("G5", 4) // 高ソ
    await playMusicalScale("F5", 16) // 高ファ
    await playMusicalScale("D5", 8) // 高レ
    await playMusicalScale("F5", 8) // 高ファ
    await playMusicalScale("G5", 16) // 高ソ
    await playRest("Z4")       // 休符
    await playMusicalScale("A5", 4) // 高ラ
    await playMusicalScale("G5", 4) // 高ソ
    await playMusicalScale("F5", 4) // 高ファ
    await playMusicalScale("F5", 16) // 高ファ
    await playMusicalScale("E5", 8) // 高ミ
    await playMusicalScale("C5", 8) // 高ド
    await playMusicalScale("C6", 16) // 高ド
    await playRest("Z4")       // 休符
    await playMusicalScale("A5", 4) // 高ラ
    await playMusicalScale("A#5", 4) // 高シ#
    await playMusicalScale("C6", 4) // 高ド
    await playMusicalScale("D6", 16) // 高レ
    await playRest("Z4")       // 休符
    await playMusicalScale("D5", 4) // 高レ
    await playMusicalScale("E5", 4) // 高ミ
    await playMusicalScale("F5", 4) // 高ファ
    await playMusicalScale("A#5", 16) // 高シ#
    await playMusicalScale("A5", 16) // 高ラ
    await playMusicalScale("F5", 16) // 高ファ
}
