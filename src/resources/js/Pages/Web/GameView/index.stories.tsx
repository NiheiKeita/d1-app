import { Meta, StoryObj } from '@storybook/react'
import { GameView } from '.'

const meta: Meta<typeof GameView> = {
    component: GameView,
    tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof meta>

export const Test: Story = {
    play: async () => {
    },
}
