const urlPokemon = "https://pokeapi.co/api/v2/pokemon/19/";

function Pokemon()
{
    const resultados = document.getElementById("resultados");

    fetch(urlPokemon)
        .then(res => res.json())
        .then(data =>
        {
            resultados.textContent =
                "Habilities (1): " + data.abilities[1].is_hidden + "\n" +
                "Name: " + data.name + "\n" +
                "Games_indices (5): " + data.game_indices[5].version.name + "\n" +
                "Moves (2): " + data.moves[2].move.name;
        })
        .catch(error =>
        {
            resultados.textContent = "Error, aumente el sueldo de su programador";
            resultados.classList.add("error");
        });
}