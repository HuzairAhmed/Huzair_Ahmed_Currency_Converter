#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";


console.log(chalk.blue.bold("\n \tWellcome to Code-With-Huzair - Currency Converter \n"))

// Define the list of currencies and their exchange rate
let exchange_rate: any = {
    "USD": 1,
    "EUR": 0.9,
    "JYP": 113,
    "CAD": 1.3, 
    "AUD": 1.65,
    "PKR": 277.69,
}

// Prompt the user to sealect currencies to convert from and to 
let user_answer = await inquirer.prompt([
    {
        name: "from",
        type: "list",
        message: "Select the currency to converter from:",
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"]
    },
    {
        name: "to",
        type: "list",
        message: "Select the currency to convert into",
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"]
    },
    {
        name: "amount",
        type: "input",
        message: "Enter the amount to convert:"
    }
]);

// Perform currency conversion by using Formula
let from_amount = exchange_rate[user_answer.from];
let to_amount = exchange_rate[user_answer.to];
let amount = user_answer.amount

// formula of conversion 
let base_amount = amount / from_amount
let converted_amount = base_amount * to_amount

// Display the converted amount

console.log(`Converted Amount = ${converted_amount.toFixed(2)}`);
