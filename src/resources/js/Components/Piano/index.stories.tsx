import { Meta, StoryObj } from '@storybook/react'
import { Piano } from '.'

const meta: Meta<typeof Piano> = {
    component: Piano,
    tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof meta>

export const Test: Story = {
    args: {
        onClickKey: (value) => { console.log(value) },
    },
    render: (args) => <Piano {...args} />,
}
