var sondaLinha;
var sondaColuna;
var tamanhoSonda;
var tamanhoLinha;
var tamanhoColuna;
var orientacaoSonda;
var qtdLinhas;
var qtdColunas;
var comando;

var img = new Image();
img.src = "images/robo.png";

$("#controles").hide();
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

function testeAutomatico(){

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
			$("#controles").show();
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
	var heightCanvas = 498;
	var widthCanvas = 598;
	tamanhoLinha = widthCanvas/qtdLinhas;
	tamanhoColuna = heightCanvas/qtdColunas;
	if(tamanhoLinha > tamanhoColuna){
		tamanhoSonda = tamanhoColuna;
	}else{
		tamanhoSonda = tamanhoLinha;
	}
	context = canvas.getContext('2d');
	context.strokeStyle = '#000000';
	context.fillStyle = '#fff';
	context.clearRect(1, 1, widthCanvas, heightCanvas);
	for (i=0;i<=qtdLinhas;i++){
		for (j=0;j<=qtdColunas;j++){
			context.strokeRect(tamanhoLinha * i, tamanhoColuna * j, tamanhoLinha, tamanhoColuna);
			if ((i == sondaLinha) && (j == sondaColuna)) {
				posicionarImagem(context, tamanhoSonda, tamanhoColuna * j, tamanhoLinha * i);
			}
		}	
	}
	$('#info').html("<h1>Posi\u00e7\u00e3o da sonda:</h1><br/>Linha: " + sondaLinha + " Coluna: " + sondaColuna);
}

function posicionarImagem(context, tamanho, y, x){
	posX = x - tamanho - (1/qtdLinhas);
	posY = y - tamanho - (1/qtdColunas);
	
	var angulo = orientacaoSonda === 'N' ? 0 : orientacaoSonda === 'E' ? 90 : orientacaoSonda === 'S' ? 180 : 270;
	
	context.save();
	context.translate(posX + (tamanho / 2), posY + (tamanho / 2));
	context.rotate((angulo * Math.PI) / 180);
	context.drawImage(img, -tamanho / 2, -tamanho / 2, tamanho * 0.9, tamanho * 0.9);
	context.restore();
}


function funcao(opcao){
	switch(opcao){
		case "L":
			girarEsquerda();
			montarArena();
		break;
		case "R":
			girarDireita();
			montarArena();
		break;		
		case "M":
			switch(orientacaoSonda){
				case "N":
					if(sondaColuna == 1){
						alert("Imposs\u00edvel realizar o movimento.");
					}else{
						sondaColuna--;
						montarArena();
					}					
					break;
				case "E":
					if(sondaLinha == qtdLinhas){
						alert("Imposs\u00edvel realizar o movimento.");
					}else{
						sondaLinha++;
						montarArena();
					}
					break;		
				case "S":
					if(sondaColuna == qtdColunas){
						alert("Imposs\u00edvel realizar o movimento.");
					}else{
						sondaColuna++;
						montarArena();
					}
					break;
				case "W":
					if(sondaLinha == 1){
						alert("Imposs\u00edvel realizar o movimento.");
					}else{
						sondaLinha--;
						montarArena();
					}
					break;
				default: break;
			}
			break;
		default: break;
	}
}

function girarDireita(){
	orientacaoSonda = orientacaoSonda === 'N' ? 'E' : orientacaoSonda === 'E' ? 'S' : orientacaoSonda === 'S' ? 'W'	: 'N';
}

function girarEsquerda(){
	orientacaoSonda = orientacaoSonda === 'N' ? 'W' : orientacaoSonda === 'E' ? 'N' : orientacaoSonda === 'S' ? 'E'	: 'S';
}

function mover(){

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