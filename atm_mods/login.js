import chalk from "chalk";
import users from "./users.js";
import inquirer from "inquirer";
import mainScreen from "./MainScreen.js";
async function login() {
    const answers = await inquirer
        .prompt([
        {
            "name": "accountNumber",
            "type": "number",
            "message": "Plesae enter your account number : "
        },
        {
            "name": "pin",
            "type": "password",
            "message": "Plesae enter your account pin : "
        }
    ]);
    let user = users.find(x => x.accountNumber === answers.accountNumber && x.pin === answers.pin);
    if (typeof user != "undefined") {
        console.log(chalk.green(`You have logged in successfully!\n welcome ${user.name}`));
        mainScreen(user.balance);
    }
    else {
        console.log(chalk.red(`Invalid account number or pin`));
    }
}
export default login;
