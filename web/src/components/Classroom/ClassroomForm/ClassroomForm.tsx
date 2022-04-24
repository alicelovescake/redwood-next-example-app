import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
  useForm,
} from '@redwoodjs/forms'
import { Autocomplete } from '../../shared'

const ClassroomForm = (props) => {
  const formMethods = useForm()
  const { classroom, wizards, ingredients, spells } = props?.data ?? {
    classroom: null,
    wizards: null,
    ingredients: null,
    spells: null,
  }

  const onSubmit = ({ name, ingredientIds, wizardIds, spellIds }) => {
    const input = {
      name,
      spellIds: spellIds?.map((spell) => spell.id),
      ingredientIds: ingredientIds?.map((ingredient) => ingredient.id),
      wizardIds: wizardIds?.map((wizard) => wizard.id),
    }

    props.onSave(input, classroom?.id)
  }

  const wizardOptions =
    wizards?.map(({ id, firstName, lastName }) => ({
      id,
      name: `${firstName} ${lastName}`,
    })) ?? []

  const wizardDefaultOptions = classroom?.wizards?.map(
    ({ id, firstName, lastName }) =>
      ({
        id,
        name: `${firstName} ${lastName}`,
      } ?? [])
  )

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
          defaultValue={classroom?.name ?? ''}
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
        <Autocomplete
          defaultValue={wizardDefaultOptions}
          options={wizardOptions}
          label="select wizards"
          placeholder="Wizards"
          name="wizardIds"
          control={formMethods.control}
        />
        <FieldError name="wizards" className="rw-field-error" />

        <Label
          name="spell"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Spells taught in this class
        </Label>
        <Autocomplete
          defaultValue={classroom?.spells}
          options={spells ?? []}
          label="select spells"
          placeholder="Spells"
          control={formMethods.control}
          name="spellIds"
        />
        <FieldError name="spell" className="rw-field-error" />

        <Label
          name="ingredients"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Ingredients needed for class
        </Label>
        <Autocomplete
          defaultValue={classroom?.ingredients}
          options={ingredients ?? []}
          label="select ingredients"
          placeholder="Ingredients"
          control={formMethods.control}
          name="ingredientIds"
        />
        <FieldError name="ingredients" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default ClassroomForm
