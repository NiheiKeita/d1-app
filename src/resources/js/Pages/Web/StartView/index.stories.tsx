import { Meta, StoryObj } from '@storybook/react'
import { StartView } from '.'

const meta: Meta<typeof StartView> = {
    component: StartView,
    tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof meta>

export const Test: Story = {
    play: async () => {
    },
}
