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
import { Vehicle } from '../../../../src/domain/entities/vehicle'

type Props = {
  vehicle: Vehicle[]
}

interface Column {
  id:
    | 'anoFabricacao'
    | 'boletim'
    | 'cor'
    | 'emplacamento'
    | 'fabricante'
    | 'tipoVeiculo'
    | 'id'
    | 'modelo'
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
  { id: 'anoFabricacao', label: 'anoFabricacao', minWidth: 170 },
  {
    id: 'cor',
    label: 'cor',
    minWidth: 100
  },
  {
    id: 'fabricante',
    label: 'fabricante',
    minWidth: 100
  },
  {
    id: 'tipoVeiculo',
    label: 'tipoVeiculo',
    minWidth: 100
  },
  {
    id: 'modelo',
    label: 'modelo',
    minWidth: 100
  }
]

function VehicleList({ vehicle }: Props) {
  const route = useRouter()

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
      {vehicle ? (
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
                {vehicle
                  ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row: Vehicle) => {
                    return (
                      <TableRow
                        onClick={() =>
                          route.push(`/vehicle/plate/${row.emplacamento.plate}`)
                        }
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
            count={vehicle?.length}
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

export default VehicleList
