var sondaLinha, sondaColuna, tamanhoSonda, tamanhoLinha, tamanhoColuna, orientacaoSonda, qtdLinhas, qtdColunas;

var img = new Image();
img.src = "images/robo.png";

$("#marsRover").hide();

function automatico(opcao){
	switch(opcao) {
		case "N":
			$("div.tab>div.tab-content").removeClass("active");
			$("div.tab>div.tab-content").eq(2).addClass("active");
			
			$("#inicio").addClass("disabled");
			$("#inicio").removeClass("active");
			$("#campo").removeClass("disabled");
			$("#campo").addClass("active");
			
			break;
		case "S":
			$("div.tab>div.tab-content").removeClass("active");
			$("div.tab>div.tab-content").eq(1).addClass("active");
			
			$("#inicio").addClass("disabled");
			$("#inicio").removeClass("active");
			$("#teste").removeClass("disabled");
			$("#teste").addClass("active");
			break;
		default: break;
	}
}

regex = /([0-9]+ [0-9]+(\n[0-9]+ [0-9]+ [NEOS]\n[LMR]+)+)/g;
var pattern = new RegExp(regex);

function testeAutomatico(){
	var posicaoSonda, movimentoSonda;
	var input = $('#input').val();
	
	var res = pattern.test(input);
	if(!res){
		alert("Entrada incorreta.");
		return;
	}
	
	comando = input.split("\n");
	arena = comando.shift().split(" ");	
	qtdColunas = arena.shift();
	qtdLinhas = arena.shift();
	
	if((qtdLinhas > 25) || (qtdColunas > 25) || (qtdLinhas < 1) || (qtdColunas < 1)){
		alert("Tamanho da arena deve ser entre 1 e 25 tanto para coluna quanto para linha.");
		return;
	}
	
	$("#formulario").hide();
	$("#controles").hide();
	$("#marsRover").show();
	
	var sonda = new Array(comando.length/2)
	for (i = 0; i <= comando.length/2; i++){
		posicaoSonda = comando.shift().split(" ");
		movimentoSonda = comando.shift().split("");
		sonda[i] = new Array("sonda"+i, posicaoSonda, movimentoSonda);
	}
	
	for (k = 0; k < sonda.length; k++){
		sondaColuna = sonda[k][1][0];
		sondaLinha = sonda[k][1][1];
		orientacaoSonda = sonda[k][1][2];
		if(testaSonda()){
			for (l = 0; l < sonda[k][2].length; l++){
				funcao(sonda[k][2][l]);
				montarArena();
			}
			alert("A posi\u00e7\u00e3o final da sonda \u00e9:\nColuna: " + sondaColuna + " Linha: " + sondaLinha + " Orienta\u00e7\u00e3o: " + orientacaoSonda);
		}
	}	
}

function testaSonda(){
	if((sondaColuna > qtdColunas) || (sondaLinha > qtdLinhas) || (sondaColuna < 1) || (sondaLinha < 1)){
		alert("A sonda deve ser posicionada dentro da arena! ");
		return false;
	}else{
		return true;
	}
}

function definir(opcao){
	switch(opcao){
		case "sonda":
			$("div.tab>div.tab-content").removeClass("active");
			$("div.tab>div.tab-content").eq(4).addClass("active");
			
			sondaColuna = $('#colunaSonda').val();
			sondaLinha = $('#linhaSonda').val();
			orientacaoSonda = $('#orientacaoSonda').val();
			
			$("#sonda").addClass("disabled");
			$("#sonda").removeClass("active");
			$("#controles").removeClass("disabled");
			$("#controles").addClass("active");
			
			$("#formulario").hide();
			$("#marsRover").show();
			montarArena();
		break;
		case "campo":
			$("div.tab>div.tab-content").removeClass("active");
			$("div.tab>div.tab-content").eq(3).addClass("active");
		
			qtdLinhas = $('#qtdLinhas').val();
			qtdColunas = $('#qtdColunas').val();
			
			$('#linhaSonda').attr({"max":$('#qtdLinhas').val()});
			$('#colunaSonda').attr({"max":$('#qtdColunas').val()});
			
			$("#campo").addClass("disabled");
			$("#campo").removeClass("active");
			$("#sonda").removeClass("disabled");
			$("#sonda").addClass("active");
		break;
		default: break;
	}
}

function montarArena(){
	var canvas = document.getElementById('arena');
	var alturaCanvas = 498;
	var larguraCanvas = 598;
	tamanhoLinha = alturaCanvas/qtdLinhas;
	tamanhoColuna = larguraCanvas/qtdColunas;
	
	tamanhoLinha > tamanhoColuna ? tamanhoSonda = tamanhoColuna : tamanhoSonda = tamanhoLinha;
	
	context = canvas.getContext('2d');
	context.strokeStyle = '#000000';
	context.fillStyle = '#fff';
	context.clearRect(1, 1, larguraCanvas, alturaCanvas);
	
	for (i=0;i<=qtdLinhas;i++){
		for (j=0;j<=qtdColunas;j++){
			context.strokeRect(tamanhoColuna * j, tamanhoLinha * i, tamanhoColuna, tamanhoLinha);
			if ((i == sondaLinha) && (j == sondaColuna)) {
				posicionarSonda(context, tamanhoSonda, tamanhoLinha * i, tamanhoColuna * j);
			}
		}	
	}
	
	$('#output').html("<h1>Posi\u00e7\u00e3o da sonda:</h1><br/>Coluna: " + sondaColuna + " Linha: " + sondaLinha + " Orienta\u00e7\u00e3o: " + orientacaoSonda);
}

function posicionarSonda(context, tamanho, y, x){
	posX = x - tamanho - (1/qtdColunas);
	posY = y - tamanho - (1/qtdLinhas);
	
	var angulo = orientacaoSonda === 'N' ? 0 : orientacaoSonda === 'E' ? 90 : orientacaoSonda === 'S' ? 180 : 270;
	
	context.save();
	context.translate(posX + (tamanho / 2), posY + (tamanho / 2));
	context.rotate((angulo * Math.PI) / 180);
	context.drawImage(img, -tamanho / 2, -tamanho / 2, tamanho * 0.9, tamanho * 0.9);
	context.restore();
}


function funcao(opcao){
	opcao === 'L' ? girarEsquerda() : opcao === 'R' ? girarDireita() : mover();
	montarArena();
}

function girarDireita(){
	orientacaoSonda = orientacaoSonda === 'N' ? 'E' : orientacaoSonda === 'E' ? 'S' : orientacaoSonda === 'S' ? 'W'	: 'N';
}

function girarEsquerda(){
	orientacaoSonda = orientacaoSonda === 'N' ? 'W' : orientacaoSonda === 'E' ? 'N' : orientacaoSonda === 'S' ? 'E'	: 'S';
}

function mover(){
	orientacaoSonda === 'N' ? (sondaLinha == 1 ? console.log("Imposs\u00edvel realizar o movimento.") : sondaLinha-- ) : 
	orientacaoSonda === 'E' ? (sondaColuna == qtdColunas ? console.log("Imposs\u00edvel realizar o movimento.") : sondaColuna++ ) : 
	orientacaoSonda === 'S' ? (sondaLinha == qtdLinhas ? console.log("Imposs\u00edvel realizar o movimento.") : sondaLinha++ )	: 
	(sondaColuna == 1 ? console.log("Imposs\u00edvel realizar o movimento.") : sondaColuna-- );
}

function resetar(form){
	switch(form) {
		case "campo":
			$('#larguraCampo').val(1);
			$('#alturaCampo').val(1);
			break;
		case "sonda":
			$('#poSondaY').val(1);
			$('#poSondaX').val(1);
			break;
		default: break;
	}
}

$(function(){		
	$('.spinner .btn:first-of-type').on('click', function() {
		var btn = $(this);
		var input = btn.closest('.spinner').find('input');
		if (input.attr('max') == undefined || parseInt(input.val()) < parseInt(input.attr('max'))) {    
			input.val(parseInt(input.val(), 10) + 1);
		}else{
			btn.next("disabled", true);
		}
	});
	$('.spinner .btn:last-of-type').on('click', function() {
		var btn = $(this);
		var input = btn.closest('.spinner').find('input');
		if (input.attr('min') == undefined || parseInt(input.val()) > parseInt(input.attr('min'))) {    
			input.val(parseInt(input.val(), 10) - 1);
		} else {
			btn.prev("disabled", true);
		}
	});
});

$(document).ready(function() {
    $("div.tab-menu>div.list-group>a").click(function(e) {
		
		if ($(this).hasClass("disabled")) {
			e.preventDefault();
			return false;
		}
		
        e.preventDefault();
        $(this).siblings('a.active').removeClass("active");
        $(this).addClass("active");
        var index = $(this).index();
        $("div.tab>div.tab-content").removeClass("active");
        $("div.tab>div.tab-content").eq(index).addClass("active");
    });
});

$('#radioBtn a').on('click', function(){
	var sel = $(this).data('title');
	var tog = $(this).data('toggle');
	$('#'+tog).prop('value', sel);

	$('a[data-toggle="'+tog+'"]').not('[data-title="'+sel+'"]').removeClass('active').addClass('notActive');
	$('a[data-toggle="'+tog+'"][data-title="'+sel+'"]').removeClass('notActive').addClass('active');
});