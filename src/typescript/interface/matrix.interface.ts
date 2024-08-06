import { Matrix } from "../../utils/matrixOperations";

export interface MatrixDisplayProps {
   matrix: Matrix;
   title: string;
 }

export  interface MatrixInputProps {
   rows: number;
   columns: number;
   onRowsChange: (rows: number) => void;
   onColumnsChange: (columns: number) => void;
   onGenerate: () => void;
 }
 