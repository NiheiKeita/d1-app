import React, { useState, useEffect } from "react"

type Props = {
    onChangeScreen: (screen: string) => void
}

export const DQNameInput = React.memo<Props>(function DQNameInput({
    onChangeScreen
}) {
    const characters = [
        "あ", "か", "さ", "た", "な", "は", "ま", "や", "ら", "わ",
        "い", "き", "し", "ち", "に", "ひ", "み", "ゆ", "り", "を",
        "う", "く", "す", "つ", "ぬ", "ふ", "む", "", "る", "ん",
        "え", "け", "せ", "て", "ね", "へ", "め", "", "れ", "",
        "お", "こ", "そ", "と", "の", "ほ", "も", "よ", "ろ", "ー",
    ]

    const [name, setName] = useState<string[]>([])
    const [cursorIndex, setCursorIndex] = useState(27)
    const [deleteMode, setDeleteMode] = useState(false) // 削除モードフラグ

    // エンターキーで文字を入力
    const handleEnter = () => {
        if (deleteMode) {
            handleDelete()
        } else if (name.length < 10 && characters[cursorIndex] !== "") {
            setName([...name, characters[cursorIndex]])
        }
    }

    // 1文字削除
    const handleDelete = () => {
        setName(name.slice(0, -1))
        setDeleteMode(false) // 削除モード解除
    }

    // キー操作でカーソル移動
    const handleKeyDown = (event: KeyboardEvent) => {
        const columnCount = 10 // 列の数（縦書き配置）

        if (event.key === "ArrowRight") {
            setCursorIndex((prev) => (prev + 1) % characters.length)
        } else if (event.key === "ArrowLeft") {
            setCursorIndex((prev) =>
                (prev - 1 + characters.length) % characters.length
            )
        } else if (event.key === "ArrowUp") {
            setCursorIndex((prev) =>
                (prev - columnCount + characters.length) % characters.length
            )
        } else if (event.key === "ArrowDown") {
            setCursorIndex((prev) => (prev + columnCount) % characters.length)
        } else if (event.key === "Enter") {
            handleEnter()
        }
    }

    // キーボードイベント登録
    useEffect(() => {
        window.addEventListener("keydown", handleKeyDown)
        return () => window.removeEventListener("keydown", handleKeyDown)
    }, [cursorIndex, name, deleteMode])

    return (
        <div className="flex min-h-screen flex-col items-center justify-center space-y-6 bg-black text-white">
            {/* 名前入力欄 */}
            <div className="flex space-x-4 text-xl">
                {Array.from({ length: 5 }, (_, i) => (
                    <div
                        key={i}
                        className="flex h-12 w-10 cursor-pointer items-center justify-center border-b-2 border-white"
                        onClick={() => {
                            if (i === name.length - 1) {
                                setDeleteMode(true)
                            }
                        }}
                    >
                        {name[i] || ""}
                        {deleteMode && i === name.length - 1 && (
                            <div className="absolute bottom-0 left-0 right-0 h-1 bg-red-500" />
                        )}
                    </div>
                ))}
            </div>

            {/* 50音グリッド */}
            <div className="grid grid-cols-10 gap-4">
                {Array.from({ length: 10 }, (_, colIndex) => (
                    <div key={colIndex} className="flex flex-col items-center">
                        {Array.from({ length: 5 }, (_, rowIndex) => {
                            const charIndex = rowIndex * 10 + colIndex // 縦書きのインデックス計算
                            return (
                                <div
                                    key={charIndex}
                                    className={`flex h-10 w-10 items-center justify-center text-xl ${cursorIndex === charIndex ? "relative" : ""
                                        }`}
                                    onClick={() => setCursorIndex(charIndex)}
                                >
                                    {characters[charIndex] || ""}
                                    {cursorIndex === charIndex && (
                                        <div className="absolute bottom-0 left-0 right-0 h-1 animate-twinkleSmall bg-yellow-500" />
                                    )}
                                </div>
                            )
                        })}
                    </div>
                ))}
            </div>
        </div>
    )
})

export default DQNameInput
