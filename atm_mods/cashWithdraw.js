import inquirer from "inquirer";
import chalk from "chalk";
async function cashWithdraw(balance) {
    const withdraw = await inquirer
        .prompt([{
            "name": "withdraw",
            "type": "list",
            "choices": ['500', '1000', '2000', '5000', '10000'],
            "message": chalk.blueBright("How mcuh do you want to Withdraw ? \n")
        }]);
    switch (withdraw.withdraw) {
        case '500':
            if (balance >= 500) {
                balance -= 500;
            }
            else {
                console.log(chalk.red(`You DO NOT have enough Balance in your account!`));
            }
            break;
        case '1000':
            if (balance >= 1000) {
                balance -= 1000;
            }
            else {
                console.log(chalk.red(`You DO NOT have enough Balance in your account!`));
            }
            break;
        case '2000':
            if (balance >= 2000) {
                balance -= 2000;
            }
            else {
                console.log(chalk.red(`You DO NOT have enough Balance in your account!`));
            }
            break;
        case '5000':
            if (balance >= 5000) {
                balance -= 5000;
            }
            else {
                console.log(chalk.red(`You DO NOT have enough Balance in your account!`));
            }
            break;
        case '10000':
            if (balance >= 1000) {
                balance -= 10000;
            }
            else {
                console.log(chalk.red(`You DO NOT have enough Balance in your account!`));
            }
            break;
        default:
            console.log('invalid choice!');
    }
    return balance;
}
export default cashWithdraw;
