"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var child_process_1 = require("child_process");
process.env.LANG = 'en_US.UTF-8';
var pythonScriptPath = 'C:\\Users\\sunny\\Documents\\GitHub\\chabak_front\\src\\chatbot\\chatbot.py';
var input = '"경기도 수원시 봄에 가기 좋은 차박지 추천해줘"';
var command = "python ".concat(pythonScriptPath, " ").concat(input);
console.log(input);
(0, child_process_1.exec)(command, { maxBuffer: 2048 * 2048 }, function (error, stdout, stderr) {
    if (error) {
        console.error("Error executing Python script: ".concat(error.message));
        return;
    }
    // 파이썬 스크립트의 실행 결과는 stdout에서 확인할 수 있습니다.
    console.log("Python script output: ".concat(stdout));
    return stdout;
});
