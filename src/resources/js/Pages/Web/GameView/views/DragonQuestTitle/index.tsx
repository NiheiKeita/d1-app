import { playDQOverture, playDQOvertureMusic } from '@/hooks/audio/music/playDQOverture'
import React, { useState, useEffect, useCallback } from 'react'

type Props = {
    onChangeScreen: (screen: string) => void
}

export const DragonQuestTitle = React.memo<Props>(function DragonQuestTitle({
    onChangeScreen
}) {
    const [selectedMenu, setSelectedMenu] = useState(0) // Start, Continue の選択状態
    const [selectedSpeed, setSelectedSpeed] = useState(1) // Slow, Normal, Early の選択状態

    useEffect(() => {
        const controller = new AbortController()
        const { signal } = controller

        const playMusic = async () => {
            try {
                while (!signal.aborted) {
                    await playDQOvertureMusic(signal)
                }
            } catch (error) {
                if (signal.aborted) {
                    console.log("音楽の再生がキャンセルされました。")
                } else {
                    console.error("再生中にエラーが発生しました:", error)
                }
            }
        }

        playMusic()

        // クリーンアップで再生を停止
        return () => {
            controller.abort()
        }
    }, [])

    const menuOptions = ['Start', 'Continue']
    const speedOptions = ['Slow', 'Normal', 'Early']

    const handleMenuNavigation = (direction: 'up' | 'down') => {
        if (direction === 'up') {
            setSelectedMenu((prev) => (prev - 1 + menuOptions.length) % menuOptions.length)
        } else {
            setSelectedMenu((prev) => (prev + 1) % menuOptions.length)
        }
        console.log('selectedMenu:', selectedMenu)
    }

    const handleSpeedNavigation = (direction: 'left' | 'right') => {
        if (direction === 'left') {
            setSelectedSpeed((prev) => (prev - 1 + speedOptions.length) % speedOptions.length)
        } else {
            setSelectedSpeed((prev) => (prev + 1) % speedOptions.length)
        }
    }

    const handleEnter = useCallback(() => {
        console.log('selectedMenu:', selectedMenu)
        if (selectedMenu === 0) {
            onChangeScreen("nameInput")
        }
        if (selectedMenu === 1) {
            console.log('Go to Continue')
        }
    }, [selectedMenu])


    return (
        <div className="relative flex h-screen flex-col items-center justify-center overflow-hidden bg-black text-2xl font-bold text-white">
            {/* タイトル */}
            <div className="relative mb-10">
                <h1
                    className="animate-fade-in bg-gradient-to-b from-yellow-400 to-yellow-200 bg-clip-text text-6xl text-transparent md:text-8xl"
                    style={{ textShadow: '0 0 8px #ffdf00, 0 0 16px #ffdf00' }}
                >
                    DragonQuest
                </h1>
                {/* 光る星 */}
                <div className="absolute left-[80%] top-[50px] translate-x-[-50%] animate-twinkle">
                    <div className="h-4 w-4 rounded-full bg-white" />
                    <div className="absolute inset-0 h-10 w-10 rounded-full bg-gradient-to-r from-white to-transparent blur-md" />
                </div>
            </div>

            {/* メニュー */}
            <div className="text-center">
                {menuOptions.map((option, index) => (
                    <div key={option} className="flex items-center justify-center">
                        <span className={`text-yellow-400 ${selectedMenu === index ? '' : 'opacity-0'}`}>
                            ▶
                        </span>
                        <span
                            className={`ml-2 ${selectedMenu === index ? 'text-yellow-400 underline' : ''
                                }`}
                        >
                            {option}
                        </span>
                    </div>
                ))}
            </div>

            {/* Speed メニュー */}
            <div className="mt-6">
                <div className="flex justify-center gap-6">
                    {speedOptions.map((option, index) => (
                        <div key={option} className="flex items-center">
                            <span className={`text-yellow-400 ${selectedSpeed === index ? '' : 'opacity-0'}`}>
                                ▶
                            </span>
                            <span
                                className={`ml-2 ${selectedSpeed === index ? 'text-yellow-400 underline' : ''
                                    }`}
                            >
                                {option}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* 操作説明 */}
            <div className="absolute bottom-5 text-center text-sm text-gray-400">
                <p>上下でメニュー選択、左右でSpeed調整</p>
            </div>

            {/* キーボード操作 */}
            <div
                tabIndex={0}
                className="absolute inset-0 focus:outline-none"
                onKeyDown={(e) => {
                    if (e.key === 'ArrowUp') handleMenuNavigation('up')
                    if (e.key === 'ArrowDown') handleMenuNavigation('down')
                    if (e.key === 'ArrowLeft') handleSpeedNavigation('left')
                    if (e.key === 'ArrowRight') handleSpeedNavigation('right')
                    if (e.key === 'Enter') handleEnter()
                }}
            ></div>
        </div >
    )
})

export default DragonQuestTitle
