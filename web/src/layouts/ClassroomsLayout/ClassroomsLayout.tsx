import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

type ClassroomLayoutProps = {
  children: React.ReactNode
}

const ClassroomsLayout = ({ children }: ClassroomLayoutProps) => {
  return (
    <div className="rw-scaffold">
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link
            to={routes.classrooms()}
            className="rw-link"
          >
            Classrooms
          </Link>
        </h1>
        <Link
          to={routes.newClassroom()}
          className="rw-button rw-button-green"
        >
          <div className="rw-button-icon">+</div> New Classroom
        </Link>
      </header>
      <main className="rw-main">{children}</main>
    </div>
  )
}

export default ClassroomsLayout
