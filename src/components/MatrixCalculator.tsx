import React, { useState, useCallback } from "react";
import { Container, Typography, Box } from "@mui/material";
import MatrixInput from "./MatrixInput";
import MatrixDisplay from "./MatrixDisplay";
import {
  Matrix,
  generateMatrix,
  addMatrices,
  subtractMatrices,
  multiplyMatrices,
} from "../utils/matrixOperations";
import {
  useSaveMatrices,
  getUserIdFromToken,
} from "../hooks/react-query/useMatrixResult";

const MatrixCalculator: React.FC = () => {
  const [rows, setRows] = useState<number>(2);
  const [columns, setColumns] = useState<number>(2);
  const [matrix1, setMatrix1] = useState<Matrix>([]);
  const [matrix2, setMatrix2] = useState<Matrix>([]);
  const [resultMatrix, setResultMatrix] = useState<Matrix>([]);

  const { mutate: saveMatrices } = useSaveMatrices();
  // const { mutate:  } = use();
  const userId = getUserIdFromToken();
  const generateMatrices = useCallback(() => {
    setMatrix1(generateMatrix(rows, columns, (i, j) => i + j));
    setMatrix2(generateMatrix(rows, columns, (i, j) => i * j));
    setResultMatrix([]);
  }, [rows, columns]);

  const addMatricesHandler = useCallback(() => {
    const result = addMatrices(matrix1, matrix2);
    setResultMatrix(result);
    saveMatrices({
      matrixA: matrix1,
      matrixB: matrix2,
      operation: "add",
      result,
      userId: userId,
    });
  }, [matrix1, matrix2, saveMatrices]);

  const subMatricesHandler = useCallback(() => {
    const result = subtractMatrices(matrix1, matrix2);
    setResultMatrix(result);
    saveMatrices({
      matrixA: matrix1,
      matrixB: matrix2,
      operation: "subtract",
      result,
      userId: userId,
    });
  }, [matrix1, matrix2, saveMatrices]);

  const multiMatricesHandler = useCallback(() => {
    const result = multiplyMatrices(matrix1, matrix2);
    setResultMatrix(result);
    saveMatrices({
      matrixA: matrix1,
      matrixB: matrix2,
      operation: "multiply",
      result,
      userId: userId,
    });
  }, [matrix1, matrix2, saveMatrices]);

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" gutterBottom>
        Matrix Calculator
      </Typography>
      <MatrixInput
        rows={rows}
        columns={columns}
        onRowsChange={setRows}
        onColumnsChange={setColumns}
        onGenerate={generateMatrices}
      />
      <Box
        sx={{
          mt: 4,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {matrix1.length > 0 && (
          <>
            <MatrixDisplay matrix={matrix1} title="Matrix 1" />
            <MatrixDisplay matrix={matrix2} title="Matrix 2" />
            <Typography variant="h4" sx={{ mx: 2 }}>
              =
            </Typography>
            {resultMatrix.length > 0 ? (
              <MatrixDisplay matrix={resultMatrix} title="Result" />
            ) : (
              <Box
                sx={{ width: "33%", display: "flex", justifyContent: "center" }}
              >
                <Typography
                  variant="h6"
                  onClick={addMatricesHandler}
                  sx={{
                    cursor: "pointer",
                    marginRight: "10px",
                    border: "1px dashed grey",
                    padding: "10px",
                    borderRadius: "5px",
                    "&:hover": {
                      backgroundColor: "rgba(0, 0, 0, 0.04)",
                    },
                  }}
                >
                  Click to Add
                </Typography>
                <Typography
                  variant="h6"
                  onClick={subMatricesHandler}
                  sx={{
                    cursor: "pointer",
                    marginRight: "10px",
                    border: "1px dashed grey",
                    padding: "10px",
                    borderRadius: "5px",
                    "&:hover": {
                      backgroundColor: "rgba(0, 0, 0, 0.04)",
                    },
                  }}
                >
                  Click to Sub
                </Typography>
                <Typography
                  variant="h6"
                  onClick={multiMatricesHandler}
                  sx={{
                    cursor: "pointer",
                    marginRight: "10px",
                    border: "1px dashed grey",
                    padding: "10px",
                    borderRadius: "5px",
                    "&:hover": {
                      backgroundColor: "rgba(0, 0, 0, 0.04)",
                    },
                  }}
                >
                  Click to Multi
                </Typography>
              </Box>
            )}
          </>
        )}
      </Box>
    </Container>
  );
};

export default MatrixCalculator;
