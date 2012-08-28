$(document).ready(function(){
	//----------------------- validar campos-------------------------
	
	var fecha = new Date();
	var mes = fecha.getMonth()+1;
	var dia = fecha.getDate();
	var ano = fecha.getFullYear();
	
	if(mes <= 9){
		mes = '0' + mes;
	}
	fechaActual = mes + '/' + dia + '/' + ano;
	
	$('#fecha').val(fechaActual);
	
	$('.obli').blur(function(){
		var nombre = $(this).attr('id');
		if(!$(this).val()){
			alert('debe llenar el campo ' + nombre);
			$(this).css({border: '#ff0000 solid 1px'})
		}else
		{
			$(this).css({border: '#96BE0F solid 1px'})
		}
				
		if(nombre == 'email'){
			if (!$(this).val() || !/.+@.+\.[a-zA-Z]{2,4}$/.test($('#email').val())) {
	        	alert('debes ingresar un email valido');
	        	$(this).css({border: '#ff0000 solid 1px'})
      		}else
		{
			$(this).css({border: '#96BE0F solid 1px'})
		}
		}
		
		if(nombre == 'telefono'){
			if ($(this).val().length < 7 || $(this).val().length > 7) {
        		alert('debes ingresar 7 digitos');
        		$(this).css({border: '#ff0000 solid 1px'})
      		}else
      		{
      			$(this).css({border: '#96BE0F solid 1px'})
      		}
		}
	});
	
	$('.blur').blur(function(){
		var nombre = $(this).attr('id');
		var valor = $(this).val();
		if(isNaN(valor)){
			alert('debes ingresar solo números en el ' + nombre);
			$(this).css({border: '#ff0000 solid 1px'})
		}else if(nombre == 'celular'){
			$(this).css({border: '#4898D9 solid 1px'})
		}
		
		
	});
	
	$('#formInfo').submit(function(){
		var envio = true; 
		var resultado = '';
		var obligatorios = 1;
		
		$('#formInfo input').each(function(){
										   
			var nombre = $(this).attr('id');
			var nombreClass = $(this).attr('class');
			
			//alert(nombre);
			//alert(nombreClass);
			
			
			if(nombreClass == 'obli'){
				if(nombre == 'email'){
					if(!$(this).val() || !/.+@.+\.[a-zA-Z]{2,4}$/.test($(this).val())){
						obligatorios++;
						//alert('debes ingresar un email valido');
						resultado += 'debe ingresar un ' + nombre + ' valido \n';
						envio = false;
					}
				}else{
				if(!$(this).val()){
					obligatorios++;
					//alert('debe ingresar su ' + nombre);
					resultado += nombre + '\n';
					envio = false;
				}
			}
			}
			
			if(nombreClass == 'obli blur'){
				if(!$(this).val()){
					obligatorios++;
					//alert('debe ingresar su ' + nombre);
					resultado += nombre + '\n';
					envio = false;
				}
				
				if(isNaN($(this).val())){
					alert('debe ingresar solo numeros en el ' + nombre);
					envio = false;
				}
				
				if ($(this).val().length < 7 || $(this).val().length > 7) {
        			alert('debes ingresar 7 digitos en el telefono');
					envio = false;
      			}
			}
			
			if(nombreClass == 'blur'){
				
				if(isNaN($(this).val())){
					alert('debe ingresar solo numeros en el ' + nombre);
					envio = false;
				}
			}
			
		})
			if(obligatorios > 1){
				alert('debes llenar los siguientes campos obligatorios: \n' + resultado);
			}
			return envio;
	
	})
	//------------------------------------------------------

}); 
