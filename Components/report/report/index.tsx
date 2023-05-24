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

type Props = {
  report: LoadReportByIdView
}

function ReportById({ report }: Props) {
  const {
    dataOcorrencia,
    id,
    localOcorrencia,
    partes,
    periodoOcorrencia,
    veiculoFurtado
  } = report

  const { anoFabricacao, cor, emplacamento, fabricante, tipoVeiculo, modelo } =
    veiculoFurtado

  const { city, plate, state } = emplacamento

  const route = useRouter()

  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={'🔽'}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <SendIcon />
          <Typography> Boletim</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List
            sx={{ width: '100%', bgcolor: 'background.paper' }}
            component="nav"
            aria-labelledby="nested-list-subheader"
          >
            <ListItemButton>
              <ListItemText primary={id} />
            </ListItemButton>

            <ListItemButton>
              <ListItemText primary={dataOcorrencia} />
            </ListItemButton>

            <ListItemButton
              onClick={() => route.push(`/reports/period/${periodoOcorrencia}`)}
            >
              <ListItemText primary={periodoOcorrencia} />
            </ListItemButton>
          </List>
        </AccordionDetails>
        {localOcorrencia?.id && (
          <Accordion>
            <AccordionSummary
              expandIcon={'🔽'}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <SendIcon />
              <Typography> Endereço</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <List
                sx={{ width: '100%', bgcolor: 'background.paper' }}
                component="nav"
                aria-labelledby="nested-list-subheader"
              >
                <ListItemButton>
                  <ListItemText primary={localOcorrencia.id} />
                </ListItemButton>
                <ListItemButton
                  onClick={() =>
                    route.push(`/reports/city/${localOcorrencia.city}`)
                  }
                >
                  <ListItemText primary={localOcorrencia.city} />
                </ListItemButton>
                <ListItemButton onClick={() => route.push('/vehicles')}>
                  <ListItemText primary={localOcorrencia.neighborhood} />
                </ListItemButton>
                <ListItemButton>
                  <ListItemText primary={localOcorrencia.number} />
                </ListItemButton>
                <ListItemButton>
                  <ListItemText primary={localOcorrencia.publicPlace} />
                </ListItemButton>
                <ListItemButton>
                  <ListItemText primary={localOcorrencia.state} />
                </ListItemButton>
              </List>
            </AccordionDetails>
          </Accordion>
        )}
        {veiculoFurtado?.id && (
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
                  <ListItemText primary={veiculoFurtado.id} />
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

        {partes?.id && (
          <Accordion>
            <AccordionSummary
              expandIcon={'🔽'}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <SendIcon />
              <Typography> Partes </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <List
                sx={{ width: '100%', bgcolor: 'background.paper' }}
                component="nav"
                aria-labelledby="nested-list-subheader"
              >
                <ListItemButton>
                  <ListItemText primary={partes.id} />
                </ListItemButton>
                <ListItemButton>
                  <ListItemText primary={partes.email} />
                </ListItemButton>
                <ListItemButton>
                  <ListItemText primary={partes.name} />
                </ListItemButton>
              </List>
            </AccordionDetails>
          </Accordion>
        )}
      </Accordion>
    </div>
  )
}

export default ReportById
