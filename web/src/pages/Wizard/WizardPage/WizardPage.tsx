import WizardCell from 'src/components/Wizard/WizardCell'

type WizardPageProps = {
  id: string
}

const WizardPage = ({ id }: WizardPageProps) => {
  return <WizardCell id={id} />
}

export default WizardPage
