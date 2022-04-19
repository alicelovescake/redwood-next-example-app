import {
  wizards,
  wizard,
  createWizard,
  updateWizard,
  deleteWizard,
} from './wizards'
import type { StandardScenario } from './wizards.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('wizards', () => {
  scenario('returns all wizards', async (scenario: StandardScenario) => {
    const result = await wizards()

    expect(result.length).toEqual(Object.keys(scenario.wizard).length)
  })

  scenario('returns a single wizard', async (scenario: StandardScenario) => {
    const result = await wizard({ id: scenario.wizard.one.id })

    expect(result).toEqual(scenario.wizard.one)
  })

  scenario('creates a wizard', async () => {
    const result = await createWizard({
      input: { firstName: 'String9210076', lastName: 'String' },
    })

    expect(result.firstName).toEqual('String9210076')
    expect(result.lastName).toEqual('String')
  })

  scenario('updates a wizard', async (scenario: StandardScenario) => {
    const original = await wizard({ id: scenario.wizard.one.id })
    const result = await updateWizard({
      id: original.id,
      input: { firstName: 'String55605872' },
    })

    expect(result.firstName).toEqual('String55605872')
  })

  scenario('deletes a wizard', async (scenario: StandardScenario) => {
    const original = await deleteWizard({ id: scenario.wizard.one.id })
    const result = await wizard({ id: original.id })

    expect(result).toEqual(null)
  })
})
