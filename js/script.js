$(document).ready(function () {
	
	const textoIngresado     = document.querySelector(".text-input");
	const mensajeEncriptado  = document.querySelector("#msg");

	const regexp = /^[a-z0-9 ]+$/;
	
$(".btn-encriptar").click(function(){

	if (!regexp.test(textoIngresado.value)) {

		return alert("Solo debes usar letras minúsculas sin acento");
	}
		else {
			 
				$('.pop-up').addClass('show');
				$('.pop-up-wrap').addClass('show');

 				texto = textoIngresado.value;
    			textoEncriptado = texto.replaceAll("e", "enter")
						   .replaceAll( 'i', "imes")
						   .replaceAll('a', 'ai')
  						   .replaceAll("o", "ober")
  						   .replaceAll("u", "ufat");
    			mensajeEncriptado.value = textoEncriptado;
		}
				 
});

$(".btn-desencriptar").click(function(){	

	if (!regexp.test(textoIngresado.value)) {

		return alert("Solo debes usar letras minúsculas sin acento");
	}
		else {

				$('.pop-up').addClass('show');
				$('.pop-up-wrap').addClass('show');

				texto = textoIngresado.value;
    			textoDesencriptado = texto.replaceAll("ai", "a")
						 	  .replaceAll("enter", "e")
						      .replaceAll( "imes", "i")
						      .replaceAll("ober", "o")
						      .replaceAll("ufat", "u");
    
    			mensajeEncriptado.value = textoDesencriptado;
		}
});
	

$('#btn-close').click(function(){
	$('.pop-up').removeClass('show');
	$('.pop-up-wrap').removeClass('show');
});

$("#btn-copy").click(function(){
	$('.text-output').select();
	document.execCommand('copy')

	tooltip.classList.add('active');
		setTimeout(() => {
			tooltip.classList.remove('active');
		}, 1500);
})

}); 


   

