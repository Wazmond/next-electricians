import { ImageListItem as MUIImageListItem } from '@mui/material'
import { PropsWithChildren } from 'react'

export const ImageListItem = ({ children }: PropsWithChildren) => {
  return <MUIImageListItem>{children}</MUIImageListItem>
}
