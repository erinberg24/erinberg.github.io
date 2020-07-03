import Navbar from './Navbar.js';
import About from './About.js';
import News, {handleNewsFilter} from './News.js';
import Projects, {handleProjectFilter} from './Projects.js';

export default function MainPage(data){
    document.querySelector('.container').innerHTML = `
        ${Navbar()}
        ${About(data.about)}
        <br>
        ${News(data.news)}
        <br>
        <br>
        ${Projects(data.projects)}
        <footer>
        <br>
        Copyright © 2020 Erin Berg
        </footer>
    `;
    //addInteractions(data);

    handleNewsFilter(data);
    handleProjectFilter(data);
}