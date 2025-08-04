function searchPokemon() {
    const busqueda = document.getElementById("boton-busqueda");
    let pokemonActual = {};
    busqueda.addEventListener("click", function (event) {
        event.preventDefault();
        const nombre = document.getElementById("pokemonNombre").value.toLowerCase();
        const url = `https://pokeapi.co/api/v2/pokemon/${nombre}`;

        fetch(url)
            .then(function (response) {
                if (!response.ok) {
                    throw new Error("Pokémon no encontrado");
                }
                return response.json();
            })
        .then(function (data) {
            pokemonActual = {
                nombre: data.name,
                id: data.id,
                imagen: data.sprites.front_default,
                tipo: data.types.map(t => t.type.name).join(", ")
            };
            mostrarPokemon(pokemonActual);
        })
            .catch(function (error) {
                // Solo muestra la alerta si el error es por Pokémon no encontrado
                if (error.message === "Pokémon no encontrado") {
                    alert("¡Error! Pokémon no encontrado");
                } else {
                    console.error(error);
                }
            });
    });
}
function mostrarPokemon(pokemon) {
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = `
        <div class="pokemon-card">
            <img src="${pokemon.imagen}" alt="${pokemon.nombre}">
            <h3>${pokemon.nombre}</h3>
            <p>ID: ${pokemon.id}</p>
            <p>Tipo: ${pokemon.tipo}</p>    
            <button id="guardar-favorito">Guardar como favorito</button>
        </div>
    `;

    document.getElementById('guardar-favorito').addEventListener('click', guardarFavorito);
}
searchPokemon();