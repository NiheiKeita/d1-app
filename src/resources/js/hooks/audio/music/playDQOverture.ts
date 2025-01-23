import { playMusicalScale, playRest } from "../audio"
import { RestScale, MusicalScale } from "../type"

export async function playDQOvertureMusic(signal: AbortSignal) {
    const safePlay = async (fn: () => Promise<void>) => {
        if (signal.aborted) return
        await fn()
    }
    for (const { note, duration } of dqOvertureSequence) {
        if (note.startsWith("Z")) {
            // 休符の場合
            await safePlay(() => playRest(note as RestScale))
        } else {
            // 音符の場合
            await safePlay(() => playMusicalScale(note as MusicalScale, duration))
        }
    }
}

const dqOvertureSequence: { note: MusicalScale | RestScale, duration?: number }[] = [
    { note: "C4" },          // 高ド
    { note: "Z4" },          // 休符
    { note: "C4" },          // 高ド
    { note: "F4", duration: 8 },  // 高ファ
    { note: "G4", duration: 8 },  // 高ソ
    { note: "A4", duration: 8 },  // 高ラ
    { note: "A#4", duration: 8 }, // 高シ#
    { note: "C5", duration: 8 },  // 高ド
    { note: "F5", duration: 8 },  // 高ファ
    { note: "Z4" },          // 休符
    { note: "E5", duration: 4 },  // 高ミ
    { note: "D5", duration: 4 },  // 高レ
    { note: "D5", duration: 8 },  // 高レ
    { note: "Z4" },          // 休符
    { note: "C5", duration: 8 },  // 高ド
    { note: "Z4" },          // 休符
    { note: "B4", duration: 4 },  // 高シ
    { note: "B4", duration: 4 },  // 高シ
    { note: "D5", duration: 4 },  // 高レ
    { note: "C5", duration: 8 },  // 高ド
    { note: "A4", duration: 16 }, // 高ラ
    { note: "A3", duration: 4 },  // 高ラ
    { note: "A3", duration: 4 },  // 高ラ
    { note: "A3", duration: 8 },  // 高ラ
    { note: "A#3", duration: 8 }, // 高シ#
    { note: "C#4", duration: 8 }, // 高ド#
    { note: "D4", duration: 16 }, // 高レ
    { note: "Z4" },          // 休符
    { note: "D5", duration: 4 },  // 高レ
    { note: "E5", duration: 4 },  // 高ミ
    { note: "F5", duration: 4 },  // 高ファ
    { note: "G5", duration: 16 }, // 高ソ
    { note: "Z4" },          // 休符
    { note: "D5", duration: 4 },  // 高レ
    { note: "D5", duration: 4 },  // 高レ
    { note: "F5", duration: 4 },  // 高ファ
    { note: "F5", duration: 8 },  // 高ファ
    { note: "E5", duration: 8 },  // 高ミ
    { note: "D5", duration: 8 },  // 高レ
    { note: "C5", duration: 8 },  // 高ド
    { note: "A5", duration: 16 }, // 高ラ
    { note: "Z4" },          // 休符
    { note: "A#5", duration: 4 }, // 高シ#
    { note: "A5", duration: 4 },  // 高ラ
    { note: "G5", duration: 4 },  // 高ソ
    { note: "F5", duration: 16 }, // 高ファ
    { note: "D5", duration: 8 },  // 高レ
    { note: "F5", duration: 8 },  // 高ファ
    { note: "G5", duration: 16 }, // 高ソ
    { note: "Z4" },          // 休符
    { note: "A5", duration: 4 },  // 高ラ
    { note: "G5", duration: 4 },  // 高ソ
    { note: "F5", duration: 4 },  // 高ファ
    { note: "F5", duration: 16 }, // 高ファ
    { note: "E5", duration: 8 },  // 高ミ
    { note: "C5", duration: 8 },  // 高ド
    { note: "C6", duration: 16 }, // 高ド
    { note: "Z4" },          // 休符
    { note: "A5", duration: 4 },  // 高ラ
    { note: "A#5", duration: 4 }, // 高シ#
    { note: "C6", duration: 4 },  // 高ド
    { note: "D6", duration: 16 }, // 高レ
    { note: "Z4" },          // 休符
    { note: "D5", duration: 4 },  // 高レ
    { note: "E5", duration: 4 },  // 高ミ
    { note: "F5", duration: 4 },  // 高ファ
    { note: "A#5", duration: 16 },// 高シ#
    { note: "A5", duration: 16 }, // 高ラ
    { note: "F5", duration: 16 }, // 高ファ
    { note: "Z4" },          // 休符
    { note: "Z4" },          // 休符
]
export async function playDQOverture(signal: AbortSignal) {
}
