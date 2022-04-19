import type { EditWizardById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'

import WizardForm from 'src/components/Wizard/WizardForm'

export const QUERY = gql`
  query EditWizardById($id: String!) {
    wizard: wizard(id: $id) {
      id
      firstName
      lastName
      houseId
    }
  }
`
const UPDATE_WIZARD_MUTATION = gql`
  mutation UpdateWizardMutation($id: String!, $input: UpdateWizardInput!) {
    updateWizard(id: $id, input: $input) {
      id
      firstName
      lastName
      houseId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ wizard }: CellSuccessProps<EditWizardById>) => {
  const [updateWizard, { loading, error }] = useMutation(UPDATE_WIZARD_MUTATION, {
    onCompleted: () => {
      toast.success('Wizard updated')
      navigate(routes.wizards())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input, id) => {
    updateWizard({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit Wizard {wizard.id}</h2>
      </header>
      <div className="rw-segment-main">
        <WizardForm wizard={wizard} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
