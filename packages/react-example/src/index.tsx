import { ComponentProps } from 'react'

import { styled } from './styles'

export const Button = styled('button', {
  fontFamily: '$default',
  backgroundColor: '$black',
  color: '$white',
  borderRadius: '$md',
  fontWeight: '$bold',
  variants: {
    size: {
      small: {
        fontSize: 14,
        padding: '$2 $4',
      },
      large: {
        fontSize: 16,
        padding: '$3 $6',
      },
    },
  },
  defaultVariants: {
    size: 'large',
  },
})

export type ButtonProps = ComponentProps<typeof Button>
