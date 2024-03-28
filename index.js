import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter firstnumber", type: "number", name: "firstnumber" },
    { message: "Enter secondnumber", type: "number", name: "secondnumber" },
    {
        message: "select one of the operators to perform operator",
        type: "list",
        name: "operator",
        choices: ["Addition", "subtraction", "Multiplication", "Division"],
    },
]);
// conditional statement
if (answer.operator === "Addition") {
    console.log(answer.firstnumber + answer.secondnumber);
}
else if (answer.operator === "subtraction") {
    console.log(answer.firstnumber - answer.secondnumber);
}
else if (answer.operator === "Multiplication") {
    console.log(answer.firstnumber * answer.secondnumber);
}
else if (answer.operator === "Division") {
    console.log(answer.firstnumber / answer.secondnumber);
}
else {
    console.log("please select valid operator");
}
