import * as React from 'react'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Divider from '@mui/material/Divider'
import InboxIcon from '@mui/icons-material/Inbox'
import DraftsIcon from '@mui/icons-material/Drafts'
import { Report } from '../../../src/domain/entities/report'
import { useRouter } from 'next/router'
type Props = {
  report: Report
}

export default function ReportById({
  dataOcorrencia,
  id,
  localOcorrencia,
  periodoOcorrencia,
  veiculoFurtado,
  partes
}: Report) {
  const route = useRouter()
  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      {id && (
        <nav aria-label="main mailbox folders">
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <DraftsIcon />
                </ListItemIcon>
                <ListItemText primary={`${id}`} />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <DraftsIcon />
                </ListItemIcon>
                <ListItemText primary={`${dataOcorrencia}`} />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <DraftsIcon />
                </ListItemIcon>
                <ListItemText primary={`${localOcorrencia}`} />
              </ListItemButton>
            </ListItem>
            <ListItem
              disablePadding
              onClick={() => route.push(`/reports/period/${periodoOcorrencia}`)}
            >
              <ListItemButton>
                <ListItemIcon>
                  <DraftsIcon />
                </ListItemIcon>
                <ListItemText primary={`${periodoOcorrencia}`} />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <DraftsIcon />
                </ListItemIcon>
                <ListItemText primary={`${veiculoFurtado}`} />
              </ListItemButton>
            </ListItem>
          </List>
        </nav>
      )}
    </Box>
  )
}
