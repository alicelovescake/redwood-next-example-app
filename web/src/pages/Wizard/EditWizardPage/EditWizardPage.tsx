import EditWizardCell from 'src/components/Wizard/EditWizardCell'

type WizardPageProps = {
  id: string
}

const EditWizardPage = ({ id }: WizardPageProps) => {
  return <EditWizardCell id={id} />
}

export default EditWizardPage
