let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "text";

if (typeof userInput == "string") {
  userName = userInput;
}

function generateError(msg: string, code: number): never {
  throw { msg: msg, errorCode: code };
}

generateError("An Error occurred!", 500);
// const result = generateError("An Error occurred!", 500);
// console.log(result);
