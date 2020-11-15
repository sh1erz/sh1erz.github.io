//subm.addEventListener('click', gitGet);

async function gitGet(){
	//let user = document.getElementById('user').value;
	//let repos = document.getElementById('repos').value;
	let user = 'sh1erz';
	let repos = 'sh1erz.github.io';
	let response = await fetch("https://api.github.com/repos/" + user + '/' + repos + "/commits");
	if (response.ok) { // если HTTP-статус в диапазоне 200-299
	  // получаем тело ответа (см. про этот метод ниже)
	  let commits = await response.json();
	  for (let i = 0; i < commits.length; i++) {
	  	gitTextarea.innerHTML = ' ' + commits[i].autor.login + '\t'
	  	commits[i].commits[i].commit.message + '\n';
		
	  }
	}
	 else {
	 	let error = document.createElement('div');
	 	div.style.backgroundColor = "red";
	 	error.innerHTML = "Error:" + response.status;
	 	gitTextarea.after()
	  alert("Ошибка HTTP: " + response.status);
	}
}
gitGet();