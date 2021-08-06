import { PachinkoResult } from "../models/PachinkoResult";

const isNumber = (data: unknown): data is number => {
  return typeof data === 'number';
};

const isPachinkoResultArray = (data: unknown[]): data is PachinkoResult[] => {
  return typeof data === "object" &&
  data !== null && data.length >= 1 &&
    // as Target で型の予測を効かせて typo を防ぐ
    typeof (data[0] as PachinkoResult).kaiten === "number" &&
    typeof (data[0] as PachinkoResult).mode === "string" &&
    typeof (data[0] as PachinkoResult).next === "string"
}

export {isNumber, isPachinkoResultArray}
