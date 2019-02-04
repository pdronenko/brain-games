import readlineSync from "readline-sync";

export const askName = () => {

    console.log("Welcome to the Brain Games!\n");
    const name = readlineSync.question("May I have your name? ");

    return console.log(`Hello, ${name}!`);

};
