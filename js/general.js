$(document).ready(actual)

function actual(){
	var urlactual = location.href;
	if(urlactual == "http://www.legissoft.com/")
	{
		$('#navContenido li a:eq(0)').addClass('itemMenuActual');
	}
	else
	{
		posicionAct = urlactual.lastIndexOf('/');
		urlactual = urlactual.slice(posicionAct + 1);
		//alert(urlactual);
		$('#navContenido a').each(function() {
		var urlBtn = $(this).attr('href')
		if(urlactual == urlBtn){
			$(this).addClass('itemMenuActual');
		}
	});
	}

	efectos()
}

function efectos()
{
	$('#navDescargas li').hover(function()
	{
		$('#navDescargas .trinagulo, #navDocs').stop().fadeTo('normal', 1);
	}, 
	function()
	{
		$('#navDescargas .trinagulo, #navDocs').stop().fadeTo('normal', 0, function(){
			$(this).hide();
		});
	});





	$('#navContenido > li:eq(1)').hover(function()
	{
		$('#navContenido > li:eq(1) .trinagulo, #navSoluciones').stop().fadeTo('normal', 1);
	}, 
	function()
	{
		$('#navContenido > li:eq(1) .trinagulo, #navSoluciones').stop().fadeTo('normal', 0, function(){
			$(this).hide();
		});
	});


	$('#navContenido > li:eq(2)').hover(function()
	{
		$('#navContenido > li:eq(2) .trinagulo, #navModulos').stop().fadeTo('normal', 1);
	}, 
	function()
	{
		$('#navContenido > li:eq(2) .trinagulo, #navModulos').stop().fadeTo('normal', 0, function(){
			$(this).hide();
		});
	});






	$('#facebook').hover(function()
	{
		$(this).parent().next().stop().fadeTo('normal', 0.3);
	}, 
	function()
	{
		$(this).parent().next().stop().fadeTo('normal', 1);
	});

	$('#twitter').hover(function()
	{
		$(this).parent().prev().stop().fadeTo('normal', 0.3);
	}, 
	function()
	{
		$(this).parent().prev().stop().fadeTo('normal', 1);
	});



	$('#modulos li').hover(function()
	{
		$(this).siblings().stop().fadeTo('normal', 0.3);
	}, 
	function()
	{
		$(this).siblings().stop().fadeTo('normal', 1);
	});

	//Clono el menu de desacargas

	$('#navDocs').clone().appendTo('#mapa div');

	// ubico el clon en el boton de descargas del footer
	$('#mapa #navDocs').attr('id', 'fooDocs')

	$('#mapa div a').hover(function()
	{
		$('#fooDocs').stop().fadeTo('normal', 1);
	}, 
	function()
	{
		$('#fooDocs').stop().fadeTo('normal', 0, function(){
			$(this).hide();
		});
	});
} 