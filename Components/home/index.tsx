import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Typography
} from '@mui/material'
import { Header, Wrapper } from './styles'

import DraftsIcon from '@mui/icons-material/Drafts'
import SendIcon from '@mui/icons-material/Send'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import StarBorder from '@mui/icons-material/StarBorder'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import { useState } from 'react'
import { useRouter } from 'next/router'

function Home() {
  const route = useRouter()

  return (
    <Wrapper>
      <Header>Catalogo de serviços</Header>
      <Accordion>
        <AccordionSummary
          expandIcon={'🔽'}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Boletins De Ocorrencia </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List
            sx={{ width: '100%', bgcolor: 'background.paper' }}
            component="nav"
            aria-labelledby="nested-list-subheader"
          >
            <ListItemButton onClick={() => route.push('/reports/city')}>
              <SendIcon />
              <ListItemText primary=" Boletins por Cidade" />
            </ListItemButton>
            <ListItemButton onClick={() => route.push('/reports/period')}>
              <SendIcon />
              <ListItemText primary=" Boletins por Periodo" />
            </ListItemButton>
            <ListItemButton onClick={() => route.push('/reports')}>
              <SendIcon />
              <ListItemText primary=" Todos os Boletins" />
            </ListItemButton>
            <ListItemButton onClick={() => route.push('/reports')}>
              <SendIcon />
              <ListItemText primary=" Criar um Boletim" />
            </ListItemButton>
          </List>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={'🔽'}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Veiculos</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List
            sx={{ width: '100%', bgcolor: 'background.paper' }}
            component="nav"
            aria-labelledby="nested-list-subheader"
          >
            <ListItemButton onClick={() => route.push('/vehicles/plate')}>
              <SendIcon />
              <ListItemText primary=" Consultar Veiculo Por Placa" />
            </ListItemButton>
            <ListItemButton onClick={() => route.push('/vehicles/color')}>
              <SendIcon />
              <ListItemText primary=" Consultar Veiculos por Cor" />
            </ListItemButton>
            <ListItemButton onClick={() => route.push('/vehicles')}>
              <SendIcon />
              <ListItemText primary=" consultar Todos os Veiculos" />
            </ListItemButton>
          </List>
        </AccordionDetails>
      </Accordion>
    </Wrapper>
  )
}

export default Home
