import { ImageList as MUIImageList } from '@mui/material'
import type { ReactNode } from 'react'

interface Props {
  children: ReactNode
  cols: number
  rowHeight: number
}

export const ImageList = ({ children, cols, rowHeight }: Props) => {
  return (
    <MUIImageList cols={cols} rowHeight={rowHeight}>
      {children as NonNullable<ReactNode>}
    </MUIImageList>
  )
}
