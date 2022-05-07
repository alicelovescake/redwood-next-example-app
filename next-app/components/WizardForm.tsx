import {
  Form,
  FormError,
  FieldError,
  Controller,
  useForm,
} from '@redwoodjs/forms'

import { Stack, Typography, Button, Box, TextField } from '@mui/material'
import * as wizards from '../graphql-client/wizards'
import { CreateWizardInput } from '../../web/types/graphql'
import { Alert } from './Alert'
import { useState } from 'react'

export const WizardForm = () => {
  const [successAlertOn, setSuccessAlertOn] = useState(false)
  const formMethods = useForm()
  const onSubmit = async (input: CreateWizardInput) => {
    const id = await wizards.create(input)
    if (!id) return
    localStorage.setItem('wizardId', id)
    setSuccessAlertOn(true)
  }

  return (
    <Box width={300}>
      <Alert
        type="success"
        text="Success! You are now the newest wizard at Hogwarts"
        alertOn={successAlertOn}
        setAlertOn={setSuccessAlertOn}
      />
      <Typography sx={{ mb: 5 }} variant="h5">
        Register as a New Wizard!
      </Typography>
      <Form formMethods={formMethods}>
        <FormError />
        <Stack spacing={2}>
          <Controller
            name="firstName"
            render={({ field: { onChange, value } }) => (
              <TextField
                variant="filled"
                required
                label="First name"
                onChange={onChange}
                value={value}
              />
            )}
          />
          <FieldError name="firstName" />

          <Controller
            name="lastName"
            render={({ field: { onChange, value } }) => (
              <TextField
                variant="filled"
                required
                label="Last name"
                onChange={onChange}
                value={value}
              />
            )}
          />
          <FieldError name="lastName" />
        </Stack>

        <Controller
          name="Button"
          render={() => (
            <Button
              variant="contained"
              sx={{ my: 5 }}
              onClick={formMethods.handleSubmit(({ firstName, lastName }) =>
                onSubmit({ firstName, lastName })
              )}
            >
              Enroll
            </Button>
          )}
        />
      </Form>
    </Box>
  )
}
