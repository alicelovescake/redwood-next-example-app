import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
} from '@redwoodjs/forms'

import { Stack, Paper, styled, Typography } from '@mui/material'

export const WizardForm = () => {
  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit}>
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
        <div>
          <Submit>Save</Submit>
        </div>
      </Form>
    </div>
  )
}
