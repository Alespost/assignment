import * as readline from 'readline';
import { stdin, stdout } from 'process';
import { performance } from 'perf_hooks';
import { process } from './processor';
import { validate } from './validator';
import { saveToJSON } from './fs';

const OUTPUT_FILE = 'processed.json';

const rl = readline.createInterface({
  input: stdin,
  output: stdout
});

rl.question('Input alphanumeric string:', (input: string) => {
  validate(input);

  const startTime = performance.now();
  const output = process(input);
  const executionTime = performance.now() - startTime;

  saveToJSON(OUTPUT_FILE, { input, output, executionTime });

  console.log(`Processed string is: ${output}`);

  rl.close();
});
