import {
  Table,
  TableContainer,
  Paper,
  TableHead,
  TableCell,
  styled,
  tableCellClasses,
  TableRow,
  TableBody,
  Button,
  Box,
} from '@mui/material'
import { useState } from 'react'
import { Classroom } from 'types/graphql'

import * as classroom from '../graphql-client/classrooms'
import { Alert } from '.'

const StyledTableCell = styled(TableCell)({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#1776d1',
    color: 'white',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
})

const StyledTableRow = styled(TableRow)({
  '&:nth-of-type(odd)': {
    backgroundColor: '#cccccc',
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
})
export function ClassList({ classes }: { classes: Classroom[] }) {
  const [errorAlertOn, setErrorAlertOn] = useState(false)
  const [successAlertOn, setSuccessAlertOn] = useState(false)

  const handleOnClick = async (classId: string) => {
    const wizardId = localStorage.getItem('wizardId')
    if (!wizardId) {
      setErrorAlertOn(true)
      return
    }
    const result = await classroom.update(classId, { wizardIds: [wizardId] })
    if (result) {
      setSuccessAlertOn(true)
    }
  }
  return (
    <Box>
      <Alert
        text="Please register as a new wizard before enrolling in a class"
        type="error"
        alertOn={errorAlertOn}
        setAlertOn={setErrorAlertOn}
      />
      <Alert
        text="Success! You are now enrolled"
        type="success"
        alertOn={successAlertOn}
        setAlertOn={setSuccessAlertOn}
      />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="classroom table">
          <TableHead>
            <StyledTableCell>Class Name</StyledTableCell>
            <StyledTableCell align="right"># Wizards Enrolled</StyledTableCell>
            <StyledTableCell align="right">
              Spells Covered In Class
            </StyledTableCell>
            <StyledTableCell align="right">Ingredients to prep</StyledTableCell>
            <StyledTableCell align="right">Action</StyledTableCell>
          </TableHead>
          <TableBody>
            {classes.map((classroom: Classroom) => (
              <StyledTableRow key={classroom.name}>
                <StyledTableCell component="th" scope="row">
                  {classroom.name}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {classroom.wizards?.length ?? 0}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {' '}
                  {classroom.spells.map((spell) => spell?.name).join(', ') ??
                    'no spells set yet'}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {classroom.ingredients
                    ?.map((ingredient) => ingredient?.name)
                    .join(', ') ?? 'no ingredients set yet'}
                </StyledTableCell>
                <StyledTableCell align="right">
                  <Button onClick={() => handleOnClick(classroom.id)}>
                    Enroll now
                  </Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}
