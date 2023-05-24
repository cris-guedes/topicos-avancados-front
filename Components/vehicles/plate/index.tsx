import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  List,
  ListItemButton,
  ListItemText,
  Typography
} from '@mui/material'

import SendIcon from '@mui/icons-material/Send'

import { useRouter } from 'next/router'
import { LoadReportByIdView } from '../../../src/domain/useCases/loadReportById/loadReportsByIdView'
import { LoadVehiclesByPlateNumber } from '../../../src/domain/useCases/loadVehicleByPlateNumber/loadVehicleByPlateNumber'
import { LoadVehicleByPlateNumberView } from '../../../src/domain/useCases/loadVehicleByPlateNumber/loadVehicleByPlateNumberView'

type Props = {
  vehicle: LoadVehicleByPlateNumberView
}

function VehiclesByPlate({ vehicle }: Props) {
  const {
    anoFabricacao,
    cor,
    emplacamento,
    fabricante,
    id,
    modelo,
    tipoVeiculo
  } = vehicle

  const { city, plate, state } = emplacamento

  const route = useRouter()

  return (
    <div>
      {vehicle?.id && (
        <Accordion>
          <AccordionSummary
            expandIcon={'🔽'}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <SendIcon />
            <Typography> Veiculo </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <List
              sx={{ width: '100%', bgcolor: 'background.paper' }}
              component="nav"
              aria-labelledby="nested-list-subheader"
            >
              <ListItemButton>
                <ListItemText primary={vehicle.id} />
              </ListItemButton>
              <ListItemButton>
                <ListItemText primary={anoFabricacao} />
              </ListItemButton>
              <ListItemButton>
                <ListItemText
                  onClick={() => route.push(`/vehicles/cor/${cor}`)}
                  primary={cor}
                />
              </ListItemButton>
              <ListItemButton>
                <ListItemText primary={fabricante} />
              </ListItemButton>
              <ListItemButton>
                <ListItemText primary={modelo} />
              </ListItemButton>
              <ListItemButton>
                <ListItemText primary={tipoVeiculo} />
              </ListItemButton>
            </List>

            {emplacamento?.id && (
              <Accordion>
                <AccordionSummary
                  expandIcon={'🔽'}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <SendIcon />
                  <Typography> Emplacamento </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <List
                    sx={{ width: '100%', bgcolor: 'background.paper' }}
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                  >
                    <ListItemButton>
                      <ListItemText primary={emplacamento.id} />
                    </ListItemButton>
                    <ListItemButton>
                      <ListItemText primary={city} />
                    </ListItemButton>
                    <ListItemButton>
                      <ListItemText
                        onClick={() => route.push(`/vehicles/plate/${plate}`)}
                        primary={plate}
                      />
                    </ListItemButton>
                    <ListItemButton>
                      <ListItemText primary={state} />
                    </ListItemButton>
                  </List>
                </AccordionDetails>
              </Accordion>
            )}
          </AccordionDetails>
        </Accordion>
      )}
    </div>
  )
}

export default VehiclesByPlate
