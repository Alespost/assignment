import { writeFile } from 'fs';

type Data = {
  input: string;
  output: string;
  executionTime: number;
};

export function saveToJSON(file: string, data: Data) {
  writeFile(file, JSON.stringify(data, null, 2), (err) => {
    if (err) throw err;
  });
}
