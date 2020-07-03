import {NavbarProject} from './Navbar.js';
import ProjectDetail from './ProjectDetail.js';

export default function ProjectPage(project){
    console.log("Rendering ProjectPage");
    document.querySelector(' .container').innerHTML = `
    ${NavbarProject()}
    ${ProjectDetail(project)}
    <footer>
        <br>
        Copyright © 2020 Erin Berg
    </footer>
    `;
  }