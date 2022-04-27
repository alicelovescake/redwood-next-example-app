import { Card, CardMedia, CardContent, Typography } from '@mui/material'
import { Wizard } from 'types/graphql'
import Image from 'next/image'

export function ProfileCard({ wizard }: { wizard: Wizard }) {
  const url = `/images/${wizard.firstName}-${wizard.lastName}.jpeg`
  return (
    <Card>
      <CardMedia component="img" src={url} height="300" width="100" />

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {wizard.firstName}
        </Typography>
      </CardContent>
    </Card>
  )
}
