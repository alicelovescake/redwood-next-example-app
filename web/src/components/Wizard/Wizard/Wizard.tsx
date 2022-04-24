import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes, navigate } from '@redwoodjs/router'

const DELETE_WIZARD_MUTATION = gql`
  mutation DeleteWizardMutation($id: String!) {
    deleteWizard(id: $id) {
      id
    }
  }
`

const Wizard = ({ wizard }) => {
  const [deleteWizard] = useMutation(DELETE_WIZARD_MUTATION, {
    onCompleted: () => {
      toast.success('Wizard deleted')
      navigate(routes.wizards())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete wizard ' + id + '?')) {
      deleteWizard({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Wizard {wizard.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{wizard.id}</td>
            </tr>
            <tr>
              <th>First name</th>
              <td>{wizard.firstName}</td>
            </tr>
            <tr>
              <th>Last name</th>
              <td>{wizard.lastName}</td>
            </tr>
            <tr>
              <th>House id</th>
              <td>{wizard.houseId}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editWizard({ id: wizard.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(wizard.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Wizard
