import React from 'react';
import { Grid, TextField, Button } from '@mui/material';
import { MatrixInputProps } from '../typescript/interface/matrix.interface';


const MatrixInput: React.FC<MatrixInputProps> = ({
  rows,
  columns,
  onRowsChange,
  onColumnsChange,
  onGenerate
}) => {
  return (
    <Grid container spacing={2} alignItems="center">
      <Grid item xs={12} sm={3}>
        <TextField
          label="Rows"
          type="number"
          value={rows}
          onChange={(e) => onRowsChange(Number(e.target.value))}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={3}>
        <TextField
          label="Columns"
          type="number"
          value={columns}
          onChange={(e) => onColumnsChange(Number(e.target.value))}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Button variant="contained" onClick={onGenerate} fullWidth>
          Generate Matrices
        </Button>
      </Grid>
    </Grid>
  );
};

export default MatrixInput;
