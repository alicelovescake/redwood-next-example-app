import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
  useForm,
} from '@redwoodjs/forms'
import { CellSuccessProps } from '@redwoodjs/web'
import { EditClassroomById } from 'types/graphql'
import { Autocomplete } from '../../shared'
type Props = {
  data: CellSuccessProps<EditClassroomById>
  onSave: (input: any, id: string) => void
  loading: boolean
}
const ClassroomForm = ({ data, onSave, loading }: Props) => {
  const formMethods = useForm()
  const onSubmit = (selectedData) => {
    console.log(selectedData)
    const input = { name: selectedData.name }
    if (selectedData['selected spells']?.length) {
      input['spellIds'] = selectedData['selected spells'].map(
        (spell) => spell.id
      )
    }
    if (selectedData['selected ingredients']?.length) {
      input['ingredientIds'] = selectedData['selected ingredients'].map(
        (ingredient) => ingredient.id
      )
    }
    if (selectedData['selected wizards']?.length) {
      input['wizardIds'] = selectedData['selected wizards'].map(
        (wizard) => wizard.id
      )
    }
    onSave(input, data?.classroom?.id)
  }

  const wizardOptions =
    data?.wizards?.map(({ id, firstName, lastName }) => ({
      id,
      name: `${firstName} ${lastName}`,
    })) ?? []
  const wizardDefaultOptions = data?.classroom?.wizards?.map(
    ({ id, firstName, lastName }) =>
      ({
        id,
        name: `${firstName} ${lastName}`,
      } ?? [])
  )
  console.log(wizardDefaultOptions)
  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} formMethods={formMethods}>
        <FormError
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
        <FieldError name="name" className="rw-field-error" />

        <Label
          name="ingredients"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Wizards enrolled in class
        </Label>
        {data?.wizards?.length && (
          <Autocomplete
            defaultValue={wizardDefaultOptions}
            options={wizardOptions}
            label="selected wizards"
            placeholder="Wizards"
            control={formMethods.control}
          />
        )}
        <FieldError name="wizards" className="rw-field-error" />

        <Label
          name="spell"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Spells taught in this class
        </Label>
        {data?.spells?.length && (
          <Autocomplete
            defaultValue={data.classroom.spells}
            options={data.spells}
            label="selected spells"
            placeholder="Spells"
            control={formMethods.control}
          />
        )}
        <FieldError name="spell" className="rw-field-error" />

        <Label
          name="ingredients"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Ingredients needed for class
        </Label>
        {data?.ingredients?.length && (
          <Autocomplete
            defaultValue={data.classroom.ingredients}
            options={data.ingredients}
            label="selected ingredients"
            placeholder="Ingredients"
            control={formMethods.control}
          />
        )}
        <FieldError name="ingredients" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default ClassroomForm
