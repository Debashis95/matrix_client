export type Matrix = number[][];

export const generateMatrix = (rows: number, columns: number, operation: (i: number, j: number) => number): Matrix => {
  return Array.from({ length: rows }, (_, i) =>
    Array.from({ length: columns }, (_, j) => operation(i, j))
  );
};

export const addMatrices = (matrix1: Matrix, matrix2: Matrix): Matrix => {
  return matrix1.map((row, i) =>
    row.map((_, j) => matrix1[i][j] + matrix2[i][j])
  );
};

export const subtractMatrices = (matrix1: Matrix, matrix2: Matrix): Matrix => {
  return matrix1.map((row, i) =>
    row.map((_, j) => matrix1[i][j] - matrix2[i][j])
  );
}

export const multiplyMatrices = (matrix1: Matrix, matrix2: Matrix): Matrix => {
  const result: Matrix = [];
  for (let i = 0; i < matrix1.length; i++) {
    result[i] = [];
    for (let j = 0; j < matrix2[0].length; j++) {
      let sum = 0;
      for (let k = 0; k < matrix1[0].length; k++) {
        sum += matrix1[i][k] * matrix2[k][j];
      }
      result[i][j] = sum;
    }
  }
  return result;
};

