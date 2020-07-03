export default function About(data){
    return `
    <section id="about">
      <h1 class="animated infinite bounce delay-1s">${data.name}</h1>
        <div class="row">
            <div class="col-4">
                <img src=${data.photo} class="profilePic">
                <p>
                    <strong>${data.title}</strong><br>
                    ${data.email} <br>
                    ${data.address}<br>
                    <a href=${data.resume} target="_blank" class="genericLink"><i class="far fa-file-alt"> Resume</i></a> |
                    <a href=${data.linkedin} target="_blank" class="genericLink"><i class="fab fa-linkedin"></i></a> |
                    <a href=${data.github} target="_blank" class="genericLink"><i class="fab fa-github"></i></a><br>
                </p>
            </div>    
            <div class="col-6">
                <p>
                    ${data.description}
                </p>
            </div>
        </div>
    </section>`;
}