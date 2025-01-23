import { Meta, StoryObj } from '@storybook/react'
import { DQNameInput } from '.'

const meta: Meta<typeof DQNameInput> = {
    component: DQNameInput,
    tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
    render() {
        return (
            <DQNameInput onChangeScreen={() => { }} />
        )
    },
}
