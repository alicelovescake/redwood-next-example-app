import { Box, AppBar, Toolbar, Typography } from '@mui/material'
import { useState } from 'react'

import { Drawer, ClassList } from 'components'
import * as classes from '../graphql-client/classrooms'
import * as wizards from '../graphql-client/wizards'
import { Wizard, Classroom } from 'types/graphql'

type Props = {
  wizards: Wizard[]
  classrooms: Classroom[]
}

export default function Home({ classrooms, wizards }: Props) {
  console.log({ classrooms, wizards })

  const [option, setOption] = useState()

  const SidebarOptions = {
    enroll: { label: 'Enroll' },
    classes: {
      label: 'Classes Available',
      component: <ClassList classes={classrooms} />,
    },
    wizards: { label: 'My Schoolmates' },
  }
  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - 240px)`, ml: '240px' }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Welcome to Hogwarts!
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer />
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <Toolbar />
        <Typography paragraph>Helloooooo</Typography>
      </Box>
    </Box>
  )
}

export async function getStaticProps() {
  const allClasses = await classes.get()
  const allWizards = await wizards.get()

  return {
    props: {
      classrooms: allClasses ?? [],
      wizards: allWizards ?? [],
    },
  }
}
