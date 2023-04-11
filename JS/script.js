
function Login(){
		var done = 0;
		var username = document.login.username.value;
		var password = document.login.password.value;

		if (username == "José" && password == "HzezinhoJ") {
			localStorage.setItem('user','José Henrique');
			window.location="./HTML/Prova.html"; 
			done = 1;
		}
		else if (username == "José" && password != "HzezinhoJ") {
			alert("Usuário encontrado, mas a senha está incorreta.");
			done = 1;
		}
		if (username == "Rian" && password == "Mandrake") {
			localStorage.setItem('user','Sabino');
			window.location="./HTML/Prova.html"; 
			done=1;
		}
		else if(username =="Rian" && password != "Mandrake"){
			alert("Usuário encontrado, mas a senha está incorreta.");
			done = 1;
		}
		else if (username =="Hilmer" && password == "Hilmer1234"){
			localStorage.setItem('user','Gustavo Hilmer');
			window.location="./HTML/Prova.html"; 
			done=1;
		}
		else if (username =="Hilmer" && password != "Hilmer1234"){
			alert("Usuário encontrado, mas a senha está incorreta.");
			done = 1;	
		}
		if (done == 0) { 
			alert("Usuário ou senha inválidos.");
		}
		}
