"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runPy = void 0;
var child_process_1 = require("child_process");
process.env.LANG = 'en_US.UTF-8';
var pythonScriptPath = 'C:\\Users\\sunny\\Documents\\GitHub\\chabak_front\\src\\chatbot\\chatbot.py';
//const input = '"경기도 수원시 봄에 가기 좋은 차박지 추천해줘"'
//const command = `python ${pythonScriptPath} ${input}`;
// exec.ts
var runPy = function (input) {
    return new Promise(function (resolve, reject) {
        var command = "python ".concat(pythonScriptPath, " ").concat(input);
        (0, child_process_1.exec)(command, { maxBuffer: 2048 * 2048 }, function (error, stdout, stderr) {
            if (error) {
                console.error("Error executing Python script: ".concat(error.message));
                reject(error);
                return;
            }
            var pythonScriptOutput = stdout.trim();
            resolve(pythonScriptOutput);
        });
    });
};
exports.runPy = runPy;
