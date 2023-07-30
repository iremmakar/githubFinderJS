class UI {
  constructor() {
    this.profile = document.getElementById("profile");
  }

  showProfile(user) {
    const created_at = new Date(user.created_at).toLocaleDateString();

    this.profile.innerHTML = `
      <div class="container my-4 border">
      <div class="row">
        <div class="col-md-3">
          <img src="${user.avatar_url}" alt="" class="img-fluid" />
          <a href="${user.html_url}" target="_blank" class="btn btn-primary my-4 w-100"
            >Profili Göster</a
          >
        </div>
        <div class="col-md-9">
          <span class="badge bg-primary fs-6 mt-1">Açık repolar: ${user.public_repos}</span>
          <span class="badge bg-secondary fs-6 mt-1">Açık gistler: ${user.public_gists}</span>
          <span class="badge bg-success fs-6 mt-1">Takipçi: ${user.followers} </span>
          <span class="badge bg-info fs-6 mt-1">Takip Edilen: ${user.following} </span>
  
          <ul class="list-group my-4">
            <li class="list-group-item">Hakkında : ${user.bio}</li>
            <li class="list-group-item">Şirket: ${user.company}</li>
            <li class="list-group-item">Webiste: ${user.blog}</li>
            <li class="list-group-item">Konum: ${user.location}</li>
            <li class="list-group-item">Hesap Oluşturulma: ${created_at}</li>
          </ul>
        </div>
      </div>
     
    </div>
  
    
    <div class="container p-3" id="repos"> </div>
      
      `;
  }

  showRepos(repos) {
    let output = `<h3 class="fs-1 m-5">En Son Repolar</h3>`;
    repos.forEach((repo) => {
      output += `
          <div class="border p-3 mb-4">
          <div class="row">
            <div class="col-md-6">
              <a href="${repo.html_url}" target="_blank">${repo.name}</a>
            </div>
            <div class="col-md-6">
              <span class="badge bg-primary">Yıldız: ${repo.stargazers_count}</span>
              <span class="badge bg-secondary">İzleyenler: ${repo.watchers_count}</span>
              <span class="badge bg-success">Fork: ${repo.forks_count}</span>
            </div>
          </div>
        </div>
          `;
    });

    console.log(output);

    document.getElementById("repos").innerHTML = output;
  }

  showAlert(message, className) {
    const alertDiv = document.createElement("div");
    alertDiv.className = className;
    alertDiv.innerText = message;

    const alert = document.getElementById("alert");
    alert.appendChild(alertDiv);

    setTimeout(() => {
      this.clearAlert();
    }, 4000);
  }

  clearAlert() {
    const current = document.querySelector(".alert");

    if (current) {
      current.remove();
    }
  }

  clearProfile() {
    this.profile.innerHTML = "";
  }
}

export default UI;
