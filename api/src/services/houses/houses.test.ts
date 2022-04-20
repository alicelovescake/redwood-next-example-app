import { houses, house } from './houses'
import type { StandardScenario } from './houses.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('houses', () => {
  scenario('returns all houses', async (scenario: StandardScenario) => {
    const result = await houses()

    expect(result.length).toEqual(Object.keys(scenario.house).length)
  })

  scenario('returns a single house', async (scenario: StandardScenario) => {
    const result = await house({ id: scenario.house.one.id })

    expect(result).toEqual(scenario.house.one)
  })
})
