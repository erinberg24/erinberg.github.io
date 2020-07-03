export default function ProjectDetail(project){
    return `
      <section>
        <h1>${project.title}</h1>
        <img src=${project.teaser} width="100%">
        <div>
            ${project.authors}<br>
        </div>
        <div>
            <em>${project.source}</em>
        </div>
        <div>
                <span>${project.tags[0]}</span>
                <span>${project.tags[1]}</span>
        </div>
        <div>
            <p>
              ${project.description}
            </p>
        </div>
            <span><a href="assets/projects/poster.pdf" target="_blank">Paper</a></span>
        <div>
  
        </div>
      </section>
    `;
  }