// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route } from '@redwoodjs/router'
import WizardsLayout from 'src/layouts/WizardsLayout'
import ClassroomsLayout from 'src/layouts/ClassroomsLayout'

const Routes = () => {
  return (
    <Router>
      <Route path="/signup" page={SignupPage} name="signup" />
      <Route path="/" page={HomePage} name="home" />
      <Set wrap={WizardsLayout}>
        <Route path="/wizards/new" page={WizardNewWizardPage} name="newWizard" />
        <Route path="/wizards/{id}/edit" page={WizardEditWizardPage} name="editWizard" />
        <Route path="/wizards/{id}" page={WizardWizardPage} name="wizard" />
        <Route path="/wizards" page={WizardWizardsPage} name="wizards" />
      </Set>
      <Set wrap={ClassroomsLayout}>
        <Route path="/classrooms/new" page={ClassroomNewClassroomPage} name="newClassroom" />
        <Route path="/classrooms/{id}/edit" page={ClassroomEditClassroomPage} name="editClassroom" />
        <Route path="/classrooms/{id}" page={ClassroomClassroomPage} name="classroom" />
        <Route path="/classrooms" page={ClassroomClassroomsPage} name="classrooms" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
