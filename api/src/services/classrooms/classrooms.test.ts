import {
  classrooms,
  classroom,
  createClassroom,
  updateClassroom,
  deleteClassroom,
} from './classrooms'
import type { StandardScenario } from './classrooms.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('classrooms', () => {
  scenario('returns all classrooms', async (scenario: StandardScenario) => {
    const result = await classrooms()

    expect(result.length).toEqual(Object.keys(scenario.classroom).length)
  })

  scenario('returns a single classroom', async (scenario: StandardScenario) => {
    const result = await classroom({ id: scenario.classroom.one.id })

    expect(result).toEqual(scenario.classroom.one)
  })

  scenario('creates a classroom', async () => {
    const result = await createClassroom({
      input: { name: 'String' },
    })

    expect(result.name).toEqual('String')
  })

  scenario('updates a classroom', async (scenario: StandardScenario) => {
    const original = await classroom({ id: scenario.classroom.one.id })
    const result = await updateClassroom({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a classroom', async (scenario: StandardScenario) => {
    const original = await deleteClassroom({ id: scenario.classroom.one.id })
    const result = await classroom({ id: original.id })

    expect(result).toEqual(null)
  })
})
