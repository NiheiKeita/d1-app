import React, { useState } from "react"
import { PianoKey } from "./components/PianoKey"
import { MusicalScale } from "@/hooks/audio/type"

type Props = {
    onClickKey: (key: MusicalScale) => void
}

export const Piano = React.memo<Props>(function Piano({
    onClickKey
}) {
    const musicalSequences: MusicalScale[] = [
        "C3", "D3", "E3", "F3", "G3", "A3", "B3",
        "C4", "D4", "E4", "F4", "G4", "A4", "B4",
        "C5", "D5", "E5", "F5", "G5", "A5", "B5",
    ]
    const sharp = [
        "C3", "D3", "F3", "G3", "A3",
        "C4", "D4", "F4", "G4", "A4",
        "C5", "D5", "F5", "G5", "A5",
    ]
    const [pressedKeys, setPressedKeys] = useState<{ [key: string]: boolean }>({})

    const handleKeyPress = (key: MusicalScale) => {
        // setPressedKeys((prev) => ({ [key]: !prev[key] }))
        // if (!pressedKeys[key]) {
        //     onClickKey(key)
        // }
        onClickKey(key)
    }
    const getSharp = (key: MusicalScale): MusicalScale => {
        // C3 なら C#3 を返す
        const [note, octave] = key.split("")
        const sharpNote = note + "#" + octave
        return sharpNote as MusicalScale
    }

    return (
        <div className="relative mx-auto mt-10 flex w-full max-w-4xl">
            {musicalSequences.map((musicalSequence, i) => (
                <div key={musicalSequence} className="relative">
                    <PianoKey
                        type="white"
                        onClick={() => handleKeyPress(musicalSequence)}
                        isPressed={!!pressedKeys[musicalSequence]}
                    />
                    {sharp.includes(musicalSequence) && (
                        <PianoKey
                            type="black"
                            onClick={() => handleKeyPress(getSharp(musicalSequence))}
                            isPressed={!!pressedKeys[getSharp(musicalSequence)]}
                            position="left-12 top-0"
                        />
                    )}
                </div>
            ))}
        </div>
    )
})

export default Piano
