import { playMusicalScale, playRest } from "@/hooks/audio/audio"

export async function playFamimaMelody() {
    await playMusicalScale("B4")
    await playMusicalScale("G4")
    await playMusicalScale("D4")
    await playMusicalScale("G4")
    await playMusicalScale("A4")
    await playMusicalScale("D5")
    await playRest("Z4")
    await playMusicalScale("D5")
    await playMusicalScale("A4")
    await playMusicalScale("B4")
    await playMusicalScale("A4")
    await playMusicalScale("D4")
    await playMusicalScale("G4")
}
