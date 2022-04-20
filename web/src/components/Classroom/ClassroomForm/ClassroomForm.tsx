import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
  SelectField,
} from '@redwoodjs/forms'

const ClassroomForm = ({ data }) => {
  console.log(data)
  const onSubmit = (selectedData) => {
    data.onSave(selectedData, data?.classroom?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={data.error}>
        <FormError
          error={data.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="name"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Name
        </Label>

        <TextField
          name="name"
          defaultValue={data.classroom?.name}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        {data?.spells?.length && (
          <SelectField name="spells" multiple>
            {data.spells.map((spell) => (
              <option key={spell.id}>{spell.name}</option>
            ))}
          </SelectField>
        )}

        <FieldError name="name" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={data.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default ClassroomForm
