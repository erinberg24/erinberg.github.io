import MaterialIcon from './MaterialIcon.js';

export default function Projects(projects){
    return `
    <section id="projects">
        <h1 class="title">Projects</h1>
        <div class="filter" style="text-align: center;">
          <label><input type="radio" name="filter" class="filter" value="all" checked>All</label>
          <label><input type="radio" name="filter" class="filter" value="class">Journal</label>
          <label><input type="radio" name="filter" class="filter" value="project">Technique</label>
          <label><input type="radio" name="filter" class="filter" value="study">Game</label>
          <label><input type="radio" name="filter" class="filter" value="personal">Course Project</label>
        </div><br>
        <div class="project-list">
            ${renderProjectItems(projects)}
        </div>
    </section>`;
  }

  export function renderProjectItems(projects){
  return projects.map(d=>`
    <div class="row">
      <div class="col-4" style="padding: 4px;">
          <div>
            <a href="?project=${d.id}"><strong>${d.title}</strong></a>
          </div>
          <div>
            ${d.authors}<br>
          </div>
          <div>
            <em>${d.source}</em>
          </div>
          <div>
              <span class="genericB">${d.tags[0]}</span>
              <span class="genericR">${d.tags[1]}</span>
          </div>
          
        </div>
        <div class="col-8" style="padding: 4px;">
          <img src="${d.teaser}" width="100%">
        </div>
    </div>
  `).join('');
          /*</div>
              <span><a href=${d.materials.path} target="_blank" class="genericLink"><i class="far fa-file-alt">${d.materials.label}</i></a></span>
          </div>*/
  }

export function handleProjectFilter(data){
  let buttons = document.querySelectorAll('.filter input[name="filter"]');
  buttons.forEach(cond=>cond.addEventListener('change', (event)=>{filterProjects(event.target.value, data)})); 
}

function filterProjects(string, data){
    var projectsFiltered = [];
    var x = 0;
    var i;
    var j;
    if(string.toUpperCase() == 'ALL'){
      projectsFiltered = data.projects;
      document.querySelector('.project-list').innerHTML = `${renderProjectItems(projectsFiltered)}`;
      return;
    }
    for (i = 0; i < data.projects.length; i++) { 
      for (j = 0; j < data.projects[i].tags.length; j++ ){
        if ( data.projects[i].tags[j].toUpperCase().includes(string.toUpperCase())){
            x = projectsFiltered.push(data.projects[i]);
            console.log(string);
        }
      }
    }
    document.querySelector('.project-list').innerHTML = `${renderProjectItems(projectsFiltered)}`;
  }