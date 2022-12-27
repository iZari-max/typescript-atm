import inquirer from "inquirer";
import chalk from 'chalk';
async function cashDeposit(balance) {
    const deposit = await inquirer
        .prompt([{
            name: "deposit",
            type: "number",
            message: chalk.blueBright("How much do you want to deposit? \n")
        }]);
    balance += deposit.deposit;
    return balance;
}
export default cashDeposit;
