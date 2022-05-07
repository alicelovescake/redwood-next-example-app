import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardHeader,
  Avatar,
  List,
  ListItem,
} from '@mui/material'
import { House } from '../../web/types/graphql'

type Props = {
  selected: boolean
  house: House
}

export function HouseCard({ house, selected }: Props) {
  const url = `/images/${house.name}.jpeg`
  console.log(selected)
  return (
    <>
      <Card
        sx={{
          height: '2000px',
          width: '250px',
          margin: '10px',
          borderColor: selected ? '#650000' : undefined,
          border: selected ? 10 : undefined,
        }}
      >
        <CardHeader
          title={house.name}
          avatar={
            <Avatar src="/images/hat2.png" sx={{ width: 50, height: 50 }} />
          }
        />
        <CardMedia component="img" src={url} height="300" width="30" />

        <CardContent>
          <Typography variant="h6" color="text.secondary">
            {'House Details'}
          </Typography>
          <Typography variant="body2" component={'span'} color="text.secondary">
            <div>{`Founder: ${house.founder}`}</div>
            <div>{`Ghost: ${house.ghost}`}</div>
            <div>{`Colors: ${house.houseColours}`}</div>
            <div>{`Element: ${house.element}`}</div>
          </Typography>
        </CardContent>
      </Card>
    </>
  )
}
