import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import ClassroomForm from 'src/components/Classroom/ClassroomForm'

const CREATE_CLASSROOM_MUTATION = gql`
  mutation CreateClassroomMutation($input: CreateClassroomInput!) {
    createClassroom(input: $input) {
      id
    }
  }
`

const NewClassroom = () => {
  const [createClassroom, { loading, error }] = useMutation(
    CREATE_CLASSROOM_MUTATION,
    {
      onCompleted: () => {
        toast.success('Classroom created')
        navigate(routes.classrooms())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input) => {
    createClassroom({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Class</h2>
      </header>
      <div className="rw-segment-main">
        <ClassroomForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewClassroom
