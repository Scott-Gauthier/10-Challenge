import Employee from './lib/Employee.js';
import Engineer from './lib/Engineer.js';
import Intern from './lib/Intern.js';
import Manager from './lib/Manager.js';
import inquirer from 'inquirer';
import generateHTML from './utils/generateHTML.js';

const parameter = [];

// TODO: Create an array of questions for user input
const countprompt = [
    {
        type: 'input',
        message: 'How many team members do you have?',
        name: 'count',
        default: "1",
    },
];

const roleprompt = [

    {
        type: 'list',
        message: 'Do you want to add a Manager, Engineer, or Intern?',
        name: 'employee',
        default: "Manager",
        choices: [
            'Manager',
            'Engineer',
            'Intern'
        ]
    }
];

const managerprompt = 
    {
        type: 'input',
        message: `What is your manager's office number?`,
        name: 'managers_office_number',
        default: "1",
    }
;
const engineerprompt = 
    {
        type: 'input',
        message: `What is your engineer's Github?`,
        name: 'engineer_github',
        default: "1",
    }
;
const internprompt = 
    {
        type: 'input',
        message: `What is your intern's school?`,
        name: 'interns_school',
        default: "1",
    }
;
function employeeQuestions(employee) {
    const employeeprompt = [
        {
            type: 'input',
            message: `What is your ${employee}'s name?`,
            name: 'employee_name',
            default: "Jared",
        },
        {
            type: 'input',
            message: `What is your ${employee}'s ID?`,
            name: 'employee_ID',
            default: "1",
        },
        {
            type: 'input',
            message: `What is your ${employee}'s email address?`,
            name: 'email_address',
            default: "test@test.com",
        },
    ];
    return employeeprompt;
}
function countAsk () {
    inquirer
        .prompt(countprompt)
        .then((countanswer) => {
            let count = countanswer.count;
            roleAsk (count);
        })
        .catch((err) => {
            err ? console.log(err) : console.log('Success!') 
        }
        );
}
function roleAsk (count) {
    console.log(count);
    if (count > 0 ) {
        inquirer
            .prompt(roleprompt)
            .then((roleanswer) => {
                let employee = roleanswer.employee;
                employeeAsk (count, employee);
            })
            .catch((err) => {
                err ? console.log(err) : console.log('Success!') 
            }
            );
        } else {
        generateHTML(parameter);
        }
}
function employeeAsk (count, employee) {
        //if (count > 0 ) {
            count--;
            employeeQuestions(employee);
            const employeeprompt = [
                {
                    type: 'input',
                    message: `What is your ${employee}'s name?`,
                    name: 'employee_name',
                    default: "Jared",
                },
                {
                    type: 'input',
                    message: `What is your ${employee}'s ID?`,
                    name: 'employee_ID',
                    default: "1",
                },
                {
                    type: 'input',
                    message: `What is your ${employee}'s email address?`,
                    name: 'email_address',
                    default: "test@test.com",
                },
            ];
            switch (employee) {
                case 'Manager':
                    employeeprompt.splice(3,0,managerprompt);
                break;
                case 'Engineer':
                    employeeprompt.splice(3,0,engineerprompt);
                break;
                case 'Intern':
                    employeeprompt.splice(3,0,internprompt);
                break;
            }
            inquirer
            .prompt(employeeprompt)
            .then((employeeanswer) => {
                //let employee_name = employeeanswer.employee_name;
                // let employee_ID = ;
                // let email_address = ;
                // let officenumber = ;
                // let github = ;
                // let school = ;
                employeeprompt.splice(3,1,);
        
                switch (employee) {
                    case 'Manager':
                        const manager = new Manager(employee, employeeanswer.employee_name, employeeanswer.employee_ID, employeeanswer.email_address, employeeanswer.managers_office_number);
                        parameter.push(manager);
                    break;
                    case 'Engineer':
                        const engineer = new Engineer(employee, employeeanswer.employee_name, employeeanswer.employee_ID, employeeanswer.email_address, employeeanswer.engineer_github);
                        parameter.push(engineer);
                    break;
                    case 'Intern':
                        const intern = new Intern(employee, employeeanswer.employee_name, employeeanswer.employee_ID, employeeanswer.email_address, employeeanswer.interns_school);
                        parameter.push(intern);
                    break;
                }
                // console.table(parameter)
                //dynamicHTMLBody(manager);

                roleAsk (count);           

            })
            .catch((err) => {
                err ? console.log(err) : console.log('Success!') 
            }
            );
        // } else {
        // console.log("Fail!");

        // }
    
};
countAsk();
