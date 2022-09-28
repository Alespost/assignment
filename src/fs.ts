import { writeFile } from 'fs';

type Data = {
  input: string;
  output: string;
  executionTime: number;
};

export function saveToJSON(data: Data) {
  writeFile('processed.json', JSON.stringify(data, null, 2), (err) => {
    if (err) throw err;
  });
}
