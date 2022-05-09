import { ImageListItem, ImageList, Button, Stack } from '@mui/material'
import { useState } from 'react'
import { House } from 'types/graphql'
import { HouseCard } from './HouseCard'
import * as wizards from '../graphql-client/wizards'
import { Alert } from './Alert'

export function HouseList({ houses }: { houses: House[] }) {
  const [sortedIdx, setSortedIdx] = useState<number>(0)
  const [successAlertOn, setSuccessAlertOn] = useState(false)

  const handleOnClick = () => {
    const index = Math.floor(Math.random() * 4)
    setSortedIdx(index)
    setSuccessAlertOn(true)
    const wizardId = localStorage.getItem('wizardId')
    if (wizardId && sortedIdx) {
      wizards.update(wizardId, { houseId: houses[sortedIdx].id })
    }
  }

  return (
    <>
      <Alert
        type="success"
        text={`Congratulations! You're a ${houses[
          sortedIdx
        ].name.toUpperCase()}`}
        alertOn={successAlertOn}
        setAlertOn={setSuccessAlertOn}
      />
      <ImageList
        sx={{ width: 'full', height: 'full' }}
        cols={4}
        rowHeight={540}
      >
        {houses.map((house, idx) => (
          <ImageListItem key={house.id}>
            <HouseCard house={house} selected={sortedIdx === idx} />
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
