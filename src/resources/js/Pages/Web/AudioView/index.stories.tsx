import { Meta, StoryObj } from '@storybook/react'
import { AudioView } from '.'

const meta: Meta<typeof AudioView> = {
    title: 'views/Web/AudioView',
    component: AudioView,
    tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof meta>

export const Test: Story = {
    play: async () => {
    },
}
