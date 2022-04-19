import ClassroomCell from 'src/components/Classroom/ClassroomCell'

type ClassroomPageProps = {
  id: string
}

const ClassroomPage = ({ id }: ClassroomPageProps) => {
  return <ClassroomCell id={id} />
}

export default ClassroomPage
