import humanize from 'humanize-string'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes } from '@redwoodjs/router'

import { QUERY } from 'src/components/Wizard/WizardsCell'

const DELETE_WIZARD_MUTATION = gql`
  mutation DeleteWizardMutation($id: String!) {
    deleteWizard(id: $id) {
      id
    }
  }
`

const MAX_STRING_LENGTH = 150

const formatEnum = (values: string | string[] | null | undefined) => {
  if (values) {
    if (Array.isArray(values)) {
      const humanizedValues = values.map((value) => humanize(value))
      return humanizedValues.join(', ')
    } else {
      return humanize(values as string)
    }
  }
}

const truncate = (text) => {
  let output = text
  if (text && text.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...'
  }
  return output
}

const jsonTruncate = (obj) => {
  return truncate(JSON.stringify(obj, null, 2))
}

const timeTag = (datetime) => {
  return (
    datetime && (
      <time dateTime={datetime} title={datetime}>
        {new Date(datetime).toUTCString()}
      </time>
    )
  )
}

const checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />
}

const WizardsList = ({ wizards }) => {
  const [deleteWizard] = useMutation(DELETE_WIZARD_MUTATION, {
    onCompleted: () => {
      toast.success('Wizard deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete wizard ' + id + '?')) {
      deleteWizard({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>First name</th>
            <th>Last name</th>
            <th>House id</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {wizards.map((wizard) => (
            <tr key={wizard.id}>
              <td>{truncate(wizard.id)}</td>
              <td>{truncate(wizard.firstName)}</td>
              <td>{truncate(wizard.lastName)}</td>
              <td>{truncate(wizard.houseId)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.wizard({ id: wizard.id })}
                    title={'Show wizard ' + wizard.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editWizard({ id: wizard.id })}
                    title={'Edit wizard ' + wizard.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete wizard ' + wizard.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(wizard.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default WizardsList
