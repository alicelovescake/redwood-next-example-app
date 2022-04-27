import { Wizard } from 'types/graphql'
import { ProfileCard } from './ProfileCard'

export function WizardList({ wizards }: { wizards: Wizard[] }) {
  return (
    <>
      {wizards.map((wizard) => (
        <ProfileCard wizard={wizard} />
      ))}
    </>
  )
}
