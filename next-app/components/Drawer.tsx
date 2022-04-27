import {
  Box,
  Drawer as MUIDrawer,
  Toolbar,
  Divider,
  List,
  ListItem,
  ListItemText,
} from '@mui/material'

export function Drawer() {
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
        {['Enroll', 'My Classes', 'My Schoolmates'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </MUIDrawer>
  )
}
