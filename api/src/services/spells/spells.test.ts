import { spells, spell } from './spells'
import type { StandardScenario } from './spells.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('spells', () => {
  scenario('returns all spells', async (scenario: StandardScenario) => {
    const result = await spells()

    expect(result.length).toEqual(Object.keys(scenario.spell).length)
  })

  scenario('returns a single spell', async (scenario: StandardScenario) => {
    const result = await spell({ id: scenario.spell.one.id })

    expect(result).toEqual(scenario.spell.one)
  })
})
