fetch(url)
 .then(function(response) {
 return response.json();
 })
 .then(function(data) {
 // Datos del Pokémon aquí
 console.log(data);
 })
 .catch(function(error) {
 alert("¡Error! Pokémon no encontrado");
 }); 
