import { StoryObj, Meta } from '@storybook/react'
import { Button, ButtonProps } from '@ds-base/react-example'

export default {
  title: 'Button',
  component: Button,
} as Meta<ButtonProps>

export const Small: StoryObj<ButtonProps> = {
  args: {
    size: 'small',
    children: 'Enviar',
  },
}
export const Large: StoryObj<ButtonProps> = {
  args: {
    size: 'large',
    children: 'Enviar',
  },
}
