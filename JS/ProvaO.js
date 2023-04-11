var userlogin = localStorage.getItem('user');
var nameuser = document.getElementById('nomepessoa');
nameuser.innerHTML = userlogin;
var c1 = document.getElementById('check1');
var c2 = document.getElementById('check2');
var c3 = document.getElementById('check3');
var c4 = document.getElementById('check4');
var c5 = document.getElementById('check5');
var c6 = document.getElementById('check6');
var c7 = document.getElementById('check7');
var c8 = document.getElementById('check8');
var c9 = document.getElementById('check9');
var c10 = document.getElementById('check10');
var c11 = document.getElementById('check11');
var c12 = document.getElementById('check12');
var c12 = document.getElementById('check13');
var c12 = document.getElementById('check14');
var c12 = document.getElementById('check15');
var c12 = document.getElementById('check16');
var c12 = document.getElementById('check17');
var c12 = document.getElementById('check18');
var c12 = document.getElementById('check19');
var c12 = document.getElementById('check20');
var c12 = document.getElementById('check21');
var c12 = document.getElementById('check22');
var c12 = document.getElementById('check23');
var c12 = document.getElementById('check24');
var c12 = document.getElementById('check25');
var c12 = document.getElementById('check26');
var c12 = document.getElementById('check27');
var c12 = document.getElementById('check28');
var c12 = document.getElementById('check29');
var c12 = document.getElementById('check30');
var c12 = document.getElementById('check31');
var c12 = document.getElementById('check32');
var c12 = document.getElementById('check33');
var c12 = document.getElementById('check34');
var c12 = document.getElementById('check35');
var c12 = document.getElementById('check36');
var c12 = document.getElementById('check37');
var c12 = document.getElementById('check38');
var c12 = document.getElementById('check39');
var c12 = document.getElementById('check40');
var cont = document.getElementById('container1');
var cont2 = document.getElementById('container2');
var cont3 = document.getElementById('container3');
var cont4 = document.getElementById('container4');
var cont5 = document.getElementById('container5');
var cont6 = document.getElementById('container6');
var cont7 = document.getElementById('container7');
var cont8 = document.getElementById('container8');
var cont9 = document.getElementById('container9');
var cont10 = document.getElementById('container10');
var botao = document.getElementById('btn');
var botao = document.getElementById('tudo');
var pontos = document.getElementById('pontuacao');
var acertos = document.getElementById('certos');
var erros = document.getElementById('errados');
var resultado = document.getElementById('result');
var imgseta = document.getElementById('imgvolta');
const sobe = [];
var points = 0;
var acertospoints = 0;
var errospoints = 0;


const botoes1 = document.querySelectorAll('#container1 input');
botoes1.forEach(botoes1 => {
	botoes1.addEventListener('click',() => {
		const botao1 = document.querySelectorAll('#container1 input');
		
		botao1.forEach(botao1 => {
			botao1.checked = false;
		})
		botoes1.checked = true;
		sobe[0] = true;
	})

})


const botoes2 = document.querySelectorAll('#container2 input');

botoes2.forEach(botoes2 => {
	botoes2.addEventListener('click',() => {
		const botao2 = document.querySelectorAll('#container2 input');
		
		botao2.forEach(botao2 => {
			botao2.checked = false;
		})
		botoes2.checked = true;
		sobe[1] = true;
	})

})


const botoes3 = document.querySelectorAll('#container3 input');

botoes3.forEach(botoes3 => {
	botoes3.addEventListener('click',() => {
		const botao3 = document.querySelectorAll('#container3 input');
		
		botao3.forEach(botao3 => {
			botao3.checked = false;
		})
		botoes3.checked = true;
		sobe[2] = true;
	})

})

const botoes4 = document.querySelectorAll('#container4 input');

botoes4.forEach(botoes4 => {
	botoes4.addEventListener('click',() => {
		const botao4 = document.querySelectorAll('#container4 input');
		
		botao4.forEach(botao4 => {
			botao4.checked = false;
		})
		botoes4.checked = true;
		sobe[3] = true;
	})

})

const botoes5 = document.querySelectorAll('#container5 input');

botoes5.forEach(botoes5 => {
	botoes5.addEventListener('click',() => {
		const botao5 = document.querySelectorAll('#container5 input');
		
		botao5.forEach(botao5 => {
			botao5.checked = false;
		})
		botoes5.checked = true;
		sobe[4] = true;
	})

})

const botoes6 = document.querySelectorAll('#container6 input');

botoes6.forEach(botoes6 => {
	botoes6.addEventListener('click',() => {
		const botao6 = document.querySelectorAll('#container6 input');
		
		botao6.forEach(botao6 => {
			botao6.checked = false;
		})
		botoes6.checked = true;
		sobe[5] = true;
	})

})

const botoes7 = document.querySelectorAll('#container7 input');

botoes7.forEach(botoes7 => {
	botoes7.addEventListener('click',() => {
		const botao7 = document.querySelectorAll('#container7 input');
		
		botao7.forEach(botao7 => {
			botao7.checked = false;
		})
		botoes7.checked = true;
		sobe[6] = true;
	})

})

const botoes8 = document.querySelectorAll('#container8 input');

botoes8.forEach(botoes8 => {
	botoes8.addEventListener('click',() => {
		const botao8 = document.querySelectorAll('#container8 input');
		
		botao8.forEach(botao8 => {
			botao8.checked = false;
		})
		botoes8.checked = true;
		sobe[7] = true;
	})

})

const botoes9 = document.querySelectorAll('#container9 input');

botoes9.forEach(botoes9 => {
	botoes9.addEventListener('click',() => {
		const botao9 = document.querySelectorAll('#container9 input');
		
		botao9.forEach(botao9 => {
			botao9.checked = false;
		})
		botoes9.checked = true;
		sobe[8] = true;	
	})

})

const botoes10 = document.querySelectorAll('#container10 input');

botoes10.forEach(botoes10 => {
	botoes10.addEventListener('click',() => {
		const botao10 = document.querySelectorAll('#container10 input');
		
		botao10.forEach(botao10 => {
			botao10.checked = false;
		})
		botoes10.checked = true;
		sobe[9] = true;
	})

})
function Teste(){
	if(sobe[0] && sobe[1] && sobe[1] && sobe[2] && sobe[3] && sobe[4] && sobe[5] && sobe[6] && sobe[7] && sobe[8] && sobe[9]){
		respostas()
	}else{
	Swal.fire({ 
    title: 'Preencha todas as questões!!', 
    imageUrl: '../IMAGEM/alerta.png', 
    imageWidth: 100, 
    imageHeight: 100, 
    imageAlt: 'Imagem de exemplo', 
    confirmButtonText: 'OK'
    });
	}
}

	function Top(){
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;	
	}

	function Reset(){
	document.location.reload(true);	
	}

	
function respostas(){

	if (check3.checked){
	check1.disabled = true;
	check2.disabled = true;
	check3.disabled = true;
	check4.disabled = true;
	container1.style.background = "green";	
	container1.style.transition = "5s";
	container1.style.color = "white";
	points++
	acertospoints++		

}else if (check1.checked){
	check1.disabled = true;
	check2.disabled = true;
	check3.disabled = true;
	check4.disabled = true;
	container1.style.background = "red";	
	container1.style.transition = "5s";		
	container1.style.color = "white";
	points = points
	errospoints++

}else if (check2.checked){
	check1.disabled = true;
	check2.disabled = true;
	check3.disabled = true;
	check4.disabled = true;
	container1.style.background = "red";	
	container1.style.transition = "5s";		
	container1.style.color = "white";
	points = points
	errospoints++

}else if (check3.checked){
	check1.disabled = true;
	check2.disabled = true;
	check3.disabled = true;
	check4.disabled = true;
	container1.style.background = "red";	
	container1.style.transition = "5s";		
	container1.style.color = "white";
	points = points
	errospoints++
}

if (check5.checked){
	check5.disabled = true;
	check6.disabled = true;
	check7.disabled = true;
	check8.disabled = true;
	container2.style.background = "green";	
	container2.style.transition = "5s";		
	container2.style.color = "white";		
	points++
	acertospoints++

}else if (check6.checked){
	check5.disabled = true;
	check6.disabled = true;
	check7.disabled = true;
	check8.disabled = true;
	container2.style.background = "red";	
	container2.style.transition = "5s";		
	container2.style.color = "white";
	points = points
	errospoints++

}else if (check7.checked){
	check5.disabled = true;
	check6.disabled = true;
	check7.disabled = true;
	check8.disabled = true;
	container2.style.background = "red";	
	container2.style.transition = "5s";		
	container2.style.color = "white";
	points = points
	errospoints++

}else if (check8.checked){
	check5.disabled = true;
	check6.disabled = true;
	check7.disabled = true;
	check8.disabled = true;
	container2.style.background = "red";	
	container2.style.transition = "5s";		
	container2.style.color = "white";
	points = points
	errospoints++
}

if (check12.checked){
	check9.disabled = true;
	check10.disabled = true;
	check11.disabled = true;
	check12.disabled = true;
	container3.style.background = "green";	
	container3.style.transition = "5s";		
	container3.style.color = "white";		
	points++
	acertospoints++

}else if (check9.checked){
	check9.disabled = true;
	check10.disabled = true;
	check11.disabled = true;
	check12.disabled = true;
	container3.style.background = "red";	
	container3.style.transition = "5s";		
	container3.style.color = "white";
	points = points
	errospoints++

}else if (check10.checked){
	check9.disabled = true;
	check10.disabled = true;
	check11.disabled = true;
	check12.disabled = true;
	container3.style.background = "red";	
	container3.style.transition = "5s";		
	container3.style.color = "white";
	points = points
	errospoints++

}else if (check11.checked){
	check9.disabled = true;
	check10.disabled = true;
	check11.disabled = true;
	check12.disabled = true;
	container3.style.background = "red";	
	container3.style.transition = "5s";		
	container3.style.color = "white";
	points = points
	errospoints++
}

if (check14.checked){
	check13.disabled = true;
	check14.disabled = true;
	check15.disabled = true;
	check16.disabled = true;
	container4.style.background = "green";	
	container4.style.transition = "5s";		
	container4.style.color = "white";		
	points++
	acertospoints++

}else if (check13.checked){
	check13.disabled = true;
	check14.disabled = true;
	check15.disabled = true;
	check16.disabled = true;
	container4.style.background = "red";	
	container4.style.transition = "5s";		
	container4.style.color = "white";
	points = points
	errospoints++

}else if (check15.checked){
	check13.disabled = true;
	check14.disabled = true;
	check15.disabled = true;
	check16.disabled = true;
	container4.style.background = "red";	
	container4.style.transition = "5s";		
	container4.style.color = "white";
	points = points
	errospoints++

}else if (check16.checked){
	check13.disabled = true;
	check14.disabled = true;
	check15.disabled = true;
	check16.disabled = true;
	container4.style.background = "red";	
	container4.style.transition = "5s";		
	container4.style.color = "white";
	points = points
	errospoints++
}

if (check19.checked){
	check17.disabled = true;
	check18.disabled = true;
	check19.disabled = true;
	check20.disabled = true;
	container5.style.background = "green";	
	container5.style.transition = "5s";		
	container5.style.color = "white";		
	points++
	acertospoints++

}else if (check17.checked){
	check17.disabled = true;
	check18.disabled = true;
	check19.disabled = true;
	check20.disabled = true;
	container5.style.background = "red";	
	container5.style.transition = "5s";		
	container5.style.color = "white";
	points = points
	errospoints++

}else if (check18.checked){
	check17.disabled = true;
	check18.disabled = true;
	check19.disabled = true;
	check20.disabled = true;
	container5.style.background = "red";	
	container5.style.transition = "5s";		
	container5.style.color = "white";
	points = points
	errospoints++

}else if (check20.checked){
	check17.disabled = true;
	check18.disabled = true;
	check19.disabled = true;
	check20.disabled = true;
	container5.style.background = "red";	
	container5.style.transition = "5s";		
	container5.style.color = "white";
	points = points
	errospoints++
}

if (check23.checked){
	check21.disabled = true;
	check22.disabled = true;
	check23.disabled = true;
	check24.disabled = true;
	container6.style.background = "green";	
	container6.style.transition = "5s";		
	container6.style.color = "white";		
	points++
	acertospoints++

}else if (check21.checked){
	check21.disabled = true;
	check22.disabled = true;
	check23.disabled = true;
	check24.disabled = true;
	container6.style.background = "red";	
	container6.style.transition = "5s";		
	container6.style.color = "white";
	points = points
	errospoints++

}else if (check22.checked){
	check21.disabled = true;
	check22.disabled = true;
	check23.disabled = true;
	check24.disabled = true;
	container6.style.background = "red";	
	container6.style.transition = "5s";		
	container6.style.color = "white";
	points = points
	errospoints++

}else if (check24.checked){
	check21.disabled = true;
	check22.disabled = true;
	check23.disabled = true;
	check24.disabled = true;
	container6.style.background = "red";	
	container6.style.transition = "5s";		
	container6.style.color = "white";
	points = points
	errospoints++
}

if (check25.checked){
	check25.disabled = true;
	check26.disabled = true;
	check27.disabled = true;
	check28.disabled = true;
	container7.style.background = "green";	
	container7.style.transition = "5s";		
	container7.style.color = "white";		
	points++
	acertospoints++

}else if (check26.checked){
	check25.disabled = true;
	check26.disabled = true;
	check27.disabled = true;
	check28.disabled = true;
	container7.style.background = "red";	
	container7.style.transition = "5s";		
	container7.style.color = "white";
	points = points
	errospoints++

}else if (check27.checked){
	check25.disabled = true;
	check26.disabled = true;
	check27.disabled = true;
	check28.disabled = true;
	container7.style.background = "red";	
	container7.style.transition = "5s";		
	container7.style.color = "white";
	points = points
	errospoints++

}else if (check28.checked){
	check25.disabled = true;
	check26.disabled = true;
	check27.disabled = true;
	check28.disabled = true;
	container7.style.background = "red";	
	container7.style.transition = "5s";		
	container7.style.color = "white";
	points = points
	errospoints++
}

if (check32.checked){
	check29.disabled = true;
	check30.disabled = true;
	check31.disabled = true;
	check32.disabled = true;
	container8.style.background = "green";	
	container8.style.transition = "5s";		
	container8.style.color = "white";		
	points++
	acertospoints++

}else if (check29.checked){
	check29.disabled = true;
	check30.disabled = true;
	check31.disabled = true;
	check32.disabled = true;
	container8.style.background = "red";	
	container8.style.transition = "5s";		
	container8.style.color = "white";
	points = points
	errospoints++

}else if (check30.checked){
	check29.disabled = true;
	check30.disabled = true;
	check31.disabled = true;
	check32.disabled = true;
	container8.style.background = "red";	
	container8.style.transition = "5s";		
	container8.style.color = "white";
	points = points
	errospoints++

}else if (check31.checked){
	check29.disabled = true;
	check30.disabled = true;
	check31.disabled = true;
	check32.disabled = true;
	container8.style.background = "red";	
	container8.style.transition = "5s";		
	container8.style.color = "white";
	points = points
	errospoints++
}

if (check34.checked){
	check33.disabled = true;
	check34.disabled = true;
	check35.disabled = true;
	check36.disabled = true;
	container9.style.background = "green";	
	container9.style.transition = "5s";		
	container9.style.color = "white";		
	points++
	acertospoints++

}else if (check33.checked){
	check33.disabled = true;
	check34.disabled = true;
	check35.disabled = true;
	check36.disabled = true;
	container9.style.background = "red";	
	container9.style.transition = "5s";		
	container9.style.color = "white";
	points = points
	errospoints++

}else if (check35.checked){
	check33.disabled = true;
	check34.disabled = true;
	check35.disabled = true;
	check36.disabled = true;
	container9.style.background = "red";	
	container9.style.transition = "5s";		
	container9.style.color = "white";
	points = points
	errospoints++

}else if (check36.checked){
	check33.disabled = true;
	check34.disabled = true;
	check35.disabled = true;
	check36.disabled = true;
	container9.style.background = "red";	
	container9.style.transition = "5s";		
	container9.style.color = "white";
	points = points
	errospoints++
}

if (check38.checked){
	check37.disabled = true;
	check38.disabled = true;
	check39.disabled = true;
	check40.disabled = true;
	container10.style.background = "green";	
	container10.style.transition = "5s";		
	container10.style.color = "white";		
	points++
	acertospoints++

}else if (check37.checked){
	check37.disabled = true;
	check38.disabled = true;
	check39.disabled = true;
	check40.disabled = true;
	container10.style.background = "red";	
	container10.style.transition = "5s";		
	container10.style.color = "white";
	points = points
	errospoints++

}else if (check39.checked){
	check37.disabled = true;
	check38.disabled = true;
	check39.disabled = true;
	check40.disabled = true;
	container10.style.background = "red";	
	container10.style.transition = "5s";		
	container10.style.color = "white";
	points = points
	errospoints++

}else if (check40.checked){
	check37.disabled = true;
	check38.disabled = true;
	check39.disabled = true;
	check40.disabled = true;
	container10.style.background = "red";	
	container10.style.transition = "5s";		
	container10.style.color = "white";
	points = points
	errospoints++
}
	certos.textContent = "Você acertou "+acertospoints+" questões.";
	if (errospoints == 1){
	errados.textContent = "Você errou "+errospoints+" questão.";	
	}else{
	errados.textContent = "Você errou "+errospoints+" questões.";
}
	btn.innerHTML = "Enviado!";
	btn.disabled = true;

setTimeout(function(){tudo.style.cssText = 'display: none';result.style.cssText = 'display: block';imgvolta.style.cssText = 'display: none'},5500)

if (points == 0) {
points = ((points/10)*100);
pontuacao.innerHTML = ("Sua pontuação foi de "+points+"%.");

}else if (points == 1){
points = ((points/10)*100);
pontuacao.innerHTML = ("Sua pontuação foi de "+points+"%.");

}else if (points == 2){
points = ((points/10)*100);
pontuacao.innerHTML = ("Sua pontuação foi de "+points+"%.");

}else if (points == 3){
points = ((points/10)*100);
pontuacao.innerHTML = ("Sua pontuação foi de "+points+"%.");

}else if (points == 4){
points = ((points/10)*100);
pontuacao.innerHTML = ("Sua pontuação foi de "+points+"%.");
}else if (points == 5){
points = ((points/10)*100);
pontuacao.innerHTML = ("Sua pontuação foi de "+points+"%.");
}else if (points == 6){
points = ((points/10)*100);
pontuacao.innerHTML = ("Sua pontuação foi de "+points+"%.");
}else if (points == 7){
points = ((points/10)*100);
pontuacao.innerHTML = ("Sua pontuação foi de "+points+"%.");
}else if (points == 8){
points = ((points/10)*100);
pontuacao.innerHTML = ("Sua pontuação foi de "+points+"%.");
}else if (points == 9){
points = ((points/10)*100);
pontuacao.innerHTML = ("Sua pontuação foi de "+points+"%.");
}else if (points == 10){
points = ((points/10)*100);
pontuacao.innerHTML = ("Sua pontuação foi de "+points+"%.");
}
}
