import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes, navigate } from '@redwoodjs/router'
import { FindClassroomById } from 'types/graphql'

const DELETE_CLASSROOM_MUTATION = gql`
  mutation DeleteClassroomMutation($id: String!) {
    deleteClassroom(id: $id) {
      id
    }
  }
`

const Classroom = ({
  classroom,
}: {
  classroom: FindClassroomById['classroom']
}) => {
  const [deleteClassroom] = useMutation(DELETE_CLASSROOM_MUTATION, {
    onCompleted: () => {
      toast.success('Classroom deleted')
      navigate(routes.classrooms())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete classroom ' + id + '?')) {
      deleteClassroom({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">Class Detail</h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Name</th>
              <td>{classroom.name}</td>
            </tr>
            <tr>
              <th># of Wizards Enrolled</th>
              <td>{classroom.wizards?.length ?? 0}</td>
            </tr>
            <tr>
              <th>Spells Covered In Class</th>
              <td>
                {classroom.spells?.map((spell) => spell.name).join(', ') ??
                  'no spells set yet'}
              </td>
            </tr>
            <tr>
              <th>Ingredients to prep</th>
              <td>
                {classroom.ingredients
                  ?.map((ingredient) => ingredient.name)
                  .join(', ') ?? 'no ingredients set yet'}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editClassroom({ id: classroom.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(classroom.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Classroom
