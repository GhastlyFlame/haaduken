var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    let repos = JSON.parse(this.responseText);
    // document.write("<h3>Haadi's github repositories w/last updated</h3>");
    // document.getElementById('gitTime').innerHTML = "<h3>Haadi's github repositories w/last updated</h3>";
    repos.forEach((repo)=>{
        if(repo.name == "haaduken"){
        document.getElementById('gitTime').innerHTML = (`<code>${repo.name}</code>: <em>${new Date(repo.updated_at)}</em><br>`);
        }
    });
  }
};
xhttp.open("GET", "https://api.github.com/users/GhastlyFlame/repos", true);
// console.log("done");
// document.getElementById('gitTime').innerHTML = "<p>waffle</p>";
xhttp.send();