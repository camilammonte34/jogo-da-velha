var jogador, vencedor = null;
var jogadorSelecionado = document.getElementById('jogador-selecionado');
var vencedorSelecionado = document.getElementById('vencedor-selecionado');
mudarJogador('X');

function chooseQuad(id){
	if (vencedor !==null){
		return;
	}
	var quadrado = document.getElementById(id);
	if(quadrado.innerHTML!=='-'){
		return;
	}
	
	quadrado.innerHTML=jogador;
	quadrado.style.background="#000";
	
	if(jogador ==='X'){
		jogador = 'O'
	}else{
		jogador = 'X';
	}
	
	mudarJogador(jogador);
	checaVencedor();

}

function mudarJogador(valor){
	jogador = valor;
	jogadorSelecionado.innerHTML = jogador;
}

function checaVencedor(){
	var quadrado1 = document.getElementById(1);
	var quadrado2 = document.getElementById(2);
	var quadrado3 = document.getElementById(3);
	var quadrado4 = document.getElementById(4);
	var quadrado5 = document.getElementById(5);
	var quadrado6 = document.getElementById(6);
	var quadrado8 = document.getElementById(8);
	var quadrado9 = document.getElementById(9);
	
	if (checarSeq(quadrado1,quadrado2,quadrado3)){
		mudaCorQuad(quadrado1,quadrado2,quadrado3);
		mudaVencedor(quadrado1);
		return;
	}
	if (checarSeq(quadrado4, quadrado5, quadrado6)){
		mudaCorQuad(quadrado4, quadrado5, quadrado6);
		mudaVencedor(quadrado4);
		return;
	}
	if (checarSeq(quadrado7, quadrado8, quadrado9)){
		mudaCorQuad(quadrado7, quadrado8, quadrado9);
		mudaVencedor(quadrado7);
		return;
	}
	if (checarSeq(quadrado1, quadrado4, quadrado7)){
		mudaCorQuad(quadrado1, quadrado4, quadrado7);
		mudaVencedor(quadrado1);
		return;
	}
	if (checarSeq(quadrado2, quadrado5, quadrado8)){
		mudaCorQuad(quadrado2, quadrado5, quadrado8);
		mudaVencedor(quadrado2);
		return;
	}
	if (checarSeq(quadrado3, quadrado6, quadrado9)){
		mudaCorQuad(quadrado3, quadrado6, quadrado9);
		mudaVencedor(quadrado3);
		return;
	}
	if (checarSeq(quadrado1, quadrado5, quadrado9)){
		mudaCorQuad(quadrado1, quadrado5, quadrado9);
		mudaVencedor(quadrado1);
		return;
	}
	if (checarSeq(quadrado3, quadrado5, quadrado7)){
		mudaCorQuad(quadrado3, quadrado5, quadrado7);
		mudaVencedor(quadrado3);
		return;
	}
}


function mudaVencedor(quadrado) {
    vencedor = quadrado.innerHTML;
    vencedorSelecionado.innerHTML = vencedor;
}

function mudaCorQuad(quadrado1,quadrado2,quadrado3){
	quadrado1.style.color="#0f0"
	quadrado2.style.color="#0f0"
	quadrado3.style.color="#0f0"
	
}

function checarSeq(quadrado1,quadrado2,quadrado3){
	var eigual = false;
	if(quadrado1.innerHTML !== '-' && quadrado1.innerHTML === quadrado2.innerHTML && quadrado2.innerHTML === quadrado3.innerHTML){
		eigual = true;
	}
	return eigual;
}

function reiniciar()
{
    vencedor = null;
    vencedorSelecionado.innerHTML = '';

    for (var i = 1; i <= 9; i++) {
        var quadrado = document.getElementById(i);
        quadrado.style.background = '#eee';
        quadrado.style.color = '#eee';
        quadrado.innerHTML = '-';
    }

    mudarJogador('X');
}

