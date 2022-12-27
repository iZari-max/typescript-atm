import inquirer from "inquirer";
import chalk from 'chalk';
import cashWithdraw from "./cashWithdraw.js"; 
import cashDeposit from "./cashDeposit.js";
import transfer from "./transfer.js";

async function again(){
    const restart = await inquirer
    .prompt([{
        "name": "restart",
        "type": "list",
        "choices": [ 'yes', 'no'],
        "message": chalk.blueBright("Do you want to do another transaction? \n")
    }]);
    return restart.restart
    
}

async function mainScreen(balance:number) {
    do{
        const options = await inquirer
        .prompt([{
            "name": "menu",
            "type": "list",
            "choices": ['Balance Inquriy', 'Cash Withdraw', 'Cash Desposit', 'Transfer', 'Exit'],
            "message": chalk.underline(chalk.bgBlue("Please select the Transcation Query\n")),
        }]);
    switch (options.menu) {
        case 'Balance Inquriy':
            console.log(`Your Current Balance is ${balance}`);
            break;
        case 'Cash Withdraw':
            balance = await cashWithdraw(balance);
            console.log(chalk.green(`Successfully WithDrawn!\nNew balance : ${balance}`));
            break;
        case 'Cash Desposit':
            balance = await cashDeposit(balance)
            console.log(chalk.green(`Successfully Deposited!\nNew balance : ${balance}`));
            break;
        case 'Transfer':
            balance = await transfer(balance)
            console.log(chalk.green(`Your Current Balance : ${balance}`))
            break;
        default:
            console.log('invalid input!');
    }
}
    while(await again() != 'no' );
    return balance
}
export default mainScreen;
