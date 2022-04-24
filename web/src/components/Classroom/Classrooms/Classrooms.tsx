import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes } from '@redwoodjs/router'

import { QUERY } from 'src/components/Classroom/ClassroomsCell'

const DELETE_CLASSROOM_MUTATION = gql`
  mutation DeleteClassroomMutation($id: String!) {
    deleteClassroom(id: $id) {
      id
    }
  }
`

const MAX_STRING_LENGTH = 150

const truncate = (text) => {
  let output = text
  if (text && text.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...'
  }
  return output
}

const ClassroomsList = ({ classrooms }) => {
  const [deleteClassroom] = useMutation(DELETE_CLASSROOM_MUTATION, {
    onCompleted: () => {
      toast.success('Classroom deleted')
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
    if (confirm('Are you sure you want to delete classroom ' + id + '?')) {
      deleteClassroom({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Name</th>
            <th># of Wizards Enrolled</th>
            <th>Spells Covered In Class</th>
            <th>Ingredients to prep</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {classrooms.map((classroom) => (
            <tr key={classroom.id}>
              <td>{truncate(classroom.name)}</td>
              <td>{classroom.wizards?.length ?? 0}</td>
              <td>
                {classroom.spells?.map((spell) => spell.name).join(', ') ??
                  'no spells set yet'}
              </td>
              <td>
                {classroom.ingredients
                  ?.map((ingredient) => ingredient.name)
                  .join(', ') ?? 'no ingredients set yet'}
              </td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.classroom({ id: classroom.id })}
                    title={'Show class ' + classroom.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editClassroom({ id: classroom.id })}
                    title={'Edit class ' + classroom.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete class ' + classroom.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(classroom.id)}
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

export default ClassroomsList
