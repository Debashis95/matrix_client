import React from 'react';
import { Typography, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Container } from '@mui/material';
import { useUserPerformance } from '../hooks/react-query/useManageUser';

const UserPerformance: React.FC<{ userId: string }> = ({ userId }) => {
  const { data, isLoading } = useUserPerformance(userId);
  console.log(data);
  

  if (isLoading) {
    return <Typography>Loading user performance data...</Typography>;
  }

  return (
    <Container maxWidth="md">
      <Typography variant="h4" gutterBottom>User Performance</Typography>
      <Paper elevation={3}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Operation</TableCell>
                <TableCell align="right">Count</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data && data.performance.map((operation) => (
                <TableRow key={operation._id}>
                  <TableCell component="th" scope="row">{operation._id}</TableCell>
                  <TableCell align="right">{operation.count}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Container>
  );
};

export default UserPerformance;
