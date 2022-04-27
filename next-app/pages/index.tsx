import { Box, AppBar, Toolbar, Typography } from '@mui/material'
import { useState, ReactElement, ElementType, ComponentType, FC } from 'react'

import { Drawer, ClassList } from 'components'
import * as classes from '../graphql-client/classrooms'
import * as wizards from '../graphql-client/wizards'
import { Wizard, Classroom } from 'types/graphql'

type Props = {
  wizards: Wizard[]
  classrooms: Classroom[]
}

type Option = {
  label: string
  component: React.ReactElement
}

export type Options = Record<string, Option>

export default function Home({ classrooms, wizards }: Props) {
  console.log({ classrooms, wizards })

  const [option, setOption] = useState('enroll')

  const SidebarOptions: Options = {
    enroll: { label: 'Enroll', component: <ClassList classes={classrooms} /> },
    classes: {
      label: 'Classes Available',
      component: <ClassList classes={classrooms} />,
    },
    wizards: {
      label: 'My Schoolmates',
      component: <ClassList classes={classrooms} />,
    },
    sorting: {
      label: 'Get Sorted',
      component: <ClassList classes={classrooms} />,
    },
  }

  const handleOnClick = (option: string) => {
    setOption(option)
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - 240px)`, ml: '240px' }}
      >
        <Toolbar sx={{ backgroundColor: '#650000' }}>
          <Typography variant="h6" noWrap component="div">
            Welcome to Hogwarts!
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer options={SidebarOptions} handleOnClick={handleOnClick} />
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <Toolbar />
        {SidebarOptions[option].component}
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
