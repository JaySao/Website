$( document ).ready(function() {
  console.log( 'ready!' );
  $.ajax({
  	url: "https://swapi.co/api/people",
  	type: 'GET',
  	dataType: 'json',
  	success(response){
      $('#request').click(function(e){
                  for(let i=0; i<10; i++){
            console.log('success'+response.results[i].name)
            $('#starwars').append('<li>'+response.results[i].name+'</li>')
          }
      })


  	}
  })
  $('#request').click(function(e){
  	$('h1').toggleClass('shrink');
  })
});