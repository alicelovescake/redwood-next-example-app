import { Box, AppBar, Toolbar, Typography } from '@mui/material'
import { useState } from 'react'

import {
  Drawer,
  ClassList,
  WizardList,
  WizardForm,
  HouseList,
} from 'components'
import * as classes from '../graphql-client/classrooms'
import * as wizards from '../graphql-client/wizards'
import * as houses from '../graphql-client/houses'
import { Wizard, Classroom, House } from 'types/graphql'

type Props = {
  wizards: Wizard[]
  classrooms: Classroom[]
  houses: House[]
}

type Option = {
  label: string
  component: React.ReactElement
}

export type Options = Record<string, Option>

export default function Home({ classrooms, wizards, houses }: Props) {
  const [option, setOption] = useState('enroll')
  console.log(houses)

  const SidebarOptions: Options = {
    enroll: { label: 'Register', component: <WizardForm /> },
    classes: {
      label: 'Classes Available',
      component: <ClassList classes={classrooms} />,
    },
    wizards: {
      label: 'My Schoolmates',
      component: <WizardList wizards={wizards} />,
    },
    sorting: {
      label: 'Sorting Hat',
      component: <HouseList houses={houses} />,
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
            Welcome to Hogwarts School of Witchcraft and Wizardry!
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
  const allHouses = await houses.get()

  return {
    props: {
      classrooms: allClasses ?? [],
      wizards: allWizards ?? [],
      houses: allHouses ?? [],
    },
  }
}
