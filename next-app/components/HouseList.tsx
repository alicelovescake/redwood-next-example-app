import { ImageListItem, ImageList, Button, Stack } from '@mui/material'
import { useState } from 'react'
import { House } from 'types/graphql'
import { HouseCard } from './HouseCard'
import * as wizards from '../graphql-client/wizards'

export function HouseList({ houses }: { houses: House[] }) {
  const [sortedIdx, setSortedIdx] = useState<number | null>(null)

  const handleOnClick = () => {
    const index = Math.floor(Math.random() * 4)
    setSortedIdx(index)
    const wizardId = localStorage.getItem('wizardId')
    if (wizardId && sortedIdx) {
      wizards.update(wizardId, { houseId: houses[sortedIdx].id })
    }
  }

  return (
    <>
      <ImageList
        sx={{ width: 'full', height: 'full' }}
        cols={4}
        rowHeight={540}
      >
        {houses.map((house, idx) => (
          <ImageListItem key={house.id}>
            <HouseCard
              house={house}
              selected={sortedIdx ? sortedIdx === idx : false}
            />
          </ImageListItem>
        ))}
      </ImageList>
      <Stack sx={{ textAlign: 'center' }}>
        <Button variant="contained" onClick={handleOnClick}>
          Click me to get sorted!
        </Button>
      </Stack>
    </>
  )
}
