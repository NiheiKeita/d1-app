import { Meta, StoryObj } from '@storybook/react'
import { DragonQuestTitle } from '.'

const meta: Meta<typeof DragonQuestTitle> = {
    component: DragonQuestTitle,
    tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
    render() {
        return (
            <DragonQuestTitle />
        )
    },
}
