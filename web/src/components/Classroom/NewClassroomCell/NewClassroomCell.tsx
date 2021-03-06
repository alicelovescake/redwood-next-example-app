import type { AvailableResources } from 'types/graphql'
import { CellFailureProps, CellSuccessProps, useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import ClassroomForm from 'src/components/Classroom/ClassroomForm'

export const QUERY = gql`
  query AvailableResources {
    ingredients {
      id
      name
    }
    spells: spells {
      id
      name
    }
    wizards: wizards {
      id
      firstName
      lastName
    }
  }
`

const CREATE_CLASSROOM_MUTATION = gql`
  mutation CreateClassroomMutation($input: CreateClassroomInput!) {
    createClassroom(input: $input) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = (data: CellSuccessProps<AvailableResources>) => {
  const [createClassroom, { loading }] = useMutation(
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
        <ClassroomForm data={data} onSave={onSave} loading={loading} />
      </div>
    </div>
  )
}
