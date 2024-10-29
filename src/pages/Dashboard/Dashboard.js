import * as React from 'react';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const DemoPaper = styled(Paper)(({ theme }) => ({
  width: 120,
  height: 120,
  padding: theme.spacing(2),
  ...theme.typography.body2,
  textAlign: 'center',
}));

export default function Dashboard() {
  return (
    <Stack direction="row" spacing={2}>
      <DemoPaper variant="elevation">Company HR</DemoPaper>
      <DemoPaper variant="elevation">Hiring Manager</DemoPaper>
      <DemoPaper variant="elevation">Candiate</DemoPaper>
     
    </Stack>
  );
}
