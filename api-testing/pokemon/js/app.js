$( document ).ready(function() {
  console.log( 'ready!' );
  $.ajax({
  	url: "http://pokeapi.co/api/v2/pokemon/1/",
  	type: 'GET',
  	dataType: 'json',
  	success(response){
  		console.log("We did it");
  	}
  	error(jqXHR, status, errorThrown){
  		console.log("Error");
  	}

  })
  $('#request').click(function(e){
  	$('h1').toggleClass('grow');
  })
});