import { ComponentProps, ElementType } from 'react'

import { styled } from '../styles'

export const Box = styled('div', {
  padding: '$4',
  borderRadius: '$md',
  border: '1px solid $gray600',
  backgroundColor: '$gray800',
  width: '100%',
})

export interface BoxProps extends ComponentProps<typeof Box> {
  as?: ElementType
}

Box.displayName = 'Box'
