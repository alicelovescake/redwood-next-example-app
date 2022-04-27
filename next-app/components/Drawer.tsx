import {
  Box,
  Drawer as MUIDrawer,
  Toolbar,
  Divider,
  List,
  ListItem,
  ListItemText,
} from '@mui/material'
import { Options } from '../pages'

type Props = {
  options: Options
  handleOnClick: (option: string) => void
}

export function Drawer({ options, handleOnClick }: Props) {
  return (
    <MUIDrawer
      sx={{
        width: '240px',
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: '240px',
          boxSizing: 'border-box',
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Toolbar />
      <Divider />
      <List>
        {Object.keys(options).map((key, index) => (
          <ListItem button key={key} onClick={() => handleOnClick(key)}>
            <ListItemText primary={options[key].label} />
          </ListItem>
        ))}
      </List>
    </MUIDrawer>
  )
}
