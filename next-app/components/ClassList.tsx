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
} from '@mui/material'
import { Classroom } from 'types/graphql'

const StyledTableCell = styled(TableCell)({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: 'darkslategray',
    color: 'aliceblue',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
})

const StyledTableRow = styled(TableRow)({
  '&:nth-of-type(odd)': {
    backgroundColor: 'gray',
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
})
export function ClassList({ classes }: { classes: Classroom[] }) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="classroom table">
        <TableHead>
          <StyledTableCell>Class Name</StyledTableCell>
          <StyledTableCell align="right"># Wizards Enrolled</StyledTableCell>
          <StyledTableCell align="right">
            Spells Covered In Class
          </StyledTableCell>
          <StyledTableCell align="right">Ingredients to prep</StyledTableCell>
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
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
