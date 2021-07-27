
const generateManager = Managers => {
 
  return `
    <div class="col-sm">
      <div class="card bg-light mb-3" style="max-width: 18rem;">
        <div class="card-header text-white bg-primary">
          <h5>${Managers.name}</h5>
          <h5><i class="fas fa-mug-hot mr-2"></i>${Managers.role}</h5>
        </div> 
        <div class="card-body">
          <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${Managers.id}</li>
            <li class="list-group-item">Email: <a href="mailto:${Managers.email}">${Managers.email}</a></li>
            <li class="list-group-item">Office Number: ${Managers.officeNumber}</li>
          </ul>
        </div>
      </div>
    </div>
  `;
}

const generateEngineer = engineersArr => {
  
  return `
  ${engineersArr
    .map(({ name, id, email, github, role  }) => {
      return `
    <div class="col-sm">
        <div class="card bg-light mb-3" style="max-width: 18rem;">
          <div class="card-header text-white bg-primary">
            <h5>${name}</h5>
            <h5><i class="fas fa-glasses mr-2"></i>${role}</h5>
          </div> 
          <div class="card-body">
            <ul class="list-group list-group-flush">
              <li class="list-group-item">ID: ${id}</li>
              <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
              <li class="list-group-item">GitHub: <a href="https://github.com/${github}" target="_blank" rel="noopener noreferrer">${github}</a></li>
            </ul>
          </div>
        </div>
      </div>
      `;
    })
    .join('')}
`};

const generateIntern = internsArr => {
 
  return `
  ${internsArr
    .map(({ name, id, email, school, role}) => {
      return `
    <div class="col-sm">
        <div class="card bg-light mb-3" style="max-width: 18rem;">
          <div class="card-header text-white bg-primary">
            <h5>${name}</h5>
            <h5><i class="fas fa-user-graduate mr-2"></i>${role}</h5>
          </div> 
          <div class="card-body">
            <ul class="list-group list-group-flush">
              <li class="list-group-item">ID: ${id}</li>
              <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
              <li class="list-group-item">School: ${school}</li>
            </ul>
          </div>
        </div>
      </div>
      `;
    })
    .join('')}
`};
module.exports = (templateData ) => {
  const {interns, engineers, ...manager } = templateData;
    return `
<!DOCTYPE html>
<html lang="en">
  
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Team Page</title>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css"> 
      
    </head>
  
    <body>
        <nav class="navbar text-light bg-danger justify-content-center">
            <span class="navbar-brand mb-0 h1">My Team</span>
        </nav>
        <main class="container my-5">
          <div class="container">
            <div class="row">
      
            ${generateManager(manager)} 
            ${generateEngineer(engineers)}  
            ${generateIntern(interns)}               
                
            
            </div>
          </div>
      </main>
      
    
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    
    </body>
</html>`
};



