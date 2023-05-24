import { useRouter } from 'next/router'
import { Report } from '../../../../src/domain/entities/report'
import React from 'react'
import {
  CircularProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow
} from '@mui/material'

type Props = {
  reports: Report[]
}

interface Column {
  id:
    | 'id'
    | 'dataOcorrencia'
    | 'localOcorrencia'
    | 'periodoOcorrencia'
    | 'veiculoFurtado'
  label: string
  minWidth?: number
  align?: 'right'
  format?: (value: number) => string
}

const columns: readonly Column[] = [
  {
    id: 'id',
    label: 'Id',
    minWidth: 100
  },
  { id: 'dataOcorrencia', label: 'Data Ocorrencia', minWidth: 170 },
  {
    id: 'periodoOcorrencia',
    label: 'Periodo Ocorrencia',
    minWidth: 100
  }
]

function ReportByPeriod({ reports }: Props) {
  const route = useRouter()

  const period = route.query.period

  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(100)

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }
  return (
    <>
      {reports ? (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
          <TableContainer>
            <Table
              sx={{ maxHeight: 740 }}
              stickyHeader
              aria-label="sticky table"
            >
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {reports
                  ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row: Report) => {
                    return (
                      <TableRow
                        onClick={() => route.push(`/reports/${row.id}`)}
                        hover
                        tabIndex={-1}
                        key={row.id.toString()}
                      >
                        {columns.map((column) => {
                          const value = row[column.id]
                          return (
                            <TableCell key={column.id} align={column.align}>
                              {column.format && typeof value === 'number'
                                ? column.format(value)
                                : value.toString()}
                            </TableCell>
                          )
                        })}
                      </TableRow>
                    )
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 50, 100]}
            component="div"
            count={reports?.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      ) : (
        <CircularProgress disableShrink />
      )}
    </>
  )
}

export default ReportByPeriod
