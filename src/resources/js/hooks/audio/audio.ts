import { playTone } from "./music"
import { musicalScaleToFrequency } from "./musicalScaleToFrequency"
import { restToFrequency } from "./restToFrequency"
import { MusicalScale, RestScale } from "./type"

const Rhythm = 1000

export const playMusicalScale = async (musicalScale: MusicalScale, n = 4) => {
    const i = 16 / n
    await playTone(musicalScaleToFrequency(musicalScale), Rhythm / i)
}
export const playRest = async (z: RestScale) => {
    await new Promise(resolve => setTimeout(resolve, Rhythm / restToFrequency(z)))
}
