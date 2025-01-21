import React, { useState, useCallback } from "react"

type Props = {
    type: "white" | "black";
    onClick: () => void;
    isPressed: boolean;
    position?: string;
};

export const PianoKey = React.memo<Props>(function PianoKey({
    type,
    onClick,
    isPressed,
    position = "",
}) {
    const [isCurrentlyPressed, setIsCurrentlyPressed] = useState(isPressed)
    const [isTouched, setIsTouched] = useState(isPressed)

    const baseStyle =
        type === "white"
            ? "w-16 h-48 border border-black"
            : "w-10 h-32 absolute"

    const pressedStyle =
        type === "white" ? "bg-gray-300" : "bg-gray-700"

    const notPressedStyle =
        type === "white" ? "bg-white" : "bg-black"


    // クリック開始処理
    const handleInteractionStart = (
        e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>
    ) => {
        let isOk = isTouched
        if (e.type === "touchstart") {
            isOk = false
            setIsTouched(true)
        }
        if (isOk) {
            return
        }
        setIsCurrentlyPressed(true) // 押し始めた状態に更新
        onClick()
    }

    // クリック終了処理
    const handleInteractionEnd = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
        if (e.type === "mouseup") {
            setIsTouched(false)
        }
        setIsCurrentlyPressed(false) // 押し終わった状態に更新
    }

    // マウスが離れたときやタッチが終わったときに押し終わった状態にする
    const handleInteractionCancel = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
        setIsTouched(false)
        setIsCurrentlyPressed(false)
    }

    // イベントハンドラー
    const handleTouchEnd = useCallback(handleInteractionEnd, [])
    const handleMouseUp = useCallback(handleInteractionEnd, [])
    const handleMouseLeave = useCallback(handleInteractionCancel, [])
    const handleTouchCancel = useCallback(handleInteractionCancel, [])

    return (
        <div
            className={`${baseStyle} ${position} ${isCurrentlyPressed ? pressedStyle : notPressedStyle} ${type === "black" ? "z-10" : ""}`}
            onMouseDown={handleInteractionStart}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleInteractionStart}
            onTouchEnd={handleTouchEnd}
            onTouchCancel={handleTouchCancel}
        />
    )
})

export default PianoKey
