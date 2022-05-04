import {
  Form,
  FormError,
  FieldError,
  Label,
  Controller,
  useForm,
} from '@redwoodjs/forms'

import { Stack, Typography, Button, Box, TextField } from '@mui/material'
import * as wizards from '../graphql-client/wizards'
import { CreateWizardInput } from 'types/graphql'

export const WizardForm = () => {
  const formMethods = useForm()
  const onSubmit = async (input: CreateWizardInput) => {
    console.log(input)
    return
    await wizards.create(input)
  }

  return (
    <Box>
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
