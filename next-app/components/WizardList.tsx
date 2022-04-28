import { Wizard } from 'types/graphql'
import { ProfileCard } from './ProfileCard'
import { ImageListItem, ImageList, Typography } from '@mui/material'

export function WizardList({ wizards }: { wizards: Wizard[] }) {
  return (
    <>
      <ImageList
        sx={{ width: 'full', height: 'full' }}
        cols={3}
        rowHeight={450}
      >
        {wizards.map((wizard) => (
          <ImageListItem key={wizard.id}>
            <ProfileCard wizard={wizard} />
          </ImageListItem>
        ))}
      </ImageList>
    </>
  )
}
