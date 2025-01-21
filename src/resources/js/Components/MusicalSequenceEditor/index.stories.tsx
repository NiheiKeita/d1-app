import { Meta, StoryObj } from '@storybook/react'
import { MusicalSequenceEditor } from '.'

const meta: Meta<typeof MusicalSequenceEditor> = {
    title: 'components/MusicalSequenceEditor',
    component: MusicalSequenceEditor,
    tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
    render() {
        return (
            <MusicalSequenceEditor />
        )
    },
}
