// Used to make fs functionality work
const fs = require('fs');

// Constant static part of the HTML DOM Head information.
const staticHTMLHead = `
<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Team info</title>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
      <link rel="stylesheet" href="../src/css/style.css" />
  </head>
  <body>
`;

// Constant static part of the HTML DOM Header information.
const staticHTMLHeader = `
<header>
<div class="container-fluid p-3 text-bg-danger text-center">
    <div class="row">
        <p class="fs-1">My Team</p>
    </div>
</div>
</header>
`;

// Constant static part of the HTML DOM Body information.
const staticHTMLBody = `
<main class="container-fluid" id="employeecard">
`;

// Dynamic cards in the HTML DOM Body.
function dynamicHTMLBodyFunction(data) {

  // Store completed cards to be combined with static portion of HTML DOM
  const dynamicHTMLBody = [];

    //loop to create ? number of cards
    for (let i=0; i < data.length; i++) {
      let cardDynamicElementText =  '';
      let cardDynamicElementIcon =  '';
        function cardDynamicFunction() {

          // add on additional part of card that changes depending on which type of employee is selected.
          switch (data[i].role) {
            case 'Manager':
              cardDynamicElementText = `Office number: ${data[i].office_number}`;
              cardDynamicElementIcon = `<span class="material-symbols-outlined">coffee</span>`;
            break;
            case 'Engineer':
              cardDynamicElementText = `Github: <a href="https://github.com/${data[i].github}" target="_blank">${data[i].github}</a>`;
              cardDynamicElementIcon = `<span class="material-symbols-outlined">engineering</span>`;
            break;
            case 'Intern':
              cardDynamicElementText = `School: ${data[i].school}`;
              cardDynamicElementIcon = `<span class="material-symbols-outlined">school</span>`;
            break;
          };
        };
        cardDynamicFunction();
        
        // Main portion that has minimal change among the different classes of employees.
        const cardElement = `
          <div class="p-3 text-center">
              <div class="card text-start">
                  <div class="card-header text-bg-primary">${data[i].name}
                  <p>${cardDynamicElementIcon} ${data[i].role}</p>
                  </div>
                      <div class="card-header">
                          <ul class="list-group list-group-flush">
                              <li class="list-group-item">ID: ${data[i].id}</li>
                              <li class="list-group-item">Email: <a href="mailto:${data[i].email}">${data[i].email}</a></li>
                              <li class="list-group-item">${cardDynamicElementText}</li>
                          </ul>
                      </div>
              </div>
          </div>
          `
        dynamicHTMLBody.push(cardElement);
    }
    return dynamicHTMLBody;
}

// Constant static part of the HTML DOM that ends the HTML.
const staticHTMLEnd = `
</main>
<script src="./js/script.js"></script>
</body>
</html>
`;

// Function to generate HTML and combine static and dynamic portions above.
function generateHTML(data){
  //dynamicHTMLBodyFunction(parameter);
  const renderedHTML = 
  `${staticHTMLHead}${staticHTMLHeader}${staticHTMLBody} ${dynamicHTMLBodyFunction(data).join('')} ${staticHTMLEnd}` //
  
  //pass to function that will be the end of the process.
  writeToFile(renderedHTML);
};

  //Writes the HTML file.
function writeToFile(renderedHTML) {
      const filename = `./files_created/teamHTML.html`;
      fs.writeFile(filename, renderedHTML, (err) =>
      err ? console.log(err) : console.log('Success!')
      );
    };

//Needed to work with index.js page.
module.exports = generateHTML;