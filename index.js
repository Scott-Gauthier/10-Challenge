const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const Manager = require('./lib/Manager.js');
const inquirer = require('inquirer');
const generateHTML = require('./utils/generateHTML.js');

//Final array of data from questions used to pass to generateHTML and create files.
const employeeDataForHTML = [];

//Arrays of questions for user input
const countprompt = [
    {
        type: 'input',
        message: 'How many team members do you have?',
        name: 'count',
        default: "3",
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
        generateHTML(employeeDataForHTML);
        }
}
function employeeAsk (count, employee) {
            count--;
            //Store employee questions with the additional question that changes depending on employee selected.
            const employeeprompt = employeeQuestions(employee);
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

            // Ask question array created above
            inquirer
            .prompt(employeeprompt)
            .then((employeeanswer) => {
                employeeprompt.splice(3,1,);
                
                // Process question response in Classes and then add data to global array that goes to generateHTML to create the final product.
                switch (employee) {
                    case 'Manager':
                        const manager = new Manager(employee, employeeanswer.employee_name, employeeanswer.employee_ID, employeeanswer.email_address, employeeanswer.managers_office_number);
                        employeeDataForHTML.push(manager);
                    break;
                    case 'Engineer':
                        const engineer = new Engineer(employee, employeeanswer.employee_name, employeeanswer.employee_ID, employeeanswer.email_address, employeeanswer.engineer_github);
                        employeeDataForHTML.push(engineer);
                    break;
                    case 'Intern':
                        const intern = new Intern(employee, employeeanswer.employee_name, employeeanswer.employee_ID, employeeanswer.email_address, employeeanswer.interns_school);
                        employeeDataForHTML.push(intern);
                    break;
                }
                // Run process again until count = 0
                roleAsk (count);           

            })
            // Process any errors.
            .catch((err) => {
                err ? console.log(err) : console.log('Sigh! Well darn.') 
            }
            );    
};

// Start the whole process.
countAsk();
