import { playMusicalScale, playRest } from "@/hooks/audio/audio"

export async function playKaeruNoUta() {
    // かえるの歌
    await playMusicalScale("C4") // ド
    await playMusicalScale("D4") // レ
    await playMusicalScale("E4") // ミ
    await playMusicalScale("F4") // ファ
    await playMusicalScale("E4") // ミ
    await playMusicalScale("D4") // レ
    await playMusicalScale("C4") // ド
    await playRest("Z4") // 休符
    await playMusicalScale("E4") // ミ
    await playMusicalScale("F4") // ファ
    await playMusicalScale("G4") // ソ
    await playMusicalScale("A4") // ラ
    await playMusicalScale("G4") // ソ
    await playMusicalScale("F4") // ファ
    await playMusicalScale("E4") // ミ
    await playRest("Z4") // 休符
    await playMusicalScale("C4") // ド
    await playRest("Z4") // 休符
    await playMusicalScale("C4") // ド
    await playRest("Z4") // 休符
    await playMusicalScale("C4") // ド
    await playRest("Z4") // 休符
    await playMusicalScale("C4") // ド
    await playRest("Z4") // 休符
    await playMusicalScale("C4") // ド
    await playMusicalScale("D4") // レ
    await playMusicalScale("E4") // ミ
    await playMusicalScale("F4") // ファ
    await playMusicalScale("E4") // ミ
    await playMusicalScale("D4") // レ
    await playMusicalScale("C4") // ド
}
