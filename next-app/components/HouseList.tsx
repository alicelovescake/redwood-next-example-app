import { ImageListItem, ImageList } from '@mui/material'
import { House } from 'types/graphql'
import { HouseCard } from './HouseCard'

export function HouseList({ houses }: { houses: House[] }) {
  return (
    <ImageList sx={{ width: 'full', height: 'full' }} cols={4} rowHeight={540}>
      {houses.map((house) => (
        <ImageListItem key={house.id}>
          <HouseCard house={house} />
        </ImageListItem>
      ))}
    </ImageList>
  )
}
