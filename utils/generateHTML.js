import fs from 'fs';

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

const staticHTMLHeader = `
<header>
<div class="container-fluid p-3 text-bg-danger text-center">
    <div class="row">
        <p class="fs-1">My Team</p>
    </div>
</div>
</header>
`;

const staticHTMLBody = `
<main class="container-fluid" id="employeecard">
`;

const dynamicHTMLBody = [];
function dynamicHTMLBodyFunction(data) {

  console.table(data);
    for (let i=0; i < data.length; i++) {
      let cardDynamicElementText =  '';
      let cardDynamicElementIcon =  '';
        function cardDynamicFunction() {
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
}

const staticHTMLEnd = `
</main>
<script src="./js/script.js"></script>
</body>
</html>
`;

// Function to generate HTML
export default function generateHTML(parameter){
  dynamicHTMLBodyFunction(parameter);
  const renderedHTML = 
  `${staticHTMLHead}${staticHTMLHeader}${staticHTMLBody} ${dynamicHTMLBody.join('')} ${staticHTMLEnd}` //
  
  writeToFile(renderedHTML);
};

  // TODO: Create a function to write README file
function writeToFile(renderedHTML) {
      const filename = `./files_created/teamHTML.html`;
      fs.writeFile(filename, renderedHTML, (err) =>
      err ? console.log(err) : console.log('Success!')
      );
    };