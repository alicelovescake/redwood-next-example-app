import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Controller,
  useForm,
} from '@redwoodjs/forms'

import { Stack, Typography, Button } from '@mui/material'
import * as wizards from '../graphql-client/wizards'
import { CreateWizardInput } from 'types/graphql'

export const WizardForm = () => {
  const formMethods = useForm()
  const onSubmit = async (input: CreateWizardInput) => {
    await wizards.create(input)
  }

  return (
    <Form formMethods={formMethods}>
      <FormError />
      <Stack spacing={2}>
        <Typography variant="h5">
          <Label name="firstName">First name</Label>
        </Typography>

        <TextField name="firstName" validation={{ required: true }} />

        <FieldError name="firstName" />
        <Typography variant="h5">
          <Label
            name="lastName"
            className="rw-label"
            errorClassName="rw-label rw-label-error"
          >
            Last name
          </Label>
        </Typography>
        <TextField name="lastName" validation={{ required: true }} />
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
            Save
          </Button>
        )}
      />
    </Form>
  )
}
