import MainPage from './components/MainPage.js';
import ProjectPage from './components/ProjectPage.js';

fetch('assets/data.json')
  .then(resp => {
      return resp.json();
  })
  .then(data => {
    console.log(data);
    const params = new URLSearchParams(window.location.search);
    console.log("project param", params.get("project"));
    if (params.get("project") === null) {
      MainPage(data);
    } 
    else {
      console.log("renderProjectPage");
      let id = params.get("project");
      let project = data.projects.find(d => d.id === id);
      console.log("project", project);
      ProjectPage(project);
    }
  });