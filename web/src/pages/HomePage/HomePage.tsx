import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <h1>Welcome to Hogwarts School Registation System!</h1>
      <p>As an admin, you are able to:</p>
      <ul>
        <li>
          Create a new class: <Link to={routes.newClassroom()}>New Class</Link>
        </li>
        <li>
          View and manage current classes:{' '}
          <Link to={routes.classrooms()}>All Classes</Link>
        </li>
        <li>
          Register a new wizard:
          <Link to={routes.newWizard()}>New Wizard</Link>
        </li>
        <li>
          View and manage current wizards:{' '}
          <Link to={routes.wizards()}>All wizards</Link>
        </li>
      </ul>
    </>
  )
}

export default HomePage
