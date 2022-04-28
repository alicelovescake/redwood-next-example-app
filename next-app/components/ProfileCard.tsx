import { Card, CardMedia, CardContent, Typography } from '@mui/material'
import { Wizard } from 'types/graphql'

export function ProfileCard({ wizard }: { wizard: Wizard }) {
  const url = `/images/${wizard.firstName}-${wizard.lastName}.jpeg`
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
