import { exec } from 'child_process';

process.env.LANG = 'en_US.UTF-8';

const pythonScriptPath = 'C:\\Users\\sunny\\Documents\\GitHub\\chabak_front\\src\\chatbot\\chatbot.py';
//const input = '"경기도 수원시 봄에 가기 좋은 차박지 추천해줘"'
//const command = `python ${pythonScriptPath} ${input}`;
// exec.ts


export const runPy = (input: string): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    const command = `python ${pythonScriptPath} ${input}`;

    exec(command, { maxBuffer: 2048 * 2048 }, (error, stdout: string, stderr: string) => {
      if (error) {
        console.error(`Error executing Python script: ${error.message}`);
        reject(error);
        return;
      }

      const pythonScriptOutput = stdout.trim();
      resolve(pythonScriptOutput);
    });
  });
};




