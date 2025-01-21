import React from 'react'

type Props = {
    notes: string[]
}

// 音符のピッチ（音高）を五線譜の位置にマッピングする関数
const noteToPosition = (note: string) => {
    // 音符の音高（例: C4, D4, E4 など）を五線譜の位置に対応する数値に変換
    const noteMapping: { [key: string]: number } = {
        'C4': 0,  // 一番下のライン
        'D4': 1 + 0.125,  // 第二ライン
        'E4': 2 + 0.25,   // 第三ライン
        'F4': 3 + 0.5 + 0.125,
        'G4': 4 + 0.75,  // 第四ライン
        'A4': 5 + 1 + 0.125,
        'B4': 6 + 1.25,
        'C5': 7 + 1.5 + 0.125,
        'D5': 8 + 1.75,
        'E5': 9 + 2 + 0.125,
        'F5': 10 + 2.25,
        'G5': 11 + 2.5 + 0.125,
        'A5': 12 + 2.75,
        'B5': 13 + 3 + 0.125,
    }

    // 無効な音符（例: 'Z4'）を処理
    if (note === 'Z4') return null

    return noteMapping[note] ?? null
}

// 音符の黒丸を表示する関数
const getNoteIcon = () => {
    // return <div className="h-4 w-4 rounded-full bg-black"></div>

    return (
        <img src="/img/music4.svg" alt="note" className="w-5" />
    )
}

export const SheetMusic = React.memo<Props>(function SheetMusic({ notes }) {
    return (
        <div className="flex overflow-x-auto">
            {/* 横スクロール可能なコンテナ */}
            <div className="min-w-[1000px] flex-none">
                <div className="rounded-lg border border-gray-300 bg-white p-4">
                    <div className="mb-4 text-xl font-bold">楽譜</div>
                    <div className="relative pb-6">
                        {/* 五線譜の線を表示 */}
                        <div className="left-0 top-0 flex h-full w-full flex-col justify-center space-y-4">
                            {[...Array(5)].map((_, i) => (
                                <div key={i} className="h-1 bg-gray-400" />
                            ))}
                        </div>

                        {/* 音符（黒丸）を配置 */}
                        <div className="absolute bottom-0 left-0 right-0 top-0 flex gap-4 px-2">
                            {notes.map((note, index) => {
                                const position = noteToPosition(note)
                                if (position === null) return null // 無効な音符（'Z4'）は表示しない

                                return (
                                    <div
                                        key={index}
                                        className="flex w-5 items-end justify-center"
                                        style={{
                                            paddingBottom: `${position * 0.5}rem`,
                                        }}
                                    >
                                        {getNoteIcon()}
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
})

export default SheetMusic
