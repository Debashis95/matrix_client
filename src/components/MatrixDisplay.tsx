
import React from 'react';
import { Box, Table, TableBody, TableCell, TableContainer, TableRow, Paper, Typography } from '@mui/material';
import { MatrixDisplayProps } from '../typescript/interface/matrix.interface';


const MatrixDisplay: React.FC<MatrixDisplayProps> = ({ matrix, title }) => {
  return (
    <Box sx={{ width: '33%' }}>
      <Typography variant="h6" align="center">{title}</Typography>
      <TableContainer component={Paper}>
        <Table size="small">
          <TableBody>
            {matrix.map((row, rowIndex) => (
              <TableRow key={rowIndex}>
                {row.map((cell, cellIndex) => (
                  <TableCell key={cellIndex} align="center">{cell}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default MatrixDisplay;
