import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import WizardForm from 'src/components/Wizard/WizardForm'

const CREATE_WIZARD_MUTATION = gql`
  mutation CreateWizardMutation($input: CreateWizardInput!) {
    createWizard(input: $input) {
      id
    }
  }
`

const NewWizard = () => {
  const [createWizard, { loading, error }] = useMutation(CREATE_WIZARD_MUTATION, {
    onCompleted: () => {
      toast.success('Wizard created')
      navigate(routes.wizards())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input) => {
    createWizard({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Wizard</h2>
      </header>
      <div className="rw-segment-main">
        <WizardForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewWizard
