import inquirer from "inquirer";
import chalk from 'chalk';
import users from "./users.js";

async function transfer(balance:number) {
    const transfer = await inquirer
    .prompt([{
        "name": "transferTo",
        "type": "number",
        "message": chalk.blueBright("Enter the Account Number where you want to transfer\n")
    },
    {
        "name": "transferAmount",
        "type": "number",
        "message": chalk.blueBright("How much do you want to transfer? ")

    }])
    let user = users.find(x => x.accountNumber === transfer.transferTo);
    if(typeof user != 'undefined'){
        user.balance += transfer.transferAmount
        balance-=transfer.transferAmount
        console.log(chalk.green(`You have transfer ${transfer.transferAmount} PKR to Account-Title: ${user.name}`))
    }
    return balance
}
export default transfer

