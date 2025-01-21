
import Button from '@/Components/Button'
import DragonQuestTitle from '@/Components/DragonQuestTitle'
import Piano from '@/Components/Piano'
import { playMusicalScale } from '@/hooks/audio/audio'
import { playFamimaMelody } from '@/hooks/audio/music/famimaMelody'
import { playKaeruNoUta } from '@/hooks/audio/music/kaeruNoUta'
import { playDQOverture } from '@/hooks/audio/music/playDQOverture'
import { playTulipSong } from '@/hooks/audio/music/tulipSong'
import { MusicalScale } from '@/hooks/audio/type'
import React, { useCallback, useEffect, useState } from 'react'

export const StartView = React.memo(function StartView() {
    useEffect(() => {
        const Music = async () => {
            await playDQOverture()
            Music()
        }
        Music()
    })
    return (
        <>
            <DragonQuestTitle />
        </>
    )
})

export default StartView
