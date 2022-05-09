import { ImageListItem, ImageList } from '@mui/material'
import { useEffect, useState } from 'react'
import { Wizard } from 'types/graphql'
import { ProfileCard } from './ProfileCard'
import * as wizards from '../graphql-client/wizards'

export function WizardList() {
  const [allWizards, setAllWizards] = useState<Wizard[]>([])

  useEffect(() => {
    const fetchWizards = async () => {
      const allWizards = await wizards.get()
      setAllWizards(allWizards)
    }
    fetchWizards().catch(console.error)
  }, [])

  return (
    <>
      <ImageList
        sx={{ width: 'full', height: 'full' }}
        cols={3}
        rowHeight={500}
      >
        {allWizards.map((wizard) => (
          <ImageListItem key={wizard.id}>
            <ProfileCard wizard={wizard} />
          </ImageListItem>
        ))}
      </ImageList>
    </>
  )
}
