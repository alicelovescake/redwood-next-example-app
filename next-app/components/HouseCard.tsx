import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardHeader,
  Avatar,
  Stack,
} from '@mui/material'
import { House } from 'types/graphql'

export function HouseCard({ house }: { house: House }) {
  const url = `/images/${house.name}.jpeg`
  return (
    <Card sx={{ height: '2000px', width: '250px', margin: '10px' }}>
      <CardHeader
        title={house.name}
        subheader={`Ghost: ${house.ghost}`}
        avatar={
          <Avatar src="/images/hat2.png" sx={{ width: 50, height: 50 }} />
        }
      />
      <CardMedia component="img" src={url} height="300" width="30" />

      <CardContent>
        <Typography variant="h6" color="text.secondary">
          {'House Details'}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <div>{`Founder: ${house.founder}`}</div>
          <div>{`Colors: ${house.houseColours}`}</div>
          <div>{`Element: ${house.element}`}</div>
        </Typography>
      </CardContent>
    </Card>
  )
}
