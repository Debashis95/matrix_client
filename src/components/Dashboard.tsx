import React, { useState } from "react";
import {
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Container,
} from "@mui/material";
import { useDashboardData } from "../hooks/react-query/useManageUser";
import UserPerformance from "./UserPerfomance";

const Dashboard: React.FC = () => {
  const { data, isLoading } = useDashboardData();
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null);

  if (isLoading) {
    return <Typography>Loading dashboard data...</Typography>;
  }

  const handleUserClick = (userId: string) => {
    setSelectedUserId(userId);
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      <Paper elevation={3}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Rank</TableCell>
                <TableCell>User</TableCell>
                <TableCell align="right">Operations Count</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.topUsers.map((user, index) => (
                <TableRow
                  key={user._id}
                  onClick={() => handleUserClick(user._id)}
                  style={{ cursor: "pointer" }}
                >
                  <TableCell component="th" scope="row">
                    {index + 1}
                  </TableCell>
                  <TableCell>{user.userDetails[0].full_name}</TableCell>
                  <TableCell align="right">{user.count}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
      {selectedUserId && <UserPerformance userId={selectedUserId} />}
    </Container>
  );
};

export default Dashboard;
