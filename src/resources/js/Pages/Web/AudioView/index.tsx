
import Button from '@/Components/Button'
import Piano from '@/Components/Piano'
import { playMusicalScale } from '@/hooks/audio/audio'
import { playFamimaMelody } from '@/hooks/audio/music/famimaMelody'
import { playKaeruNoUta } from '@/hooks/audio/music/kaeruNoUta'
import { playDQOverture } from '@/hooks/audio/music/playDQOverture'
import { playTulipSong } from '@/hooks/audio/music/tulipSong'
import { MusicalScale } from '@/hooks/audio/type'
import React, { useCallback, useState } from 'react'

export const AudioView = React.memo(function AudioView() {
    const [musicalSequences, setMusicalSequences] = useState<string[]>([])
    const handleClickKey = useCallback((key: MusicalScale) => {
        console.log(key)
        playMusicalScale(key)
        setMusicalSequences((prev) => [...prev, key])
    }, [])
    return (
        <>
            <Button onClick={() => { playDQOverture() }}>ドラクエ</Button>

            <Button onClick={() => { playFamimaMelody() }}>ファミマ</Button>
            <Button onClick={() => { playTulipSong() }}>チューリップ</Button>
            <Button onClick={() => { playKaeruNoUta() }}>かえるのうた</Button>
            <Piano onClickKey={handleClickKey} />
        </>
    )
})

export default AudioView
