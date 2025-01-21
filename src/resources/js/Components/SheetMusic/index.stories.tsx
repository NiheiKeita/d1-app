import { Meta, StoryObj } from '@storybook/react'
import { SheetMusic } from '.'

const meta: Meta<typeof SheetMusic> = {
    title: 'components/SheetMusic',
    component: SheetMusic,
    tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof meta>

const musicalSequence = [
    "C4", "D4", "E4", "F4", "G4", "A4", "B4",
    "C5", "D5", "E5", "F5",
]

export const Test: Story = {
    render: () => <SheetMusic notes={musicalSequence} />,
}
const musicalSequenceFamima = [
    "B4", "G4", "D4", "G4", "A4", "D5", "Z4",
    "D5", "A4", "B4", "A4", "D4", "G4"
]

export const Famima: Story = {
    render: () => <SheetMusic notes={musicalSequenceFamima} />,
}
