import { Card, CardMedia, CardContent, Typography } from '@mui/material'
import { Wizard } from 'types/graphql'
const savedWizards = [
  'Draco-Malfoy',
  'Fred-Weasley',
  'Ginny-Weasley',
  'Harmione-Granger',
  'Harry-Potter',
  'Luna-Lovegood',
  'Neville-Longbottom',
  'Ron-Weasley',
  'Tom-Riddle',
]
export function ProfileCard({ wizard }: { wizard: Wizard }) {
  const imageName = savedWizards.includes(
    `${wizard.firstName}-${wizard.lastName}`
  )
    ? `${wizard.firstName}-${wizard.lastName}`
    : 'New-Wizard'
  const url = `/images/${imageName}.jpeg`
  return (
    <Card sx={{ height: '400px', width: '230px', margin: '20px' }}>
      <CardMedia component="img" src={url} height="300" width="100" />

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {wizard.firstName} {wizard.lastName}
        </Typography>
      </CardContent>
    </Card>
  )
}
