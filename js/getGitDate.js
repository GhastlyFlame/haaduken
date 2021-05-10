var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState === 4 && this.status === 200) {
    let repos = JSON.parse(this.responseText);
        repos.forEach((repo)=>{
        if(repo.name === "Haaduken"){
            document.getElementById('gitTime').innerHTML = (`${repo.name}: <em>${new Date(repo.updated_at)}</em><br>`);
        }
    });
  }
};
xhttp.open("GET", "https://api.github.com/users/GhastlyFlame/repos", true);
xhttp.send();